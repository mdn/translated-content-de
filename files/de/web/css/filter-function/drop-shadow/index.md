---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`drop-shadow()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) wendet einen Schlagschatteneffekt auf das Eingabebild an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("CSS Demo: drop-shadow()")}}

```css interactive-example-choice
filter: drop-shadow(30px 10px 4px #4444dd);
```

```css interactive-example-choice
filter: drop-shadow(0 -6mm 4mm rgb(160 0 210));
```

```css interactive-example-choice
filter: drop-shadow(0 0 0.75rem crimson);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

Ein Schlagschatten ist im Wesentlichen eine unscharfe, versetzte Version der Alpha-Maske des Eingabebildes, die in einer bestimmten Farbe unter dem Bild gezeichnet wird.

> [!NOTE]
> Diese Funktion ist der Eigenschaft {{Cssxref("box-shadow")}} etwas ähnlich. Die `box-shadow`-Eigenschaft erzeugt einen rechteckigen Schatten hinter dem _gesamten Kasten_ eines Elements, während die `drop-shadow()`-Filterfunktion einen Schatten erzeugt, der sich an die Form (Alpha-Kanal) des _Bildes selbst_ anpasst.

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
drop-shadow(#ee2233 0.5rem 0.5rem 1rem)

/* Pass multiple drop-shadows to a filter to stack them */
drop-shadow(10px 10px red) drop-shadow(-5px -5px yellow)
```

Die `drop-shadow()`-Funktion akzeptiert einen Parameter des Typs `<shadow>` (definiert in der Eigenschaft {{cssxref("box-shadow")}}), mit der Ausnahme, dass das Schlüsselwort `inset` und die Parameter `spread` nicht erlaubt sind.

### Parameter

- `<color>` {{optional_inline}}
  - : Gibt die Farbe für den Schatten an. Wenn nicht angegeben, wird der Wert der Eigenschaft {{cssxref("color")}} verwendet, die im übergeordneten Element definiert ist.

- `<length>`
  - : Gibt die Offsetlänge des Schattens an. Dieser Parameter akzeptiert zwei oder drei Werte. Wenn zwei Werte angegeben sind, werden sie als `<offset-x>` (horizontaler Offset) und `<offset-y>` (vertikaler Offset) interpretiert. Ein negativer `<offset-x>`-Wert platziert den Schatten links vom Element. Ein negativer `<offset-y>`-Wert platziert den Schatten oberhalb des Elements. Wenn nicht angegeben, wird für die fehlende Länge der Wert `0` verwendet. Wenn ein dritter Wert angegeben ist, wird er als `<standard-deviation>` interpretiert, was der Wert der Standardabweichung für die [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur)-Funktion ist. Ein größerer `<standard-deviation>`-Wert erzeugt einen größeren und unschärferen Schatten. Negative Werte für `<standard-deviation>` sind nicht erlaubt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einen Schlagschatten festlegen

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
<div>drop-shadow(-16px -16px red)</div>
<div>
  drop-shadow(1px 1px red) drop-shadow(1px -1px red) drop-shadow(-1px 1px red)
  drop-shadow(-1px -1px red)
</div>
```

```css
div {
  display: inline-block;
  margin: 0 0.5rem 2rem 1rem;
  padding: 0.5rem;
  height: 100px;
  width: 190px;
  vertical-align: top;
  background-color: #222222;

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
  filter: drop-shadow(-16px -16px red);
}

div:nth-child(5) {
  filter: drop-shadow(1px 1px red) drop-shadow(1px -1px red)
    drop-shadow(-1px 1px red) drop-shadow(-1px -1px red);
}
```

{{EmbedLiveSample("Setting a drop shadow", "100%", "300px")}}

In Abwesenheit eines `<color>`-Wertes in der `drop-shadow()`-Funktion in der ersten Box verwendet der Schatten den Wert der `color`-Eigenschaft des Elements (`lime`). Die zweiten und dritten Schatten zeigen, dass die Länge und Farbwerte in beliebiger Reihenfolge angegeben werden können. Der dritte Schatten zeigt den Unschärfeeffekt, wenn ein dritter `<length>`-Wert angegeben wird. Der vierte Schatten verwendet negative Offsets, die den Schatten nach links und oben verschieben. Das fünfte Beispiel zeigt, wie man mehrere Schlagschatten auf einem einzelnen Element verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;filter-function&gt;")}} Funktionen:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- {{cssxref("box-shadow")}}
- {{cssxref("text-shadow")}}
- [Einführung in Textschatten](/de/docs/Web/CSS/CSS_text_decoration/Text_shadows)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul
