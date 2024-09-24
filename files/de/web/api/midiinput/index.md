---
title: MIDIInput
slug: Web/API/MIDIInput
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

Die **`MIDIInput`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) empfängt Nachrichten von einem MIDI-Eingangsport.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle implementiert keine spezifischen Eigenschaften, sondern erbt Eigenschaften von {{domxref("MIDIPort")}}._

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, sondern erbt Methoden von {{domxref("MIDIPort")}}._

### Ereignisse

- {{domxref("MIDIInput.midimessage_event", "midimessage")}}
  - : Wird ausgelöst, wenn der aktuelle Port eine MIDI-Nachricht empfängt.

## Beispiele

Im folgenden Beispiel wird der Name jedes `MIDIInput` in der Konsole ausgegeben. Danach wird auf allen Eingangsports nach `midimessage`-Ereignissen gehört. Wenn eine Nachricht empfangen wird, wird die {{domxref("MIDIMessageEvent.data")}}-Eigenschaft in der Konsole ausgegeben.

```js
inputs.forEach((input) => {
  console.log(input.name); /* geerbte Eigenschaft von MIDIPort */
  input.onmidimessage = (message) => {
    console.log(message.data);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
