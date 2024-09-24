---
title: MIDIConnectionEvent
slug: Web/API/MIDIConnectionEvent
l10n:
  sourceCommit: 758ff14c18157e6be318a498083333558c1e50c1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIConnectionEvent`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) ist das Ereignis, das an das {{domxref("MIDIAccess.statechange_event","statechange")}}-Ereignis der {{domxref("MIDIAccess")}}-Schnittstelle und das {{domxref("MIDIPort.statechange_event","statechange")}}-Ereignis der {{domxref("MIDIPort")}}-Schnittstelle übergeben wird. Dies tritt auf, wenn ein neuer Port verfügbar wird oder ein zuvor verfügbarer Port nicht mehr verfügbar ist. Zum Beispiel wird dieses Ereignis ausgelöst, wenn ein MIDI-Gerät entweder an einen Computer angeschlossen oder von einem Computer abgesteckt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MIDIConnectionEvent.MIDIConnectionEvent", "MIDIConnectionEvent()")}}
  - : Erstellt ein neues `MIDIConnectionEvent`-Objekt.

## Instanz-Eigenschaften

- {{domxref("MIDIConnectionEvent.port")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf eine {{domxref("MIDIPort")}}-Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiele

Die {{domxref("Navigator.requestMIDIAccess()")}}-Methode gibt ein Promise zurück, das mit einem {{domxref("MIDIAccess")}}-Objekt aufgelöst wird. Wenn ein Port den Zustand ändert, wird ein `MIDIConnectionEvent` an das {{domxref("MIDIAccess.statechange_event", "statechange")}}-Ereignis übergeben. Informationen über den Port können dann in der Konsole ausgegeben werden.

```js
navigator.requestMIDIAccess().then((access) => {
  access.onstatechange = (event) => {
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
