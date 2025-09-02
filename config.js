/**
 * Description: This file contains the configuration for the website.
 * You can change the settings here to customize the website to your liking.
 * The settings are split into sections, each with a description of what they do.
 * Read the comments carefully to understand what each setting does.
 * If you have any questions, feel free to ask me on GitHub or Discord.
 * Enjoy!
 */


/**
 * ## General Settings ##
 * These settings are general settings that affect the core functionality of the website.
 */

// The IP address of your GMod server
// Leave empty if you want to force entering the IP address as query parameter
GMSERVER_IP = "";

// The port of your GMod server
// Defaults to 27015 if left empty and no query parameter is provided
GMSERVER_PORT = "";

// By default I am forcing you to enter the password as a query parameter because security
// If you really want to use a default password you'll have to change the code in js/main.js
// No support will be given for this though

// Whether or not the website should try to open Steam Webprotocol automatically
// This will be overridden if not enough information about the server is provided
// This will fail if the user does not have Steam installed
AUTO_CONNECT = true;


/**
 * ## Appearance Settings ##
 * These settings are used to customize the appearance of the website.
 */

// Set this to true if you want to use the light mode for whatever reason
LIGHT_MODE = false;

// Whether or not the title should be shown in the middle of the page
SHOW_TITLE = true;
// Sets the title of the page
PAGE_TITLE = "GModJoiner";

// Whether or not the image should be shown in the middle of the page
SHOW_MIDDLE_IMAGE = true;
// Sets the image in the middle of the page
// You can use a local image or a URL. If you want to use a local image, put it in the misc folder.
// Example: "misc/your-image.jpg"
MIDDLE_IMAGE = "misc/gmod_joiner.png";

// Sets whether or not the background should be animated
ANIMATED_BACKGROUND = true;
// Wheter or not the title and image should be animated (parallax effect)
ANIMATED_TITLE = true;


/**
 * ## Footer Settings ##
 * These settings are used to customize the footer of the page.
 */

// Whether or not the footer should be shown at all
SHOW_FOOTER = true;
// Whether or not the footer should be open by default
FOOTER_OPEN = false;

// Show the GMod Command Help? (connect command)
SHOW_GMOD_COMMAND = true;
// Show the Steam Connect Help? (steam://connect/ URL)
SHOW_STEAM_CONNECT = true;
// Show the direct connect help? (IP:PORT)
SHOW_DIRECT_CONNECT = true;
// Show the Counter-Strike: Source content help?
SHOW_CSS_CONTENT = false;

// Show Credits?
SHOW_CREDITS = true;
// Custom credits text
CREDITS_TEXT = "";
