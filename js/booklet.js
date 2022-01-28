$(function () {
  //single book
  /*$("#mybook").booklet({
    closed: true,
    autoCenter: true,
    pageNumbers: false,
    width: "45%",
    heigh: "65%",
    speed: 800,
    next: "#next",
    prev: "#back",
  });*/

  //console.log(screen.width)

  if (screen.width <= 500){
      console.log("500")
      var height = $(".selector").booklet( "option", "height" );
      $("#mybook").booklet({
          closed: true,
          autoCenter: true,
          pageNumbers: false,
          width: $(document).width()-20,
          height: 250,
          speed: 800,
          next: "#next",
          prev: "#back",
        });
        
        var width = $(".selector").booklet( "option", "width" );
        var height = width-20/2;
        $("#mybook").booklet( "option", "height", height );

        //add one div to putthe buttons
        let div = `
        <div id="oneDiv"> Hey!! </div>
        `;

        document.querySelector(".container").appendChild(div);


}
else if(screen.width <= 800){
    console.log("800")
    $("#mybook").booklet({
      closed: true,
      autoCenter: true,
      pageNumbers: false,
      width: "55%",
      height: "40%",
      speed: 800,
      next: "#next",
      prev: "#back",
    });
  }
  else if(screen.width <= 900){
    console.log("otro");
    $("#mybook").booklet({
      closed: true,
      autoCenter: true,
      pageNumbers: false,
      width: "60%",
      heigh: "65%",
      speed: 800,
      next: "#next",
      prev: "#back",
    });
  }
  else{
    console.log("ninguno");
    $("#mybook").booklet({
      closed: true,
      autoCenter: true,
      pageNumbers: false,
      width: "45%",
      heigh: "65%",
      speed: 800,
      next: "#next",
      prev: "#back",
    });
  }

  
  /*$("#mybook").booklet({
      closed: true,
      autoCenter: true,
      pageNumbers: false,
      width: "45%",
      heigh: "65%",
      speed: 800,
      next: "#next",
      prev: "#back",
    });*/

  $(window).resize(function() {
    if (screen.width <= 500){
      console.log("500")
      var height = $(".selector").booklet( "option", "height" );
      $("#mybook").booklet({
          closed: true,
          autoCenter: true,
          pageNumbers: false,
          width: $(document).width()-20,
          height: 250,
          speed: 800,
          next: "#next",
          prev: "#back",
        });
        
        var width = $(".selector").booklet( "option", "width" );
        var height = width-20/2;
        $("#mybook").booklet( "option", "height", height );

        //add one div to putthe buttons
        let div = `
        <div id="oneDiv"> Hey!! </div>
        `;

        document.querySelector(".container").appendChild(div);


}
else if(screen.width <= 800){
    console.log("800")
    $("#mybook").booklet({
      closed: true,
      autoCenter: true,
      pageNumbers: false,
      width: "55%",
      height: "40%",
      speed: 800,
      next: "#next",
      prev: "#back",
    });
  }
  else if(screen.width <= 900){
    console.log("otro");
    $("#mybook").booklet({
      closed: true,
      autoCenter: true,
      pageNumbers: false,
      width: "60%",
      heigh: "65%",
      speed: 800,
      next: "#next",
      prev: "#back",
    });
  }
  else{
    console.log("ninguno");
    $("#mybook").booklet({
      closed: true,
      autoCenter: true,
      pageNumbers: false,
      width: "45%",
      heigh: "65%",
      speed: 800,
      next: "#next",
      prev: "#back",
    });
  }

  });

});
