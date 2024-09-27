---
title: "WorkerGlobalScope: offline Ereignis"
short-title: offline
slug: Web/API/WorkerGlobalScope/offline_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`offline`** Ereignis des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn das Gerät die Verbindung zum Internet verliert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("offline", (event) => {});

onoffline = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Code-Schnipsel zeigt einen `onoffline`-Handler, der innerhalb eines Workers gesetzt wird:

```js
self.onoffline = () => {
  console.log("Your worker is now offline");
};
```

Dasselbe Snippet, aber unter Verwendung von `addEventListener()`:

```js
self.addEventListener("offline", () => {
  console.log("Your worker is now offline");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Das [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface, zu dem es gehört.
