---
title: "AudioContext: Methode createMediaStreamSource()"
short-title: createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die Methode `createMediaStreamSource()` der [`AudioContext`](/de/docs/Web/API/AudioContext)
Schnittstelle wird verwendet, um ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
Objekt zu erstellen, basierend auf einem Media-Stream (zum Beispiel von einer Instanz der [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)), dessen Audio dann abgespielt und bearbeitet werden kann.

Für weitere Details über Media-Stream-Audio-Quellenknoten, schauen Sie sich die Referenzseite [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) an.

## Syntax

```js-nolint
createMediaStreamSource(stream)
```

### Parameter

- `stream`
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der als Audioquelle dient und in ein Audiobearbeitungsdiagramm zur Nutzung und Bearbeitung eingespeist wird.

### Rückgabewert

Ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) Objekt, das den Audionode repräsentiert, dessen Medien aus dem angegebenen Quellstream bezogen werden.

## Beispiele

In diesem Beispiel holen wir einen Media-Stream (Audio + Video) von [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), speisen die Medien in ein {{htmlelement("video")}} Element zur Wiedergabe und stummschalten dann das Audio, aber speisen dann auch das Audio in einen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode).
Als nächstes speisen wir dieses Quellaudio in einen Tiefpass [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) (der effektiv als Bassverstärker dient),
dann in einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode).

Der Bereichsregler unterhalb des {{ htmlelement("video") }} Elements steuert die Höhe der Verstärkung, die dem Tiefpassfilter verliehen wird – erhöhen Sie den Wert des Reglers, um das Audio basslastiger klingen zu lassen!

> [!NOTE]
> Sie können dieses [Beispiel live ansehen](https://mdn.github.io/webaudio-examples/stream-source-buffer/), oder den [Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stream-source-buffer).

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
> Als Konsequenz des Aufrufs von
> `createMediaStreamSource()` wird die Audiowiedergabe aus dem Media-Stream in das Bearbeitungsdiagramm des [`AudioContext`](/de/docs/Web/API/AudioContext) umgeleitet. Das Abspielen/Pausieren des Streams kann weiterhin über die Media-Element-API und die Player-Steuerungen erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
