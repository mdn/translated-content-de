---
title: Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video
slug: Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
l10n:
  sourceCommit: f9048149324659786a814beb4c364a565acbf3fe
---

In anderen Artikeln haben wir uns angesehen, wie man einen [browserübergreifenden Videoplayer erstellt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) mithilfe der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`Window.fullScreen`](/de/docs/Web/API/Window/fullScreen) APIs, und auch, wie man den [Player gestaltet](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics). Dieser Artikel wird den gleichen Player verwenden und zeigen, wie man Untertitel und Bildunterschriften hinzufügt, unter Verwendung des [WebVTT-Formats](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) und des {{ htmlelement("track") }}-Elements.

In diesem Artikel nutzt unser Beispiel einen Auszug aus dem [Sintel Open Movie](https://durian.blender.org/), erstellt von der [Blender Foundation](https://www.blender.org/about/foundation/).

## HTML und Videountertitel

Bevor wir darauf eingehen, wie man Untertitel zum Videoplayer hinzufügt, gibt es eine Reihe von Dingen, die wir zuerst erwähnen werden und über die Sie sich im Klaren sein sollten, bevor wir beginnen.

### Bildunterschriften versus Untertitel

[Bildunterschriften und Untertitel sind nicht dasselbe](https://screenfont.ca/learn/): Sie haben deutlich unterschiedliche Zielgruppen und vermitteln unterschiedliche Informationen. Es wird empfohlen, sich über die Unterschiede zu informieren, wenn Sie sich nicht sicher sind, was sie unterscheidet. Sie werden jedoch technisch auf die gleiche Weise implementiert, sodass das Material in diesem Artikel für beide gilt.

Für diesen Artikel werden wir uns auf die Textspuren beziehen, die als Untertitel angezeigt werden, da ihr Inhalt auf hörende Personen abzielt, die Schwierigkeiten haben, die Sprache des Films zu verstehen, und nicht auf gehörlose oder schwerhörige Personen.

### Das `<track>`-Element

HTML ermöglicht es uns, Untertitel für ein Video mit dem {{ htmlelement("track") }}-Element anzugeben. Die verschiedenen Attribute dieses Elements erlauben es uns, Dinge wie den Typ des hinzugefügten Inhalts, die Sprache, in der er verfasst ist, und natürlich eine Referenz zu der Textdatei anzugeben, die die eigentlichen Untertiteldaten enthält.

### WebVTT

Die Dateien, die die tatsächlichen Untertiteldaten enthalten, sind Textdateien, die einem festgelegten Format folgen, in diesem Fall dem [Web Video Text Tracks](/de/docs/Web/API/WebVTT_API) (WebVTT) Format.

Videoanbieter (wie die [Blender Foundation](https://www.blender.org/about/foundation/)) stellen Bildunterschriften und Untertitel in einem Textformat zusammen mit ihren Videos bereit, jedoch meistens im SubRip Text (SRT) Format. Diese können leicht mit einem Online-Konverter in WebVTT umgewandelt werden.

## Änderungen an HTML und CSS

Dieser Abschnitt fasst die Änderungen zusammen, die an dem Code des vorherigen Artikels vorgenommen wurden, um das Hinzufügen von Untertiteln zum Video zu erleichtern. Wenn Sie daran nicht interessiert sind und direkt zu JavaScript und dem relevanteren CSS springen möchten, gehen Sie zum Abschnitt [Implementierung von Untertiteln](#implementierung_von_untertiteln).

In diesem Beispiel verwenden wir ein anderes Video, [Sintel](https://durian.blender.org/), da es tatsächlich einige Sprache enthält und daher besser geeignet ist, um zu veranschaulichen, wie Untertitel funktionieren!

### HTML-Markup

Wie oben erwähnt, müssen wir das neue HTML `<track>`-Element nutzen, um unsere Untertitel-Dateien zum HTML-Video hinzuzufügen. Wir haben unsere Untertitel tatsächlich in drei verschiedenen Sprachen – Englisch, Deutsch und Spanisch – also werden wir alle drei der relevanten VTT-Dateien referenzieren, indem wir `<track>`-Elemente in unser HTML `<video>`-Element einfügen:

```html-nolint hidden live-sample___video-player-with-captions
<figure id="videoContainer">
```

```html live-sample___video-player-with-captions
<video id="video" controls preload="metadata">
  <source src="/shared-assets/videos/sintel-short.mp4" type="video/mp4" />
  <source src="/shared-assets/videos/sintel-short.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="/shared-assets/misc/sintel-en.vtt"
    default />
  <track
    label="Deutsch"
    kind="subtitles"
    srclang="de"
    src="/shared-assets/misc/sintel-de.vtt" />
  <track
    label="Español"
    kind="subtitles"
    srclang="es"
    src="/shared-assets/misc/sintel-es.vtt" />
</video>
```

Wie Sie sehen können, hat jedes `<track>`-Element die folgenden Attribute:

- `kind` ist auf `subtitles` gesetzt, was den Typ des Inhalts angibt, den die Dateien enthalten.
- `label` erhält einen Wert, der angibt, für welche Sprache dieses Untertitel-Set ist – zum Beispiel `English` oder `Deutsch` – diese Labels erscheinen in der Benutzeroberfläche, um dem Benutzer zu ermöglichen, leicht auszuwählen, welche Untertitelsprache er sehen möchte.
- `src` ist jede gültige URL zu der jeweiligen WebVTT-Untertiteldatei in jedem Fall zugewiesen.
- `srclang` gibt an, in welcher Sprache der Inhalt jeder Untertiteldatei verfasst ist.
- Das `default`-Attribut ist auf dem englischen `<track>`-Element gesetzt und signalisiert dem Browser, dass dies die Standard-Untertiteldatei ist, die verwendet wird, wenn Untertitel aktiviert sind und der Benutzer keine spezielle Auswahl getroffen hat.

Zusätzlich zum Hinzufügen der `<track>`-Elemente haben wir auch einen neuen Button hinzugefügt, um das Untertitelmenü zu steuern, das wir aufbauen werden. Folglich sieht die Videosteuerung jetzt wie folgt aus:

```html live-sample___video-player-with-captions
<div id="video-controls" class="controls" data-state="hidden">
  <button id="play-pause" type="button" data-state="play">Play/Pause</button>
  <button id="stop" type="button" data-state="stop">Stop</button>
  <div class="progress">
    <progress id="progress" value="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
  <button id="vol-inc" type="button" data-state="vol-up">Vol+</button>
  <button id="vol-dec" type="button" data-state="vol-down">Vol-</button>
  <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
  <button id="subtitles" type="button" data-state="subtitles">
    <span>CC</span>
  </button>
</div>
```

```html hidden live-sample___video-player-with-captions
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

### CSS-Änderungen

```css hidden live-sample___video-player-with-captions
:root {
  color: #333333;
  font-family:
    "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", "Lucida", "Arial",
    "Helvetica", sans-serif;
}
a {
  color: #0095dd;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2255aa;
  text-decoration: underline;
}
figure {
  position: relative;
  max-width: 64rem;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #666666;
}
figcaption {
  display: block;
  font-size: 0.75rem;
  color: white;
  margin-top: 0.5rem;
}
video {
  width: 100%;
}
.controls {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 2rem;
  position: relative;
}
.controls[data-state="hidden"] {
  display: none;
}
.controls button {
  width: 2rem;
  height: 2rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: none;
  cursor: pointer;
  color: transparent;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.controls button:hover,
.controls button:focus {
  opacity: 0.5;
}
.controls button[data-state="play"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNkU0NTY5NkE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNkU0NTY5NUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kBUJ9AAAAXFJREFUeNrsmLtOAkEUhneQyiAdDTExGlYMBaW9oq/ge8jlUbwkthTY2EGBLehbKK0UxsQgVK7/SWbMZo3j3mbmxPAnXyi2+fIzZ3dmRBAEHucUPO6hBhUyNXAH3umxJRZgCBo/nCKCe+DVoliUN5LUCd46lFOMwk4iPCRCiDl+Ko5X3RJOm99OEcGAyVyIrFO8lEPE9jXTBNvgRq4ba6+ZuAs5nFMwy3NQdFOcRpBSBtfgk6ugykkebZoUpGyBqyxtmhZUaYFnzoKqzcukbdoUVDkGT5wFKSVwEadNV4IqR3+16VrQkxuSVRxBVzvqKija+tQl/fafyx00u7/YBxOOU0yttcEHx9fMPphy/JJQa50krdkUrIMHjruZDdBN25ppwYOsrZkSpNZ68hDFast/Bg7Bo4nDu+7g/m/Oxc6u3+YMnBY6wTEDwXvdbmYXvDi82aKrP183xZQd0LcsSktrIC9PvV+neH1HvRZ0kC8BBgADq2RhyZa7BQAAAABJRU5ErkJggg==");
}
.controls button[data-state="pause"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzE0QzJGQUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzAxODM5QUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+r7sqzQAAANdJREFUeNrs2MEKwjAMBuDGswd9C/UdPHvy6Ft6UTyKr6RDcceawDpKHZsE2kb4Az87GOiHNLCFvPfOcs2c9ZJ/MKSrDefCaeXnQmm7M9dfpgQoDY+CsDRy9moMeKqICznGJoqHhIie/JhXvnUNmxa9KQF6I3NBfzPFANYC7uTKRtkqeyZLOyQ0dLcVPRgSAAEEEEAAAQQQwJ9ftzQ92YAHzjLKXtmT7YUVX3UA5gK+DJiaMeDNAPCaToyl9dvdTazfpMIC810QJmed3cACk7CjBrByfQQYAHwMIXlfZRgfAAAAAElFTkSuQmCC");
}
.controls button[data-state="stop"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzAxODM5M0E0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzAxODM5MkE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KkF/7gAAAOFJREFUeNrsmMsKwjAQRTNdu/ELpAUR/AVdC/6nu66kK/0hFXyBj22cQCohQqDUJFO4A4cusphDmFvaIa21klyFkl7mBltszZgt8zTHiXgzDTP/cfIEp8wtoZjP3UiGBOuMci2N60RuSIjoyo9x5ql7sdPo6+QJaiG5oMGkGIKpBddmVHuy7NKwa0gK+yronYNYIdGYQQhCEIIQhCAEIThoQZIuuPpDz0XMD1b81SHFsQUvApweIcGdAMG9nxh3u1UyJ5Vvs3VmqtD6zdSE2TCHhGJH27P0L42wo4Zg5voIMAB0bCBXvSa7VQAAAABJRU5ErkJggg==");
}
.controls button[data-state="mute"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzYxQThBMUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzYxQThBMEE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ohJkMQAAAjNJREFUeNrsmM8rRFEUx8ePxo8YokmJpMiGkIWU8mNJIZRkKcWGnfwDNgoh2ZB/gWzsKXakiSaUskP5LaMxz/fWmTqd3rx5Y96dod6pT3r33td83HPfvee9DMMwPH85MlxBV9AVjBNKkJNEzInrcpCbtI9DguMgIn8LfINrsA16QXY6BPtAmISkoETJjqmllSrBbvDJBHjcgFAM0X3g1y3YDJ7ED8tQKW0DC+BBjL0E1boEa8Cdyczw6AJV7LoYrNBa5ZKlTgtW0Foy4ghG287BLMij9hHwwfp3nRQsAmcx5OI9JFegkfr6xUwOOyGYD44s5OTNB+BZ9Ks120D9K2KWM+0KroGvOCJ2BFV4wQR4YWMuQA5l45G1d9oVDP9Szmr6VWpf2bhpal9mbet2BQ0Ngipm2LhTautkbSfpFixgm3qEUuxj976bCWamsC55o/XnoaOunNbmG3sI8+RNqRR0rNzSleJCkWLfX0vxOG0vHtrsVXpbWH/Q7CYzwYgGuSYwz6436e8Aazuym+KNJPZCGWrGJsUeGN2oi8VG3eHEUXecgOChOEEMEqqn/lXWHkjkqLMKfxLFgpq5OpZaXiwMOl1u3SYgGKBTxMsqGV5u7egoWGttFKzqGKsUJ8mSScFaoqvkb7VR8quHoR0sgnsxNij+AW0vTaEYgncWa3VPlvo6XzuHEnjtVCkdTceL+1QMwTBJbYEekJWuLwtmnz7K2NH269rA/brlCrqC/13wR4ABACa7olAORNxuAAAAAElFTkSuQmCC");
}
.controls button[data-state="unmute"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzk2MTA2OUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzk2MTA2OEE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LD0czAAAARZJREFUeNrsly8LAkEQxW/lksUgGMxWs8VgEdRgEMwmv4Lfw2TwawgaxGI2WQ0Gm0WDBv+db3SFK4K3nnMjzIMfF/exzHs7Z4Ig8CQr5QmXGlSDf2fQGONKz8kh1UwUHNUBt6hnPc5jMNgEl+ddyDNYAQcy52rQRD2U5ulDFcEcZELjZKSkuACmYXOSaiYPxiAnsQfpxib2BsUVdRqM7Owl+pL0wemVzBCU1nLc8+KS4jM+vuOjwJJi32OUbjNqUA3+wOBVusGB3e9YFOe6RU/dDJSSLup3OoIaWEoOyQ40wFpyijegCraSa2YF6mAvuQcXoGVXM7FFTaluf9WdTD/uXdcfd67dbgiyLEWty4IaVIPCdBdgAJkkaR2v57S0AAAAAElFTkSuQmCC");
}
.controls button[data-state="vol-up"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzU1OEJFREE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzU1OEJFQ0E0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1Pk2GwAAAQ9JREFUeNrsmL0KwjAQgHMOiogIPoLSQR9CcdDRxclXLIrg2mdSsYK41HjBVEJsM6XNld7BR6GF9mu4y8+BlFJQjo6gHmoEc3REyAG5qcc1cUViZPrnZAnOahazuSATl+A5oFxObDqBWSQA8MRLP3DWpeg0+jlZgpJIXUBjqrg1gmuVIRY7Hy/2lYNQ8vMZ5Rx8cw6yYNsENwVTCZRUsFndOQNkrNlXMc2A54HJKC91Peo52PUt+KBeJENk4fG7SwprsdA7ZN4PsiALVrny+BJcFdzbUtry87GzMYIvAk6pSzAhIJjYCWl2t+YibPtN9QkjV/tNheoRnvRQ1yV2R47i2zwVpe03rmIWDBAfAQYAByYx7rBsQ/AAAAAASUVORK5CYII=");
}
.controls button[data-state="vol-down"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzU1OEJGMUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzU1OEJGMEE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B37OGAAAANpJREFUeNrs2MEKwjAMBuDGk0efwSGCr6FXfU/FHeZV30hQ50U8dSmsMiLUCV0b5Q/87DDYPspCRshaazTXyGgvd4I+bc05e87V3U6UC2fLKd5MArhIDJM5c6Yh4CEjzmfXNVG3SYjowZdx5q+uZtPkZRJAq6Qv6Ge6GEAAAQQQwP61csMmUpZ9X/rNqKPYEw2j7p+BNARwHek7dM/YDNEk+B9EkwAIIIAAfgY+FZjuIeBJAfAo555cv91Mvs2W2xMWofWbR1btUaeC1ZySM5OHRthRA5i5GgEGAJmoHqaNWADvAAAAAElFTkSuQmCC");
}
.controls button[data-state="go-fullscreen"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCM0M2OUNCREE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCM0M2OUNCQ0E0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cU+iTAAAAZBJREFUeNrs2D9OwzAUBvC6iMMgBgYGpLIxIqYS0cPQKkOIuBErZ2DiDnQoHVBpaQnPEpUs13+e/T5LHfKkb6mr+BfHbh2rrusGx1yqB0pLA83ojyKpBd09xa5/4EkE1oAxaUoBa+CDa7jAIfOCv5R3IPCVskXPQX3BBwDuhvKFesRrMNKF2+UC9Zy7onw6kBMQTg/ArTknuUBzQSCQXpzRb8MFularBBkaObvvhgP0VQ4yiHMtUgkwFRnFlQCGkFUqrhTQhZxTLoz2e8omhisJNJE2zkZ6cRzgwXZLKZWK/Ka8edo1ckV5CQGT9oOJQMh2L1TDwZGXFDimXAbazykj9I6aW9X/Ilh4kBr3QVlSrnMXSS6wsn5GbOQet2/3IksAbZwLMGZ8pwhQ4344HTNvBAr04UaS0c4BtiAcC2n1/cjdsLYgXBRp9DtN3fK3IBxnJKe5L007EC6EXKFe3JfifwU/UgzcgHAmcos8WTil3AGBZ5STEqdbzwDcrOTplhQ5Sz1+609Ye2APjNSfAAMAv4p3Pa/O/tsAAAAASUVORK5CYII=");
}
.controls button[data-state="cancel-fullscreen"] {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCM0M2OUNCOUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzlFNDkzMUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1VELOwAAAadJREFUeNrs2EtOwzAQBuAEOAEIKsQluAAbGqSGHRIrEKveoQEWNOF0SFyGZ6GkwowlWwpm7IwdT8kiI/2LWk39yY4faiqESPpcG0nPq/fARE5xM0btrIGw7fQ4gJeQJ8gRI24MeYac+wIvICv5fcgrE1Li3lUftUZSgAeQhXpQMCGbOJ03yC51BM8gSyYkhpN95b7voA+yQtpukLbMgjsNWSRUZKXa/2wQBjJzjVwosA1ZNdowoMwtFRcKtCHNzzagsDybk/ZlItCGpAJJuK5AjVx1ANYuHAb0PYsPIZsdtpgt9RvRzuIEWa1dp1hYtqBOU3zf0qEvUK/uVmBqotI0/ffb1XBhHYBIlQyL5Dr2NlNGBBZcJ0kZAVhwniQP6qgLrS/II9dJMoF8RhhBee06jj3FGK72ANYIchwLiOFkByeQOQFYqCv9koL0BeYOnK65AzgzfgtDZqFACk7XHdI2Q9pakVTgxAPnW7lruinAfcgHE86FfIHsUUdwCvlmwmFIubde+b6DU/V3BAeuiVxoXMgqHq3hwjLyulEP98EBOAB/148AAwA7RI/R8UopbwAAAABJRU5ErkJggg==");
}
.controls .progress {
  flex-grow: 1;
  cursor: pointer;
  height: 80%;
}
.controls progress {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  color: #0095dd;
  border-radius: 2px;
  margin: 0 auto;
}
.controls progress::-moz-progress-bar {
  background-color: #0095dd;
}

.controls progress::-webkit-progress-value {
  background-color: #0095dd;
}
figure:fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;
  background-color: transparent;
}
figure:fullscreen video {
  margin-top: auto;
  margin-bottom: auto;
}
figure:fullscreen figcaption {
  display: none;
}
figure:fullscreen .controls {
  background-color: #666666;
}
@media screen and (width <= 42.5em) {
  .controls {
    height: auto;
  }

  .controls button {
    width: calc(100% / 7);
    margin-top: 2.5rem;
  }

  .controls .progress {
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 0;
    height: 2rem;
  }

  .controls .progress progress {
    width: 98%;
  }

  figcaption {
    text-align: center;
  }
}
```

Es gibt fast keine Änderung am CSS aus der vorherigen Version, außer an einer Stelle, an der wir `width: calc(100% / 6)` durch `width: calc(100% / 7)` ersetzen, um den neuen Button zu berücksichtigen. Wir setzen auch `position: relative` auf der figure, damit das Untertitelmenü relativ dazu positioniert werden kann.

Für den Beschriftungsbutton wird kein Bild verwendet, daher wird dieser wie folgt gestylt:

```css live-sample___video-player-with-captions
.controls button[data-state="subtitles"] {
  padding: 2px;
}
.controls button[data-state="subtitles"] span {
  max-width: 100%;
  width: 2rem;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #666666;
  background-color: black;
  border-radius: 4px;
}
```

Es gibt auch andere CSS-Änderungen, die spezifisch für einige zusätzliche JavaScript-Implementierungen sind, aber diese werden an der entsprechenden Stelle unten erwähnt.

## Implementierung von Untertiteln

Vieles, was wir tun, um auf die Videountertitel zuzugreifen, dreht sich um JavaScript. Ähnlich wie bei den Videosteuerungen gibt es einen Button im nativen Steuerungssatz, um auf Untertitel zuzugreifen, wenn der Browser HTML-Videountertitel unterstützt. Da wir jedoch unsere eigenen Videosteuerungen definiert haben, ist dieser Button verborgen, und wir müssen unsere eigenen definieren.

Browser unterscheiden sich darin, was sie unterstützen, daher versuchen wir, eine einheitlichere Benutzeroberfläche für jeden Browser soweit möglich zu bieten. Weitere Informationen zu Browser-Kompatibilitätsproblemen folgen später.

```js hidden live-sample___video-player-with-captions
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volInc = document.getElementById("vol-inc");
const volDec = document.getElementById("vol-dec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");

// Hide the default controls
video.controls = false;
// Display the user defined video controls
videoControls.setAttribute("data-state", "visible");
function changeButtonState(type) {
  if (type === "play-pause") {
    // Play/Pause button
    if (video.paused || video.ended) {
      playPause.setAttribute("data-state", "play");
    } else {
      playPause.setAttribute("data-state", "pause");
    }
  } else if (type === "mute") {
    // Mute button
    mute.setAttribute("data-state", video.muted ? "unmute" : "mute");
  }
}
video.addEventListener("play", () => {
  changeButtonState("play-pause");
});

video.addEventListener("pause", () => {
  changeButtonState("play-pause");
});

stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;

  // Update the play/pause button's 'data-state' which allows the
  // correct button image to be set via CSS
  changeButtonState("play-pause");
});

mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
  changeButtonState("mute");
});
playPause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
function checkVolume(dir) {
  if (dir) {
    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === "+" && currentVolume < 1) {
      video.volume += 0.1;
    } else if (dir === "-" && currentVolume > 0) {
      video.volume -= 0.1;
    }

    // If the volume has been turned off, also set it as muted
    // Note: can only do this with the custom control set as when the 'volumechange' event is raised,
    // there is no way to know if it was via a volume or a mute change
    video.muted = currentVolume <= 0;
  }
  changeButtonState("mute");
}

function alterVolume(dir) {
  checkVolume(dir);
}
volInc.addEventListener("click", (e) => {
  alterVolume("+");
});
volDec.addEventListener("click", (e) => {
  alterVolume("-");
});
video.addEventListener("volumechange", () => {
  checkVolume();
});
progress.addEventListener("click", (e) => {
  if (!Number.isFinite(video.duration)) return;
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});

video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});

