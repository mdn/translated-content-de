---
title: ::first-line
slug: Web/CSS/::first-line
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::first-line`** [CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf die erste Zeile eines [Blockcontainer](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#block_containers) an.

{{InteractiveExample("CSS Demo: ::first-line", "tabbed-shorter")}}

```css interactive-example
p::first-line {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
}
```

```html interactive-example
<p>
  In warm ocean waters around the world, you may see a strange sight: A fish
  leaping from the water and soaring dozens of meters before returning to the
  ocean's depths. Early Mediterranean sailors thought these flying fish returned
  to the shore at night to sleep, and therefore called this family of marine
  fish Exocoetidae.
</p>
```

Die Effekte von `::first-line` sind durch die Länge und den Inhalt der ersten Textzeile im Element begrenzt. Die Länge der ersten Zeile hängt von vielen Faktoren ab, einschließlich der Breite des Elements, der Breite des Dokuments und der Schriftgröße des Textes. `::first-line` hat keine Wirkung, wenn das erste Kind des Elements, das der erste Teil der ersten Zeile wäre, ein Inline-Blockelement ist, wie z.B. eine Inline-Tabelle.

> [!NOTE]
> [Selectoren Stufe 3](https://drafts.csswg.org/selectors-3/#first-line) führte die Doppel-Doppelpunkt-Notation (`::`) ein, um [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) von den Einzel-Doppelpunkt-(`:`)-[Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) zu unterscheiden. Browser akzeptieren sowohl `::first-line` als auch `:first-line`, das in CSS2 eingeführt wurde.

Für die Zwecke von CSS {{CSSXref("background")}} ist das `::first-line` Pseudo-Element ähnlich einem Inline-Level-Element, was bedeutet, dass bei einer linksbündigen ersten Zeile der Hintergrund möglicherweise nicht bis zum rechten Rand reicht.

## Erlaubte Eigenschaften

Nur eine kleine Teilmenge von CSS-Eigenschaften kann mit dem `::first-line` Pseudo-Element verwendet werden:

- Alle schriftbezogenen Eigenschaften: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, und {{Cssxref("font-family")}}
- Alle hintergrundbezogenen Eigenschaften: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{cssxref("background-attachment")}}, und {{cssxref("background-blend-mode")}}
- Die {{cssxref("color")}}-Eigenschaft
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, und {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, und {{cssxref("vertical-align")}}.

## Syntax

```css
::first-line {
  /* ... */
}
```

## Beispiele

### Erste Zeile eines Absatzes stilisieren

#### HTML

```html
<p>
  Styles will only be applied to the first line of this paragraph. After that,
  all text will be styled like normal. See what I mean?
</p>

<span>
  The first line of this text will not receive special styling because it is not
  a block-level element.
</span>
```

#### CSS

```css hidden
* {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
::first-line {
  color: blue;
  font-weight: bold;

  /* WARNING: DO NOT USE THESE */
  /* Many properties are invalid in ::first-line pseudo-elements */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Ergebnis

{{EmbedLiveSample('styling_first_line_of_a_paragraph', 350, 130)}}

### Erste Zeile eines SVG-Text-Elements stilisieren

In diesem Beispiel stilisieren wir die erste Zeile eines SVG-{{SVGElement("text")}} Elements unter Verwendung des `::first-line` Pseudo-Elements.

> [!NOTE]
> Zum Zeitpunkt des Schreibens hat dieses Feature [begrenzte Unterstützung](#browser-kompatibilität).

#### HTML

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20">Here is an English paragraph
that is broken into multiple lines
in the source code so that it can
be more easily read and edited
in a text editor.
  </text>
</svg>
```

#### CSS

Um das SVG-`<text>` Element auf mehrere Zeilen zu umbrechen, verwenden wir die {{cssxref("white-space", "", "#multiple_lines_in_svg_text_element")}} CSS-Eigenschaft. Wir wählen dann die erste Zeile mit dem `::first-line` Pseudo-Element aus.

```css hidden
text {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
text {
  white-space: break-spaces;
}

text::first-line {
  fill: blue;
  font-weight: bold;
}
```

#### Ergebnis

{{EmbedLiveSample("styling_the_first_line_of_a_SVG_text_element", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::first-letter")}}
- {{cssxref("white-space")}}
