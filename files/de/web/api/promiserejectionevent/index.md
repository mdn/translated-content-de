---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
l10n:
  sourceCommit: 5d37c1082d5c4782d11bb23c5a6dd8ec73c2feed
---

{{APIRef("HTML DOM")}}

Die **`PromiseRejectionEvent`**-Schnittstelle repräsentiert Ereignisse, die an den globalen Skript-Kontext gesendet werden, wenn JavaScript-{{jsxref("Promise")}}s abgelehnt werden. Diese Ereignisse sind besonders nützlich für Telemetrie- und Debugging-Zwecke.

Für Details siehe [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

{{InheritanceDiagram}}

## Konstruktor

- [`PromiseRejectionEvent()`](/de/docs/Web/API/PromiseRejectionEvent/PromiseRejectionEvent)
  - : Erstellt ein `PromiseRejectionEvent`-Ereignis, basierend auf dem Ereignistyp ([`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) oder [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)) und weiteren Details.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Element [`Event`](/de/docs/Web/API/Event)_.

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder ein {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden; sie erbt Methoden von ihrem Eltern-Element [`Event`](/de/docs/Web/API/Event)_.

## Ereignisse

- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird und nachdem die Ablehnung mit dem Ablehnungsbehandlungscode des Promises behandelt wurde.
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, aber kein Ablehnungshandler vorhanden ist, um die Ablehnung zu behandeln.

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
