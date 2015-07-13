<?php
/**
 * Functions.php
 *
 * Default File for modifying Wordpress functionality and loading scripts and stylesheets
 */

//Remove Admin Bar
add_filter( 'show_admin_bar', '__return_false' );