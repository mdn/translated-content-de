---
title: VTTRegion
slug: Web/API/VTTRegion
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Die Schnittstelle `VTTRegion` der [WebVTT API](/de/docs/Web/API/WebVTT_API) beschreibt einen Teil des Videos, auf dem ein [`VTTCue`](/de/docs/Web/API/VTTCue) gerendert werden soll.

## Konstruktor

- [`VTTRegion()`](/de/docs/Web/API/VTTRegion/VTTRegion)
  - : Gibt ein neu erstelltes `VTTRegion`-Objekt zurück.

## Instanz-Eigenschaften

- [`VTTRegion.id`](/de/docs/Web/API/VTTRegion/id)
  - : Ein String, der die Region identifiziert.
- [`VTTRegion.width`](/de/docs/Web/API/VTTRegion/width)
  - : Repräsentiert die Breite der Region, als Prozentsatz des Videos.
- [`VTTRegion.lines`](/de/docs/Web/API/VTTRegion/lines)
  - : Repräsentiert die Höhe der Region, in der Anzahl von Zeilen.
- [`VTTRegion.regionAnchorX`](/de/docs/Web/API/VTTRegion/regionAnchorX)
  - : Repräsentiert den X-Versatz des Regionsankers, als Prozentsatz der Region.
- [`VTTRegion.regionAnchorY`](/de/docs/Web/API/VTTRegion/regionAnchorY)
  - : Repräsentiert den Y-Versatz des Regionsankers, als Prozentsatz der Region.
- [`VTTRegion.viewportAnchorX`](/de/docs/Web/API/VTTRegion/viewportAnchorX)
  - : Repräsentiert den X-Versatz des Viewport-Ankers, als Prozentsatz des Videos.
- [`VTTRegion.viewportAnchorY`](/de/docs/Web/API/VTTRegion/viewportAnchorY)
  - : Repräsentiert den Y-Versatz des Viewport-Ankers, als Prozentsatz des Videos.
- [`VTTRegion.scroll`](/de/docs/Web/API/VTTRegion/scroll)
  - : Ein Enum, das darstellt, wie durch das Hinzufügen einer neuen Cue bestehende Cues verschoben werden.

## Beispiele

```js
const region = new VTTRegion();
region.width = 50; // Use 50% of the video width
region.lines = 4; // Use 4 lines of height.
region.viewportAnchorX = 25; // Have the region start at 25% from the left.
const cue = new VTTCue(2, 3, "Cool text to be displayed");
cue.region = region; // This cue will be drawn only within this region.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
