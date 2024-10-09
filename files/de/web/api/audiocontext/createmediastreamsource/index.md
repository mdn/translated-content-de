---
title: "AudioContext: createMediaStreamSource()-Methode"
short-title: createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("Web Audio API") }}

Die `createMediaStreamSource()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird verwendet, um ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt zu erstellen, basierend auf einem Media-Stream (zum Beispiel von einer [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Instanz), dessen Audio dann abgespielt und manipuliert werden kann.

Für weitere Details zu Media-Stream-Audioquellen-Knoten sehen Sie sich die Referenzseite zu [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) an.

## Syntax

```js-nolint
createMediaStreamSource(stream)
```

### Parameter

- `stream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der als Audioquelle dient und in einen Audioverarbeitungsgrafen eingespeist wird, um genutzt und manipuliert zu werden.

### Rückgabewert

Ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt, das den Audioknoten darstellt, dessen Medien aus dem angegebenen Quellstream stammen.

## Beispiele

In diesem Beispiel wird ein Media-Stream (Audio + Video) von [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) erfasst, in ein {{htmlelement("video")}}-Element eingespeist, um es abzuspielen und den Ton stummzuschalten, aber das Audio auch in ein [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) eingespeist. Danach wird diese Audioquelle in einen Lowpass-Filterknoten [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) eingespeist (der effektiv als Bass-Booster dient), und dann in einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode).

Der Range-Slider unter dem {{ htmlelement("video") }}-Element steuert die Verstärkung des Lowpass-Filters — erhöhen Sie den Wert des Sliders, um den Bass stärker klingen zu lassen!

> [!NOTE]
> Sie können dieses [laufende Beispiel sehen](https://mdn.github.io/webaudio-examples/stream-source-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stream-source-buffer).

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

      // Create a biquad filter
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
> Als Folge des Aufrufs von
> `createMediaStreamSource()` wird die Audiowiedergabe aus dem Media-Stream in den Verarbeitungsgrafen des [`AudioContext`](/de/docs/Web/API/AudioContext) umgeleitet. Das Abspielen/Pausieren des Streams kann weiterhin über die Media-Element-API und die Wiedergabesteuerung erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
