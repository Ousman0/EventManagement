






// code 2  top

window.onscroll = function() {
    if (isBottomOfDiv()) {
        document.getElementById("scrollToTopBtn").style.display = "block";
        console.log("Bottom of the div reached!");
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
};

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    setTimeout(scrollToTop, 100);
});

function scrollToTop() {
    var currentScroll = document.getElementById("scrollbar2").scrollTop;
    var scrollStep = -currentScroll / 20;
    var scrollInterval = setInterval(function(){
        document.getElementById("scrollbar2").scrollBy(0, scrollStep);
        if (document.getElementById("scrollbar2").scrollTop <= 0) {
            clearInterval(scrollInterval);
        }
    }, 85);
}

function isBottomOfDiv() {
    var div = document.getElementById("scrollbar2");
    var viewportHeight = div.clientHeight;
    var totalHeight = div.scrollHeight;
    var scrollPosition = div.scrollTop;
    return (scrollPosition + viewportHeight) >= totalHeight;
}




  


// cards content


document.addEventListener('DOMContentLoaded', function() {
  // Function to generate and append card to html code
  function generateAndAppendCards() {
    
    const cardData = [
      {
        imgSrc: "../images/egner-arnold-WX2-9oARyAA-unsplash.jpg",
        title: "Sanju Birthdayy",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/jacob-bentzinger-_HXFz-0g9w8-unsplash.jpg",
        title: "Rahul's Party",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/jignasa-nl95jOk2IIs-unsplash.jpg",
        title: "Ramya housewarming ceremony",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/nancy-philip-d4LzlwgB18o-unsplash.jpg",
        title: "Keerthi's 1st Birthday",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/nick-fewings-kmLUcvhqhSo-unsplash.jpg",
        title: "Bharath Birtday",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/shubham-bochiwal-BYYu5nvQoUM-unsplash.jpg",
        title: "Holi at AMB",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/vaibhav-nagare-0ci9am-l-Dk-unsplash.jpg",
        title: "Jenni's Engagement",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/egner-arnold-WX2-9oARyAA-unsplash.jpg",
        title: "Sanju Birthday",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/nick-fewings-kmLUcvhqhSo-unsplash.jpg",
        title: "Bharath Birtday",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/shubham-bochiwal-BYYu5nvQoUM-unsplash.jpg",
        title: "Holi at AMB",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/vaibhav-nagare-0ci9am-l-Dk-unsplash.jpg",
        title: "Jenni's Engagement",
        date: "Date: 20/08/2024"
      },
      {
        imgSrc: "../images/egner-arnold-WX2-9oARyAA-unsplash.jpg",
        title: "Sanju Birthday",
        date: "Date: 20/08/2024"
      }
     
    ];

    // Function to generate HTML for a single card
    function generateCardHTML(card) {
      return `
        <div class="card">
          <div class="img-holder">
            <img
              src="${card.imgSrc}"
              style="width: 100%; height: 100%; border-radius: 8px"
              loading="lazy"
            />
          </div>
          <div class="card-content">
            <h2>${card.title}</h2>
            <p>${card.date}</p>
          
            <div class="data1">
            <div class="datainfo">
              <span class="material-symbols-outlined icon5">
                imagesmode
              </span>
              <p>301</p>
            </div>
            <div class="datainfo">
              <span class="material-symbols-outlined icon5">
                video_file
              </span>
              <p>01</p>
            </div>
            <div class="datainfo">
              <span class="material-symbols-outlined icon5">
                engineering
              </span>
              <p>30</p>
            </div>
          </div>
          <div class="data2">
            <div class="datainfo tip1">
              <span class="material-symbols-outlined icon4">
                photo_library
              </span>
            </div>
            <div class="datainfo tip2">
              <span class="material-symbols-outlined icon4">
                cloud_upload
              </span>
            </div>
            <div class="datainfo tip3">
              <span class="material-symbols-outlined icon4">
                share
              </span>
            </div>
            <div class="datainfo tip4">
              <span class="material-symbols-outlined icon4">
                settings_heart
              </span>
            </div>
            <div class="datainfo tip5">
              <span class="material-symbols-outlined icon4">
                folder_delete
              </span>
            </div>
          </div>
            <a href="#" class="tip2">View Event</a>
          </div>
        </div>

      `;
    }

    


    // Function to generate HTML for all cards
    

    function generateAllCardsHTML(cards) {
     
      return cards.map(card => generateCardHTML(card)).join('');
    }
    
    const cardContainer = document.querySelector('.cardsinfo');


    cardContainer.innerHTML = generateAllCardsHTML(cardData);
  }

  
  generateAndAppendCards();




  // card element
  var cards = document.querySelectorAll('.card');



  cards.forEach(card => {
    card.addEventListener('click', function(event) {
        
        if (event.target.closest('.tip2')) {
          
          console.log("icon clicked");
          displayPopup(1);
        }else if(event.target.closest('.tip3')){
          displayPopup(3);
        }
         else {
        
          displayPopup(2);
        }
      });
});





  
  // Function to display the  pop-up based on the index
  function displayPopup(index) {
    
    hidePopups();

    // Get the pop-up to display based on the index
    var popup;
    if (index === 1) {
      popup = document.getElementById('uploadPopup');
    } else if (index === 2) {
      popup = document.getElementById('defaultPopup');
    }else if (index === 3) {
      popup = document.getElementById('sharePopup');
    }

    // Display the selected pop-up
    if (popup) {
        console.log("pop up opened")
      popup.style.display = 'block';
      // Add event listener to close button within the pop-up
      var closeButton = popup.querySelector('.closeButton');
      if (closeButton) {
        
        console.log("if block enter")
        closeButton.addEventListener('click', function(e) {
            popup.style.display = 'none';
            e.stopPropagation();
        });

        

      }
    } else {
      console.error("Popup not found for index: " + index);
    }
  }

  // Function to hide all pop-ups
  function hidePopups() {
    console.log("hide clicked")
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
      popup.style.display = 'none';
    });
  }

 

   // search input element
   const searchInput = document.getElementById('searchInput');

   //  event listener for input changes
   searchInput.addEventListener('input', function() {
       const searchTerm = searchInput.value.trim().toLowerCase(); // Get the trimmed and lowercased search term
       filterCardsByTitle(searchTerm); // Call function to filter cards
   });

   // Function to filter cards by title
   function filterCardsByTitle(searchTerm) {
       const cards = document.querySelectorAll('.card');
       cards.forEach(card => {
           const title = card.querySelector('h2').textContent.toLowerCase(); 
           if (title.includes(searchTerm)) {
               card.style.display = 'block';
           } else {
               card.style.display = 'none';
           }
       });
   }


});





