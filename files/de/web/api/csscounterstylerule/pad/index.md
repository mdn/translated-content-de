---
title: "CSSCounterStyleRule: pad-Eigenschaft"
short-title: pad
slug: Web/API/CSSCounterStyleRule/pad
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`pad`**-Eigenschaft der Schnittstelle [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule) liest und setzt den Wert des Deskriptors {{cssxref("@counter-style/pad", "pad")}}. Wenn der Deskriptor keinen Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Abrufen von `pad` gibt uns den Wert "0" zurück.

```css
@counter-style box-corner {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].pad); // "0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
