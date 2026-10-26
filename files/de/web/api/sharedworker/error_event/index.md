---
title: "SharedWorker: error-Ereignis"
short-title: error
slug: Web/API/SharedWorker/error_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Web Workers API")}}

Das **`error`**-Ereignis der [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle wird ausgelöst, wenn im Worker ein Fehler auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erstellt mit dem [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt und richtet für das resultierende Objekt einen `onerror`-Handler ein:

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
