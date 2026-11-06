---
title: "SpeechRecognition: Methode start()"
short-title: start()
slug: Web/API/SpeechRecognition/start
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die Methode **`start()`** der [Web Speech API](/de/docs/Web/API/Web_Speech_API) startet den Spracherkennungsdienst, damit er eingehende Audiodaten (von einem Mikrofon oder einem Audiotrack) erfasst, und gibt die Erkennungsergebnisse zurück.

## Syntax

```js-nolint
start()
start(audioTrack)
```

### Parameter

- `audioTrack` {{optional_inline}}
  - : Eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Instanz, deren Audiodaten für die Spracherkennung verwendet werden. Wird sie nicht angegeben, versucht der Dienst stattdessen, Audiodaten vom Mikrofon der Benutzerin oder des Benutzers zu erkennen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein `audioTrack` angegeben wurde und eine oder beide der folgenden Bedingungen zutreffen:
    - Die Eigenschaft [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks ist nicht `audio`.
    - Die Eigenschaft [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) des Tracks ist nicht `live`.

## Beispiele

### Sprache von einem Mikrofon erkennen

In unserem Beispiel [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellen wir mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) eine neue `SpeechRecognition`-Objektinstanz. Anschließend richten wir für ein `<button>`-Element einen `click`-Event-Handler ein. Wenn darauf geklickt wird, starten wir den Spracherkennungsdienst und warten auf Audiodaten vom Mikrofon der Benutzerin oder des Benutzers:

```js
const recognition = new SpeechRecognition();

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst. Wir entnehmen die gesprochene Farbe aus dem Ereignisobjekt, indem wir den [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) der ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Liste abrufen. Anschließend setzen wir die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

### Sprache von einem Audiotrack erkennen

Dieser Code (ein Auszug aus unserer [Demo zur Erkennung von Sprache aus einem Audiotrack](https://mdn.github.io/dom-examples/web-speech-api/audio-track-recognition/)) zeigt, wie Sprache aus einem Audiotrack erkannt wird. Zunächst erstellen wir eine neue [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz und setzen ihre Eigenschaft [`lang`](/de/docs/Web/API/SpeechRecognition/lang) auf `en-US`. Dann rufen wir Referenzen auf ein {{htmlelement("button")}}-Element und ein {{htmlelement("p")}}-Element ab, um Ergebnisse und Diagnoseinformationen auszugeben.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startBtn = document.querySelector("button");
const diagnostic = document.querySelector(".output");
```

Als Nächstes fügen wir dem `<button>`-Element einen `click`-Event-Handler hinzu. Wenn darauf geklickt wird, erstellen wir mit dem Konstruktor [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio) ein neues {{htmlelement("audio")}}-Element und laden eine MP3-Datei hinein. Sobald die MP3-Datei abgespielt werden kann (erkennbar am [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis), erfassen wir sie mit der Methode [`captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) als [`MediaStream`](/de/docs/Web/API/MediaStream). Anschließend extrahieren wir mit [`getAudioTracks()`](/de/docs/Web/API/MediaStream/getAudioTracks) den Audio-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).

Dann spielen wir die Audiodaten ab (dies ist erforderlich, damit die Erkennung stattfinden kann) und übergeben den `MediaStreamTrack` an die Methode `start()`, um die Erkennung zu starten.

```js
startBtn.addEventListener("click", () => {
  diagnostic.textContent = "";
  console.log("Loading audio track");
  const audioElement = new Audio("cheese-on-toast.mp3");
  audioElement.addEventListener("canplay", () => {
    const stream = audioElement.captureStream();
    const audioTrack = stream.getAudioTracks()[0];
    audioElement.play();
    recognition.start(audioTrack);
    console.log("Recognition started");
  });
});
```

Um die erkannten Audiodaten auszugeben, warten wir auf das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis. Wenn es ausgelöst wird, rufen wir den [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) der ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Liste ab. Wir geben das Transkript im `<p>`-Element aus und protokollieren den Konfidenzwert in der Konsole.

```js
recognition.addEventListener("result", (event) => {
  const speech = event.results[0][0].transcript;
  diagnostic.textContent = `Speech recognized: ${speech}.`;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
