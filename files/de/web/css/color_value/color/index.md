---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`color()`** Funktionalnotation erlaubt es, eine Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} anzugeben, anstatt im impliziten sRGB Farbraum, in dem die meisten anderen Farbfunktionen arbeiten.

Die Unterstützung für einen bestimmten Farbraum kann mit dem CSS-Media-Feature [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) nachgewiesen werden.

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

Im Folgenden finden Sie Beschreibungen der erlaubten Werte für absolute und [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntax für absolute Werte

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`

  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume angibt: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`

  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (was in diesem Fall `0` entspricht) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Bei Verwendung eines `<number>`-Wertes repräsentiert allgemein `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, werden aber außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum liegen. Bei Verwendung eines Prozentwertes stellt `100%` `1` und `0%` `0` dar.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Falls enthalten, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Syntax für relative Werte

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer weiteren relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe angibt, im Allgemeinen einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (was in diesem Fall `0` entspricht) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Bei Verwendung eines `<number>`-Wertes repräsentiert allgemein `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, werden aber außerhalb vom {{Glossary("gamut", "Gamut")}} für den angegebenen Farbraum sein. Allgemein repräsentiert ein Prozentwert `100%` `1` und `0%` `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, übernimmt er den Alphakanalwert der Ursprungsfarbe. Falls enthalten, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

#### Definition von Ausgabekanalkomponenten für relative Farben

Bei der Verwendung der relativen Farbsyntax innerhalb einer `color()`-Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum um (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte plus einem Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden zu einem `<number>` aufgelöst. Für vordefinierte Farbräume, je nach Angabe, werden diese Werte eine der folgenden sein:

  - `r`, `g` und `b`: Farbkanalwerte für die auf RGB basierenden Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbkanalwerte für die auf CIE XYZ basierenden Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber wie oben beschrieben, können sie außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Die Referenzierung der Werte `r`, `g` und `b` innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y` und `z`-Werte innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum oder anderen Zeichen ist ungültig. Die innerhalb der Funktion verfügbaren Ursprungsfarbkanalwerte müssen dem spezifizierten Typ des Farbraums entsprechen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst zu einem `<number>` zwischen `0` und `1`, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden untersuchen wir einige Beispiele, um dies zu veranschaulichen.

In den ersten beiden folgenden Beispielen verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden wahrscheinlich niemals diese in einem echten Code verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `color()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (äquivalent zu `red`). Während Sie wahrscheinlich nie die folgenden Funktionen schreiben würden, weil sie die gleiche Farbe wie die Ursprungsfarbe ausgeben, demonstriert dies, wie die Ursprungsfarbkanalwerte als Ausgabekanäle verwendet werden:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabefarben dieser Funktionen sind `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)`.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben völlig unterschiedliche Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b` sowie `x` und `y`), aber verwenden einen neuen Wert für den anderen Ausgabekanalenwert (`g` bzw. `z`), wodurch in jedem Fall eine relative Farbe auf Basis der Ursprungsfarbe erzeugt wird:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. dieselben Kanäle verwendet). Beispielsweise wird die {{cssxref("color_value/hsl", "hsl()")}}-Farbe `hsl(0 100% 50%)` im obigen ersten Fall in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` umgewandelt.

In den bisher in diesem Abschnitt gezeigten Beispielen wurden die Alphakanäle weder für die Ursprungs- noch die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht festgelegt ist, überträgt er den gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` gesetzt. Deshalb sind die Alpha-Kanalwerte der Ursprung- und Ausgabefarben in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarb-Alphakanalwerte angeben. Das erste gibt den Alphakanalwert der Ausgabe als gleich dem der Ursprungsfarbe an, während das zweite einen anderen, nicht mit dem Alphakanal der Ursprungsfarbe zusammenhängenden, Alphakanalwert angibt.

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
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie ihnen Zahlen hinzufügen, wenn Sie diese bei Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt die Wirkung der Veränderung der Werte für die Helligkeit, a-Achse und b-Achse der `color()` Funktion.

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

### Verwendung des xyz Farbraums mit color()

Das folgende Beispiel zeigt, wie der `xyz` Farbraum verwendet wird, um eine Farbe anzugeben.

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

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media Query verwendet wird, um die Unterstützung für einen bestimmten Farbraum zu erkennen und diesen Farbraum zu verwenden, um eine Farbe anzugeben.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` gegeben, während das linke und rechte eine aufgehellte und abgedunkelte Variante dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion übergeben, und die Ausgabefarben haben ihre `g` und `b` Kanäle modifiziert, um den gewünschten Effekt durch `calc()`-Funktionen zu erzielen. Bei der aufgehellten Farbe werden 15% zu diesen Kanälen hinzugefügt, und bei der abgedunkelten Farbe werden 15% von diesen Kanälen abgezogen.

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

- [Der `<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnennungen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB Farbpicker und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media-Feature
- [Erweiterter Farbraum in CSS mit Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
