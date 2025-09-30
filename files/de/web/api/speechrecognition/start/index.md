---
title: "SpeechRecognition: start()-Methode"
short-title: start()
slug: Web/API/SpeechRecognition/start
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`start()`**-Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) startet den Spracherkennungsdienst, um eingehendes Audio (von einem Mikrofon oder einer Audiospur) zu hören, und gibt die Ergebnisse dieser Erkennung zurück.

## Syntax

```js-nolint
start()
start(audioTrack)
```

### Parameter

- `audioTrack` {{optional_inline}}
  - : Eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Instanz, auf der die Spracherkennung durchgeführt werden soll. Wird nichts angegeben, versucht der Dienst, Audio vom Mikrofon des Benutzers zu erkennen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein `audioTrack` angegeben ist und einer oder beide der folgenden Bedingungen zutrifft:
    - Die [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft des Tracks ist nicht `audio`.
    - Die [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState)-Eigenschaft des Tracks ist nicht `live`.

## Beispiele

### Erkennung von Sprache über ein Mikrofon

In unserem [Sprachfarbwechsler](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer)-Beispiel erstellen wir eine neue `SpeechRecognition`-Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor. Später erstellen wir einen `click`-Ereignishandler auf einem `<button>`, sodass beim Klicken der Spracherkennungsdienst gestartet wird und Audioeingaben vom Mikrofon des Benutzers erwartet werden:

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

Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst. Wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt, indem wir das [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) des ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Liste erfassen. Dann setzen wir die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

### Erkennung von Sprache aus einer Audiospur

Dieser Code (aus unserem [Erkennungs-Demo für Audiospuren](https://mdn.github.io/dom-examples/web-speech-api/audio-track-recognition/) entnommen) zeigt, wie Sprache aus einer Audiospur erkannt wird. Zunächst erstellen wir eine neue [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz und setzen deren [`lang`](/de/docs/Web/API/SpeechRecognition/lang) auf `en-US`. Wir greifen dann auf ein {{htmlelement("button")}}-Element und ein {{htmlelement("p")}}-Element zu, um Ergebnisse und Diagnoseinformationen auszugeben.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startBtn = document.querySelector("button");
const diagnostic = document.querySelector(".output");
```

Als Nächstes fügen wir einen `click`-Ereignishandler zum `<button>` hinzu. Wenn es angeklickt wird, erstellen wir ein neues {{htmlelement("audio")}}-Element mit dem [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio)-Konstruktor und laden eine MP3-Datei hinein. Sobald die MP3-Datei abspielbereit ist (bestimmt durch das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis), erfassen wir sie als [`MediaStream`](/de/docs/Web/API/MediaStream) mit der [`captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)-Methode, extrahieren dann die Audio-`MediaStreamTrack` mit [`getAudioTracks()`](/de/docs/Web/API/MediaStream/getAudioTracks).

Wir spielen dann das Audio ab (erforderlich für die Erkennung) und übergeben die `MediaStreamTrack`-Instanz an die `start()`-Methode, um die Erkennung zu starten.

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

Um das erkannte Audio auszugeben, hören wir auf das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis. Wenn dieses ausgelöst wird, erfassen wir das [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) des ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Liste. Wir geben das Transkript direkt an das `<p>`-Element aus und protokollieren dessen Vertrauensbewertung in die Konsole.

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
