---
title: "CSSStyleSheet: cssRules-Eigenschaft"
short-title: cssRules
slug: Web/API/CSSStyleSheet/cssRules
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

Die schreibgeschützte [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Eigenschaft **`cssRules`** gibt eine dynamische [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die eine Echtzeitliste aller CSS-Regeln bereitstellt, aus denen das Stylesheet besteht. Jedes Element in der Liste ist eine [`CSSRule`](/de/docs/Web/API/CSSRule), die eine einzelne Regel definiert.

## Wert

Eine dynamisch aktualisierte [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), die jede der CSS-Regeln enthält, aus denen das Stylesheet besteht. Jeder Eintrag in der Regel-Liste ist ein [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekt, das eine Regel beschreibt, die das Stylesheet bildet.

## Beispiele

Einzelne Regeln innerhalb des Stylesheets können dann per Index zugegriffen werden:

```js
const ruleList = document.styleSheets[0].cssRules;

for (let i = 0; i < ruleList.length; i++) {
  processRule(ruleList[i]);
}
```

Regeln können auch mithilfe von {{jsxref("Statements/for...of", "for...of")}} abgerufen werden:

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  processRule(rule);
}
```

Da `CSSRule` jedoch kein richtiges Array ist, können Sie {{jsxref("Array.forEach", "forEach()")}} nicht verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
