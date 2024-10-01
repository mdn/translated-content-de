---
title: CSS Cascade und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das Modul **CSS Cascade und Vererbung** definiert die Regeln zur Zuweisung von Werten an Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul legt die Regeln fest, um den spezifizierten Wert für alle Eigenschaften auf allen Elementen zu finden.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es, dass mehrere Stylesheets die Präsentation eines Dokuments beeinflussen. CSS-Eigenschafts-Wert-Deklarationen bestimmen, wie ein Dokument dargestellt wird. Mehrere Deklarationen können unterschiedliche Werte für die gleiche Element-Eigenschafts-Kombination festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Cascade-Modul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Cascade-Modul legt fest, wie diese fehlenden Werte durch Vererbung oder vom Anfangswert der Eigenschaft gesetzt werden sollten.

> [!NOTE]
> Die Regeln zum Finden der spezifizierten Werte im Seitenkontext und dessen Randboxen werden im [CSS-Seiten-Modul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

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

### Schlüsselkonzepte und Definitionen

- {{cssxref("Specificity")}}
- [Kaskadenherkunft und Wichtigkeit](/de/docs/Web/CSS/Cascade)
- [Werte](/de/docs/Web/CSS/Value_definition_syntax)
  - [actual value](/de/docs/Web/CSS/actual_value)
  - [computed value](/de/docs/Web/CSS/computed_value)
  - [initial value](/de/docs/Web/CSS/initial_value)
  - [resolved value](/de/docs/Web/CSS/resolved_value)
  - [specified value](/de/docs/Web/CSS/specified_value)
  - [used value](/de/docs/Web/CSS/used_value)
- [Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types)
  - [Ursprung des Benutzeragenten](/de/docs/Web/CSS/Cascade#user-agent_stylesheets)
  - [Autorenursprung](/de/docs/Web/CSS/Cascade#author_stylesheets)
  - [Benutzerursprung](/de/docs/Web/CSS/Cascade#user_stylesheets)
- [Ebenen deklarieren](/de/docs/Web/CSS/@import#importing_css_rules_into_a_cascade_layer)
  - [benannte Ebene](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
  - [anonyme Ebene](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- Glossar: {{Glossary("style_origin", "Stilursprung")}}

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)

  - : Leitfaden für den Kaskadenalgorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen stammen.

- [Lernen: Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — die kontrollieren, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)

  - : Einführung in [Kaskadenschichten](/de/docs/Web/CSS/@layer), eine fortgeschrittene Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

- [CSS-Vererbung](/de/docs/Web/CSS/Inheritance)
  - : Ein Leitfaden zur CSS-Vererbung.

## Verwandte Konzepte

- [Elementgebundene Stile](/de/docs/Web/HTML/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Selektoren Modul](/de/docs/Web/CSS/CSS_selectors)
- [CSS Pseudo-Elemente Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Seitenmedien-Modul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingte Regeln Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
