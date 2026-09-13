---
title: "`oklab()` CSS-Funktion"
short-title: oklab()
slug: Web/CSS/Reference/Values/color_value/oklab
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die **`oklab()`** Funktionsnotation gibt eine Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} an, der versucht, nachzubilden, wie Farben vom menschlichen Auge wahrgenommen werden.

Oklab ist ein wahrnehmungsbasierter Farbraum und ist nützlich für:

- Das Umwandeln eines Bildes in Graustufen, ohne die Helligkeit zu ändern.
- Das Ändern der Sättigung von Farben, während die Wahrnehmung von Farbton und Helligkeit erhalten bleibt.
- Das Erstellen von glatten und einheitlichen Farbverläufen (wenn zum Beispiel manuell in einem {{HTMLElement("canvas")}}-Element interpoliert wird).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — a- und b-Achsen. Es kann eine breitere Farbpalette als RGB darstellen, einschließlich Breitgamas und P3-Farben. Wenn Sie ein polares Farbsystem wünschen, verwenden Sie chroma und hue mit {{cssxref("color_value/oklch", "oklch()")}}.

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

Nachfolgend sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Stichwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Stichwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt den Abstand der Farbe entlang der `a`-Achse im Oklab-Farbraum an, die definiert, wie grün (Bewegung zu `-0.4`) oder rot (Bewegung zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis dürfen Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Stichwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt den Abstand der Farbe entlang der `b`-Achse im Oklab-Farbraum an, die definiert, wie blau (Bewegung zu `-0.4`) oder gelb (Bewegung zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis dürfen Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Stichwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Stichwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jeder_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Stichwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Stichwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum, die definiert, wie grün (Bewegung zu `-0.4`) oder rot (Bewegung zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis dürfen Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Stichwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum, die definiert, wie blau (Bewegung zu `-0.4`) oder gelb (Bewegung zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis dürfen Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Stichwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er dem Alphakanalwert der Ursprungsfarbe. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition von relativen Farbausgabekanalkomponenten

Wenn die relative Farbsyntax in einer `oklab()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklab-Farbe (falls nicht bereits als solche angegeben). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rote Achse) und `b` (blau/gelbe Achse) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.
- Die `a`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `-0.4` und `0.4`, einschließlich, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen keine echten relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einer realen Codebasis verwenden würden, und würden wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um die `oklab()`-Syntax zu lernen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte der Ursprungsfarbe (`0.627966`, `0.22488` und `0.125859`) als Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe der Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die ausgegebene Farbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

In diesem Beispiel:

- Die `hsl()`-Ursprungsfarbe wird in eine äquivalente `oklab()`-Farbe konvertiert — `oklab(0.627966 0.22488 0.125859)`.
- Die `L`- und `b`-Kanäle für die Ausgabefarbe werden auf diejenigen der Ursprungs-`oklab()`-Äquivalente gesetzt — diese Werte sind `0.627966` und `0.125859`.
- Der `a`-Kanalwert der Ausgabefarbe wird auf einen neuen Wert gesetzt, der nicht auf der Ursprungsfarbe basiert: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe konvertiert, sodass sie in einer für die Kanäle kompatiblen Weise dargestellt werden kann.

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungsfarbe noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig demselben Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Ursprungs- und Ausgabefarb-Alphakanalwerte in den obigen Beispielen `1`.

Lassen Sie uns einige Beispiele ansehen, die Ursprungs- und Ausgabefarb-Alphakanalwerte angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabefarbe an, der dem Ursprungs-Alphakanalwert entspricht, während das zweite Beispiel einen anderen Ausgabefarb-Alphakanalwert angibt, der nicht mit dem Ursprungs-Alphakanalwert zusammenhängt.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das `oklab()`-Äquivalent konvertiert — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `a`-, `b`- und `A`-Werte angewendet, wodurch eine Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` entsteht:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie bei der Verwendung in Berechnungen Zahlen zu ihnen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassen der Helligkeit

Das folgende Beispiel zeigt den Effekt der Variierung der Helligkeit, a-Achse und b-Achse Werte der `oklab()`-Funktion.

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

### Anpassen der Deckkraft

Das folgende Beispiel zeigt den Effekt der Variierung des `A` (alpha) Wertes der `oklab()`-Funktion.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren.
Durch das Zuweisen einer Deckkraft von `0.4` an das `red-alpha`-Element erscheint es durchsichtiger als das `red`-Element.

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

### Anpassen der Farbachsen

Dieses Beispiel demonstriert die Effekte, die entstehen, wenn die `a`- und `b`-Werte der `oklab()`-Funktion auf die Endpunkte und Mittelpunkte der a-Achse und b-Achse gesetzt werden. Die a-Achse reicht von grün (`-0.4`) nach rot (`0.4`) und die b-Achse reicht von gelb (`-0.4`) nach blau (`0.4`).

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

Mit der CSS-Eigenschaft {{cssxref("background-color")}} variieren wir die `a`- und `b`-Werte der `oklab()`-Funktion entlang der a-Achse und der b-Achse, um die Effekte der maximalen, mittleren und minimalen Werte in jedem Fall zu zeigen.

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

Die linke Spalte befindet sich am gelben Ende (`-0.4`) der b-Achse und die rechte Spalte befindet sich am blauen Ende (`0.4`). Die oberste Reihe zeigt Farben am roten Ende der a-Achse (`-0.4`) und die untere Reihe befindet sich am grünen Ende (`0.4`). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau und hat einen `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um den Verlauf der Werte der `oklab()`-Funktion entlang der a-Achse (von rot nach grün) und entlang der b-Achse (von gelb nach blau) zu demonstrieren. In jedem Verlaufsbild bleibt eine Achse statisch, während die andere Achse sich von niedrigen zu hohen Werten bewegt.

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

### Verwendung von relativen Farben mit oklab()

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestaltet. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten eine aufgehellte und eine abgedunkelte Variante dieser `--base-color` erhalten.

Diese Varianten sind mit relativen Farben definiert — die `--base-color`- [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `oklab()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal so modifiziert, dass der gewünschte Effekt durch eine `calc()`-Funktion erzielt wird. Die aufgehellte Farbe hat `0.15` (15%) zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat `0.15` (15%) vom Helligkeitskanal abgezogen.

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

- Der [`<color>` Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) für eine Liste aller Farbnachweise
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farb-Funktionen
- [Verwenden von relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB color wheel](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
