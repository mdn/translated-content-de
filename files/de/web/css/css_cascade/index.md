---
title: CSS-Kaskade und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das Modul **CSS-Kaskade und Vererbung** definiert die Regeln zur Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul legt die Regeln fest, um den festgelegten Wert für alle Eigenschaften auf allen Elementen zu ermitteln.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es mehreren Stylesheets, die Präsentation eines Dokuments zu beeinflussen. CSS-Property-Value-Deklarationen definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können verschiedene Werte für dieselbe Element-Eigenschafts-Kombination festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskademodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskademodul bestimmt, wie diese fehlenden Werte durch Vererbung oder aus dem Anfangswert der Eigenschaft festgelegt werden sollen.

> [!NOTE]
> Die Regeln zur Ermittlung der festgelegten Werte im Seitenkontext und seinen Randbereichen werden im [CSS-Seitenmodul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

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
- {{cssxref("important", "!important")}} flag

### Schnittstellen

- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSRule")}}

### Schlüsselkonzepte und Definitionen

- {{cssxref("Specificity")}}
- [Ursprünge der Kaskade und Wichtigkeit](/de/docs/Web/CSS/Cascade)
- [Werte](/de/docs/Web/CSS/Value_definition_syntax)
  - [aktueller Wert](/de/docs/Web/CSS/actual_value)
  - [berechneter Wert](/de/docs/Web/CSS/computed_value)
  - [Anfangswert](/de/docs/Web/CSS/initial_value)
  - [aufgelöster Wert](/de/docs/Web/CSS/resolved_value)
  - [festgelegter Wert](/de/docs/Web/CSS/specified_value)
  - [verwendeter Wert](/de/docs/Web/CSS/used_value)
- [Ursprungsarten](/de/docs/Web/CSS/Cascade#origin_types)
  - [Benutzeragent-Ursprung](/de/docs/Web/CSS/Cascade#user-agent_stylesheets)
  - [Autoren-Ursprung](/de/docs/Web/CSS/Cascade#author_stylesheets)
  - [Benutzer-Ursprung](/de/docs/Web/CSS/Cascade#user_stylesheets)
- [Ebenen deklarieren](/de/docs/Web/CSS/@import#importing_css_rules_into_a_cascade_layer)
  - [benannte Ebene](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
  - [anonyme Ebene](/de/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- Glossar: {{glossary("style origin")}}

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)

  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie Benutzeragenten Property-Werte aus verschiedenen Quellen kombinieren.

- [Lernen: Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

  - : Die grundlegendsten Konzepte von CSS — die Kaskade, die Spezifität und die Vererbung — die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)

  - : Einführung in die [Kaskadenschichten](/de/docs/Web/CSS/@layer), ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

- [CSS-Vererbung](/de/docs/Web/CSS/Inheritance)
  - : Ein Leitfaden zur CSS-Vererbung.

## Verwandte Konzepte

- [An Elementen angelegte Stile](/de/docs/Web/HTML/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren-Modul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudoelemente-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Seitenmedien-Modul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Bedingte Regeln Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
