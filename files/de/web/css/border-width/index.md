---
title: border-width
slug: Web/CSS/border-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-width`** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elementrandes fest.

{{InteractiveExample("CSS Demo: border-width")}}

```css interactive-example-choice
border-width: thick;
```

```css interactive-example-choice
border-width: 1em;
```

```css interactive-example-choice
border-width: 4px 1.25em;
```

```css interactive-example-choice
border-width: 2ex 1.25ex 0.5ex;
```

```css interactive-example-choice
border-width: 0 4px 8px 12px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-bottom-width`](/de/docs/Web/CSS/border-bottom-width)
- [`border-left-width`](/de/docs/Web/CSS/border-left-width)
- [`border-right-width`](/de/docs/Web/CSS/border-right-width)
- [`border-top-width`](/de/docs/Web/CSS/border-top-width)

## Syntax

```css
/* Keyword values */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> values */
border-width: 4px;
border-width: 1.2rem;

/* top and bottom | left and right */
border-width: 2px 1.5em;

/* top | left and right | bottom */
border-width: 1px 2em 1.5cm;

/* top | right | bottom | left */
border-width: 1px 2em 0 4rem;

/* Global values */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

Die `border-width`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt die gleiche Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für die **obere und untere** Seite, die zweite für die **linke und rechte** Seite.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für die **obere**, die zweite für die **linke und rechte**, die dritte für die **untere** Seite.
- Wenn **vier** Werte angegeben werden, gelten die Breiten in folgender Reihenfolge (im Uhrzeigersinn): **oben**, **rechts**, **unten** und **links**.

### Werte

- `<line-width>`
  - : Definiert die Breite des Randes entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es sich um ein Schlüsselwort handelt, muss es einer der folgenden Werte sein:
    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort angezeigt wird, nicht definiert, ist das genaue Ergebnis bei Verwendung eines dieser Schlüsselwörter implementierungsspezifisch. Trotzdem folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Mischung aus Werten und Längen

#### HTML

```html
<p id="one-value">one value: 6px wide border on all 4 sides</p>
<p id="two-values">
  two different values: 2px wide top and bottom border, 10px wide right and left
  border
</p>
<p id="three-values">
  three different values: 0.3em top, 9px bottom, and zero width right and left
</p>
<p id="four-values">
  four different values: "thin" top, "medium" right, "thick" bottom, and 1em
  left
</p>
```

#### CSS

```css
#one-value {
  border: ridge #ccc;
  border-width: 6px;
}
#two-values {
  border: solid red;
  border-width: 2px 10px;
}
#three-values {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#four-values {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### Ergebnis

{{ EmbedLiveSample('A_mix_of_values_and_lengths', 320, 320) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Rand-bezogenen Kurzform-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- Die Randbreiten-bezogenen Eigenschaften: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
