---
title: "MIDIConnectionEvent: MIDIConnectionEvent() Konstruktor"
short-title: MIDIConnectionEvent()
slug: Web/API/MIDIConnectionEvent/MIDIConnectionEvent
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Der **`MIDIConnectionEvent()`**-Konstruktor erstellt ein neues [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent)-Objekt. Typischerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erzeugt werden, wenn ein neuer Port verfügbar wird, und das Objekt an das [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)-Ereignis übergeben wird.

## Syntax

```js-nolint
new MIDIConnectionEvent(type)
new MIDIConnectionEvent(type, midiConnectionEventInit)
```

### Parameter

- `type`
  - : Ein String mit `"connect"` oder `"disconnect"`.
- `midiConnectionEventInit` {{optional_inline}}
  - : Ein Dictionary mit den folgenden Feldern:
    - `port`
      - : Die [`MIDIPort`](/de/docs/Web/API/MIDIPort) Instanz, die den verbundenen oder getrennten Port repräsentiert.
    - `bubbles` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis aufsteigt. Standardmäßig ist dies
        `false`.
    - `cancelable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann. Der
        Standard ist `false`.
    - `composed` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis Listener außerhalb eines Shadow-Roots auslöst (siehe [`Event.composed`](/de/docs/Web/API/Event/composed) für weitere Details). Der
        Standard ist `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
