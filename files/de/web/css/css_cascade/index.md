---
title: CSS-Kaskadierung und Vererbung
slug: Web/CSS/CSS_cascade
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Kaskadierungs- und Vererbungsmodul** definiert die Regeln für die Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul spezifiziert die Regeln, um den spezifizierten Wert für alle Eigenschaften auf allen Elementen zu ermitteln.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Sie ermöglicht es mehreren Stylesheets, die Darstellung eines Dokuments zu beeinflussen. CSS-Deklarationen aus Eigenschaft und Wert definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können unterschiedliche Werte für das gleiche Element und die gleiche Eigenschaftskombination festlegen, aber nur ein Wert kann auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt ebenfalls auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul definiert, wie diese fehlenden Werte durch Vererbung oder vom Anfangswert der Eigenschaft festgelegt werden sollten.

> [!NOTE]
> Die Regeln zur Ermittlung der spezifizierten Werte im Seitenkontext und in seinen Randbereichen sind im [CSS-Seitenmodul](/de/docs/Web/CSS/CSS_paged_media) beschrieben.

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

- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSRule`](/de/docs/Web/API/CSSRule)

### Glossar und Definitionen

- [Tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [Anonyme Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Author Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets)
- [Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
- [Benannte Ebene](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
- [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value)
- {{Glossary("style_origin", "style origin")}}
- [Verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
- [User Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets)
- [User-Agent Origin](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets)

## Leitfäden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
  - : Leitfaden zum Kaskadenalgorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - : Ein Leitfaden zur CSS-Vererbung.

- [Erlernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Die grundlegendsten Konzepte von CSS – die Kaskade, Spezifität und Vererbung – die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Erlernen: Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Einführung in [Kaskadierungsebenen](/de/docs/Web/CSS/@layer), eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [Elementgebundene Stile](/de/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)
- [Wert-Definitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektormodul](/de/docs/Web/CSS/CSS_selectors)
- [CSS-Pseudo-Elemente-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Seitenmedienmodul](/de/docs/Web/CSS/CSS_paged_media)
- [CSS-Kontextabhängige Regeln Modul](/de/docs/Web/CSS/CSS_conditional_rules)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
- [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
