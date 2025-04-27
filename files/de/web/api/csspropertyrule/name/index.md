---
title: "CSSPropertyRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSPropertyRule/name
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle repräsentiert den Eigenschaftsnamen, wobei es sich um die Serialisierung des Namens handelt, der der benutzerdefinierten Eigenschaft im Vorspann der {{cssxref("@property")}}-Regel gegeben wurde.

## Wert

Ein String.

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` sein, die diese Regel repräsentiert. Die `name`-Eigenschaft gibt den String `"--property-name"` zurück, welcher der Name ist, der der benutzerdefinierten Eigenschaft in CSS gegeben wurde.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); // "--property-name"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
