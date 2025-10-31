---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`color()`** Funktionsnotation ermöglicht es, eine Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} zu spezifizieren, anstatt im impliziten sRGB-Farbraum, in dem die meisten anderen Farbfunktionsoperationen ausgeführt werden.

Die Unterstützung für einen bestimmten Farbraum kann mit dem CSS Medienmerkmal [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) nachgewiesen werden.

## Syntax

```css
/* Absolute values */
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);

/* Relative values */
color(from green srgb r g b / 0.5)
color(from #123456 xyz calc(x + 0.75) y calc(z - 0.35))
```

### Werte

Im Folgenden sind Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wert-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}} zur Bezeichnung eines der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}}, oder das Schlüsselwort `none` geschrieben werden (entspricht in diesem Fall `0`). Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Bei Verwendung eines `<number>`-Werts repräsentieren in der Regel `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, werden jedoch außerhalb des {{Glossary("gamut", "Gamut")}} des gegebenen Farbraums liegen. Bei Verwendung eines Prozentwerts stellt `100%` ein `1` dar und `0%` ein `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} zur Darstellung des Alphakanalwertes der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig deckend) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, beträgt er standardmäßig 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}} zur Bezeichnung des {{Glossary("color_space", "Farbraums")}} der Ausgabefarbe, in der Regel einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}}, oder das Schlüsselwort `none` geschrieben werden (entspricht in diesem Fall `0`). Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Bei Verwendung eines `<number>`-Werts repräsentieren in der Regel `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, werden jedoch außerhalb des {{Glossary("gamut", "Gamut")}} des gegebenen Farbraums liegen. In der Regel stellt bei Verwendung eines Prozentwerts `100%` ein `1` dar und `0%` ein `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} zur Darstellung des Alphakanalwertes der Ausgabefarbe, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig deckend) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, beträgt er standardmäßig den Alphakanalwert der Ursprungsfarbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition relativer Farbausgangskanalkomponenten

Bei Verwendung von relativer Farbsyntax innerhalb einer `color()` Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (falls sie nicht bereits als solcher angegeben ist). Die Farbe wird als drei unterschiedliche Farbanalen sowie ein Alphakanalwert (`alpha`) definiert. Diese Kanälen stehen innerhalb der Funktion zur Verfügung, um bei der Definitions der Ausgabefarbkanäle verwendet zu werden:

- Die drei Farbanalen der Ursprungsfarbe werden auf eine `<number>` aufgelöst. Für vordefinierte Farbräume, abhängig davon, welcher angegeben ist, werden diese Werte eine der folgenden sein:
  - `r`, `g` und `b`: Farbanalwerte für die auf RGB basierenden Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, und `rec2020`.
  - `x`, `y` und `z`: Farbanalwerte für die auf CIE XYZ basierenden Farbräume `xyz`, `xyz-d50`, und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber, wie oben erklärt, können sie außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren von `r`, `g` und `b`-Werten innerhalb einer `color()` Funktion mit einem XYZ-basierten Farbraum, `x`, `y` und `z`-Werten innerhalb einer `color()` Funktion mit einem RGB-basierten Farbraum, oder anderen Zeichen ist ungültig. Die Ursprungsfarbkanäle, die innerhalb der Funktion verfügbar sind, müssen mit dem angegebenen Typ des Farbraumes übereinstimmen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst auf einen `<number>` zwischen `0` und `1`, inklusive.

