//   <!-- đoạn mã về menu -->
      var prevScrollpos = window.pageYOffset;
      var scrollTopBtn = document.getElementById("scrollTopBtn");
  
      window.onscroll = function() {
          scrollFunction();
          toggleHeaderVisibility();
      };
  
      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              scrollTopBtn.style.display = "block";
          } else {
              scrollTopBtn.style.display = "none";
          }
      }
  
      function toggleHeaderVisibility() {
          var currentScrollPos = window.pageYOffset;
          var header = document.querySelector(".header");
          if (prevScrollpos > currentScrollPos) {
              header.classList.remove("hide");
          } else {
              header.classList.add("hide");
          }
          prevScrollpos = currentScrollPos;
      }
  
      scrollTopBtn.addEventListener("click", function() {
          scrollToTop(300);
      });
  
      function scrollToTop(scrollDuration) {
          var scrollStep = -window.scrollY / (scrollDuration / 15);
          var scrollInterval = setInterval(function() {
              if (window.scrollY !== 0) {
                  window.scrollBy(0, scrollStep);
              } else {
                  clearInterval(scrollInterval);
              }
          }, 15);
      }





// <!-- đoạn mã về menu -->
  // slider
  window.addEventListener("load", function () {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    console.log("sliderItemWidth", sliderItemWidth);
    let positionX = 0;
    let index = 0;
    const intervalTime = 7000; // Thời gian chuyển đổi tự động (ms)
    let autoSliderInterval;

    nextBtn.addEventListener("click", function () {
        handleChangeSlider(1);
        resetAutoSliderInterval();
    });

    prevBtn.addEventListener("click", function () {
        handleChangeSlider(-1);
        resetAutoSliderInterval();
    });

    [ ... dotItems].forEach((item) =>
    item.addEventListener("click", function (e){
        [ ... dotItems].forEach((el) => el.classList.remove("active")); 
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        positionX =-1*index*sliderItemWidth;
        sliderMain.style.transform = `translateX(${positionX}px)`;
    })
    );

    function handleChangeSlider(direction) {
        if (direction == 1) {
            index++;
            positionX = positionX - sliderItemWidth;
            if (index >= sliderItems.length) {
                positionX = 0;
                index = 0;
            }
            sliderMain.style.transform = `translateX(${positionX}px)`;
        } else if (direction == -1) {
            console.log("prev slider");
            index--;
            positionX = positionX + sliderItemWidth;
            if (index < 0) {
                positionX = -(sliderItems.length - 1) * sliderItemWidth;
                index = sliderItems.length - 1;
            }
            sliderMain.style.transform = `translateX(${positionX}px)`;
        }
        [ ... dotItems].forEach((el) => el.classList.remove("active")); 
        dotItems[index].classList.add("active");
    }


    function startAutoSlider() {
        autoSliderInterval = setInterval(function () {
            handleChangeSlider(1);
        }, intervalTime);
    }

    function resetAutoSliderInterval() {
        clearInterval(autoSliderInterval);
        startAutoSlider();
    }

    // Bắt đầu chuyển động tự động khi trang được tải
    startAutoSlider();
});





// slider

//chon nam nữ trẻ em

  // Lấy danh sách tất cả các phần tử trong menu
  var menuItems = document.querySelectorAll('.menu-list > div');

  // Gắn sự kiện "click" cho từng phần tử
  menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Xóa lớp "active" khỏi tất cả các phần tử
          menuItems.forEach(function(item) {
              item.classList.remove('active');
          });

          // Thêm lớp "active" vào phần tử hiện tại
          this.classList.add('active');
      });
  });

    function showContent(contentNumber) {
        var contents = document.querySelectorAll('.menu-list-content1, .menu-list-content2, .menu-list-content3');
        
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        
        var selectedContent = document.querySelector('.menu-list-content' + contentNumber);
        selectedContent.style.display = 'block';
        
    }

    window.onload = function() {
        showContent(1);
    };
 
