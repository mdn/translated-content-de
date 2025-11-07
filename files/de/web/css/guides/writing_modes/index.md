---
title: CSS-Schriftmodi
short-title: Writing modes
slug: Web/CSS/Guides/Writing_modes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul **CSS-Schriftmodi** definiert Unterstützung für verschiedene internationale Schriftmodi und deren Kombinationen, einschließlich der Anordnung von Text von links nach rechts und von rechts nach links sowie horizontaler und vertikaler Ausrichtungen.

Ein _Schriftmodus_ in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}, die in diesem Modul definiert sind, bestimmt. Er wird hauptsächlich in Bezug auf seine Inline-Basisrichtung und Blockflussrichtung definiert.

Einige horizontale Sprachen, wie Latein- und Indische Schriften, werden von links nach rechts geschrieben. Andere horizontale Sprachen, wie Hebräisch und Arabische Schriften, werden von rechts nach links geschrieben. Manchmal muss Text bidirektional sein, zum Beispiel beim Mischen von links-nach-rechts und rechts-nach-links Schriften. Einige Sprachen können mit einer vertikalen Ausrichtung geschrieben werden, zum Beispiel Chinesische, Japanische und Koreanische (CJK) Schriften.

Das CSS-Schriftmodul behandelt die Ausrichtungen aller Schriftmodi. Andere Module, wie das [CSS-Rubylayout](/de/docs/Web/CSS) Modul, bieten Rendering-Modelle und Formatierungssteuerungen im Zusammenhang mit der Anzeige von Textanmerkungen.

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

- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
  - : Der Artikel erklärt, wie die CSS-Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("direction")}} verwendet werden, um vertikale Formularelemente zu erstellen und zu konfigurieren.
- [Einführung in Schriftmodussysteme](/de/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems)
  - : Ein kurzer Überblick über Schriftmodussysteme und deren Ausrichtungen.

## Verwandte Konzepte

[CSS Text](/de/docs/Web/CSS/Guides/Text) Modul

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
- {{cssxref("text-box")}} Abkürzung
- {{cssxref("text-edge")}}

[CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul

- {{Glossary("Flow_relative_values", "Fluss-relative Werte")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- {{Glossary("Logical_properties", "Logische Eigenschaften")}}
- {{Glossary("Physical_properties", "Physische Eigenschaften")}}

[CSS-Anzeige](/de/docs/Web/CSS/Guides/Display) Modul

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

- [Internationalisierungsleitfaden](/de/docs/Web/JavaScript/Guide/Internationalization)
- [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) Objekt

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts) Modul
- [CSS-Rubylayout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
- [CSS-Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
- [CSS-Counterstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Einschluss](/de/docs/Web/CSS/Guides/Containment) Modul: {{CSSxRef("contain-intrinsic-block-size")}} und {{CSSxRef("contain-intrinsic-inline-size")}}
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul: {{CSSxRef("overflow-block")}} und {{CSSxRef("overflow-inline")}}
- [CSS-Überlaufverhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul: {{CSSxRef("overscroll-behavior-block")}} und {{CSSxRef("overscroll-behavior-inline")}}
