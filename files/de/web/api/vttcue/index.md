---
title: VTTCue
slug: Web/API/VTTCue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Das `VTTCue`-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert einen Untertitel, der der Textspur zugeordnet werden kann, die mit einem bestimmten Video (oder anderen Medien) verbunden ist.

Ein Untertitel definiert den anzuzeigenden Text in einem bestimmten Zeitabschnitt einer Video- oder Audiospur zusammen mit Anzeigeeigenschaften wie Größe, Ausrichtung und Position.

{{InheritanceDiagram}}

## Konstruktor

- [`VTTCue()`](/de/docs/Web/API/VTTCue/VTTCue)
  - : Gibt ein neu erstelltes `VTTCue`-Objekt zurück, das den angegebenen Zeitbereich abdeckt und den angegebenen Text hat.

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)._

- [`VTTCue.region`](/de/docs/Web/API/VTTCue/region)
  - : Ein [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekt, das die Unterregion des Videos beschreibt, auf die der Untertitel gezeichnet wird, oder `null`, wenn keine zugewiesen ist.
- [`VTTCue.vertical`](/de/docs/Web/API/VTTCue/vertical)
  - : Ein Enum, das die Schreibrichtung des Untertitels darstellt.
- [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines)
  - : `true`, wenn das Attribut [`VTTCue.line`](/de/docs/Web/API/VTTCue/line) eine ganze Anzahl von Zeilen angibt oder `false`, wenn es einen Prozentsatz der Videogröße darstellt.
    Standardmäßig ist dies `true`.
- [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)
  - : Repräsentiert die Linienpositionierung des Untertitels. Dies kann die Zeichenkette `auto` oder eine Zahl sein, deren Interpretation von dem Wert von [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines) abhängt.
- [`VTTCue.lineAlign`](/de/docs/Web/API/VTTCue/lineAlign)
  - : Ein Enum, das die Ausrichtung der [`VTTCue.line`](/de/docs/Web/API/VTTCue/line) darstellt.
- [`VTTCue.position`](/de/docs/Web/API/VTTCue/position)
  - : Repräsentiert die Einrückung des Untertitels innerhalb der Zeile.
    Dies kann die Zeichenkette `auto`, eine Zahl, die den Prozentsatz der [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) oder der Video-Größe darstellt, wenn [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) `null` ist.
- [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)
  - : Ein Enum, das die Ausrichtung des Untertitels darstellt.
    Dies wird verwendet, um zu bestimmen, woran [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) angebunden ist.
    Der Standardwert ist `auto`.
- [`VTTCue.size`](/de/docs/Web/API/VTTCue/size)
  - : Repräsentiert die Größe des Untertitels als Prozentsatz der Video-Größe.
- [`VTTCue.align`](/de/docs/Web/API/VTTCue/align)
  - : Ein Enum, das die Ausrichtung aller Textzeilen innerhalb des Untertitelrahmens darstellt.
- [`VTTCue.text`](/de/docs/Web/API/VTTCue/text)
  - : Eine Zeichenkette, die den Inhalt des Untertitels repräsentiert.

## Instanzmethoden

- [`getCueAsHTML()`](/de/docs/Web/API/VTTCue/getCueAsHTML)
  - : Gibt den Untertiteltext als [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück.

## Beispiel

### HTML

Das folgende Beispiel fügt dem Video eine neue [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu, dann Untertitel mit der Methode [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue), wobei ein `VTTCue`-Objekt als Wert verwendet wird.

```html
<video
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"></video>
```

### CSS

```css
video {
  width: 420px;
  height: 300px;
}
```

### JavaScript

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
track.addCue(new VTTCue(1.5, 2.9, "Tell me, is the lord of the universe in?"));
track.addCue(new VTTCue(3, 4.2, "Yes, he's in - in a bad humor"));
track.addCue(new VTTCue(4.3, 6, "Somebody must've stolen the crown jewels"));
console.log(track.cues);
```

### Ergebnis

{{EmbedLiveSample('Example','400','330')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
