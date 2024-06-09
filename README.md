<p align="center">
  <img src="https://cdn.cr4.live/gmod_joiner.png" alt="GModJoiner" width="300em">
</p>
<p align="center">
    <em>Nice quick connect link for your friends.<br>Garry's Mod Joiner</em>
</p>

Made this as a quick connect for my friends because Discord doesn't allow clicking on steam protocols. If you intend to use GModJoiner for your own server and need guidance, I'm happy to help with any question. You can make an issue or message me directly (see my profile).

## Features
- Piping Server info from query parameters (see usage)
- Automatic connect dialog (can be disabled)
- Helpful Footer (can be disabled)

Simply.. It allows you to send a clickable connect link wherever custom protocols aren't parsed.

So it's basically just a HTTP wrapper around Steam's Webprotocol. And somewhat customizable. Therefore able to work with other games besides gmod.


## Usage

You can either use the Demo in the sidebar or host it yourself, as it is just a basic webpage.

### Using the demo

Using the Demo cuts down the customization options to the required minimum.
To use the demo effectively here are the query parameters, the script uses to do it's thing:
`https://setcr4.github.io/GModJoiner?ip=[IPADDRESS]&port=[PORT]&pass=[PASSWORD]`

| Parameter | Meaning | Required? |
| - | - | - |
| `ip` | Ip Address of your GMod Server | :heavy_check_mark: |
| `port` | Port of your GMod Server (Default: 27015) | :x: |
| `pass` | Password to join (Default: None) | :x: |

### Hosting yourself

As you can see this is already possible using GitHub Pages, so I won't go into how to serve the page.

Basic configuration can be made in `config.js`. Since everything is documented in there I won't go into detail  here.

Have fun!
