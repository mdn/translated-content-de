---
title: MIDIMessageEvent
slug: Web/API/MIDIMessageEvent
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIMessageEvent`** Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) repräsentiert das Ereignis, das an das {{domxref("MIDIInput.midimessage_event","midimessage")}}-Ereignis der {{domxref("MIDIInput")}}-Schnittstelle übergeben wird. Ein `midimessage`-Ereignis wird jedes Mal ausgelöst, wenn eine MIDI-Nachricht von einem Gerät gesendet wird, das durch ein {{domxref("MIDIInput")}} repräsentiert wird, zum Beispiel wenn eine Taste eines MIDI-Keyboards gedrückt, ein Knopf gedreht oder ein Schieberegler bewegt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MIDIMessageEvent.MIDIMessageEvent", "MIDIMessageEvent()")}}
  - : Erstellt eine neue Instanz eines `MIDIMessageEvent`-Objekts.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("Event")}}._

- {{domxref("MIDIMessageEvent.data")}}
  - : Ein {{jsxref("Uint8Array")}}, das die Datenbytes einer einzelnen MIDI-Nachricht enthält. Siehe die [MIDI-Spezifikation](https://midi.org/summary-of-midi-1-0-messages) für weitere Informationen zu dessen Form.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von {{domxref("Event")}}._

## Beispiele

Das folgende Beispiel gibt alle MIDI-Nachrichten in der Konsole aus.

```js
navigator.requestMIDIAccess().then((midiAccess) => {
  Array.from(midiAccess.inputs).forEach((input) => {
    input[1].onmidimessage = (msg) => {
      console.log(msg);
    };
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
