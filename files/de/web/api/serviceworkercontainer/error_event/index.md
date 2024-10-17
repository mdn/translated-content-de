---
title: "ServiceWorkerContainer: Fehlerereignis"
short-title: error
slug: Web/API/ServiceWorkerContainer/error_event
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Service Workers API")}}{{Deprecated_header}}{{Non-standard_header}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `error`-Ereignis wird ausgelöst, wenn ein Fehler im Service Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

```js
navigator.serviceWorker.onerror = (event) => {
  console.error(`received error message: ${event.message}`);
};
```

## Browser-Kompatibilität

{{Compat}}
