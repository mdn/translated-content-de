---
title: "CSSPropertyRule: syntax-Eigenschaft"
short-title: syntax
slug: Web/API/CSSPropertyRule/syntax
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`syntax`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle gibt die wörtliche Syntax der durch die {{cssxref("@property")}}-Regel dargestellten benutzerdefinierten Eigenschaftsregistrierung zurück und steuert, wie der Wert der Eigenschaft zur Berechnungszeit geparst wird.

## Wert

Ein String.

## Beispiele

Dieses Stylesheet enthält eine einzige {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `syntax`-Eigenschaft gibt den wörtlichen String `"<color>"` zurück.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].syntax); // "<color>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
