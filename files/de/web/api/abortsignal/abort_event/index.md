---
title: "AbortSignal: abort-Ereignis"
short-title: abort
slug: Web/API/AbortSignal/abort_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`abort`**-Ereignis eines [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird ausgelöst, wenn die zugehörige Anfrage abgebrochen wird, beispielsweise durch [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("abort", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

In den folgenden Codeausschnitten erstellen wir ein neues `AbortController`-Objekt und greifen auf dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) zu, das über die Eigenschaft `signal` verfügbar ist. Später prüfen wir mithilfe einer Event-Handler-Eigenschaft, ob das Signal abgebrochen wurde.

Sie können das `abort`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) erkennen:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request aborted");
});
```

Oder Sie verwenden die Event-Handler-Eigenschaft `onabort`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onabort` hinzugefügte Event-Listener ersetzt werden:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.onabort = () => {
  console.log("Request aborted");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
