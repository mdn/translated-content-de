---
title: "MediaStreamTrackAudioSourceNode: MediaStreamTrackAudioSourceNode()-Konstruktor"
short-title: MediaStreamTrackAudioSourceNode()
slug: Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamTrackAudioSourceNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt und gibt ein neues [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt zurück, dessen Audio aus dem im angegebenen Options-Objekt festgelegten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammt.

Eine andere Möglichkeit, einen `MediaStreamTrackAudioSourceNode` zu erstellen, besteht darin, die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) aufzurufen und den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) anzugeben, aus dem Sie Audio erhalten möchten.

## Syntax

```js-nolint
new MediaStreamTrackAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`

  - : Ein Objekt, das die Eigenschaften definiert, die Sie für den `MediaStreamTrackAudioSourceNode` festlegen möchten:

    - `mediaStreamTrack`
      - : Der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), von dem die Audiodaten für die Ausgabe dieses Knotens genommen werden sollen.

### Rückgabewert

Ein neues [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt, das den Audioknoten darstellt, dessen Medien aus dem angegebenen Mediatrack stammen.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `context` kein [`AudioContext`](/de/docs/Web/API/AudioContext) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) kein Audiotrack ist (das heißt, seine [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft ist nicht `audio`).

## Beispiel

In diesem Beispiel wird [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um Zugriff auf die Kamera des Benutzers zu erhalten, und dann wird ein neuer [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aus dem ersten Audiospur erstellt, die von dem Gerät bereitgestellt wird.

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
