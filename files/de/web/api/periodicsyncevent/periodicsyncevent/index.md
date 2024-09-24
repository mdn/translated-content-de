---
title: "PeriodicSyncEvent: PeriodicSyncEvent() Konstruktor"
short-title: PeriodicSyncEvent()
slug: Web/API/PeriodicSyncEvent/PeriodicSyncEvent
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`PeriodicSyncEvent()`** Konstruktor erstellt ein neues {{domxref("PeriodicSyncEvent")}} Objekt. Dieser Konstruktor wird normalerweise nicht verwendet. Der Browser erstellt diese Objekte selbst und übergibt sie an den {{domxref('ServiceWorkerGlobalScope.periodicsync_event', 'onperiodicsync')}} Callback.

## Syntax

```js-nolint
new PeriodicSyncEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist groß- und kleinschreibungssensitiv und Browser setzen es auf `periodicsync`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `tag`
      - : Der Tag, der auf das Sync-Ereignis verweist.

### Rückgabewert

Ein neues {{domxref("PeriodicSyncEvent")}} Objekt, das mit den angegebenen Eingaben konfiguriert ist.

## Beispiele

Dieses Beispiel konstruiert ein neues {{domxref('PeriodicSyncEvent')}} mit dem relevanten zugeordneten Tag.

```js
const psEvent = new ExtendableEvent("periodicsync", { tag: "unique-tag" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
