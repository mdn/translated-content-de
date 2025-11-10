---
title: "Worker: error event"
short-title: error
slug: Web/API/Worker/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das **`error`**-Ereignis des [`Worker`](/de/docs/Web/API/Worker)-Interfaces wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt mithilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors und richtet einen `onerror`-Handler auf dem resultierenden Objekt ein:

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
