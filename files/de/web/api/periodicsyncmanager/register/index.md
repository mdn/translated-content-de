---
title: "PeriodicSyncManager: register()-Methode"
short-title: register()
slug: Web/API/PeriodicSyncManager/register
l10n:
  sourceCommit: 27de1181cdf5485353bbabaccaf22a8ed1d828d8
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`register()`**-Methode der
[`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle registriert eine periodische Synchronisierungsanfrage beim
Browser mit dem angegebenen Tag und den Optionen. Sie gibt ein {{jsxref('Promise')}} zurück, das
gelöst wird, wenn die Registrierung abgeschlossen ist.

## Syntax

```js-nolint
register(tag, options)
```

### Parameter

- `tag`
  - : Ein eindeutiger {{jsxref('String')}}-Bezeichner.
- `options` {{optional_inline}}
  - : Ein {{jsxref('Object')}}, das die folgenden optionalen Daten enthält:
    - `minInterval`
      - : Die minimale Intervallzeit in Millisekunden, in der
        die periodische Synchronisierung erfolgen soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} gelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein aktiver [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) vorhanden ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `periodic-background-sync`-Berechtigung nicht erteilt ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktive Fenster nicht das Hauptfenster ist (nicht vom Typ `auxiliary` oder `top-level`).

## Beispiele

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisierung in einem minimalen
Intervall von einem Tag aus einem Browsing-Kontext:

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

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
