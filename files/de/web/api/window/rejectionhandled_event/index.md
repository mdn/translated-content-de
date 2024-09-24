---
title: "Window: rejectionhandled-Ereignis"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Das **`rejectionhandled`**-Ereignis wird an den globalen Skriptbereich (normalerweise {{domxref("window")}}, aber auch {{domxref("Worker")}}) gesendet, wenn ein abgelehntes JavaScript-{{jsxref("Promise")}} verspätet behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem seine Ablehnung ein {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}-Ereignis verursacht hat.

Dies kann im Debugging und zur allgemeinen Anwendungsausfallsicherheit in Kombination mit dem `unhandledrejection`-Ereignis verwendet werden, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("rejectionhandled", (event) => {});
onrejectionhandled = (event) => {};
```

## Ereignistyp

Ein {{domxref("PromiseRejectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie an {{jsxref("Promise.reject()")}} übergeben.

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onrejectionhandled` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiel

Sie können das `rejectionhandled`-Ereignis verwenden, um Promises, die abgelehnt werden, zusammen mit den Gründen, warum sie abgelehnt wurden, in die Konsole zu protokollieren:

```js
window.addEventListener(
  "rejectionhandled",
  (event) => {
    console.log(`Promise rejected; reason: ${event.reason}`);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
