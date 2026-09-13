---
title: "WorkerGlobalScope: rejectionhandled Ereignis"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Das **`rejectionhandled`** Ereignis wird an den globalen Kontext des Skripts gesendet (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)), wenn ein abgelehnter {{jsxref("Promise")}} verspätet behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem dessen Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) Ereignis verursacht hat.

Dies kann beim Debugging und für die allgemeine Belastbarkeit von Anwendungen verwendet werden, zusammen mit dem `unhandledrejection` Ereignis, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("rejectionhandled", (event) => { })

onrejectionhandled = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Beispiel

Sie können das `rejectionhandled` Ereignis verwenden, um abgelehnte Promises zusammen mit den Gründen für ihre Ablehnung im Konsolenprotokoll zu protokollieren:

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

- [Promise Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
