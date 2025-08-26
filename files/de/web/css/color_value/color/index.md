---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: cd3fbb8b10186d3466ab16d590978d5c10882875
---

Die **`color()`** Funktionsnotation erlaubt die Spezifikation einer Farbe in einem bestimmten, angegebenen {{Glossary("color_space", "Farbraum")}} anstatt im impliziten sRGB Farbraum, in dem die meisten anderen Farbfunktionsoperate arbeiten.

Die Unterstützung für einen bestimmten Farbraum kann mit dem [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) CSS-Media-Feature erkannt werden.

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

Nachfolgend sind die Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) angegeben.

#### Absolute-Werte-Syntax

```plain
color(colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das einen der vordefinierten Farbräume bezeichnet: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder als Schlüsselwort `none` (was in diesem Fall `0` entspricht) geschrieben werden. Diese Werte stellen die Komponentwerte des Farbraums dar. Bei der Verwendung eines `<number>`-Werts repräsentiert in der Regel `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, liegen jedoch außerhalb des {{Glossary("gamut", "Gamuts")}} für den gegebenen Farbraum. Bei der Verwendung eines Prozentwertes repräsentiert `100%` die `1` und `0%` die `0`.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal zu spezifizieren. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn er enthalten ist, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative-Werte-Syntax

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer einbezogen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `colorspace`
  - : Ein {{CSSXref("&lt;ident&gt;")}}, das den {{Glossary("color_space", "Farbraum")}} der Ausgabefarbe bezeichnet, üblicherweise einer der vordefinierten Farbräume: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` oder `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Jeder Wert kann als {{CSSXref("number")}}, {{CSSXref("percentage")}} oder als Schlüsselwort `none` (was in diesem Fall `0` entspricht) geschrieben werden. Diese Werte stellen die Komponentwerte für die Ausgabefarbe dar. Bei der Verwendung eines `<number>`-Werts repräsentiert in der Regel `0` bis `1` die Grenzen des Farbraums. Werte außerhalb dieses Bereichs sind erlaubt, liegen jedoch außerhalb des {{Glossary("gamut", "Gamuts")}} für den gegebenen Farbraum. Generell, bei der Verwendung eines Prozentwerts, repräsentiert `100%` die `1` und `0%` die `0`.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal zu spezifizieren. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

#### Definition der Ausgabekanal-Komponenten relativer Farben

Bei der Verwendung von relativer Farbsyntax in einer `color()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Farbe im angegebenen Farbraum (wenn sie nicht bereits so angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte plus einem Alpha-Kanal-Wert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Ausgabefarbkanalwerte zu definieren:

- Die drei Farbkanalwerte der Ursprungsfarbe werden auf eine `<number>`-Zahl aufgelöst. Für vordefinierte Farbräume, je nach Angabe, werden diese Werte eines der folgenden sein:
  - `r`, `g`, und `b`: Farbkanalwerte für die RGB-basierten Farbräume `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, und `rec2020`.
  - `x`, `y`, und `z`: Farbkanalwerte für die CIE-XYZ-basierten Farbräume `xyz`, `xyz-d50`, und `xyz-d65`.

    > [!NOTE]
    > Jeder dieser Werte liegt normalerweise zwischen `0` und `1`, kann jedoch, wie oben beschrieben, außerhalb dieser Grenzen liegen.

    > [!NOTE]
    > Die Bezugnahme auf `r`, `g`, und `b`-Werte innerhalb einer `color()`-Funktion mit einem XYZ-basierten Farbraum, `x`, `y`, und `z`-Werte innerhalb einer `color()`-Funktion mit einem RGB-basierten Farbraum, oder jede andere Zeichen ist ungültig. Die innerhalb der Funktion verfügbaren Ursprungsfarbkanalwerte müssen dem angegebenen Typ des Farbraums entsprechen.

- `alpha`: Der Transparenzwert der Farbe, aufgelöst auf eine `<number>`-Zahl zwischen `0` und `1`, einschließlich.

