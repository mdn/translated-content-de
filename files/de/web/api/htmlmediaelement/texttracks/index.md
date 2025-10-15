---
title: "HTMLMediaElement: textTracks-Eigenschaft"
short-title: textTracks
slug: Web/API/HTMLMediaElement/textTracks
l10n:
  sourceCommit: 202a07cba14516ebf29c303a4cd17c52f40b8bbf
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`textTracks`**-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das alle [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte auflistet, die die Textspuren des Media-Elements darstellen, in der gleichen Reihenfolge wie in der Liste der Textspuren.

Sie können erkennen, wann Spuren zu einem [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)- oder [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element hinzugefügt oder daraus entfernt werden, indem Sie die `addtrack`- und `removetrack`-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das Media-Element selbst gesendet. Stattdessen werden sie an das Spurenlistenobjekt des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet, das dem Typ der Spur entspricht, die zum Element hinzugefügt wurde.

Die zurückgegebene Liste ist _live_; das heißt, während Spuren zum Media-Element hinzugefügt oder daraus entfernt werden, ändert sich der Inhalt der Liste dynamisch. Sobald Sie eine Referenz zur Liste haben, können Sie sie auf Änderungen überwachen, um zu erkennen, wann neue Textspuren hinzugefügt werden oder vorhandene entfernt werden.

Sehen Sie sich [TextTrackList-Ereignisse](/de/docs/Web/API/TextTrackList#events) an, um mehr darüber zu erfahren, wie Sie Änderungen an der Spurenliste eines Media-Elements überwachen können.

## Wert

Ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt, das die Liste der in das Media-Element aufgenommenen Textspuren darstellt. Die Liste der Spuren kann mit `textTracks[n]` zugegriffen werden, um die n-te Textspur aus der Objektsliste der Textspuren zu erhalten, oder durch die Verwendung der [`textTracks.getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById)-Methode.

Jede Spur wird durch ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt dargestellt, das Informationen über die Spur bereitstellt.

## Beispiele

Wir beginnen mit einem
[`<video>`](/de/docs/Web/HTML/Reference/Elements/video), das
mehrere [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)
Kinder hat.

```html
<video controls>
  <source src="/shared-assets/videos/sintel-short.webm" type="video/webm" />
  <source src="/shared-assets/videos/sintel-short.mp4" type="video/mp4" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-en.vtt"
    srclang="en"
    label="English" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-de.vtt"
    srclang="de"
    label="Deutsch" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-es.vtt"
    srclang="es"
    label="Español" />
</video>
```

`HTMLMediaElement.textTracks` gibt eine `TextTrackList` zurück, durch die wir iterieren können. Hier stellen wir sicher, dass alle drei Spuren gleichzeitig angezeigt werden.

```js
const tracks = document.querySelector("video").textTracks;

for (const track of tracks) {
  track.mode = "showing";
}
```

{{EmbedLiveSample("Examples", "100%", 350)}}

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
