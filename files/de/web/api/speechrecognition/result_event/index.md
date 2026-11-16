---
title: "SpeechRecognition: result-Ereignis"
short-title: result
slug: Web/API/SpeechRecognition/result_event
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Das **`result`**-Ereignis der [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Schnittstelle wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt.
Dabei kann es sich um ein endgültiges Ergebnis oder um ein vorläufiges Ergebnis handeln, das sich noch ändern kann (wenn [`interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults) auf `true` gesetzt ist).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("result", (event) => { })
```

Alternativ können Sie die [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onresult = (event) => { }
```

## Ereignistyp

Ein [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Beispiele

Dieser Code stammt aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

Sie können das `result`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("result", (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
});
```

Oder Sie verwenden die Ereignisbehandlungseigenschaft `onresult` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onresult` hinzugefügte Ereignis-Listener ersetzt werden):

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
