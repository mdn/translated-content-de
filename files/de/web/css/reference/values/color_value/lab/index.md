---
title: "`lab()` CSS-Funktion"
short-title: lab()
slug: Web/CSS/Reference/Values/color_value/lab
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`lab()`** Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* {{Glossary("color_space", "Farbraum")}} aus.

Lab repräsentiert das gesamte Spektrum der Farben, die Menschen sehen können, indem es die Helligkeit der Farbe, einen Rot/Grün-Achsenwert, einen Blau/Gelb-Achsenwert und einen optionalen Alphatransparenzwert angibt.

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

Nachfolgend finden Sie Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors).

#### Absolute Werte-Syntax

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Helligkeit der Farbe. Hierbei entspricht die Zahl `0` dem Wert `0%` (schwarz) und die Zahl `100` dem Wert `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der `a`-Achse, die definiert, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±125` (`±100%`) festlegen können. In der Praxis können die Werte jedoch nicht `±160` überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der `b`-Achse, die definiert, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±125` (`±100%`) festlegen können. In der Praxis können die Werte jedoch nicht `±160` überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} welcher den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über fehlende Farbkomponenten finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Relative Werte-Syntax

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ausgangsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ausgangsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hierbei entspricht die Zahl `0` dem Wert `0%` (schwarz) und die Zahl `100` dem Wert `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse, die definiert, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±125` (`±100%`) festlegen können. In der Praxis können die Werte jedoch nicht `±160` überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse, die definiert, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±125` (`±100%`) festlegen können. In der Praxis können die Werte jedoch nicht `±160` überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} welcher den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig der Alpha-Kanal-Wert der Ausgangsfarbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> In der Regel entspricht `100%` in CSS einem numerischen Äquivalent von `1`. Dies ist nicht immer der Fall für die Helligkeit und die `a`- und `b`-Achsen von Lab, wie oben erwähnt. Bei `L` reicht das Spektrum von 0 bis 100, wobei `100%` `100` entspricht. Die `a`- und `b`-Werte unterstützen sowohl negative als auch positive Werte, wobei `100%` `125` und `-100%` `-125` entspricht.

#### Definition von relativen Farb-Ausgabekanal-Komponenten

Bei der Verwendung der relativen Farbsyntax innerhalb einer `lab()`-Funktion konvertiert der Browser die Ausgangsfarbe in eine gleichwertige Lab-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `a` (grüne/rote Achse) und `b` (blaue/gelbe Achse) — plus einem Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um verwendet zu werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Der `l`-Kanalwert wird auf ein `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Die `a`- und `b`-Kanäle werden jeweils auf ein `<number>` zwischen `-125` und `125` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf ein `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden betrachten wir einige Beispiele, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ausgangsfarbe aus, während das zweite Beispiel eine Farbe ausgibt, die überhaupt nicht auf der Ausgangsfarbe basiert. Sie erzeugen tatsächlich keine relativen Farben! In einer echten Codebasis würden Sie wahrscheinlich niemals solche verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `lab()`-Syntax aufgenommen.

