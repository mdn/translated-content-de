---
title: VTTRegion
slug: Web/API/VTTRegion
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Das `VTTRegion`-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) beschreibt einen Bereich des Videos, um ein [`VTTCue`](/de/docs/Web/API/VTTCue) darauf darzustellen.

## Konstruktor

- [`VTTRegion()`](/de/docs/Web/API/VTTRegion/VTTRegion)
  - : Erstellt eine neue Instanz eines `VTTRegion`-Objekts.

## Instanz-Eigenschaften

- [`VTTRegion.id`](/de/docs/Web/API/VTTRegion/id)
  - : Ein String, der die Region identifiziert.
- [`VTTRegion.width`](/de/docs/Web/API/VTTRegion/width)
  - : Repräsentiert die Breite der Region als Prozentsatz der Videobreite.
- [`VTTRegion.lines`](/de/docs/Web/API/VTTRegion/lines)
  - : Repräsentiert die Höhe der Region, in Zeilenanzahl.
- [`VTTRegion.regionAnchorX`](/de/docs/Web/API/VTTRegion/regionAnchorX)
  - : Repräsentiert den X-Versatz des Regionsankers als Prozentsatz der Regionsbreite.
- [`VTTRegion.regionAnchorY`](/de/docs/Web/API/VTTRegion/regionAnchorY)
  - : Repräsentiert den Y-Versatz des Regionsankers als Prozentsatz der Regionshöhe.
- [`VTTRegion.viewportAnchorX`](/de/docs/Web/API/VTTRegion/viewportAnchorX)
  - : Repräsentiert den X-Versatz des Ansichtsankers als Prozentsatz der Videobreite.
- [`VTTRegion.viewportAnchorY`](/de/docs/Web/API/VTTRegion/viewportAnchorY)
  - : Repräsentiert den Y-Versatz des Ansichtsankers als Prozentsatz der Videohöhe.
- [`VTTRegion.scroll`](/de/docs/Web/API/VTTRegion/scroll)
  - : Ein enumerierter Wert, der angibt, wie vorhandene Cues in der Region verschoben werden, wenn ein neuer Cue hinzugefügt wird.

## Beispiele

```js
const region = new VTTRegion();
region.width = 50; // Set the region to 50% of the video's width
region.lines = 4; // Render cues in 4 lines
region.viewportAnchorX = 25; // Place the region 25% from the left edge of the video
const cue = new VTTCue(2, 3, "Cool text to be displayed");
cue.region = region; // This cue will be drawn only within this region.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