Beim Definieren einer relativen Farbe können die verschiedenen Kanälen der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Diese erstellen wirklich keine relativen Farben! Sie würden diese Funktionen wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen wahrscheinlich einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen der relativen `color()`-Syntax hinzugefügt.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Während Sie die folgenden Funktionen wahrscheinlich nie schreiben würden, weil sie dieselbe Farbe wie die Ursprungsfarbe ausgeben, demonstriert dies, wie Sie die Ursprungsfarbkanäle als Ausgabekanäle nutzen können:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabefarben dieser Funktionen sind `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)`, jeweils.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanäle, wodurch völlig unterschiedliche Farben ausgegeben werden, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanäle für die Ausgabefarbkanäle (`r` und `b`, bzw. `x` und `y`), verwenden jedoch einen neuen Wert für den anderen Ausgabefarbkanal (`g` und `z`, jeweils), wodurch eine relative Farbe erzeugt wird, die in jedem Fall auf der Ursprungsfarbe basiert:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (dh mit denselben Kanälen). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}} Farbe `hsl(0 100% 50%)` im ersten Fall oben in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` umgewandelt.

In den bisher in diesem Abschnitt vorgestellten Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert ist, entspricht er standardmäßig demselben Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), geht er standardmäßig auf `1`. Daher sind die Ursprungs- und Ausgabewerte des Alphakanals in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die die Ursprungs- und Ausgabewerte von Alphakanälen angeben. Das erste Beispiel gibt den Ausgabewert des Alphakanals als den gleichen wie den Ursprungsalphakanal an, während das zweite Beispiel einen anderen Ausgabewert für den Alphakanal angibt, der nicht mit dem Ursprungsalphakanalwert in Zusammenhang steht.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele verwenden {{cssxref("calc")}} Funktionen, um neue Kanälen für die Ausgabefarben zu berechnen, die relativ zu den Ursprungsfarbkanälen sind:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Weil die Ursprungsfarbkanälen auf `<number>` Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt die Wirkung der Variation der Helligkeit, der a-Achse und der b-Achse-Werte der `color()` Funktion.

#### HTML

```html
<div data-color="red-a98-rgb"></div>
<div data-color="red-prophoto-rgb"></div>
<div data-color="green-srgb-linear"></div>
<div data-color="green-display-p3"></div>
<div data-color="blue-rec2020"></div>
<div data-color="blue-srgb"></div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
[data-color="red-a98-rgb"] {
  background-color: color(a98-rgb 1 0 0);
}
[data-color="red-prophoto-rgb"] {
  background-color: color(prophoto-rgb 1 0 0);
}
[data-color="green-srgb-linear"] {
  background-color: color(srgb-linear 0 1 0);
}
[data-color="green-display-p3"] {
  background-color: color(display-p3 0 1 0);
}
[data-color="blue-rec2020"] {
  background-color: color(rec2020 0 0 1);
}
[data-color="blue-srgb"] {
  background-color: color(srgb 0 0 1);
}
```

#### Ergebnis

{{EmbedLiveSample("using_predefined_color_spaces_with_color")}}

### Verwendung des xyz-Farbraums mit color()

Das folgende Beispiel zeigt, wie der `xyz` Farbraum verwendet wird, um eine Farbe zu spezifizieren.

#### HTML

```html
<div data-color="red"></div>
<div data-color="green"></div>
<div data-color="blue"></div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
[data-color="red"] {
  background-color: color(xyz 45 20 0);
}

[data-color="green"] {
  background-color: color(xyz-d50 0.3 80 0.3);
}

[data-color="blue"] {
  background-color: color(xyz-d65 5 0 50);
}
```

#### Ergebnis

{{EmbedLiveSample("using_the_xyz_color_space_with_color")}}

### Verwendung von color-gamut Media Queries mit color()

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Medienabfrage verwendet wird, um die Unterstützung für einen bestimmten Farbraum zu erkennen und diesen zu verwenden, um eine Farbe zu spezifizieren.

#### HTML

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
@media (color-gamut: p3) {
  div {
    background-color: color(display-p3 1 0 0);
  }
}

@media (color-gamut: srgb) {
  div:nth-child(2) {
    background-color: color(srgb 1 0 0);
  }
}

@media (color-gamut: rec2020) {
  div:nth-child(3) {
    background-color: color(rec2020 1 0 0);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("using_color-gamut_media_queries_with_color")}}

### Verwendung von relativen Farben mit color()

In diesem Beispiel werden drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das mittlere hat die unveränderte `--base-color`, während die linke und rechte Versionen aufhellt und abgedunkelt von dieser `--base-color` gegeben sind.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `color()` Funktion übergeben, und die Ausgabefarben haben ihre `g` und `b` Kanäle geändert, um den gewünschten Effekt durch `calc()` Funktionen zu erzielen. Die aufgehellte Farbe hat 15% zu diesen Kanälen hinzugefügt, und die abgedunkelte Farbe hat 15% davon abgezogen.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
}

#one {
  background-color: color(
    from var(--base-color) display-p3 r calc(g + 0.15) calc(b + 0.15)
  );
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: color(
    from var(--base-color) display-p3 r calc(g - 0.15) calc(b - 0.15)
  );
}

/* Use @supports to add in support old syntax that requires r g b values
   to be specified as percentages (with units) in calculations.
   This is required for Safari 16.4+ */
@supports (color: color(from red display-p3 r g calc(b + 30%))) {
  #one {
    background-color: color(
      from var(--base-color) display-p3 r calc(g + 15%) calc(b + 15%)
    );
  }

  #three {
    background-color: color(
      from var(--base-color) display-p3 r calc(g - 15%) calc(b - 15%)
    );
  }
}
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with color()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("color")}} Eigenschaft
- [Der `<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Color_format_converter Tool](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Medienmerkmal
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
