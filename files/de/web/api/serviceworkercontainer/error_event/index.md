---
title: "ServiceWorkerContainer: error-Ereignis"
short-title: error
slug: Web/API/ServiceWorkerContainer/error_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{Deprecated_header}}{{Non-standard_header}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `error`-Ereignis wird ausgelöst, wenn ein Fehler im Service Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

```js
navigator.serviceWorker.onerror = (errorevent) => {
  console.error(`received error message: ${errorevent.message}`);
};
```

## Browser-Kompatibilität

{{Compat}}
