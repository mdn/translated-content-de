---
title: "SharedWorker: Fehlerereignis"
short-title: error
slug: Web/API/SharedWorker/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}

Das **`error`**-Ereignis der [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt mithilfe des [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktors und richtet einen `onerror`-Handler auf dem resultierenden Objekt ein:

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
