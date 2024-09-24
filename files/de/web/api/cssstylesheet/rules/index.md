---
title: "CSSStyleSheet: rules-Eigenschaft"
short-title: rules
slug: Web/API/CSSStyleSheet/rules
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

**`rules`** ist eine _veraltete_ _Legacy-Eigenschaft_ der {{domxref("CSSStyleSheet")}}-Schnittstelle. Funktional
identisch mit der bevorzugten {{domxref("CSSStyleSheet.cssRules", "cssRules")}}-Eigenschaft,
bietet sie Zugriff auf eine sich dynamisch aktualisierende Liste der CSS-Regeln, die das Stylesheet bilden.

> [!NOTE]
> Als eine Legacy-Eigenschaft sollten Sie `rules` nicht verwenden,
> sondern stattdessen die bevorzugte {{domxref("CSSStyleSheet.cssRules", "cssRules")}}-Eigenschaft nutzen.
> Auch wenn `rules` wahrscheinlich nicht bald entfernt wird, ist seine Verfügbarkeit nicht so
> weit verbreitet, und die Verwendung wird zu Kompatibilitätsproblemen für Ihre Website oder App führen.

## Wert

Eine sich dynamisch aktualisierende {{domxref("CSSRuleList")}}, die jede der CSS-Regeln enthält, aus denen das
Stylesheet besteht. Jedes Element in der Regel-Liste ist ein {{domxref("CSSRule")}}-Objekt,
das eine Regel beschreibt, aus der das Stylesheet besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
