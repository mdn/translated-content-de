---
title: background-position-y
slug: Web/CSS/background-position-y
l10n:
  sourceCommit: b90786a572bd01af9063ac5e515850c6bb5ddb89
---

{{CSSRef}}

Die **`background-position-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche vertikale Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsschicht, die durch {{cssxref("background-origin")}} festgelegt wird.

{{EmbedInteractiveExample("pages/css/background-position-y.html")}}

<!-- Der Quellcode für dieses interaktive Beispiel ist in einem GitHub-Repository gespeichert. Wenn Sie zum interaktiven Beispielprojekt beitragen möchten, klonen Sie bitte https://github.com/mdn/interactive-examples und senden Sie uns einen Pull-Request. -->

Der Wert dieser Eigenschaft wird von jeder Deklaration der {{cssxref("background")}} oder {{cssxref("background-position")}} Kurzschreibweise überschrieben, die danach auf das Element angewendet wird.

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

Die Eigenschaft `background-position-y` wird als ein oder mehrere Werte angegeben, getrennt durch Kommas.

### Werte

- `top`
  - : Richtet die obere Kante des Hintergrundbilds an der oberen Kante der Hintergrundpositionsschicht aus.
- `center`
  - : Richtet das vertikale Zentrum des Hintergrundbilds an dem vertikalen Zentrum der Hintergrundpositionsschicht aus.
- `bottom`
  - : Richtet die untere Kante des Hintergrundbilds an der unteren Kante der Hintergrundpositionsschicht aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der horizontalen Kante des gegebenen Hintergrundbildes von der oberen horizontalen Kante der entsprechenden Hintergrundpositionsschicht. (Einige Browser erlauben die Zuweisung der unteren Kante für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der vertikalen Position des gegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass die obere Kante des Hintergrundbilds mit der oberen Kante des Containers ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _untere_ Kante des Hintergrundbilds mit der _unteren_ Kante des Containers ausgerichtet ist, sodass ein Wert von 50% das Hintergrundbild vertikal zentriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine einfache Implementierung eines Hintergrundbildes, bei der background-position-x und background-position-y verwendet werden, um die horizontale und vertikale Position des Bildes separat zu definieren.

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

### Seitenbezogene Werte

Das folgende Beispiel zeigt die Unterstützung der syntax für seitenbezogene Versätze, die es dem Entwickler ermöglichen, den Hintergrund von jeder Kante aus zu versetzen.

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
- {{cssxref("background-position-x")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
