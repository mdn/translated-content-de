---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
l10n:
  sourceCommit: 5d37c1082d5c4782d11bb23c5a6dd8ec73c2feed
---

{{APIRef("HTML DOM")}}

Die **`PromiseRejectionEvent`**-Schnittstelle repräsentiert Ereignisse, die an den globalen Skriptkontext gesendet werden, wenn JavaScript-{{jsxref("Promise")}}s abgelehnt werden. Diese Ereignisse sind besonders nützlich für Telemetrie- und Debugging-Zwecke.

Weitere Details finden Sie unter [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

{{InheritanceDiagram}}

## Konstruktor

- [`PromiseRejectionEvent()`](/de/docs/Web/API/PromiseRejectionEvent/PromiseRejectionEvent)
  - : Erstellt ein `PromiseRejectionEvent`-Ereignis, basierend auf dem Ereignistyp ([`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) oder [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)) und anderen Details.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder ein {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie an {{jsxref("Promise.reject()")}} übergeben.

## Instanz-Methoden

_Diese Schnittstelle hat keine einzigartigen Methoden; sie erbt Methoden von ihrem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

## Ereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird und nachdem die Ablehnung durch die Fehlerbehandlungs-Code des Promises behandelt wurde.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, es jedoch keinen Ablehnungs-Handler gibt, der mit der Ablehnung umgehen kann.

## Beispiele

Dieses einfache Beispiel fängt unbehandelte Promise-Ablehnungen ab und protokolliert sie zu Debugging-Zwecken.

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
