---
title: "CSSConditionRule: conditionText-Eigenschaft"
short-title: conditionText
slug: Web/API/CSSConditionRule/conditionText
l10n:
  sourceCommit: a32ebc1e559338b6dce3ffb4b2251074d8c418cd
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`conditionText`**-Eigenschaft der [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)-Schnittstelle gibt den Text der CSS-Regel zurück oder setzt diesen.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt, wie der Wert von `conditionText` in einer [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) gelesen wird, die die [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)-Schnittstelle implementiert.

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

- [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
