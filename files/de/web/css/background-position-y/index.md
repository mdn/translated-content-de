---
title: background-position-y
slug: Web/CSS/background-position-y
l10n:
  sourceCommit: b90786a572bd01af9063ac5e515850c6bb5ddb89
---

{{CSSRef}}

Die **`background-position-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche vertikale Position für jedes Hintergrundbild fest. Die Position bezieht sich auf die Positionsebene, die durch {{cssxref("background-origin")}} festgelegt wird.

{{EmbedInteractiveExample("pages/css/background-position-y.html")}}

<!-- Der Quellcode für dieses interaktive Beispiel wird in einem GitHub-Repository gespeichert. Wenn Sie zum Projekt der interaktiven Beispiele beitragen möchten, klonen Sie bitte https://github.com/mdn/interactive-examples und senden Sie uns einen Pull-Request. -->

Der Wert dieser Eigenschaft wird durch jede Deklaration der {{cssxref("background")}} oder {{cssxref("background-position")}} Kurzschreibweise, die dem Element danach zugewiesen wird, überschrieben.

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
  - : Richtet die obere Kante des Hintergrundbildes mit der oberen Kante der Hintergrundpositionsebene aus.
- `center`
  - : Richtet die vertikale Mitte des Hintergrundbildes mit der vertikalen Mitte der Hintergrundpositionsebene aus.
- `bottom`
  - : Richtet die untere Kante des Hintergrundbildes mit der unteren Kante der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der angegebenen horizontalen Kante des Hintergrundbildes von der entsprechenden oberen horizontalen Kante der Hintergrundpositionsebene. (Einige Browser erlauben die Zuweisung der unteren Kante für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der vertikalen Position des angegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass die obere Kante des Hintergrundbildes mit der oberen Kante des Containers ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _untere_ Kante des Hintergrundbildes mit der _unteren_ Kante des Containers ausgerichtet ist, so dass ein Wert von 50% das Hintergrundbild vertikal zentriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine einfache Implementierung eines Hintergrundbildes, bei der `background-position-x` und `background-position-y` verwendet werden, um die horizontalen und vertikalen Positionen des Bildes separat zu definieren.

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

### Seitrelationale Werte

Das folgende Beispiel zeigt die Unterstützung der seitrelationale Versatzsyntax, die es dem Entwickler ermöglicht, den Hintergrund von jeder Kante aus zu versetzen.

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
