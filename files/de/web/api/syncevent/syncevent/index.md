---
title: "SyncEvent: SyncEvent() Konstruktor"
short-title: SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

Der **`SyncEvent()`** Konstruktor erzeugt ein neues [`SyncEvent`](/de/docs/Web/API/SyncEvent) Objekt.

## Syntax

```js-nolint
new SyncEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es immer auf `sync`.
- `options`
  - : Ein Objekt, das zusätzlich zu den im [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften folgende Eigenschaften haben kann:
    - `tag`
      - : Ein von Entwicklern definierter eindeutiger Bezeichner für dieses `SyncEvent`.
    - `lastChance` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisationsversuche unternimmt.
        Standardmäßig ist er auf `false` gesetzt.

### Rückgabewert

Ein neues [`SyncEvent`](/de/docs/Web/API/SyncEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
