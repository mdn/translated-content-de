---
title: "CSSCounterStyleRule: Fallback-Eigenschaft"
short-title: Fallback
slug: Web/API/CSSCounterStyleRule/fallback
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`fallback`**-Eigenschaft der {{domxref("CSSCounterStyleRule")}}-Schnittstelle ruft den Wert des {{cssxref("@counter-style/fallback","Fallback")}}-Deskriptors ab und setzt ihn. Wenn der Deskriptor keinen Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, und das Zurückgeben von `fallback` liefert uns den Wert "disc".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  fallback: disc;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].fallback); // "disc"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
