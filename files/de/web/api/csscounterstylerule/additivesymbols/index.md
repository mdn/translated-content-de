---
title: "CSSCounterStyleRule: additiveSymbols-Eigenschaft"
short-title: additiveSymbols
slug: Web/API/CSSCounterStyleRule/additiveSymbols
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`additiveSymbols`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle liest und setzt den Wert des {{cssxref("@counter-style/additive-symbols","additive-symbols")}}-Deskriptors. Wenn kein Wert für dieses Deskriptor gesetzt ist, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Abrufen von `additiveSymbols` gibt uns den Wert " V 5, IV 4, I 1" zurück.

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols:
    V 5,
    IV 4,
    I 1;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].additiveSymbols); // " V 5, IV 4, I 1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
