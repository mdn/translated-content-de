---
title: scale
slug: Web/CSS/scale
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`scale`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, Skalentransformationen individuell und unabhängig von der {{CSSxRef("transform")}}-Eigenschaft zu spezifizieren. Dies entspricht besser der typischen Nutzung in Benutzeroberflächen und erspart das Merken der genauen Reihenfolge von Transformationsfunktionen, die im `transform`-Wert angegeben werden müssen.

{{InteractiveExample("CSS Demo: scale")}}

```css interactive-example-choice
scale: none;
```

```css interactive-example-choice
scale: 1.5;
```

```css interactive-example-choice
scale: 1.7 50%;
```

```css interactive-example-choice
scale: 1 -1;
```

```css interactive-example-choice
scale: 1.2 1.2 2;
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
scale: none;

/* Single values */
/* values of more than 1 or 100% make the element grow */
scale: 2;
/* values of less than 1 or 100% make the element shrink */
scale: 50%;

/* Two values */
scale: 2 0.5;

/* Three values */
scale: 200% 50% 200%;

/* Global values */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

### Werte

- Einzelner Wert
  - : Eine {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Angabe, die den Skalierungsfaktor spezifiziert, um das betroffene Element gleichmäßig entlang der X- und Y-Achsen zu skalieren. Entspricht einer `scale()` (2D-Skalierung) Funktion mit einem einzelnen Wert.
- Zwei Werte
  - : Zwei {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte, die die X- und Y-Achsen-Skalierungswerte (jeweils) einer 2D-Skalierung angeben. Entspricht einer `scale()` (2D-Skalierung) Funktion mit zwei Werten.
- Drei Werte
  - : Drei {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte, die die X-, Y- und Z-Achsen-Skalierungswerte (jeweils) einer 3D-Skalierung angeben. Entspricht einer `scale3d()` (3D-Skalierung) Funktion.
- `none`
  - : Gibt an, dass keine Skalierung angewendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Skalierung eines Elements bei Hover

Das folgende Beispiel zeigt, wie man ein Element bei Hover skaliert.
Es werden zwei Boxen angezeigt, eine mit einem einzelnen `scale`-Wert, der das Element entlang beider Achsen skaliert.
Die zweite Box hat zwei `scale`-Werte, die das Element unabhängig entlang der X- und Y-Achsen skalieren.

#### HTML

```html
<div class="box" id="box1">single value</div>
<div class="box" id="box2">two values</div>
```

#### CSS

```css
.box {
  float: left;
  margin: 1em;
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}

#box1:hover {
  scale: 1.25;
}

#box2:hover {
  scale: 1.25 0.75;
}
```

#### Ergebnis

{{EmbedLiveSample("Scaling_an_element_on_hover", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('translate')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Hinweis: skew ist kein unabhängiger Transformationswert
