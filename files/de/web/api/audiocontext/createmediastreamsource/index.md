---
title: "AudioContext: createMediaStreamSource()-Methode"
short-title: createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("Web Audio API") }}

Die `createMediaStreamSource()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird verwendet, um ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt zu erstellen, basierend auf einem Media-Stream (beispielsweise von einer Instanz von [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)). Die daraus resultierende Audioquelle kann dann abgespielt und manipuliert werden.

Für weitere Details zu Media-Stream-Audioquellenknoten besuchen Sie die Referenzseite des [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode).

## Syntax

```js-nolint
createMediaStreamSource(stream)
```

### Parameter

- `stream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der als Audioquelle dient und in ein Audioverarbeitungsdiagramm zur Nutzung und Manipulation eingespeist wird.

### Rückgabewert

Ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt, das den Audionode darstellt, dessen Medien aus dem angegebenen Quellstream bezogen werden.

## Beispiele

In diesem Beispiel nehmen wir einen Medienstream (Audio + Video) von [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), speisen die Medien in ein {{htmlelement("video")}}-Element, um es abzuspielen, und schalten den Ton stumm. Gleichzeitig leiten wir das Audio in ein [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode). Anschließend speisen wir diese Audioquelle in einen Tieftönungs-[`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) (der effektiv als Bassverstärker fungiert) und dann in einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode).

Der Bereichsregler unterhalb des {{htmlelement("video")}}-Elements steuert die Verstärkung, die dem Tiefpassfilter gegeben wird — Erhöhen Sie den Wert des Reglers, um den Sound basslastiger zu machen!

> [!NOTE]
> Sie können dieses [Beispiel live sehen](https://mdn.github.io/webaudio-examples/stream-source-buffer/) oder sich [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stream-source-buffer).

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
> Infolge des Aufrufs von `createMediaStreamSource()` wird die Audiowiedergabe des Medienstreams in das Verarbeitungsdiagramm des [`AudioContext`](/de/docs/Web/API/AudioContext) umgeleitet. Das Abspielen/Anhalten des Streams kann dennoch über die Media-Element-API und die Player-Steuerungen erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
