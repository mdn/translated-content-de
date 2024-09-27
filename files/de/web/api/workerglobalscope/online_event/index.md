---
title: "WorkerGlobalScope: online-Event"
short-title: online
slug: Web/API/WorkerGlobalScope/online_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`online`**-Ereignis des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn das Gerät wieder mit dem Internet verbunden ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("online", (event) => {});

ononline = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onoffline`-Handler, der innerhalb eines Workers gesetzt wurde:

```js
self.ononline = () => {
  console.log("Your worker is now online");
};
```

Dasselbe Snippet, aber mit `addEventListener()`:

```js
self.addEventListener("online", () => {
  console.log("Your worker is now online");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Das [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interface, zu dem es gehört.
