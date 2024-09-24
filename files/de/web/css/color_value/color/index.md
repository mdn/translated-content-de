---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`color()`** Funktionsnotation ermöglicht es, eine Farbe in einem bestimmten, angegebenen {{glossary("Farbraum")}} zu definieren, anstatt im impliziten sRGB-Farbraum, in dem die meisten anderen Farbfunktionsoperationen stattfinden.

Die Unterstützung für einen bestimmten Farbraum kann mit der CSS-Media-Funktion [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) festgestellt werden.

## Syntax

```css
/* Absolute Werte */
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);

/* Relative Werte */
color(from green srgb r g b / 0.5)
color(from #0000FF xyz calc(x + 0.75) y calc(z - 0.35))
```

### Werte

Nachfolgend sind Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absoluter Wert-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`

  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume bezeichnet: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`

  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (in diesem Fall gleich `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Wenn ein `<number>`-Wert verwendet wird, repräsentiert generell `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb des {{glossary("Gamut")}} des gegebenen Farbraums. Bei Verwendung eines Prozentwertes repräsentiert `100%` `1` und `0%` `0`.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt er standardmäßig 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) getrennt.

> [!NOTE]
> Weitere Informationen über die Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relativer Wert-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{glossary("Farbraum")}} der Ausgabefarbe bezeichnet, im Allgemeinen einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (in diesem Fall gleich `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Wenn ein `<number>`-Wert verwendet wird, repräsentiert `0` bis `1` generell die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb des {{glossary("Gamut")}} des gegebenen Farbraums. Generell repräsentiert bei Verwendung eines Prozentwertes `100%` `1` und `0%` `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er dem Alpha-Kanalwert der Ursprungsfarbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) getrennt.

#### Definieren von Ausgabefarbkanalkomponenten

Bei Verwendung der relativen Farbsyntax innerhalb einer `color()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (falls nicht bereits so angegeben). Die Farbe wird als drei unterschiedliche Farbtone plus einen Alpha-Kanal-Wert (`alpha`) definiert. Diese Kanalwerte sind innerhalb der Funktion verfügbar, um sie beim Definieren der Ausgabefarbkanalwerte zu verwenden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden auf einen `<number>`-Wert aufgelöst. Abhängig von den angegebenen vordefinierten Farbräumen sind diese Werte eines der folgenden:

  - `r`, `g` und `b`: Farbtonwerte für die auf RGB basierenden Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbtonwerte für die auf CIE XYZ basierenden Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, kann jedoch, wie oben erläutert, außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren von `r`, `g` und `b` Werten innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y` und `z` Werten innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum, oder anderen Zeichen ist ungültig. Die Ursprungsfarbkanalwerte, die innerhalb der Funktion verfügbar sind, müssen dem angegebenen Typ des Farbraums entsprechen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst auf einen `<number>` zwischen `0` und `1` (einschließlich).

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden Beispielen verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einem echten Code verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `color()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Auch wenn die folgenden Funktionen dieselbe Farbe wie die Ursprungsfarbe ausgeben, zeigt dies, wie die Ursprungsfarbkanalwerte als Ausgabekanalwerte verwendet werden:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabe dieser Funktionen sind die Farben `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)`.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben somit völlig unterschiedliche Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Berechnete Ausgabefarbe: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Berechnete Ausgabefarbe: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b` und `x` und `y`), verwenden jedoch einen neuen Wert für den anderen Ausgabekanalwert (`g` und `z`) und erstellen dadurch eine relative Farbe auf der Basis der Ursprungsfarbe in jedem Fall:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Berechnete Ausgabefarbe: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Berechnete Ausgabefarbe: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wird, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, die Ursprungsfarbe im Hintergrund so konvertiert, dass sie im selben Modell wie die Ausgabefarbe dargestellt werden kann (d. h. unter Verwendung derselben Kanäle). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}}-Farbe `hsl(0 100% 50%)` im ersten Fall oben in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` konvertiert.

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle weder für die Ursprungs- noch die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn der Alpha-Kanal-Wert der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher sind die oberen Beispiele sowohl für die Ursprungs- als auch die Ausgabefarbkanalwerte `1` für den Alpha-Kanal.

Betrachten wir einige Beispiele, die Alpha-Kanal-Werte für die Ursprungs- und Ausgabefarben spezifizieren. Das erste Beispiel legt den Alpha-Kanal-Wert der Ausgabe als gleich dem Alpha-Kanal-Wert der Ursprungsfarbe fest, während das zweite einen anderen, mit der Ursprungsalpha irrelevanten, Alpha-Kanal-Wert der Ausgabe festlegt.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Berechnete Ausgabefarbe: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Berechnete Ausgabefarbe: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele verwenden {{cssxref("calc")}}-Funktionen, um neue Kanalwerte für die Ausgabefarben relativ zu den Ursprungsfarbkanalwerten zu berechnen:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Berechnete Ausgabefarbe: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Berechnete Ausgabefarbe: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Beispielsweise funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von vordefinierten Farbräumen mit color()

Das folgende Beispiel zeigt die Wirkung des Variierens der Lichtstärke, a-Achse und b-Achse Werte der `color()`-Funktion.

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

### Verwenden des xyz-Farbraums mit color()

Das folgende Beispiel zeigt, wie der `xyz`-Farbraum verwendet wird, um eine Farbe zu definieren.

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

### Verwenden von color-gamut Media Queries mit color()

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media-Query verwendet wird, um die Unterstützung eines bestimmten Farbraums zu erkennen und diesen Farbraum zu verwenden, um eine Farbe zu definieren.

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

### Verwenden von relativen Farben mit color()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Varianten der `--base-color` aufgehellt und verdunkelt werden.

Diese Varianten werden mittels relativer Farben definiert – die `--base-color` [Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion übergeben, und die Ausgabefarben haben ihre `g`- und `b`-Kanäle modifiziert, um den gewünschten Effekt durch `calc()`-Funktionen zu erreichen. Die aufgehellte Farbe hat 15% auf diese Kanäle addiert, und die verdunkelte Farbe hat 15% subtrahiert von diesen Kanälen.

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

/* Verwenden Sie @supports, um alte Syntax zu unterstützen, die r g b Werte erfordert
   als Prozentwerte (mit Einheiten) in Berechnungen zu spezifizieren.
   Dies ist erforderlich für Safari 16.4+ */
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

- [Der `<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB Farbpicker und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media-Funktion
- [Weit Gamut-Farbe in CSS mit Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
