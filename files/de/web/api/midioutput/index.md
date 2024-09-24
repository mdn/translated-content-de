---
title: MIDIOutput
slug: Web/API/MIDIOutput
l10n:
  sourceCommit: 70d988f9c45e5fe9493c0da0854be5dcde2a49fe
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`MIDIOutput`**-Interface der {{domxref('Web MIDI API','','',' ')}} bietet Methoden, um Nachrichten zur Warteschlange eines Ausgabegeräts hinzuzufügen sowie die Warteschlange von Nachrichten zu löschen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von {{domxref("MIDIPort")}}._

## Instanzmethoden

_Dieses Interface erbt auch Methoden von {{domxref("MIDIPort")}}._

- {{domxref("MIDIOutput.send()")}}
  - : Fügt eine Nachricht zur Warteschlange hinzu, die an den MIDI-Port gesendet werden soll.
- {{domxref("MIDIOutput.clear()")}}
  - : Löscht alle ausstehenden Sendedaten aus der Warteschlange.

## Beispiele

Das folgende Beispiel sendet ein mittleres C sofort auf MIDI-Kanal 1.

```js
function sendMiddleC(midiAccess, portID) {
  const noteOnMessage = [0x90, 60, 0x7f]; // Note an, mittleres C, volle Anschlagstärke
  const output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // sendet die Nachricht.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
