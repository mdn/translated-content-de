---
title: "CSSCounterStyleRule: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/CSSCounterStyleRule/prefix
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`prefix`**-Eigenschaft der {{domxref("CSSCounterStyleRule")}}-Schnittstelle ruft den Wert des {{cssxref("@counter-style/prefix", "prefix")}} Deskriptors ab und setzt ihn. Wenn der Deskriptor keinen Wert gesetzt hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Abrufen von `prefix` gibt uns den Wert "Chapter ".

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
