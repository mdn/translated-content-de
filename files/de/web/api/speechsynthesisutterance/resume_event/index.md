---
title: "SpeechSynthesisUtterance: resume-Ereignis"
short-title: resume
slug: Web/API/SpeechSynthesisUtterance/resume_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`resume`**-Ereignis des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn eine pausierte Äußerung fortgesetzt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("resume", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces einen Wert zuweisen:

```js-nolint
onresume = (event) => { }
```

## Ereignistyp

Ein [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Beispiele

Sie können das `resume`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
utterThis.addEventListener("resume", (event) => {
  console.log(`Speech resumed after ${event.elapsedTime} seconds.`);
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onresume` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onresume` hinzugefügte Ereignis-Listener ersetzt werden):

```js
utterThis.onresume = (event) => {
  console.log(`Speech resumed after ${event.elapsedTime} seconds.`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
