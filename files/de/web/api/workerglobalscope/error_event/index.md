---
title: "WorkerGlobalScope: error Event"
short-title: error
slug: Web/API/WorkerGlobalScope/error_event
l10n:
  sourceCommit: e472a1caa80ace5959961f741fec330a9e61b672
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`error`**-Ereignis der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (message, filename, lineno, colno, error) => {};
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei [`Window`](/de/docs/Web/API/Window)- und `WorkerGlobalScope`-Objekten die einzige Ereignishandler-Eigenschaft, die mehr als ein Argument erhält.
>
> Für weitere Details hierzu, siehe die Seite über das [`error`](/de/docs/Web/API/Window/error_event)-Ereignis bei `Window`-Objekten.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onerror`-Handler, der innerhalb eines Workers festgelegt ist:

```js
self.onerror = () => {
  console.log("There is an error inside your worker!");
};
```

Der gleiche Ausschnitt, aber mit der Verwendung von `addEventListener()`:

```js
self.addEventListener("error", () => {
  console.log("There is an error inside your worker!");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope), zu der es gehört.
