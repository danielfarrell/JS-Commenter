jQuery(document).ready(function(){
  jQuery('#author').val(jQuery.jStorage.get('comment_author'));
  jQuery('#email').val(jQuery.jStorage.get('comment_author_email'));
  jQuery('#url').val(jQuery.jStorage.get('comment_author_url'));
  jQuery("#commentform").submit(function(){
    jQuery.jStorage.set('comment_author', jQuery('#author').val());
    jQuery.jStorage.set('comment_author_email', jQuery('#email').val());
    jQuery.jStorage.set('comment_author_url', jQuery('#url').val());
    return true;
  });
});