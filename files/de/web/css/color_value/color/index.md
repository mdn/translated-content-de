---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Die funktionale Notation **`color()`** ermöglicht es, eine Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} zu definieren, anstatt im impliziten sRGB-Farbraum, in dem die meisten anderen Farb-Funktionen arbeiten.

Die Unterstützung für einen bestimmten Farbraum kann mit dem CSS-Media-Feature [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) erkannt werden.

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

Unten finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntax für absolute Werte

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume bezeichnet: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (entspricht hier `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Bei der Verwendung eines `<number>`-Werts entspricht im Allgemeinen `0` bis `1` den Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, liegen jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. Bei der Verwendung eines Prozentwerts entspricht `100%` dem Wert `1` und `0%` dem Wert `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wird der Wert des `A`-Kanals nicht explizit angegeben, so beträgt der Standardwert 100%. Wenn es enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Syntax für relative Werte

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe angibt, normalerweise einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder das Schlüsselwort `none` (entspricht hier `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Bei der Verwendung eines `<number>`-Werts entspricht im Allgemeinen `0` bis `1` den Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, liegen jedoch außerhalb des {{Glossary("gamut", "Gamut")}} für den gegebenen Farbraum. Im Allgemeinen entspricht bei der Verwendung eines Prozentwerts `100%` dem Wert `1` und `0%` dem Wert `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn es enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

#### Definition der Kanalkomponenten der Ausgabefarbe bei relativen Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `color()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte plus einem Alpha-Kanal-Wert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden auf einen `<number>`-Wert aufgelöst. Für vordefinierte Farbräume, je nachdem, welcher angegeben ist, sind diese Werte einer der folgenden:
  - `r`, `g` und `b`: Farbkanalwerte für die auf RGB basierenden Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbkanalwerte für die auf dem CIE XYZ basierenden Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber wie oben erklärt, können sie außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Die Referenzierung von `r`, `g` und `b`-Werten innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y` und `z`-Werten innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum oder andere Zeichen ist ungültig. Die in der Funktion verfügbaren Ursprungsfarbkanalwerte müssen dem angegebenen Typ des Farbraums entsprechen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst auf einen `<number>` zwischen `0` und `1`, inklusive.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weisen ausgedrückt werden. Unten werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! In einem echten Codebase würden Sie diese wahrscheinlich eher nicht verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um das relative `color()`-Syntax zu lernen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Während es unwahrscheinlich ist, dass Sie die folgenden Funktionen jemals schreiben, weil sie die gleiche Farbe wie die Ursprungsfarbe ausgeben, zeigen sie, wie Sie die Ursprungsfarbkanalwerte als Ausgabekanalwerte verwenden können:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Diese Funktionen geben die Farben `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)` aus.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben völlig andere Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b` bzw. `x` und `y`), verwenden aber einen neuen Wert für den anderen Ausgabekanalwert (`g` bzw. `z`), wodurch eine relative Farbe basierend auf der Ursprungsfarbe in jedem Fall erstellt wird:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. dieselben Kanäle verwendet). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}}-Farbe `hsl(0 100% 50%)` im ersten obigen Fall in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` konvertiert.

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Ausgabefarb-Alpha-Kanal nicht angegeben wird, entspricht er standardmäßig dem Wert des Alpha-Kanals der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher beträgt der Ursprungs- und Ausgabefarb-Alpha-Kanal in den obigen Beispielen `1`.

Lassen Sie uns einige Beispiele betrachten, die die Alpha-Kanal-Werte von Ursprungs- und Ausgabefarben angeben. Das erste spezifiziert den Ausgabefarb-Alpha-Kanal-Wert als den gleichen wie den Ursprungs-Alpha-Kanal-Wert, während das zweite einen anderen Ausgabefarb-Alpha-Kanal-Wert angibt, der nicht mit dem Ursprungs-Alpha-Kanal-Wert zusammenhängt.

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
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von vordefinierten Farbräumen mit color()

Das folgende Beispiel zeigt die Wirkung der Variierung der Helligkeits-, a-Achsen- und b-Achsen-Werte der `color()`-Funktion.

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

### Verwendung von Farb-Gamut-Media-Queries mit color()

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut)-Media-Query verwendet wird, um die Unterstützung für einen bestimmten Farbraum zu erkennen und diesen Farbraum zu verwenden, um eine Farbe zu definieren.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten jeweils aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion übergeben, und die Ausgabefarben haben ihre `g`- und `b`-Kanäle modifiziert, um den gewünschten Effekt mit Hilfe von `calc()`-Funktionen zu erzielen. Die aufgehellte Farbe hat 15% zu diesen Kanälen hinzugefügt, und die abgedunkelte Farbe hat 15% von diesen Kanälen subtrahiert.

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

Das Ergebnis ist wie folgt:

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
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media-Feature
- [Wide Gamut Color in CSS mit Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
