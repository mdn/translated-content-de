---
title: "WorkerGlobalScope: online-Event"
short-title: online
slug: Web/API/WorkerGlobalScope/online_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`online`**-Ereignis des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn das Gerät wieder eine Verbindung zum Internet herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("online", (event) => {});

ononline = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onoffline`-Handler, der innerhalb eines Workers gesetzt wird:

```js
self.ononline = () => {
  console.log("Your worker is now online");
};
```

Der gleiche Codeausschnitt, aber mit `addEventListener()`:

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

Die [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle, zu der es gehört.
