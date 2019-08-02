'use strict'
const STORAGE_KEY = 'user-color-scheme';
const COLOR_MODE_KEY = '--color-mode';

const lightToggleButton = document.getElementById("light-toggle");
const darkToggleButton = document.getElementById("dark-toggle");

const applySetting = (passedSetting, shouldStoreSetting) => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);
  if (currentSetting)
    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
  if (currentSetting && shouldStoreSetting) 
    localStorage.setItem(STORAGE_KEY, currentSetting);
};

lightToggleButton.addEventListener('click', evt => {
  evt.preventDefault();
  applySetting('light', true);
});

darkToggleButton.addEventListener('click', evt => {
  evt.preventDefault();
  applySetting('dark', true);
});

applySetting();
