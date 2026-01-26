---
title: border-color
slug: Web/CSS/Reference/Properties/border-color
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`border-color`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Farbe des Rands eines Elements.

{{InteractiveExample("CSS Demo: border-color")}}

```css interactive-example-choice
border-color: red;
```

```css interactive-example-choice
border-color: red #32a1ce;
```

```css interactive-example-choice
border-color: red rgb(170 50 220 / 0.6) green;
```

```css interactive-example-choice
border-color: red yellow green hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-color: red yellow green transparent;
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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-left-color")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-top-color")}}

## Syntax

```css
/* <color> values */
border-color: red;

/* top and bottom | left and right */
border-color: red #f015ca;

/* top | left and right | bottom */
border-color: red rgb(240 30 50 / 70%) green;

/* top | right | bottom | left */
border-color: red yellow green blue;

/* Global values */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

Die `border-color` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, wird dieselbe Farbe für **alle vier Seiten** verwendet.
- Wenn **zwei** Werte angegeben werden, gilt die erste Farbe für **oben und unten** und die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt die erste Farbe für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Farben für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{CSSxRef("&lt;color&gt;")}}
  - : Definiert die Farbe des Rands.

## Beschreibung

Jede Seite kann individuell eingestellt werden, indem {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, und {{CSSxRef("border-left-color")}} genutzt werden; oder unter Verwendung der schreibmodusbewussten {{CSSxRef("border-block-start-color")}}, {{CSSxRef("border-block-end-color")}}, {{CSSxRef("border-inline-start-color")}}, und {{CSSxRef("border-inline-end-color")}}.

Sie finden weitere Informationen zu Randfarben unter [Farben auf HTML-Elemente anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color#borders).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vollständige border-color Nutzung

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* Set width and style for all divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### Ergebnis

{{EmbedLiveSample("Complete_border-color_usage", 600, 700)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Border-color verwandte CSS-Eigenschaften: {{CSSxRef("border")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}},
- Andere randbezogene CSS-Eigenschaften: {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}
- Der {{CSSxRef("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}}, und {{CSSxRef("column-rule-color")}}
- [Farbe auf HTML-Elemente unter Verwendung von CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
