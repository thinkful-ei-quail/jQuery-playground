$(function() {
  // 1.
  // $('main').append('<p class="special-paragraph">This is a paragraph.</p>');

  // 2.
  // $('.main-nav').addClass('altNav');

  // 3.
  // $('.main-nav-item a').first().addClass('standout');

  // 4.
  // $('h1').text("Other Heading");



  /** 
   * 5.
   * 
   * When the .show-more link is clicked:
   * 
   * Prevent it's default action
   * Append '.special-content' if it doesn't exist
   * Otherwise, toggle it's visibility (show/hide)
   */ 

  $('.show-more').click(event => {
    // prevent the default action of the link (to navigate to a URL)
    event.preventDefault();
    // if the the element .special-content does not exist:
    // append it to the end of .try-it
    // if .special-content does not exists on page
    if($('.special-content').length === 0){
      $('.try-it').append(`
        <p class="special-content">Here is some special content! <span class="more-content">Fugit ex in eos illum, magnam quas sit repellat odit autem soluta corporis excepturi dolorum. </span> <a href="http://www.google.com" class="toggle-content more" target="_blank">Show more.</a></p>
      `);
    }
    // otherwise toggle it's visibility
    else {
      $('.special-content').toggle();
    }
  });

  /** 
   * 6.
   * 
   * Now, try to click on .toggle-content
   * Why doesn't this work??
   * How do we fix?
   */

  // $('.toggle-content').click(event => {
  //   // prevent the default action of the link (to navigate to a URL)
  //   event.preventDefault();
  //   console.log("in toggle-content 'click' event");
  //   $('.more-content').show();
  // });

  /**
   * 7.
   * 
   * 'on' event delegation
   * http://api.jquery.com/on/#direct-and-delegated-events
   * Delegate the click event of 'toggle-content' 
   * (which does not exist when the page is loaded)
   * to the '.try-it' element.
   * 
   * We always delegate events to the closest parent element that 
   * DOES exists on page load
   * 
   */ 

  $('.try-it').on('click', '.toggle-content', event => {
    // prevent the default action of the link (to navigate to a URL)
    event.preventDefault();
    // Chaining
    if($(event.currentTarget).hasClass('more')){
      // display '.more-content' 'inline'
      $('.more-content').css('display', 'inline');
      // Remove class 'more' and update link text
      // event.curentTarget === $('.toggle-content')
      $(event.currentTarget).removeClass('more').text('Show less.');
    }
    else {
      $('.more-content').hide();
      $(event.currentTarget).addClass('more').text('Show more.')
    }
  });
});