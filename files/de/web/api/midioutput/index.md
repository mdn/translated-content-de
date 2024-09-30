---
title: MIDIOutput
slug: Web/API/MIDIOutput
l10n:
  sourceCommit: 70d988f9c45e5fe9493c0da0854be5dcde2a49fe
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`MIDIOutput`** Interface der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) stellt Methoden bereit, um Nachrichten zur Warteschlange eines Ausgabegeräts hinzuzufügen und die Warteschlange von Nachrichten zu leeren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface implementiert keine speziellen Eigenschaften, erbt jedoch Eigenschaften von [`MIDIPort`](/de/docs/Web/API/MIDIPort)._

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`MIDIPort`](/de/docs/Web/API/MIDIPort)._

- [`MIDIOutput.send()`](/de/docs/Web/API/MIDIOutput/send)
  - : Fügt der Warteschlange eine Nachricht hinzu, die an den MIDI-Port gesendet werden soll.
- [`MIDIOutput.clear()`](/de/docs/Web/API/MIDIOutput/clear)
  - : Leert alle ausstehenden Send-Daten aus der Warteschlange.

## Beispiele

Das folgende Beispiel sendet sofort ein mittleres C auf MIDI-Kanal 1.

```js
function sendMiddleC(midiAccess, portID) {
  const noteOnMessage = [0x90, 60, 0x7f]; // note on, middle C, full velocity
  const output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // sends the message.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
