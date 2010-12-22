<?php
/*
Plugin Name: JS Commenter
Plugin URI: http://danielfarrell.com/
Description: Disabled the cookies used to remember a commenter and instead uses local browser storage for that information and javascript to fill the form.
Author: Daniel Farrell
Version: 0.1
Author URI: http://danielfarrell.com/
*/

//set the plugin path
if (!defined('WP_CONTENT_URL')){
	define( 'WP_CONTENT_URL', get_option('siteurl') . '/wp-content');
}
$danielfarrell_js_commenter_path = WP_CONTENT_URL.'/plugins/'.plugin_basename(dirname(__FILE__));

function danielfarrell_js_commenter_head(){
	wp_enqueue_script("jquery");
	global $danielfarrell_js_commenter_path;
	echo '<script type="text/javascript" src="'.$danielfarrell_js_commenter_path.'/js_commenter.js"></script>';	
}

function danielfarrell_js_commenter_lifetime(){
	return -30000000;
}

add_action('plugins_loaded', 'danielfarrell_js_commenter_init');
function danielfarrell_js_commenter_init() {
	$user = wp_get_current_user();	
	if (!$user->ID) { //plugin is for not-logged users
		add_action('wp_head', 'danielfarrell_js_commenter_head');
		add_filter('comment_cookie_lifetime', 'danielfarrell_js_commenter_lifetime');
	}
}
?>