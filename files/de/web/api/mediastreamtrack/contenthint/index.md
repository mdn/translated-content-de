---
title: "MediaStreamTrack: contentHint-Eigenschaft"
short-title: contentHint
slug: Web/API/MediaStreamTrack/contentHint
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`contentHint`**-Eigenschaft der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle ist ein String, der einen Hinweis auf die Art des Inhalts gibt, den der Track enthält. Zulässige Werte hängen vom Wert der [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft ab.

## Wert

Ein String mit einem der folgenden Werte:

- `""`
  - : Kein `contentHint` wurde gesetzt.
- `"speech"`
  - : Der Track sollte behandelt werden, als ob er Sprachdaten enthält. Beim Setzen dieses Wertes muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"audio"` sein.
- `"speech-recognition"`
  - : Der Track sollte behandelt werden, als ob er Daten für die maschinelle Spracherkennung enthält. Beim Setzen dieses Wertes muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"audio"` sein.
- `"music"`
  - : Der Track sollte behandelt werden, als ob er Musik enthält. Beim Setzen dieses Wertes muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"audio"` sein.
- `"motion"`
  - : Der Track sollte behandelt werden, als ob er Video enthält, bei dem Bewegung wichtig ist. Zum Beispiel Webcam-Videos, Filme oder Videospiele. Beim Setzen dieses Wertes muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"video"` sein.
- `"detail"`
  - : Der Track sollte behandelt werden, als ob Videodetails besonders wichtig sind. Zum Beispiel Präsentationen oder Webseiten mit Textinhalten, Malereien oder Strichzeichnungen. Beim Setzen dieses Wertes muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"video"` sein.
- `"text"`
  - : Der Track sollte behandelt werden, als ob Videodetails besonders wichtig sind und dass signifikante scharfe Kanten und Bereiche mit konsistenter Farbe häufig auftreten können. Zum Beispiel Präsentationen oder Webseiten mit Textinhalten. Beim Setzen dieses Wertes muss der Wert von [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) `"video"` sein.

## Beispiele

### Eine Funktion, die das contentHint setzt

Diese Funktion nimmt einen Stream und einen `contentHint`-Wert und wendet den Hinweis auf jeden Track an. [Sehen Sie das vollständige Beispiel hier](https://webrtc.github.io/samples/src/content/capture/video-contenthint/), um zu sehen, wie unterschiedliche `contentHint`-Werte die Anzeige der Tracks verändern.

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
