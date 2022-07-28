# bitwig-generic-midi-control-script
A control script that simply passes through MIDI from the controller to Bitwig, so you can use the same controller mappings on multiple machines and with multiple physical controllers.

# Why?
Bitwig can add MIDI controllers and then create mappings from those controllers to its devices. If you open the same file on a different copy of Bitwig on  a different machine, it's possible that Bitwig won't recognise that the same controller is being used so the mappings won't work. This controller script acts as middleware and ensures that the controller mappings will work even if you move to a different machine, or use a different controller.

# Installation
1. Copy `MIDI passthrough.control.js` into the controller scripts folder for your Bitwig installation(s). This folder can be found in:
  - macOS: Documents/Bitwig Studio/Controller Scripts
  - Windows: Documents\Bitwig Studio\Controller Scripts
  - Linux: ~/Bitwig Studio/Controller Scripts
2. In Bitwig, add a new controller. Choose `bjornfelle` as the vendor and `MIDI passthrough` as the product
  ![Screenshot 2022-07-28 at 17 05 01](https://user-images.githubusercontent.com/99550049/181585280-0c631839-498d-4832-b572-918a5e96a92e.png)
3. Select the MIDI ports for your controller
  ![Screenshot 2022-07-28 at 17 05 16](https://user-images.githubusercontent.com/99550049/181585524-72cf1f86-fa4f-43a2-b06e-852312e8dd0a.png)

# Usage
Just map controls as usual, and you'll see in the `Mappings Browser Panel` that the mapping is showing as `MIDI passthrough`, not your actual controller.

![Screenshot 2022-07-28 at 17 08](https://user-images.githubusercontent.com/99550049/181586396-68f9aadf-82fc-41cd-928e-9ce53019c227.png)

The `MIDI passthrough` script will pass the MIDI through from your controller so that the mappings will work. Now if you change controller, just change it in the controller setting in Bitwig. Or if you move to another computer, just reinstall `MIDI passthrough` and the mappings will continue to work.

# How?
This is nothing special really, just a blank template controller script. Hopefully this will be easier for others to use than creating their own blank controller script. Thanks to [u/JACKTheHECK](https://www.reddit.com/user/JACKTheHECK/) for pointing me in the right direction.


