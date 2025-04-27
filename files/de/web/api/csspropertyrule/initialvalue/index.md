---
title: "CSSPropertyRule: Eigenschaft initialValue"
short-title: initialValue
slug: Web/API/CSSPropertyRule/initialValue
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`initialValue`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle gibt den anfänglichen Wert der benutzerdefinierten Eigenschaftsregistrierung zurück, die durch die {{cssxref("@property")}}-Regel dargestellt wird, und steuert den anfänglichen Wert der Eigenschaft.

## Wert

Ein String, der ein {{CSSXref("&lt;declaration-value&gt;")}} ist, wie in [CSS Syntax 3](https://www.w3.org/TR/css-syntax-3/#typedef-declaration-value) definiert.

## Beispiele

Dieses Stylesheet enthält eine einzige {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel repräsentiert. Die `initialValue`-Eigenschaft gibt den String `"#c0ffee"` zurück, da dies der Wert der `initial-value`-Eigenschaft im CSS ist.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].initialValue); // "#c0ffee"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
