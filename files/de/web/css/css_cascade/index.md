---
title: CSS-Cascading und -Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Cascading und -Vererbung** Modul definiert die Regeln zur Zuweisung von Werten zu Eigenschaften durch das Kaskadieren und Vererben. Dieses Modul spezifiziert die Regeln zur Ermittlung des spezifizierten Wertes für alle Eigenschaften auf allen Elementen.

Eines der grundlegenden Designprinzipien von CSS ist das Kaskadieren von Regeln. Es ermöglicht mehreren Stylesheets, die Darstellung eines Dokuments zu beeinflussen. CSS-Deklarationen definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können unterschiedliche Werte für dieselbe Kombination von Element und Eigenschaft festlegen, aber es kann nur ein Wert auf eine CSS-Eigenschaft angewendet werden. Das CSS-Cascade-Modul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Cascade-Modul definiert, wie diese fehlenden Werte durch Vererbung oder aus dem anfänglichen Wert der Eigenschaft gesetzt werden sollten.

> [!NOTE]
> Die Regeln zur Ermittlung der spezifizierten Werte im Seitenkontext und dessen Randboxen sind im [CSS-Seitenmodul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

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
- {{cssxref("important", "!important")}}-Kennzeichen

### Schnittstellen

- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSRule`](/de/docs/Web/API/CSSRule)

### Glossar und Definitionen

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Anonyme Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Autorenherkunft](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Anfänglicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Benannte Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Ermittelter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- {{Glossary("style_origin", "Stilherkunft")}}
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [Benutzerherkunft](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets)
- [Benutzeragentenherkunft](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)

  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)

  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, die Spezifität und die Vererbung —, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Einführung in [Kaskadenebenen](/de/docs/Web/CSS/@layer), ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [Elementgebundene Stile](/de/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektorenmodul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudoelemente-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Seitenmedien-Modul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingte Regeln-Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
