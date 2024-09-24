---
title: VTTRegion
slug: Web/API/VTTRegion
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Die `VTTRegion`-Schnittstelle der [WebVTT API](/de/docs/Web/API/WebVTT_API) beschreibt einen Bereich des Videos, auf dem ein {{domxref("VTTCue")}} gerendert werden soll.

## Konstruktor

- {{domxref("VTTRegion.VTTRegion", "VTTRegion()")}}
  - : Gibt ein neu erstelltes `VTTRegion`-Objekt zurück.

## Instanzeigenschaften

- {{domxref("VTTRegion.id")}}
  - : Ein String, der die Region identifiziert.
- {{domxref("VTTRegion.width")}}
  - : Repräsentiert die Breite der Region, als Prozentsatz des Videos.
- {{domxref("VTTRegion.lines")}}
  - : Repräsentiert die Höhe der Region, in Anzahl der Zeilen.
- {{domxref("VTTRegion.regionAnchorX")}}
  - : Repräsentiert den X-Versatz des Regionsankers, als Prozentsatz der Region.
- {{domxref("VTTRegion.regionAnchorY")}}
  - : Repräsentiert den Y-Versatz des Regionsankers, als Prozentsatz der Region.
- {{domxref("VTTRegion.viewportAnchorX")}}
  - : Repräsentiert den X-Versatz des Ankers im Ansichtsfenster, als Prozentsatz des Videos.
- {{domxref("VTTRegion.viewportAnchorY")}}
  - : Repräsentiert den Y-Versatz des Ankers im Ansichtsfenster, als Prozentsatz des Videos.
- {{domxref("VTTRegion.scroll")}}
  - : Ein Enum, das beschreibt, wie das Hinzufügen eines neuen Cues bestehende Cues verschieben wird.

## Beispiele

```js
const region = new VTTRegion();
region.width = 50; // Verwenden Sie 50% der Videobreite
region.lines = 4; // Verwenden Sie 4 Zeilen Höhe.
region.viewportAnchorX = 25; // Lassen Sie die Region bei 25% von links beginnen.
const cue = new VTTCue(2, 3, "Cool text to be displayed");
cue.region = region; // Dieser Cue wird nur innerhalb dieser Region gezeichnet.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
