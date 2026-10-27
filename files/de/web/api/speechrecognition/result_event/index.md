---
title: "SpeechRecognition: result-Ereignis"
short-title: result
slug: Web/API/SpeechRecognition/result_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Web Speech API")}}

Das **`result`**-Ereignis der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt: Ein Wort oder eine Wortgruppe wurde erkannt und das Ergebnis an die Anwendung übermittelt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("result", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces eine Funktion zuweisen:

```js-nolint
onresult = (event) => { }
```

## Ereignistyp

Ein [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Beispiele

Dieser Code stammt aus unserem Beispiel [Sprachgesteuerter Farbwechsel](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

Sie können das `result`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("result", (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onresult`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Ereignis-Listener ersetzt werden, die über `onresult` hinzugefügt wurden:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
