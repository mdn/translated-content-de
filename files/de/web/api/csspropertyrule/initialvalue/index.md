---
title: "CSSPropertyRule: initialValue-Eigenschaft"
short-title: initialValue
slug: Web/API/CSSPropertyRule/initialValue
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`initialValue`**-nullable Eigenschaft des {{domxref("CSSPropertyRule")}}-Interfaces gibt den Anfangswert der benutzerdefinierten Registrierungseigenschaft zurück, die durch die {{cssxref("@property")}}-Regel dargestellt wird, und kontrolliert den Anfangswert der Eigenschaft.

## Wert

Ein String, der ein {{CSSXref("&lt;declaration-value&gt;")}} ist, wie in [CSS Syntax 3](https://www.w3.org/TR/css-syntax-3/#typedef-declaration-value) definiert.

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene {{domxref("CSSRule")}} wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `initialValue`-Eigenschaft gibt den String `"#c0ffee"` zurück, was der Wert der `initial-value`-Eigenschaft im CSS ist.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].initialValue); //der String "#c0ffee"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
