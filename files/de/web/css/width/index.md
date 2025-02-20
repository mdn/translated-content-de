---
title: width
slug: Web/CSS/width
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`width`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt die Breite eines Elements fest. Standardmäßig definiert sie die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area). Wenn jedoch {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, wird die Breite des [Rahmenbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) festgelegt.

{{EmbedInteractiveExample("pages/css/width.html")}}

Der angegebene Wert von `width` bezieht sich auf den Inhaltsbereich, solange der Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert von `width` kleiner als der Wert von `min-width` ist, überschreibt `min-width` den Wert von `width`.
- Wenn der Wert von `width` größer als der Wert von `max-width` ist, überschreibt `max-width` den Wert von `width`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die SVG-Elemente {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}}, wobei `auto` für `<svg>` auf `100%` und für andere Elemente auf `0` auflöst, und Prozentwerte sich auf die Breite des SVG-Viewport für `<rect>` beziehen. Der CSS-Wert der Eigenschaft `width` überschreibt jeden Wert des SVG-Attributs {{SVGAttr("width")}}, der im SVG-Element gesetzt wurde.

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
  - : Definiert die Breite als eine Distanzangabe.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Breite als Prozentsatz der Breite des [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Breite für das angegebene Element.
- `max-content`
  - : Die intrinsische bevorzugte Breite.
- `min-content`
  - : Die intrinsische Mindestbreite.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die fit-content-Formel mit dem verfügbaren Platz, ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Breite der [Außenabstand-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite des [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Außenabstand-Box so zu erweitern, dass sie den verfügbaren Platz im enthältenden Block ausfüllt, verhält sich also in gewisser Weise ähnlich wie `100%`, wendet jedoch die resultierende Größe auf die Außenabstand-Box statt auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box an.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den Wert `stretch` und dessen Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer festgelegten `width` weder abgeschnitten sind noch andere Inhalte verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erläuterung des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

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

### Beispiel mit Prozentwerten

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
p.max-green {
  background: lightgreen;
  width: max-content;
}
```

```html
<p class="max-green">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "max-content"', '500px', '64px')}}

### Beispiel mit "min-content"

```css
p.min-blue {
  background: lightblue;
  width: min-content;
}
```

```html
<p class="min-blue">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "min-content"', '500px', '155px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- SVG-Attribut {{SVGAttr("width")}}
- [Einführung in das grundlegende Box-Modell von CSS](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul
