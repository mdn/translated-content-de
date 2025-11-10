---
title: "WorkerGlobalScope: rejectionhandled Ereignis"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Das **`rejectionhandled`** Ereignis wird an den globalen Bereich des Skripts gesendet (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)), immer wenn ein abgelehntes {{jsxref("Promise")}} verspätet behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem seine Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) Ereignis verursacht hat.

Dies kann beim Debuggen und für die allgemeine Anwendungsresilienz in Verbindung mit dem `unhandledrejection` Ereignis verwendet werden, welches gesendet wird, wenn ein Promise abgelehnt wird, es jedoch zum Zeitpunkt der Ablehnung keinen Handler gibt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

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
  - : Ein Wert oder ein {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie an {{jsxref("Promise.reject()")}} übergeben.

## Beispiel

Sie können das `rejectionhandled` Ereignis verwenden, um abgelehnte Promises zusammen mit den Gründen für die Ablehnung im Konsolenprotokoll aufzuzeichnen:

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

- [Promise rejection events](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
