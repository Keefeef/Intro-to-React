import InstrumentFamilies from './models/instrument_families.js';
import SelectView from './views/select_view.js';
import InstrumentFamilyView from './views/instrument_family_view.js';
import data from './data/instrument_families.js'
//const InstrumentFamilies = require('./models/instrument_families.js');
//const SelectView = require('./views/select_view.js');
//const InstrumentFamilyView = require('./views/instrument_family_view.js');
//const data = require('./data/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  class SelectView(selectElement);
  familyDropdown.bindEvents();

  const familyContainer = document.querySelector('div#instrument-family');
  class InstrumentFamilyView(familyContainer);
  instrumentFamilyView.bindEvents();

  class InstrumentFamilies(data);
  instrumentFamilies.bindEvents();
});
