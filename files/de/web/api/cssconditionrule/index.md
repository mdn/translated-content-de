---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
l10n:
  sourceCommit: aa1c6876fb3cea003dda92f02c9bac93fd3370b2
---

{{ APIRef("CSSOM") }}

Ein Objekt, das das **`CSSConditionRule`**-Interface implementiert, repräsentiert eine einzelne Bedingung für eine CSS-[At-Regel](/de/docs/Web/CSS/At-rule), die aus einer Bedingung und einem Anweisungsblock besteht.

Drei Objekte leiten sich von `CSSConditionRule` ab: {{domxref("CSSMediaRule")}}, {{domxref("CSSContainerRule")}} und {{domxref("CSSSupportsRule")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

- {{domxref("CSSConditionRule.conditionText")}} {{ReadOnlyInline}}
  - : Repräsentiert den Text der Bedingung der Regel.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
