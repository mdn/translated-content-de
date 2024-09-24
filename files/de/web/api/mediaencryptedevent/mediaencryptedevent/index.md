---
title: "MediaEncryptedEvent: MediaEncryptedEvent() Konstruktor"
short-title: MediaEncryptedEvent()
slug: Web/API/MediaEncryptedEvent/MediaEncryptedEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Encrypted Media Extensions")}}

Der **`MediaEncryptedEvent`** Konstruktor erstellt ein neues {{domxref("MediaEncryptedEvent")}} Objekt.

> [!NOTE]
> In der Regel müssen Sie diesen Konstruktor in Ihrem Code nicht aufrufen, da solche Ereignisse normalerweise vom Browser bei Bedarf generiert werden.

## Syntax

```js-nolint
new MediaEncryptedEvent(type)
new MediaEncryptedEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist groß- und kleinschreibungssensitiv und wird von Browsern immer auf `encrypted` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den im {{domxref("Event/Event", "Event()")}} definierten Eigenschaften folgende Eigenschaften haben kann:
    - `initDataType`
      - : Ein String mit dem Typ der Initialisierungsdaten, die in diesem Objekt enthalten sind.
    - `message`
      - : Ein {{jsxref("ArrayBuffer")}} mit den Initialisierungsdaten oder `null`, falls keine vorhanden sind.

### Rückgabewert

Ein neues {{domxref("MediaEncryptedEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
