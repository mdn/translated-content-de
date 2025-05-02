---
title: "WorkerGlobalScope: error Ereignis"
short-title: error
slug: Web/API/WorkerGlobalScope/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`error`** Ereignis der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (message, filename, lineno, colno, error) => { }
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei [`Window`](/de/docs/Web/API/Window) und `WorkerGlobalScope` Objekten die einzige Ereignishandler-Eigenschaft, die mehr als ein Argument erhält.
>
> Weitere Details dazu finden Sie auf der Seite für das [`error`](/de/docs/Web/API/Window/error_event) Ereignis bei `Window` Objekten.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onerror` Handler, der innerhalb eines Workers gesetzt wird:

```js
self.onerror = () => {
  console.log("There is an error inside your worker!");
};
```

Der gleiche Ausschnitt, aber mit `addEventListener()`:

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

Die [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle, zu der sie gehört.
