---
title: "CSSPropertyRule: inherits-Eigenschaft"
short-title: inherits
slug: Web/API/CSSPropertyRule/inherits
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`inherits`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle gibt das Inherit-Flag der benutzerdefinierten Eigenschaftsregistrierung zurück, die durch die {{cssxref("@property")}}-Regel dargestellt wird. Dieses Flag ist ein Boolean, der beschreibt, ob die Eigenschaft standardmäßig vererbt wird oder nicht.

## Wert

Ein Boolean.

## Beispiele

Dieses Stylesheet enthält eine einzige {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel repräsentiert. Die `inherits`-Eigenschaft gibt den Boolean `false` zurück, was den Wert der `inherits`-Eigenschaft in der CSS darstellt.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].inherits); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
