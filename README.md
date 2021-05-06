# Hydra Visuals

https://user-images.githubusercontent.com/1672142/117237665-45c8d000-ade0-11eb-8f18-6c8f0ec44e87.mp4

A collection of different visuals that I have created using [Hydra](https://github.com/ojack/hydra), a JavaScript-based web tool for creating synthesized visuals. You can [use it in your browser](https://hydra.ojack.xyz/), download it as a [package with the Atom IDE](https://atom.io/packages/atom-hydra), or connect it to your own webpage with [the hydra-synth engine](https://www.npmjs.com/package/hydra-synth), available via npm.

## Getting Started 

###### <ins>*Running user-created scripts via browser*</ins>
- Copy one of the scripts from this repository to your clipboard.
- Open the [Hydra Editor](https://hydra.ojack.xyz/) in your browser (Chrome recommended).
- Click the trash can at the top right of the screen to delete the current visual.
- Paste the script from your clipboard into the editor.
- Press the play button in the top right of the screen, or press CTRL+SHIFT+ENTER.

###### <ins>*Creating your own visuals*</ins>
- The creator of Hydra, Olivia Jack, has written some [instructions for using basic functions](https://github.com/ojack/hydra#basic-functions).
- You can easily modify values and press the run button to execute the code and create your own visuals.
- Try adding a single oscillator as an input, and then you can add different effects on top of it _*(PLEASE NOTE: high frequency oscillations or bright flashes can trigger photosensitive epilepsy).*_ Using a low integer or decimal as the first and second parameters is a good starting point if you aren't sure about how the oscillator displays an image.
  ```JavaScript
  // create oscillator ( frequency, sync, gradient )
  osc(1,1,0)
    .out()
  ```
- Adding effects before the `.out()` function:
  ```JavaScript
  osc(1,1,0)
    .diff(noise(2,1)) // apply a difference color filter in the shape of perlin noise to the oscillator
    .out()
  ```
- Reference the [complete list of functions](https://github.com/ojack/hydra/blob/main/docs/funcs.md) to see a variety of uses for different sources and effects
- Pressing CTRL+SHIFT+H will hide/show the code within the editor
