---
title: "Worker: error Event"
short-title: error
slug: Web/API/Worker/error_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das **`error`**-Ereignis des [`Worker`](/de/docs/Web/API/Worker)-Interfaces wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt mittels des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors und richtet einen `onerror`-Handler für das resultierende Objekt ein:

```js
const myWorker = new Worker("worker.js");

myWorker.onerror = (event) => {
  console.log("There is an error with your worker!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
