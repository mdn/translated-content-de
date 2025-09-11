---
title: offset-rotate
slug: Web/CSS/offset-rotate
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Die **`offset-rotate`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Ausrichtung/Richtung des Elements, während es entlang des {{cssxref("offset-path")}} positioniert wird.

{{InteractiveExample("CSS Demo: offset-rotate")}}

```css interactive-example-choice
offset-rotate: auto;
```

```css interactive-example-choice
offset-rotate: 90deg;
```

```css interactive-example-choice
offset-rotate: auto 90deg;
```

```css interactive-example-choice
offset-rotate: reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
  <button id="playback" type="button">Play</button>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
  animation: distance 8000ms infinite linear;
  animation-play-state: paused;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

#example-element.running {
  animation-play-state: running;
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

/* Provides a reference image of what path the element is following */
#default-example {
  position: relative;
  background-position: calc(50% - 12px) calc(50% + 14px);
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-75 -45 150 140" width="150" height="140"><path d="M-70,-40 C-70,70 70,70 70,-40" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
}
```

```js interactive-example
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
```

> [!NOTE]
> Frühere Versionen der Spezifikation nannten diese Eigenschaft `motion-rotation`.

## Syntax

```css
/* Follow the path direction, with optional additional angle */
offset-rotate: auto;
offset-rotate: auto 45deg;

/* Follow the path direction but facing the opposite direction of `auto` */
offset-rotate: reverse;

/* Keep a constant rotation regardless the position on the path */
offset-rotate: 90deg;
offset-rotate: 0.5turn;

/* Global values */
offset-rotate: inherit;
offset-rotate: initial;
offset-rotate: revert;
offset-rotate: revert-layer;
offset-rotate: unset;
```

- `auto`
  - : Das Element wird um den Winkel der Richtung des {{cssxref("offset-path")}} gedreht, relativ zur positiven x-Achse. Dies ist der Standardwert.
- {{cssxref("&lt;angle&gt;")}}
  - : Das Element erhält eine konstante, im Uhrzeigersinn gerichtete Rotationsumwandlung um den angegebenen Rotationswinkel.
- `auto <angle>`
  - : Wenn `auto` von einem {{cssxref("&lt;angle&gt;")}} gefolgt wird, wird der berechnete Wert des Winkels zum berechneten Wert von `auto` hinzugefügt.
- `reverse`
  - : Das Element wird ähnlich wie bei `auto` gedreht, außer dass es in die entgegengesetzte Richtung zeigt. Dies entspricht der Angabe eines Wertes von `auto 180deg`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Orientierung des Elements entlang seines Offset-Pfades einstellen

#### HTML

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

```css
div {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 20px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;

  offset-path: path("M20,20 C20,50 180,-10 180,20");
}
div:nth-child(1) {
  offset-rotate: auto;
}
div:nth-child(2) {
  offset-rotate: auto 90deg;
}
div:nth-child(3) {
  offset-rotate: 30deg;
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_element_orientation_along_its_offset_path', '100%', '200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
