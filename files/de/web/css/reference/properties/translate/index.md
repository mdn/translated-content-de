---
title: "`translate` CSS property"
short-title: translate
slug: Web/CSS/Reference/Properties/translate
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`translate`** ermöglicht es Ihnen, Verschiebungstransformationen einzeln und unabhängig von der Eigenschaft {{CSSxRef("transform")}} festzulegen. Dies entspricht besser der typischen Verwendung von Benutzeroberflächen und erspart es, sich die genaue Reihenfolge der Transformationsfunktionen merken zu müssen, die im Wert von `transform` angegeben werden soll.

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
/* Keyword value */
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
  - : Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, der eine Verschiebung entlang der X-Achse angibt. Entspricht einer `translate()`-Funktion (2D-Verschiebung) mit einem einzelnen angegebenen Wert.
- Zwei {{cssxref("&lt;length-percentage&gt;")}}-Werte
  - : Zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die Verschiebungswerte der X- bzw. Y-Achse einer 2D-Verschiebung angeben. Entspricht einer `translate()`-Funktion (2D-Verschiebung) mit zwei angegebenen Werten.
- Drei Werte
  - : Zwei {{cssxref("&lt;length-percentage&gt;")}}- und ein einzelner {{cssxref("&lt;length&gt;")}}-Wert, die die Verschiebungswerte der X-, Y- bzw. Z-Achse einer 3D-Verschiebung angeben. Entspricht einer `translate3d()`-Funktion (3D-Verschiebung).
- `none`
  - : Gibt an, dass keine Verschiebung angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verschieben eines Elements beim Darüberfahren mit der Maus

Dieses Beispiel zeigt, wie die Eigenschaft `translate` verwendet wird, um ein Element entlang dreier Achsen zu verschieben.
Das erste Feld wird entlang der X-Achse verschoben und das zweite Feld entlang der X- und Y-Achse.
Das dritte Feld wird entlang der X-, Y- und Z-Achse verschoben und wirkt aufgrund des Hinzufügens von {{cssxref('perspective')}} zum übergeordneten Element so, als würde es sich auf den Betrachter zubewegen.

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

Hinweis: `skew` ist kein unabhängiger Transformationswert
