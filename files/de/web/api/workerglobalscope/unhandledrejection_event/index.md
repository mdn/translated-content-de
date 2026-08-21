---
title: "WorkerGlobalScope: unhandledrejection Ereignis"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Geltungsbereich (typischerweise [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)) eines Skripts gesendet, wenn ein {{jsxref("Promise")}} abgelehnt wird, das keinen Ablehnungshandler hat.

Dies ist nützlich zum Debuggen und für die Bereitstellung einer Fehlerbehandlung für unerwartete Situationen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("unhandledrejection", (event) => { })

onunhandledrejection = (event) => { }
```

## Ereignistyp

Ein [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Beispiele

### Grundlegende Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die nicht behandelte Promise-Ablehnung in der Konsole.

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

Sie können auch die `onunhandledrejection` Ereignishandler-Eigenschaft verwenden, um den Ereignis-Listener einzurichten:

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Standardbehandlung verhindern

Viele Umgebungen (wie {{Glossary("Node.js", "Node.js")}}) melden nicht behandelte Promise-Ablehnungen standardmäßig in der Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection` Ereignisse hinzufügen, der – zusätzlich zu allen anderen Aufgaben, die Sie ausführen möchten – [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen und zu verhindern, dass es an den Logging-Code der Laufzeit weitergeleitet wird. Dies funktioniert, weil `unhandledrejection` abbrechbar ist.

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

- [Promise Rejection Events](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- {{jsxref("Promise")}}
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) Ereignis
