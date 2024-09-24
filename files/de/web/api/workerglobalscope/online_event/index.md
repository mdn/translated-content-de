---
title: "WorkerGlobalScope: online-Ereignis"
short-title: online
slug: Web/API/WorkerGlobalScope/online_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`online`**-Ereignis des {{domxref("WorkerGlobalScope")}} wird ausgelöst, wenn das Gerät wieder eine Verbindung zum Internet herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("online", (event) => {});

ononline = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Der folgende Codeausschnitt zeigt einen `onoffline`-Handler, der innerhalb eines Workers gesetzt wird:

```js
self.ononline = () => {
  console.log("Your worker is now online");
};
```

Der gleiche Codeausschnitt, aber mit Verwendung von `addEventListener()`:

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

Das {{domxref("WorkerGlobalScope")}}-Interface, zu dem es gehört.
