---
title: "AudioContext: Methode createMediaStreamTrackSource()"
short-title: createMediaStreamTrackSource()
slug: Web/API/AudioContext/createMediaStreamTrackSource
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die **`createMediaStreamTrackSource()`**-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle erstellt und gibt einen [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) zurück, der eine Audioquelle darstellt, deren Daten von dem angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen.

Dies unterscheidet sich von [`createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource), das einen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) erstellt, dessen Audio von der Tonspur in einem angegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) kommt, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) zuerst lexikografisch (alphabetisch) ist.

## Syntax

```js-nolint
createMediaStreamTrackSource(track)
```

### Parameter

- `track`
  - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der als Quelle aller Audiodaten für den neuen Knoten verwendet werden soll.

### Rückgabewert

Ein [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt, das als Quelle für Audiodaten der angegebenen Tonspur dient.

## Beispiele

In diesem Beispiel wird [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um Zugriff auf das Mikrofon des Benutzers anzufordern. Sobald dieser Zugriff gewährt wird, wird ein Audiokontext erstellt und ein [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) mittels `createMediaStreamTrackSource()` erstellt, der seinen Ton von der ersten Tonspur im Stream nimmt, der von `getUserMedia()` zurückgegeben wird.

Dann wird ein [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) mit [`createBiquadFilter()`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter) erstellt, und es wird nach Bedarf konfiguriert, um einen Low-Shelf-Filter auf das Audiosignal der Quelle anzuwenden. Die Ausgabe des Mikrofons wird dann in den neuen Biquad-Filter geleitet, und die Ausgabe des Filters wird wiederum zum [`destination`](/de/docs/Web/API/BaseAudioContext/destination) des Audiokontexts geführt.

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
