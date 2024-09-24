---
title: "WorkerGlobalScope: rejectionhandled-Ereignis"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`rejectionhandled`**-Ereignis wird an den globalen Bereich des Skripts gesendet (typischerweise {{domxref("WorkerGlobalScope")}}), wann immer ein abgelehntes {{jsxref("Promise")}} verspätet behandelt wird, d. h., wenn ein Handler an das Promise angehängt wird, nachdem seine Ablehnung ein {{domxref("WorkerGlobalScope.unhandledrejection_event", "unhandledrejection")}}-Ereignis verursacht hat.

Dies kann beim Debuggen und zur allgemeinen Anwendungsresilienz zusammen mit dem `unhandledrejection`-Ereignis verwendet werden, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
self.addEventListener("rejectionhandled", (event) => {});
self.onrejectionhandled = (event) => {};
```

## Ereignistyp

Ein {{domxref("PromiseRejectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : Das abgelehnte {{jsxref("Promise")}}.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie an {{jsxref("Promise.reject()")}} übergeben.

## Beispiel

Sie können das `rejectionhandled`-Ereignis verwenden, um Promises, die abgelehnt wurden, zusammen mit den Gründen der Ablehnung in der Konsole zu protokollieren:

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
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("WorkerGlobalScope/unhandledrejection_event", "unhandledrejection")}}
