---
title: "SpeechSynthesisUtterance: boundary-Ereignis"
short-title: boundary
slug: Web/API/SpeechSynthesisUtterance/boundary_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`boundary`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die gesprochene Äußerung eine Wort- oder Satzgrenze erreicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("boundary", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onboundary = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Beispiele

Sie können das `boundary`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
utterThis.addEventListener("boundary", (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
});
```

Oder verwenden Sie die Ereignishandler-Eigenschaft `onboundary`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onboundary` hinzugefügte Ereignis-Listener ersetzt werden:

```js
utterThis.onboundary = (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
