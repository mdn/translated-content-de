---
title: width
slug: Web/CSS/width
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`width`**-[CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elements fest. Standardmäßig wird die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) festgelegt, aber wenn {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, wird die Breite des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) festgelegt.

{{EmbedInteractiveExample("pages/css/width.html")}}

Der angegebene Wert von `width` gilt für den Inhaltsbereich, solange sein Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert für `width` kleiner ist als der Wert für `min-width`, dann überschreibt `min-width` die `width`.
- Wenn der Wert für `width` größer ist als der Wert für `max-width`, dann überschreibt `max-width` die `width`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` für `<svg>` zu `100%` und für andere Elemente zu `0` aufgelöst wird und Prozentwerte relativ zur SVG-Viewport-Breite für `<rect>` sind. Der CSS-`width`-Eigenschaftswert überschreibt jeden SVG-{{SVGAttr("width")}}-Attributwert, der am SVG-Element festgelegt wurde.

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
  - : Der Browser berechnet und wählt eine Breite für das angegebene Element.
- `max-content`
  - : Die intrinsische bevorzugte Breite.
- `min-content`
  - : Die intrinsische Mindestbreite.
- `fit-content`
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die fit-content-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Breite des [Randbereichs](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, den Randbereich so zu erweitern, dass er den verfügbaren Raum im umschließenden Block füllt, verhält sich in gewisser Weise ähnlich wie `100%`, wendet jedoch die resultierende Größe auf den Randbereich an, anstatt auf den durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmten Bereich.

    > [!NOTE]
    > Um die von Browsern für den `stretch`-Wert verwendeten Aliase und deren Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `width`-Einstellung beim Zoomen der Seite zur Vergrößerung der Textgröße nicht abgeschnitten werden und/oder andere Inhalte verdecken.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

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
