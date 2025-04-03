---
title: "Window: rejectionhandled event"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

Das **`rejectionhandled`** Event wird an den globalen Bereich des Skripts gesendet (gewöhnlich [`window`](/de/docs/Web/API/Window), aber auch [`Worker`](/de/docs/Web/API/Worker)), wann immer ein abgelehntes JavaScript-{{jsxref("Promise")}} verspätet behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem dessen Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Event verursacht hat.

Dies kann zur Fehlersuche und für die allgemeine Anwendungsstabilität in Verbindung mit dem `unhandledrejection`-Event verwendet werden, das gesendet wird, wenn ein Promise abgelehnt wird, aber zum Zeitpunkt der Ablehnung kein Handler vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("rejectionhandled", (event) => {});
onrejectionhandled = (event) => {};
```

## Eventtyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder ein {{jsxref("Object")}}, das angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Aliase für Ereignishandler

Zusätzlich zur `Window`-Schnittstelle ist die Eigenschaft `onrejectionhandled` auch bei folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiel

Sie können das `rejectionhandled`-Event verwenden, um Versprechen, die abgelehnt wurden, zusammen mit den Gründen der Ablehnung in der Konsole zu protokollieren:

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
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
