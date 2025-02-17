---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{ APIRef("CSSOM") }}

Die **`CSSGroupingRule`**-Schnittstelle des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert jede CSS-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Regeln in sich verschachtelt enthält.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) {{ReadOnlyInline}}
  - : Gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) der CSS-Regeln in der Medienregel zurück.

## Instanzmethoden

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

- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
