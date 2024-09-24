---
title: "PeriodicSyncManager: register()-Methode"
short-title: register()
slug: Web/API/PeriodicSyncManager/register
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`register()`**-Methode des
{{domxref("PeriodicSyncManager")}}-Interfaces registriert eine periodische Synchronisationsanfrage beim
Browser mit dem angegebenen Tag und den Optionen. Sie gibt ein {{jsxref('Promise')}} zurück, das
aufgelöst wird, wenn die Registrierung abgeschlossen ist.

## Syntax

```js-nolint
register(tag, options)
```

### Parameter

- `tag`
  - : Ein eindeutiger {{jsxref('String')}}-Identifikator.
- `options` {{optional_inline}}

  - : Ein {{jsxref('Object')}} mit den folgenden optionalen Daten:

    - `minInterval`
      - : Die minimale Intervallzeit in Millisekunden, in der
        die periodische Synchronisation stattfinden soll.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn kein aktiver {{domxref('ServiceWorker')}} vorhanden ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn keine Berechtigung für die periodische Hintergrundsynchronisation erteilt wurde.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das aktive Fenster nicht das Hauptfenster ist (nicht vom Typ `auxiliary` oder `top-level`).

## Beispiele

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisation in einem Mindestintervall von einem Tag aus einem Browsing-Kontext:

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Bereicherung von Offline-Erlebnissen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App der Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
