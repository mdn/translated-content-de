---
title: "SpeechSynthesisUtterance: end-Ereignis"
short-title: end
slug: Web/API/SpeechSynthesisUtterance/end_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`end`**-Ereignis des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn die Sprachausgabe der Äußerung abgeschlossen ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("end", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onend = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Beispiele

Sie können das `end`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
utterThis.addEventListener("end", (event) => {
  console.log(
    `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
  );
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onend` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onend` hinzugefügte Ereignis-Listener ersetzt werden):

```js
utterThis.onend = (event) => {
  console.log(
    `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
