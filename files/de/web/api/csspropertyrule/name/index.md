---
title: "CSSPropertyRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSPropertyRule/name
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle repräsentiert den Eigenschaftsnamen, dies ist die Serialisierung des Namens, der der benutzerdefinierten Eigenschaft in der Präambel der {{cssxref("@property")}}-Regel gegeben wurde.

## Wert

Ein String.

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel darstellt. Die `name`-Eigenschaft gibt den String `"--property-name"` zurück, welcher der benutzerdefinierten Eigenschaft in CSS gegeben wurde.

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
