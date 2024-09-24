---
title: "CSSConditionRule: Eigenschaft conditionText"
short-title: conditionText
slug: Web/API/CSSConditionRule/conditionText
l10n:
  sourceCommit: a32ebc1e559338b6dce3ffb4b2251074d8c418cd
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`conditionText`**-Eigenschaft des
{{domxref("CSSConditionRule")}}-Interfaces gibt den Text der CSS-Regel zurück oder setzt diesen.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt, wie der Wert von
`conditionText` bei einer {{domxref("CSSMediaRule")}} gelesen wird, die das
{{domxref("CSSConditionRule")}}-Interface implementiert.

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
const targetRule = document.styleSheets[0].cssRules[0];
console.log(targetRule.conditionText); // "(min-width: 500px)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
