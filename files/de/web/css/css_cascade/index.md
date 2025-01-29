---
title: CSS-Kaskadierung und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: d6ceca91f9183956e320f334b761542dc3409091
---

{{CSSRef}}

Das Modul **CSS-Kaskadierung und Vererbung** definiert die Regeln zur Zuweisung von Werten an Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul legt die Regeln fest, um den spezifizierten Wert für alle Eigenschaften auf allen Elementen zu finden.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es, dass mehrere Stylesheets die Darstellung eines Dokuments beeinflussen. CSS-Eigenschafts-Wert-Deklarationen definieren, wie ein Dokument dargestellt wird. Mehrere Deklarationen können unterschiedliche Werte für dieselbe Element- und Eigenschaftskombination festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul legt fest, wie diese fehlenden Werte über Vererbung oder aus dem Anfangswert der Eigenschaft festgelegt werden sollten.

> [!NOTE]
> Die Regeln zur Ermittlung der spezifizierten Werte im Seitenkontext und seinen Randboxen sind im [CSS-Page-Modul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

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

### Wichtige Konzepte und Definitionen

- {{cssxref("Specificity")}}
- [Kaskadenursprung und Wichtigkeit](/de/docs/Web/CSS/Cascade)
- [Werte](/de/docs/Web/CSS/Value_definition_syntax)
  - [tatsächlicher Wert](/de/docs/Web/CSS/actual_value)
  - [berechneter Wert](/de/docs/Web/CSS/computed_value)
  - [Anfangswert](/de/docs/Web/CSS/initial_value)
  - [aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
  - [spezifizierter Wert](/de/docs/Web/CSS/specified_value)
  - [verwendeter Wert](/de/docs/Web/CSS/used_value)
- [Ursprungsarten](/de/docs/Web/CSS/Cascade#origin_types)
  - [User-Agent-Ursprung](/de/docs/Web/CSS/Cascade#user-agent_stylesheets)
  - [Autor-Ursprung](/de/docs/Web/CSS/Cascade#author_stylesheets)
  - [Benutzer-Ursprung](/de/docs/Web/CSS/Cascade#user_stylesheets)
- [Ebenen deklarieren](/de/docs/Web/CSS/@import#importing_css_rules_into_a_cascade_layer)
  - [benannte Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
  - [anonyme Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- Glossar: {{Glossary("style_origin", "Stil-Ursprung")}}

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)

  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)

  - : Einführung in [Kaskadenschichten](/de/docs/Web/CSS/@layer), ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

- [CSS-Vererbung](/de/docs/Web/CSS/Inheritance)
  - : Ein Leitfaden zur CSS-Vererbung.

## Verwandte Konzepte

- [Elementzugeordnete Stile](/de/docs/Web/HTML/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudo-Elemente-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Page-Media-Modul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingte Regeln-Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Verschachtelung-Modul](/de/docs/Web/CSS/CSS_nesting)
- [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
