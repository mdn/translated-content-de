---
title: "PeriodicSyncManager: register() Methode"
short-title: register()
slug: Web/API/PeriodicSyncManager/register
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`register()`** Methode des
[`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interfaces registriert eine periodische Synchronisierungsanfrage mit dem
Browser mit dem angegebenen Tag und Optionen. Sie gibt ein {{jsxref('Promise')}} zurück, das
aufgelöst wird, wenn die Registrierung abgeschlossen ist.

## Syntax

```js-nolint
register(tag, options)
```

### Parameter

- `tag`
  - : Eine eindeutige {{jsxref('String')}}-Kennung.
- `options` {{optional_inline}}
  - : Ein {{jsxref('Object')}} mit den folgenden optionalen Daten:
    - `minInterval`
      - : Die minimale Intervallzeit in Millisekunden, in der die
        periodische Synchronisierung erfolgen soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein aktiver [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) vorhanden ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Berechtigung für die periodische Hintergrundsynchronisierung nicht erteilt wurde.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das aktive Fenster nicht das Hauptfenster ist (nicht vom Typ `auxiliary` oder `top-level`).

## Beispiele

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisierung mit einem Mindestintervall von einem Tag aus einem Browsing-Kontext:

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("fetch-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Umfassendere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Periodic Background Sync Demo-Anwendung](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
