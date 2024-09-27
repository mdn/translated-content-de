---
title: "WorkerGlobalScope: unhandledrejection Ereignis"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Geltungsbereich (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)) eines Skripts gesendet, wenn ein {{jsxref("Promise")}} ohne Ablehnungs-Handler abgelehnt wird.

Dies ist nützlich zum Debuggen und für die Bereitstellung einer alternativen Fehlerbehandlung für unerwartete Situationen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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
  - : Ein Wert oder ein {{jsxref("Object")}}, der den Grund für die Ablehnung des Promise angibt, wie er an {{jsxref("Promise.reject()")}} übergeben wurde.

## Beispiele

### Grundlegendes Fehlerprotokoll

Dieses Beispiel protokolliert Informationen über die unbehandelte Promise-Ablehnung in der Konsole.

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection` Ereignishandler-Eigenschaft verwenden, um den Ereignislistener einzurichten:

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Verhindern der Standardbehandlung

Viele Umgebungen (wie [Node.js](/de/docs/Glossary/Node.js)) berichten standardmäßig über unbehandelte Promise-Ablehnungen in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection` Ereignisse hinzufügen, der – zusätzlich zu allen anderen Aufgaben, die Sie ausführen möchten – [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen und zu verhindern, dass es durch die Protokollierungslogik der Laufzeit behandelt wird. Dies funktioniert, weil `unhandledrejection` abgebrochen werden kann.

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

- [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) Ereignis
