---
title: "WorkerGlobalScope: error-Ereignis"
short-title: error
slug: Web/API/WorkerGlobalScope/error_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`error`**-Ereignis der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn in einem Worker ein Fehler auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie einen Handler über die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (message, filename, lineno, colno, error) => { }
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei [`Window`](/de/docs/Web/API/Window)- und `WorkerGlobalScope`-Objekten die einzige Event-Handler-Eigenschaft, die mehr als ein Argument erhält.
>
> Weitere Einzelheiten dazu finden Sie auf der Seite zum [`error`](/de/docs/Web/API/Window/error_event)-Ereignis von `Window`-Objekten.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onerror`-Handler, der innerhalb eines Workers festgelegt wird. Beachten Sie, dass dadurch gegebenenfalls andere mit `onerror` hinzugefügte Event-Listener ersetzt werden:

```js
self.onerror = () => {
  console.log("There is an error inside your worker!");
};
```

Derselbe Codeausschnitt mit `addEventListener()`:

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

Die zugehörige Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope).