//slider-bộ sự tập
 window.addEventListener("load", function () {
            const listContent = document.querySelector(".female");
            const nextBtn = document.querySelector(".next-female");
            const prevBtn = document.querySelector(".prev-female");
          
        
            nextBtn.addEventListener("click", function () {
                handleChangeSlider(1);
            });
        
            prevBtn.addEventListener("click", function () {
                handleChangeSlider(-1);

            });
            function handleChangeSlider(direction){
                if(direction==1){
                    listContent.style = `transform: translateX(-500px)`
                }
                else if(direction == -1){
                    listContent.style = `transform: translateX(0px)`
                }
            }
        
           
        });
        window.addEventListener("load", function () {
            const listContent = document.querySelector(".male");
            const nextBtn = document.querySelector(".next-male");
            const prevBtn = document.querySelector(".prev-male");
          
        
            nextBtn.addEventListener("click", function () {
                handleChangeSlider(1);
            });
        
            prevBtn.addEventListener("click", function () {
                handleChangeSlider(-1);

            });
            function handleChangeSlider(direction){
                if(direction==1){
                    listContent.style = `transform: translateX(-500px)`
                }
                else if(direction == -1){
                    listContent.style = `transform: translateX(0px)`
                }
            }
        
           
        });
        window.addEventListener("load", function () {
            const listContent = document.querySelector(".children");
            const nextBtn = document.querySelector(".next-children");
            const prevBtn = document.querySelector(".prev-children");
          
        
            nextBtn.addEventListener("click", function () {
                handleChangeSlider(1);
            });
        
            prevBtn.addEventListener("click", function () {
                handleChangeSlider(-1);

            });
            function handleChangeSlider(direction){
                if(direction==1){
                    listContent.style = `transform: translateX(-500px)`
                }
                else if(direction == -1){
                    listContent.style = `transform: translateX(0px)`
                }
            }
        
           
        });


        // Quảng cáo
        setTimeout(function() {
            var notification = document.getElementById('notification');
            var closeBtn = document.getElementById('close');
            var overlay = document.querySelector('.overlay1');
      
            notification.style.display = 'block';
            notification.classList.add('active');
            overlay.classList.add('active');
      
            closeBtn.addEventListener('click', function() {
              notification.style.display = 'none';
              notification.classList.remove('active');
              overlay.classList.remove('active');
            });
          }, 5000);


        //   <!-- đoạn mã slider sản phẩm và chon màu sản phẩm -->
          document.addEventListener("DOMContentLoaded", function() {
            const boxSets = document.querySelectorAll(".item-option");
                const imgSets = document.querySelectorAll(".product-img");
    
                boxSets.forEach((boxSet, index) => {
                    const boxes = boxSet.querySelectorAll(".img-option");
                    const images = imgSets[index].querySelectorAll(".img");
    
                    // Ẩn tất cả các ảnh trong từng cặp trừ ảnh đầu tiên
                    for (let i = 1; i < images.length; i++) {
                        images[i].style.display = "none";
                    }
    
                    boxes.forEach((box, boxIndex) => {
                        box.addEventListener("click", function() {
                            // Ẩn tất cả các ảnh trong cùng một cặp trừ ảnh được click
                            for (let i = 0; i < images.length; i++) {
                                if (i === boxIndex) {
                                    images[i].style.display = "block";
                                } else {
                                    images[i].style.display = "none";
                                }
                            }
                        });
                    });
      });
    
      $('.filtering').slick({
        slidesToShow: 4,
        slidesToScroll: 4
      });
    
      var filtered = false;
    
      $('.js-filter').on('click', function() {
        if (filtered === false) {
          $('.filtering').slick('slickFilter', ':even');
          $(this).text('Unfilter Slides');
          filtered = true;
        } else {
          $('.filtering').slick('slickUnfilter');
          $(this).text('Filter Slides');
          filtered = false;
        }
      });
    });
