---
title: "MIDIConnectionEvent: MIDIConnectionEvent() Konstruktor"
short-title: MIDIConnectionEvent()
slug: Web/API/MIDIConnectionEvent/MIDIConnectionEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Der **`MIDIConnectionEvent()`**-Konstruktor erstellt ein neues [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent)-Objekt. In der Regel wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn ein neuer Port verfügbar wird, und das Objekt an das [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)-Ereignis übergeben wird.

## Syntax

```js-nolint
new MIDIConnectionEvent(type)
new MIDIConnectionEvent(type, midiConnectionEventInit)
```

### Parameter

- `type`
  - : Ein String mit entweder `"connect"` oder `"disconnect"`.
- `midiConnectionEventInit` {{optional_inline}}
  - : Ein Wörterbuch mit den folgenden Feldern:
    - `port`
      - : Die [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Instanz, die den Port darstellt, der verbunden oder getrennt wurde.
    - `bubbles` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis "bubbles" ist. Der Standardwert ist `false`.
    - `cancelable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann. Der Standardwert ist `false`.
    - `composed` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis Listener außerhalb eines Shadow-Roots auslöst (siehe [`Event.composed`](/de/docs/Web/API/Event/composed) für weitere Details). Der Standardwert ist `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
