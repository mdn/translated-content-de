---
title: "PeriodicSyncManager: register() Methode"
short-title: register()
slug: Web/API/PeriodicSyncManager/register
l10n:
  sourceCommit: 4b33c650e27ddb5f82b6b0fc6f83c9a810eaca81
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`register()`**-Methode der [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle registriert eine periodische Synchronisierungsanforderung beim Browser mit dem angegebenen Tag und Optionen. Sie gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Registrierung abgeschlossen ist.

Die Methode erfordert die Berechtigung `periodic-background-sync`; siehe die [Sicherheitsüberlegungen](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API#security_considerations) der API für Details.

## Syntax

```js-nolint
register(tag, options)
```

### Parameter

- `tag`
  - : Ein einzigartiger {{jsxref('String')}}-Bezeichner.
- `options` {{optional_inline}}
  - : Ein {{jsxref('Object')}} mit den folgenden optionalen Daten:
    - `minInterval`
      - : Die Mindestintervallzeit in Millisekunden, in der die periodische Synchronisierung erfolgen soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein aktiver [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) vorhanden ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Berechtigung `periodic-background-sync` nicht erteilt wird.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktive Fenster nicht das Hauptfenster ist (nicht vom Typ `auxiliary` oder `top-level`).

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

- [Reichhaltigere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
