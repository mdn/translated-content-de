---
title: background-position-x
slug: Web/CSS/Reference/Properties/background-position-x
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`background-position-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die initiale horizontale Position für jedes Hintergrundbild fest. Die Position ist relativ zu der durch {{cssxref("background-origin")}} festgelegten Positionsschicht.

{{InteractiveExample("CSS Demo: background-position-x")}}

```css interactive-example-choice
background-position-x: left;
```

```css interactive-example-choice
background-position-x: center;
```

```css interactive-example-choice
background-position-x: 25%;
```

```css interactive-example-choice
background-position-x: 2rem;
```

```css interactive-example-choice
background-position-x: right 32px;
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

Der Wert dieser Eigenschaft wird von jeder Deklaration der Kurzschreibweise {{cssxref("background")}} oder {{cssxref("background-position")}} überschrieben, die nachträglich auf das Element angewendet wird.

## Syntax

```css
/* Keyword values */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* <percentage> values */
background-position-x: 25%;

/* <length> values */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Side-relative values */
background-position-x: right 3px;
background-position-x: left 25%;

/* Multiple values */
background-position-x: 0px, center;

/* Global values */
background-position-x: inherit;
background-position-x: initial;
background-position-x: revert;
background-position-x: revert-layer;
background-position-x: unset;
```

Die `background-position-x` Eigenschaft wird als ein oder mehrere Werte angegeben, die durch Kommas getrennt sind.

### Werte

- `left`
  - : Richtet den linken Rand des Hintergrundbildes am linken Rand der Hintergrundpositionsebene aus.
- `center`
  - : Richtet die Mitte des Hintergrundbildes an der Mitte der Hintergrundpositionsebene aus.
- `right`
  - : Richtet den rechten Rand des Hintergrundbildes am rechten Rand der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz des linken vertikalen Randes des angegebenen Hintergrundbildes vom linken vertikalen Rand der Hintergrundpositionsebene. (Einige Browser erlauben das Zuweisen des rechten Randes für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der horizontalen Position des gegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass der linke Rand des Hintergrundbildes mit dem linken Rand des Containers übereinstimmt, und ein Wert von 100% bedeutet, dass der _rechte_ Rand des Hintergrundbildes mit dem _rechten_ Rand des Containers übereinstimmt, sodass ein Wert von 50% das Hintergrundbild horizontal zentriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine Implementierung eines Hintergrundbildes, bei der background-position-x und background-position-y verwendet werden, um die horizontale und vertikale Position des Bildes separat zu definieren.

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

### Seitenrelativierte Werte

Das folgende Beispiel zeigt die Unterstützung für seitenrelative Offset-Syntax, die es dem Entwickler ermöglicht, den Hintergrund von jedem Rand aus zu versetzen.

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
- {{cssxref("background-position-y")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
