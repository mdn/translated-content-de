---
title: background-position-y
slug: Web/CSS/Reference/Properties/background-position-y
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`background-position-y`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die anfängliche vertikale Position für jedes Hintergrundbild fest. Die Position ist relativ zu der durch {{cssxref("background-origin")}} festgelegten Positionsebene.

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

Der Wert dieser Eigenschaft wird durch jede Deklaration der Kurzeigenschaften {{cssxref("background")}} oder {{cssxref("background-position")}} überschrieben, die danach auf das Element angewendet wird.

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

Die `background-position-y`-Eigenschaft wird als ein oder mehrere Werte angegeben, die durch Kommas getrennt sind.

### Werte

- `top`
  - : Richtet die obere Kante des Hintergrundbildes an der oberen Kante der Hintergrundpositionsebene aus.
- `center`
  - : Richtet die vertikale Mitte des Hintergrundbildes an der vertikalen Mitte der Hintergrundpositionsebene aus.
- `bottom`
  - : Richtet die untere Kante des Hintergrundbildes an der unteren Kante der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der vertikalen Kante des angegebenen Hintergrundbildes von der oberen horizontalen Kante der entsprechenden Hintergrundpositionsebene. (Einige Browser erlauben die Zuweisung der unteren Kante für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der vertikalen Position des angegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass die obere Kante des Hintergrundbildes mit der oberen Kante des Containers ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _untere_ Kante des Hintergrundbildes mit der _unteren_ Kante des Containers ausgerichtet ist. Somit zentriert ein Wert von 50% das Hintergrundbild vertikal.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine Umsetzung eines Hintergrundbildes, bei der `background-position-x` und `background-position-y` verwendet werden, um die horizontale und vertikale Position des Bildes separat zu definieren.

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

### Seiten-relative Werte

Das folgende Beispiel zeigt die Unterstützung für die seitenrelativen Versatzsyntax, die es dem Entwickler ermöglicht, den Hintergrund von jeder Kante versetzen zu können.

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
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