Beim Definieren einer relativen Farbe können die unterschiedlichen Kanäle der Ausgabefarbe in verschiedenen Weisen ausgedrückt werden. Nachfolgend werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen verwenden wir relative Farbsyntax. Jedoch gibt das erste Beispiel die gleiche Farbe wie die Ursprungsfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen nicht wirklich relative Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem echten Codebasis verwenden würden, sondern wahrscheinlich eher einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `color()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Während es unwahrscheinlich ist, dass Sie die folgenden Funktionen jemals schreiben werden, weil sie die gleiche Farbe wie die Ursprungsfarbe ausgeben, zeigen diese, wie man die Ursprungsfarbkanalwerte als Ausgabekanalwerte verwendet:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Die Ausgabe dieser Funktionen sind `color(srgb 1 0 0)` und `color(xyz-d65 0.412426 0.212648 0.0193173)`, jeweils.

Die nächsten Funktionen verwenden absolute Werte für die Ausgabefarbkanalwerte und geben komplett andere Farben aus, die nicht auf der Ursprungsfarbe basieren:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Computed output color: color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */
```

Die folgenden Funktionen verwenden zwei der Ursprungsfarbkanalwerte für die Ausgabefarbkanalwerte (`r` und `b`, sowie `x` und `y`), verwenden jedoch einen neuen Wert für den anderen Ausgabekanalwert (`g` und `z`), und erzeugen so eine relative Farbe, die jeweils auf der Ursprungsfarbe basiert:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Computed output color: color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe in einen anderen Farbmodell als die Ausgabefarbe auf den gleichen Modell wie die Ausgabefarbe im Hintergrund konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung der gleichen Kanäle). Zum Beispiel wird die {{cssxref("color_value/hsl", "hsl()")}} Farbe `hsl(0 100% 50%)` im obengenannten ersten Fall zu `color(srgb 1 0 0)` und im zweiten Fall zu `color(xyz 0.412426 0.212648 0.5)` konvertiert.

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch die Ausgabefarben explizit angegeben. Wenn der Ausgabefarben-Alpha-Kanal nicht spezifiziert ist, entspricht er standardmäßig dem gleichen Wert wie der Ursprungsfarb-Alpha-Kanal. Wenn der Ursprungsfarb-Alpha-Kanal nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), entspricht er standardmäßig `1`. Daher haben die obigen Beispiele Ursprungs- und Ausgabefarbe-Alpha-Kanal-Werte von `1`.

Schauen wir uns einige Beispiele an, bei denen die Ursprungs- und Ausgabefarbe-Alpha-Kanal-Werte angegeben werden. Das erste Beispiel gibt den Ausgabefarbe-Alpha-Kanal-Wert als gleich dem Ursprungs-Alpha-Kanal-Wert an, während das zweite Beispiel einen anderen Ausgabefarbe-Alpha-Kanal-Wert angibt, der nichts mit dem Ursprungs-Alpha-Kanal-Wert zu tun hat.

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
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einer `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung vordefinierter Farbräume mit color()

Das folgende Beispiel zeigt die Auswirkungen der Variation der Helligkeits-, a-Achsen- und b-Achsen-Werte der `color()`-Funktion.

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

Das folgende Beispiel zeigt, wie der `xyz`-Farbraum verwendet wird, um eine Farbe zu spezifizieren.

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

Dieses Beispiel zeigt, wie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media Query verwendet wird, um die Unterstützung für einen bestimmten Farbraum zu erkennen und diesen Farbraum zur Farbspezifikation zu nutzen.

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

Dieses Beispiel stylt drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während die linken und rechten eine aufgehellte und eine verdunkelte Variante dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung von relativen Farben definiert – die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `color()`-Funktion übergeben, und die Ausgabefarben haben ihre `g`- und `b`-Kanäle modifiziert, um den gewünschten Effekt mittels `calc()`-Funktionen zu erreichen. Der aufgehellten Farbe werden 15 % zu diesen Kanälen hinzugefügt, und der verdunkelten Farbe werden 15 % von diesen Kanälen abgezogen.

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
- [sRGB Farbpicker und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) Media-Feature
- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
