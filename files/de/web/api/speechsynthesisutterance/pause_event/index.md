---
title: "SpeechSynthesisUtterance: pause-Ereignis"
short-title: pause
slug: Web/API/SpeechSynthesisUtterance/pause_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`pause`**-Ereignis des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die Sprachausgabe während der Wiedergabe pausiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pause", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpause = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Beispiele

Sie können das `pause`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
utterThis.addEventListener("pause", (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onpause`. Beachten Sie jedoch, dass dies gegebenenfalls andere über `onpause` hinzugefügte Event-Listener ersetzt:

```js
utterThis.onpause = (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
