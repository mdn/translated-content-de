---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`color()`** Funktionalnotation ermöglicht es, eine Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} zu spezifizieren, im Gegensatz zu dem impliziten sRGB-Farbraum, den die meisten der anderen Farb-Funktionen verwenden.

Die Unterstützung für einen bestimmten Farbraum kann mit dem CSS-Medienmerkmal [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) erkannt werden.

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

Nachfolgend sind Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wert-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume kennzeichnet: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder als Schlüsselwort `none` (in diesem Fall entspricht `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für den Farbraum. Bei der Verwendung eines `<number>`-Wertes repräsentiert im Allgemeinen `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, werden jedoch außerhalb des {{Glossary("gamut", "Gamut")}} des gegebenen Farbraums liegen. Bei Verwendung eines Prozentwertes repräsentiert `100%` den Wert `1` und `0%` den Wert `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` entspricht (vollständig transparent) und `1` `100%` (vollständig deckend). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, wird er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für mehr Informationen über die Wirkung von `none`.

#### Relative Wert-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe kennzeichnet, im Allgemeinen einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder als Schlüsselwort `none` (in diesem Fall entspricht `0`) geschrieben werden. Diese Werte repräsentieren die Komponentenwerte für die Ausgabefarbe. Bei der Verwendung eines `<number>`-Wertes repräsentiert im Allgemeinen `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, werden jedoch außerhalb des {{Glossary("gamut", "Gamut")}} des gegebenen Farbraums liegen. Im Allgemeinen repräsentiert bei Verwendung eines Prozentwertes `100%` den Wert `1` und `0%` den Wert `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` entspricht (vollständig transparent) und `1` `100%` (vollständig deckend). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, wird er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definieren von Ausgabekanalkomponenten relativer Farben

Wenn Sie die relative Farbsyntax innerhalb einer `color()`-Funktion verwenden, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (wenn dieser nicht bereits so spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte plus einem Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um verwendet zu werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Die drei Farbkanalwerte der Ursprungsfarbe werden auf einen `<number>` aufgelöst. Für vordefinierte Farbräume, je nachdem, welcher spezifiziert ist, werden diese Werte einer der folgenden sein:
  - `r`, `g`, und `b`: Farbkanalwerte für die RGB-basierten Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb` und `rec2020`.
  - `x`, `y` und `z`: Farbkanalwerte für die CIE XYZ-basierten Farbräume `xyz`, `xyz-d50` und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, aber wie oben erklärt, können sie auch außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Das Referenzieren von `r`, `g` und `b` Werten innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y`, und `z` Werten innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum oder anderen Zeichen ist ungültig. Die innerhalb der Funktion verfügbaren Ursprungsfarbkanalwerte müssen mit dem angegebenen Typ des Farbraums übereinstimmen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst zu einem `<number>` zwischen `0` und `1`, inklusive.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Nachfolgend werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden untenstehenden Beispielen verwenden wir die relative Farbsyntax. Jedoch gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen keine wirklichen relativen Farben! Wahrscheinlich würden Sie diese nie in einem realen Code verwenden und stattdessen einfach einen absoluten Farbwert nutzen. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `color()`-Syntax eingeschlossen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Obwohl Sie die folgenden Funktionen wahrscheinlich nie schreiben würden, da sie dieselbe Farbe wie die Ursprungsfarbe ausgeben, zeigt dies, wie man die Ursprungsfarbkanalwerte als Ausgabekanalwerte verwendet:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabefarben dieser Funktionen sind `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)`, entsprechend.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben vollständig andere Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen nutzen zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b` bzw. `x` und `y`), verwenden aber einen neuen Wert für den anderen Ausgabekanalwert (`g` bzw. `z`), wodurch eine relative Farbe auf Basis der Ursprungsfarbe in jedem Fall entsteht:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe nutzt, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie in einer kompatiblen Art dargestellt werden kann (d.h. unter Verwendung derselben Kanäle). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}} Farbe `hsl(0 100% 50%)` im obigen ersten Fall in `color(srgb 1 0 0)` und im zweiten Fall in `color(xyz 0.412426 0.212648 0.5)` konvertiert.

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit spezifiziert. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert wird, wird er standardmäßig auf denselben Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert wird (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Ursprungs- und Ausgabewerte der Alphakanäle für die obigen Beispiele `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabewerte der Alphakanäle spezifizieren. Das erste Beispiel spezifiziert den Ausgabewert des Alphakanals als denselben wie den Ursprungswert des Alphakanals, während das zweite Beispiel einen anderen Ausgabewert des Alphakanals spezifiziert, der mit dem Ursprungswert des Alphakanals nicht verwandt ist.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Die folgenden Beispiele nutzen {{cssxref("calc")}}-Funktionen, um neue Kanalwerte für die Ausgabefarben zu berechnen, die relativ zu den Ursprungsfarbkanalwerten sind:

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwenden vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt die Wirkung der Variation der Lichtstärke-, a-Achsen- und b-Achsenwerte der `color()`-Funktion.

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

### Verwenden von color-gamut-Medienabfragen mit color()

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Medienabfrage verwendet wird, um die Unterstützung eines bestimmten Farbraums zu erkennen und diesen Farbraum zu verwenden, um eine Farbe zu spezifizieren.

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

### Verwenden relativer Farben mit color()

Dieses Beispiel styled drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Varianten dieser `--base-color` aufgehellt bzw. abgedunkelt werden.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion überführt und die Ausgabefarben haben ihre `g` und `b` Kanäle modifiziert, um den gewünschten Effekt durch `calc()`-Funktionen zu erreichen. Die aufgehellte Farbe hat 15% hinzugefügt zu diesen Kanälen, und die abgedunkelte Farbe hat 15% von diesen Kanälen subtrahiert.

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
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [sRGB-Farbwähler und Umwandlungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Medienmerkmal
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
