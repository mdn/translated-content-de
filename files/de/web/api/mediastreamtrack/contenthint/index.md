---
title: "MediaStreamTrack: contentHint-Eigenschaft"
short-title: contentHint
slug: Web/API/MediaStreamTrack/contentHint
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`contentHint`**-Eigenschaft der {{domxref("MediaStreamTrack")}}-Schnittstelle ist ein Zeichenfolge, die einen Hinweis auf die Art des Inhalts gibt, den der Track enthält. Erlaubte Werte hängen vom Wert der {{domxref("MediaStreamTrack.kind")}}-Eigenschaft ab.

## Wert

Eine Zeichenfolge mit einem der folgenden Werte:

- `""`
  - : Es wurde kein `contentHint` gesetzt.
- `"speech"`
  - : Der Track sollte so behandelt werden, als ob er Sprachdaten enthält. Beim Setzen dieses Werts muss der Wert von {{domxref("MediaStreamTrack.kind")}} `"audio"` sein.
- `"speech-recognition"`
  - : Der Track sollte so behandelt werden, als ob er Daten zur Spracherkennung durch eine Maschine enthält. Beim Setzen dieses Werts muss der Wert von {{domxref("MediaStreamTrack.kind")}} `"audio"` sein.
- `"music"`
  - : Der Track sollte so behandelt werden, als ob er Musik enthält. Beim Setzen dieses Werts muss der Wert von {{domxref("MediaStreamTrack.kind")}} `"audio"` sein.
- `"motion"`
  - : Der Track sollte so behandelt werden, als ob er Video enthält, bei dem Bewegung wichtig ist. Zum Beispiel Webcam-Video, Filme oder Videospiele. Beim Setzen dieses Werts muss der Wert von {{domxref("MediaStreamTrack.kind")}} `"video"` sein.
- `"detail"`
  - : Der Track sollte so behandelt werden, als ob Videodetails besonders wichtig sind. Zum Beispiel Präsentationen oder Webseiten mit Textinhalt, Gemälde oder Strichzeichnungen. Beim Setzen dieses Werts muss der Wert von {{domxref("MediaStreamTrack.kind")}} `"video"` sein.
- `"text"`
  - : Der Track sollte so behandelt werden, als ob Videodetails besonders wichtig sind, und dass scharfe Kanten und Bereiche mit konsistenter Farbe häufig vorkommen können. Zum Beispiel Präsentationen oder Webseiten mit Textinhalt. Beim Setzen dieses Werts muss der Wert von {{domxref("MediaStreamTrack.kind")}} `"video"` sein.

## Beispiele

### Eine Funktion, die den contentHint setzt

Diese Funktion nimmt einen Stream und einen `contentHint`-Wert und wendet den Hinweis auf jeden Track an. [Siehe das vollständige Beispiel hier](https://webrtc.github.io/samples/src/content/capture/video-contenthint/), das zeigt, wie verschiedene `contentHint`-Werte die Darstellung der Tracks verändern.

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

## Kompatibilität der Browser

{{Compat}}
