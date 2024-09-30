---
title: "AudioContext: createMediaStreamTrackSource()-Methode"
short-title: createMediaStreamTrackSource()
slug: Web/API/AudioContext/createMediaStreamTrackSource
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die **`createMediaStreamTrackSource()`**-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle erzeugt und gibt ein [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) zurück, das eine Audioquelle darstellt, deren Daten vom angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen.

Dies unterscheidet sich von der Methode [`createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource), die ein [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) erstellt, dessen Audio von der Audiospur in einem angegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) kommt, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikografisch (alphabetisch) zuerst ist.

## Syntax

```js-nolint
createMediaStreamTrackSource(track)
```

### Parameter

- `track`
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der als Quelle aller Audiodaten für den neuen Knoten verwendet wird.

### Rückgabewert

Ein [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt, das als Quelle für Audiodaten in der angegebenen Audiospur dient.

## Beispiele

In diesem Beispiel wird [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um den Zugriff auf das Mikrofon des Benutzers anzufordern. Sobald dieser Zugriff gewährt wurde, wird ein Audiokontext erstellt und ein [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) mithilfe von `createMediaStreamTrackSource()` erstellt, dessen Audio von der ersten Audiospur im Stream stammt, der von `getUserMedia()` zurückgegeben wird.

Dann wird ein [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) erzeugt, indem [`createBiquadFilter()`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter) verwendet wird, und es wird so konfiguriert, dass ein Tiefenfilter auf das vom Quellknoten kommende Audio angewendet wird. Der Ausgang des Mikrofons wird dann in den neuen Biquad-Filter geleitet, und der Ausgang des Filters wiederum zum [`destination`](/de/docs/Web/API/BaseAudioContext/destination) des Audiokontextes.

```js
navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then((stream) => {
    audio.srcObject = stream;
    audio.onloadedmetadata = (e) => {
      audio.play();
      audio.muted = true;
    };

    const audioCtx = new AudioContext();
    const audioTracks = stream.getAudioTracks();
    const source = audioCtx.createMediaStreamTrackSource(audioTracks[0]);

    const biquadFilter = audioCtx.createBiquadFilter();
    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 3000;
    biquadFilter.gain.value = 20;

    source.connect(biquadFilter);
    biquadFilter.connect(audioCtx.destination);
  })
  .catch((err) => {
    // Handle getUserMedia() error
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Web Audio API
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
