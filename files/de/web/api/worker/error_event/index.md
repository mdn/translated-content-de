---
title: "Worker: error Event"
short-title: error
slug: Web/API/Worker/error_event
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das **`error`** Ereignis der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Das folgende Codebeispiel erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor und richtet einen `onerror`-Handler an dem resultierenden Objekt ein:

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
