---
title: "MIDIMessageEvent: MIDIMessageEvent() Konstruktor"
short-title: MIDIMessageEvent()
slug: Web/API/MIDIMessageEvent/MIDIMessageEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Der **`MIDIMessageEvent()`** Konstruktor erstellt ein neues [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent)-Objekt. Normalerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erzeugt werden, wenn ein [`MIDIInput`](/de/docs/Web/API/MIDIInput) das Empfangen von einem oder mehreren MIDI-Nachrichten abschließt.

## Syntax

```js-nolint
new MIDIMessageEvent(type)
new MIDIMessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß-/Kleinschreibung-sensitiv und von Browsern immer auf `MIDIMessageEvent` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `data`
      - : Eine {{jsxref("Uint8Array")}}-Instanz, die die Datenbytes der MIDI-Nachricht enthält.

### Rückgabewert

Ein neues [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
