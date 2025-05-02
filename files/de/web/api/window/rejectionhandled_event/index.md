---
title: "Window: rejectionhandled Ereignis"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`rejectionhandled`**-Ereignis wird an den globalen Gültigkeitsbereich des Skripts gesendet (normalerweise [`window`](/de/docs/Web/API/Window), aber auch [`Worker`](/de/docs/Web/API/Worker)), wann immer ein abgelehntes JavaScript-{{jsxref("Promise")}} verspätet behandelt wird, d.h. wenn ein Handler an das Promise angehängt wird, nachdem dessen Ablehnung ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis verursacht hatte.

Dies kann beim Debuggen und für die allgemeine Widerstandsfähigkeit von Anwendungen in Verbindung mit dem `unhandledrejection`-Ereignis genutzt werden, das gesendet wird, wenn ein Promise abgelehnt wird, aber zu diesem Zeitpunkt kein Handler für die Ablehnung vorhanden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("rejectionhandled", (event) => { })

onrejectionhandled = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder ein {{jsxref("Object")}}, das angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Aliase für Ereignis-Handler

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onrejectionhandled` auch bei folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiel

Sie können das `rejectionhandled`-Ereignis verwenden, um Versprechen, die abgelehnt werden, zusammen mit den Gründen, warum sie abgelehnt wurden, in die Konsole zu protokollieren:

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
