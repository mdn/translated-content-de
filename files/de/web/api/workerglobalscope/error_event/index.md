---
title: "WorkerGlobalScope: error-Event"
short-title: error
slug: Web/API/WorkerGlobalScope/error_event
l10n:
  sourceCommit: e472a1caa80ace5959961f741fec330a9e61b672
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`error`**-Event der {{domxref("WorkerGlobalScope")}}-Schnittstelle wird ausgelöst, wenn ein Fehler im Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (message, filename, lineno, colno, error) => {};
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei {{domxref("Window")}}- und `WorkerGlobalScope`-Objekten die einzige Ereignis-Handler-Eigenschaft, die mehr als ein Argument erhält.
>
> Für weitere Details hierzu, siehe die Seite über das {{domxref("Window.error_event", "error")}}-Event bei `Window`-Objekten.

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Der folgende Code-Schnipsel zeigt einen `onerror`-Handler, der innerhalb eines Workers gesetzt ist:

```js
self.onerror = () => {
  console.log("There is an error inside your worker!");
};
```

Das gleiche Code-Schnipsel, jedoch mit `addEventListener()`:

```js
self.addEventListener("error", () => {
  console.log("There is an error inside your worker!");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die {{domxref("WorkerGlobalScope")}}-Schnittstelle, zu der es gehört.
