
gallarybutton = document.querySelector('.bottom button[type="button2"]');

gallarybutton.addEventListener('click', () => {
  console.log("gallary view cliked")
//   updateProgressBar(uploadProgress);
})


document.addEventListener('DOMContentLoaded', function () {
    console.log("gallary got exicuited")
    const fileList = document.getElementById('fileList');
    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles'));

    if (uploadedFiles) {
        uploadedFiles.forEach(file => {
            const listItem = document.createElement('li');
            listItem.textContent = `${file.name} (${file.size} bytes)`;
            fileList.appendChild(listItem);
        });
    } else {
        fileList.textContent = 'No files uploaded.';
    }
});

