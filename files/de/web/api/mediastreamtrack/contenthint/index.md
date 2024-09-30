---
title: "MediaStreamTrack: Eigenschaft contentHint"
short-title: contentHint
slug: Web/API/MediaStreamTrack/contentHint
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`contentHint`**-Eigenschaft der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle ist ein String, der auf den Inhaltstyp des Tracks hinweist. Zulässige Werte hängen vom Wert der [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft ab.

## Wert

Ein String mit einem der folgenden Werte:

- `""`
  - : Es wurde kein `contentHint` gesetzt.
- `"speech"`
  - : Der Track sollte als Sprachdaten enthalten angesehen werden. Wenn Sie diesen Wert setzen, muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"audio"` sein.
- `"speech-recognition"`
  - : Der Track sollte so behandelt werden, als ob er Daten für maschinelle Spracherkennung enthält. Wenn Sie diesen Wert setzen, muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"audio"` sein.
- `"music"`
  - : Der Track sollte als Musik enthalten angesehen werden. Wenn Sie diesen Wert setzen, muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"audio"` sein.
- `"motion"`
  - : Der Track sollte so behandelt werden, als ob er Video enthält, bei dem Bewegung wichtig ist. Zum Beispiel Webcam-Videos, Filme oder Videospiele. Wenn Sie diesen Wert setzen, muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"video"` sein.
- `"detail"`
  - : Der Track sollte so behandelt werden, als ob Video-Details besonders wichtig sind. Zum Beispiel Präsentationen oder Webseiten mit Textinhalten, Gemälden oder Strichzeichnungen. Wenn Sie diesen Wert setzen, muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"video"` sein.
- `"text"`
  - : Der Track sollte so behandelt werden, als ob Video-Details besonders wichtig sind und dass häufig scharfe Kanten und Bereiche mit gleichmäßiger Farbe vorkommen können. Zum Beispiel Präsentationen oder Webseiten mit Textinhalten. Wenn Sie diesen Wert setzen, muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"video"` sein.

## Beispiele

### Eine Funktion, die den contentHint festlegt

Diese Funktion nimmt einen Stream und einen `contentHint`-Wert und wendet den Hinweis auf jeden Track an. [Sehen Sie sich das vollständige Beispiel hier an](https://webrtc.github.io/samples/src/content/capture/video-contenthint/), das zeigt, wie unterschiedliche `contentHint`-Werte beeinflussen, wie die Tracks angezeigt werden.

```js
function setVideoTrackContentHints(stream, hint) {
  const tracks = stream.getVideoTracks();
  tracks.forEach((track) => {
    if ("contentHint" in track) {
      track.contentHint = hint;
      if (track.contentHint !== hint) {
        console.error(`Invalid video track contentHint: "${hint}"`);
      }
    } else {
      console.error("MediaStreamTrack contentHint attribute not supported");
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
