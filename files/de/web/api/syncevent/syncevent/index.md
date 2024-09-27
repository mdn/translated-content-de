---
title: "SyncEvent: SyncEvent() Konstruktor"
short-title: SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

Der **`SyncEvent()`** Konstruktor erstellt ein neues [`SyncEvent`](/de/docs/Web/API/SyncEvent)-Objekt.

## Syntax

```js-nolint
new SyncEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und wird von Browsern immer auf `sync` gesetzt.
- `options`
  - : Ein Objekt, das zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `tag`
      - : Eine vom Entwickler definierte eindeutige Kennung für dieses `SyncEvent`.
    - `lastChance` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der User-Agent nach dem aktuellen Versuch keine weiteren Synchronisierungsversuche unternimmt.
        Der Standardwert ist `false`.

### Rückgabewert

Ein neues [`SyncEvent`](/de/docs/Web/API/SyncEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
