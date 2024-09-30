---
title: "PeriodicSyncEvent: PeriodicSyncEvent()-Konstruktor"
short-title: PeriodicSyncEvent()
slug: Web/API/PeriodicSyncEvent/PeriodicSyncEvent
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`PeriodicSyncEvent()`**-Konstruktor erstellt ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet. Der Browser erstellt diese Objekte selbst und stellt sie dem [`onperiodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Callback zur Verfügung.

## Syntax

```js-nolint
new PeriodicSyncEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive und Browser setzen es auf `periodicsync`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind_, die folgenden Eigenschaften haben kann:
    - `tag`
      - : Das Tag, das das Sync-Ereignis referenziert.

### Rückgabewert

Ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Objekt, das mit den angegebenen Eingaben konfiguriert ist.

## Beispiele

Dieses Beispiel konstruiert ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) mit dem entsprechenden zugehörigen Tag.

```js
const psEvent = new ExtendableEvent("periodicsync", { tag: "unique-tag" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demonstrations-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
