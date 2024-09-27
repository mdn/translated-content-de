---
title: "CSSStyleSheet: cssRules-Eigenschaft"
short-title: cssRules
slug: Web/API/CSSStyleSheet/cssRules
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

Die schreibgeschützte [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Eigenschaft **`cssRules`** gibt eine Live-[`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die eine Echtzeit-Liste aller CSS-Regeln bereitstellt, die das Stylesheet bilden. Jedes Element in der Liste ist ein [`CSSRule`](/de/docs/Web/API/CSSRule), das eine einzelne Regel definiert.

## Wert

Eine live-aktualisierte [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), die jede der CSS-Regeln enthält, die das Stylesheet bilden. Jeder Eintrag in der Regel-Liste ist ein [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekt, das eine der das Stylesheet bildenden Regeln beschreibt.

## Beispiele

Einzelne Regeln innerhalb des Stylesheets können dann per Index zugegriffen werden:

```js
const ruleList = document.styleSheets[0].cssRules;

for (let i = 0; i < ruleList.length; i++) {
  processRule(ruleList[i]);
}
```

Regeln können auch mit {{jsxref("Statements/for...of", "for...of")}} zugegriffen werden:

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
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
