---
title: CSS-Schreibmodi
slug: Web/CSS/CSS_writing_modes
l10n:
  sourceCommit: 5f406af7cc71ebbd0ce080c9216b6094f58732cf
---

Das Modul **CSS-Schreibmodi** definiert die Unterstützung für verschiedene internationale Schreibmodi und deren Kombinationen, einschließlich links-nach-rechts und rechts-nach-links Textanordnung sowie horizontaler und vertikaler Ausrichtungen.

Ein _Schreibmodus_ in CSS wird durch die {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} Eigenschaften bestimmt, die in diesem Modul definiert sind. Er wird hauptsächlich in Bezug auf seine Inline-Basisrichtung und die Blockflussrichtung definiert.

Einige horizontale Sprachen sind links-nach-rechts, einschließlich lateinischer und indischer Schriften. Andere horizontale Sprachen werden rechts-nach-links geschrieben, darunter hebräische und arabische Schriften. Manchmal muss Text bidirektional sein, wie bei der Kombination von links-nach-rechts und rechts-nach-links Schriften. Einige Sprachen können mit einer vertikalen Ausrichtung geschrieben werden, zum Beispiel chinesische, japanische und koreanische (CJK) Schriften.

Das CSS-Schreibmodul befasst sich mit den Ausrichtungen aller Schreibmodi. Andere Module, wie das [CSS Ruby Layout](/de/docs/Web/CSS) Modul, bieten Rendering-Modelle und Formatierungssteuerungen im Zusammenhang mit der Anzeige von Textanmerkungen.

## Referenz

### Eigenschaften

- {{cssxref("direction")}}
- {{cssxref("glyph-orientation-vertical")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
- {{cssxref("unicode-bidi")}}
- {{cssxref("writing-mode")}}

### Glossar und Begriffe

- {{Glossary("/Baseline/Typography", "Grundlinie")}}
- {{Glossary("Internationalization", "Internationalisierung")}}
- {{Glossary("Localization", "Lokalisierung")}}
- {{Glossary("Leading", "Durchschuss")}}

## Leitfäden

- [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
  - : Der Artikel erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden, um vertikale Formularelemente zu erstellen und zu konfigurieren.
- [Einführung in Schreibmodussysteme](/de/docs/Web/CSS/CSS_writing_modes/Writing_mode_systems)
  - : Ein kurzer Überblick über Schreibmodussysteme und deren Richtungen.

## Verwandte Konzepte

[CSS-Text](/de/docs/Web/CSS/CSS_text) Modul

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

[CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("line-height")}}
- {{cssxref("text-box-edge")}}
- {{cssxref("text-box-trim")}}
- {{cssxref("text-box")}} Kurzform
- {{cssxref("text-edge")}}

[CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul

- {{Glossary("Flow_relative_values", "Fluss-relative Werte")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- {{Glossary("Logical_properties", "Logische Eigenschaften")}}
- {{Glossary("Physical_properties", "Physische Eigenschaften")}}

[CSS Anzeige](/de/docs/Web/CSS/CSS_display) Modul

- {{cssxref("display")}}

- {{CSSxRef("&lt;display-internal&gt;")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)

[CSS Erzeugter Inhalt](/de/docs/Web/CSS/CSS_generated_content)

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

- [Internationalisierungsleitfaden](/de/docs/Web/JavaScript/Guide/Internationalization)
- [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) Objekt

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Schriften](/de/docs/Web/CSS/CSS_fonts) Modul
- [CSS Ruby Layout](/de/docs/Web/CSS/CSS_ruby_layout) Modul
- [CSS Textdekoration](/de/docs/Web/CSS/CSS_text_decoration) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Einschließung](/de/docs/Web/CSS/CSS_containment) Modul: {{CSSxRef("contain-intrinsic-block-size")}} und {{CSSxRef("contain-intrinsic-inline-size")}}
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul: {{CSSxRef("overflow-block")}} und {{CSSxRef("overflow-inline")}}
- [CSS Überscrollverhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul: {{CSSxRef("overscroll-behavior-block")}} und {{CSSxRef("overscroll-behavior-inline")}}
