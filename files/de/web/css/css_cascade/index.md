---
title: CSS-Kaskadierung und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **CSS-Kaskadierungs- und Vererbungsmodul** definiert die Regeln für die Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul legt die Regeln fest, um den festgelegten Wert für alle Eigenschaften auf allen Elementen zu finden.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es mehreren Stylesheets, die Darstellung eines Dokuments zu beeinflussen. CSS-Eigenschaftswert-Deklarationen definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können verschiedene Werte für die gleiche Element- und Eigenschaftskombination festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt auch auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul definiert, wie diese fehlenden Werte über Vererbung oder aus dem Anfangswert der Eigenschaft festgelegt werden sollen.

> [!NOTE]
> Die Regeln, um die festgelegten Werte im Seitenkontext und in seinen Randboxen zu finden, sind im [CSS-Seitenmodul](/de/docs/Web/CSS/Guides/Paged_media) beschrieben.

## Referenz

### Eigenschaften

- {{cssxref("all")}}

### At-Regeln und Deskriptoren

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### Schlüsselwörter

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("important", "!important")}}-Flagge

### Schnittstellen

- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSRule`](/de/docs/Web/API/CSSRule)

### Glossarbegriffe und Definitionen

- [Tatsächlicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Anonyme Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Autorenursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets)
- [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Benannte Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Aufgelöster Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Festgelegter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value)
- {{Glossary("style_origin", "Stilursprung")}}
- [Verwendeter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
- [Benutzerursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets)
- [User-Agent-Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Die grundlegendsten Konzepte von CSS – die Kaskade, Spezifität und Vererbung –, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Einführung in [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer), ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und der [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [An Elementen angehängte Stile](/de/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_media_queries)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektorenmodul](/de/docs/Web/CSS/Guides/Selectors)
- [CSS-Pseudoelemente-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS-Seitenmedienmodul](/de/docs/Web/CSS/Guides/Paged_media)
- [CSS-Bedingungsregelnmodul](/de/docs/Web/CSS/Guides/Conditional_rules)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
