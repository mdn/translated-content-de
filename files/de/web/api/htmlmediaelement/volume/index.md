---
title: "HTMLMediaElement: volume-Eigenschaft"
short-title: volume
slug: Web/API/HTMLMediaElement/volume
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.volume`**-Eigenschaft legt die Lautstärke fest, mit der das Medium abgespielt wird.

## Wert

Ein Double-Wert, der zwischen 0 und 1 liegen muss, wobei 0 effektiv stummgeschaltet ist und 1 der lautestmögliche Wert ist.

## Beispiele

```js
const obj = document.createElement("audio");
console.log(obj.volume); // 1
obj.volume = 0.75;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die `HTMLMediaElement.volume`-Eigenschaft definiert
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
