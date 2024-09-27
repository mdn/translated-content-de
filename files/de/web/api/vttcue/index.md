---
title: VTTCue
slug: Web/API/VTTCue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Das `VTTCue`-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert eine Markierung, die dem Text-Track zugeordnet werden kann, der mit einem bestimmten Video (oder anderen Medien) verbunden ist.

Eine Markierung definiert den anzuzeigenden Text in einem bestimmten Zeitausschnitt eines Video- oder Audiotracks, zusammen mit Anzeigeeigenschaften wie Größe, Ausrichtung und Position.

{{InheritanceDiagram}}

## Konstruktor

- [`VTTCue()`](/de/docs/Web/API/VTTCue/VTTCue)
  - : Gibt ein neu erstelltes `VTTCue`-Objekt zurück, das den angegebenen Zeitbereich abdeckt und den angegebenen Text hat.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)._

- [`VTTCue.region`](/de/docs/Web/API/VTTCue/region)
  - : Ein [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekt, das die Unterregion des Videos beschreibt, auf die die Markierung gezeichnet wird, oder `null`, wenn keine zugewiesen ist.
- [`VTTCue.vertical`](/de/docs/Web/API/VTTCue/vertical)
  - : Ein Enum, das die Schreibrichtung der Markierung darstellt.
- [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines)
  - : `true`, wenn das [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)-Attribut eine ganze Anzahl von Zeilen anzeigt, oder `false`, wenn es einen Prozentsatz der Videogröße darstellt. Standardmäßig ist dies `true`.
- [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)
  - : Repräsentiert die Zeilenpositionierung der Markierung. Dies kann die Zeichenfolge `auto` oder eine Zahl sein, deren Interpretation vom Wert von [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines) abhängt.
- [`VTTCue.lineAlign`](/de/docs/Web/API/VTTCue/lineAlign)
  - : Ein Enum, das die Ausrichtung der [`VTTCue.line`](/de/docs/Web/API/VTTCue/line) darstellt.
- [`VTTCue.position`](/de/docs/Web/API/VTTCue/position)
  - : Repräsentiert die Einrückung der Markierung innerhalb der Zeile. Dies kann die Zeichenfolge `auto`, eine Zahl sein, die den Prozentsatz der [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) oder die Videogröße darstellt, wenn [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) `null` ist.
- [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)
  - : Ein Enum, das die Ausrichtung der Markierung darstellt. Dies wird verwendet, um zu bestimmen, woran die [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) verankert ist. Der Standardwert ist `auto`.
- [`VTTCue.size`](/de/docs/Web/API/VTTCue/size)
  - : Repräsentiert die Größe der Markierung als Prozentsatz der Videogröße.
- [`VTTCue.align`](/de/docs/Web/API/VTTCue/align)
  - : Ein Enum, das die Ausrichtung aller Textzeilen innerhalb des Markierungskastens darstellt.
- [`VTTCue.text`](/de/docs/Web/API/VTTCue/text)
  - : Eine Zeichenkette, die den Inhalt der Markierung darstellt.

## Instanz-Methoden

- [`getCueAsHTML()`](/de/docs/Web/API/VTTCue/getCueAsHTML)
  - : Gibt den Markierungstext als [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück.

## Beispiel

### HTML

Das folgende Beispiel fügt dem Video einen neuen [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Markierungen mit der Methode [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzu, wobei ein `VTTCue`-Objekt als Wert verwendet wird.

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
