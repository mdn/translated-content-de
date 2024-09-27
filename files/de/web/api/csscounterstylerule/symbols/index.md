---
title: "CSSCounterStyleRule: symbols-Eigenschaft"
short-title: symbols
slug: Web/API/CSSCounterStyleRule/symbols
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`symbols`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle ruft den Wert des {{cssxref("@counter-style/symbols", "symbols")}} Deskriptors ab oder setzt diesen. Wenn das Deskriptor keinen Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, und das Abfragen von `symbols` gibt uns den Wert "◰ ◳ ◲ ◱" zurück.

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
