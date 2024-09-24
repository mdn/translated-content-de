---
title: "CSSPropertyRule: Eigenschaft name"
short-title: name
slug: Web/API/CSSPropertyRule/name
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

Die schreibgeschützte **`name`** Eigenschaft der {{domxref("CSSPropertyRule")}} Schnittstelle repräsentiert den Eigenschaftsnamen, also die Serialisierung des Namens, der der benutzerdefinierten Eigenschaft in der Präambel der {{cssxref("@property")}} Regel gegeben wurde.

## Wert

Ein String.

## Beispiele

Dieses Stylesheet enthält eine einzige {{cssxref("@property")}} Regel. Die erste zurückgegebene {{domxref("CSSRule")}} wird eine `CSSPropertyRule` sein, die diese Regel repräsentiert. Die `name` Eigenschaft gibt den String `"--property-name"` zurück, welcher der benutzerdefinierten Eigenschaft in CSS zugewiesen wurde.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); //der String "--property-name"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
