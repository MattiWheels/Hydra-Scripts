# Hydra Scripts

https://user-images.githubusercontent.com/1672142/117237665-45c8d000-ade0-11eb-8f18-6c8f0ec44e87.mp4

A collection of different visuals that I have created with [Hydra](https://github.com/ojack/hydra), a JavaScript-based web tool for creating synthesized visuals. You can [use it in your browser](https://hydra.ojack.xyz/), download it as a [package with the Atom IDE](https://atom.io/packages/atom-hydra), or connect it to your own webpage with [the hydra-synth engine](https://www.npmjs.com/package/hydra-synth), available via npm.

## Getting Started 

###### <ins>*Running user-created scripts via browser*</ins>
- Copy one of the scripts from this repository to your clipboard.
- Open the [Hydra Editor](https://hydra.ojack.xyz/) in your browser (Chrome).
- Click the trash can at the top right of the screen to delete the current visual (after admiring the mesmerizing display).
- Paste the script from your clipboard into the editor.
- Press the play button in the top right of the screen, or press CTRL+SHIFT+ENTER.

###### <ins>*Creating your own visuals*</ins>
- The creator of Hydra, Olivia Jack, has written some [instructions for using basic functions](https://github.com/ojack/hydra#basic-functions).
- You can easily modify values and press the run button to execute the code and create your own visuals.
- Try adding a single oscillator as a source. _*PLEASE NOTE: high frequency oscillations or bright flashes can trigger photosensitive epilepsy.*_ There is the potential for lots of colorful flashing when using moving sources. I recommend using a relatively low integer or decimal (-5.0 - 5.0) as the first and second parameters when first experimenting with the oscillator source. Many sources have a sync (speed) parameter which can control how much movement is happening.
  ```JavaScript
  // create oscillator ( frequency, speed, gradient )
  osc(1,1,0)
    .out()
  ```
- Adding effects before the `.out()` function:
  ```JavaScript
  osc(1,1,0)
    .diff(noise(2,1)) // apply a difference color filter in the shape of perlin noise to the oscillator
    .out()
  ```
- Reference [the complete list of Hydra functions](https://github.com/ojack/hydra/blob/main/docs/funcs.md) to see a variety of uses for different sources and effects
- Pressing CTRL+SHIFT+H will hide/show the code within the editor
