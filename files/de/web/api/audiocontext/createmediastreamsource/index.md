---
title: "AudioContext: createMediaStreamSource()-Methode"
short-title: createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `createMediaStreamSource()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext) Schnittstelle wird verwendet, um ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt zu erstellen, basierend auf einem Medienstrom (z. B. von einer [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Instanz), dessen Audio dann abgespielt und manipuliert werden kann.

Für weitere Details über Medienstrom-Audioquellen-Knoten, schauen Sie sich die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) Referenzseite an.

## Syntax

```js-nolint
createMediaStreamSource(stream)
```

### Parameter

- `stream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der als Audioquelle dient, die in ein Audiobearbeitungs-Graph zur Nutzung und Manipulation eingespeist wird.

### Rückgabewert

Ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt, das den Audioknoten darstellt, dessen Medien aus dem angegebenen Quellstrom stammen.

## Beispiele

In diesem Beispiel erhalten wir einen Medienstrom (Audio + Video) von [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), geben die Medien in ein {{htmlelement("video")}}-Element ein, um sie abzuspielen und das Audio stummzuschalten, aber leiten das Audio auch an ein [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) weiter. Anschließend speisen wir dieses Quellaudio in einen Tiefpass-Filter ([`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)) ein (der effektiv als Bassbooster dient), dann in einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode).

Der Schieberegler unter dem {{ htmlelement("video") }}-Element kontrolliert die Verstärkung, die dem Tiefpass-Filter gegeben wird - erhöhen Sie den Wert des Schiebereglers, um den Klang basslastiger zu machen!

> [!NOTE]
> Sie können dieses [Beispiel live sehen](https://mdn.github.io/webaudio-examples/stream-source-buffer/) oder [den Quellcode einsehen](https://github.com/mdn/webaudio-examples/tree/main/stream-source-buffer).

```js
const pre = document.querySelector("pre");
const video = document.querySelector("video");
const myScript = document.querySelector("script");
const range = document.querySelector("input");

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
// also output the visuals into a video element

if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
        video.muted = true;
      };

      // Create a MediaStreamAudioSourceNode
      // Feed the HTMLMediaElement into it
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);

      // Create a biquadfilter
      const biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = "lowshelf";
      biquadFilter.frequency.value = 1000;
      biquadFilter.gain.value = range.value;

      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the volume using the mouse cursor
      source.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination);

      // Get new mouse pointer coordinates when mouse is moved
      // then set new gain value

      range.oninput = () => {
        biquadFilter.gain.value = range.value;
      };
    })
    .catch((err) => {
      console.log(`The following gUM error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}

// dump script to pre element

pre.textContent = myScript.textContent;
```

> [!NOTE]
> Durch den Aufruf von `createMediaStreamSource()` wird die Audiowiedergabe aus dem Medienstrom in den Bearbeitungsgraph des [`AudioContext`](/de/docs/Web/API/AudioContext) umgeleitet. So kann das Abspielen/Pausieren des Streams weiterhin über die Media-Element-API und die Spielersteuerungen erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