// uploading images


// const openPopupBtn = document.getElementById('openPopupBtn');
// const customPopup = document.getElementById('customPopup');
const fileInput = document.getElementById('fileInput');
const progressBar = document.getElementById('progressBar');



let files = [];

fileInput.addEventListener('change', (event) => {
   files = event.target.files;
  if (files.length === 0) return;

  console.log(files.length)

  const totalSize = Array.from(files).reduce((acc, file) => acc + file.size, 0);

  let loaded = 0;

  const reader = new FileReader();

  reader.onload = () => {
    console.log("onload render entered")
    loaded += reader.result.length;
    const progress = (loaded / totalSize) * 100;
    progressBar.style.width = progress + '%';

    if (loaded < totalSize) {
      reader.readAsDataURL(files[0]);
    } else {
      // All files loaded
      const images = Array.from(files).map(file => reader.result);
      console.log(images); 
    }
  };

  reader.readAsDataURL(files[0]);
});

  





// image uploading popup and gallary code



// let files = [];
let totalSizeKB = 0;
let numone = 1;

selection = document.querySelector('.selection'),
uploadButton = document.querySelector('.top button'),
gallarybutton = document.querySelector('.bottom button[type="button2"]'),
form = document.querySelector('form'),
imagepreview = document.querySelector('.imagepreview'),
videopreview = document.querySelector('.videopreview'),
size = document.querySelector('.size'),
NoOfMedia = document.querySelector('.NoOfMedia'),
text = document.querySelector('.inner'),
browse = document.querySelector('.select'),
input = document.querySelector('form input');





browse.addEventListener('click',() => input.click());

// input change event




input.addEventListener('change',() => {
    let file = input.files;

    for (let i = 0; i < file.length; i++){
        if(files.every(e => e.name !== file[i].name )) files.push(file[i])
        
    }
console.log(files)
    form.reset();
    updateTotalSize();
    console.log(files)
    showImages();
})



const updateTotalSize = () => {
  totalSizeKB = 0;
  files.forEach((e) => {
      totalSizeKB += e.size / 1024; 
  });
};


const delImage = index =>{
    files.splice(index,1)
    showImages()
}
const delVideo = index =>{
    files.splice(index,1)
    showImages()
}



const showImages = () => {
  let totalSize = 0; 

  

let images = '';
let videos = '';
let previmages = `<div><h1>Images</h1></div> ${images}`
files.forEach((e, i) => {
    if (e.type.startsWith('image')) {
        images += `<div class="image">
            <img src="${URL.createObjectURL(e)}" alt="image">
            <span onclick="delImage(${i})">&times;</span>
            <button class="clsebtn2">
  <span class="X"></span>
  <span class="Y"></span>
  <div class="closepic">Close</div>
</button>
        </div>`;
        totalSize += e.size;
    } else if (e.type.startsWith('video')) {
        videos += `<div class="video">
            <video controls>
                <source src="${URL.createObjectURL(e)}" type="${e.type}">
                Your browser does not support the video tag.
            </video>
            <span onclick="delVideo(${i})">&times;</span>
        </div>`;
        totalSize += e.size;
    }
});

imagepreview.innerHTML = `<div class="mediadiv"><h1 class="titlediv">Images</h1></div> ${images}`;
videopreview.innerHTML = `<div class="mediadiv"><h1 class="titlediv">Videos</h1></div> ${videos}`;
    
    // Convert bytes to kilobytes 
    let totalSizeKB = totalSize / 1024/1024;
    let NoOfMedia = files.length;
    console.log(totalSizeKB)
    console.log(files.length)
    console.log(NoOfMedia)
    NoOfMedia = document.querySelector('.NoOfMedia'),

    // Display total size and number

    size.innerHTML = `Total Size: <span class="subtitleclr"> ${totalSizeKB.toFixed(2)} MB</span>`; 
    NoOfMedia.innerHTML = ` Media Selected: <span class="subtitleclr">${files.length} </span>`; 
   
    console.log(files)
    
};




