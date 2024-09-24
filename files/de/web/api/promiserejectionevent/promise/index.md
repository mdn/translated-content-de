---
title: "PromiseRejectionEvent: promise-Eigenschaft"
short-title: promise
slug: Web/API/PromiseRejectionEvent/promise
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`promise`** der {{domxref("PromiseRejectionEvent")}}-Schnittstelle gibt das JavaScript-{{jsxref("Promise")}} an, das abgelehnt wurde. Sie können die Eigenschaft {{domxref("PromiseRejectionEvent.reason")}} des Ereignisses untersuchen, um zu erfahren, warum das Promise abgelehnt wurde.

## Wert

Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde und dessen Ablehnung unbehandelt blieb.

## Beispiele

Dieses Beispiel lauscht auf unbehandelte Promises und richtet bei einem Grund, der ein Objekt mit einem `code`-Feld enthält, aus dem der Text "Module not ready" hervorgeht, einen Idle-Callback ein, der die Aufgabe erneut versucht, die nicht korrekt ausgeführt werden konnte.

{{domxref("event.preventDefault()")}} wird aufgerufen, um anzuzeigen, dass das Promise jetzt behandelt wurde.

```js
window.onunhandledrejection = (event) => {
  if (event.reason?.code === "Module not ready") {
    requestIdleCallback((deadline) => {
      loadModule(event.reason.moduleName).then(performStartup);
    });
    event.preventDefault();
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}
