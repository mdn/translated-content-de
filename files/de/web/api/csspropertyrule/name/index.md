---
title: "CSSPropertyRule: name Eigenschaft"
short-title: name
slug: Web/API/CSSPropertyRule/name
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`name`**-Eigenschaft des [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Interfaces repräsentiert den Eigenschaftsnamen, wobei es sich um die Serialisierung des Namens handelt, der der benutzerdefinierten Eigenschaft in der Einleitung der {{cssxref("@property")}}-Regel gegeben wird.

## Wert

Ein String.

## Beispiele

Dieses Stylesheet enthält eine einzige {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel repräsentiert. Die `name`-Eigenschaft gibt den String `"--property-name"` zurück, welcher der benutzerdefinierten Eigenschaft in CSS gegeben wurde.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); //the string "--property-name"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
