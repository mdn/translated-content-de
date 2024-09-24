---
title: background-position-y
slug: Web/CSS/background-position-y
l10n:
  sourceCommit: b90786a572bd01af9063ac5e515850c6bb5ddb89
---

{{CSSRef}}

Die **`background-position-y`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die anfängliche vertikale Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsebene, die durch {{cssxref("background-origin")}} festgelegt wird.

{{EmbedInteractiveExample("pages/css/background-position-y.html")}}

<!-- Der Quellcode für dieses interaktive Beispiel ist in einem GitHub-Repository gespeichert. Wenn Sie zum Projekt der interaktiven Beispiele beitragen möchten, klonen Sie bitte https://github.com/mdn/interactive-examples und senden Sie uns eine Pull-Anfrage. -->

Der Wert dieser Eigenschaft wird durch jede Deklaration der Kurzform-Eigenschaften {{cssxref("background")}} oder {{cssxref("background-position")}}, die auf das Element danach angewendet werden, überschrieben.

## Syntax

```css
/* Schlüsselwortwerte */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* <Prozentsatz> Werte */
background-position-y: 25%;

/* <Längen> Werte */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Seitenrelative Werte */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Mehrere Werte */
background-position-y: 0px, center;

/* Globale Werte */
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
  - : Richtet das vertikale Zentrum des Hintergrundbildes am vertikalen Zentrum der Hintergrundpositionsebene aus.
- `bottom`
  - : Richtet die untere Kante des Hintergrundbildes an der unteren Kante der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der horizontalen Kante des gegebenen Hintergrundbildes von der oberen horizontalen Kante der entsprechenden Hintergrundpositionsebene. (Einige Browser erlauben das Zuweisen der unteren Kante für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der vertikalen Position des gegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass die obere Kante des Hintergrundbildes mit der oberen Kante des Containers ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _untere_ Kante des Hintergrundbildes mit der _unteren_ Kante des Containers ausgerichtet ist, daher zentriert ein Wert von 50% das Hintergrundbild vertikal.

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

### Seitenrelative Werte

Das folgende Beispiel zeigt die Unterstützung für das seitenrelative Versatz-Syntax, die es dem Entwickler ermöglicht, den Hintergrund von jeder Kante zu versetzen.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{cssxref("background-position")}}
- {{cssxref("background-position-x")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
