---
title: "MediaStreamAudioSourceNode: MediaStreamAudioSourceNode() Konstruktor"
short-title: MediaStreamAudioSourceNode()
slug: Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamAudioSourceNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt und gibt ein neues {{domxref("MediaStreamAudioSourceNode")}}-Objekt zurück, das die erste Audiospur eines angegebenen {{domxref("MediaStream")}} als Quelle verwendet.

> [!NOTE]
> Eine andere Möglichkeit, einen
> `MediaStreamAudioSourceNode` zu erstellen, besteht darin, die Methode {{domxref("AudioContext.createMediaStreamSource()")}} aufzurufen und den Stream anzugeben, aus dem Sie Audio erhalten möchten.

## Syntax

```js-nolint
new MediaStreamAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("AudioContext")}}, der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`

  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamAudioSourceNode` haben soll:

    - `mediaStream`
      - : Eine erforderliche Eigenschaft, die den {{domxref("MediaStream")}} angibt, aus dem Audio für den Knoten bezogen werden soll.

### Rückgabewert

Ein neues {{domxref("MediaStreamAudioSourceNode")}}-Objekt, das den Audioknoten darstellt, dessen Medien aus dem angegebenen Quellstream bezogen werden.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene {{domxref("MediaStream")}} keine Audiospuren enthält.

## Beispiele

Dieses Beispiel verwendet {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, um Zugriff auf die Kamera des Benutzers zu erhalten, und erstellt dann einen neuen {{domxref("MediaStreamAudioSourceNode")}} aus seinem {{domxref("MediaStream")}}.

```js
// Variablen definieren
const audioCtx = new AudioContext();

// getUserMedia Block - Stream erfassen
// in einen MediaStreamAudioSourceNode einfügen
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia(
      // Einschränkungen: Audio und Video für diese App
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
      console.error(`Der folgende gUM-Fehler ist aufgetreten: ${err}`);
    });
} else {
  console.log("Neues getUserMedia wird von Ihrem Browser nicht unterstützt!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
