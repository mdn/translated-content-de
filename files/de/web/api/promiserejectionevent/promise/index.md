---
title: "PromiseRejectionEvent: promise-Eigenschaft"
short-title: promise
slug: Web/API/PromiseRejectionEvent/promise
l10n:
  sourceCommit: bcb3ff5a0fd5080c2ce109d0eb17831b6ef57a2d
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schnittstelle [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) besitzt die
schreibgeschützte Eigenschaft **`promise`**, die das JavaScript-
{{jsxref("Promise")}} angibt, das abgelehnt wurde. Sie können die Eigenschaft
[`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) des Ereignisses prüfen, um zu erfahren, warum das Promise abgelehnt wurde.

## Wert

Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde und dessen Ablehnung unbehandelt blieb.

## Beispiele

Dieses Beispiel lauscht auf unbehandelte Promises und richtet, falls der
[`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) ein Objekt mit einem
`code`-Feld ist, das den Text "Module not ready" enthält, einen Leerlauf-Callback ein, der die Aufgabe erneut versucht, die nicht korrekt ausgeführt werden konnte.

[`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, um anzuzeigen, dass das Promise jetzt behandelt wurde.

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
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
