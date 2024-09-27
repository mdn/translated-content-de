---
title: "::first-line"
slug: Web/CSS/::first-line
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`::first-line`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf die erste Zeile eines [Block-Containers](/de/docs/Web/CSS/Visual_formatting_model#block_containers) an.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-first-line.html", "tabbed-shorter")}}

Die Effekte von `::first-line` sind durch die Länge und den Inhalt der ersten Textzeile im Element begrenzt. Die Länge der ersten Zeile hängt von vielen Faktoren ab, darunter die Breite des Elements, die Breite des Dokuments und die Schriftgröße des Textes. `::first-line` hat keine Wirkung, wenn das erste Kindelement des Elements, das der erste Teil der ersten Zeile wäre, ein Inline-Blockelement ist, wie z.B. eine Inline-Tabelle.

> **Note:** [Selectors Level 3](https://drafts.csswg.org/selectors-3/#first-line) führte die Doppelpunkt-Notation (`::`) ein, um [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) von den einfach-doppelpunkt-([pseudo-classes](/de/docs/Web/CSS/Pseudo-classes)) zu unterscheiden. Browser akzeptieren sowohl `::first-line` als auch `:first-line`, welches in CSS2 eingeführt wurde.

Für die Zwecke von CSS {{CSSXref("background")}} ist das `::first-line`-Pseudo-Element wie ein Inline-Level-Element, was bedeutet, dass bei einer linksbündigen ersten Zeile der Hintergrund möglicherweise nicht bis zum rechten Rand reicht.

## Zulässige Eigenschaften

Nur eine kleine Untermenge von CSS-Eigenschaften kann mit dem `::first-line`-Pseudo-Element verwendet werden:

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

### Stilierung der ersten Zeile eines Absatzes

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

### Stilierung der ersten Zeile eines SVG-Text-Elements

In diesem Beispiel gestalten wir die erste Zeile eines SVG-{{SVGElement("text")}}-Elements mit dem `::first-line`-Pseudo-Element.

> [!NOTE]
> Zum Zeitpunkt der Erstellung dieses Dokuments hat diese Funktion [begrenzte Unterstützung](#browser-kompatibilität).

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

Um das SVG-`<text>`-Element auf mehrere Zeilen umzubrechen, verwenden wir die {{cssxref("white-space", "", "#multiple_lines_in_svg_text_element")}}-CSS-Eigenschaft. Wir wählen dann die erste Zeile mit dem `::first-line`-Pseudo-Element aus.

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
