---
title: "CSSConditionRule: Eigenschaft conditionText"
short-title: conditionText
slug: Web/API/CSSConditionRule/conditionText
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft **`conditionText`** des
[`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)-Interfaces gibt den Text der CSS-Regel zurück oder setzt ihn.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt, wie der Wert von
`conditionText` auf einer [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) ausgelesen wird, die das
[`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)-Interface implementiert.

```css
@media (width >= 500px) {
  body {
    color: blue;
  }
}
```

```js
const targetRule = document.styleSheets[0].cssRules[0];
console.log(targetRule.conditionText); // "(width >= 500px)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
