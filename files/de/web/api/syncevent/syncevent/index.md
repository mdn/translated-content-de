---
title: "SyncEvent: SyncEvent() Konstruktor"
short-title: SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

Der **`SyncEvent()`** Konstruktor erstellt ein neues {{domxref("SyncEvent")}} Objekt.

## Syntax

```js-nolint
new SyncEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es immer auf `sync`.
- `options`
  - : Ein Objekt, das zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `tag`
      - : Eine vom Entwickler definierte eindeutige Kennung für dieses `SyncEvent`.
    - `lastChance` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der User-Agent nach dem aktuellen Versuch keine weiteren Synchronisierungsversuche unternimmt.
        Standardmäßig ist es `false`.

### Rückgabewert

Ein neues {{domxref("SyncEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
