---
title: skalieren
slug: Web/CSS/scale
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

Die **`scale`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, Skalentransformationen einzeln und unabhängig von der {{CSSxRef("transform")}}-Eigenschaft anzugeben. Dies entspricht besser der typischen Verwendung in Benutzeroberflächen und erspart die Notwendigkeit, sich die genaue Reihenfolge der Transformationsfunktionen zu merken, die im `transform`-Wert angegeben werden müssen.

{{EmbedInteractiveExample("pages/css/scale.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
scale: none;

/* Einzelne Werte */
/* Werte über 1 oder 100% lassen das Element wachsen */
scale: 2;
/* Werte unter 1 oder 100% lassen das Element schrumpfen */
scale: 50%;

/* Zwei Werte */
scale: 2 0.5;

/* Drei Werte */
scale: 200% 50% 200%;

/* Globale Werte */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

### Werte

- Einzelner Wert
  - : Ein {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, der einen Skalierungsfaktor angibt, um das betroffene Element entlang beider Achsen (X und Y) um denselben Faktor zu skalieren. Entspricht einer `scale()`-Funktion (2D-Skalierung) mit einem angegebenen Wert.
- Zwei Werte
  - : Zwei {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die Skalierungswerte der X- und Y-Achse (jeweils) einer 2D-Skalierung angeben. Entspricht einer `scale()`-Funktion (2D-Skalierung) mit zwei angegebenen Werten.
- Drei Werte
  - : Drei {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die Skalierungswerte der X-, Y- und Z-Achse (jeweils) einer 3D-Skalierung angeben. Entspricht einer `scale3d()`-Funktion (3D-Skalierung).
- `none`
  - : Gibt an, dass keine Skalierung angewendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Skalierung eines Elements bei Hover

Das folgende Beispiel zeigt, wie ein Element bei Hover skaliert wird.
Es werden zwei Boxen gezeigt, eine mit einem einzigen `scale`-Wert, der das Element entlang beider Achsen skaliert.
Die zweite Box hat zwei `scale`-Werte, die das Element entlang der X- und Y-Achse unabhängig skalieren.

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

Hinweis: Skew ist kein unabhängiger Transformationswert.
