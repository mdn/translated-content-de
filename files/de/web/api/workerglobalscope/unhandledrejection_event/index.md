---
title: "WorkerGlobalScope: unhandledrejection Ereignis"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Gültigkeitsbereich (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)) eines Skripts gesendet, wenn ein {{jsxref("Promise")}}, das keinen Ablehnungs-Handler hat, abgelehnt wird.

Dies ist nützlich für das Debuggen und um eine Fehlerbehandlung für unerwartete Situationen bereitzustellen.

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
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie er an {{jsxref("Promise.reject()")}} übergeben wurde.

## Beispiele

### Grundlegendes Fehlerprotokoll

Dieses Beispiel protokolliert Informationen über die nicht behandelte Promise-Ablehnung in die Konsole.

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection` Ereignis-Handler-Eigenschaft verwenden, um den Ereignislistener einzurichten:

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Standardbehandlung verhindern

Viele Umgebungen (wie {{Glossary("Node.js", "Node.js")}}) melden nicht behandelte Promise-Ablehnungen standardmäßig in der Konsole. Sie können verhindern, dass dies geschieht, indem Sie einen Handler für `unhandledrejection` Ereignisse hinzufügen, der—neben anderen Aufgaben, die Sie ausführen möchten—[`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen und zu verhindern, dass es an den Protokollierungscode der Laufzeitumgebung weitergeleitet wird. Dies funktioniert, weil `unhandledrejection` abbrechbar ist.

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

- [Promise Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) Ereignis
