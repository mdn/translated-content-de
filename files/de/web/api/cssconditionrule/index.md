---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{ APIRef("CSSOM") }}

Ein Objekt, das die **`CSSConditionRule`**-Schnittstelle implementiert, repräsentiert eine einzelne bedingte CSS-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules), die aus einer Bedingung und einem Anweisungsblock besteht.

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

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
