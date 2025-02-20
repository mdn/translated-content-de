---
title: CSS-Kaskadierung und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Das Modul **CSS-Kaskadierung und Vererbung** definiert die Regeln für die Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul legt die Regeln fest, um den festgelegten Wert für alle Eigenschaften auf allen Elementen zu finden.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es, dass mehrere Stylesheets die Darstellung eines Dokuments beeinflussen. CSS-Deklarationen von Eigenschaften-Werten definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können unterschiedliche Werte für dieselbe Kombination aus Element und Eigenschaft festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie solche Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul definiert, wie diese fehlenden Werte durch Vererbung oder den Anfangswert der Eigenschaft festgelegt werden sollen.

> [!NOTE]
> Die Regeln zur Ermittlung der festgelegten Werte im Seitenkontext und dessen Randboxen sind im [CSS-Seitenmodul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

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
- {{cssxref("important", "!important")}}-Flag

### Schnittstellen

- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSRule`](/de/docs/Web/API/CSSRule)

### Glossar und Definitionen

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [Anonyme Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Autorursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets)
- [Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/computed_value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value)
- [Benannte Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Festgelegter Wert](/de/docs/Web/CSS/CSS_cascade/specified_value)
- {{Glossary("style_origin", "Stilherkunft")}}
- [Genutzter Wert](/de/docs/Web/CSS/CSS_cascade/used_value)
- [Benutzerursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets)
- [Benutzer-Agent-Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade)

  - : Leitfaden zum Kaskadierungsalgorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)

  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — die kontrollieren, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)

  - : Einführung in [Kaskadenschichten](/de/docs/Web/CSS/@layer), ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [Element-gebundene Stile](/de/docs/Web/HTML/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#inline_styles)
- [Bedingen von Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Wertdefinitions-Syntax](/de/docs/Web/CSS/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektorenmodul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudoelemente-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Seitenmedienmodul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingte-Regeln-Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
- [Kurznotationen von Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
