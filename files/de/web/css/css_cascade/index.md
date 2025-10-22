---
title: CSS-Kaskadierung und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS-Kaskadierungs- und Vererbungsmodul** definiert die Regeln für die Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul legt die Regeln fest, um den spezifizierten Wert für alle Eigenschaften auf allen Elementen zu finden.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es mehreren Stylesheets, die Präsentation eines Dokuments zu beeinflussen. CSS-Eigenschafts-Wert-Deklarationen definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können unterschiedliche Werte für die gleiche Element- und Eigenschaftskombination festlegen, aber nur ein Wert kann für eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil passiert ebenfalls. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul legt fest, wie diese fehlenden Werte über Vererbung oder aus dem Anfangswert der Eigenschaft gesetzt werden sollen.

> [!NOTE]
> Die Regeln zur Ermittlung der spezifizierten Werte im Kontext der Seite und ihrer Randbereiche sind im [CSS-Page-Modul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

## Referenz

### Eigenschaften

- {{cssxref("all")}}

### At-Rules und Deskriptoren

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### Schlüsselwörter

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("important", "!important")}} Kennzeichen

### Schnittstellen

- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSRule`](/de/docs/Web/API/CSSRule)

### Glossarbegriffe und Definitionen

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Anonyme Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Author-Herkunft](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Benannte Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- {{Glossary("style_origin", "Stilherkunft")}}
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [User-Herkunft](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets)
- [User-Agent-Herkunft](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
  - : Leitfaden zum Kaskaden-Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Die grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Einführung in [Kaskadierungsebenen](/de/docs/Web/CSS/@layer), ein fortgeschrittenes Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [Elementgebundene Stile](/de/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren-Modul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudoelemente-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Page-Media-Modul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingte-Regeln-Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
