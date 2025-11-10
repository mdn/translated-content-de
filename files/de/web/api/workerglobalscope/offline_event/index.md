---
title: "WorkerGlobalScope: offline-Ereignis"
short-title: offline
slug: Web/API/WorkerGlobalScope/offline_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`offline`**-Ereignis des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn das Gerät die Verbindung zum Internet verliert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("offline", (event) => { })

onoffline = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onoffline`-Handler, der innerhalb eines Workers gesetzt ist:

```js
self.onoffline = () => {
  console.log("Your worker is now offline");
};
```

Der gleiche Ausschnitt, jedoch unter Verwendung von `addEventListener()`:

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

Das [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interface, zu dem es gehört.
