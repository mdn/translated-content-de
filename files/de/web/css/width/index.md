---
title: Breite
slug: Web/CSS/width
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elements fest. Standardmäßig bestimmt sie die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area), aber wenn {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, legt sie die Breite des [Rahmenbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) fest.

{{EmbedInteractiveExample("pages/css/width.html")}}

Der angegebene Wert von `width` gilt für den Inhaltsbereich, solange sein Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert für `width` kleiner ist als der Wert für `min-width`, überschreibt `min-width` die `width`.
- Wenn der Wert für `width` größer ist als der Wert für `max-width`, überschreibt `max-width` die `width`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` für `<svg>` als `100%` und für andere Elemente als `0` aufgelöst wird und Prozentwerte relativ zur Breite des SVG-Ansichtsfensters für `<rect>` sind. Der CSS `width` Eigenschaftswert überschreibt jeden SVG {{SVGAttr("width")}} Attributwert, der auf das SVG-Element gesetzt ist.

## Syntax

```css
/* <length> Werte */
width: 300px;
width: 25em;
width: anchor-size(--myAnchor inline, 120%);
width: minmax(100px, anchor-size(width));

/* <percentage> Wert */
width: 75%;

/* Schlüsselwortwerte */
width: max-content;
width: min-content;
width: fit-content;
width: fit-content(20em);
width: auto;
width: stretch;

/* Globale Werte */
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
  - : Definiert die Breite als Prozentsatz der Breite des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Breite für das angegebene Element.
- `max-content`
  - : Die intrinsische bevorzugte Breite.
- `min-content`
  - : Die intrinsische Mindestbreite.
- `fit-content`
  - : Verwenden Sie den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), also `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die Fit-Content-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, also `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Breite des [Margin-Box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box in den verfügbaren Raum im enthältenden Block zu füllen, verhält sich also ähnlich wie `100%`, wendet jedoch die resultierende Größe auf die Margin-Box an, anstatt auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box.

    > [!NOTE]
    > Um Aliase zu überprüfen, die von Browsern für den `stretch`-Wert verwendet werden, und deren Implementierungsstatus zu sehen, besuchen Sie den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit `width` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Erfolgskriterium 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

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
<p class="goldie">Die MDN-Community schreibt wirklich großartige Dokumentationen.</p>
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
<div class="px_length">Breite gemessen in px</div>
<div class="em_length">Breite gemessen in em</div>
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
<div class="percent">Breite in Prozent</div>
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
<p class="maxgreen">Die MDN-Community schreibt wirklich großartige Dokumentationen.</p>
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
<p class="minblue">Die MDN-Community schreibt wirklich großartige Dokumentationen.</p>
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
- Die zugehörigen logischen Eigenschaften: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
