---
title: "PromiseRejectionEvent: promise-Eigenschaft"
short-title: promise
slug: Web/API/PromiseRejectionEvent/promise
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`promise`** des [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)-Interfaces zeigt das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde. Sie können die [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft des Ereignisses untersuchen, um zu erfahren, warum das `Promise` abgelehnt wurde.

## Wert

Das JavaScript-{{jsxref("Promise")}}, das abgelehnt wurde und dessen Ablehnung unbehandelt blieb.

## Beispiele

Dieses Beispiel horcht auf unbehandelte `Promise`s und richtet, falls der [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) ein Objekt mit einem `code`-Feld ist, das den Text "Module not ready" enthält, einen Leerlaufrückruf ein, der die Aufgabe, die nicht korrekt ausgeführt werden konnte, erneut versucht.

[`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, um anzuzeigen, dass das `Promise` nun behandelt wurde.

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
