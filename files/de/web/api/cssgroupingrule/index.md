---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{ APIRef("CSSOM") }}

Die **`CSSGroupingRule`**-Schnittstelle des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert jede CSS-[at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules), die andere Regeln enthält, die in ihr geschachtelt sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) {{ReadOnlyInline}}
  - : Gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) der CSS-Regeln in der Medienregel zurück.

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

- [Verwendung dynamischer Stylinginformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
