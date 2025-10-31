---
title: "VideoFrame: format-Eigenschaft"
short-title: format
slug: Web/API/VideoFrame/format
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`format`**-Eigenschaft der [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Schnittstelle gibt das Pixelformat des `VideoFrame` zurück.

## Wert

Ein String, der ein Video-Pixelformat enthält, eines von:

- `"I420"`
  - : Auch bekannt als _Planar YUV 4:2:0_. Dieses Format besteht aus drei getrennten Ebenen, einer Ebene für Luminanz und zwei Ebenen für Chrominanz, bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um den Faktor 2 gegenüber der Y-Ebene unterabgetastet. Jede Probe in diesem Format ist 8 Bit.
- `"I420P10"`
  - : Auch bekannt als _Planar YUV 4:2:0_ 10-Bit. Dieses Format besteht aus drei getrennten Ebenen: einer Ebene für Luminanz und zwei Ebenen für Chrominanz — bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um den Faktor 2 gegenüber der Y-Ebene unterabgetastet. Jede Probe in diesem Format ist 10 Bit, codiert als 16-Bit-Integer im Little-Endian-Byte-Order.
- `"I420P12"`
  - : Auch bekannt als _Planar YUV 4:2:0_ 12-Bit. Dieses Format besteht aus drei getrennten Ebenen: einer Ebene für Luminanz und zwei Ebenen für Chrominanz — bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um den Faktor 2 gegenüber der Y-Ebene unterabgetastet. Jede Probe in diesem Format ist 12 Bit, codiert als 16-Bit-Integer im Little-Endian-Byte-Order.
- `"I420A"`
  - : Auch bekannt als _Planar YUV 4:2:0 mit Alphakanal_. Dieses Format besteht aus vier getrennten Ebenen: einer Ebene für Luminanz, zwei Ebenen für Chrominanz, bezeichnet als Y, U und V, und einer Ebene für Alphawerte, alle in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um den Faktor 2 gegenüber der Y- und Alpha-Ebene unterabgetastet. Jede Probe in diesem Format ist 8 Bit.
- `"I422"`
  - : Auch bekannt als _Planar YUV 4:2:2_. Dieses Format besteht aus drei getrennten Ebenen: einer Ebene für Luminanz und zwei Ebenen für Chrominanz, bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal um den Faktor 2 gegenüber der Y-Ebene unterabgetastet und vertikal nicht unterabgetastet. Jede Probe in diesem Format ist 8 Bit.
- `"I444"`
  - : Auch bekannt als _Planar YUV 4:4:4_. Dieses Format besteht aus drei getrennten Ebenen: einer Ebene für Luminanz und zwei Ebenen für Chrominanz, bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Jede Probe in diesem Format ist 8 Bit. Dieses Format verwendet keine Unterabtastung.
- `"NV12"`
  - : Dieses Format besteht aus zwei getrennten Ebenen: einer Ebene für Luminanz und dann einer weiteren Ebene für die beiden Chrominanzkomponenten. Die beiden Ebenen sind in dieser Reihenfolge vorhanden und werden als Y-Ebene und UV-Ebene bezeichnet. Die U- und V-Komponenten sind horizontal und vertikal um den Faktor 2 gegenüber den Komponenten in den Y-Ebenen unterabgetastet. Jede Probe in diesem Format ist 8 Bit.
- `"RGBA"`
  - : Dieses Format besteht aus einer einzelnen Ebene, die vier Komponenten kodiert: Rot, Grün, Blau und einen Alphawert, vorhanden in dieser Reihenfolge. Jede Probe in diesem Format ist 8 Bit, und jedes Pixel ist daher 32 Bit.
- `"RGBX"`
  - : Dieses Format besteht aus einer einzelnen Ebene, die vier Komponenten kodiert: Rot, Grün, Blau und einen Auffüllwert, in dieser Reihenfolge vorhanden. Jede Probe in diesem Format ist 8 Bit. Das vierte Element in jedem Pixel ist zu ignorieren; das Bild ist immer vollständig deckend.
- `"BGRA"`
  - : Dieses Format besteht aus einer einzelnen Ebene, die vier Komponenten kodiert: Blau, Grün, Rot und einen Alphawert, in dieser Reihenfolge vorhanden. Jede Probe in diesem Format ist 8 Bit.
- `"BGRX"`
  - : Dieses Format besteht aus einer einzelnen Ebene, die vier Komponenten kodiert: Blau, Grün, Rot und einen Auffüllwert, in dieser Reihenfolge vorhanden. Jede Probe in diesem Format ist 8 Bit. Das vierte Element in jedem Pixel ist zu ignorieren; das Bild ist immer vollständig deckend.

## Beispiele

Das folgende Beispiel gibt das `format` in der Konsole aus.

```js
console.log(VideoFrame.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
