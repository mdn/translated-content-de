---
title: offset-anchor
slug: Web/CSS/offset-anchor
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`offset-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Punkt innerhalb des Rahmens eines Elements an, das entlang eines {{cssxref("offset-path")}} reist, welcher sich tatsächlich entlang des Pfades bewegt.

{{InteractiveExample("CSS Demo: offset-anchor")}}

```css interactive-example-choice
offset-anchor: auto;
```

```css interactive-example-choice
offset-anchor: right top;
```

```css interactive-example-choice
offset-anchor: left bottom;
```

```css interactive-example-choice
offset-anchor: 20% 80%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="wrapper">
    <div id="example-element"></div>
  </div>
  <button id="playback" type="button">Play</button>
</section>
```

```css interactive-example
#example-element {
  offset-path: path("M 0,20 L 200,20");
  animation: distance 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
  animation-play-state: paused;
}

#example-element.running {
  animation-play-state: running;
}

.wrapper {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 49%,
    #000 50%,
    #000 51%,
    transparent 52%
  );
  border: 1px solid #ccc;
  width: 90%;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}
```

```js interactive-example
window.addEventListener("load", () => {
  const example = document.getElementById("example-element");
  const button = document.getElementById("playback");

  button.addEventListener("click", () => {
    if (example.classList.contains("running")) {
      example.classList.remove("running");
      button.textContent = "Play";
    } else {
      example.classList.add("running");
      button.textContent = "Pause";
    }
  });
});
```

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
  - : `offset-anchor` wird mit demselben Wert wie das {{cssxref("transform-origin")}} des Elements angegeben, es sei denn, {{cssxref("offset-path")}} ist `none`. In diesem Fall wird der Wert von {{cssxref("offset-position")}} übernommen.
- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}} definiert eine x/y-Koordinate, um ein Element relativ zu den Kanten eines Elementrahmens zu platzieren. Es kann mit einem bis vier Werten definiert werden. Für weitere Details siehe die Referenzen {{cssxref("&lt;position&gt;")}} und {{cssxref("background-position")}}. Beachten Sie, dass die 3-Werte-Positionssyntax für keine Verwendung von `<position>`, außer in `background(-position)`, funktioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung verschiedener offset-anchor-Werte

Im folgenden Beispiel haben wir drei {{htmlelement("div")}}-Elemente, die in {{htmlelement("section")}}-Elementen verschachtelt sind. Jedes `<div>` erhält denselben {{cssxref("offset-path")}} (eine horizontale Linie, 200 Pixel lang) und wird animiert, um sich entlang dieses Pfades zu bewegen. Die drei erhalten dann unterschiedliche {{cssxref("background-color")}}- und `offset-anchor`-Werte.

Jedes `<section>` wurde mit einem linearen Gradient gestylt, um ihm eine horizontale Linie in seiner Mitte zu geben, damit Sie eine visuelle Anzeige erhalten, wo die Offset-Pfade von `<div>` verlaufen.

Dies ermöglicht es Ihnen, zu sehen, welche Wirkung die verschiedenen `offset-anchor`-Werte haben – der erste, `auto`, bewirkt, dass sich der Mittelpunkt des `<div>` entlang des Pfades bewegt. Die anderen beiden bewirken, dass sich die oberen rechten und unteren linken Punkte des `<div>` entlang des Pfades bewegen, jeweils.

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
- [SVG `<path>`](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
