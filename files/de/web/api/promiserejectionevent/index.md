---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
l10n:
  sourceCommit: bcb3ff5a0fd5080c2ce109d0eb17831b6ef57a2d
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die Schnittstelle **`PromiseRejectionEvent`** repräsentiert Ereignisse, die an den globalen Skript-Kontext gesendet werden, wenn JavaScript-{{jsxref("Promise")}}s abgelehnt werden. Diese Ereignisse sind besonders nützlich für Telemetrie- und Debugging-Zwecke.

Details finden Sie unter [Promise-Rejection-Ereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

{{InheritanceDiagram}}

## Konstruktor

- [`PromiseRejectionEvent()`](/de/docs/Web/API/PromiseRejectionEvent/PromiseRejectionEvent)
  - : Erstellt ein `PromiseRejectionEvent`-Ereignis, basierend auf dem Ereignistyp ([`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) oder [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)) und weiteren Details.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder ein {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie bei {{jsxref("Promise.reject()")}} übergeben.

## Instanz-Methoden

_Diese Schnittstelle hat keine einzigartigen Methoden; erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Ereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird und nachdem die Ablehnung durch den Ablehnungsbehandlungscode des Promises bearbeitet wurde.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, aber kein Ablehnungsbehandler vorhanden ist, um die Ablehnung zu bewältigen.

## Beispiele

Dieses einfache Beispiel fängt nicht behandelte Promise-Ablehnungen ab und protokolliert sie zu Debugging-Zwecken.

```js
window.onunhandledrejection = (e) => {
  console.log(e.reason);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
