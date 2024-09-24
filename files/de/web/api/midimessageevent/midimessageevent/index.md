---
title: "MIDIMessageEvent: MIDIMessageEvent()-Konstruktor"
short-title: MIDIMessageEvent()
slug: Web/API/MIDIMessageEvent/MIDIMessageEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Der **`MIDIMessageEvent()`**-Konstruktor erstellt ein neues {{domxref("MIDIMessageEvent")}}-Objekt. Typischerweise wird dieser Konstruktor nicht verwendet, da Ereignisse erstellt werden, wenn ein {{domxref("MIDIInput")}} den Empfang eines oder mehrerer MIDI-Nachrichten abgeschlossen hat.

## Syntax

```js-nolint
new MIDIMessageEvent(type)
new MIDIMessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses. Es ist groß-/klein-schreibungssensitiv und Browser setzen es immer auf `MIDIMessageEvent`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in {{domxref("Event/Event", "Event()")}} definiert sind_, die folgenden Eigenschaften haben kann:
    - `data`
      - : Eine {{jsxref("Uint8Array")}}-Instanz, die die Datenbytes der MIDI-Nachricht enthält.

### Rückgabewert

Ein neues {{domxref("MIDIMessageEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
