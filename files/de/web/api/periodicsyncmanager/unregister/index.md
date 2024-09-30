---
title: "PeriodicSyncManager: unregister() Methode"
short-title: unregister()
slug: Web/API/PeriodicSyncManager/unregister
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`unregister()`** Methode der [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) Schnittstelle hebt die Registrierung der periodischen Synchronisierungsanforderung für die angegebene Kennung auf und gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Abmeldung abgeschlossen ist.

## Syntax

```js-nolint
unregister(tag)
```

### Parameter

- tag
  - : Der eindeutige {{jsxref('String')}}-Bezeichner für die spezifische Hintergrundsynchronisierung.

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

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
