---
title: "MediaEncryptedEvent: MediaEncryptedEvent() Konstruktor"
short-title: MediaEncryptedEvent()
slug: Web/API/MediaEncryptedEvent/MediaEncryptedEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Encrypted Media Extensions")}}

Der **`MediaEncryptedEvent`**-Konstruktor erstellt ein neues [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent)-Objekt.

> [!NOTE]
> In der Regel müssen Sie diesen Konstruktor in Ihrem Code nicht aufrufen, da solche Ereignisse normalerweise vom Browser bei Bedarf generiert werden.

## Syntax

```js-nolint
new MediaEncryptedEvent(type)
new MediaEncryptedEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es immer auf `encrypted`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `initDataType`
      - : Ein String mit dem Typ der in diesem Objekt enthaltenen Initialisierungsdaten.
    - `message`
      - : Ein {{jsxref("ArrayBuffer")}} mit den Initialisierungsdaten oder `null`, wenn keine vorhanden sind.

### Rückgabewert

Ein neues [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
