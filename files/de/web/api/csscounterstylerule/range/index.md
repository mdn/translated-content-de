---
title: "CSSCounterStyleRule: range Eigenschaft"
short-title: range
slug: Web/API/CSSCounterStyleRule/range
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`range`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle ermöglicht das Abrufen und Festlegen des Wertes des {{cssxref("@counter-style/range","range")}} Deskriptors. Falls diesem Deskriptor kein Wert zugewiesen wurde, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style` Regel; das Abrufen von `range` gibt uns den Wert "2 4, 7 9".

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].range); // "2 4, 7 9"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
