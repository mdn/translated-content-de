---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}

Die **`CSSGroupingRule`**-Schnittstelle des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert jede CSS-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), die andere Regeln in sich verschachtelt enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) {{ReadOnlyInline}}
  - : Gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) der CSS-Regeln in der Media-Regel zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSGroupingRule.deleteRule`](/de/docs/Web/API/CSSGroupingRule/deleteRule)
  - : Löscht eine Regel aus dem Stylesheet.
- [`CSSGroupingRule.insertRule`](/de/docs/Web/API/CSSGroupingRule/insertRule)
  - : Fügt eine neue Stilregel in das aktuelle Stylesheet ein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
