---
title: "Window: rejectionhandled Ereignis"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Das **`rejectionhandled`** Ereignis wird an den globalen Bereich des Skripts gesendet (meistens [`window`](/de/docs/Web/API/Window), aber auch [`Worker`](/de/docs/Web/API/Worker)), wann immer ein abgelehntes JavaScript-{{jsxref("Promise")}} verspätet behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem seine Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) Ereignis verursacht hat.

Dies kann beim Debugging und zur allgemeinen Anwendungsstabilität verwendet werden, zusammen mit dem `unhandledrejection`-Ereignis, das gesendet wird, wenn ein Promise abgelehnt wird, es jedoch zu diesem Zeitpunkt keinen Handler für die Ablehnung gibt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("rejectionhandled", (event) => {});
onrejectionhandled = (event) => {};
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie an {{jsxref("Promise.reject()")}} übergeben.

## Ereignishandler-Alias

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onrejectionhandled` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiel

Sie können das `rejectionhandled`-Ereignis verwenden, um in der Konsole Proxies zu protokollieren, die abgelehnt werden, sowie die Gründe, warum sie abgelehnt wurden:

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

- [Promise Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
