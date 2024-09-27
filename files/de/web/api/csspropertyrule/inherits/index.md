---
title: "CSSPropertyRule: inherits Eigenschaft"
short-title: inherits
slug: Web/API/CSSPropertyRule/inherits
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`inherits`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle gibt das vererbte Kennzeichen der benutzerdefinierten Eigenschaftsregistrierung zurück, die durch die {{cssxref("@property")}}-Regel dargestellt wird. Es handelt sich um einen booleschen Wert, der beschreibt, ob die Eigenschaft standardmäßig vererbt wird oder nicht.

## Wert

Ein Boolescher Wert.

## Beispiele

Dieses Stylesheet enthält eine einzige {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `inherits`-Eigenschaft gibt den booleschen Wert `false` zurück, da dies der Wert der `inherits`-Eigenschaft im CSS ist.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].inherits); //returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
