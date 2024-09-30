---
title: width
slug: Web/CSS/width
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elements fest. Standardmäßig wird die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) gesetzt. Wenn jedoch {{cssxref("box-sizing")}} auf `border-box` eingestellt ist, wird die Breite des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) festgelegt.

{{EmbedInteractiveExample("pages/css/width.html")}}

Der angegebene Wert von `width` gilt für den Inhaltsbereich, solange sein Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert von `width` kleiner ist als der Wert von `min-width`, dann überschreibt `min-width` `width`.
- Wenn der Wert von `width` größer ist als der Wert von `max-width`, dann überschreibt `max-width` `width`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` sich auf `100%` für `<svg>` und `0` für andere Elemente auflöst. Prozentwerte beziehen sich auf die SVG-Viewport-Breite für `<rect>`. Der CSS-`width`-Eigenschaftswert überschreibt jeden auf dem SVG-Element festgelegten SVG-{{SVGAttr("width")}}-Attributwert.

## Syntax

```css
/* <length> values */
width: 300px;
width: 25em;
width: anchor-size(--myAnchor inline, 120%);
width: minmax(100px, anchor-size(width));

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content;
width: fit-content(20em);
width: auto;
width: stretch;

/* Global values */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die Breite als Distanzwert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Breite als Prozentsatz der Breite des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Breite für das angegebene Element aus.
- `max-content`
  - : Die intrinsische bevorzugte Breite.
- `min-content`
  - : Die intrinsische Mindestbreite.
- `fit-content`
  - : Nutzt den verfügbaren Raum, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die fit-content-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Breite des [Randkasten](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, den Randkasten so auszufüllen, dass er den verfügbaren Raum im umschließenden Block nutzt, ähnlich wie bei `100%`, wobei jedoch die resultierende Größe auf den Randkasten angewendet wird, anstatt auf den durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmten Kasten.

    > [!NOTE]
    > Um Aliasse zu überprüfen, die von Browsern für den `stretch`-Wert verwendet werden, und den Status der Implementierung zu prüfen, siehe den Abschnitt über die [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einer `width` gesetzt werden, nicht abgeschnitten und/oder andere Inhalte nicht verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis der WCAG, Richtlinie 1.4 Erläuterungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs Kriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardbreite

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Default_width', '500px', '64px')}}

### Beispiel mit Pixeln und Ems

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

{{EmbedLiveSample('Example using pixels and ems', '500px', '64px')}}

### Beispiel mit Prozentsatz

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Width in percentage</div>
```

{{EmbedLiveSample('Example using percentage', '500px', '64px')}}

### Beispiel mit "max-content"

```css
p.maxgreen {
  background: lightgreen;
  width: max-content;
}
```

```html
<p class="maxgreen">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "max-content"', '500px', '64px')}}

### Beispiel mit "min-content"

```css
p.minblue {
  background: lightblue;
  width: min-content;
}
```

```html
<p class="minblue">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "min-content"', '500px', '155px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
