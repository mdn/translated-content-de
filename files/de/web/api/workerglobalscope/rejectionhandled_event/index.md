---
title: "WorkerGlobalScope: rejectionhandled-Ereignis"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`rejectionhandled`**-Ereignis wird an den globalen Gültigkeitsbereich des Skripts gesendet (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)), wenn ein abgelehntes {{jsxref("Promise")}} nachträglich behandelt wird, d.h. wenn ein Handler an das Promise angefügt wird, nachdem dessen Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)-Ereignis verursacht hat.

Dies kann beim Debugging und für die allgemeine Anwendungsresilienz verwendet werden, zusammen mit dem `unhandledrejection`-Ereignis, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
self.addEventListener("rejectionhandled", (event) => {});
self.onrejectionhandled = (event) => {};
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das abgelehnte {{jsxref("Promise")}}.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder ein {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Beispiel

Sie können das `rejectionhandled`-Ereignis verwenden, um abgelehnte Promises zusammen mit den Gründen für deren Ablehnung im Konsolenprotokoll zu vermerken:

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
