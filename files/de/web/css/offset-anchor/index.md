---
title: offset-anchor
slug: Web/CSS/offset-anchor
l10n:
  sourceCommit: 0b26e0b94c77c3d34f0b8b77ba624a7323ccfdad
---

{{CSSRef}}

Die **`offset-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Punkt innerhalb des Rahmens eines Elements, das entlang eines {{cssxref("offset-path")}} reist und tatsächlich entlang des Pfades bewegt wird.

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
  - : `offset-anchor` erhält denselben Wert wie der {{cssxref("transform-origin")}} des Elements, es sei denn, {{cssxref("offset-path")}} ist `none`, in diesem Fall wird der Wert von {{cssxref("offset-position")}} übernommen.
- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}} definiert eine x/y-Koordinate, um ein Element relativ zu den Rändern des Rahmens eines Elements zu platzieren. Es kann mit einem bis vier Werten definiert werden. Für weitere Details siehe die Referenzseiten {{cssxref("&lt;position&gt;")}} und {{cssxref("background-position")}}. Beachten Sie, dass die 3-Wert-Positionssyntax für keine Verwendung von `<position>` außer bei `background(-position)` funktioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen verschiedener offset-anchor-Werte

Im folgenden Beispiel haben wir drei {{htmlelement("div")}}-Elemente, die in {{htmlelement("section")}}-Elementen verschachtelt sind. Jedes `<div>` erhält denselben {{cssxref("offset-path")}} (eine 200 Pixel lange horizontale Linie) und wird animiert, um sich entlang dieser zu bewegen. Die drei erhalten dann unterschiedliche {{cssxref("background-color")}} und `offset-anchor`-Werte.

Jedes `<section>` wurde mit einem linearen Verlauf gestaltet, um ihm eine horizontale Linie in der Mitte zu geben, die Ihnen eine visuelle Darstellung davon gibt, wo die Offset-Pfade der `<div>` verlaufen.

Dies ermöglicht es Ihnen zu sehen, welchen Effekt die verschiedenen `offset-anchor`-Werte haben — der erste, `auto`, bewirkt, dass sich der Mittelpunkt des `<div>` entlang des Pfades bewegt. Die anderen beiden bewirken, dass sich die oberen rechten und unteren linken Punkte des `<div>` entlang des Pfades bewegen bzw.

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
