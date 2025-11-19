---
title: background-position-y
slug: Web/CSS/Reference/Properties/background-position-y
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`background-position-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche vertikale Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsebene, die durch {{cssxref("background-origin")}} festgelegt wird.

Der Wert dieser Eigenschaft wird durch jede Deklaration der Kurzformen {{cssxref("background")}} oder {{cssxref("background-position")}}, die auf das Element danach angewendet werden, überschrieben.

{{InteractiveExample("CSS Demo: background-position-y")}}

```css interactive-example-choice
background-position-y: top;
```

```css interactive-example-choice
background-position-y: center;
```

```css interactive-example-choice
background-position-y: 25%;
```

```css interactive-example-choice
background-position-y: 2rem;
```

```css interactive-example-choice
background-position-y: bottom 32px;
```

```html interactive-example
<section class="display-block" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: navajowhite;
  background-image: url("/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  height: 100%;
}
```

## Syntax

```css
/* Keyword values */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* <percentage> values */
background-position-y: 25%;

/* <length> values */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Side-relative values */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Multiple values */
background-position-y: 0px, center;

/* Global values */
background-position-y: inherit;
background-position-y: initial;
background-position-y: revert;
background-position-y: revert-layer;
background-position-y: unset;
```

Die `background-position-y` Eigenschaft wird als ein oder mehrere Werte angegeben, die durch Kommas getrennt sind.

### Werte

- `top`
  - : Richtet die obere Kante des Hintergrundbildes an der oberen Kante der Hintergrundpositionsebene aus.
- `center`
  - : Richtet das vertikale Zentrum des Hintergrundbildes am vertikalen Zentrum der Hintergrundpositionsebene aus.
- `bottom`
  - : Richtet die untere Kante des Hintergrundbildes an der unteren Kante der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der horizontalen Kante des angegebenen Hintergrundbildes von der oberen horizontalen Kante der entsprechenden Hintergrundpositionsebene. (Einige Browser erlauben das Festlegen des unteren Randes für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der vertikalen Position des angegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass die obere Kante des Hintergrundbildes mit der oberen Kante des Containers ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _untere_ Kante des Hintergrundbildes mit der _unteren_ Kante des Containers ausgerichtet ist, so dass ein Wert von 50% das Hintergrundbild vertikal zentriert.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine Implementierung eines Hintergrundbildes, bei der `background-position-x` und `background-position-y` verwendet werden, um die horizontalen und vertikalen Positionen des Bildes separat zu definieren.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background-color: skyblue;
  background-image: url("https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example', '100%', 300)}}

### Seitenrelative Werte

Das folgende Beispiel zeigt die Unterstützung der seitenrelativen Offset-Syntax, die es dem Entwickler ermöglicht, das Hintergrundbild von jeder Kante aus zu versetzen.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background-color: seagreen;
  background-image: url("https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png");
  background-repeat: no-repeat;
  background-position-x: right 20px;
  background-position-y: bottom 10px;
}
```

#### Ergebnis

{{EmbedLiveSample('Side-relative_values', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-position")}}
- {{cssxref("background-position-x")}}
- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
