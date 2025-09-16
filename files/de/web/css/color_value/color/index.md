---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

Die **`color()`** Funktion ermöglicht es, eine Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} zu spezifizieren, anstatt im impliziten sRGB-Farbraum, in dem die meisten anderen Farb-Funktionen arbeiten.

Die Unterstützung für einen bestimmten Farbraum kann mit Hilfe des [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) CSS-Media Features festgestellt werden.

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

Im Folgenden finden Sie Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wert-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume bezeichnet: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0`) geschrieben werden. Diese Werte stellen die Komponentwerte für den Farbraum dar. Bei der Verwendung eines `<number>`-Werts repräsentiert generell `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, liegen aber außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. Bei Verwendung eines Prozentwertes repräsentiert `100%` die `1` und `0%` die `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Falls inkludiert, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe bezeichnet, in der Regel einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0`) geschrieben werden. Diese Werte repräsentieren die Komponentwerte für die Ausgabefarbe. Bei der Verwendung eines `<number>`-Werts repräsentiert generell `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, liegen aber außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. Generell repräsentiert `100%` die `1` und `0%` die `0`, wenn ein Prozentwert verwendet wird.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird standardmäßig der Alpha-Kanalwert der Ursprungsfarbe verwendet. Wenn inkludiert, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

#### Definition der relativen Farbausgabe-Kanalkomponenten

Bei der Verwendung von relativer Farbsyntax innerhalb einer `color()` Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (falls sie nicht bereits als solche spezifiziert ist). Die Farbe ist als drei unterschiedliche Farbkanalwerte plus einem Alpha-Kanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden auf eine `<number>`-Wert aufgelöst. Für vordefinierte Farbräume, je nachdem welcher spezifiziert ist, werden diese Werte eine der folgenden sein:
  - `r`, `g`, und `b`: Farbkanalwerte für die auf RGB basierenden Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, und `rec2020`.
  - `x`, `y`, und `z`: Farbkanalwerte für die auf CIE XYZ basierenden Farbräume `xyz`, `xyz-d50`, und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber wie oben erklärt, können sie außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren von `r`, `g`, und `b`-Werten innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y`, und `z`-Werten innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum oder beliebige andere Zeichen ist ungültig. Die in der Funktion verfügbaren Ursprungsfarbkanalwerte müssen zum angegebenen Farbraumtyp passen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst auf eine `<number>` zwischen `0` und `1`, inklusive.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele studieren, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem realen Code-Basis verwenden würden und stattdessen wahrscheinlich einen absoluten Farbwert verwenden würden. Wir haben diese Beispiele als Ausgangspunkt gewählt, um die relative `color()`-Syntax zu erlernen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Obwohl es unwahrscheinlich ist, dass Sie jemals die folgenden Funktionen schreiben würden, weil sie die gleiche Farbe wie die Ursprungsfarbe ausgeben, zeigt dies, wie die Ursprungsfarbkanalwerte als Ausgabekanalkomponentenwerte verwendet werden:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabe dieser Funktionen ist `color(srgb 1 0 0)` bzw. `color(xyz-d65 0.412426 0.212648 0.0193173)`.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben vollständig unterschiedliche Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b`, bzw. `x` und `y`), verwenden jedoch einen neuen Wert für den anderen Ausgabekanalwert (`g` bzw. `z`), wodurch eine relative Farbe basierend auf der Ursprungsfarbe in jedem Fall erzeugt wird:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe umgewandelt, damit sie auf eine kompatible Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}}-Farbe `hsl(0 100% 50%)` im ersten Fall oben in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` umgewandelt.

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit spezifiziert. Wenn der Alpha-Kanal der Ausgabefarbe nicht spezifiziert ist, wird er standardmäßig auf den gleichen Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alpha-Kanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), beträgt der Standardwert `1`. Deshalb sind die Alpha-Kanalwerte für Ursprungs- und Ausgabefarbe in den obigen Beispielen `1`.

Sehen wir uns einige Beispiele an, die die Alpha-Kanal-Werte der Ursprungs- und Ausgabefarbe spezifizieren. Das erste spezifiziert den Alpha-Kanalwert der Ausgabe als den gleichen wie den Alpha-Kanalwert der Ursprungsfarbe, während das zweite einen anderen Alpha-Kanalwert der Ausgabe spezifiziert, der in keinem Zusammenhang mit dem Alpha-Kanalwert der Ursprungsfarbe steht.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele verwenden {{cssxref("calc")}} Funktionen, um neue Kanalkomponentenwerte für die Ausgabefarben zu berechnen, die relativ zu den Kanalwerten der Ursprungsfarbe sind:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie diese in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert zum Beispiel nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt die Wirkung des Variierens der Werte für Helligkeit, A-Achse und B-Achse der `color()`-Funktion.

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

Das folgende Beispiel zeigt, wie man den `xyz`-Farbraum verwendet, um eine Farbe zu spezifizieren.

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

Dieses Beispiel zeigt, wie man die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media Query verwendet, um die Unterstützung für einen bestimmten Farbraum zu erkennen und diesen Farbraum zu verwenden, um eine Farbe zu spezifizieren.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` gegeben, während die linken und rechten Varianten aufgehellt bzw. abgedunkelt sind.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion eingebracht, und die Ausgabefarben haben ihre `g`- und `b`-Kanäle modifiziert, um den gewünschten Effekt über `calc()`-Funktionen zu erzielen. Der aufgehellte Farbe wird 15% zu diesen Kanälen hinzugefügt, und der abgedunkelten Farbe werden 15% von diesen Kanälen abgezogen.

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
- [Der `<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbdarstellungen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB Farbwähler und Umwandlungstool](/de/docs/Web/CSS/CSS_colors/Color_picker)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media Feature
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
