---
title: background-position-x
slug: Web/CSS/background-position-x
l10n:
  sourceCommit: b90786a572bd01af9063ac5e515850c6bb5ddb89
---

{{CSSRef}}

Die **`background-position-x`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die anfängliche horizontale Position für jedes Hintergrundbild. Die Position ist relativ zur Positionsebene, die durch {{cssxref("background-origin")}} gesetzt wird.

{{EmbedInteractiveExample("pages/css/background-position-x.html")}}

<!-- Der Quellcode für dieses interaktive Beispiel ist in einem GitHub-Repository gespeichert. Wenn Sie zum Projekt der interaktiven Beispiele beitragen möchten, klonen Sie bitte https://github.com/mdn/interactive-examples und senden Sie uns einen Pull-Request. -->

Der Wert dieser Eigenschaft wird von jeder Deklaration der Kurzform-Eigenschaften {{cssxref("background")}} oder {{cssxref("background-position")}} außer Kraft gesetzt, wenn sie anschließend auf das Element angewendet werden.

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

Die `background-position-x` Eigenschaft wird als ein oder mehrere Werte angegeben, getrennt durch Kommas.

### Werte

- `left`
  - : Richtet den linken Rand des Hintergrundbildes am linken Rand der Hintergrundpositionsebene aus.
- `center`
  - : Richtet die Mitte des Hintergrundbildes an der Mitte der Hintergrundpositionsebene aus.
- `right`
  - : Richtet den rechten Rand des Hintergrundbildes am rechten Rand der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der linken vertikalen Kante des gegebenen Hintergrundbildes von der linken vertikalen Kante der Hintergrundpositionsebene. (Einige Browser erlauben die Zuweisung der rechten Kante zum Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der horizontalen Position des gegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass der linke Rand des Hintergrundbildes mit dem linken Rand des Containers übereinstimmt, und ein Wert von 100% bedeutet, dass der _rechte_ Rand des Hintergrundbildes mit dem _rechten_ Rand des Containers übereinstimmt, daher zentriert ein Wert von 50% das Hintergrundbild horizontal.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine einfache Implementierung eines Hintergrundbildes, wobei background-position-x und background-position-y verwendet werden, um die horizontale und vertikale Position des Bildes separat zu definieren.

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

### Kanten-relative Werte

Das folgende Beispiel zeigt die Unterstützung der syntax-seitigen Versatzsyntax, die es dem Entwickler ermöglicht, den Hintergrund von jeder Kante zu versetzen.

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
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
