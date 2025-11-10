---
title: VTTCue
slug: Web/API/VTTCue
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{APIRef("WebVTT")}}

Das `VTTCue`-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert eine Cue, die der Textspur zugeordnet werden kann, die mit einem bestimmten Video (oder anderen Medien) verknüpft ist.

Eine Cue definiert den Text, der in einem bestimmten Zeitabschnitt eines Video- oder Audiotracks angezeigt werden soll, zusammen mit Anzeigeeigenschaften wie Größe, Ausrichtung und Position.

{{InheritanceDiagram}}

## Konstruktor

- [`VTTCue()`](/de/docs/Web/API/VTTCue/VTTCue)
  - : Gibt ein neu erstelltes `VTTCue`-Objekt zurück, das den angegebenen Zeitbereich abdeckt und den angegebenen Text hat.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)._

- [`VTTCue.region`](/de/docs/Web/API/VTTCue/region)
  - : Ein [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekt, das die Unterregion des Videos beschreibt, auf die die Cue gezeichnet wird, oder `null`, wenn keine zugewiesen ist.
- [`VTTCue.vertical`](/de/docs/Web/API/VTTCue/vertical)
  - : Ein Enum, das die Schreibrichtung der Cue darstellt.
- [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines)
  - : `true`, wenn das [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)-Attribut eine ganze Anzahl von Zeilen angibt, oder `false`, wenn es einen Prozentsatz der Videogröße darstellt.
    Dies ist standardmäßig `true`.
- [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)
  - : Repräsentiert die Linienpositionierung der Cue. Dies kann der String `auto` sein oder eine Zahl, deren Interpretation vom Wert von [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines) abhängt.
- [`VTTCue.lineAlign`](/de/docs/Web/API/VTTCue/lineAlign)
  - : Ein Enum, das die Ausrichtung der VTT Cue darstellt.
- [`VTTCue.position`](/de/docs/Web/API/VTTCue/position)
  - : Repräsentiert die Einrückung der Cue innerhalb der Linie.
    Dies kann der String `auto`, eine Zahl, die den Prozentsatz der [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) oder der Videogröße darstellt, wenn [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) `null` ist.
- [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)
  - : Ein Enum, das die Ausrichtung der Cue darstellt.
    Dies wird verwendet, um zu bestimmen, auf was die [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) verankert ist.
    Der Standardwert ist `auto`.
- [`VTTCue.size`](/de/docs/Web/API/VTTCue/size)
  - : Repräsentiert die Größe der Cue, als Prozentsatz der Videogröße.
- [`VTTCue.align`](/de/docs/Web/API/VTTCue/align)
  - : Ein Enum, das die Ausrichtung aller Textzeilen innerhalb des Cue-Feldes darstellt.
- [`VTTCue.text`](/de/docs/Web/API/VTTCue/text)
  - : Ein String, der den Inhalt der Cue repräsentiert.

## Instanz-Methoden

- [`getCueAsHTML()`](/de/docs/Web/API/VTTCue/getCueAsHTML)
  - : Gibt den Cue-Text als [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück.

## Beispiel

### HTML

Das folgende Beispiel fügt dem Video eine neue [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Cues mit der [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)-Methode hinzu, wobei ein `VTTCue`-Objekt als Wert verwendet wird.

```html
<video controls src="/shared-assets/videos/friday.mp4"></video>
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
