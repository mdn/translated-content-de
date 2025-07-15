---
title: offset
slug: Web/CSS/offset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`offset`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt alle Eigenschaften fest, die zum Animieren eines Elements entlang eines definierten Pfads erforderlich sind. Die Offset-Eigenschaften helfen zusammen dabei, einen _Offset-Transform_ zu definieren, einen [Transform](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms), der einen Punkt in einem Element ([offset-anchor](/de/docs/Web/CSS/offset-anchor)) an einer _Offset-Position_ ([offset-position](/de/docs/Web/CSS/offset-position)) auf einem Pfad ([offset-path](/de/docs/Web/CSS/offset-path)) an verschiedenen Punkten entlang des Pfads ([offset-distance](/de/docs/Web/CSS/offset-distance)) ausrichtet und optional das Element dreht ([offset-rotate](/de/docs/Web/CSS/offset-rotate)), um der Richtung des Pfads zu folgen.

> [!NOTE]
> Frühere Versionen der Spezifikation nannten diese Eigenschaft `motion`.

{{InteractiveExample("CSS Demo: offset")}}

```css interactive-example-choice
offset: path("M 20 60 L 120 60 L 70 10 L 20 60") 0% auto 90deg;
```

```css interactive-example-choice
offset: path(
    "M 20 210 L 74 210 L 118 140 \
 L 62 140 L 20 210"
  )
  20% auto;
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
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: distance 3000ms infinite normal ease-in-out;
  animation-play-state: paused;
}

#example-element.running {
  animation-play-state: running;
}

.wrapper {
  height: 220px;
  width: 200px;
  background:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 140" width="200" height="140"><path d="M 0 60 L 100 60 L 50 10 L 0 60" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>')
      no-repeat,
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -140 150 230" width="200" height="230"><path d="M 0 70 L 56 70 L 98 0 L 42 0 L 0 70" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
}

@keyframes distance {
  to {
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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

## Syntax

```css
/* Offset position */
offset: auto;
offset: 10px 30px;
offset: none;

/* Offset path */
offset: ray(45deg closest-side);
offset: path("M 100 100 L 300 100 L 200 300 z");
offset: url(arc.svg);

/* Offset path with distance and/or rotation */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* Including offset anchor */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;

/* Global values */
offset: inherit;
offset: initial;
offset: revert;
offset: revert-layer;
offset: unset;
```

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Animieren eines Elements entlang eines Pfads

#### HTML

```html
<div id="offsetElement"></div>
```

#### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

#### Ergebnis

{{EmbedLiveSample("Animating_an_element_along_a_path", 350, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
