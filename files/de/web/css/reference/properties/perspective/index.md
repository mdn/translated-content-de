---
title: perspective
slug: Web/CSS/Reference/Properties/perspective
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`perspective`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Entfernung zwischen der z=0 Ebene und dem Benutzer, um einem 3D-positionierten Element eine Perspektive zu verleihen.

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
  - : Gibt an, dass keine Perspektiventransformation angewendet wird.
- `<length>`
  - : Ein {{cssxref("&lt;length&gt;")}}, das die Entfernung vom Benutzer zur z=0 Ebene angibt. Es wird verwendet, um eine Perspektiventransformation auf die Kinder des Elements anzuwenden. Negative Werte sind Syntaxfehler. Wenn der Wert kleiner als `1px` ist, wird er auf `1px` begrenzt.

## Beschreibung

Jedes 3D-Element mit z>0 wird größer; jedes 3D-Element mit z<0 wird kleiner. Die Stärke des Effekts wird durch den Wert dieser Eigenschaft bestimmt. Große Werte von `perspective` verursachen eine kleine Transformation; kleine Werte von `perspective` verursachen eine große Transformation.

Die Teile der 3D-Elemente, die sich hinter dem Benutzer befinden — deren z-Achsen-Koordinaten also größer sind als der Wert der `perspective` CSS-Eigenschaft — werden nicht gezeichnet.

Der _Fluchtpunkt_ wird standardmäßig in der Mitte des Elements platziert, aber seine Position kann mit der Eigenschaft {{cssxref("perspective-origin")}} geändert werden.

Die Verwendung dieser Eigenschaft mit einem anderen Wert als `none` erstellt einen neuen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context). In diesem Fall fungiert das Objekt auch als enthaltender Block für Elemente mit `position: fixed`, die es enthält.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Perspektive einstellen

Ein Beispiel, das zeigt, wie sich ein Würfel verändert, wenn die `perspective` an verschiedenen Positionen eingestellt wird, finden Sie unter [Verwendung von CSS-Transformationen > Perspektive einstellen](/de/docs/Web/CSS/Guides/Transforms/Using#setting_perspective).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
