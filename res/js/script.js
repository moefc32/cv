window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
};

jQuery(function(){
  DFLIP.defaults.beforeFlip = function(flipbook){
    $(".df-ui-share").remove();
  }
});
