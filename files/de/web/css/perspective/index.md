---
title: perspective
slug: Web/CSS/perspective
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`perspective`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Abstand zwischen der z=0 Ebene und dem Benutzer, um einem 3D-positionierten Element eine Perspektive zu geben.

{{InteractiveExample("CSS Demo: perspective")}}

```css interactive-example-choice
perspective: none;
```

```css interactive-example-choice
perspective: 800px;
```

```css interactive-example-choice
perspective: 23rem;
```

```css interactive-example-choice
perspective: 5.5cm;
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
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
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
/* Keyword value */
perspective: none;

/* <length> values */
perspective: 20px;
perspective: 3.5em;

/* Global values */
perspective: inherit;
perspective: initial;
perspective: revert;
perspective: revert-layer;
perspective: unset;
```

### Werte

- `none`
  - : Gibt an, dass keine Perspektiventransformation angewendet werden soll.
- `<length>`
  - : Ein {{cssxref("&lt;length&gt;")}}, der den Abstand vom Benutzer zur z=0 Ebene angibt. Er wird verwendet, um eine Perspektiventransformation auf die Kinder des Elements anzuwenden. Negative Werte sind Syntaxfehler. Wenn der Wert kleiner als `1px` ist, wird er auf `1px` begrenzt.

## Beschreibung

Jedes 3D-Element mit z>0 wird größer; jedes 3D-Element mit z<0 wird kleiner. Die Stärke des Effekts wird durch den Wert dieser Eigenschaft bestimmt. Große Werte für `perspective` verursachen eine geringe Transformation; kleine Werte für `perspective` verursachen eine große Transformation.

Die Teile der 3D-Elemente, die sich hinter dem Benutzer befinden – d.h. ihre Koordinaten auf der z-Achse sind größer als der Wert der `perspective` CSS-Eigenschaft – werden nicht gezeichnet.

Der _Fluchtpunkt_ befindet sich standardmäßig in der Mitte des Elements, seine Position kann jedoch mit der {{cssxref("perspective-origin")}} Eigenschaft geändert werden.

Durch die Verwendung dieser Eigenschaft mit einem anderen Wert als `none` wird ein neuer [Stapelsatzkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erstellt. Außerdem fungiert das Objekt in diesem Fall als enthaltender Block für darin enthaltene `position: fixed` Elemente.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Perspektive einstellen

Ein Beispiel, das zeigt, wie ein Würfel sich verändert, wenn die `perspective` an verschiedenen Positionen eingestellt ist, finden Sie unter [Using CSS transforms > Setting perspective](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
