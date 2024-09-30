---
title: "MediaStreamAudioSourceNode: MediaStreamAudioSourceNode() Konstruktor"
short-title: MediaStreamAudioSourceNode()
slug: Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamAudioSourceNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erzeugt und gibt ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt zurück, das die erste Audiospur eines angegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) als Quelle verwendet.

> [!NOTE]
> Eine weitere Möglichkeit, ein
> `MediaStreamAudioSourceNode` zu erstellen, besteht darin, die Methode [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource) aufzurufen und den Stream anzugeben, aus dem Sie Audio beziehen möchten.

## Syntax

```js-nolint
new MediaStreamAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`

  - : Ein Objekt, das die Eigenschaften definiert, die das `MediaStreamAudioSourceNode` haben soll:

    - `mediaStream`
      - : Eine erforderliche Eigenschaft, die den [`MediaStream`](/de/docs/Web/API/MediaStream) angibt, aus dem das Audio für den Knoten bezogen werden soll.

### Rückgabewert

Ein neues [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Objekt, das den Audio-Knoten darstellt, dessen Medien aus dem angegebenen Quell-Stream bezogen werden.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene [`MediaStream`](/de/docs/Web/API/MediaStream) keine Audiospuren enthält.

## Beispiele

Dieses Beispiel verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Zugriff auf die Kamera des Benutzers zu erhalten, und erstellt dann einen neuen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aus dessen [`MediaStream`](/de/docs/Web/API/MediaStream).

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
