---
title: "CSSCounterStyleRule: pad-Eigenschaft"
short-title: pad
slug: Web/API/CSSCounterStyleRule/pad
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`pad`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle erhält und setzt den Wert des {{cssxref("@counter-style/pad", "pad")}}-Deskriptors. Wenn der Deskriptor keinen gesetzten Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, und die Abfrage von `pad` gibt uns den Wert "0" zurück.

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
