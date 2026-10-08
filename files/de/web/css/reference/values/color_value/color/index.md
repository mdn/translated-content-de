---
title: "`color()`-CSS-Funktion"
short-title: color()
slug: Web/CSS/Reference/Values/color_value/color
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Mit der **`color()`**-Funktionsnotation kann eine Farbe in einem bestimmten {{Glossary("color_space", "Farbraum")}} angegeben werden, statt im impliziten sRGB-Farbraum, den die meisten anderen Farbfunktionen verwenden.

Ob ein bestimmter Farbraum unterstützt wird, lässt sich mit dem CSS-Medienmerkmal [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) ermitteln.

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

Im Folgenden werden die zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) beschrieben.

#### Syntax für absolute Werte

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume bezeichnet: `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, als {{CSSXref("percentage")}} oder mit dem Schlüsselwort `none` angegeben werden, das in diesem Fall `0` entspricht. Diese Werte stellen die Komponentenwerte des Farbraums dar. Bei Verwendung eines `<number>`-Werts markieren `0` und `1` im Allgemeinen die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen für den angegebenen Farbraum aber außerhalb des {{Glossary("gamut", "Gamuts")}}. Bei Prozentwerten entspricht `100%` dem Wert `1` und `0%` dem Wert `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Wert des Alphakanals der Farbe angibt. Dabei entspricht die Zahl `0` dem Wert `0%` (vollständig transparent) und `1` dem Wert `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alphakanal vorhanden ist. Wird der Wert für den Kanal `A` nicht ausdrücklich angegeben, beträgt er standardmäßig `100%`. Wenn er angegeben wird, steht vor dem Wert ein Schrägstrich (`/`).

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Syntax für relative Werte

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind:

- `from <color>`
  - : Beim Definieren einer relativen Farbe steht immer das Schlüsselwort `from`, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** angibt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Für die Ursprungsfarbe ist _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax möglich, auch eine weitere relative Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe bezeichnet, in der Regel einen der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, als {{CSSXref("percentage")}} oder mit dem Schlüsselwort `none` angegeben werden, das in diesem Fall `0` entspricht. Diese Werte stellen die Komponentenwerte der Ausgabefarbe dar. Bei Verwendung eines `<number>`-Werts markieren `0` und `1` im Allgemeinen die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind zulässig, liegen für den angegebenen Farbraum aber außerhalb des {{Glossary("gamut", "Gamuts")}}. Bei Prozentwerten entspricht `100%` im Allgemeinen dem Wert `1` und `0%` dem Wert `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Wert des Alphakanals der Ausgabefarbe angibt. Dabei entspricht die Zahl `0` dem Wert `0%` (vollständig transparent) und `1` dem Wert `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alphakanal vorhanden ist. Wird der Wert für den Kanal `A` nicht ausdrücklich angegeben, wird standardmäßig der Alphakanalwert der Ursprungsfarbe verwendet. Wenn der Wert angegeben wird, steht davor ein Schrägstrich (`/`).

#### Kanalwerte einer relativen Ausgabefarbe definieren

Wenn innerhalb einer `color()`-Funktion die Syntax für relative Farben verwendet wird, wandelt der Browser die Ursprungsfarbe in eine entsprechende Farbe im angegebenen Farbraum um, sofern sie nicht bereits darin angegeben ist. Die Farbe wird durch drei separate Farbkanalwerte und einen Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Kanalwerte der Ausgabefarbe festzulegen:

- Die drei Farbkanalwerte der Ursprungsfarbe werden zu jeweils einem `<number>`-Wert aufgelöst. Bei vordefinierten Farbräumen sind dies je nach angegebenem Farbraum:
  - `r`, `g` und `b`: Farbkanalwerte für die RGB-basierten Farbräume `srgb`, `srgb-linear`, `display-p3`, `display-p3-linear`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbkanalwerte für die auf CIE XYZ basierenden Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, kann aber, wie oben erläutert, auch außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Ungültig ist es, in einer `color()`-Funktion mit einem XYZ-basierten Farbraum auf `r`, `g` und `b` zu verweisen oder in einer `color()`-Funktion mit einem RGB-basierten Farbraum auf `x`, `y` und `z` zu verweisen. Auch andere Zeichen sind ungültig. Die innerhalb der Funktion verfügbaren Kanalwerte der Ursprungsfarbe müssen zum Typ des angegebenen Farbraums passen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst zu einem `<number>`-Wert zwischen einschließlich `0` und `1`.

Beim Definieren einer relativen Farbe können die einzelnen Kanäle der Ausgabefarbe auf verschiedene Arten angegeben werden. Die folgenden Beispiele veranschaulichen diese Möglichkeiten.

Die ersten beiden Beispiele verwenden die Syntax für relative Farben. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, während die Ausgabefarbe des zweiten überhaupt nicht auf der Ursprungsfarbe basiert. Damit erzeugen sie keine wirklich relativen Farben! In einem tatsächlichen Projekt würden Sie diese Varianten vermutlich nicht verwenden, sondern stattdessen einen absoluten Farbwert angeben. Die Beispiele dienen als Einstieg in die relative `color()`-Syntax.

Beginnen wir mit der Ursprungsfarbe `hsl(0 100% 50%)` (entspricht `red`). Die folgenden Funktionen würden Sie wahrscheinlich nicht schreiben, da sie dieselbe Farbe wie die Ursprungsfarbe ausgeben. Sie zeigen aber, wie sich die Kanalwerte der Ursprungsfarbe als Kanalwerte der Ausgabefarbe verwenden lassen:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabefarben dieser Funktionen sind `color(srgb 1 0 0)` beziehungsweise `color(xyz-d65 0.412426 0.212648 0.0193173)`.

Die nächsten Funktionen verwenden absolute Werte für die Kanäle der Ausgabefarbe. Sie geben dadurch völlig andere Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden jeweils zwei Kanalwerte der Ursprungsfarbe als Kanalwerte der Ausgabefarbe (`r` und `b` beziehungsweise `x` und `y`). Für den jeweils verbleibenden Ausgabekanal (`g` beziehungsweise `z`) verwenden sie einen neuen Wert. So entsteht jeweils eine relative Farbe auf Basis der Ursprungsfarbe:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe im Hintergrund in dasselbe Farbmodell wie die Ausgabefarbe umgewandelt, wenn diese ein anderes Farbmodell verwendet. So kann die Ursprungsfarbe auf kompatible Weise, also mit denselben Kanälen, dargestellt werden. Beispielsweise wird die {{cssxref("color_value/hsl", "hsl()")}}-Farbe `hsl(0 100% 50%)` im ersten Fall oben in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` umgewandelt.

