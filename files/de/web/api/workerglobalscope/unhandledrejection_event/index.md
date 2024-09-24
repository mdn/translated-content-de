---
title: "WorkerGlobalScope: unhandledrejection Ereignis"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`unhandledrejection`** Ereignis wird an den globalen Bereich (typischerweise {{domxref("WorkerGlobalScope")}}) eines Skripts gesendet, wenn ein {{jsxref("Promise")}}, der keinen Ablehnungs-Handler hat, abgelehnt wird.

Dies ist nützlich zum Debuggen und um eine Ausweich-Fehlerbehandlung für unerwartete Situationen bereitzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
self.addEventListener("unhandledrejection", (event) => {});
self.onunhandledrejection = (event) => {};
```

## Ereignistyp

Ein {{domxref("PromiseRejectionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Ereigniseigenschaften

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : Das JavaScript {{jsxref("Promise")}}, welches abgelehnt wurde.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : Ein Wert oder {{jsxref("Object")}}, der angibt, warum das Promise abgelehnt wurde, wie es an {{jsxref("Promise.reject()")}} übergeben wurde.

## Beispiele

### Grundlegende Fehlerprotokollierung

Dieses Beispiel protokolliert Informationen über die nicht behandelte Promise-Ablehnung in der Konsole.

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

Viele Umgebungen (wie {{Glossary("Node.js")}}) berichten standardmäßig nicht behandelte Promise-Ablehnungen an die Konsole. Sie können dies verhindern, indem Sie einen Handler für `unhandledrejection` Ereignisse hinzufügen, der—in Ergänzung zu anderen Aufgaben, die Sie durchführen möchten—{{domxref("Event.preventDefault()", "preventDefault()")}} aufruft, um das Ereignis abzubrechen und damit zu verhindern, dass es an den Laufzeit-Logging-Code weitergegeben wird. Dies funktioniert, weil `unhandledrejection` abbrechbar ist.

```js
self.addEventListener("unhandledrejection", (event) => {
  // Code zur Behandlung der nicht behandelten Ablehnung
  // …

  // Verhindern der Standardbehandlung (z. B. die Ausgabe des
  // Fehlers in die Konsole)

  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("WorkerGlobalScope/rejectionhandled_event", "rejectionhandled")}} Ereignis
