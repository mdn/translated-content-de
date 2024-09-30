---
title: "WorkerGlobalScope: unhandledrejection Ereignis"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Scope (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)) eines Skripts gesendet, wenn ein {{jsxref("Promise")}}, das keinen Rejektions-Handler hat, abgelehnt wird.

Dies ist nützlich zum Debuggen und um Fallback-Fehlerbehandlungen für unerwartete Situationen bereitzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
self.addEventListener("unhandledrejection", (event) => {});
self.onunhandledrejection = (event) => {};
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript {{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder ein {{jsxref("Object")}}, das angibt, warum das Promise abgelehnt wurde, wie an {{jsxref("Promise.reject()")}} übergeben.

## Beispiele

### Grundlegendes Fehlerprotokoll

Dieses Beispiel protokolliert Informationen über die nicht behandelte Promise-Ablehnung in der Konsole.

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection`-Event-Handler-Eigenschaft verwenden, um den Event-Listener einzurichten:

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Verhindern der Standardbehandlung

Viele Umgebungen (wie [Node.js](/de/docs/Glossary/Node.js)) melden standardmäßig nicht behandelte Promise-Ablehnungen in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection`-Ereignisse hinzufügen, der—zusätzlich zu anderen Aufgaben, die Sie ausführen möchten—[`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen und zu verhindern, dass es durch die Logging-Code der Laufzeitumgebung behandelt wird. Dies funktioniert, weil `unhandledrejection` abbruchfähig ist.

```js
self.addEventListener("unhandledrejection", (event) => {
  // code for handling the unhandled rejection
  // …

  // Prevent the default handling (such as outputting the
  // error to the console)

  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Promise-Rejektionsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) Ereignis
