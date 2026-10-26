---
title: "Window: rejectionhandled-Ereignis"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("HTML DOM")}}

Das **`rejectionhandled`**-Ereignis wird an den globalen Gültigkeitsbereich des Skripts gesendet (in der Regel [`window`](/de/docs/Web/API/Window), aber auch [`Worker`](/de/docs/Web/API/Worker)), wenn eine abgelehnte JavaScript-{{jsxref("Promise")}} verspätet behandelt wird. Das heißt, ein Handler wird erst an die Promise angehängt, nachdem ihre Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis ausgelöst hat.

Zusammen mit dem `unhandledrejection`-Ereignis kann dies zur Fehlersuche und zur Verbesserung der Robustheit einer Anwendung verwendet werden. Das `unhandledrejection`-Ereignis wird gesendet, wenn eine Promise abgelehnt wird und zu diesem Zeitpunkt kein Handler für die Ablehnung vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("rejectionhandled", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onrejectionhandled = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Aliasse für Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onrejectionhandled` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiel

Sie können das `rejectionhandled`-Ereignis verwenden, um abgelehnte Promises zusammen mit den Gründen für ihre Ablehnung in der Konsole zu protokollieren:

```js
window.addEventListener("rejectionhandled", (event) => {
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
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
