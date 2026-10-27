const recFilter = document.getElementById('recommendedFilter');
const savedFilter = document.getElementById('savedFilter');

function syncSelected(selector) {
  for (const option of selector.options) {
    const isCurrent = option.value === selector.value;
    option.toggleAttribute('selected', isCurrent);
    option.hidden = isCurrent;
  }
}

[recFilter, savedFilter].forEach(selector => {
  syncSelected(selector);
  selector.addEventListener('change', () => syncSelected(selector));
});