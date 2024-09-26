---
title: border-color
slug: Web/CSS/border-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

Die **`border-color`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-color.html")}}

Jede Seite kann individuell festgelegt werden mit {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, und {{CSSxRef("border-left-color")}}; oder mit den schreibmodusabhängigen {{CSSxRef("border-block-start-color")}}, {{CSSxRef("border-block-end-color")}}, {{CSSxRef("border-inline-start-color")}}, und {{CSSxRef("border-inline-end-color")}}.

Weitere Informationen über Rahmenfarben finden Sie unter [Anwenden von Farben auf HTML-Elemente](/de/docs/Web/CSS/CSS_colors/Applying_color#borders).

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-bottom-color`](/de/docs/Web/CSS/border-bottom-color)
- [`border-left-color`](/de/docs/Web/CSS/border-left-color)
- [`border-right-color`](/de/docs/Web/CSS/border-right-color)
- [`border-top-color`](/de/docs/Web/CSS/border-top-color)

## Syntax

```css
/* <color> Werte */
border-color: red;

/* oben und unten | links und rechts */
border-color: red #f015ca;

/* oben | links und rechts | unten */
border-color: red rgb(240 30 50 / 70%) green;

/* oben | rechts | unten | links */
border-color: red yellow green blue;

/* Globale Werte */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

Die `border-color` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, wird dieselbe Farbe auf **alle vier Seiten** angewendet.
- Wenn **zwei** Werte angegeben werden, wird die erste Farbe auf **oben und unten** angewendet, die zweite auf **links und rechts**.
- Wenn **drei** Werte angegeben werden, wird die erste Farbe auf **oben** angewendet, die zweite auf **links und rechts**, die dritte auf **unten**.
- Wenn **vier** Werte angegeben werden, werden die Farben auf **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn) angewendet.

### Werte

- {{CSSxRef("&lt;color&gt;")}}
  - : Definiert die Farbe des Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vollständige Nutzung von border-color

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> ist gleichbedeutend mit</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> ist gleichbedeutend mit</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> ist gleichbedeutend mit</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code> ist gleichbedeutend mit</p>
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

/* Setzt Breite und Stil für alle divs */
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
- Andere border-bezogene CSS-Eigenschaften: {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}
- Der {{CSSxRef("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}}, und {{CSSxRef("column-rule-color")}}
- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)