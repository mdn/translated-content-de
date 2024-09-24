---
title: "CSSCounterStyleRule: negative-Eigenschaft"
short-title: negative
slug: Web/API/CSSCounterStyleRule/negative
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`negative`**-Eigenschaft der {{domxref("CSSCounterStyleRule")}}-Schnittstelle liest und setzt den Wert des {{cssxref("@counter-style/negative","negative")}}-Descriptors. Wenn der Descriptor keinen Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Abrufen von `negative` gibt uns den Wert "-".

```css
@counter-style neg {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  negative: "-";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].negative); // "-"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
