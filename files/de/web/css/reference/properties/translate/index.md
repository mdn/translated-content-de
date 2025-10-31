---
title: translate
slug: Web/CSS/Reference/Properties/translate
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`translate`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, Translations-Transformationen einzeln und unabhängig von der {{CSSxRef("transform")}} Eigenschaft anzugeben. Dies entspricht besser der typischen Nutzung in Benutzeroberflächen und spart das Merken der genauen Reihenfolge der Transformationsfunktionen im `transform` Wert.

{{InteractiveExample("CSS Demo: translate")}}

```css interactive-example-choice
translate: none;
```

```css interactive-example-choice
translate: 40px;
```

```css interactive-example-choice
translate: 50% -40%;
```

```css interactive-example-choice
translate: 20px 4rem;
```

```css interactive-example-choice
translate: 20px 4rem 150px;
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
/* Keyword values */
translate: none;

/* Single values */
translate: 100px;
translate: 50%;

/* Two values */
translate: 100px 200px;
translate: 50% 105px;

/* Three values */
translate: 50% 105px 5rem;

/* Global values */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### Werte

- Einzelner {{cssxref("&lt;length-percentage&gt;")}} Wert
  - : Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, der eine Translation entlang der X-Achse angibt. Entspricht einer `translate()` (2D-Translation) Funktion mit einem angegebenen Wert.
- Zwei {{cssxref("&lt;length-percentage&gt;")}} Werte
  - : Zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die X- und Y-Achsen-Translationswerte (jeweils) einer 2D-Translation angeben. Entspricht einer `translate()` (2D-Translation) Funktion mit zwei angegebenen Werten.
- Drei Werte
  - : Zwei {{cssxref("&lt;length-percentage&gt;")}} und ein einzelner {{cssxref("&lt;length&gt;")}} Wert, die die X-, Y- und Z-Achsen-Translationswerte (jeweils) einer 3D-Translation angeben. Entspricht einer `translate3d()` (3D-Translation) Funktion.
- `none`
  - : Gibt an, dass keine Translation angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übersetzen eines Elements beim Hover

Dieses Beispiel zeigt, wie die `translate` Eigenschaft verwendet wird, um ein Element in drei Achsen zu verschieben.
Das erste Kästchen wird entlang der X-Achse verschoben und das zweite Kästchen wird entlang der X- und Y-Achsen verschoben.
Das dritte Kästchen wird entlang der X-, Y- und Z-Achsen verschoben und hat aufgrund der Hinzufügung von {{cssxref('perspective')}} zum übergeordneten Element den Anschein, sich auf den Betrachter zu zubewegen.

#### HTML

```html
<div class="wrapper">
  <div id="box1">translate X</div>
  <div id="box2">translate X,Y</div>
  <div id="box3">translate X,Y,Z</div>
</div>
```

#### CSS

```css
.wrapper {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.wrapper > div {
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#box1:hover {
  translate: 20px;
}

#box2:hover {
  translate: 20px 20px;
}

#box3:hover {
  translate: 5px 5px 30px;
}
```

#### Ergebnis

{{EmbedLiveSample("Translating_an_element_on_hover", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Hinweis: skew ist kein unabhängiger Transformationswert
