loadAPI(17);

// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);

host.defineController("bjornfelle", "MIDI passthrough", "0.1", "c5d73a8f-f474-42e7-adbd-6fd778e6318d", "bjornfelle");

host.defineMidiPorts(1, 1);

if (host.platformIsWindows())
{
   // TODO: Set the correct names of the ports for auto detection on Windows platform here
   // and uncomment this when port names are correct.
   // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
}
else if (host.platformIsMac())
{
   // TODO: Set the correct names of the ports for auto detection on Mac OSX platform here
   // and uncomment this when port names are correct.
   // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
}
else if (host.platformIsLinux())
{
   // TODO: Set the correct names of the ports for auto detection on Linux platform here
   // and uncomment this when port names are correct.
   // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
}

function init() {
   transport = host.createTransport();
   var inputPort = host.getMidiInPort(0);
   inputPort.setMidiCallback(onMidi0);
   inputPort.createNoteInput("MIDI Passthrough");
   host.getMidiInPort(0).setSysexCallback(onSysex0);

   // TODO: Perform further initialization here.
   println("MIDI passthrough initialized!");
}

// Called when a short MIDI message is received on MIDI input port 0.
function onMidi0(status, data1, data2) {

  if ((status & 0xF0) == 0x90) {
    println("note");
  }

}

// Called when a MIDI sysex message is received on MIDI input port 0.
function onSysex0(data) {
   // MMC Transport Controls:
   switch (data) {
      case "f07f7f0605f7":
         transport.rewind();
         break;
      case "f07f7f0604f7":
         transport.fastForward();
         break;
      case "f07f7f0601f7":
         transport.stop();
         break;
      case "f07f7f0602f7":
         transport.play();
         break;
      case "f07f7f0606f7":
         transport.record();
         break;
   }
}

function flush() {
   // TODO: Flush any output to your controller here.
}

function exit() {

}
