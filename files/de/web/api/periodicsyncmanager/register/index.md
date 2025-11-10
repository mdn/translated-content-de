---
title: "PeriodicSyncManager: Methode register()"
short-title: register()
slug: Web/API/PeriodicSyncManager/register
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`register()`**-Methode des
[`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interfaces registriert eine periodische Synchronisierungsanfrage beim
Browser mit dem angegebenen Tag und Optionen. Sie gibt ein {{jsxref('Promise')}}
zurück, das sich auflöst, wenn die Registrierung abgeschlossen ist.

## Syntax

```js-nolint
register(tag, options)
```

### Parameter

- `tag`
  - : Ein einzigartiger {{jsxref('String')}}-Identifikator.
- `options` {{optional_inline}}
  - : Ein {{jsxref('Object')}} enthält die folgenden optionalen Daten:
    - `minInterval`
      - : Die minimale Intervallzeit in Millisekunden, in der
        die periodische Synchronisierung erfolgen soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das sich mit {{jsxref('undefined')}} auflöst.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein aktiver [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) vorhanden ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Erlaubnis für die Hintergrundperiodensynchronisation nicht erteilt ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das aktive Fenster nicht das Hauptfenster ist (nicht vom Typ `auxiliary` oder `top-level`).

## Beispiele

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisation mit einem minimalen
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
