---
title: MIDIMessageEvent
slug: Web/API/MIDIMessageEvent
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIMessageEvent`** Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) repräsentiert das Event, das an das [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event) Event der [`MIDIInput`](/de/docs/Web/API/MIDIInput) Schnittstelle übergeben wird. Ein `midimessage` Event wird jedes Mal ausgelöst, wenn eine MIDI-Nachricht von einem Gerät gesendet wird, das durch ein [`MIDIInput`](/de/docs/Web/API/MIDIInput) repräsentiert wird, zum Beispiel, wenn eine Taste auf einem MIDI-Keyboard gedrückt, ein Regler verstellt oder ein Schieberegler bewegt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`MIDIMessageEvent()`](/de/docs/Web/API/MIDIMessageEvent/MIDIMessageEvent)
  - : Erstellt eine neue Instanz des `MIDIMessageEvent` Objekts.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data)
  - : Ein {{jsxref("Uint8Array")}} mit den Datenbytes einer einzelnen MIDI-Nachricht. Weitere Informationen zu seiner Struktur finden Sie in der [MIDI-Spezifikation](https://midi.org/summary-of-midi-1-0-messages).

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von [`Event`](/de/docs/Web/API/Event)._

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
