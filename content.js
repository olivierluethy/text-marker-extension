function createIcon(x, y, selectedText) {
  const icon = document.createElement('div');
  icon.textContent = '💾';
  icon.className = 'text-marker-icon';
  icon.style.left = `${x + 10}px`;
  icon.style.top = `${y + 10}px`;

  // ✅ Add hover text (tooltip)
  icon.title = 'Klicke hier, um den markierten Text zu speichern';

  icon.addEventListener('click', () => {
    createModal(selectedText);
    document.body.removeChild(icon);
  });

  document.body.appendChild(icon);
  icon.classList.add('animate-icon');
}


function createModal(text) {
  const overlay = document.createElement('div');
  overlay.className = 'text-marker-overlay';

  const modal = document.createElement('div');
  modal.className = 'text-marker-modal';

  const textarea = document.createElement('textarea');
  textarea.value = text;

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Speichern';
  saveBtn.addEventListener('click', () => {
    const finalText = textarea.value.trim();
    if (finalText.length > 0) {
      chrome.storage.sync.get({ savedTexts: [] }, (data) => {
        const updated = data.savedTexts.concat(finalText);
        chrome.storage.sync.set({ savedTexts: updated });
      });
    }
    document.body.removeChild(overlay);
  });

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Abbrechen';
  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  modal.appendChild(textarea);
  modal.appendChild(saveBtn);
  modal.appendChild(cancelBtn);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

document.addEventListener('mouseup', (event) => {
  chrome.storage.sync.get(['enabled'], (result) => {
    if (!result.enabled) return;

    const selection = window.getSelection();
    const text = selection.toString().trim();
    if (text.length > 0) {
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      createIcon(rect.right + window.scrollX, rect.top + window.scrollY, text);
    }
  });
});
