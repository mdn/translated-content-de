---
title: "SpeechRecognition: start() Methode"
short-title: start()
slug: Web/API/SpeechRecognition/start
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Web Speech API")}}

Die **`start()`** Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) startet den Spracherkennungsdienst, um eingehende Audiodaten (von einem Mikrofon oder einer Audiospur) zu hören und gibt die Ergebnisse dieser Erkennung zurück.

## Syntax

```js-nolint
start()
start(audioTrack)
```

### Parameter

- `audioTrack` {{optional_inline}} {{experimental_inline}}
  - : Eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Instanz, auf der die Spracherkennung durchgeführt werden soll. Falls nicht spezifiziert, versucht der Dienst, Audio vom Mikrofon des Nutzers zu erkennen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein `audioTrack` angegeben ist und eine oder beide der folgenden Bedingungen zutreffen:
    - Die [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft der Spur ist nicht `audio`.
    - Die [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) Eigenschaft der Spur ist nicht `live`.

## Beispiele

### Spracherkennung von einem Mikrofon

In unserem [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) Beispiel erstellen wir eine neue Instanz des `SpeechRecognition` Objekts mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor. Später erstellen wir einen `click` Ereignis-Handler auf einem `<button>`, sodass, wenn darauf geklickt wird, der Spracherkennungsdienst gestartet wird und auf Audioeingaben des Mikrofons des Nutzers gewartet wird:

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

Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis ausgelöst. Wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt, indem wir das [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) der ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results) Liste erfassen. Anschließend setzen wir die Hintergrundfarbe des {{htmlelement("html")}} Elements auf diese Farbe.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

### Spracherkennung von einer Audiospur

Dieser Code (aus unserem [audio track recognition demo](https://mdn.github.io/dom-examples/web-speech-api/audio-track-recognition/)) zeigt, wie man Sprache von einer Audiospur erkennt. Zunächst erstellen wir eine neue [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) Instanz und setzen dessen [`lang`](/de/docs/Web/API/SpeechRecognition/lang) auf `en-US`. Dann holen wir uns eine Referenz auf ein {{htmlelement("button")}} Element und ein {{htmlelement("p")}} Element, um Ergebnisse und Diagnoseinformationen auszugeben.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startBtn = document.querySelector("button");
const diagnostic = document.querySelector(".output");
```

Als Nächstes fügen wir dem `<button>` einen `click` Ereignis-Handler hinzu. Wenn darauf geklickt wird, erstellen wir ein neues {{htmlelement("audio")}} Element mit dem [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio) Konstruktor und laden eine MP3-Datei in dieses. Sobald die MP3-Datei abspielbereit ist (bestimmt durch das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event) Ereignis), erfassen wir sie als [`MediaStream`](/de/docs/Web/API/MediaStream) mit der [`captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) Methode und extrahieren den Audio [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) mit [`getAudioTracks()`](/de/docs/Web/API/MediaStream/getAudioTracks).

Dann spielen wir das Audio ab (erforderlich für die Erkennung) und übergeben den `MediaStreamTrack` an die `start()` Methode, um die Erkennung zu starten.

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

Um das erkannte Audio auszugeben, hören wir auf das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis. Wenn dieses ausgelöst wird, erfassen wir das [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) der ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results) Liste. Wir geben das Transkript selbst im Ausgabe-`<p>` aus und protokollieren dessen Vertrauenswürdigkeitsbewertung in der Konsole.

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
