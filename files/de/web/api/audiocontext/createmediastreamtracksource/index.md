---
title: "AudioContext: createMediaStreamTrackSource()-Methode"
short-title: createMediaStreamTrackSource()
slug: Web/API/AudioContext/createMediaStreamTrackSource
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die **`createMediaStreamTrackSource()`**-Methode des {{domxref("AudioContext")}}-Interfaces erstellt und gibt einen {{domxref("MediaStreamTrackAudioSourceNode")}} zurück, der eine Audioquelle darstellt, deren Daten von dem angegebenen {{domxref("MediaStreamTrack")}} stammen.

Dies unterscheidet sich von {{domxref("AudioContext.createMediaStreamSource", "createMediaStreamSource()")}}, die einen {{domxref("MediaStreamAudioSourceNode")}} erstellt, dessen Audio von dem Audiotrack in einem angegebenen {{domxref("MediaStream")}} stammt, dessen {{domxref("MediaStreamTrack.id", "id")}} lexikographisch (alphabetisch) zuerst ist.

## Syntax

```js-nolint
createMediaStreamTrackSource(track)
```

### Parameter

- `track`
  - : Der {{domxref("MediaStreamTrack")}}, der als Quelle für alle Audiodaten des neuen Knotens verwendet wird.

### Rückgabewert

Ein {{domxref("MediaStreamTrackAudioSourceNode")}}-Objekt, das als Quelle für Audiodaten im angegebenen Audiotrack dient.

## Beispiele

In diesem Beispiel wird {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} verwendet, um Zugriff auf das Mikrofon des Benutzers anzufordern. Sobald dieser Zugriff gewährt wurde, wird ein Audiokontext erstellt und ein {{domxref("MediaStreamTrackAudioSourceNode")}} mithilfe von `createMediaStreamTrackSource()` erstellt, der sein Audio aus dem ersten Audiotrack im Stream bezieht, der von `getUserMedia()` zurückgegeben wird.

Dann wird ein {{domxref("BiquadFilterNode")}} mit {{domxref("BaseAudioContext/createBiquadFilter", "createBiquadFilter()")}} erstellt und so konfiguriert, dass ein Tiefenfilter auf das Audio von der Quelle angewendet wird. Die Ausgabe des Mikrofons wird dann in den neuen Biquad-Filter geleitet und die Ausgabe des Filters wiederum an das {{domxref("BaseAudioContext/destination", "Ziel")}} des Audiokontexts weitergeleitet.

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
- {{domxref("MediaStreamTrackAudioSourceNode")}}
