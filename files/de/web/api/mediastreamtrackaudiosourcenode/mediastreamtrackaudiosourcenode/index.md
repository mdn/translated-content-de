---
title: "MediaStreamTrackAudioSourceNode: MediaStreamTrackAudioSourceNode() Konstruktor"
short-title: MediaStreamTrackAudioSourceNode()
slug: Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamTrackAudioSourceNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt und gibt ein neues [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt zurück, dessen Audio von dem im angegebenen Optionsobjekt angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammt.

Eine andere Möglichkeit, einen `MediaStreamTrackAudioSourceNode` zu erstellen, besteht darin, die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) aufzurufen und den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzugeben, von dem Sie Audio erhalten möchten.

## Syntax

```js-nolint
new MediaStreamTrackAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audio-Kontext repräsentiert, mit dem der Knoten verbunden werden soll.
- `options`

  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamTrackAudioSourceNode` haben soll:

    - `mediaStreamTrack`
      - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), von dem Audiodaten für die Ausgabe dieses Knotens genommen werden sollen.

### Rückgabewert

Ein neues [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt, das den Audio-Knoten darstellt, dessen Medien vom angegebenen Medientrack bezogen werden.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `context` kein [`AudioContext`](/de/docs/Web/API/AudioContext) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) kein Audiotrack ist (d.h. dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft nicht `audio` ist).

## Beispiel

Dieses Beispiel verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Zugriff auf die Kamera des Benutzers zu erhalten, und erstellt dann einen neuen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aus dem ersten vom Gerät bereitgestellten Audiotrack.

```js
const audioCtx = new AudioContext();

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: false,
    })
    .then((stream) => {
      const options = {
        mediaStreamTrack: stream.getAudioTracks()[0],
      };

      const source = new MediaStreamTrackAudioSourceNode(audioCtx, options);
      source.connect(audioCtx.destination);
    })
    .catch((err) => {
      console.error(`The following gUM error occurred: ${err}`);
    });
} else {
  console.log("new getUserMedia not supported on your browser!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
