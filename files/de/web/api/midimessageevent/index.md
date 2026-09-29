---
title: MIDIMessageEvent
slug: Web/API/MIDIMessageEvent
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIMessageEvent`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) repräsentiert das Ereignis, das an das [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event)-Ereignis der [`MIDIInput`](/de/docs/Web/API/MIDIInput)-Schnittstelle übergeben wird. Ein `midimessage`-Ereignis wird jedes Mal ausgelöst, wenn ein MIDI-Gerät, das durch ein [`MIDIInput`](/de/docs/Web/API/MIDIInput) repräsentiert wird, eine MIDI-Nachricht sendet – beispielsweise wenn eine Taste auf einem MIDI-Keyboard gedrückt, ein Drehregler verstellt oder ein Schieberegler bewegt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`MIDIMessageEvent()`](/de/docs/Web/API/MIDIMessageEvent/MIDIMessageEvent)
  - : Erstellt eine neue Instanz eines `MIDIMessageEvent`-Objekts.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("Uint8Array")}}, das die Datenbytes einer einzelnen MIDI-Nachricht enthält. Weitere Informationen zu deren Aufbau finden Sie in der [MIDI-Spezifikation](https://midi.org/summary-of-midi-1-0-messages).

## Instanzmethoden

_Diese Schnittstelle implementiert keine eigenen Methoden, erbt aber Methoden von [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Das folgende Beispiel gibt alle MIDI-Nachrichten auf der Konsole aus.

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
