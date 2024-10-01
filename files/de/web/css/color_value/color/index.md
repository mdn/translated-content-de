---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die funktionale Notation **`color()`** ermöglicht die Angabe einer Farbe in einem bestimmten, spezifizierten {{Glossary("color_space", "Farbraum")}}, anstatt in dem impliziten sRGB-Farbraum, in dem die meisten anderen Farb-Funktionen arbeiten.

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

Nachfolgend finden Sie Beschreibungen der erlaubten Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wert-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`

  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume angibt: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`

  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0`) angegeben werden. Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Bei der Verwendung eines `<number>`-Wertes repräsentieren im Allgemeinen `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. Bei der Verwendung eines Prozentwerts repräsentiert `100%` den Wert `1` und `0%` den Wert `0`.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zudem kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich spezifiziert wird, ist der Standardwert 100%. Falls einbezogen, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen zur Wirkung von `none`.

#### Relative Wert-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe angibt, in der Regel einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0`) angegeben werden. Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Bei der Verwendung eines `<number>`-Wertes repräsentieren im Allgemeinen `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. In der Regel repräsentiert bei der Verwendung eines Prozentwerts `100%` den Wert `1` und `0%` den Wert `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zudem kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich spezifiziert wird, ist der Standardwert der Alphakanalwert der Ursprungfarbe. Falls einbezogen, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

#### Definition der Ausgabekanal-Komponenten für relative Farben

Bei der Verwendung von relativer Farbsyntax innerhalb einer `color()`-Funktion wandelt der Browser die Ursprungfarbe in eine äquivalente Farbe im angegebenen Farbraum um (falls sie nicht bereits als solche spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte plus einem Alphakanalwert (`alpha`) definiert. Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die drei Farbkanalwerte der Ursprungfarbe werden auf einen `<number>` aufgelöst. Bei vordefinierten Farbräumen, je nachdem welcher spezifiziert ist, sind diese Werte eine der folgenden:

  - `r`, `g` und `b`: Farbkanalwerte für die auf RGB basierenden Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbkanalwerte für die auf CIE XYZ basierenden Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, doch wie oben erklärt, können sie auch außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren von `r`, `g` und `b`-Werten innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y` und `z`-Werten innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum oder anderen Zeichen ist ungültig. Die innerhalb der Funktion verfügbaren Ursprungskanalwerte müssen dem spezifizierten Typ des Farbraums entsprechen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst zu einem `<number>` zwischen `0` und `1`, inklusive.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch die gleiche Farbe wie die Ursprungfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! In einem echten Codebase würden Sie diese wahrscheinlich nie verwenden und einfach einen absoluten Farbwert stattdessen nutzen. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `color()`-Syntax hinzugefügt.

Beginnen wir mit einer Ursprungfarbe von `hsl(0 100% 50%)` (äquivalent zu `red`). Während Sie die folgenden Funktionen wahrscheinlich nie schreiben würden, weil sie die gleiche Farbe wie die Ursprungfarbe ausgeben, zeigt dies, wie man die Ursprungskanalwerte als Ausgabekanalwerte verwendet:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabe dieser Funktionen sind die Farben `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)`.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben völlig unterschiedliche Farben aus, die nicht auf der Ursprungfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungskanalwerte (`r` und `b`, und `x` und `y` bzw.) für die Ausgabefarbkanalwerte, aber verwenden einen neuen Wert für den anderen Ausgabekanalwert (`g` und `z`, bzw.), wodurch eine auf der Ursprungfarbe basierende relative Farbe in jedem Fall erzeugt wird:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungfarbe verwendet, wird die Ursprungfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie in einer kompatiblen Weise dargestellt werden kann (d.h. dasselbe Kanäle verwendet werden). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}}-Farbe `hsl(0 100% 50%)` im ersten Fall oben in `color(srgb 1 0 0)` umgewandelt und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)`.

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprung noch für die Ausgabefarben ausdrücklich spezifiziert. Wenn der Ausgabefarbe-Alphakanal nicht spezifiziert wird, entspricht er standardmäßig dem Alphakanalwert der Ursprungfarbe. Wenn der Alphakanalwert der Ursprungfarbe nicht spezifiziert wird (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Ursprung- und Ausgabefarb-Alphakanalwerte für die obigen Beispiele `1`.

Lassen Sie uns einige Beispiele betrachten, die Ursprung- und Ausgabefarb-Alphakanalwerte spezifizieren. Das erste Beispiel spezifiziert den Ausgabefarb-Alphakanalwert als gleich der Ursprung-Alphakanalwert, während das zweite Beispiel einen anderen Ausgabefarb-Alphakanalwert spezifiziert, der nicht mit dem Ursprung-Alphakanalwert in Verbindung steht.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele verwenden {{cssxref("calc")}}-Funktionen, um neue Kanalwerte für die Ausgabefarben zu berechnen, die relativ zu den Ursprungskanalwerten sind:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Da die Ursprungskanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie diesen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt den Effekt der Variation der Helligkeits-, a- und b-Achsen-Werte der `color()`-Funktion.

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

Das folgende Beispiel zeigt, wie der `xyz`-Farbraum verwendet werden kann, um eine Farbe zu spezifizieren.

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

### Verwendung von color-gamut-Media-Queries mit color()

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media-Query verwendet wird, um die Unterstützung für einen bestimmten Farbraum zu erkennen und diesen Farbraum zu verwenden, um eine Farbe zu spezifizieren.

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

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das mittlere Element erhält die unveränderte `--base-color`, während die linken und rechten Elementen aufgehellte und abgedunkelte Varianten dieser `--base-color` bekommen.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion übergeben und die Ausgabefarben haben ihre `g` und `b` Kanäle modifiziert, um den gewünschten Effekt über `calc()`-Funktionen zu erzielen. Die aufgehellte Farbe hat 15% zu diesen Kanälen hinzugefügt, und die abgedunkelte Farbe hat 15% von diesen Kanälen abgezogen.

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

- [Der `<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB-Farbwähler und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media-Feature
- [Wide Gamut Color in CSS mit Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
