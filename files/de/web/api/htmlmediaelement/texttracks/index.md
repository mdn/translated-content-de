---
title: "HTMLMediaElement: textTracks-Eigenschaft"
short-title: textTracks
slug: Web/API/HTMLMediaElement/textTracks
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`textTracks`**-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das alle [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte auflistet, die die Textspuren des Medienelements darstellen, in der gleichen Reihenfolge wie in der Liste der Textspuren.

Sie können erkennen, wann Spuren zu einem [`<audio>`](/de/docs/Web/HTML/Element/audio) oder [`<video>`](/de/docs/Web/HTML/Element/video)-Element hinzugefügt oder daraus entfernt werden, indem Sie die `addtrack`- und `removetrack`-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das Medienelement selbst gesendet. Stattdessen werden sie an das Spurlistenobjekt des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet, das dem Typ der hinzugefügten Spur entspricht.

Die zurückgegebene Liste ist _live_; das bedeutet, dass sich der Inhalt der Liste dynamisch ändert, wenn Spuren zu dem Medienelement hinzugefügt oder aus diesem entfernt werden. Sobald Sie eine Referenz auf die Liste haben, können Sie diese überwachen, um Änderungen zu erkennen, wenn neue Textspuren hinzugefügt oder vorhandene entfernt werden.

Sehen Sie [TextTrackList-Ereignisse](/de/docs/Web/API/TextTrackList#events), um mehr darüber zu erfahren, wie Sie Änderungen in der Spurliste eines Medienelements beobachten können.

## Wert

Ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt, das die Liste der im Medienelement enthaltenen Textspuren repräsentiert. Auf die Liste der Spuren kann mit `textTracks[n]` zugegriffen werden, um die n-te Textspur aus der Objektliste der Textspuren zu erhalten, oder mit der Methode [`textTracks.getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById).

Jede Spur wird durch ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt dargestellt, das Informationen über die Spur liefert.

## Beispiele

Wir beginnen mit einem [`<video>`](/de/docs/Web/HTML/Element/video), das mehrere [`<track>`](/de/docs/Web/HTML/Element/track)-Kinder hat.

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

Das `HTMLMediaElement.textTracks` gibt ein `textTracksList` zurück, durch das wir iterieren können. Hier drucken wir alle Eigenschaften jeder englischen Spur auf die Konsole.

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
