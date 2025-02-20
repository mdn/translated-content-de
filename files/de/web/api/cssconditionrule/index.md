---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{ APIRef("CSSOM") }}

Ein Objekt, das die Schnittstelle **`CSSConditionRule`** implementiert, stellt eine einzelne Bedingung eines CSS-[At-Regelsatzes](/de/docs/Web/CSS/CSS_syntax/At-rule) dar, die aus einer Bedingung und einem Anweisungsblock besteht.

Drei Objekte leiten sich von `CSSConditionRule` ab: [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule), [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) und [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSConditionRule.conditionText`](/de/docs/Web/API/CSSConditionRule/conditionText) {{ReadOnlyInline}}
  - : Stellt den Text der Bedingung der Regel dar.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
