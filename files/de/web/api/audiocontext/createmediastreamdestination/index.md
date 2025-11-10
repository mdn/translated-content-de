---
title: "AudioContext: createMediaStreamDestination()-Methode"
short-title: createMediaStreamDestination()
slug: Web/API/AudioContext/createMediaStreamDestination
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ APIRef("Web Audio API") }}

Die `createMediaStreamDestination()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird verwendet, um ein neues [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Objekt zu erstellen, das mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) verknüpft ist, der einen Audiostream darstellt, der in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet werden kann.

Der [`MediaStream`](/de/docs/Web/API/MediaStream) wird erstellt, wenn der Knoten erstellt wird und ist über das `stream`-Attribut des [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) zugänglich. Dieser Stream kann ähnlich wie ein `MediaStream` verwendet werden, der über [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) erhalten wurde – er kann beispielsweise an einen entfernten Teilnehmer mit der `addStream()`-Methode von `RTCPeerConnection` gesendet werden.

Für weitere Details zu Media-Stream-Destination-Knoten besuchen Sie die [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Referenzseite.

## Syntax

```js-nolint
createMediaStreamDestination()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode).

## Beispiele

Im folgenden einfachen Beispiel erstellen wir einen [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einen [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (das Beispiel funktioniert derzeit nur in Firefox und Chrome). Der `MediaRecorder` wird eingerichtet, um Informationen vom `MediaStreamDestinationNode` aufzuzeichnen.

Wenn der Button geklickt wird, startet der Oszillator, und der `MediaRecorder` wird gestartet. Wenn der Button gestoppt wird, werden sowohl der Oszillator als auch der `MediaRecorder` gestoppt. Das Stoppen des `MediaRecorder` löst das `dataavailable`-Ereignis aus, und die Ereignisdaten werden in das `chunks`-Array geschoben. Anschließend wird das `stop`-Ereignis ausgelöst, ein neuer `blob` wird vom Typ opus erstellt — der die Daten im `chunks`-Array enthält, und ein neues Fenster (Tab) wird dann geöffnet, das auf eine URL verweist, die aus dem Blob erstellt wurde.

Von hier aus können Sie die opus-Datei abspielen und speichern.

```html
<button>Make sine wave</button> <audio controls></audio>
```

```js
const b = document.querySelector("button");
let clicked = false;
const chunks = [];
const ac = new AudioContext();
const osc = ac.createOscillator();
const dest = ac.createMediaStreamDestination();
const mediaRecorder = new MediaRecorder(dest.stream);
osc.connect(dest);

b.addEventListener("click", (e) => {
  if (!clicked) {
    mediaRecorder.start();
    osc.start(0);
    e.target.textContent = "Stop recording";
    clicked = true;
  } else {
    mediaRecorder.stop();
    osc.stop(0);
    e.target.disabled = true;
  }
});

mediaRecorder.ondataavailable = (evt) => {
  // Push each chunk (blobs) in an array
  chunks.push(evt.data);
};

mediaRecorder.onstop = (evt) => {
  // Make blob out of our blobs, and open it.
  const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  document.querySelector("audio").src = URL.createObjectURL(blob);
};
```

> [!NOTE]
> Sie können [dieses Beispiel live ansehen](https://mdn.github.io/webaudio-examples/create-media-stream-destination/index.html), oder [den Quellcode studieren](https://github.com/mdn/webaudio-examples/blob/main/create-media-stream-destination/index.html) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
