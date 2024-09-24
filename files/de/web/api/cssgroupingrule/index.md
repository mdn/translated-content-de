---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

Das **`CSSGroupingRule`**-Interface des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert jede CSS-[At-Regel](/de/docs/Web/CSS/At-rule), die andere Regeln innerhalb von sich enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von {{domxref("CSSRule")}}._

- {{domxref("CSSGroupingRule.cssRules")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("CSSRuleList")}} der CSS-Regeln in der Medienregel zurück.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von {{domxref("CSSRule")}}._

- {{domxref("CSSGroupingRule.deleteRule")}}
  - : Löscht eine Regel aus dem Stylesheet.
- {{domxref("CSSGroupingRule.insertRule")}}
  - : Fügt eine neue Stilregel in das aktuelle Stylesheet ein.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
