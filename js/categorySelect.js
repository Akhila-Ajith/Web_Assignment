function toggleTextBox() {
    const categorySelect = document.getElementById('categorySelect');
    const otherCategory = document.getElementById('otherCategory');

    if (categorySelect.value === 'other') {
      otherCategory.style.display = 'block';
    } else {
      otherCategory.style.display = 'none';
    }
  }