---
title: "CSSPropertyRule: syntax-Eigenschaft"
short-title: syntax
slug: Web/API/CSSPropertyRule/syntax
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`syntax`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle gibt die konkrete Syntax der benutzerdefinierten Eigenschaftenregistrierung zurück, die durch die {{cssxref("@property")}}-Regel dargestellt wird. Sie steuert, wie der Wert der Eigenschaft zur Berechnungszeit des Werts analysiert wird.

## Wert

Ein String.

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `syntax`-Eigenschaft gibt den konkreten String `"<color>"` zurück.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].syntax); //the string "<color>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
