---
title: CSS-Kaskadierung und Vererbung
short-title: Kaskadierung und Vererbung
slug: Web/CSS/Guides/Cascade
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das Modul **CSS-Kaskadierung und Vererbung** definiert die Regeln zur Zuweisung von Werten zu Eigenschaften durch Kaskadierung und Vererbung. Dieses Modul spezifiziert die Regeln, um den angegebenen Wert für alle Eigenschaften auf allen Elementen zu finden.

Eines der grundlegenden Designprinzipien von CSS ist die Kaskadierung von Regeln. Es ermöglicht mehreren Stylesheets, die Darstellung eines Dokuments zu beeinflussen. CSS-Eigenschaftswerte-Deklarationen definieren, wie ein Dokument gerendert wird. Mehrere Deklarationen können unterschiedliche Werte für die gleiche Element- und Eigenschaften-Kombination festlegen, jedoch kann nur ein Wert auf eine CSS-Eigenschaft angewendet werden. Das CSS-Kaskadenmodul definiert, wie diese Konflikte gelöst werden.

Das Gegenteil tritt auch auf. Manchmal gibt es keine Deklarationen, die den Wert einer Eigenschaft definieren. Das CSS-Kaskadenmodul definiert, wie diese fehlenden Werte durch Vererbung oder vom anfänglichen Wert der Eigenschaft gesetzt werden sollten.

> [!NOTE]
> Die Regeln zur Ermittlung der angegebenen Werte im Seitenkontext und seinen Randboxen werden im [CSS-Seitenmodul](/de/docs/Web/CSS/Guides/Paged_media) beschrieben.

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
- {{cssxref("important", "!important")}} flag

### Schnittstellen

- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSRule`](/de/docs/Web/API/CSSRule)

### Glossarbegriffe und Definitionen

- [Tatsächlicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Anonyme Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Autorenherkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets)
- [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Benannter Layer](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Gelöster Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Angegebener Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value)
- {{Glossary("style_origin", "Stilherkunft")}}
- [Verwendeter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
- [Benutzerherkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets)
- [Benutzeragent-Herkunft](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets)

## Leitfaden

- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
  - : Leitfaden zum Kaskade-Algorithmus, der definiert, wie User Agents Eigenschaftswerte aus verschiedenen Quellen kombinieren.

- [CSS-Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - : Ein Leitfaden zur CSS-Vererbung.

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Die grundlegendsten Konzepte von CSS — die Kaskade, die Spezifität und die Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Lernen: Kaskadeschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Einführung in [Kaskadeschichten](/de/docs/Web/CSS/Reference/At-rules/@layer), eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufbaut.

## Verwandte Konzepte

- [Elementgebundene Stile](/de/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline-Stile und die Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#inline_styles)
- [Bedingte Regeln für @imports](/de/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_media_queries)
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren-Modul](/de/docs/Web/CSS/Guides/Selectors)
- [CSS-Pseudoelemente-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS-Seitenmedien-Modul](/de/docs/Web/CSS/Guides/Paged_media)
- [CSS-Bedingte Regeln-Modul](/de/docs/Web/CSS/Guides/Conditional_rules)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
