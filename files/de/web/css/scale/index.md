---
title: scale
slug: Web/CSS/scale
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

Die **`scale`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, Skalentransformationen individuell und unabhängig von der {{CSSxRef("transform")}} Eigenschaft anzugeben. Dies passt besser zu typischen Benutzeroberflächenanwendungen und erspart es Ihnen, sich die genaue Reihenfolge der Transformationsfunktionen zu merken, die im `transform`-Wert angegeben werden müssen.

{{EmbedInteractiveExample("pages/css/scale.html")}}

## Syntax

```css
/* Keyword values */
scale: none;

/* Single values */
/* values of more than 1 or 100% make the element grow */
scale: 2;
/* values of less than 1 or 100% make the element shrink */
scale: 50%;

/* Two values */
scale: 2 0.5;

/* Three values */
scale: 200% 50% 200%;

/* Global values */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

### Werte

- Einzelwert
  - : Ein {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, das einen Skalierungsfaktor angibt, um das betroffene Element entlang sowohl der X- als auch der Y-Achse zu skalieren. Entspricht einer `scale()` (2D-Skalierung) Funktion mit einem einzigen angegebenen Wert.
- Zwei Werte
  - : Zwei {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte, die die Skalierungswerte der X- und Y-Achse (jeweils) einer 2D-Skalierung angeben. Entspricht einer `scale()` (2D-Skalierung) Funktion mit zwei angegebenen Werten.
- Drei Werte
  - : Drei {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte, die die Skalierungswerte der X-, Y- und Z-Achse (jeweils) einer 3D-Skalierung angeben. Entspricht einer `scale3d()` (3D-Skalierung) Funktion.
- `none`
  - : Gibt an, dass keine Skalierung angewendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Skalierung eines Elements beim Hover

Das folgende Beispiel zeigt, wie ein Element beim Hover skaliert wird.
Zwei Kästchen werden gezeigt, eines mit einem einzigen `scale`-Wert, der das Element entlang beider Achsen skaliert.
Das zweite Kästchen hat zwei `scale`-Werte, die das Element unabhängig entlang der X- und Y-Achse skalieren.

#### HTML

```html
<div class="box" id="box1">single value</div>
<div class="box" id="box2">two values</div>
```

#### CSS

```css
.box {
  float: left;
  margin: 1em;
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}

#box1:hover {
  scale: 1.25;
}

#box2:hover {
  scale: 1.25 0.75;
}
```

#### Ergebnis

{{EmbedLiveSample("Scaling_an_element_on_hover", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('translate')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Hinweis: skew ist kein unabhängiger Transformationswert
