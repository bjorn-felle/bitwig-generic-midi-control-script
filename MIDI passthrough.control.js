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

   CK1  = inputPort.createNoteInput("Channel 1", "?0????");
   CK2  = inputPort.createNoteInput("Channel 2", "?1????");
   CK3  = inputPort.createNoteInput("Channel 3", "?2????");
   CK4  = inputPort.createNoteInput("Channel 4", "?3????");
   CK5  = inputPort.createNoteInput("Channel 5", "?4????");
   CK6  = inputPort.createNoteInput("Channel 6", "?5????");
   CK7  = inputPort.createNoteInput("Channel 7", "?6????");
   CK8  = inputPort.createNoteInput("Channel 8", "?7????");
   CK9  = inputPort.createNoteInput("Channel 9", "?8????");
   CK10 = inputPort.createNoteInput("Channel 10", "?9????");
   CK11 = inputPort.createNoteInput("Channel 11", "?A????");
   CK12 = inputPort.createNoteInput("Channel 12", "?B????");
   CK13 = inputPort.createNoteInput("Channel 13", "?C????");
   CK14 = inputPort.createNoteInput("Channel 14", "?D????");
   CK15 = inputPort.createNoteInput("Channel 15", "?E????");
   CK16 = inputPort.createNoteInput("Channel 16", "?F????");

   CK1.setShouldConsumeEvents(false);
   CK2.setShouldConsumeEvents(false);
   CK3.setShouldConsumeEvents(false);
   CK4.setShouldConsumeEvents(false);
   CK5.setShouldConsumeEvents(false);
   CK6.setShouldConsumeEvents(false);
   CK7.setShouldConsumeEvents(false);
   CK8.setShouldConsumeEvents(false);
   CK9.setShouldConsumeEvents(false);
   CK10.setShouldConsumeEvents(false);
   CK11.setShouldConsumeEvents(false);
   CK12.setShouldConsumeEvents(false);
   CK13.setShouldConsumeEvents(false);
   CK14.setShouldConsumeEvents(false);
   CK15.setShouldConsumeEvents(false);
   CK16.setShouldConsumeEvents(false);

   host.getMidiInPort(0).setSysexCallback(onSysex0);

   // TODO: Perform further initialization here.
   println("MIDI passthrough initialized!");
}

// Called when a short MIDI message is received on MIDI input port 0.
function onMidi0(status, data1, data2) {

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
