---
title: MIDIConnectionEvent
slug: Web/API/MIDIConnectionEvent
l10n:
  sourceCommit: 758ff14c18157e6be318a498083333558c1e50c1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIConnectionEvent`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) ist das Ereignis, das an das [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)-Ereignis der [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Schnittstelle und das [`statechange`](/de/docs/Web/API/MIDIPort/statechange_event)-Ereignis der [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Schnittstelle übergeben wird. Dies tritt jedes Mal auf, wenn ein neuer Port verfügbar wird oder ein zuvor verfügbarer Port nicht mehr verfügbar ist. Zum Beispiel wird dieses Ereignis ausgelöst, wann immer ein MIDI-Gerät an einen Computer angeschlossen oder von ihm getrennt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`MIDIConnectionEvent()`](/de/docs/Web/API/MIDIConnectionEvent/MIDIConnectionEvent)
  - : Erstellt ein neues `MIDIConnectionEvent`-Objekt.

## Instanz-Eigenschaften

- [`MIDIConnectionEvent.port`](/de/docs/Web/API/MIDIConnectionEvent/port) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf eine [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Instanz für einen Port zurück, der verbunden oder getrennt wurde.

## Beispiele

Die [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess)-Methode gibt ein Promise zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird. Wenn sich der Zustand eines Ports ändert, wird ein `MIDIConnectionEvent` an das [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)-Ereignis übergeben. Informationen über den Port können dann in der Konsole ausgegeben werden.

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
