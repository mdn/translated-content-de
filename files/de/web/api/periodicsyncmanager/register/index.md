---
title: "PeriodicSyncManager: register()-Methode"
short-title: register()
slug: Web/API/PeriodicSyncManager/register
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`register()`**-Methode der [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle registriert eine periodische Sync-Anforderung mit dem Browser unter Verwendung des angegebenen Tags und der Optionen. Sie gibt ein {{jsxref('Promise')}} zurück, das gelöst wird, wenn die Registrierung abgeschlossen ist.

## Syntax

```js-nolint
register(tag, options)
```

### Parameter

- `tag`
  - : Ein eindeutiger {{jsxref('String')}}-Bezeichner.
- `options` {{optional_inline}}

  - : Ein {{jsxref('Object')}} mit den folgenden optionalen Daten:

    - `minInterval`
      - : Die minimale Intervallzeit in Millisekunden, in der der periodische Sync erfolgen soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} gelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein aktiver [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) vorhanden ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine Erlaubnis für den periodischen Hintergrund-Sync erteilt wurde.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das aktive Fenster nicht das Hauptfenster ist (nicht vom Typ `auxiliary` oder `top-level`).

## Beispiele

Die folgende asynchrone Funktion registriert einen periodischen Hintergrund-Sync in einem Mindestintervall von einem Tag aus einem Browsing-Kontext:

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

- [Reichhaltigere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