Beginnen wir mit einer Ausgangsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt dieselbe Farbe wie die Ausgangsfarbe aus - sie verwendet die `l`, `a` und `b` Kanalwerte der Ausgangsfarbe (`54.29`, `80.8198` und `69.8997`) als Ausgabekanalwerte:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist die Farbe `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ausgangsfarbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die Ausgabefarbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ausgangsfarbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

In diesem Beispiel:

- Konvertiert die `hsl()` Ausgangsfarbe in eine gleichwertige `lab()` Farbe — `lab(54.29 80.8198 69.8997)`.
- Setzt die `l` und `b` Kanalwerte für die Ausgabefarbe auf die Werte der entsprechenden `L` und `b` Kanalwerte der `lab()`-Äquivalent-Ausgangsfarbe — diese Werte sind `54.29` und `69.8997`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ausgangsfarbe basiert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ausgangsfarbe, wenn das Ausgabefarbmodell ein anderes als das der Ausgangsfarbe ist, im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie eine kompatible Darstellung erhält (d.h. mit denselben Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle weder für die Ausgangs- noch für die Ausgabefarben explizit spezifiziert. Wenn der Alpha-Kanal der Ausgabefarbe nicht spezifiziert wird, wird er standardmäßig auf denselben Wert wie der Alpha-Kanal der Ausgangsfarbe gesetzt. Wenn der Alpha-Kanal der Ausgangsfarbe nicht spezifiziert wird (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Alpha-Kanalwerte von Ausgangs- und Ausgabefarbe für die obigen Beispiele `1`.

Lassen Sie uns einige Beispiele betrachten, die die Alpha-Kanalwerte von Ausgangs- und Ausgabefarbe spezifizieren. Das erste Beispiel spezifiziert den Alpha-Kanalwert der Ausgabe als denselben wie den der Ausgangsfarbe, während das zweite Beispiel einen anderen, von der Ausgangsfarbe unabhängigen, Alpha-Kanalwert der Ausgabe angibt.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ausgangsfarbe erneut in ihre `lab()`-Äquivalent konvertiert - `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}} Berechnungen werden auf die `L`, `a`, `b` und `A` Werte angewendet, was zu einer Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)` führt:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ausgangskanalwerte auf `<number>` Werte aufgelöst werden, müssen Sie Zahlen zu diesen addieren, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert zum Beispiel nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Auswirkungen der Variation des Helligkeitswerts der `lab()`-Funktion.

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

### Anpassung der Farbachsen

Dieses Beispiel demonstriert die Effekte des Setzens der `a` und `b` Werte der `lab()`-Funktion zu den Endpunkten und Mittelpunkten der a-Achse, die von Grün (-125) zu Rot (125) reicht, und der b-Achse, die von Gelb (-125) zu Blau (125) reicht.

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

Unter Verwendung der CSS {{cssxref("background-color")}} Eigenschaft variieren wir die `a` und `b` Werte der `lab()` Farb-Funktion entlang der a-Achse und b-Achse, um die Effekte von maximalen, mittleren und minimalen Werten in jedem Fall zu zeigen.

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

Die linke Spalte steht am gelben Ende (-125) der b-Achse und die rechte Spalte am blauen Ende (125). Die obere Zeile zeigt Farben am roten Ende der a-Achse (-125) und die untere Zeile am grünen Ende (125). Die mittlere Spalte und Zeile sind an den Mittelpunkten (0) jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Farbverläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Farbverläufe, um die Veränderung der Werte der `lab()`-Funktion entlang der a-Achse (von Rot zu Grün) und entlang der b-Achse (von Gelb zu Blau) zu zeigen. In jedem Gradientenbild bleibt eine Achse statisch, während die andere Achse von einem Ende zum anderen Ende der Achsenwerte fortschreitet.

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

### Anpassung der Deckkraft

Das folgende Beispiel zeigt die Auswirkungen der Variation des `A` (Alpha)-Werts der `lab()` Funktionsnotation. Die `red` und `red-alpha` Elemente überlappen das `#background-div` Element, um den Effekt der Deckkraft zu demonstrieren. Ein Wert von `0.4` für `A` macht die Farbe zu 40% opak.

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

Dieses Beispiel styled drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere hat die unveränderte `--base-color`, während die linken und rechten Farbvarianten aufgehellt bzw. abgedunkelt auf dieser `--base-color` basieren.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `lab()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat der Helligkeitskanal um 15% erhöht, und bei der abgedunkelten Farbe wurde der Helligkeitskanal um 15% reduziert.

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

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using relative colors with lab", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;color&gt;")}} Datentyp
- [`<color-function>`](/de/docs/Web/CSS/Guides/Colors#functions) Datentyp
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [LCH Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Safari Technology Preview 122 Release Notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): beinhaltet `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben
