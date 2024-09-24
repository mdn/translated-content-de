---
title: background-position-x
slug: Web/CSS/background-position-x
l10n:
  sourceCommit: b90786a572bd01af9063ac5e515850c6bb5ddb89
---

{{CSSRef}}

Die **`background-position-x`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die anfängliche horizontale Position für jedes Hintergrundbild fest. Die Position ist relativ zur Positionsschicht, die durch {{cssxref("background-origin")}} festgelegt wird.

{{EmbedInteractiveExample("pages/css/background-position-x.html")}}

<!-- Der Quellcode für dieses interaktive Beispiel ist in einem GitHub-Repository gespeichert. Wenn Sie zum interaktiven Beispiele-Projekt beitragen möchten, klonen Sie bitte https://github.com/mdn/interactive-examples und senden Sie uns einen Pull-Request. -->

Der Wert dieser Eigenschaft wird durch jede Deklaration der Kurzschreibeigenschaften {{cssxref("background")}} oder {{cssxref("background-position")}}, die nachträglich auf das Element angewendet werden, überschrieben.

## Syntax

```css
/* Schlüsselwortwerte */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* <Prozent> Werte */
background-position-x: 25%;

/* <Länge> Werte */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Seitenabhängige Werte */
background-position-x: right 3px;
background-position-x: left 25%;

/* Mehrere Werte */
background-position-x: 0px, center;

/* Globale Werte */
background-position-x: inherit;
background-position-x: initial;
background-position-x: revert;
background-position-x: revert-layer;
background-position-x: unset;
```

Die `background-position-x`-Eigenschaft wird als ein oder mehrere Werte angegeben, die durch Kommata getrennt sind.

### Werte

- `left`
  - : Richtet den linken Rand des Hintergrundbildes mit dem linken Rand der Hintergrundpositionsschicht aus.
- `center`
  - : Richtet die Mitte des Hintergrundbildes mit der Mitte der Hintergrundpositionsschicht aus.
- `right`
  - : Richtet den rechten Rand des Hintergrundbildes mit dem rechten Rand der Hintergrundpositionsschicht aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der linken vertikalen Kante des gegebenen Hintergrundbildes von der linken vertikalen Kante der Hintergrundpositionsschicht. (Einige Browser ermöglichen die Zuordnung des rechten Randes für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der horizontalen Position des gegebenen Hintergrundbildes relativ zum Container. Ein Wert von 0% bedeutet, dass die linke Kante des Hintergrundbildes mit der linken Kante des Containers ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _rechte_ Kante des Hintergrundbildes mit der _rechten_ Kante des Containers ausgerichtet ist. Ein Wert von 50% zentriert das Hintergrundbild horizontal.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

Das folgende Beispiel zeigt eine einfache Hintergrundbildimplementierung, bei der background-position-x und background-position-y verwendet werden, um die horizontale und vertikale Position des Bildes separat zu definieren.

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

### Seitenabhängige Werte

Das folgende Beispiel zeigt die Unterstützung der Syntax für seitenabhängige Versätze, die dem Entwickler ermöglicht, den Hintergrund von jedem Rand zu versetzen.

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
