---
title: CSS-Schreibmodi
slug: Web/CSS/CSS_writing_modes
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

Das **CSS-Schreibmodul** definiert die Unterstützung für verschiedene internationale Schreibmodi und deren Kombinationen, einschließlich von links nach rechts und von rechts nach links Textanordnung sowie horizontale und vertikale Ausrichtungen.

Ein _Schreibmodus_ in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt, die in diesem Modul definiert sind. Er wird hauptsächlich durch seine inlinere Basisrichtung und Blockflussrichtung definiert.

Einige horizontale Sprachen sind links nach rechts, einschließlich lateinischer und indic-Schriften. Andere horizontale Sprachen werden von rechts nach links geschrieben, einschließlich hebräischer und arabischer Schriften. Manchmal muss Text bidirektional sein, wie beim Mischen von Links-nach-Rechts- und Rechts-nach-Links-Schriften. Einige Sprachen können mit einer vertikalen Ausrichtung geschrieben werden, zum Beispiel chinesische, japanische und koreanische (CJK) Schriften.

Das CSS-Schreibmodul behandelt die Ausrichtungen aller Schreibmodi. Andere Module, wie das [CSS-Ruby-Layout](/de/docs/Web/CSS) Modul, bieten Rendermodelle und Formatierungssteuerungen in Bezug auf die Anzeige von Textanmerkungen.

## Referenz

### Eigenschaften

- {{cssxref("direction")}}
- {{cssxref("glyph-orientation-vertical")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
- {{cssxref("unicode-bidi")}}
- {{cssxref("writing-mode")}}

### Glossar und Begriffe

- {{Glossary("/Baseline/Typography", "Baseline")}}
- {{Glossary("Internationalization", "Internationalisierung")}}
- {{Glossary("Localization", "Lokalisierung")}}
- {{Glossary("Leading", "Durchschuss")}}

## Leitfäden

- [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
  - : Der Artikel erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden können, um vertikale Formularelemente zu erstellen und zu konfigurieren.
- [Einführung in Schreibmodus-Systeme](/de/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems)
  - : Ein kurzer Überblick über Schreibmodus-Systeme und deren Richtungen.

## Verwandte Konzepte

[CSS-Text](/de/docs/Web/CSS/Guides/Text) Modul

- {{cssxref("hanging-punctuation")}}
- {{cssxref("hyphens")}}
- {{cssxref("letter-spacing")}}
- {{cssxref("line-break")}}
- {{cssxref("overflow-wrap")}}
- {{cssxref("text-align")}}
- {{cssxref("text-align-last")}}
- {{cssxref("text-indent")}}
- {{cssxref("text-justify")}}
- {{cssxref("word-break")}}
- {{cssxref("word-spacing")}}

[CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("line-height")}}
- {{cssxref("text-box-edge")}}
- {{cssxref("text-box-trim")}}
- {{cssxref("text-box")}} Shorthand
- {{cssxref("text-edge")}}

[CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul

- {{Glossary("Flow_relative_values", "Fluss-relative Werte")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- {{Glossary("Logical_properties", "Logische Eigenschaften")}}
- {{Glossary("Physical_properties", "Physische Eigenschaften")}}

[CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul

- {{cssxref("display")}}
- {{CSSxRef("&lt;display-internal&gt;")}}
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)

[CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)

- {{CSSxRef("quotes")}}

[SVG](/de/docs/Web/SVG)

- {{SVGAttr("glyph-orientation-horizontal")}} {{deprecated_inline}}
- {{SVGAttr("glyph-orientation-vertical")}} {{deprecated_inline}}
- {{SVGAttr("writing-mode")}}

[HTML](/de/docs/Web/HTML)

- {{htmlelement("bdo")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("q")}}
- {{htmlelement("ruby")}}
- {{htmlelement("sub")}}
- {{htmlelement("sup")}}
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attribut
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut

[JavaScript](/de/docs/Web/JavaScript)

- [Internationalisierungs-Leitfaden](/de/docs/Web/JavaScript/Guide/Internationalization)
- [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) Objekt

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts) Modul
- [CSS-Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
- [CSS-Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Containment](/de/docs/Web/CSS/Guides/Containment) Modul: {{CSSxRef("contain-intrinsic-block-size")}} und {{CSSxRef("contain-intrinsic-inline-size")}}
- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul: {{CSSxRef("overflow-block")}} und {{CSSxRef("overflow-inline")}}
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul: {{CSSxRef("overscroll-behavior-block")}} und {{CSSxRef("overscroll-behavior-inline")}}
