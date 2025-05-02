---
title: "WorkerGlobalScope: online Ereignis"
short-title: online
slug: Web/API/WorkerGlobalScope/online_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`online`** Ereignis des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn das Gerät die Verbindung zum Internet wiederherstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlungs-Eigenschaft fest.

```js-nolint
addEventListener("online", (event) => { })

ononline = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onoffline`-Handler, der innerhalb eines Workers gesetzt ist:

```js
self.ononline = () => {
  console.log("Your worker is now online");
};
```

Der gleiche Ausschnitt, aber mit `addEventListener()`:

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

Das [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface, zu dem es gehört.
