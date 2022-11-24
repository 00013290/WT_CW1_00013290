  // Toggle display mobile navigation
const nav = document.querySelector("header nav"), btn_mobile = document.querySelector("#btn-mobile")
    btn_mobile.addEventListener("click", () => {
      nav.classList.toggle("hidden-nav")
    })

    filterSelection("1")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "1") c = "1";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        deleteClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) attachClass(x[i], "show");
      }
    }
    
    // Show filtered elements
    function attachClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }
    
    // Hide elements that are not selected
    function deleteClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
    
    // Add active class to the current control button (highlight it)
    var btnContainer = document.getElementById("loan-option");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    
    document.getElementById("trigger").onclick = function() {
      open()
    };
    
    function open() {
      document.getElementById("menu").classList.toggle("show");
    }
    