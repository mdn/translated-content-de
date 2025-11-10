---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}

Ein Objekt, das die **`CSSConditionRule`**-Schnittstelle implementiert, repräsentiert eine einzelne Bedingung in einer CSS-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), die aus einer Bedingung und einem Anweisungsblock besteht.

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

- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
