document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');
  const textsContainer = document.getElementById('texts');

  chrome.storage.sync.get(['enabled', 'savedTexts'], (result) => {
    toggle.checked = result.enabled || false;
    displayTexts(result.savedTexts || []);
  });

  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ enabled: toggle.checked });
  });

  function displayTexts(texts) {
    textsContainer.innerHTML = '';

    texts.forEach((text, index) => {
      const item = document.createElement('div');
      item.className = 'text-item';

      const content = document.createElement('div');
      content.textContent = text;
      item.appendChild(content);

      const actions = document.createElement('div');
      actions.className = 'text-actions';

      // Bearbeiten-Button
      const editBtn = document.createElement('button');
      editBtn.textContent = '✏️ Bearbeiten';
      editBtn.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        textarea.value = text;

        const saveEditBtn = document.createElement('button');
        saveEditBtn.textContent = '💾 Speichern';
        saveEditBtn.addEventListener('click', () => {
          texts[index] = textarea.value.trim();
          chrome.storage.sync.set({ savedTexts: texts }, () => {
            displayTexts(texts);
          });
        });

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Abbrechen';
        cancelBtn.addEventListener('click', () => displayTexts(texts));

        item.innerHTML = '';
        item.appendChild(textarea);
        item.appendChild(saveEditBtn);
        item.appendChild(cancelBtn);
      });

      // Löschen-Button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️ Löschen';
      deleteBtn.addEventListener('click', () => {
        texts.splice(index, 1);
        chrome.storage.sync.set({ savedTexts: texts }, () => {
          displayTexts(texts);
        });
      });

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      item.appendChild(actions);
      textsContainer.appendChild(item);
    });
  }
});
