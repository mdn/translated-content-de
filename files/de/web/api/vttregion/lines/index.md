---
title: "VTTRegion: lines-Eigenschaft"
short-title: lines
slug: Web/API/VTTRegion/lines
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`lines`**-Eigenschaft des [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Interfaces repräsentiert die Höhe der Region in der Anzahl der Zeilen.

## Wert

Eine Zahl, die die Anzahl der Zeilen innerhalb der Region darstellt, in denen der Cue-Text gerendert wird. Der Standardwert ist `3`.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert von `lines` auf `4` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

```js
const region = new VTTRegion();
region.lines = 4; // Render cues in 4 lines
console.log(region.lines);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