if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
fullscreen.addEventListener("click", (e) => {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode
    document.exitFullscreen();
    // Set the fullscreen button's 'data-state' which allows the
    // correct button image to be set via CSS
    fullscreen.setAttribute("data-state", "go-fullscreen");
  } else {
    // The document is not in fullscreen mode
    videoContainer.requestFullscreen();
    fullscreen.setAttribute("data-state", "cancel-fullscreen");
  }
});
```

### Erste Einrichtung

Wie bei allen anderen Buttons müssen wir zunächst einen Handler für den Untertitel-Button speichern:

```js live-sample___video-player-with-captions
const subtitles = document.getElementById("subtitles");
```

Wir schalten auch zunächst alle Untertitel aus, falls der Browser standardmäßig einen von ihnen aktiviert:

```js live-sample___video-player-with-captions
for (const track of video.textTracks) {
  track.mode = "hidden";
}
```

Die `video.textTracks`-Eigenschaft enthält ein Array aller Textspuren, die an das Video angehängt sind. Wir durchlaufen jede von ihnen und setzen ihren `mode` auf `hidden`.

Hinweis: Die [WebVTT API](/de/docs/Web/API/WebVTT_API) gibt uns Zugriff auf alle Textspuren, die für ein HTML-Video mit dem `<track>`-Element definiert sind.

### Aufbau eines Untertitelmenüs

Unser Ziel ist es, den `subtitles`-Button, den wir zuvor hinzugefügt haben, zu verwenden, um ein Menü anzuzeigen, das es den Benutzern ermöglicht, die Sprache auszuwählen, in der die Untertitel angezeigt werden sollen, oder sie ganz auszuschalten.

Wir haben den Button hinzugefügt, aber bevor wir ihn etwas tun lassen, müssen wir das Menü aufbauen, das mit ihm einhergeht. Dieses Menü wird dynamisch aufgebaut, sodass Sprachen später durch Bearbeiten der `<track>`-Elemente innerhalb des Video-Markups hinzugefügt oder entfernt werden können.

Alles, was wir tun müssen, ist, die `textTracks` des Videos zu durchlaufen und ihre Eigenschaften auszulesen, um das Menü daraus aufzubauen:

```js live-sample___video-player-with-captions
const subtitleMenuButtons = [];
let subtitlesMenu;
if (video.textTracks) {
  const df = document.createDocumentFragment();
  subtitlesMenu = df.appendChild(document.createElement("ul"));
  subtitlesMenu.className = "subtitles-menu";
  subtitlesMenu.appendChild(createMenuItem("subtitles-off", "", "Off"));
  for (const track of video.textTracks) {
    subtitlesMenu.appendChild(
      createMenuItem(
        `subtitles-${track.language}`,
        track.language,
        track.label,
      ),
    );
  }
  videoContainer.appendChild(subtitlesMenu);
}
```

Dieser Code erstellt ein [`documentFragment`](/de/docs/Web/API/DocumentFragment), das verwendet wird, um eine ungeordnete Liste mit unserem Untertitelmenü zu halten. Zuerst wird eine Option hinzugefügt, die dem Benutzer ermöglicht, alle Untertitel auszuschalten, und dann werden Buttons für jede Textspur hinzugefügt, wobei die Sprache und das Label von jeder ausgelesen werden.

Die Erstellung jedes Listenelements und Buttons erfolgt durch die `createMenuItem()`-Funktion, die wie folgt definiert ist:

```js live-sample___video-player-with-captions
function createMenuItem(id, lang, label) {
  const listItem = document.createElement("li");
  const button = listItem.appendChild(document.createElement("button"));
  button.setAttribute("id", id);
  button.className = "subtitles-button";
  if (lang.length > 0) button.setAttribute("lang", lang);
  button.value = label;
  button.setAttribute("data-state", "inactive");
  button.appendChild(document.createTextNode(label));
  button.addEventListener("click", (e) => {
    // Set all buttons to inactive
    subtitleMenuButtons.forEach((button) => {
      button.setAttribute("data-state", "inactive");
    });

    // Find the language to activate
    const lang = button.getAttribute("lang");
    for (const track of video.textTracks) {
      // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
      if (track.language === lang) {
        track.mode = "showing";
        button.setAttribute("data-state", "active");
      } else {
        track.mode = "hidden";
      }
    }
    subtitlesMenu.style.display = "none";
  });
  subtitleMenuButtons.push(button);
  return listItem;
}
```

Diese Funktion baut die erforderlichen {{ htmlelement("li") }}- und {{ htmlelement("button") }}-Elemente auf und gibt sie zurück, damit sie der Untertitelliste hinzugefügt werden können. Sie richtet auch die erforderlichen Event-Listener auf dem Button ein, um das entsprechende Untertitel-Set ein- oder auszuschalten. Dies geschieht, indem das erforderliche `mode`-Attribut des Untertitels auf `showing` und das der anderen auf `hidden` gesetzt wird.

Sobald das Menü aufgebaut ist, wird es am unteren Ende des `videoContainer` in den DOM eingefügt.

Anfangs ist das Menü standardmäßig verborgen, sodass ein Event-Listener auf unseren Untertitel-Button hinzugefügt werden muss, um es umzuschalten:

```js live-sample___video-player-with-captions
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### CSS für das Untertitelmenü

