---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die funktionale Notation **`oklab()`** drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus, der versucht, die Farbwahrnehmung des menschlichen Auges nachzuahmen.

Oklab ist ein perzeptueller Farbraum und eignet sich für:

- Umwandlung eines Bildes in Graustufen, ohne die Helligkeit zu verändern.
- Anpassung der Sättigung von Farben, wobei die Nutzerwahrnehmung von Farbton und Helligkeit beibehalten wird.
- Erstellen von gleichmäßigen und einheitlichen Farbverläufen (wenn diese manuell interpoliert werden, z.B. in einem {{HTMLElement("canvas")}}-Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — a- und b-Achsen. Es kann ein breiteres Farbspektrum als RGB darstellen, einschließlich Wide-Gamut- und P3-Farben. Wenn Sie ein polares Farbsystem, Chroma und Farbton wünschen, verwenden Sie {{cssxref("color_value/oklch", "oklch()")}}.

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

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse im Oklab-Farbraum an, die bestimmt, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können Werte jedoch `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse im Oklab-Farbraum an, die bestimmt, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können Werte jedoch `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alpha-Kanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alpha-Kanal explizit festzulegen. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt er standardmäßig 100%. Wenn er enthalten ist, geht dem Wert ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt die Helligkeit der Ausgabefarbe dar. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt die Entfernung der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum dar, die bestimmt, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können Werte jedoch `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt die Entfernung der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum dar, die bestimmt, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können Werte jedoch `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alpha-Kanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alpha-Kanal explizit festzulegen. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanalwert der Ursprungsfarbe. Wenn er enthalten ist, geht dem Wert ein Schrägstrich (`/`) voraus.

#### Definieren von relativen Farbkanalausgabekomponenten

Wenn die relative Farbsyntax innerhalb einer `oklab()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine gleichwertige Oklab-Farbe (falls diese nicht bereits so angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot Achse) und `b` (blau/gelb Achse) — zuzüglich eines Alpha-Kanalwerts (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1` aufgelöst, inklusive.
- Die `a`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `-0.4` und `0.4` aufgelöst, inklusive.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Wenn Sie eine relative Farbe definieren, können die unterschiedlichen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen also keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `oklab()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte der Ursprungsfarbe (`0.627966`, `0.22488` und `0.125859`) als Ausgabewerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Diese Funktion gibt die Farbe `oklab(0.627966 0.22488 0.125859)` aus.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erstellt eine relative Farbe, die auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Wandelt die `hsl()`-Ursprungsfarbe in eine gleichwertige `oklab()`-Farbe um — `oklab(0.627966 0.22488 0.125859)`.
- Setzt die `L`- und `b`-Kanalwerte der Ausgabefarbe auf die `L`- und `b`-Kanalwerte der entsprechenden Ursprungs-`oklab()`-Farbe — diese Werte sind `0.627966` und `0.125859`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen Wert, nicht basierend auf der Ursprungsfarbe: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gezeigten Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig demselben Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es keine relative Farbe ist), beträgt er standardmäßig `1`. Daher beträgt der Ursprungs- und Ausgabefarbwert der Alpha-Kanäle für die obigen Beispiele `1`.

Betrachten wir einige Beispiele, die die Ursprungs- und Ausgabefarbwerte der Alpha-Kanäle angeben. Das erste Beispiel gibt den Ausgabefarbwert des Alpha-Kanals als den gleichen wie den Alpha-Kanal der Ursprungsfarbe an, während das zweite Beispiel einen anderen Ausgabefarbwert des Alpha-Kanals angibt, der nicht mit dem Alpha-Kanal der Ursprungsfarbe zusammenhängt.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das entsprechende `oklab()` umgewandelt — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `a`-, `b`- und `A`-Werte angewendet und resultieren in einer Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)`:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen Sie diesen, wenn Sie sie in Berechnungen verwenden, Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel führt das Hinzufügen eines `<percentage>` zu einem `<number>` zu keinem Ergebnis.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Auswirkungen des Variierens der Helligkeit, der a-Achse und der b-Achse der `oklab()`-Funktion.

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

Das folgende Beispiel zeigt die Auswirkungen des Variierens des `A` (Alpha)-Werts der `oklab()`-Funktion. Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um die Wirkung der Opazität zu demonstrieren. Durch Einstellen der Opazität des `red-alpha`-Elements auf `0.4` erscheint es transparenter als das `red`-Element.

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

Dieses Beispiel veranschaulicht die Auswirkungen der Einstellung der `a`- und `b`-Werte der `oklab()`-Funktion auf die Endpunkte und Mittelpunkte der a-Achse und b-Achse. Die a-Achse verläuft von grün (`-0.4`) bis rot (`0.4`), und die b-Achse verläuft von gelb (`-0.4`) bis blau (`0.4`).

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

Mit der CSS-{{cssxref("background-color")}}-Eigenschaft variieren wir die `a`- und `b`-Werte der `oklab()`-Funktion entlang der a-Achse und b-Achse und zeigen die Auswirkungen von maximalen, mittleren und minimalen Werten in jedem Fall.

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

Die linke Spalte befindet sich am gelben Ende (`-0.4`) der b-Achse und die rechte Spalte am blauen Ende (`0.4`). Die obere Reihe zeigt Farben am roten Ende der a-Achse (`-0.4`) und die untere Reihe befindet sich am grünen Ende (`0.4`). Die mittlere Spalte und Reihe befinden sich in den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält weder Rot, Grün, Gelb noch Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Entwicklung der Werte der `oklab()`-Funktion entlang der a-Achse (von Rot zu Grün) und entlang der b-Achse (von Gelb zu Blau) zu demonstrieren. In jedem Verlaufsbild bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten fortschreitet.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während den linken und rechten aufgehellte und abgedunkelte Varianten dieser `--base-color` zugewiesen werden.

Diese Varianten werden mithilfe relativer Farben definiert — die `--base-color`-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklab()`-Funktion übergeben, und die Ausgabefarben haben ihren Lichtkanal modifiziert, um den gewünschten Effekt mit einer `calc()`-Funktion zu erzielen. Der aufgehellte Farbton hat `0.15` (15%) zum Lichtkanal hinzugefügt, und der abgedunkelte Farbton hat `0.15` (15%) vom Lichtkanal subtrahiert.

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

- Der [`<color>`-Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbschreibweisen
- {{cssxref("color_value/lab","lab()")}}- und {{cssxref("color_value/oklch","oklch()")}}-Farbfunktionen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB-Farbkreis](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
