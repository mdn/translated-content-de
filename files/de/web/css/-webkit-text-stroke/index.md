---
title: "-webkit-text-stroke"
slug: Web/CSS/-webkit-text-stroke
l10n:
  sourceCommit: c23237c82089ca6c56946ce1be95f11646823b53
---

{{CSSRef}}

Die **`-webkit-text-stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die [Breite](/de/docs/Web/CSS/length) und die [Farbe](/de/docs/Web/CSS/color_value) der Umrisse für Textzeichen fest. Diese Eigenschaft ist eine Kurzform für die Langform-Eigenschaften {{cssxref("-webkit-text-stroke-width")}} und {{cssxref("-webkit-text-stroke-color")}}.

```css
/* Breiten- und Farbwerte */
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;

/* Globale Werte */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: revert;
-webkit-text-stroke: revert-layer;
-webkit-text-stroke: unset;
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-text-stroke-color`](/de/docs/Web/CSS/-webkit-text-stroke-color)
- [`-webkit-text-stroke-width`](/de/docs/Web/CSS/-webkit-text-stroke-width)

## Syntax

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite des Umrisses.
- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Umrisses.

## Formaler Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen eines roten Textumrisses

#### HTML

```html
<p id="example">The stroke of this text is red.</p>
```

#### CSS

```css
#example {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

#### Ergebnis

{{EmbedLiveSample("Adding_a_red_text_stroke", 600, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Surfin' Safari Blogbeitrag zur Ankündigung dieser Funktion](https://webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
