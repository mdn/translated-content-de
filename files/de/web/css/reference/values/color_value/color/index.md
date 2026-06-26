---
title: "`color()` CSS-Funktion"
short-title: color()
slug: Web/CSS/Reference/Values/color_value/color
l10n:
  sourceCommit: 99251a2a7cc534462d5c0ad6fbcb17905e4df826
---

Die **`color()`** Funktionsnotation erlaubt es, eine Farbe in einem bestimmten, spezifizierten {{Glossary("color_space", "Farbraum")}} anstelle des impliziten sRGB-Farbraums, den die meisten anderen Farb-Funktionen verwenden, anzugeben.

Die Unterstützung für einen bestimmten Farbraum kann mit dem CSS Medienfeature [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) erkannt werden.

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

Unten sind Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

#### Absolute Wert-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume bezeichnet: `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0`) geschrieben werden. Diese Werte repräsentieren die Komponent-Werte für den Farbraum. Bei der Verwendung eines `<number>`-Wertes repräsentiert im Allgemeinen `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. Bei der Verwendung eines Prozentwertes repräsentiert `100%` die `1` und `0%` die `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opaque) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingefügt, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe bezeichnet, normalerweise einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0`) geschrieben werden. Diese Werte repräsentieren die Komponent-Werte für die Ausgabefarbe. Bei der Verwendung eines `<number>`-Wertes repräsentiert im Allgemeinen `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. Im Allgemeinen repräsentiert bei der Verwendung eines Prozentwertes `100%` die `1` und `0%` die `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opaque) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert der Alpha-Kanalwert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition der Ausgabekanal-Komponenten für relative Farben

Wenn relative Farbsyntax in einer `color()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei separate Farbkanalwerte plus einem Alpha-Kanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden zu einem `<number>` aufgelöst. Für vordefinierte Farbräume, abhängig von dem angegebenen Farbraum, werden diese Werte einer der folgenden sein:
  - `r`, `g` und `b`: Farbkanalwerte für die auf RGB basierten Farbräume `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbkanalwerte für die auf CIE XYZ basierten Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber wie oben erklärt, können sie außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren von `r`, `g` und `b`-Werten innerhalb einer `color()`-Funktion mit einem auf XYZ basierten Farbraum, `x`, `y` und `z`-Werten innerhalb einer `color()`-Funktion mit einem auf RGB basierten Farbraum oder anderen Zeichen ist ungültig. Die Ursprungsfarbkanalwerte, die innerhalb der Funktion verfügbar sind, müssen dem spezifizierten Typ des Farbraums entsprechen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst zu einem `<number>` zwischen `0` und `1`, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Unten werden wir einige Beispiele betrachten, um dies zu veranschaulichen.

In den ersten beiden untenstehenden Beispielen verwenden wir relative Farbsyntax. Allerdings gibt das erste dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen wirklich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `color()`-Syntax enthalten.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Während Sie die folgenden Funktionen wahrscheinlich nie schreiben würden, da sie dieselbe Farbe wie die Ursprungsfarbe ausgeben, demonstriert dies, wie man die Ursprungsfarbkanalwerte als Ausgabekanalwerte verwendet:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabefarben dieser Funktionen sind `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)` bzw.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben vollständig andere Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b` bzw. `x` und `y`), verwenden jedoch einen neuen Wert für den anderen Ausgabekanalwert (`g` und `z` bzw.) und erstellen somit eine relative Farbe, die auf der Ursprungsfarbe in jedem Fall basiert:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}}-Farbe `hsl(0 100% 50%)` im ersten Fall oben in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` konvertiert.

In den bisherigen Beispielen in diesem Abschnitt wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit spezifiziert. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, nimmt er den gleichen Wert wie der Alpha-Kanal der Ursprungsfarbe an. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), liegt der Standardwert bei `1`. Daher sind die Alpha-Kanalwerte der Ursprungs- und Ausgabefarbe `1` für die obigen Beispiele.

Betrachten wir nun einige Beispiele, die die Ursprungs- und Ausgabefarbwerte des Alpha-Kanals spezifizieren. Das erste Beispiel gibt an, dass der Ausgabewert des Alpha-Kanals dem der Ursprungsfarbe entspricht, während das zweite Beispiel einen anderen Ausgabewert des Alpha-Kanals angibt, der nicht mit dem der Ursprungsfarbe zusammenhängt.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele verwenden {{cssxref("calc")}}-Funktionen, um neue Kanalwerte für die Ausgabefarben zu berechnen, die relativ zu den Ursprungsfarbkanalwerten sind:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen Sie bei der Verwendung in Berechnungen Zahlen zu ihnen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt die Wirkung der Veränderung der Werte für Helligkeit, a-Achse und b-Achse der `color()`-Funktion.

#### HTML

```html
<div data-color="red-a98-rgb"></div>
<div data-color="red-prophoto-rgb"></div>
<div data-color="green-srgb-linear"></div>
<div data-color="green-display-p3"></div>
<div data-color="green-display-p3-linear"></div>
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
/* sRGB gamut, linear-light — full brightness (green channel 100%) */
[data-color="green-srgb-linear"] {
  background-color: color(srgb-linear 0 1 0);
}
/* P3 gamut (wider), gamma-encoded — low brightness (green channel ~21% light output) */
[data-color="green-display-p3"] {
  background-color: color(display-p3 0 0.5 0);
}
/* P3 gamut (wider), linear-light — half brightness (green channel at 50% light output) */
[data-color="green-display-p3-linear"] {
  background-color: color(display-p3-linear 0 0.5 0);
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

Das folgende Beispiel zeigt, wie der `xyz`-Farbraum verwendet wird, um eine Farbe anzugeben.

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

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) Medienabfrage verwendet wird, um die Unterstützung eines bestimmten Farbraums zu erkennen und diesen Farbraum zu verwenden, um eine Farbe anzugeben.

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

### Verwendung relativer Farben mit color()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Varianten dieser `--base-color` aufgehellt bzw. abgedunkelt sind.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `color()`-Funktion übergeben, und die Ausgabefarben haben ihre `g`- und `b`-Kanäle modifiziert, um den gewünschten Effekt über `calc()`-Funktionen zu erreichen. Die aufgehellte Farbe hat zu diesen Kanälen 15% hinzugefügt, und die abgedunkelte Farbe hat 15% von diesen Kanälen subtrahiert.

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

- {{CSSXref("color")}}-Eigenschaft
- [Der `<color>` Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) für eine Liste aller Farbschreibweisen
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Color_format_converter Tool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) Medienfeature
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
