---
title: "MIDIConnectionEvent: port-Eigenschaft"
short-title: port
slug: Web/API/MIDIConnectionEvent/port
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`port`**-Eigenschaft der {{domxref("MIDIConnectionEvent")}}-Schnittstelle gibt den Port zurück, der getrennt oder verbunden wurde.

## Wert

Ein {{domxref("MIDIPort")}}-Objekt.

## Beispiele

Die Methode {{domxref("Navigator.requestMIDIAccess()")}} gibt ein Promise zurück, das mit einem {{domxref("MIDIAccess")}}-Objekt aufgelöst wird. Wenn sich der Status eines Ports ändert, wird ein `MIDIConnectionEvent` an das {{domxref("MIDIAccess.statechange_event","statechange")}}-Ereignis übergeben. Informationen über den Port können dann in die Konsole ausgegeben werden.

```js
navigator.requestMIDIAccess().then((access) => {
  access.onstatechange = (event) => {
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
