---
title: "MediaRecorder: stream-Eigenschaft"
short-title: stream
slug: Web/API/MediaRecorder/stream
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

Die **`stream`** schreibgeschützte Eigenschaft der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle gibt den Stream zurück, der in den [`MediaRecorder()`](/de/docs/Web/API/MediaRecorder/MediaRecorder)-Konstruktor übergeben wurde, als der `MediaRecorder` erstellt wurde.

## Wert

Der [`MediaStream`](/de/docs/Web/API/MediaStream), der in den `MediaRecorder()`-Konstruktor übergeben wurde, als der `MediaRecorder` ursprünglich erstellt wurde.

## Beispiele

```js
if (navigator.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.getUserMedia(
    // constraints - only audio needed for this app
    {
      audio: true,
    },

    // Success callback
    (stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      const myStream = mediaRecorder.stream;
      console.log(myStream);
    },
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia)
