---
title: CSS-Kaskadierung und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Das **CSS-Kaskadierung und Vererbung**-Modul definiert die Regeln zur Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul legt die Regeln fest, um den festgelegten Wert für alle Eigenschaften auf allen Elementen zu finden.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es mehreren Stylesheets, die Darstellung eines Dokuments zu beeinflussen. CSS-Eigenschaft-Wert-Deklarationen definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können verschiedene Werte für die gleiche Element- und Eigenschaftskombination festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul legt fest, wie diese fehlenden Werte über Vererbung oder aus dem anfänglichen Wert der Eigenschaft gesetzt werden sollten.

> [!NOTE]
> Die Regeln zum Finden der festgelegten Werte im Seitenkontext und seinen Randkästen werden im [CSS-Seitenmodul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

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

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
- [Anonyme Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Autorursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value)
- [Benannte Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
- [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Festgelegter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified-value)
- {{Glossary("style_origin", "Style-Ursprung")}}
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value)
- [Nutzerursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets)
- [Ursprung des User-Agent](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)

  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie User-Agents Eigenschaftswerte kombinieren, die aus verschiedenen Quellen stammen.

- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)

  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)

  - : Einführung in [Kaskadierungsebenen](/de/docs/Web/CSS/@layer), eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [Element-gebundene Stile](/de/docs/Web/HTML/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudoelementmodul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Seitenmedien-Modul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingungsregelmodul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
