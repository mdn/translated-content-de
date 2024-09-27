---
title: "PeriodicSyncEvent: PeriodicSyncEvent() Konstruktor"
short-title: PeriodicSyncEvent()
slug: Web/API/PeriodicSyncEvent/PeriodicSyncEvent
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`PeriodicSyncEvent()`** Konstruktor
erstellt ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Objekt. Dieser Konstruktor wird in der Regel nicht verwendet. Der Browser erstellt diese Objekte selbst und stellt sie dem [`onperiodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Callback zur Verfügung.

## Syntax

```js-nolint
new PeriodicSyncEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `periodicsync`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `tag`
      - : Der Tag, der auf das Sync-Ereignis verweist.

### Rückgabewert

Ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Objekt, das mit den gegebenen Eingaben konfiguriert wurde.

## Beispiele

Dieses Beispiel erstellt ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) mit dem entsprechenden
zugehörigen Tag.

```js
const psEvent = new ExtendableEvent("periodicsync", { tag: "unique-tag" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Umfassendere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
