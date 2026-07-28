---
title: "WorkerGlobalScope: rejectionhandled Ereignis"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Das **`rejectionhandled`** Ereignis wird an den globalen Skriptbereich gesendet (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)), sobald ein abgelehntes {{jsxref("Promise")}} später behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem seine Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) Ereignis verursacht hat.

Dies kann beim Debuggen und zur allgemeinen Anpassungsfähigkeit von Anwendungen verwendet werden, in Verbindung mit dem `unhandledrejection` Ereignis, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("rejectionhandled", (event) => { })

onrejectionhandled = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Beispiel

Sie können das `rejectionhandled` Ereignis verwenden, um Promises, die abgelehnt werden, zusammen mit den Gründen für ihre Ablehnung im Konsolenprotokoll aufzuzeichnen:

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
