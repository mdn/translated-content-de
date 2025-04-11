---
title: CSS-Kaskade und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das Modul **CSS-Kaskade und Vererbung** definiert die Regeln zur Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul spezifiziert die Regeln zur Bestimmung des spezifizierten Werts für alle Eigenschaften auf allen Elementen.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es mehreren Stylesheets, die Präsentation eines Dokuments zu beeinflussen. CSS-Deklarationen von Eigenschaften und Werten definieren, wie ein Dokument dargestellt wird. Mehrere Deklarationen können unterschiedliche Werte für dieselbe Kombination aus Element und Eigenschaft festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul definiert, wie diese fehlenden Werte durch Vererbung oder aus dem Anfangswert der Eigenschaft gesetzt werden sollten.

> [!NOTE]
> Die Regeln zur Bestimmung der spezifizierten Werte im Seitenkontext und seinen Randboxen sind im [CSS-Seitenmodul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

## Referenz

### Eigenschaften

- {{cssxref("all")}}

### At-Rules

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### Schlüsselwörter

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("important", "!important")}} flag

### Schnittstellen

- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSRule`](/de/docs/Web/API/CSSRule)

### Glossar und Definitionen

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Anonymer Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Autoren-Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Benannter Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- {{Glossary("style_origin", "Stilharzungsherkunft")}}
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [Benutzer-Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets)
- [User-Agent-Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)

  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie Benutzeragenten Werte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)

  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskaden-Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)

  - : Einführung in [Kaskaden-Layer](/de/docs/Web/CSS/@layer), eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) basiert.

## Verwandte Konzepte

- [Element-gebundene Stile](/de/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Selektorenmodul](/de/docs/Web/CSS/CSS_selectors)
- [CSS Pseudoelemente Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS Gezielte Medien Modul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS Bedingte Regeln Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
