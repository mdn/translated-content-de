---
title: translate
slug: Web/CSS/translate
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`translate`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, Übersetzungstransformationen einzeln und unabhängig von der {{CSSxRef("transform")}}-Eigenschaft anzugeben. Dies passt besser zu typischer Benutzeroberflächen-Nutzung und erspart Ihnen das Merken der genauen Reihenfolge der Transformationsfunktionen, die im `transform`-Wert anzugeben sind.

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

- Einzelner {{cssxref("&lt;length-percentage&gt;")}}-Wert
  - : Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, der eine Übersetzung entlang der X-Achse angibt. Entspricht einer `translate()`-Funktion (2D-Übersetzung) mit einem einzelnen angegebenen Wert.
- Zwei {{cssxref("&lt;length-percentage&gt;")}}-Werte
  - : Zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die X- und Y-Achsen-Übersetzungswerte (jeweils) einer 2D-Übersetzung angeben. Entspricht einer `translate()`-Funktion (2D-Übersetzung) mit zwei angegebenen Werten.
- Drei Werte
  - : Zwei {{cssxref("&lt;length-percentage&gt;")}}- und ein {{cssxref("&lt;length&gt;")}}-Wert, die die X-, Y- und Z-Achsen-Übersetzungswerte (jeweils) einer 3D-Übersetzung angeben. Entspricht einer `translate3d()`-Funktion (3D-Übersetzung).
- `none`
  - : Gibt an, dass keine Übersetzung angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übersetzen eines Elements beim Hover

Dieses Beispiel zeigt, wie die `translate`-Eigenschaft verwendet wird, um ein Element in drei Achsen zu verschieben.
Das erste Kästchen wird entlang der X-Achse verschoben und das zweite Kästchen wird entlang der X- und Y-Achsen verschoben.
Das dritte Kästchen wird entlang der X-, Y- und Z-Achsen verschoben und hat das Erscheinungsbild, sich dem Betrachter zu nähern, durch die Hinzufügung von {{cssxref('perspective')}} zum Elternelement.

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

> [!NOTE]
> Skew ist kein unabhängiger Transformationswert.