// drag and drop


form.addEventListener('dragover',e => {
    e.preventDefault()
// when draged over showing a different text and adding dragover class
    form.classList.add('dragover')
    text.innerHTML = 'Drop images here'
})

form.addEventListener('dragleave',e => {
    e.preventDefault()
    // when draged leave showing a different text and removing dragover class

    form.classList.remove('dragover')
    text.innerHTML = `Drag & Drop images here or
    <span class="select" >   Browse</span>

</span>`
})


// when droped selecting all the files brought through drag
form.addEventListener('drop',e =>{
    e.preventDefault()


    form.classList.remove('dragover')
    text.innerHTML = `Drag & Drop images here or
    <span class="select" >   Browse</span>
</span>`

    let file = e.dataTransfer.files;
    for (let i = 0; i < file.length; i++){
        if(files.every(e => e.name !== file[i].name )) files.push(file[i])
        
    }
console.log("script added")
    form.reset();
    showImages();
})






console.log(files)

// uploading files on click of upload
// checking if there are any files to upload or not

// if (files.length > 0) {
uploadButton.addEventListener('click', () => {

  console.log(files)
  uploadtolclstrg(files)

  // Simulating upload process
  let uploadProgress = 0;
  
  console.log("upload button clicked")
  const interval = setInterval(() => {
      uploadProgress += totalSizeKB / 100; 

      
      updateProgressBar(uploadProgress);

      // checking the condition for progress bar
      if (uploadProgress >= totalSizeKB) {
          console.log("function interval disabled")
          clearInterval(interval);
          // making the display style of progress bar to be none 
          progressBar.style.display = 'none';

         
          setTimeout(() => {

            progressBar.style.display = 'none';
              const element = document.querySelector('.alert');
              // element.classList.add('show');
              element.style.display = 'block';
          }, 2000);

          setTimeout(() => {
              displayGallery();
          }, 7000);
      }
  }, 80);
});
// }





const updateProgressBar = (progress) => {
    console.log("function updateprogress bar invoked")
    const progressBar = document.querySelector('.progress-bar');
    const gallery = document.querySelector('.gallery');
    gallery.style.display = `block`;
    selection.style.display = `none`;
    progressBar.style.width = `${(progress/totalSizeKB)*100}%`;
};

// files.forEach((file,i) => {
//     galleryHTML += `<div class="image" style="width: 30%;height: 100%;">
//         <img src="${URL.createObjectURL(file)}" alt="image" style="width: 100%;height: 100%;">
//     </div>`;
// });

// galleryDiv.innerHTML = galleryHTML;

const uploadtolclstrg = (files)=>{
  console.log(files)
  // fileInput  = document.querySelector('form input');
  input2  = document.querySelector('form input');
  console.log("Attempting to store files in localStorage...");

  // const input = document.getElementById('fileInput'); // Make sure this correctly references your file input element
  
  // const files = input2.files;
  console.log(files)
  console.log("Files retrieved:", files);
  
  const fileArray = Array.from(files).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
  }));
  
  console.log("File array:", fileArray);
  
  localStorage.setItem('uploadedFiles', JSON.stringify(fileArray));
  console.log("Files stored in localStorage:", localStorage.getItem('uploadedFiles'));
}

const displayGallery = () => {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';

    console.log(files)
    console.log(numone)

 window.location.href = 'Gallary.html';
 console.log(files)
 console.log(numone)
 let galleryHTML = '';
 const galleryDiv = document.querySelector('.imagesgallary');
 const old = document.querySelector('.old');

 old.style.display = 'none';


 files.forEach((file,i) => {
  galleryHTML += `<div class="image" style="width: 30%;height: 100%;">
      <img src="${URL.createObjectURL(file)}" alt="image" style="width: 100%;height: 100%;">
      <h1>file.name</h1>
  </div>`;
});

galleryDiv.innerHTML = galleryHTML;
// window.location.href = 'Gallary.html';
 
};


// gallarybutton.addEventListener('click', () => {
//   console.log("gallary view cliked")
//   updateProgressBar(uploadProgress);
// })


