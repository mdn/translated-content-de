---
title: "WorkerGlobalScope: rejectionhandled Ereignis"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`rejectionhandled`** Ereignis wird an den globalen Skript-Bereich (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)) gesendet, wann immer ein abgelehntes {{jsxref("Promise")}} verspätet behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem seine Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) Ereignis ausgelöst hatte.

Dies kann beim Debuggen und für die allgemeine Anwendungsresilienz verwendet werden, in Kombination mit dem `unhandledrejection` Ereignis, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("rejectionhandled", (event) => { })

onrejectionhandled = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das abgelehnte {{jsxref("Promise")}}.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Beispiel

Sie können das `rejectionhandled` Ereignis verwenden, um Promise-Ablehnungen und die Gründe dafür in der Konsole zu protokollieren:

```js
self.addEventListener("rejectionhandled", (event) => {
  console.log(`Promise rejected; reason: ${event.reason}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
