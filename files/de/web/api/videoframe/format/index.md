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

Ein String, der ein Video-Pixelformat enthält, eines der folgenden:

- `"I420"`
  - : Auch bekannt als _Planar YUV 4:2:0_. Dieses Format besteht aus drei verschiedenen Ebenen: eine Ebene für Luma und zwei Ebenen für Chroma, bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet. Jedes Sample in diesem Format ist 8 Bit.
- `"I420A"`
  - : Auch bekannt als _Planar YUV 4:2:0 mit einem Alpha-Kanal_. Dieses Format besteht aus vier verschiedenen Ebenen: eine Ebene für Luma, zwei Ebenen für Chroma, bezeichnet als Y, U und V, und eine Ebene für Alpha-Werte, alle in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal und vertikal um einen Faktor von 2 im Vergleich zu den Y- und Alpha-Ebenen unterabgetastet. Jedes Sample in diesem Format ist 8 Bit.
- `"I422"`
  - : Auch bekannt als _Planar YUV 4:2:2_. Dieses Format besteht aus drei verschiedenen Ebenen: eine Ebene für Luma und zwei Ebenen für Chroma, bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Die U- und V-Ebenen sind horizontal um einen Faktor von 2 im Vergleich zur Y-Ebene unterabgetastet und vertikal nicht unterabgetastet. Jedes Sample in diesem Format ist 8 Bit.
- `"I444"`
  - : Auch bekannt als _Planar YUV 4:4:4_. Dieses Format besteht aus drei verschiedenen Ebenen: eine Ebene für Luma und zwei Ebenen für Chroma, bezeichnet als Y, U und V und in dieser Reihenfolge vorhanden. Jedes Sample in diesem Format ist 8 Bit. Dieses Format verwendet keine Unterabtastung.
- `"NV12"`
  - : Dieses Format besteht aus zwei verschiedenen Ebenen: eine Ebene für Luma und dann eine andere Ebene für die beiden Chroma-Komponenten. Die beiden Ebenen sind in dieser Reihenfolge vorhanden und werden jeweils als Y-Ebene und UV-Ebene bezeichnet. Die U- und V-Komponenten sind horizontal und vertikal um einen Faktor von 2 im Vergleich zu den Komponenten in den Y-Ebenen unterabgetastet. Jedes Sample in diesem Format ist 8 Bit.
- `"RGBA"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Rot, Grün, Blau und ein Alpha-Wert, in dieser Reihenfolge vorhanden. Jedes Sample in diesem Format ist 8 Bit und jedes Pixel ist daher 32 Bit.
- `"RGBX"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Rot, Grün, Blau und einen Auffüllwert, in dieser Reihenfolge vorhanden. Jedes Sample in diesem Format ist 8 Bit. Das vierte Element in jedem Pixel ist zu ignorieren, das Bild ist immer vollständig undurchsichtig.
- `"BGRA"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Blau, Grün, Rot und ein Alpha-Wert, in dieser Reihenfolge vorhanden. Jedes Sample in diesem Format ist 8 Bit.
- `"BGRX"`
  - : Dieses Format besteht aus einer einzigen Ebene, die vier Komponenten kodiert: Blau, Grün, Rot und einen Auffüllwert, in dieser Reihenfolge vorhanden. Jedes Sample in diesem Format ist 8 Bit. Das vierte Element in jedem Pixel ist zu ignorieren, das Bild ist immer vollständig undurchsichtig.

## Beispiele

Das folgende Beispiel druckt das `format` in die Konsole.

```js
console.log(VideoFrame.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
