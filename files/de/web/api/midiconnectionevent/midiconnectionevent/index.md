---
title: "MIDIConnectionEvent: MIDIConnectionEvent() Konstruktor"
short-title: MIDIConnectionEvent()
slug: Web/API/MIDIConnectionEvent/MIDIConnectionEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Der **`MIDIConnectionEvent()`** Konstruktor erstellt ein neues {{domxref("MIDIConnectionEvent")}}-Objekt. Normalerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erzeugt werden, wenn ein neuer Port verfügbar wird, und das Objekt an das {{domxref("MIDIAccess.statechange_event", "statechange")}}-Ereignis übergeben wird.

## Syntax

```js-nolint
new MIDIConnectionEvent(type)
new MIDIConnectionEvent(type, midiConnectionEventInit)
```

### Parameter

- `type`
  - : Ein String mit einem der Werte `"connect"` oder `"disconnect"`.
- `midiConnectionEventInit` {{optional_inline}}

  - : Ein Wörterbuch, das die folgenden Felder enthält:

    - `port`
      - : Die {{domxref("MIDIPort")}}-Instanz, die den Port darstellt, der verbunden oder getrennt wurde.
    - `bubbles` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis sprudelt. Der Standardwert ist
        `false`.
    - `cancelable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann. Der
        Standardwert ist `false`.
    - `composed` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis Hörer außerhalb eines Shadow-Roots auslösen wird (siehe {{domxref("Event.composed")}} für weitere Details). Der Standardwert ist `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
