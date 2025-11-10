---
title: "CSSPropertyRule: initialValue-Eigenschaft"
short-title: initialValue
slug: Web/API/CSSPropertyRule/initialValue
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`initialValue`** nullable Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle gibt den Anfangswert der benutzerdefinierten Eigenschaftsregistrierung zurück, die durch die {{cssxref("@property")}}-Regel repräsentiert wird, und steuert den Anfangswert der Eigenschaft.

## Wert

Ein String, der ein [`<declaration-value>`](https://drafts.csswg.org/css-syntax/#typedef-declaration-value) ist.

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `initialValue`-Eigenschaft gibt den String `"#c0ffee"` zurück, was dem Wert der `initial-value`-Eigenschaft im CSS entspricht.

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
