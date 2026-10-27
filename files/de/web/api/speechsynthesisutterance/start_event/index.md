---
title: "SpeechSynthesisUtterance: start-Ereignis"
short-title: start
slug: Web/API/SpeechSynthesisUtterance/start_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`start`**-Ereignis des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn mit der Sprachausgabe der Äußerung begonnen wurde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("start", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstart = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Beispiele

Sie können das `start`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
utterThis.addEventListener("start", (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onstart` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onstart` hinzugefügte Event-Listener ersetzt werden):

```js
utterThis.onstart = (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
