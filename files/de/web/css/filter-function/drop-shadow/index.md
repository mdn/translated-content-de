---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`drop-shadow()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wendet einen Schlagschatten-Effekt auf das Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

Ein Schlagschatten ist im Wesentlichen eine verwischte, verschobene Version der Alphamaske des Eingabebildes, die in einer bestimmten Farbe gezeichnet und unter dem Bild zusammengesetzt wird.

> [!NOTE]
> Diese Funktion ist der {{Cssxref("box-shadow")}}-Eigenschaft etwas ähnlich. Die `box-shadow`-Eigenschaft erzeugt einen rechteckigen Schatten hinter dem _gesamten Kasten_ eines Elements, während die `drop-shadow()`-Filterfunktion einen Schatten erzeugt, der sich an die Form (Alphakanal) des _Bildes selbst_ anpasst.

## Syntax

```css
/* Zwei Längenwerte */
/* drop-shadow( <length> <length> ) */
drop-shadow(5px 5px)

/* Drei Längenwerte */
/* drop-shadow( <length> <length> <length> ) */
drop-shadow(5px 5px 15px)

/* Zwei Längenwerte und eine Farbe */
/* drop-shadow( <length> <length> <color> ) */
drop-shadow(5px 5px red)

/* Drei Längenwerte und eine Farbe */
/* drop-shadow( <length> <length> <length> <color> ) */
drop-shadow(5px 5px 15px red)

/* Die Reihenfolge von Farb- und Längenwerten kann geändert werden */
/* drop-shadow( <color> <length> <length> <length> ) */
drop-shadow(#e23 0.5rem 0.5rem 1rem)
```

Die `drop-shadow()`-Funktion akzeptiert einen Parameter vom Typ `<shadow>` (definiert in der {{cssxref("box-shadow")}}-Eigenschaft), mit der Ausnahme, dass das Schlüsselwort `inset` und die `spread`-Parameter nicht erlaubt sind.

### Parameter

- `<color>` {{optional_inline}}

  - : Gibt die Farbe für den Schatten an. Wenn nicht angegeben, wird der Wert der im übergeordneten Element definierten {{cssxref("color")}}-Eigenschaft verwendet.

- `<length>`
  - : Gibt die Versatzlänge des Schattens an. Dieser Parameter akzeptiert zwei oder drei Werte. Wenn zwei Werte angegeben werden, werden sie als `<offset-x>` (horizontaler Versatz) und `<offset-y>` (vertikaler Versatz) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links von dem Element. Ein negativer `<offset-y>`-Wert platziert den Schatten über dem Element. Wenn nicht angegeben, wird für die fehlende Länge der Wert `0` verwendet. Wenn ein dritter Wert angegeben wird, wird er als `<standard-deviation>` interpretiert, was den Wert der Standardabweichung für die [Gaussian Blur](https://en.wikipedia.org/wiki/Gaussian_blur)-Funktion darstellt. Ein größerer `<standard-deviation>`-Wert erzeugt einen größeren und verwischteren Schatten. Negative Werte für `<standard-deviation>` sind nicht erlaubt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einen Schlagschatten setzen

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

{{EmbedLiveSample("Setting a drop shadow", "100%", "300px")}}

In Abwesenheit eines `<color>`-Wertes in der `drop-shadow()`-Funktion im ersten Kasten verwendet der Schatten den Wert der `color`-Eigenschaft des Elements (`lime`). Die zweiten und dritten Schatten zeigen, dass die Längen- und Farbwerte in beliebiger Reihenfolge angegeben werden können. Der dritte Schatten zeigt den Wischeffekt, wenn ein dritter `<length>`-Wert angegeben wird. Der vierte Schatten verwendet negative Versätze, die den Schatten nach links und oben verschieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}}-Funktionen, die in Werten der {{cssxref("filter")}}- und {{cssxref("backdrop-filter")}}-Eigenschaften verwendet werden können, sind:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
- {{cssxref("box-shadow")}}-Eigenschaft
- {{cssxref("text-shadow")}}-Eigenschaft
