---
title: "Window: rejectionhandled-Event"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("HTML DOM")}}

Das **`rejectionhandled`**-Event wird an den globalen Bereich des Skripts gesendet (normalerweise [`window`](/de/docs/Web/API/Window), aber auch [`Worker`](/de/docs/Web/API/Worker)), wann immer ein abgelehntes JavaScript-{{jsxref("Promise")}} spät behandelt wird, d.h. wenn ein Handler dem Promise hinzugefügt wird, nachdem seine Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Event verursacht hatte.

Dies kann beim Debuggen und zur allgemeinen Anwendungsstabilität zusammen mit dem `unhandledrejection`-Event verwendet werden, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("rejectionhandled", (event) => { })

onrejectionhandled = (event) => { }
```

## Event-Typ

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Event-Eigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Event-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onrejectionhandled` auch auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiel

Sie können das `rejectionhandled`-Event verwenden, um Promises, die abgelehnt werden, zusammen mit den Gründen, warum sie abgelehnt wurden, in die Konsole zu protokollieren:

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

- [Promise-Rejection-Events](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
