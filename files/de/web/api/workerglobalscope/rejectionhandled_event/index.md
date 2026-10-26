---
title: "WorkerGlobalScope: rejectionhandled-Ereignis"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Das **`rejectionhandled`**-Ereignis wird an den globalen Gültigkeitsbereich des Skripts gesendet (in der Regel [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)), wenn eine abgelehnte {{jsxref("Promise")}} erst nachträglich behandelt wird, d.h. wenn ihr ein Handler hinzugefügt wird, nachdem ihre Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)-Ereignis ausgelöst hat.

Zusammen mit dem `unhandledrejection`-Ereignis kann dies bei der Fehlersuche und zur Verbesserung der Robustheit einer Anwendung verwendet werden. Das `unhandledrejection`-Ereignis wird gesendet, wenn eine Promise abgelehnt wird, zu diesem Zeitpunkt aber kein Handler für die Ablehnung vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("rejectionhandled", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle festlegen:

```js-nolint
onrejectionhandled = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Beispiel

Mit dem `rejectionhandled`-Ereignis können Sie abgelehnte Promises zusammen mit den Gründen für ihre Ablehnung in der Konsole protokollieren:

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

- [Ereignisse bei der Ablehnung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
