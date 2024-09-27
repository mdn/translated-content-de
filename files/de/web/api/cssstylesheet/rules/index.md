---
title: "CSSStyleSheet: rules-Eigenschaft"
short-title: rules
slug: Web/API/CSSStyleSheet/rules
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

**`rules`** ist eine _veraltete_
_legacy-Eigenschaft_ der Schnittstelle [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet). Funktional
identisch mit der bevorzugten [`cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules)-Eigenschaft,
bietet sie Zugriff auf eine sich live aktualisierende Liste der CSS-Regeln, die das
Stylesheet ausmachen.

> [!NOTE]
> Als eine veraltete Eigenschaft sollten Sie `rules` nicht verwenden und
> stattdessen die bevorzugte [`cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules)-Eigenschaft nutzen.
> Obwohl `rules` wahrscheinlich nicht bald entfernt wird, ist die Verfügbarkeit nicht so
> weit verbreitet, und die Verwendung wird zu Kompatibilitätsproblemen für Ihre Website oder App führen.

## Wert

Eine sich live aktualisierende [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), die jede der CSS-Regeln enthält, die das Stylesheet bilden. Jeder Eintrag in der Regelliste ist ein [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekt,
das eine Regel beschreibt, die das Stylesheet ausmacht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
