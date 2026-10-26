---
title: "Worker: error-Ereignis"
short-title: error
slug: Web/API/Worker/error_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Das **`error`**-Ereignis der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle wird ausgelöst, wenn im Worker ein Fehler auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Handler zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erstellt mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor ein [`Worker`](/de/docs/Web/API/Worker)-Objekt und richtet für das erstellte Objekt einen `onerror`-Handler ein:

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
