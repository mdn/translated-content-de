---
title: "CSSCounterStyleRule: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/CSSCounterStyleRule/prefix
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`prefix`**-Eigenschaft der Schnittstelle [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule) ruft den Wert des {{cssxref("@counter-style/prefix","prefix")}}-Descriptors ab und setzt diesen. Wenn für den Descriptor kein Wert festgelegt ist, gibt dieses Attribut eine leere Zeichenfolge zurück.

## Wert

Eine Zeichenfolge

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Zurückgeben von `prefix` gibt uns den Wert "Chapter " zurück.

```css
@counter-style chapters {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Chapter ";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].prefix); // "Chapter "
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
