---
title: "SharedWorker: Fehlerereignis"
short-title: Fehler
slug: Web/API/SharedWorker/error_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Workers API")}}

Das **`error`**-Ereignis der {{domxref("SharedWorker")}}-Schnittstelle wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Der folgende Codeausschnitt erstellt ein {{domxref("SharedWorker")}}-Objekt mit dem {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}-Konstruktor und richtet einen `onerror`-Handler auf dem resultierenden Objekt ein:

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
