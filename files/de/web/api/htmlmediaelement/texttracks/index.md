---
title: "HTMLMediaElement: textTracks-Eigenschaft"
short-title: textTracks
slug: Web/API/HTMLMediaElement/textTracks
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`textTracks`**
Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein
[`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das alle [`TextTrack`](/de/docs/Web/API/TextTrack)
Objekte auflistet, die die Textspuren des Medienelements darstellen, in derselben Reihenfolge wie in
der Liste der Textspuren.

Sie können erkennen, wann Spuren zu einem
[`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)- oder
[`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element hinzugefügt oder entfernt werden,
indem Sie die `addtrack`- und `removetrack`-Ereignisse verwenden. Diese
Ereignisse werden jedoch nicht direkt an das Medienelement selbst gesendet. Stattdessen werden sie an das
Tracklisten-Objekt des entsprechenden [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
gesendet, das zum Typ der hinzugefügten Spur passt.

Die zurückgegebene Liste ist _live_; das heißt, während Spuren zum Medienelement hinzugefügt oder daraus entfernt werden, ändert sich der Inhalt der Liste dynamisch. Sobald Sie eine Referenz auf
die Liste haben, können Sie sie überwachen, um Veränderungen zu erkennen, wenn neue Textspuren hinzugefügt oder bestehende entfernt werden.

Siehe [TextTrackList-Ereignisse](/de/docs/Web/API/TextTrackList#events), um mehr darüber zu erfahren, wie Sie Veränderungen in der Spurenliste eines Medienelements beobachten können.

## Wert

Ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt, das die Liste der im Medienelement enthaltenen Textspuren darstellt. Auf die Liste der Spuren kann mithilfe von `textTracks[n]` zugegriffen werden, um die n-te Textspur aus der Spurenliste des Objekts zu erhalten, oder mithilfe der [`textTracks.getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById)-Methode.

Jede Spur wird durch ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt repräsentiert, das Informationen über die Spur bereitstellt.

## Beispiele

Wir beginnen mit einem
[`<video>`](/de/docs/Web/HTML/Reference/Elements/video), das
mehrere [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-
Kinder hat.

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
</video>
```

`HTMLMediaElement.textTracks` gibt eine
`textTracksList` zurück, durch die wir iterieren können. Hier drucken wir alle Eigenschaften
jedes englischen Tracks in die Konsole.

```js
const tracks = document.querySelector("video").textTracks;

for (const track of tracks) {
  if (track.language === "en") {
    console.dir(track);
  }
}
```

{{EmbedLiveSample("Examples", "100%", 155)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.textTracks`-Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)
- [`VideoTrack`](/de/docs/Web/API/VideoTrack), [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)
- [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event),
  [`change`](/de/docs/Web/API/VideoTrackList/change_event),
  [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event): AudioTrackList-Ereignisse
- [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event),
  [`change`](/de/docs/Web/API/VideoTrackList/change_event),
  [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event): VideoTrackList-Ereignisse
