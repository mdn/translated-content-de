---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`color()`** Funktionsnotation ermöglicht es, eine Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} anzugeben, anstatt im impliziten sRGB-Farbraum, in dem die meisten der anderen Farbfunktions arbeiten.

Die Unterstützung für einen bestimmten Farbraum kann mit der [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) CSS-Media-Funktion erkannt werden.

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

Nachfolgend finden Sie Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wert-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume bezeichnet: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Bei der Verwendung eines `<number>`-Wertes stellen im Allgemeinen `0` bis `1` die Grenzen des Farbraums dar. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb der {{Glossary("gamut", "Farbalae")}} für den gegebenen Farbraum. Bei der Verwendung eines Prozentwertes repräsentiert `100%` die `1` und `0%` die `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, beträgt der Standardwert 100%. Falls enthalten, geht der Wert einem Schrägstrich (`/`) voraus.

> [!NOTE]
> Weitere Informationen zum Effekt von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer beim Definieren einer relativen Farbe gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert zur Darstellung der **Ursprungsfarbe** verwendet. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe bezeichnet, üblicherweise einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Beim Verwenden eines `<number>`-Wertes stellen im Allgemeinen `0` bis `1` die Grenzen des Farbraums dar. Werte außerhalb dieses Bereichs sind zulässig, liegen jedoch außerhalb der {{Glossary("gamut", "Farbalae")}} für den gegebenen Farbraum. Im Allgemeinen steht bei einem Prozentwert `100%` für `1` und `0%` für `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, beträgt der Standardwert den Alpha-Kanalwert der Ursprungsfarbe. Falls enthalten, geht dem Wert ein Schrägstrich (`/`) voraus.

#### Definieren von relativen Farbausgabekanalkomponenten

Bei der Verwendung der relativen Farbsyntax innerhalb einer `color()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (wenn nicht bereits so angegeben). Die Farbe wird als drei unterschiedliche Farbkanalwerte plus einem Alpha-Kanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden auf einen `<number>` aufgelöst. Für vordefinierte Farbräume, je nachdem, welcher angegeben ist, werden diese Werte eines der folgenden sein:
  - `r`, `g` und `b`: Farbkanalwerte für die RGB-basierten Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbkanalwerte für die CIE XYZ-basierten Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber wie oben erläutert, können sie auch außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren von `r`, `g` und `b`-Werten innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y` und `z`-Werten innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum oder anderen Zeichen ist ungültig. Die Ursprungsfarbkanalwerte, die innerhalb der Funktion verfügbar sind, müssen mit dem angegebenen Farbraumtyp übereinstimmen.

- `alpha`: Der Transparenzwert der Farbe, der auf einen `<number>` zwischen `0` und `1` aufgelöst wird, inklusive.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einer echten Codebasis verwenden würden, und würden wahrscheinlich stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `color()`-Syntax aufgenommen.

Lassen Sie uns mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`) beginnen. Während es unwahrscheinlich ist, dass Sie die folgenden Funktionen jemals schreiben, da sie dieselbe Farbe wie die Ursprungsfarbe ausgeben, demonstriert dies, wie man die Ursprungsfarbkanalwerte als Ausgabekanalswerte verwendet:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabefarben dieser Funktionen sind `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)`, jeweils.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben völlig unterschiedliche Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b`, und `x` und `y`, jeweils), verwenden jedoch einen neuen Wert für den anderen Ausgabekanalswert (`g` und `z`, jeweils), wodurch eine relative Farbe basierend auf der Ursprungsfarbe in jedem Fall erstellt wird:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}} Farbe `hsl(0 100% 50%)` in `color(srgb 1 0 0)` im ersten Fall oben und in `color(xyz 0.412426 0.212648 0.5)` im zweiten Fall konvertiert.

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Ausgabefarbe-Alpha-Kanal nicht angegeben ist, ist der Standardwert derselbe wie der Alpha-Kanalwert der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Ursprungs- und Ausgabewerte der Alpha-Kanäle in den obigen Beispielen `1`.

Lassen Sie uns einige Beispiele betrachten, die Ursprungs- und Ausgabewerte der Alpha-Kanäle angeben. Das erste gibt den Ausgabewert des Alpha-Kanals als denselben wie den Alpha-Kanalwert der Ursprungsfarbe an, während das zweite einen anderen Ausgabewert für den Alpha-Kanal angibt, der nichts mit dem Alpha-Kanalwert der Ursprungsfarbe zu tun hat.

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
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt die Auswirkung der Variation der Helligkeit, der a-Achse und der b-Achse Werte der `color()`-Funktion.

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

### Verwendung von color-gamut Medienabfragen mit color()

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Medienabfrage verwendet wird, um die Unterstützung für einen bestimmten Farbraum zu erkennen und diesen Farbraum zur Angabe einer Farbe zu verwenden.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten hellere und dunklere Varianten dieser `--base-color` zugewiesen werden.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion übergeben, und die Ausgabefarben haben ihre `g`- und `b`-Kanäle modifiziert, um den gewünschten Effekt über `calc()`-Funktionen zu erzielen. Der erhellte Farbton hat 15% zu diesen Kanälen hinzugefügt, und der verdunkelte Farbton hat 15% von diesen Kanälen abgezogen.

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

Die Ausgabe erfolgt wie folgt:

{{ EmbedLiveSample("Using relative colors with color()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der `<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB Farbpicker und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Medienfunktion
- [Wide Gamut Color in CSS mit Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
