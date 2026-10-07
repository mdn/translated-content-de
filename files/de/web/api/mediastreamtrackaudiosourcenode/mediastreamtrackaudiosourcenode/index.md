---
title: "MediaStreamTrackAudioSourceNode: Konstruktor MediaStreamTrackAudioSourceNode()"
short-title: MediaStreamTrackAudioSourceNode()
slug: Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("Web Audio API")}}

Der Konstruktor **`MediaStreamTrackAudioSourceNode()`** der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt und gibt es zurück. Dessen Audiodaten stammen aus dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das im übergebenen Optionsobjekt angegeben ist.

Sie können einen `MediaStreamTrackAudioSourceNode` auch erstellen, indem Sie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) aufrufen und das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angeben, aus dem die Audiodaten stammen sollen.

## Syntax

```js-nolint
new MediaStreamTrackAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, dem der Node zugeordnet werden soll.
- `options`
  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamTrackAudioSourceNode` haben soll:
    - `mediaStreamTrack`
      - : Das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), aus dem die Audiodaten für die Ausgabe dieses Nodes stammen.

### Rückgabewert

Ein neues [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Objekt, das den Audio-Node darstellt, dessen Audiodaten aus dem angegebenen Media-Track stammen.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `context` kein [`AudioContext`](/de/docs/Web/API/AudioContext) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das angegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) kein Audio-Track ist (das heißt, seine Eigenschaft [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) ist nicht `audio`).

## Beispiel

Dieses Beispiel verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Zugriff auf die Kamera der Benutzerin oder des Benutzers zu erhalten. Anschließend erstellt es einen neuen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aus dem ersten Audio-Track, den das Gerät bereitstellt.

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
