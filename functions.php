<?php
/**
 * Functions.php
 *
 * Default File for modifying Wordpress functionality and loading scripts and stylesheets
 */

//Remove Admin Bar
add_filter( 'show_admin_bar', '__return_false' );

//load scripts and styles

function theme_scripts() {

    wp_enqueue_style('header-font','https://fonts.googleapis.com/css?family=Great+Vibes','1.0');
    wp_enqueue_script('app', get_template_directory_uri() . '/assets/js/app.min.js', '0.1');
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );