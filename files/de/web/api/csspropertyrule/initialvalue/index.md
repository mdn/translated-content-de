---
title: "CSSPropertyRule: initialValue-Eigenschaft"
short-title: initialValue
slug: Web/API/CSSPropertyRule/initialValue
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte, nullable **`initialValue`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle gibt den Initialwert der benutzerdefinierten Eigenschaftenregistrierung zurück, die durch die {{cssxref("@property")}}-Regel dargestellt wird und den anfänglichen Wert der Eigenschaft steuert.

## Wert

Ein String, der ein {{CSSXref("&lt;declaration-value&gt;")}} ist, wie in [CSS Syntax 3](https://www.w3.org/TR/css-syntax-3/#typedef-declaration-value) definiert.

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `initialValue`-Eigenschaft gibt den String `"#c0ffee"` zurück, was dem Wert der `initial-value`-Eigenschaft in der CSS entspricht.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].initialValue); //the string "#c0ffee"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
