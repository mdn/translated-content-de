---
title: "`perspective-origin` CSS property"
short-title: perspective-origin
slug: Web/CSS/Reference/Properties/perspective-origin
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`perspective-origin`** bestimmt die Position, von der aus die betrachtende Person schaut. Sie wird von der Eigenschaft {{cssxref("perspective")}} als _Fluchtpunkt_ verwendet.

Die Eigenschaften **`perspective-origin`** und {{cssxref('perspective')}} werden im Gegensatz zur Transformationsfunktion [`perspective()`](/de/docs/Web/CSS/Reference/Values/transform-function/perspective), die auf dem transformierten Element platziert wird, dem übergeordneten Element eines im dreidimensionalen Raum transformierten Kindelements zugeordnet.

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
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

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
    - {{cssxref("&lt;length-percentage&gt;")}}, das die Position als absoluten Längenwert oder relativ zur Breite des Elements angibt. Der Wert kann negativ sein.
    - `left`, ein Schlüsselwort als Kurzform für den Längenwert `0`.
    - `center`, ein Schlüsselwort als Kurzform für den Prozentwert `50%`.
    - `right`, ein Schlüsselwort als Kurzform für den Prozentwert `100%`.

- _y-position_
  - : Gibt die Position der Ordinate des _Fluchtpunkts_ an. Sie kann einen der folgenden Werte haben:
    - {{cssxref("&lt;length-percentage&gt;")}}, das die Position als absoluten Längenwert oder relativ zur Höhe des Elements angibt. Der Wert kann negativ sein.
    - `top`, ein Schlüsselwort als Kurzform für den Längenwert `0`.
    - `center`, ein Schlüsselwort als Kurzform für den Prozentwert `50%`.
    - `bottom`, ein Schlüsselwort als Kurzform für den Prozentwert `100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern des Perspektivenursprungs

Ein Beispiel, das zeigt, wie `perspective-origin` geändert wird, finden Sie unter [Verwendung von CSS-Transformationen > Ändern des Perspektivenursprungs](/de/docs/Web/CSS/Guides/Transforms/Using#changing_the_perspective_origin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- Funktion [`transform: perspective()`](/de/docs/Web/CSS/Reference/Values/transform-function/perspective)
