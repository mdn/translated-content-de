---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

Das **`CSSGroupingRule`** Interface des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert jede CSS-[At-Regel](/de/docs/Web/CSS/At-rule), die andere Regeln enthält, die innerhalb von ihr verschachtelt sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) {{ReadOnlyInline}}
  - : Gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) der CSS-Regeln in der Media-Regel zurück.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSGroupingRule.deleteRule`](/de/docs/Web/API/CSSGroupingRule/deleteRule)
  - : Löscht eine Regel aus dem Stylesheet.
- [`CSSGroupingRule.insertRule`](/de/docs/Web/API/CSSGroupingRule/insertRule)
  - : Fügt eine neue Stilregel in das aktuelle Stylesheet ein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
