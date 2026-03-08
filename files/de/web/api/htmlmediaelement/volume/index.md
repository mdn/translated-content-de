---
title: "HTMLMediaElement: volume-Eigenschaft"
short-title: volume
slug: Web/API/HTMLMediaElement/volume
l10n:
  sourceCommit: 7b6cb443731d0329299f15b0c35be7cc0f645679
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.volume`**-Eigenschaft legt die Lautstärke fest, mit der das Medium abgespielt wird.

## Wert

Eine Zahl zwischen 0 und 1, wobei 0 effektiv stummgeschaltet ist und 1 der lautest mögliche Wert ist.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.volume`-Eigenschaft
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
