---
title: "SpeechRecognition: Methode start()"
short-title: start()
slug: Web/API/SpeechRecognition/start
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die Methode **`start()`** der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) startet den Spracherkennungsdienst, der daraufhin eingehende Audiodaten (von einem Mikrofon oder einer Audiospur) empfängt.
Ergebnisse werden über das Ereignis [`result`](/de/docs/Web/API/SpeechRecognition/result_event) bereitgestellt.

## Syntax

```js-nolint
start()
start(audioTrack)
```

### Parameter

- `audioTrack` {{optional_inline}}
  - : Eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Instanz, deren Audiodaten für die Spracherkennung verwendet werden. Wenn sie nicht angegeben wird, versucht der Dienst stattdessen, Audiodaten vom Mikrofon der Benutzerin oder des Benutzers zu erkennen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das aktuelle Dokument ist nicht vollständig aktiv.
    - Die Erkennung wurde bereits gestartet, und seitdem wurde weder ein [`end`](/de/docs/Web/API/SpeechRecognition/end_event)- noch ein [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Ereignis ausgelöst.
    - Ein `audioTrack` wurde angegeben, dessen Eigenschaft [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) nicht `audio` ist.
    - Ein `audioTrack` wurde angegeben, dessen Eigenschaft [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) nicht `live` ist.

## Beispiele

### Sprache von einem Mikrofon erkennen

In unserem Beispiel [Sprachgesteuerter Farbwechsler](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellen wir mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) eine neue `SpeechRecognition`-Objektinstanz. Anschließend erstellen wir einen `click`-Ereignishandler für einen `<button>`. Wird er angeklickt, starten wir den Spracherkennungsdienst und warten auf Audiodaten vom Mikrofon der Benutzerin oder des Benutzers:

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

Wenn ein Ergebnis erfolgreich erkannt wurde, wird das Ereignis [`result`](/de/docs/Web/API/SpeechRecognition/result_event) ausgelöst. Wir ermitteln die gesprochene Farbe aus dem Ereignisobjekt, indem wir den [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) der ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Liste abrufen. Anschließend setzen wir die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

### Sprache von einer Audiospur erkennen

Dieser Code (ein Auszug aus unserer [Demo zur Spracherkennung auf Audiospuren](https://mdn.github.io/dom-examples/web-speech-api/audio-track-recognition/)) zeigt, wie Sprache von einer Audiospur erkannt wird. Zunächst erstellen wir eine neue [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz und setzen ihre Eigenschaft [`lang`](/de/docs/Web/API/SpeechRecognition/lang) auf `en-US`. Anschließend rufen wir Referenzen auf ein {{htmlelement("button")}}-Element und ein {{htmlelement("p")}}-Element ab, um Ergebnisse und Diagnoseinformationen auszugeben.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startBtn = document.querySelector("button");
const diagnostic = document.querySelector(".output");
```

Als Nächstes fügen wir dem `<button>` einen `click`-Ereignishandler hinzu. Wenn er angeklickt wird, erstellen wir mit dem Konstruktor [`Audio()`](/de/docs/Web/API/HTMLAudioElement/Audio) ein neues {{htmlelement("audio")}}-Element und laden eine MP3-Datei hinein. Sobald die MP3-Datei abspielbereit ist (erkennbar am Ereignis [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)), erfassen wir sie mit der Methode [`captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) als [`MediaStream`](/de/docs/Web/API/MediaStream) und extrahieren anschließend mit [`getAudioTracks()`](/de/docs/Web/API/MediaStream/getAudioTracks) ihren Audio-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).

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

Um die erkannten Audiodaten auszugeben, lauschen wir auf das Ereignis [`result`](/de/docs/Web/API/SpeechRecognition/result_event). Wenn es ausgelöst wird, rufen wir den [`transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) der ersten [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) des ersten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) in der zurückgegebenen [`results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Liste ab. Wir geben den Transkripttext im `<p>`-Element aus und protokollieren den Konfidenzwert in der Konsole.

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
