---
title: background-position-y
slug: Web/CSS/Reference/Properties/background-position-y
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`background-position-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche vertikale Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsebene, die durch {{cssxref("background-origin")}} festgelegt wurde.

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

Der Wert dieser Eigenschaft wird von jeder Deklaration der {{cssxref("background")}} oder {{cssxref("background-position")}} Kurzform-Eigenschaften für das Element überschrieben, wenn sie danach angewendet werden.

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

Die Eigenschaft `background-position-y` wird als ein oder mehrere Werte angegeben, die durch Kommas getrennt sind.

### Werte

- `top`
  - : Richtet die obere Kante des Hintergrundbildes an der oberen Kante der Hintergrundpositionsebene aus.
- `center`
  - : Richtet das vertikale Zentrum des Hintergrundbildes an dem vertikalen Zentrum der Hintergrundpositionsebene aus.
- `bottom`
  - : Richtet die untere Kante des Hintergrundbildes an der unteren Kante der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der horizontalen Kante des gegebenen Hintergrundbildes von der entsprechenden oberen horizontalen Kante der Hintergrundpositionsebene. (Einige Browser erlauben die Zuweisung der unteren Kante für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der vertikalen Position des gegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0 % bedeutet, dass die obere Kante des Hintergrundbildes mit der oberen Kante des Containers ausgerichtet ist. Ein Wert von 100 % bedeutet, dass die _untere_ Kante des Hintergrundbildes mit der _unteren_ Kante des Containers ausgerichtet ist, daher zentriert ein Wert von 50 % das Hintergrundbild vertikal.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine Hintergrundbildimplementierung, bei der `background-position-x` und `background-position-y` verwendet werden, um die horizontalen und vertikalen Positionen des Bildes separat zu definieren.

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

### Seitenbezogene Werte

Das folgende Beispiel zeigt die Unterstützung für die seitenspezifische Versatzsyntax, die es Entwicklern ermöglicht, den Hintergrund von jeder Kante zu verschieben.

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
