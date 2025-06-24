---
title: perspective-origin
slug: Web/CSS/perspective-origin
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`perspective-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Position, von der aus der Betrachter schaut. Sie wird als _Fluchtpunkt_ von der {{cssxref("perspective")}} Eigenschaft verwendet.

{{InteractiveExample("CSS Demo: perspective-origin")}}

```css interactive-example-choice
perspective-origin: center;
```

```css interactive-example-choice
perspective-origin: top;
```

```css interactive-example-choice
perspective-origin: bottom right;
```

```css interactive-example-choice
perspective-origin: -170%;
```

```css interactive-example-choice
perspective-origin: 500% 200%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 550px;
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  perspective: 250px;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

Die **`perspective-origin`** und {{cssxref('perspective')}} Eigenschaften sind an das übergeordnete Element eines in dreidimensionalem Raum transformierten Kindes gebunden, im Gegensatz zur [`perspective()`](/de/docs/Web/CSS/transform-function/perspective) Transformationsfunktion, die auf das zu transformierende Element angewendet wird.

## Syntax

```css
/* One-value syntax */
perspective-origin: x-position;

/* Two-value syntax */
perspective-origin: x-position y-position;

/* When both x-position and y-position are keywords,
   the following is also valid */
perspective-origin: y-position x-position;

/* Global values */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### Werte

- _x-position_

  - : Gibt die Position der Abszisse des _Fluchtpunkts_ an. Sie kann einen der folgenden Werte haben:
    - {{cssxref("&lt;length-percentage&gt;")}}, die die Position als absoluten Längenwert oder relativ zur Breite des Elements angibt. Der Wert kann negativ sein.
    - `left`, ein Schlüsselwort, das eine Abkürzung für den `0` Längenwert ist.
    - `center`, ein Schlüsselwort, das eine Abkürzung für den `50%` Prozentwert ist.
    - `right`, ein Schlüsselwort, das eine Abkürzung für den `100%` Prozentwert ist.

- _y-position_
  - : Gibt die Position der Ordinate des _Fluchtpunkts_ an. Sie kann einen der folgenden Werte haben:
    - {{cssxref("&lt;length-percentage&gt;")}}, die die Position als absoluten Längenwert oder relativ zur Höhe des Elements angibt. Der Wert kann negativ sein.
    - `top`, ein Schlüsselwort, das eine Abkürzung für den `0` Längenwert ist.
    - `center`, ein Schlüsselwort, das eine Abkürzung für den `50%` Prozentwert ist.
    - `bottom`, ein Schlüsselwort, das eine Abkürzung für den `100%` Prozentwert ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern der Perspektivenursprung

Ein Beispiel, wie man `perspective-origin` ändert, finden Sie unter [Verwendung von CSS-Transformationen > Ändern der Perspektivenursprung](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#changing_the_perspective_origin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/de/docs/Web/CSS/transform-function/perspective) Funktion
