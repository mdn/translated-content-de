---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die funktionale Notation **`oklab()`** drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus, der versucht zu imitieren, wie Farbe vom menschlichen Auge wahrgenommen wird.

Oklab ist ein perzeptueller Farbraum und ist nützlich, um:

- Ein Bild in Graustufen zu transformieren, ohne die Helligkeit zu ändern.
- Die Sättigung von Farben zu modifizieren, während die Benutzerwahrnehmung von Farbton und Helligkeit beibehalten wird.
- Glatte und einheitliche Farbverläufe zu erzeugen (wenn manuell interpoliert, zum Beispiel in einem {{HTMLElement("canvas")}}-Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — a- und b-Achsen. Es kann einen größeren Farbbereich darstellen als RGB, einschließlich Wide-Gamut und P3-Farben. Wenn Sie ein polares Farbsystem wünschen, Chroma und Farbton, verwenden Sie {{cssxref("color_value/oklch", "oklch()")}}.

## Syntax

```css
/* Absolute values */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Relative values */
oklab(from green l a b / 0.5)
oklab(from #123456 calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### Werte

Nachfolgend sind die Beschreibungen der erlaubten Werte für absolute und [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt den Abstand der Farbe entlang der `a`-Achse im Oklab-Farbraum an, der definiert, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (positive und negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte über die Grenzen von `±0.4` (`±100%`) hinaus setzen können. In der Praxis können Werte nicht `±0.5` überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt den Abstand der Farbe entlang der `b`-Achse im Oklab-Farbraum an, der definiert, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (positive und negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte über die Grenzen von `±0.4` (`±100%`) hinaus setzen können. In der Praxis können Werte nicht `±0.5` überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanalwert der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird standardmäßig 100% angenommen. Wenn er enthalten ist, steht der Wert vor einem Schrägstrich (`/`).

> [!NOTE]
> Weitere Informationen über die Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ausgangsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ausgangsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum, der definiert, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (positive und negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte über die Grenzen von `±0.4` (`±100%`) hinaus setzen können. In der Praxis können Werte nicht `±0.5` überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum, der definiert, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (positive und negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte über die Grenzen von `±0.4` (`±100%`) hinaus setzen können. In der Praxis können Werte nicht `±0.5` überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanalwert der Ausgabefarbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird standardmäßig der Alpha-Kanalwert der Ausgangsfarbe angenommen. Wenn er enthalten ist, steht der Wert vor einem Schrägstrich (`/`).

#### Definition von Ausgabekanal-Komponenten für relative Farben

Wenn bei der relativen Farbsyntax innerhalb einer `oklab()`-Funktion eine Ausgangsfarbe verwendet wird, konvertiert der Browser die Ausgangsfarbe in eine äquivalente Oklab-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe ist als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) — plus einen Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Ausgabefarbkanalwerte zu definieren:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.
- Die `a`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `-0.4` und `0.4` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Unten sehen wir uns einige Beispiele an, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe aus wie die Ausgangsfarbe und das zweite ergibt eine Farbe, die überhaupt nicht auf der Ausgangsfarbe basiert. Sie erzeugen keine realen relativen Farben! Sie würden diese wahrscheinlich nie in einem echten Codebasis verwenden und würden stattdessen wahrscheinlich einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `oklab()`-Syntax aufgenommen.

Beginnen wir mit einer Ausgangsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion ergibt dieselbe Farbe wie die Ausgangsfarbe — sie verwendet die `l`-, `a`- und `b`-Kanalwerte der Ausgangsfarbe (`0.627966`, `0.22488` und `0.125859`) als Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und ergibt eine völlig andere Farbe, die nicht auf der Ausgangsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ausgangsfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ausgangsfarbe in eine äquivalente `oklab()`-Farbe — `oklab(0.627966 0.22488 0.125859)`.
- Setzt die `L`- und `b`-Kanalwerte der Ausgabefarbe auf diejenigen des äquivalenten `oklab()` der Ausgangsfarbe — diese Werte sind `0.627966` und `0.125859`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen, nicht auf der Ausgangsfarbe basierenden Wert: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ausgangsfarbe, wenn das Modell der Ausgabefarbe ein anderes ist als das der Ausgangsfarbe, im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie auf eine kompatible Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ausgangs- noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, ist er standardmäßig derselbe wie der Alphakanal der Ausgangsfarbe. Wenn der Alphakanal der Ausgangsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher beträgt der Alphakanalwert der Ausgangs- und der Ausgabefarbe für die obigen Beispiele `1`.

Werfen wir einen Blick auf einige Beispiele, die Ausgangs- und Ausgabefarbkanalwerte angeben. Das erste spezifiziert den Ausgabefarbkanalwert als denselben wie den Alphakanalwert der Ausgangsfarbe, während das zweite einen anderen Ausgabefarbkanalwert angibt, der nicht mit dem Alphakanalwert der Ausgangsfarbe zusammenhängt.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ausgangsfarbe erneut in die `oklab()`-Äquivalente umgewandelt — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}} Berechnungen werden auf die `L`-, `a`-, `b`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` führt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ausgangsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Wirkung der Variation der Helligkeits-, a-Achsen- und b-Achsenwerte der `oklab()`-Funktion.

#### HTML

```html
<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>

<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
[data-color="red-dark"] {
  background-color: oklab(0.05 0.4 0.4);
}
[data-color="red"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-light"] {
  background-color: oklab(0.95 0.4 0.4);
}

[data-color="green-dark"] {
  background-color: oklab(5% -100% 0.4);
}
[data-color="green"] {
  background-color: oklab(50% -100% 0.4);
}
[data-color="green-light"] {
  background-color: oklab(95% -100% 0.4);
}

[data-color="blue-dark"] {
  background-color: oklab(0.05 -0.3 -0.4);
}
[data-color="blue"] {
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.95 -0.3 -0.4);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting", "", "200")}}

### Anpassung der Transparenz

Das folgende Beispiel zeigt die Wirkung der Variation des `A`- (Alpha-) Werts der `oklab()`-Funktion. Die `red`- und `red-alpha`-Elemente überlagern das `#background-div`-Element, um den Effekt der Transparenz zu demonstrieren. Durch das Geben des `red-alpha`-Elements einer Transparenz von `0.4` erscheint es transparenter als das `red`-Element.

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
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
#background-div {
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklab(0.628 0.225 0.126);
}
[data-color="red-alpha"] {
  background-color: oklab(0.628 0.225 0.126 / 0.4);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_opacity", "100%", 155)}}

### Anpassung der Farbachsen

Dieses Beispiel demonstriert die Auswirkungen der Einstellung der `a`- und `b`-Werte der `oklab()`-Funktion auf die Endpunkte und Mittelpunkte der a-Achse und b-Achse. Die a-Achse verläuft von grün (`-0.4`) zu rot (`0.4`) und die b-Achse von gelb (`-0.4`) zu blau (`0.4`).

#### HTML

```html
<div data-color="red-yellow"></div>
<div data-color="red-zero"></div>
<div data-color="red-blue"></div>

<div data-color="zero-yellow"></div>
<div data-color="zero-zero"></div>
<div data-color="zero-blue"></div>

<div data-color="green-yellow"></div>
<div data-color="green-zero"></div>
<div data-color="green-blue"></div>
```

#### CSS

Mit der CSS-{{cssxref("background-color")}}-Eigenschaft variieren wir die `a`- und `b`-Werte der `oklab()`-Farbfunktion entlang der a-Achse und der b-Achse und zeigen die Effekte von maximalen, mittleren und minimalen Werten in jedem Fall.

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
/* a-axis max, variable b-axis */
[data-color="red-yellow"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-zero"] {
  background-color: oklab(0.5 0.4 0);
}
[data-color="red-blue"] {
  background-color: oklab(0.5 0.4 -0.4);
}

/* a-axis center, variable b-axis */
[data-color="zero-yellow"] {
  background-color: oklab(0.5 0 0.4);
}
[data-color="zero-zero"] {
  background-color: oklab(0.5 0 0);
}
[data-color="zero-blue"] {
  background-color: oklab(0.5 0 -0.4);
}

/* a-axis min, variable b-axis */
[data-color="green-yellow"] {
  background-color: oklab(0.5 -0.4 0.4);
}
[data-color="green-zero"] {
  background-color: oklab(0.5 -0.4 0);
}
[data-color="green-blue"] {
  background-color: oklab(0.5 -0.4 -0.4);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_color_axes", "", "200")}}

Die linke Spalte befindet sich am gelben Ende (`-0.4`) der b-Achse und die rechte Spalte am blauen Ende (`0.4`). Die oberste Reihe zeigt Farben am roten Ende der a-Achse (`-0.4`) und die unterste Reihe am grünen Ende (`0.4`). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Gradienten entlang der a-Achse und der b-Achse

Dieses Beispiel enthält lineare Gradienten, um den Verlauf der Werte der `oklab()`-Funktion entlang der a-Achse (von rot nach grün) und entlang der b-Achse (von gelb nach blau) zu demonstrieren. In jedem Gradientenbild bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten verläuft.

```html hidden
<div data-color="red-to-green-yellow">
  <span>red</span><span>`b`= -0.4 (yellow)</span><span>green</span>
</div>
<div data-color="red-to-green-zero">
  <span>red</span><span>no yellow or blue</span><span>green</span>
</div>
<div data-color="red-to-green-blue">
  <span>red</span><span>`b`= 0.4 (blue)</span><span>green</span>
</div>

<div data-color="yellow-to-blue-red">
  <span>yellow</span><span>`a` = -0.4 (red)</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-zero">
  <span>yellow</span><span>no red or green</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-green">
  <span>yellow</span><span>`a` = 0.4 (green)</span><span>blue</span>
</div>
```

#### CSS

```css hidden
div {
  height: 50px;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  background-color: #ffffffcc;
  padding: 3px;
}
```

```css-nolint
/* a-axis gradients */
[data-color="red-to-green-yellow"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% -0.4 0.4));
}
[data-color="red-to-green-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0), oklab(50% -0.4 0));
}
[data-color="red-to-green-blue"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 -0.4), oklab(50% -0.4 -0.4));
}

/* b-axis gradients */
[data-color="yellow-to-blue-red"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% 0.4 -0.4));
}
[data-color="yellow-to-blue-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0 0.4), oklab(50% 0 -0.4));
}
[data-color="yellow-to-blue-green"] {
  background-image: linear-gradient(to right, oklab(50% -0.4 0.4),oklab(50% -0.4 -0.4));
}
```

#### Ergebnis

{{EmbedLiveSample("Linear gradients along the a-axis and b-axis", '', '420')}}

### Verwendung relativer Farben mit oklab()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Farbvarianten dieser `--base-color` aufgehellt bzw. abgedunkelt werden.

Diese Varianten werden unter Verwendung relativer Farben definiert – die `--base-color`-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `oklab()`-Funktion übergeben, und die Ausgabefarbkanäle werden modifiziert, um den gewünschten Effekt durch eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat `0.15` (15%) zur Helligkeit hinzugefügt, und die abgedunkelte Farbe hat `0.15` (15%) von der Helligkeit subtrahiert.

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
  background-color: oklab(from var(--base-color) calc(l + 0.15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklab(from var(--base-color) calc(l - 0.15) a b);
}
```

#### Ergebnis

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`<color>`-Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- {{cssxref("color_value/lab","lab()")}}- und {{cssxref("color_value/oklch","oklch()")}}-Funktionen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB-Farbrad](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
