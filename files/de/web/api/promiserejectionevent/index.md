---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
l10n:
  sourceCommit: 5d37c1082d5c4782d11bb23c5a6dd8ec73c2feed
---

{{APIRef("HTML DOM")}}

Die **`PromiseRejectionEvent`**-Schnittstelle repräsentiert Ereignisse, die im globalen Skriptkontext gesendet werden, wenn JavaScript-{{jsxref("Promise")}}s abgelehnt werden. Diese Ereignisse sind besonders nützlich für Telemetrie- und Debuggingzwecke.

Für Details siehe [Promise-Rejektionsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PromiseRejectionEvent.PromiseRejectionEvent", "PromiseRejectionEvent()")}}
  - : Erstellt ein `PromiseRejectionEvent`-Ereignis, gegeben der Art des Ereignisses ([`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) oder [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)) und weitere Details.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Versprechen abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Instanz-Methoden

_Diese Schnittstelle hat keine einzigartigen Methoden; erbt Methoden von ihrem Elternteil {{domxref("Event")}}_.

## Ereignisse

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird und nachdem die Ablehnung durch den Ablehnungsbehandlungscode des Versprechens behandelt wurde.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Wird ausgelöst, wenn ein JavaScript-{{jsxref("Promise")}} abgelehnt wird, aber kein Ablehnungsbehandler vorhanden ist, um mit der Ablehnung umzugehen.

## Beispiele

Dieses einfache Beispiel fängt unbehandelte Promise-Ablehnungen ab und protokolliert sie zu Debuggingzwecken.

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
- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
