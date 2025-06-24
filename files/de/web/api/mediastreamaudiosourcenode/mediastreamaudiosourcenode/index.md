---
title: "MediaStreamAudioSourceNode: MediaStreamAudioSourceNode() Konstruktor"
short-title: MediaStreamAudioSourceNode()
slug: Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamAudioSourceNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt und gibt ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt zurück, das die erste Audiospur eines gegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) als Quelle verwendet.

> [!NOTE]
> Eine andere Möglichkeit, um ein
> `MediaStreamAudioSourceNode` zu erstellen, ist die Methode
> [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource) aufzurufen, wobei der Stream angegeben wird,
> aus dem Sie Audio beziehen möchten.

## Syntax

```js-nolint
new MediaStreamAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`
  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamAudioSourceNode` haben soll:
    - `mediaStream`
      - : Eine erforderliche Eigenschaft, die den [`MediaStream`](/de/docs/Web/API/MediaStream) angibt, aus dem Audio für den Knoten bezogen werden soll.

### Rückgabewert

Ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt, das den Audioknoten darstellt, dessen Medien aus dem angegebenen Quellstream bezogen werden.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene [`MediaStream`](/de/docs/Web/API/MediaStream) keine Audiospuren enthält.

## Beispiele

In diesem Beispiel wird [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um Zugriff auf die Kamera des Benutzers zu erhalten. Anschließend wird ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aus seinem [`MediaStream`](/de/docs/Web/API/MediaStream) erstellt.

```js
// define variables
const audioCtx = new AudioContext();

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia(
      // constraints: audio and video for this app
      {
        audio: true,
        video: false,
      },
    )
    .then((stream) => {
      const options = {
        mediaStream: stream,
      };

      const source = new MediaStreamAudioSourceNode(audioCtx, options);
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
