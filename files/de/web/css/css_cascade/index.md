---
title: CSS-Kaskadierung und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 799c2b925bd65f0f31511cafab36fa1a6e294dc4
---

{{CSSRef}}

Das **CSS-Kaskadierungs- und Vererbungsmodul** definiert die Regeln zur Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul spezifiziert die Regeln zur Ermittlung des angegebenen Wertes für alle Eigenschaften in allen Elementen.

Eines der grundsätzlichen Gestaltungsprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es mehreren Stylesheets, das Erscheinungsbild eines Dokuments zu beeinflussen. CSS-Eigenschaft-Wert-Deklarationen definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können unterschiedliche Werte für die gleiche Element- und Eigenschaftskombination festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul definiert, wie diese fehlenden Werte über Vererbung oder den Anfangswert der Eigenschaft festgelegt werden sollten.

> [!NOTE]
> Die Regeln zur Ermittlung der angegebenen Werte im Kontext der Seite und ihrer Randbereiche sind im [CSS-Seitenmodul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

## Referenz

### Eigenschaften

- {{cssxref("all")}}

### At-Regeln

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

- [Actual value](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Anonymous layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Author origin](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Computed value](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Initial value](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Named layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Resolved value](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Shorthand properties](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Specified value](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- {{Glossary("style_origin", "Stilursprung")}}
- [Used value](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [User origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets)
- [User-agent origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)

  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)

  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)

  - : Einführung in [Kaskadenschichten](/de/docs/Web/CSS/@layer), ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [Elementgebundene Stile](/de/docs/Web/HTML/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Wertdefinierungssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektorenmodul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudo-Elementemodul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Seitenmedienmodul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingte-Regelnmodul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Nestmodul](/de/docs/Web/CSS/CSS_nesting)
- [Verkürzte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
