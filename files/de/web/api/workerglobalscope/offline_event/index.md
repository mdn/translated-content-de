---
title: "WorkerGlobalScope: offline-Ereignis"
short-title: offline
slug: Web/API/WorkerGlobalScope/offline_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`offline`**-Ereignis des {{domxref("WorkerGlobalScope")}} wird ausgelöst, wenn das Gerät die Verbindung zum Internet verliert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignisbehandlungs-Eigenschaft fest.

```js
addEventListener("offline", (event) => {});

onoffline = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Das folgende Codebeispiel zeigt einen `onoffline`-Handler, der innerhalb eines Workers festgelegt ist:

```js
self.onoffline = () => {
  console.log("Your worker is now offline");
};
```

Das gleiche Beispiel, aber mit `addEventListener()`:

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

Das {{domxref("WorkerGlobalScope")}}-Interface, zu dem es gehört.