In den bisherigen Beispielen dieses Abschnitts wurden weder für die Ursprungsfarbe noch für die Ausgabefarbe Alphakanäle ausdrücklich angegeben. Wird der Alphakanal der Ausgabefarbe nicht angegeben, übernimmt er standardmäßig den Alphakanalwert der Ursprungsfarbe. Wird der Alphakanal der Ursprungsfarbe nicht angegeben und handelt es sich bei ihr nicht um eine relative Farbe, beträgt sein Wert standardmäßig `1`. In den obigen Beispielen haben daher sowohl der Ursprungs- als auch der Ausgabe-Alphakanal den Wert `1`.

Sehen wir uns einige Beispiele an, in denen Alphakanalwerte für die Ursprungs- und die Ausgabefarbe angegeben werden. Im ersten Beispiel wird für den Ausgabe-Alphakanal derselbe Wert wie für den Alphakanal der Ursprungsfarbe festgelegt. Im zweiten Beispiel wird ein anderer Wert festgelegt, der nicht vom Alphakanalwert der Ursprungsfarbe abhängt.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele verwenden {{cssxref("calc")}}-Funktionen, um neue Kanalwerte für die Ausgabefarben relativ zu den Kanalwerten der Ursprungsfarbe zu berechnen:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Da die Kanalwerte der Ursprungsfarbe zu `<number>`-Werten aufgelöst werden, müssen Sie bei Berechnungen Zahlen zu ihnen addieren – auch dann, wenn ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Einen `<percentage>`-Wert zu einem `<number>`-Wert zu addieren, funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vordefinierte Farbräume mit color() verwenden

Das folgende Beispiel zeigt, wie sich unterschiedliche Werte für Helligkeit sowie die a- und b-Achse in der `color()`-Funktion auswirken.

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

### Den xyz-Farbraum mit color() verwenden

Das folgende Beispiel zeigt, wie Sie mit dem Farbraum `xyz` eine Farbe angeben.

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

### color-gamut-Medienabfragen mit color() verwenden

Dieses Beispiel zeigt, wie Sie mit der Medienabfrage [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) prüfen, ob ein bestimmter Farbraum unterstützt wird, und ihn anschließend zur Angabe einer Farbe verwenden.

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

### Relative Farben mit color() verwenden

In diesem Beispiel erhalten drei {{htmlelement("div")}}-Elemente unterschiedliche Hintergrundfarben. Das mittlere Element erhält die unveränderte Farbe `--base-color`, während das linke und das rechte Element eine aufgehellte beziehungsweise abgedunkelte Variante von `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert: Die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird an eine `color()`-Funktion übergeben. Die Kanäle `g` und `b` der Ausgabefarben werden mithilfe von `calc()`-Funktionen angepasst, um den gewünschten Effekt zu erzielen. Für die aufgehellte Farbe werden zu diesen Kanälen jeweils 15 % addiert, für die abgedunkelte Farbe werden jeweils 15 % abgezogen.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using relative colors with color()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("color")}}-Eigenschaft
- [Der Datentyp `<color>`](/de/docs/Web/CSS/Reference/Values/color_value) mit einer Liste aller Farbschreibweisen
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [Color_format_converter-Tool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- Medienmerkmal [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut)
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
