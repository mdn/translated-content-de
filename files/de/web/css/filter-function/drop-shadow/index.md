---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`drop-shadow()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wendet einen Schlagschatteneffekt auf das Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

Ein Schlagschatten ist im Wesentlichen eine verschwommene, versetzte Version der Alpha-Maske des Eingabebildes, die in einer bestimmten Farbe gezeichnet und unter dem Bild zusammengesetzt wird.

> [!NOTE]
> Diese Funktion ist der Eigenschaft {{Cssxref("box-shadow")}} etwas ähnlich. Die `box-shadow`-Eigenschaft erzeugt einen rechteckigen Schatten hinter dem _gesamten Kasten_ eines Elements, während die `drop-shadow()`-Filterfunktion einen Schatten erzeugt, der der Form (Alphakanal) des _Bildes selbst_ entspricht.

## Syntax

```css
/* Two length values */
/* drop-shadow( <length> <length> ) */
drop-shadow(5px 5px)

/* Three length values */
/* drop-shadow( <length> <length> <length> ) */
drop-shadow(5px 5px 15px)

/* Two length values and a color */
/* drop-shadow( <length> <length> <color> ) */
drop-shadow(5px 5px red)

/* Three length values and a color */
/* drop-shadow( <length> <length> <length> <color> ) */
drop-shadow(5px 5px 15px red)

/* The order of color and length values can be changed */
/* drop-shadow( <color> <length> <length> <length> ) */
drop-shadow(#e23 0.5rem 0.5rem 1rem)
```

Die `drop-shadow()`-Funktion akzeptiert einen Parameter vom Typ `<shadow>` (definiert in der Eigenschaft {{cssxref("box-shadow")}}), mit der Ausnahme, dass das Schlüsselwort `inset` und die Parameter `spread` nicht erlaubt sind.

### Parameter

- `<color>` {{optional_inline}}

  - : Gibt die Farbe für den Schatten an. Wenn nicht angegeben, wird der Wert der {{cssxref("color")}}-Eigenschaft des übergeordneten Elements verwendet.

- `<length>`
  - : Gibt die Versetzungslänge des Schattens an. Dieser Parameter akzeptiert zwei oder drei Werte. Wenn zwei Werte angegeben werden, werden sie als `<offset-x>` (horizontale Versetzung) und `<offset-y>` (vertikale Versetzung) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element. Wenn nicht angegeben, wird der Wert `0` für die fehlende Länge verwendet. Wenn ein dritter Wert angegeben wird, wird er als `<standard-deviation>` interpretiert, was der Wert der Standardabweichung für die [Gaussian Blur](https://en.wikipedia.org/wiki/Gaussian_blur)-Funktion ist. Ein größerer `<standard-deviation>`-Wert erzeugt einen größeren und unschärferen Schatten. Negative Werte für `<standard-deviation>` sind nicht erlaubt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen eines Schlagschattens

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
<div>drop-shadow(-16px -16px red)</div>
```

```css
div {
  display: inline-block;
  margin: 0 0.5rem 2rem 1rem;
  padding: 0.5rem;
  height: 100px;
  width: 190px;
  vertical-align: top;
  background-color: #222;

  color: lime;
}

div:nth-child(1) {
  filter: drop-shadow(16px 16px);
}

div:nth-child(2) {
  filter: drop-shadow(16px 16px red);
}

div:nth-child(3) {
  filter: drop-shadow(red 1rem 1rem 10px);
}

div:nth-child(4) {
  filter: drop-shadow(-16px -6px red);
}
```

{{EmbedLiveSample("Einstellen eines Schlagschattens", "100%", "300px")}}

Ohne einen `<color>`-Wert in der `drop-shadow()`-Funktion im ersten Kasten verwendet der Schatten den Wert der `color`-Eigenschaft des Elements (`lime`). Die zweiten und dritten Schatten zeigen, dass die Längen- und Farbwerte in beliebiger Reihenfolge angegeben werden können. Der dritte Schatten zeigt den Unschärfeeffekt, wenn ein dritter `<length>`-Wert angegeben wird. Der vierte Schatten verwendet negative Versetzungen, die den Schatten nach links und oben verschieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}}-Funktionen, die in den Werten der {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet werden können, sind:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
- Eigenschaft {{cssxref("box-shadow")}}
- Eigenschaft {{cssxref("text-shadow")}}
