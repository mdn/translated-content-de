---
title: "CSSStyleSheet: rules-Eigenschaft"
short-title: rules
slug: Web/API/CSSStyleSheet/rules
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`rules`** der Schnittstelle [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) ist eine _veraltete_ _Legacy-Eigenschaft_. Sie ist funktional identisch mit der bevorzugten Eigenschaft [`cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) und bietet Zugriff auf eine laufend aktualisierte Liste der CSS-Regeln des Stylesheets.

> [!NOTE]
> Als Legacy-Eigenschaft sollten Sie `rules` nicht verwenden. Verwenden Sie stattdessen die bevorzugte Eigenschaft [`cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).
> Obwohl `rules` wahrscheinlich nicht bald entfernt wird, ist die Eigenschaft weniger breit verfügbar. Ihre Verwendung kann daher zu Kompatibilitätsproblemen für Ihre Website oder App führen.

## Wert

Eine laufend aktualisierte [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), die alle CSS-Regeln des Stylesheets enthält. Jeder Eintrag in der Regelliste ist ein [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekt, das eine Regel des Stylesheets beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Dynamische Styling-Informationen verwenden](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
