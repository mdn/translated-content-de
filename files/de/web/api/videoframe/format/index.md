---
title: "VideoFrame: format-Eigenschaft"
short-title: format
slug: Web/API/VideoFrame/format
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`format`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt das Pixelformat des `VideoFrame` zurück.

## Wert

Ein String, der ein Video-Pixelformat enthält, eines von:

- `"I420"`
  - : Auch bekannt als _Planar YUV 4:2:0_, besteht dieses Format aus drei unterschiedlichen Ebenen, einer Luma- und zwei Chroma-Ebenen, bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet. Jedes Element in diesem Format ist 8 Bit.
- `"I420A"`
  - : Auch bekannt als _Planar YUV 4:2:0 with an alpha channel_, besteht dieses Format aus vier unterschiedlichen Ebenen, einer Luma-Ebene, zwei Chroma-Ebenen, bezeichnet als Y, U und V, und einer Alpha-Ebene, alle in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zu den Y- und Alpha-Ebenen unterabgetastet. Jedes Element in diesem Format ist 8 Bit.
- `"I422"`
  - : Auch bekannt als _Planar YUV 4:2:2_, besteht dieses Format aus drei unterschiedlichen Ebenen, einer Luma- und zwei Chroma-Ebenen, bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet und vertikal nicht unterabgetastet. Jedes Element in diesem Format ist 8 Bit.
- `"I444"`
  - : Auch bekannt als _Planar YUV 4:4:4_, besteht dieses Format aus drei unterschiedlichen Ebenen, einer Luma- und zwei Chroma-Ebenen, bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Jedes Element in diesem Format ist 8 Bit. Dieses Format verwendet keine Unterabtastung.
- `"NV12"`
  - : Dieses Format besteht aus zwei unterschiedlichen Ebenen, einer Luma-Ebene und dann einer weiteren Ebene für die beiden Chroma-Komponenten. Die beiden Ebenen sind in dieser Reihenfolge vorhanden und werden als die Y-Ebene und die UV-Ebene bezeichnet. Die U- und V-Komponenten sind horizontal und vertikal um einen Faktor von 2 im Vergleich zu den Komponenten in den Y-Ebenen unterabgetastet. Jedes Element in diesem Format ist 8 Bit.
- `"RGBA"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Rot, Grün, Blau, und einen Alphawert, in dieser Reihenfolge vorhanden. Jedes Element in diesem Format ist 8 Bit, und jedes Pixel ist daher 32 Bit.
- `"RGBX"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Rot, Grün, Blau, und einen Padding-Wert, in dieser Reihenfolge vorhanden. Jedes Element in diesem Format ist 8 Bit. Das vierte Element in jedem Pixel ist zu ignorieren, das Bild ist immer vollständig deckend.
- `"BGRA"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Blau, Grün, Rot, und einen Alphawert, in dieser Reihenfolge vorhanden. Jedes Element in diesem Format ist 8 Bit.
- `"BGRX"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Blau, Grün, Rot, und einen Padding-Wert, in dieser Reihenfolge vorhanden. Jedes Element in diesem Format ist 8 Bit. Das vierte Element in jedem Pixel ist zu ignorieren, das Bild ist immer vollständig deckend.

## Beispiele

Das folgende Beispiel druckt das `format` auf die Konsole.

```js
console.log(VideoFrame.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
