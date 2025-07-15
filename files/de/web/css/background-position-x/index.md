---
title: background-position-x
slug: Web/CSS/background-position-x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`background-position-x`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die anfängliche horizontale Position für jedes Hintergrundbild fest. Die Position ist relativ zur durch {{cssxref("background-origin")}} festgelegten Positionsebene.

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

<!-- Der Quellcode für dieses interaktive Beispiel ist in einem GitHub-Repository gespeichert. Wenn Sie zum Projekt der interaktiven Beispiele beitragen möchten, klonen Sie bitte https://github.com/mdn/interactive-examples und senden Sie uns einen Pull-Request. -->

Der Wert dieser Eigenschaft wird durch jede Deklaration der Kurzschreibweisen {{cssxref("background")}} oder {{cssxref("background-position")}}, die nachträglich auf das Element angewendet werden, überschrieben.

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

Die `background-position-x`-Eigenschaft wird als ein oder mehrere Werte spezifiziert, getrennt durch Kommas.

### Werte

- `left`
  - : Richtet die linke Kante des Hintergrundbildes an der linken Kante der Hintergrundpositionsebene aus.
- `center`
  - : Richtet die Mitte des Hintergrundbildes an der Mitte der Hintergrundpositionsebene aus.
- `right`
  - : Richtet die rechte Kante des Hintergrundbildes an der rechten Kante der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der linken vertikalen Kante des gegebenen Hintergrundbildes von der linken vertikalen Kante der Hintergrundpositionsebene. (Einige Browser erlauben die Zuweisung der rechten Kante für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der horizontalen Position des gegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass die linke Kante des Hintergrundbildes mit der linken Kante des Containers ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _rechte_ Kante des Hintergrundbildes mit der _rechten_ Kante des Containers ausgerichtet ist, sodass ein Wert von 50% das Hintergrundbild horizontal in der Mitte ausrichtet.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine Implementierung eines Hintergrundbildes, bei der `background-position-x` und `background-position-y` verwendet werden, um die horizontale und vertikale Position des Bildes getrennt zu definieren.

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
  background-image: url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_example', '100%', 300)}}

### Seiten-relative Werte

Das folgende Beispiel zeigt die Unterstützung für die seiten-relative Offset-Syntax, die es dem Entwickler ermöglicht, den Hintergrund von jeder Kante zu versetzen.

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
  background-image: url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png);
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
- [Mit mehreren Hintergründen arbeiten](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
