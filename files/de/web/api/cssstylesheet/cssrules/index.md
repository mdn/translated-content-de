---
title: "CSSStyleSheet: Eigenschaft cssRules"
short-title: cssRules
slug: Web/API/CSSStyleSheet/cssRules
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`cssRules`** von {{domxref("CSSStyleSheet")}} gibt eine live {{domxref("CSSRuleList")}} zurück, die eine aktuelle, sich ständig ändernde Liste aller CSS-Regeln zur Verfügung stellt, die das Stylesheet ausmachen. Jedes Element in der Liste ist eine {{domxref("CSSRule")}}, die eine einzelne Regel definiert.

## Wert

Eine live aktualisierte {{domxref("CSSRuleList")}}, die alle CSS-Regeln enthält, aus denen das Stylesheet besteht. Jeder Eintrag in der Regel-Liste ist ein {{domxref("CSSRule")}}-Objekt, das eine Regel beschreibt, die das Stylesheet ausmacht.

## Beispiele

Einzelne Regeln innerhalb des Stylesheets können dann über den Index abgerufen werden:

```js
const ruleList = document.styleSheets[0].cssRules;

for (let i = 0; i < ruleList.length; i++) {
  processRule(ruleList[i]);
}
```

Regeln können auch mit {{jsxref("Statements/for...of", "for...of")}} abgerufen werden:

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  processRule(rule);
}
```

Da `CSSRule` jedoch kein richtiges Array ist, können Sie nicht {{jsxref("Array.forEach", "forEach()")}} verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
