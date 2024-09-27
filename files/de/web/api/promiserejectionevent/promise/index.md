---
title: "PromiseRejectionEvent: promise-Eigenschaft"
short-title: promise
slug: Web/API/PromiseRejectionEvent/promise
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("HTML DOM") }}

Die schreibgeschützte **`promise`**-Eigenschaft des [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) Interfaces gibt das JavaScript
{{jsxref("Promise")}} an, das abgelehnt wurde. Sie können die [`PromiseRejectionEvent.reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft des Events prüfen, um zu erfahren, warum die Promise abgelehnt wurde.

## Wert

Das JavaScript {{jsxref("Promise")}}, das abgelehnt wurde und dessen Ablehnung unbehandelt blieb.

## Beispiele

Dieses Beispiel hört auf unbehandelte Promises und richtet, falls der [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) ein Objekt mit einem `code`-Feld enthält, das den Text "Module not ready" enthält, einen Idle-Callback ein, der die Aufgabe, die nicht korrekt ausgeführt werden konnte, erneut versucht.

[`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, um anzuzeigen, dass die Promise jetzt behandelt wurde.

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
