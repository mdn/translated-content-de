---
title: "WorkerGlobalScope: unhandledrejection event"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Scope (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)) eines Skripts gesendet, wenn ein {{jsxref("Promise")}} abgelehnt wird, der keinen Ablehnungs-Handler hat.

Dies ist nützlich für das Debuggen und um eine fallback Fehlerbehandlung für unerwartete Situationen bereitzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("unhandledrejection", (event) => { })

onunhandledrejection = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- [`PromiseRejectionEvent.promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : Das JavaScript {{jsxref("Promise")}}, das abgelehnt wurde.
- [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Versprechen abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Beispiele

### Grundlegende Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die unbehandelte Promise-Ablehnung in der Konsole.

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection` Ereignis-Handler-Eigenschaft verwenden, um den Ereignis-Listener einzurichten:

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Standardbehandlung verhindern

Viele Umgebungen (wie {{Glossary("Node.js", "Node.js")}}) melden unbehandelte Promise-Ablehnungen standardmäßig in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection` Ereignisse hinzufügen, der – zusätzlich zu allen anderen Aufgaben, die Sie ausführen möchten – [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis zu stornieren und zu verhindern, dass es zur Laufzeit an das Protokollierungscode weitergegeben wird. Dies funktioniert, da `unhandledrejection` abbrechbar ist.

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
