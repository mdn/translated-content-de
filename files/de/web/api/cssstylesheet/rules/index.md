---
title: "CSSStyleSheet: rules-Eigenschaft"
short-title: rules
slug: Web/API/CSSStyleSheet/rules
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}

**`rules`** ist eine _veraltete_
_Alt-Eigenschaft_ des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Interfaces. Funktional
identisch mit der bevorzugten [`cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules)-Eigenschaft,
bietet sie Zugang zu einer live-aktualisierten Liste der CSS-Regeln, die das Stylesheet ausmachen.

> [!NOTE]
> Als Alt-Eigenschaft sollten Sie `rules` nicht verwenden und stattdessen die bevorzugte [`cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) verwenden.
> Obwohl `rules` wahrscheinlich nicht so bald entfernt wird, ist ihre Verfügbarkeit nicht so weit verbreitet, und die Verwendung wird zu Kompatibilitätsproblemen für Ihre Website oder App führen.

## Wert

Eine live-aktualisierte [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), die jede der CSS-Regeln enthält, die das Stylesheet ausmachen. Jeder Eintrag in der Regeliste ist ein [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekt, das eine Regel beschreibt, die das Stylesheet ausmacht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
