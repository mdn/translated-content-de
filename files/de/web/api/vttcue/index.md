---
title: VTTCue
slug: Web/API/VTTCue
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Das `VTTCue`-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert ein Cue, das der Textspur, die mit einem bestimmten Video (oder anderen Medien) verknüpft ist, hinzugefügt werden kann.

Ein Cue definiert den Text, der in einem bestimmten Zeitabschnitt eines Video- oder Audiotracks angezeigt werden soll, zusammen mit Anzeigeeigenschaften wie Größe, Ausrichtung und Position.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("VTTCue.VTTCue", "VTTCue()")}}
  - : Gibt ein neu erstelltes `VTTCue`-Objekt zurück, das den angegebenen Zeitraum abdeckt und den angegebenen Text enthält.

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von {{domxref("TextTrackCue")}}._

- {{domxref("VTTCue.region")}}
  - : Ein {{domxref("VTTRegion")}}-Objekt, das die Subregion des Videos beschreibt, auf der das Cue gezeichnet wird, oder `null`, wenn keine zugewiesen ist.
- {{domxref("VTTCue.vertical")}}
  - : Ein Enum, das die Schreibrichtung des Cues repräsentiert.
- {{domxref("VTTCue.snapToLines")}}
  - : `true`, wenn das {{domxref("VTTCue.line")}}-Attribut eine ganze Anzahl von Zeilen angibt, oder `false`, wenn es einen Prozentsatz der Videogröße darstellt.
    Dies ist standardmäßig `true`.
- {{domxref("VTTCue.line")}}
  - : Repräsentiert die Linienpositionierung des Cues. Dies kann die Zeichenkette `auto` oder eine Zahl sein, deren Interpretation vom Wert von {{domxref("VTTCue.snapToLines")}} abhängt.
- {{domxref("VTTCue.lineAlign")}}
  - : Ein Enum, das die Ausrichtung der {{domxref("VTTCue.line")}} repräsentiert.
- {{domxref("VTTCue.position")}}
  - : Repräsentiert die Einrückung des Cues innerhalb der Zeile.
    Dies kann die Zeichenkette `auto`, eine Zahl darstellen, die den Prozentsatz der {{domxref("VTTCue.region")}} oder der Videogröße darstellt, falls {{domxref("VTTCue.region")}} `null` ist.
- {{domxref("VTTCue.positionAlign")}}
  - : Ein Enum, das die Ausrichtung des Cues repräsentiert.
    Dies wird verwendet, um zu bestimmen, woran die {{domxref("VTTCue.position")}} verankert ist.
    Der Standardwert ist `auto`.
- {{domxref("VTTCue.size")}}
  - : Repräsentiert die Größe des Cues als Prozentsatz der Videogröße.
- {{domxref("VTTCue.align")}}
  - : Ein Enum, das die Ausrichtung aller Textzeilen innerhalb des Cue-Boxen repräsentiert.
- {{domxref("VTTCue.text")}}
  - : Eine Zeichenkette, die den Inhalt des Cues repräsentiert.

## Instanzmethoden

- {{domxref("VTTCue.getCueAsHTML", "getCueAsHTML()")}}
  - : Gibt den Cue-Text als {{domxref("DocumentFragment")}} zurück.

## Beispiel

### HTML

Das folgende Beispiel fügt dem Video eine neue {{domxref("TextTrack")}} hinzu und fügt Cues mit der Methode {{domxref("TextTrack.addCue()")}} hinzu, wobei ein `VTTCue`-Objekt als Wert verwendet wird.

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
