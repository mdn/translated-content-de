---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`oklab()`** Funktionsnotation drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus, der versucht, die Wahrnehmung von Farbe durch das menschliche Auge nachzuahmen.

Oklab ist ein perzeptueller Farbraum und nützlich für:

- Das Umwandeln eines Bildes in Graustufen, ohne die Helligkeit zu ändern.
- Das Ändern der Sättigung von Farben, wobei die Benutzerwahrnehmung von Farbton und Helligkeit erhalten bleibt.
- Das Erstellen glatter und gleichmäßiger Farbverläufe (zum Beispiel bei manueller Interpolation in einem {{HTMLElement("canvas")}}-Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — a- und b-Achsen. Es kann einen größeren Bereich an Farben als RGB darstellen, einschließlich Wide-Gamut- und P3-Farben. Wenn Sie ein polares Farbsystem, Chroma und Farbton verwenden möchten, nutzen Sie {{cssxref("color_value/oklch", "oklch()")}}.

## Syntax

```css
/* Absolute values */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Relative values */
oklab(from green l a b / 0.5)
oklab(from #0000FF calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntax für absolute Werte

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse im Oklab-Farbraum an, die bestimmt, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse im Oklab-Farbraum an, die bestimmt, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben wird, ist der Standardwert 100%. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Syntax für relative Werte

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum, die bestimmt, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum, die bestimmt, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben wird, ist der Standardwert der Alphakanalwert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

#### Definition der Ausgabekanalkomponenten von relativen Farben

Bei der Verwendung von relativer Farbsyntax innerhalb einer `oklab()`-Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente Oklab-Farbe um (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert: `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) sowie ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf ein `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.
- Die `a`- und `b`-Kanäle werden jeweils auf ein `<number>` zwischen `-0.4` und `0.4`, einschließlich, aufgelöst.
- Der `alpha`-Kanal wird auf ein `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weisen ausgedrückt werden. Nachfolgend betrachten wir einige Beispiele, um diese zu verdeutlichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen tatsächlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem realen Code verwenden würden; wahrscheinlich würden Sie stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `oklab()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte (`0.627966`, `0.22488`, und `0.125859`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In dem obigen Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erstellt eine relative Farbe, die auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

In diesem Beispiel:

- Wird die `hsl()`-Ursprungsfarbe in eine äquivalente `oklab()`-Farbe umgewandelt — `oklab(0.627966 0.22488 0.125859)`.
- Werden die `L`- und `b`-Kanalwerte der Ausgabefarbe auf diejenigen der äquivalenten `oklab()`-Ursprungsfarbe gesetzt — diese Werte sind `0.627966` und `0.125859`.
- Wird der `a`-Kanalwert der Ausgabefarbe auf einen neuen, nicht auf der Ursprungsfarbe basierenden Wert gesetzt: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert ist, wird er standardmäßig auf denselben Wert wie der Alphakanal der Ursprungsfarbe eingestellt. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Ursprungs- und Ausgabe-Alphakanalwerte `1` für die obigen Beispiele.

Sehen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarben-Alphakanalwerte angeben. Das erste Beispiel gibt den Ausgabefarben-Alphakanalwert als gleich dem Ursprungs-Alphakanalwert an, während das zweite Beispiel einen anderen Ausgabefarben-Alphakanalwert ohne Bezug zum Ursprungs-Alphakanalwert angibt.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in die `oklab()`-äquivalente umgewandelt — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `a`-, `b`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` führt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Wirkung der Variation der Helligkeits-, a-Achsen- und b-Achsen-Werte der `oklab()`-Funktion.

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

### Anpassung der Opazität

Das folgende Beispiel zeigt die Wirkung der Variation des `A` (Alpha)-Wertes der `oklab()`-Funktion. Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Opazität zu demonstrieren. Wenn dem `red-alpha`-Element eine Opazität von `0.4` zugewiesen wird, erscheint es transparenter als das `red`-Element.

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

Dieses Beispiel demonstriert die Auswirkungen der Einstellung der `a`- und `b`-Werte der `oklab()`-Funktion auf die End- und Mittelpunkte der a-Achse und b-Achse. Die a-Achse verläuft von grün (`-0.4`) zu rot (`0.4`) und die b-Achse verläuft von gelb (`-0.4`) zu blau (`0.4`).

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

Mit der CSS-Eigenschaft {{cssxref("background-color")}} variieren wir die `a`- und `b`-Werte der `oklab()`-Farbfunktionslang der a-Achse und der b-Achse und zeigen die Auswirkungen von maximalen, mittleren und minimalen Werten in jedem Fall.

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

Die linke Spalte befindet sich am gelben Ende (`-0.4`) der b-Achse, und die rechte Spalte befindet sich am blauen Ende (`0.4`). Die oberste Reihe zeigt Farben am roten Ende der a-Achse (`-0.4`), und die unterste Reihe befindet sich am grünen Ende (`0.4`). Die mittlere Spalte und die mittlere Reihe befinden sich an den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um den Fortschritt der Werte der `oklab()`-Funktion entlang der a-Achse (von rot zu grün) und entlang der b-Achse (von gelb zu blau) zu demonstrieren. In jedem Verlauf bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten fortschreitet.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Varianten dieser `--base-color` aufgehellt und abgedunkelt werden.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in einer `oklab()`-Funktion verwendet, und die Ausgabefarben haben ihren Helligkeitskanal mithilfe einer `calc()`-Funktion modifiziert, um den gewünschten Effekt zu erzielen. Die aufgehellte Farbe hat `0.15` (15%) zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat `0.15` (15%) vom Helligkeitskanal abgezogen.

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

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farb Funktionen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Ein perzeptueller Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB Farbkreis](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
