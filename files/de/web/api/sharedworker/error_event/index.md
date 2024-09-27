---
title: "SharedWorker: error Ereignis"
short-title: error
slug: Web/API/SharedWorker/error_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Workers API")}}

Das **`error`** Ereignis der [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekt mithilfe des [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) Konstruktors und richtet einen `onerror` Handler für das resultierende Objekt ein:

```js
const mySharedWorker = new SharedWorker("shared-worker.js");

mySharedWorker.onerror = (event) => {
  console.error("There is an error with your worker!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
