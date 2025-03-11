---
title: background-position-y
slug: Web/CSS/background-position-y
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`background-position-y`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt die anfängliche vertikale Position für jedes Hintergrundbild. Die Position ist relativ zur Positionsschicht, die durch {{cssxref("background-origin")}} festgelegt wird.

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

<!-- Der Quellcode für dieses interaktive Beispiel ist in einem GitHub-Repository gespeichert. Wenn Sie zum Projekt der interaktiven Beispiele beitragen möchten, klonen Sie bitte https://github.com/mdn/interactive-examples und senden Sie uns einen Pull-Request. -->

Der Wert dieser Eigenschaft wird durch jede Deklaration der Kurzschreibweiseigenschaften {{cssxref("background")}} oder {{cssxref("background-position")}}, die dem Element später zugewendet werden, überschrieben.

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

Die Eigenschaft `background-position-y` wird als ein oder mehrere Werte angegeben, die durch Kommata getrennt sind.

### Werte

- `top`
  - : Richtet die obere Kante des Hintergrundbildes an der oberen Kante der Hintergrundpositionsebene aus.
- `center`
  - : Richtet das vertikale Zentrum des Hintergrundbildes am vertikalen Zentrum der Hintergrundpositionsebene aus.
- `bottom`
  - : Richtet die untere Kante des Hintergrundbildes an der unteren Kante der Hintergrundpositionsebene aus.
- {{cssxref("&lt;length&gt;")}}
  - : Der Versatz der horizontalen Kante des angegebenen Hintergrundbildes von der entsprechenden oberen horizontalen Kante der Hintergrundpositionsebene. (Einige Browser erlauben die Zuweisung der unteren Kante für den Versatz).
- {{cssxref("&lt;percentage&gt;")}}
  - : Der Versatz der vertikalen Position des angegebenen Hintergrundbildes relativ zum Behälter. Ein Wert von 0% bedeutet, dass die obere Kante des Hintergrundbildes mit der oberen Kante des Behälters ausgerichtet ist, und ein Wert von 100% bedeutet, dass die _untere_ Kante des Hintergrundbildes mit der _unteren_ Kante des Behälters ausgerichtet ist, sodass ein Wert von 50% das Hintergrundbild vertikal zentriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel zeigt eine Implementierung eines Hintergrundbildes, bei der background-position-x und background-position-y verwendet werden, um die horizontalen und vertikalen Positionen des Bildes separat zu definieren.

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

#### Resultat

{{EmbedLiveSample('Basic_example', '100%', 300)}}

### Seitenspezifische Werte

Das folgende Beispiel zeigt die Unterstützung der seitenspezifischen Versatzsyntax, die es dem Entwickler ermöglicht, den Hintergrund von jeder Kante aus zu versetzen.

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

#### Resultat

{{EmbedLiveSample('Side-relative_values', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-position")}}
- {{cssxref("background-position-x")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