Wir haben auch einige grundlegende Stile für das neu erstellte Untertitelmenü hinzugefügt:

```css live-sample___video-player-with-captions
.subtitles-menu {
  display: none;
  position: absolute;
  bottom: 3rem;
  right: 0;
  background: #666666;
  list-style-type: none;
  margin: 0;
  width: 100px;
  padding: 10px;
}

.subtitles-menu li {
  padding: 0;
  text-align: center;
}

.subtitles-menu li button {
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}
```

## Styling der angezeigten Untertitel

Eine der weniger bekannten und unterstützten Funktionen von WebVTT ist die Fähigkeit, die einzelnen Untertitel (etwas, das Text-Cues genannt wird) [via CSS](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) zu stylen.

Das `::cue` Pseudoelement ist der Schlüssel, um einzelne Track-Cues für das Styling anzusprechen, da es jedem definierten Cue entspricht. Es gibt nur eine Handvoll CSS-Eigenschaften, die auf ein Cue angewendet werden können:

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} Shorthand-Eigenschaften
- {{ cssxref("outline") }} Shorthand-Eigenschaften
- {{ cssxref("font") }} Shorthand-Eigenschaften, einschließlich {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

Um beispielsweise die Textfarbe der Text-Cues zu ändern, können Sie schreiben:

```css live-sample___video-player-with-captions
::cue {
  color: #cccccc;
}
```

Wenn die WebVTT-Datei [voice spans](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#voice_tag_vv) verwendet, die es ermöglichen, dass Cues als eine bestimmte "Stimme" definiert werden:

```plain
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

Dann kann diese bestimmte 'Stimme' wie folgt gestylt werden:

```css live-sample___video-player-with-captions
::cue(v[voice="Test"]) {
  color: white;
  background: #0095dd;
}
```

## Ergebnis

{{EmbedLiveSample("video-player-with-captions", "", 400, "", "", "", "fullscreen")}}
