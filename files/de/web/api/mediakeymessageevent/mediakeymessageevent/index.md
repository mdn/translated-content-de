---
title: "MediaKeyMessageEvent: MediaKeyMessageEvent() Konstruktor"
short-title: MediaKeyMessageEvent()
slug: Web/API/MediaKeyMessageEvent/MediaKeyMessageEvent
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Der **`MediaKeyMessageEvent`** Konstruktor erstellt ein neues [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent) Objekt.

## Syntax

```js-nolint
new MediaKeyMessageEvent(type)
new MediaKeyMessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es immer auf `message`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _neben den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `messageType`
      - : Ein Nachrichtentyp, der es Anwendungen ermöglicht, Nachrichten zu unterscheiden, ohne sie zu parsen.
        Erlaubte Werte sind: `license-request`, `license-renewal`, `license-renewal`, oder `individualization-request`.
    - `message`
      - : Ein Array, das die vom Inhaltsentschlüsselungsmodul generierte Nachricht enthält.

### Rückgabewert

Ein neues [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
