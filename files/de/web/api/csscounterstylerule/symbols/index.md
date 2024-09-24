---
title: "CSSCounterStyleRule: symbols-Eigenschaft"
short-title: symbols
slug: Web/API/CSSCounterStyleRule/symbols
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`symbols`**-Eigenschaft der {{domxref("CSSCounterStyleRule")}}-Schnittstelle erhält und setzt den Wert des {{cssxref("@counter-style/symbols","symbols")}}-Deskriptors. Wenn der Deskriptor keinen Wert zugewiesen hat, gibt dieses Attribut eine leere Zeichenfolge zurück.

## Wert

Eine Zeichenkette

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript stellt `myRules[0]` diese `@counter-style`-Regel dar, und die Abfrage von `symbols` gibt uns den Wert "◰ ◳ ◲ ◱" zurück.

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  negative: "-";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].symbols); // "◰ ◳ ◲ ◱"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
