---
title: offset-anchor
slug: Web/CSS/offset-anchor
l10n:
  sourceCommit: 0b26e0b94c77c3d34f0b8b77ba624a7323ccfdad
---

{{CSSRef}}

Die **`offset-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert den Punkt innerhalb des Rahmens eines Elements, das sich entlang eines {{cssxref("offset-path")}} bewegt und tatsächlich entlang des Pfades bewegt wird.

{{EmbedInteractiveExample("pages/css/offset-anchor.html")}}

## Syntax

```css
/* Keyword values */
offset-anchor: top;
offset-anchor: bottom;
offset-anchor: left;
offset-anchor: right;
offset-anchor: center;
offset-anchor: auto;

/* <percentage> values */
offset-anchor: 25% 75%;

/* <length> values */
offset-anchor: 0 0;
offset-anchor: 1cm 2cm;
offset-anchor: 10ch 8em;

/* Edge offsets values */
offset-anchor: bottom 10px right 20px;
offset-anchor: right 3em bottom 10px;

/* Global values */
offset-anchor: inherit;
offset-anchor: initial;
offset-anchor: revert;
offset-anchor: revert-layer;
offset-anchor: unset;
```

### Werte

- `auto`
  - : `offset-anchor` erhält denselben Wert wie der {{cssxref("transform-origin")}} des Elements, es sei denn, {{cssxref("offset-path")}} ist `none`, in diesem Fall nimmt es seinen Wert von {{cssxref("offset-position")}}.
- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}} definiert ein x/y-Koordinatensystem, um ein Element relativ zu den Rändern eines Box-Elements zu platzieren. Es kann mithilfe von einem bis vier Werten definiert werden. Für mehr Details, siehe die Referenzseiten {{cssxref("&lt;position&gt;")}} und {{cssxref("background-position")}}. Beachten Sie, dass die 3-Werte-Position-Syntax für keine Verwendung von `<position>` funktioniert, außer bei `background(-position)`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene offset-anchor Werte festlegen

Im folgenden Beispiel haben wir drei {{htmlelement("div")}}-Elemente, die in {{htmlelement("section")}}-Elementen verschachtelt sind. Jedes `<div>` erhält denselben {{cssxref("offset-path")}} (eine horizontale Linie mit einer Länge von 200 Pixeln) und wird animiert, um sich entlang dieser Linie zu bewegen. Die drei erhalten dann unterschiedliche {{cssxref("background-color")}} und `offset-anchor` Werte.

Jedes `<section>` wurde mit einem linearen Verlauf gestaltet, um ihm eine horizontale Linie zu geben, die durch seine Mitte verläuft, um Ihnen eine visuelle Anzeige zu geben, wo die `<div>`'s offset-Pfade verlaufen.

Dies ermöglicht es Ihnen zu sehen, welche Wirkung die verschiedenen `offset-anchor` Werte haben — der erste, `auto`, bewirkt, dass der Mittelpunkt des `<div>` entlang des Pfades bewegt wird. Die anderen beiden bewirken, dass die oberen rechten und unteren linken Punkte des `<div>`s entlang des Pfades bewegt werden, jeweils.

#### HTML

```html
<section>
  <div class="offset-anchor1"></div>
</section>
<section>
  <div class="offset-anchor2"></div>
</section>
<section>
  <div class="offset-anchor3"></div>
</section>
```

#### CSS

```css
div {
  offset-path: path("M 0,20 L 200,20");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
}

section {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 49%,
    #000 50%,
    #000 51%,
    transparent 52%
  );
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.offset-anchor1 {
  offset-anchor: auto;
  background: cyan;
}

.offset-anchor2 {
  offset-anchor: right top;
  background: purple;
}

.offset-anchor3 {
  offset-anchor: left bottom;
  background: magenta;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_various_offset-anchor_values', '100%', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- [SVG `<path>`](/de/docs/Web/SVG/Tutorial/Paths)
