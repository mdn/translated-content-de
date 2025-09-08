---
title: "PeriodicSyncManager: unregister()-Methode"
short-title: unregister()
slug: Web/API/PeriodicSyncManager/unregister
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`unregister()`**-Methode des
[`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interfaces entfernt die periodische Synchronisationsanfrage, die dem angegebenen Tag entspricht, und gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Deregistrierung abgeschlossen ist.

## Syntax

```js-nolint
unregister(tag)
```

### Parameter

- tag
  - : Der eindeutige {{jsxref('String')}}-Bezeichner für die spezifische Hintergrundsynchronisation.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

Keine.

## Beispiele

Das folgende Beispiel entfernt eine periodische Synchronisation, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

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

- [Erweiterte Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
