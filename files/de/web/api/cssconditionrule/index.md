---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
l10n:
  sourceCommit: aa1c6876fb3cea003dda92f02c9bac93fd3370b2
---

{{ APIRef("CSSOM") }}

Ein Objekt, das die **`CSSConditionRule`**-Schnittstelle implementiert, repräsentiert eine einzelne Bedingungs-CSS-[At-Regel](/de/docs/Web/CSS/At-rule), die aus einer Bedingung und einem Anweisungsblock besteht.

Drei Objekte leiten sich von `CSSConditionRule` ab: [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule), [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) und [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) {{ReadOnlyInline}}
  - : Repräsentiert den Text der Bedingung der Regel.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
