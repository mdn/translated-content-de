---
title: VTTCue
slug: Web/API/VTTCue
l10n:
  sourceCommit: c198131b981b9274fcde625e441df7da7b41bec3
---

{{APIRef("WebVTT")}}

Das `VTTCue`-Interface der [WebVTT-API](/de/docs/Web/API/WebVTT_API) repräsentiert einen Cue, der der Textspur zugeordnet werden kann, die mit einem bestimmten Video (oder anderem Medium) verbunden ist.

Ein Cue definiert den Text, der in einem bestimmten Zeitabschnitt eines Video- oder Audiotracks angezeigt werden soll, zusammen mit Anzeigeeigenschaften wie Größe, Ausrichtung und Position.

{{InheritanceDiagram}}

## Konstruktor

- [`VTTCue()`](/de/docs/Web/API/VTTCue/VTTCue)
  - : Gibt ein neu erstelltes `VTTCue`-Objekt zurück, das den angegebenen Zeitbereich abdeckt und den angegebenen Text enthält.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)._

- [`VTTCue.region`](/de/docs/Web/API/VTTCue/region)
  - : Ein [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekt, das den Unterbereich des Videos beschreibt, auf dem der Cue gezeichnet wird, oder `null`, wenn keiner zugewiesen ist.
- [`VTTCue.vertical`](/de/docs/Web/API/VTTCue/vertical)
  - : Ein Enum, das die Schreibrichtung des Cues darstellt.
- [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines)
  - : `true`, wenn das [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)-Attribut eine Ganzzahl der Linienzahl angibt, oder `false`, wenn es einen Prozentwert der Videogröße darstellt.
    Standardmäßig ist dies `true`.
- [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)
  - : Repräsentiert die Linienpositionierung des Cues. Dies kann der String `auto` oder eine Zahl sein, deren Bedeutung vom Wert von [`VTTCue.snapToLines`](/de/docs/Web/API/VTTCue/snapToLines) abhängt.
- [`VTTCue.lineAlign`](/de/docs/Web/API/VTTCue/lineAlign)
  - : Ein Enum, das die Ausrichtung des VTT-Cues darstellt.
- [`VTTCue.position`](/de/docs/Web/API/VTTCue/position)
  - : Repräsentiert die Einrückung des Cues innerhalb der Linie.
    Dies kann der String `auto`, eine Zahl, die den Prozentsatz der [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) oder die Videogröße darstellt, falls [`VTTCue.region`](/de/docs/Web/API/VTTCue/region) `null` ist.
- [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)
  - : Ein Enum, das die Ausrichtung des Cues darstellt.
    Dies wird verwendet, um zu bestimmen, woran die [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) verankert ist.
    Der Standardwert ist `auto`.
- [`VTTCue.size`](/de/docs/Web/API/VTTCue/size)
  - : Repräsentiert die Größe des Cues als Prozentsatz der Videogröße.
- [`VTTCue.align`](/de/docs/Web/API/VTTCue/align)
  - : Ein Enum, das die Ausrichtung aller Zeilen des Textes innerhalb des Cue-Kastens darstellt.
- [`VTTCue.text`](/de/docs/Web/API/VTTCue/text)
  - : Ein String, der den Inhalt des Cues darstellt.

## Instanz-Methoden

- [`getCueAsHTML()`](/de/docs/Web/API/VTTCue/getCueAsHTML)
  - : Gibt den Cue-Text als [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück.

## Beispiel

### HTML

Das folgende Beispiel fügt dem Video eine neue [`TextTrack`](/de/docs/Web/API/TextTrack) hinzu und fügt dann Cues mit der Methode [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue) hinzu, wobei ein `VTTCue`-Objekt als Wert verwendet wird.

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
