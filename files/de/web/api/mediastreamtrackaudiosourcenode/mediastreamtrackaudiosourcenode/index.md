---
title: "MediaStreamTrackAudioSourceNode: MediaStreamTrackAudioSourceNode() Konstruktor"
short-title: MediaStreamTrackAudioSourceNode()
slug: Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamTrackAudioSourceNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt und gibt ein neues {{domxref("MediaStreamTrackAudioSourceNode")}}-Objekt zurück, dessen Audio von dem im angegebenen Optionsobjekt spezifizierten {{domxref("MediaStreamTrack")}} stammt.

Eine andere Möglichkeit, ein `MediaStreamTrackAudioSourceNode` zu erstellen, besteht darin, die Methode {{domxref("AudioContext.createMediaStreamTrackSource()")}} aufzurufen und den {{domxref("MediaStreamTrack")}} anzugeben, von dem Sie Audio erhalten möchten.

## Syntax

```js-nolint
new MediaStreamTrackAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("AudioContext")}}, der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`

  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamTrackAudioSourceNode` haben soll:

    - `mediaStreamTrack`
      - : Der {{domxref("MediaStreamTrack")}}, von dem Audiodaten für die Ausgabe dieses Knotens genommen werden sollen.

### Rückgabewert

Ein neues {{domxref("MediaStreamTrackAudioSourceNode")}}-Objekt, das den Knoten repräsentiert, dessen Medien von dem angegebenen Medientrack stammen.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene `context` kein {{domxref("AudioContext")}} ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene {{domxref("MediaStreamTrack")}} kein Audiotrack ist (d.h. seine {{domxref("MediaStreamTrack.kind", "kind")}}-Eigenschaft nicht `audio` ist).

## Beispiel

Dieses Beispiel verwendet {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, um auf die Kamera des Benutzers zuzugreifen, und erstellt dann einen neuen {{domxref("MediaStreamAudioSourceNode")}} aus dem ersten Audiotrack, der vom Gerät bereitgestellt wird.

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
