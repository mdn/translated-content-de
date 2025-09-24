---
title: "VideoFrame: format-Eigenschaft"
short-title: format
slug: Web/API/VideoFrame/format
l10n:
  sourceCommit: b51cc257bdda3f7a22d9fe9e45df1a566678da08
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`format`**-Eigenschaft der [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Schnittstelle gibt das Pixelformat des `VideoFrame` zurück.

## Wert

Ein String, der ein Video-Pixelformat enthält, eines von:

- `"I420"`
  - : Auch bekannt als _Planar YUV 4:2:0_, dieses Format besteht aus drei separaten Ebenen: eine für Luma und zwei für Chroma, bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet. Jedes Sample in diesem Format ist 8 Bits.
- `"I420P10"`
  - : Auch bekannt als _Planar YUV 4:2:0_ 10-Bit, dieses Format besteht aus drei separaten Ebenen: eine Ebene für Luma und zwei Ebenen für Chroma — bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet. Jedes Sample in diesem Format ist 10 Bits, kodiert als 16-bit Integer im Little-Endian-Byte-Order.
- `"I420P12"`
  - : Auch bekannt als _Planar YUV 4:2:0_ 12-Bit, dieses Format besteht aus drei separaten Ebenen: eine Ebene für Luma und zwei Ebenen für Chroma — bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet. Jedes Sample in diesem Format ist 12 Bits, kodiert als 16-bit Integer im Little-Endian-Byte-Order.
- `"I420A"`
  - : Auch bekannt als _Planar YUV 4:2:0 mit einem Alphakanal_, dieses Format besteht aus vier separaten Ebenen: eine Ebene für Luma, zwei Ebenen für Chroma, bezeichnet als Y, U und V, und eine Ebene für Alphawerte, alle in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zu den Y- und Alpha-Ebenen unterabgetastet. Jedes Sample in diesem Format ist 8 Bits.
- `"I422"`
  - : Auch bekannt als _Planar YUV 4:2:2_, dieses Format besteht aus drei separaten Ebenen: eine Ebene für Luma und zwei Ebenen für Chroma, bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet und nicht vertikal unterabgetastet. Jedes Sample in diesem Format ist 8 Bits.
- `"I444"`
  - : Auch bekannt als _Planar YUV 4:4:4_, dieses Format besteht aus drei separaten Ebenen: eine Ebene für Luma und zwei Ebenen für Chroma, bezeichnet als Y, U und V, und in dieser Reihenfolge vorhanden. Jedes Sample in diesem Format ist 8 Bits. Dieses Format verwendet keine Unterabtastung.
- `"NV12"`
  - : Dieses Format besteht aus zwei separaten Ebenen: eine Ebene für Luma und danach eine andere Ebene für die beiden Chroma-Komponenten. Die beiden Ebenen sind in dieser Reihenfolge vorhanden und werden jeweils als Y-Ebene und UV-Ebene bezeichnet. Die U- und V-Komponenten sind horizontal und vertikal um einen Faktor von 2 im Vergleich zu den Komponenten in den Y-Ebenen unterabgetastet. Jedes Sample in diesem Format ist 8 Bits.
- `"RGBA"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten codiert: Rot, Grün, Blau und einen Alphawert, in dieser Reihenfolge. Jedes Sample in diesem Format ist 8 Bits, und jedes Pixel ist daher 32 Bits.
- `"RGBX"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten codiert: Rot, Grün, Blau und einen Auffüllwert, in dieser Reihenfolge. Jedes Sample in diesem Format ist 8 Bits. Das vierte Element in jedem Pixel ist zu ignorieren, das Bild ist immer vollständig deckend.
- `"BGRA"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten codiert: Blau, Grün, Rot und einen Alphawert, in dieser Reihenfolge. Jedes Sample in diesem Format ist 8 Bits.
- `"BGRX"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten codiert: Blau, Grün, Rot und einen Auffüllwert, in dieser Reihenfolge. Jedes Sample in diesem Format ist 8 Bits. Das vierte Element in jedem Pixel ist zu ignorieren, das Bild ist immer vollständig deckend.

## Beispiele

Das folgende Beispiel gibt das `format` in der Konsole aus.

```js
console.log(VideoFrame.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
