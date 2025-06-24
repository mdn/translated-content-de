---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`color()`** Funktionalnotation ermöglicht es, eine Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} zu spezifizieren, anstatt im impliziten sRGB-Farbraum, in dem die meisten anderen Farbfunktionsarbeiten arbeiten.

Die Unterstützung für einen bestimmten Farbraum kann mit dem CSS-Media-Feature [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) erkannt werden.

## Syntax

```css
/* Absolute values */
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);

/* Relative values */
color(from green srgb r g b / 0.5)
color(from #0000FF xyz calc(x + 0.75) y calc(z - 0.35))
```

### Werte

Im Folgenden sind die Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`

  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume angibt: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`

  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}}, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Bei Verwendung eines `<number>`-Wertes stellen im Allgemeinen `0` bis `1` die Grenzen des Farbraums dar. Werte außerhalb dieses Bereichs sind erlaubt, werden jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum liegen. Bei Verwendung eines Prozentwerts stellt `100%` `1` und `0%` `0` dar.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig opak). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alpha-Kanal explizit anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, beträgt er standardmäßig 100%. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe angibt, normalerweise einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}}, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Bei Verwendung eines `<number>`-Wertes stellen im Allgemeinen `0` bis `1` die Grenzen des Farbraums dar. Werte außerhalb dieses Bereichs sind erlaubt, werden jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum liegen. Im Allgemeinen repräsentiert bei Verwendung eines Prozentwertes `100%` `1` und `0%` `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig opak). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alpha-Kanal explizit anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definieren von relativen Farbkanalkomponenten für die Ausgabe

Wenn die relative Farbsyntax innerhalb einer `color()` Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei getrennte Farbkanalwerte plus einem Alpha-Kanalwert (`alpha`) definiert. Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden zu einem `<number>` aufgelöst. Für vordefinierte Farbräume, abhängig davon, welcher angegeben ist, sind diese Werte entweder:

  - `r`, `g`, und `b`: Farbkanalwerte für die auf RGB basierenden Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y`, und `z`: Farbkanalwerte für die auf CIE XYZ basierenden Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber, wie oben erklärt, können sie auch außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren der `r`, `g`, und `b` Werte in einer `color()` Funktion mit einem XYZ-basierten Farbraum, `x`, `y`, und `z` Werte in einer `color()` Funktion mit einem RGB-basierten Farbraum, oder andere Zeichen ist ungültig. Die Ursprungsfarbkanalwerte, die innerhalb der Funktion verfügbar sind, müssen dem angegebenen Typ des Farbraums entsprechen.

- `alpha`: Der Transparenzwert der Farbe, der auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst wird.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden sehen wir uns einige Beispiele an, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen nicht wirklich relative Farben! Sie würden diese wahrscheinlich nie in einem echten Code verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `color()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Während Sie die folgenden Funktionen wahrscheinlich nie schreiben würden, weil sie dieselbe Farbe wie die Ursprungsfarbe ausgeben, demonstriert dies, wie die Ursprungsfarbkanalwerte als Ausgabekanalwerte verwendet werden können:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Diese Funktionen geben die Farben `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)` aus.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte, die vollständig unterschiedliche Farben ausgeben, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b`, sowie `x` und `y`, jeweils), aber verwenden einen neuen Wert für den anderen Ausgabekanalwert (`g` und `z`, jeweils), wodurch eine relative Farbe erstellt wird, die in jedem Fall auf der Ursprungsfarbe basiert:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. mit denselben Kanälen). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}} Farbe `hsl(0 100% 50%)` im ersten Fall oben in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` umgewandelt.

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht spezifiziert ist, wird er standardmäßig auf denselben Wert wie der Alpha-Kanal der Ursprungsfarbe gesetzt. Wenn der Alpha-Kanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher sind die Ursprungs- und Ausgabefarbkanalwerte für die obigen Beispiele `1`.

Sehen wir uns einige Beispiele an, die Ursprungs- und Ausgabe-Alpha-Kanalwerte spezifizieren. Das erste Beispiel spezifiziert den Ausgabe-Alpha-Kanalwert als denselben wie den Alpha-Kanalwert der Ursprungsfarbe, während das zweite Beispiel einen anderen Ausgabe-Alpha-Kanalwert angibt, der nicht mit dem Alpha-Kanalwert der Ursprungsfarbe zusammenhängt.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele verwenden {{cssxref("calc")}} Funktionen, um neue Kanalwerte für die Ausgabefarben zu berechnen, die relativ zu den Kanälen der Ursprungsfarbe sind:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Da die Kanalwerte der Ursprungsfarbe auf `<number>` Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von vordefinierten Farbräumen mit color()

Das folgende Beispiel zeigt den Effekt, wenn die Helligkeit, der a-Achsen- und der b-Achsen-Wert der `color()` Funktion variiert werden.

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

Das folgende Beispiel zeigt, wie man den `xyz` Farbraum verwendet, um eine Farbe zu spezifizieren.

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

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media Query verwendet wird, um die Unterstützung eines bestimmten Farbraums zu erkennen und diesen Farbraum zu verwenden, um eine Farbe zu spezifizieren.

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

In diesem Beispiel werden drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten hellere und dunklere Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()` Funktion übergeben und die Ausgabefarben haben ihre `g` und `b` Kanäle modifiziert, um den gewünschten Effekt durch `calc()` Funktionen zu erzielen. Der aufgehellte Farbton hat 15% zu diesen Kanälen hinzugerechnet, der abgedunkelte Farbton hat 15% abgezogen.

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

Der Output ist wie folgt:

{{ EmbedLiveSample("Using relative colors with color()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der `<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnzeiten
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB Farbwähler- und Umwandlungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media Feature
- [Breite Gamut-Farbe in CSS mit Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
