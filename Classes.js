 

    function selectItem(item) {
      document.getElementById('stickyItem').innerText = item;
    }




      const classes = [{
      image:'classes-image-neditation.png',
      name:'Medtation',
      time: 'Wednesday 9.00pm',
      coach: 'Darik Doreyne'
    }, {
      image:'classes-image-cycling.png',
      name:'Cycling',
      time: 'Friday 11.00pm',
      coach: 'Maria Milch'
    }, {
      image:'classes-image-boxing.png',
      name:'Boxing',
      time: 'Wednesday 12.00pm',
      coach: 'Marc Mueller'
    },
    {
      image:'classes-image-karate.png',
      name:'Karate',
      time: 'Monday 11.00am',
      coach: 'David Reich'
    },
    {
      image:'class-running-image.png',
      name:'Powerlifting',
      time: 'Saturday 3.15pm',
      coach: 'Lary Weels'
    },
    {
      image:'classes-image-powerlifting.png',
      name:'Running',
      time: 'Thursday 11.00 am',
      coach: 'Lary Weels'
    }];




 

    const search = () => {
      const searchbox = document.getElementById("search-item").value.toUpperCase();
      const product = document.querySelectorAll(".product");
    
      for (var i = 0; i < product.length; i++) {
        let match = product[i].querySelector("h3");
    
        if (match) {
          let textvalue = match.textContent || match.innerHTML;
    
          if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display = "";
          } else {
            product[i].style.display = "none";
          }
        }
      }
    };

