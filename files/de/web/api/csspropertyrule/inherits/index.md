---
title: "CSSPropertyRule: inherits-Eigenschaft"
short-title: inherits
slug: Web/API/CSSPropertyRule/inherits
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`inherits`**-Eigenschaft der {{domxref("CSSPropertyRule")}}-Schnittstelle gibt das Vererbung-Flag der benutzerdefinierten Eigenschaftsregistrierung zurück, die durch die {{cssxref("@property")}}-Regel dargestellt wird. Dies ist ein boolescher Wert, der angibt, ob die Eigenschaft standardmäßig vererbt wird oder nicht.

## Wert

Ein boolescher Wert.

## Beispiele

Dieses Stylesheet enthält eine einzige {{cssxref("@property")}}-Regel. Die erste zurückgegebene {{domxref("CSSRule")}} wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `inherits`-Eigenschaft gibt den booleschen Wert `false` zurück, was dem Wert der `inherits`-Eigenschaft in der CSS entspricht.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].inherits); // returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
