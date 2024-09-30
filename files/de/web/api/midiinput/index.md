---
title: MIDIInput
slug: Web/API/MIDIInput
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

Die **`MIDIInput`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) empfängt Nachrichten von einem MIDI-Eingangsport.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Diese Schnittstelle implementiert keine spezifischen Eigenschaften, aber erbt Eigenschaften von [`MIDIPort`](/de/docs/Web/API/MIDIPort)._

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, aber erbt Methoden von [`MIDIPort`](/de/docs/Web/API/MIDIPort)._

### Ereignisse

- [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event)
  - : Wird ausgelöst, wenn der aktuelle Port eine MIDI-Nachricht empfängt.

## Beispiele

Im folgenden Beispiel wird der Name jedes `MIDIInput` in die Konsole ausgegeben. Anschließend werden für alle Eingangsports `midimessage`-Ereignisse abgehört. Wenn eine Nachricht empfangen wird, wird die [`MIDIMessageEvent.data`](/de/docs/Web/API/MIDIMessageEvent/data)-Eigenschaft in die Konsole ausgegeben.

```js
inputs.forEach((input) => {
  console.log(input.name); /* inherited property from MIDIPort */
  input.onmidimessage = (message) => {
    console.log(message.data);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
