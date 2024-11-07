<?php
/**
 * Plugin Name: Star Animation Plugin
 * Description: A plugin that adds an animated star effect to your WordPress site.
 * Version: 1.6 
 * Author: Pankaj Sarnobat
 * License: GPLv2 or later
 */

function star_animation_enqueue_assets() {
    // Enqueue the CSS for the star animation
    wp_enqueue_style('star-animation-css', plugins_url('css/star-animation.css', __FILE__));

    // Enqueue the JavaScript for the star animation
    wp_enqueue_script('star-animation-js', plugins_url('js/star-animation.js', __FILE__), array('jquery'), null, true);

    // Pass the base URL of the plugin assets and current language to the JavaScript
    if (function_exists('pll_current_language')) {
        $current_lang = pll_current_language(); // Get the current language code
    } else {
        $current_lang = 'en'; // Default to English if Polylang is not available
    }

    wp_localize_script('star-animation-js', 'starAnimationData', array(
        'baseUrl' => plugins_url('assets/', __FILE__),
        'currentLang' => $current_lang,
    ));
}
add_action('wp_enqueue_scripts', 'star_animation_enqueue_assets');

function star_animation_shortcode() {
    // Ensure the assets are enqueued when the shortcode is used
    star_animation_enqueue_assets();

    return '<div class="star-animation-wrapper"><div class="star-container"></div><div class="message-container"></div></div>';
}
add_shortcode('star_animation', 'star_animation_shortcode');

