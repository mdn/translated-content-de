---
title: "SpeechRecognition: start() Methode"
short-title: start()
slug: Web/API/SpeechRecognition/start
l10n:
  sourceCommit: 11478c4adedc859a4fe3e3c4004fcfd96ebc1eba
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
  - : Eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Instanz, auf der die Spracherkennung durchgeführt werden soll. Wenn nicht angegeben, versucht der Dienst, Audiodaten vom Mikrofon des Benutzers zu erkennen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein `audioTrack` angegeben ist und eines oder beide der folgenden Kriterien zutreffen:
    - Die Eigenschaft [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks ist nicht `audio`.
    - Die Eigenschaft [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) des Tracks ist nicht `live`.

## Beispiele

### Sprache von einem Mikrofon erkennen

In unserem Beispiel [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer) erstellen wir eine neue `SpeechRecognition` Objektinstanz mithilfe des [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktors. Später erstellen wir einen `click` Ereignishandler auf einem `<button>`, sodass, wenn darauf geklickt wird, wir den Spracherkennungsdienst starten und auf Audioeingaben vom Mikrofon des Benutzers warten:

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

Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis ausgelöst. Wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt, indem wir das [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) des ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results) Liste abrufen. Wir setzen dann die Hintergrundfarbe des {{htmlelement("html")}} Elements auf diese Farbe.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

### Sprache von einer Audiospur erkennen

Dieser Code (aus unserem [Demonstrationsprojekt zur Erkennung aus Audiospuren](https://mdn.github.io/dom-examples/web-speech-api/audio-track-recognition/)) zeigt, wie man Sprache von einer Audiospur erkennt. Zunächst erstellen wir eine neue [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) Instanz und setzen dessen [`lang`](/de/docs/Web/API/SpeechRecognition/lang) auf `en-US`. Danach holen wir eine Referenz zu einem {{htmlelement("button")}} Element und einem {{htmlelement("p")}} Element, um Ergebnisse und Diagnoseinformationen auszugeben.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startBtn = document.querySelector("button");
const diagnostic = document.querySelector(".output");
```

Anschließend fügen wir einen `click` Ereignishandler zum `<button>` hinzu. Wenn darauf geklickt wird, erstellen wir ein neues {{htmlelement("audio")}} Element mit dem [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio) Konstruktor und laden eine MP3-Datei hinein. Sobald die MP3 abspielbereit ist (bestimmt durch das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event) Ereignis), erfassen wir es als [`MediaStream`](/de/docs/Web/API/MediaStream) mit der [`captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) Methode und extrahieren dann dessen Audio [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) mit [`getAudioTracks()`](/de/docs/Web/API/MediaStream/getAudioTracks).

Wir spielen dann das Audio ab (erforderlich für die Erkennung) und übergeben den `MediaStreamTrack` an die `start()` Methode, um die Erkennung zu starten.

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

Um das erkannte Audio auszugeben, lauschen wir dem [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis. Wenn dieses ausgelöst wird, rufen wir das [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) des ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results) Liste ab. Wir geben das Transcript selbst an das Ausgabe-`<p>` und protokollieren dessen Zuverlässigkeitsbewertung in der Konsole.

```js
recognition.addEventListener("result", (event) => {
  const speech = event.results[0][0].transcript;
  diagnostic.textContent = "Speech recognized: " + speech + ".";
  console.log("Confidence: " + event.results[0][0].confidence);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
