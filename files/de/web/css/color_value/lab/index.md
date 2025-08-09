---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`lab()`** Funktionsnotation beschreibt eine gegebene Farbe im CIE L\*a\*b\* {{Glossary("color_space", "Farbraum")}}.

Lab repräsentiert das gesamte Spektrum der vom Menschen wahrnehmbaren Farben, indem es die Helligkeit der Farbe, einen Rot/Grün-Achsenwert, einen Blau/Gelb-Achsenwert und einen optionalen Alpha-Transparenzwert spezifiziert.

## Syntax

```css
/* Absolute values */
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);

/* Relative values */
lab(from green l a b / 0.5)
lab(from #123456 calc(l + 10) a b)
lab(from hsl(180 100% 50%) calc(l - 10) a b)
```

### Werte

Im Folgenden finden Sie Beschreibungen der zulässigen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert gibt die Helligkeit der Farbe an. Hierbei entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse an, die beschreibt, wie grün (Richtung `-125`) oder rot (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der Begrenzungen `±125` (`±100%`) festlegen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse an, die beschreibt, wie blau (Richtung `-125`) oder gelb (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen festlegen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert `100%`. Wenn der Wert enthalten ist, wird er von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für mehr Informationen über den Effekt von `none`.

#### Relative Wertsyntax

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ausgangsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ausgangsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer weiteren relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hierbei entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse, die beschreibt, wie grün (Richtung `-125`) oder rot (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der Begrenzungen `±125` (`±100%`) festlegen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse, die beschreibt, wie blau (Richtung `-125`) oder gelb (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen festlegen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, nimmt er standardmäßig den Alpha-Kanalwert der Ausgangsfarbe an. Wenn der Wert enthalten ist, wird er von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Normalerweise, wenn Prozentwerte ein numerisches Äquivalent in CSS haben, ist `100%` gleich der Zahl `1`. Dies ist nicht immer der Fall bei LABs Helligkeit und `a`- und `b`-Achsen, wie oben erwähnt. Bei `L` reicht der Bereich von 0 bis 100, wobei `100%` gleich `100` ist. Die `a`- und `b`-Werte unterstützen sowohl negative als auch positive Werte, wobei `100%` gleich `125` und `-100%` gleich `-125` ist.

#### Definition von relativen Farbausgabekanalkomponenten

Wenn relative Farbsyntax innerhalb einer `lab()`-Funktion verwendet wird, konvertiert der Browser die Ausgangsfarbe in eine äquivalente Lab-Farbe (falls diese nicht bereits so spezifiziert ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `l` (Helligkeit), `a` (Grün/Rot-Achse) und `b` (Blau/Gelb-Achse) — plus einem Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird in eine `<number>` zwischen `0` und `100` aufgelöst.
- Die `a`- und `b`-Kanäle werden jeweils in eine `<number>` zwischen `-125` und `125` aufgelöst.
- Der `alpha`-Kanal wird in eine `<number>` zwischen `0` und `1` aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Im ersten wird jedoch die gleiche Farbe wie die Ausgangsfarbe ausgegeben und im zweiten eine Farbe, die überhaupt nicht auf der Ausgangsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `lab()`-Syntax hinzugefügt.

Beginnen wir mit einer Ausgangsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt die gleiche Farbe wie die Ausgangsfarbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte (`54.29`, `80.8198` und `69.8997`) der Ausgangsfarbe als Ausgabekanäle:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ausgangsfarbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die Ausgabefarbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ausgangsfarbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

In diesem Beispiel:

- Wird die `hsl()`-Ausgangsfarbe in eine äquivalente `lab()`-Farbe umgewandelt — `lab(54.29 80.8198 69.8997)`.
- Werden die `l`- und `b`-Kanäle der Ausgabefarbe auf diejenigen der `L`- und `b`-Kanäle der entsprechenden `lab()`-Ausgangsfarbe gesetzt — diese Werte sind `54.29` und `69.8997`.
- Wird der `a`-Kanal der Ausgabefarbe auf einen neuen Wert gesetzt, der nicht auf der Ausgangsfarbe basiert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ausgangsfarbe verwendet, wird die Ausgangsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. gleiche Kanäle verwendet).

In den Beispielen, die wir in diesem Abschnitt bisher gesehen haben, wurden die Alpha-Kanäle weder für die Ausgangs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, nimmt er standardmäßig den gleichen Wert wie der Alpha-Kanal der Ausgangsfarbe an. Wenn der Alpha-Kanal der Ausgangsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Alpha-Kanalwerte für Ausgangs- und Ausgabefarben in den obigen Beispielen `1`.

Sehen wir uns einige Beispiele an, die die Alpha-Kanalwerte für Ausgangs- und Ausgabefarben angeben. Das erste Beispiel gibt an, dass der Alpha-Kanalwert der Ausgabe dem der Ausgangsfarbe entspricht, während das zweite Beispiel einen anderen Ausgabekanalwert angibt, der nicht mit dem der Ausgangsfarbe in Verbindung steht.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ausgangsfarbe erneut in das `lab()`-Äquivalent umgewandelt — `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}} Berechnungen werden auf die `L`, `a`, `b` und `A`-Werte angewendet, was in einer Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)` resultiert:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanäle der Ausgangsfarbe in `<number>`-Werte aufgelöst werden, müssen Sie bei der Verwendung in Berechnungen Zahlen hinzufügen, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Helligkeit anpassen

Das folgende Beispiel zeigt den Effekt der Variation des Helligkeitswerts der `lab()`-Funktion.

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
  background-color: lab(5 125 71);
}
[data-color="red"] {
  background-color: lab(40 125 71);
}
[data-color="red-light"] {
  background-color: lab(95 125 71);
}

[data-color="green-dark"] {
  background-color: lab(10% -120 125);
}
[data-color="green"] {
  background-color: lab(50% -120 125);
}
[data-color="green-light"] {
  background-color: lab(90% -120 125);
}

[data-color="blue-dark"] {
  background-color: lab(10 -120 -120);
}
[data-color="blue"] {
  background-color: lab(50 -120 -120);
}
[data-color="blue-light"] {
  background-color: lab(90 -120 -120);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_lightness", "", "200")}}

### Farbeinstellungen der Achsen anpassen

Dieses Beispiel zeigt die Effekte, die das Setzen der `a`- und `b`-Werte der `lab()`-Funktion auf die End- und Mittelwerte der a-Achse, die von grün (-125) zu rot (125) geht, und der b-Achse, die von gelb (-125) zu blau (125) geht, hat.

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

Unter Verwendung der CSS {{cssxref("background-color")}} Eigenschaft variieren wir die `a`- und `b`-Werte der `lab()`-Funktion entlang der a-Achse und b-Achse und zeigen die Effekte von maximalen, mittleren und minimalen Werten in jedem Fall.

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
  background-color: lab(50 125 125);
}
[data-color="red-zero"] {
  background-color: lab(50 125 0);
}
[data-color="red-blue"] {
  background-color: lab(50 125 -125);
}

/* a-axis center, variable b-axis */
[data-color="zero-yellow"] {
  background-color: lab(50 0 125);
}
[data-color="zero-zero"] {
  background-color: lab(50 0 0);
}
[data-color="zero-blue"] {
  background-color: lab(50 0 -125);
}

/* a-axis min, variable b-axis */
[data-color="green-yellow"] {
  background-color: lab(50 -125 125);
}
[data-color="green-zero"] {
  background-color: lab(50 -125 0);
}
[data-color="green-blue"] {
  background-color: lab(50 -125 -125);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_color_axes", "", "200")}}

Die linke Spalte befindet sich am gelben Ende (-125) der b-Achse und die rechte Spalte am blauen Ende (125). Die obere Reihe zeigt Farben am roten Ende der a-Achse (-125) und die untere Reihe ist am grünen Ende (125). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten (0) jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem Wert von `0` für beide Achsen.

### Lineare Verläufe entlang der A- und B-Achse

Dieses Beispiel enthält lineare Verläufe, um die Werteprogression der `lab()`-Funktion entlang der A-Achse (von Rot zu Grün) und entlang der B-Achse (von Gelb zu Blau) zu demonstrieren. In jedem Gradient-Bild bleibt eine Achse statisch, während die andere Achse vom niedrigen Ende bis zum hohen Ende der Achsenwerte fortschreitet.

```html hidden
<div data-color="red-to-green-yellow">
  <span>red</span><span>`b`= -125 (yellow)</span><span>green</span>
</div>
<div data-color="red-to-green-zero">
  <span>red</span><span>no yellow or blue</span><span>green</span>
</div>
<div data-color="red-to-green-blue">
  <span>red</span><span>`b`= 125 (blue)</span><span>green</span>
</div>

<div data-color="yellow-to-blue-red">
  <span>yellow</span><span>`a` = -125 (red)</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-zero">
  <span>yellow</span><span>no red or green</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-green">
  <span>yellow</span><span>`a` = 125 (green)</span><span>blue</span>
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
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 -125 125));
}
[data-color="red-to-green-zero"] {
  background-image: linear-gradient(to right, lab(50 125 0), lab(50 -125 0));
}
[data-color="red-to-green-blue"] {
  background-image: linear-gradient(to right, lab(50 125 -125), lab(50 -125 -125));
}

/* b-axis gradients */
[data-color="yellow-to-blue-red"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 125 -125));
}
[data-color="yellow-to-blue-zero"] {
  background-image: linear-gradient(to right, lab(50 0 125), lab(50 0 -125));
}
[data-color="yellow-to-blue-green"] {
  background-image: linear-gradient(to right, lab(50 -125 125),lab(50 -125 -125));
}
```

#### Ergebnis

{{EmbedLiveSample("Linear gradients along the a-axis and b-axis", '', '420')}}

### Deckkraft anpassen

Das folgende Beispiel zeigt den Effekt der Variation des `A` (Alpha)-Werts der `lab()` Funktionsnotation. Die `red` und `red-alpha` Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren. Ein `A`-Wert von `0.4` macht die Farbe 40% opak.

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
  background-color: lab(80 125 125);
}
[data-color="red-alpha"] {
  background-color: lab(80 125 125 / 0.4);
}
```

#### Ergebnis

{{EmbedLiveSample('Adjusting_opacity')}}

### Verwendung relativer Farben mit lab()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während das linke und rechte je aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden durch die Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `lab()` Funktion übergeben und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Der aufgehellte Farbton hat 15% zur Helligkeit hinzugefügt, und der abgedunkelte Farbton hat 15% von der Helligkeit subtrahiert.

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
  /* equivalent of lab(75 24 79) */
}

#one {
  background-color: lab(from var(--base-color) calc(l + 15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lab(from var(--base-color) calc(l - 15) a b);
}
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with lab", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [`<color-function>`](/de/docs/Web/CSS/CSS_colors#functions) Datentyp
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [LCH Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Safari Technology Preview 122 Release Notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): enthält `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben.
