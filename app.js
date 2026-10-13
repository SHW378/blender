const viewer = document.querySelector('#shield');
const steelButton = document.querySelector('#steel');
const bronzeButton = document.querySelector('#bronze');
const normalButton = document.querySelector('#normal');
const live = document.querySelector('#live-state');
let steel, bronze, originalNormal;
const state = {steel: false, bronze: false, normal: true};

viewer.addEventListener('progress', event => {
  document.querySelector('#progress-fill').style.width = `${Math.round(event.detail.totalProgress * 100)}%`;
});
viewer.addEventListener('load', () => {
  steel = viewer.model.materials.find(m => m.name === 'Acero');
  bronze = viewer.model.materials.find(m => m.name === 'Bronce');
  if (!steel || !bronze) { showError(); return; }
  originalNormal = bronze.normalTexture.texture;
  document.body.classList.add('loaded');
  document.querySelector('#load-label').textContent = '3D EN VIVO';
  for (const button of [steelButton, bronzeButton, normalButton]) button.disabled = false;
  // The baked maps remain bound. These factors multiply their PBR values.
  bronze.pbrMetallicRoughness.setRoughnessFactor(.7);
});
function showError() {
  document.querySelector('#load-error').hidden = false;
  document.querySelector('#load-label').textContent = 'ERROR DE CARGA';
  document.body.classList.add('loaded');
}
viewer.addEventListener('error', showError);
steelButton.addEventListener('click', () => {
  state.steel = !state.steel;
  steel.pbrMetallicRoughness.setBaseColorFactor(state.steel ? [.12, .16, .20, 1] : [1, 1, 1, 1]);
  steel.pbrMetallicRoughness.setMetallicFactor(state.steel ? .85 : 1);
  steelButton.setAttribute('aria-pressed', String(state.steel));
  document.querySelector('#steel-state').textContent = state.steel ? 'Acabado oscuro' : 'Acabado claro';
  live.textContent = state.steel ? 'Acero oscuro activado.' : 'Acero claro restaurado.';
});
bronzeButton.addEventListener('click', () => {
  state.bronze = !state.bronze;
  bronze.pbrMetallicRoughness.setBaseColorFactor(state.bronze ? [.38, .57, .40, 1] : [1, 1, 1, 1]);
  bronze.pbrMetallicRoughness.setMetallicFactor(state.bronze ? .5 : 1);
  bronze.pbrMetallicRoughness.setRoughnessFactor(state.bronze ? 1 : .7);
  bronzeButton.setAttribute('aria-pressed', String(state.bronze));
  document.querySelector('#bronze-state').textContent = state.bronze ? 'Acabado envejecido' : 'Acabado pulido';
  live.textContent = state.bronze ? 'Bronce envejecido activado.' : 'Bronce pulido restaurado.';
});
normalButton.addEventListener('click', () => {
  state.normal = !state.normal;
  bronze.normalTexture.setTexture(state.normal ? originalNormal : null);
  normalButton.setAttribute('aria-pressed', String(state.normal));
  document.querySelector('#normal-state').textContent = state.normal ? 'Detalle de superficie activo' : 'Detalle de superficie desactivado';
  live.textContent = state.normal ? 'Mapa normal del bronce activado.' : 'Mapa normal del bronce desactivado. La silueta del león se conserva.';
});
