---
title: "PeriodicSyncManager: unregister() Methode"
short-title: unregister()
slug: Web/API/PeriodicSyncManager/unregister
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`unregister()`**-Methode des
[`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interfaces hebt die Registrierung der periodischen Synchronisierungsanfrage auf, die dem angegebenen Tag entspricht, und gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Abmeldung abgeschlossen ist.

## Syntax

```js-nolint
unregister(tag)
```

### Parameter

- tag
  - : Der eindeutige {{jsxref('String')}}-Descriptor für die spezifische Hintergrundsynchronisation.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

Keine.

## Beispiele

Das folgende Beispiel entfernt eine periodische Synchronisierung, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Umfassendere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
