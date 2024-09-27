---
title: "MIDIConnectionEvent: MIDIConnectionEvent() Konstruktor"
short-title: MIDIConnectionEvent()
slug: Web/API/MIDIConnectionEvent/MIDIConnectionEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Der **`MIDIConnectionEvent()`** Konstruktor erstellt ein neues [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent)-Objekt. In der Regel wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn ein neuer Port verfügbar wird, und das Objekt an das [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)-Ereignis übergeben wird.

## Syntax

```js-nolint
new MIDIConnectionEvent(type)
new MIDIConnectionEvent(type, midiConnectionEventInit)
```

### Parameter

- `type`
  - : Ein String mit einem der Werte `"connect"` oder `"disconnect"`.
- `midiConnectionEventInit` {{optional_inline}}

  - : Ein Dictionary, das die folgenden Felder enthält:

    - `port`
      - : Die [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Instanz, die den verbundenen oder getrennten Port darstellt.
    - `bubbles` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis aufbläht. Standard ist
        `false`.
    - `cancelable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann. Der
        Standard ist `false`.
    - `composed` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis Listener außerhalb eines
        Shadow-Roots auslöst (siehe [`Event.composed`](/de/docs/Web/API/Event/composed) für mehr Details). Der
        Standard ist `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
