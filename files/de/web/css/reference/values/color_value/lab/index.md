---
title: lab()
slug: Web/CSS/Reference/Values/color_value/lab
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`lab()`**-Funktionsnotation gibt eine bestimmte Farbe im CIE L\*a\*b\* {{Glossary("color_space", "Farbraum")}} an.

Lab repräsentiert das gesamte Spektrum der Farben, die der Mensch sehen kann, indem es die Helligkeit der Farbe, den Wert der Rot/Grün-Achse, den Wert der Blau/Gelb-Achse und einen optionalen Alpha-Transparenzwert angibt.

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

Nachfolgend sind die Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert gibt die Helligkeit der Farbe an. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse an, die bestimmt, wie grün (sich in Richtung `-125` bewegend) oder rot (sich in Richtung `+125` bewegend) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt, d.h. Sie können Werte außerhalb der `±125` (`±100%`) Grenzen einstellen. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse an, die bestimmt, wie blau (sich in Richtung `-125` bewegend) oder gelb (sich in Richtung `+125` bewegend) die Farbe ist. Beachten Sie, dass diese Werte signiert sind und theoretisch unbegrenzt, d.h. Sie können Werte außerhalb der `±125` (`±100%`) Grenzen einstellen. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig auf 100% gesetzt. Falls enthalten, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann eine beliebige gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse, die bestimmt, wie grün (sich in Richtung `-125` bewegend) oder rot (sich in Richtung `+125` bewegend) die Farbe ist. Beachten Sie, dass diese Werte signiert sind und theoretisch unbegrenzt, d.h. Sie können Werte außerhalb der `±125` (`±100%`) Grenzen einstellen. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse, die bestimmt, wie blau (sich in Richtung `-125` bewegend) oder gelb (sich in Richtung `+125` bewegend) die Farbe ist. Beachten Sie, dass diese Werte signiert sind und theoretisch unbegrenzt, d.h. Sie können Werte außerhalb des `±125` (`±100%`) Limits einstellen. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Ausgabefarbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Falls enthalten, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Normalerweise ist in CSS `100%` gleich der Zahl `1`, wenn Prozentwerte ein numerisches Äquivalent haben. Dies ist nicht immer der Fall für die Helligkeit und die `a`- und `b`-Achsen bei Lab, wie oben erwähnt. Bei `L` reicht der Bereich von `0` bis `100`, wobei `100%` gleich `100` ist. Die `a`- und `b`-Werte unterstützen sowohl negative als auch positive Werte, wobei `100%` gleich `125` und `-100%` gleich `-125` ist.

#### Definition von Kanalkomponenten des relativen Farb-Ausgangs

Wenn Sie relative Farbsyntax innerhalb einer `lab()`-Funktion verwenden, wandelt der Browser die Ursprungsfarbe in eine äquivalente Lab-Farbe um (wenn sie nicht bereits so angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `a` (Grün/Rot-Achse), und `b` (Blau/Gelb-Achse) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte werden innerhalb der Funktion zur Verfügung gestellt, um beim Definieren der Kanalkomponenten der Ausgabefarbe verwendet zu werden:

- Der `l`-Kanalwert wird zu einer `<number>` zwischen `0` und `100`, einschließlich, aufgelöst.
- Die `a`- und `b`-Kanäle werden jeweils zu einer `<number>` zwischen `-125` und `125`, einschließlich, aufgelöst.
- Der `alpha`-Kanal wird zu einer `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Nachfolgend werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden untenstehenden Beispielen verwenden wir die relative Farbsyntax. Aber das erste gibt dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Diese erzeugen wirklich keine relativen Farben! Sie würden höchstwahrscheinlich diese in einem echten Code nicht verwenden und wahrscheinlich stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `lab()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `a`, und `b` Kanalwerte der Ursprungsfarbe (`54.29`, `80.8198`, und `69.8997`) als Ausgabekanalwerte:

```css
lab(from hsl(0 100% 50%) l a b)
```

Diese Funktion gibt die Farbe `lab(54.29 80.8198 69.8997)` aus.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte, wodurch eine völlig andere Farbe ausgegeben wird, die nicht auf der Ursprungsfarbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die Ausgabefarbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erzeugt eine relative Farbe auf Basis der Ursprungsfarbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Dieses Beispiel:

- Wandelt die `hsl()` Ursprungsfarbe in eine äquivalente `lab()`-Farbe um — `lab(54.29 80.8198 69.8997)`.
- Setzt die `l` und `b` Kanalwerte für die Ausgabefarbe auf die `L` und `b` Kanalwerte des `lab()` Äquivalents der Ursprungsfarbe — diese Werte sind `54.29` und `69.8997`.
- Setzt den `a` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, entspricht er dem Wert des Alphakanals der Ursprungsfarbe. Wenn der Alphakanalwert der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarben in den obigen Beispielen `1`.

Betrachten wir einige Beispiele, die Ursprungs- und Ausgabewerte des Alphakanals spezifizieren. Das erste Beispiel spezifiziert den Ausgabewert des Alphakanals als identisch mit dem Ursprungswert des Alphakanals, während das zweite Beispiel einen anderen Wert des Ausgabekanals spezifiziert, der nicht mit dem Ursprungswert des Alphakanals in Verbindung steht.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe wieder in das `lab()`-Äquivalent umgewandelt — `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`, `a`, `b`, und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)` führt:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen akzeptieren würde. Ein `<percentage>` zu einer `<number>` hinzuzufügen, funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassen der Helligkeit

Das folgende Beispiel zeigt die Wirkung variierender Helligkeitswerte der `lab()`-Funktion.

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

### Anpassen der Farbachsen

Dieses Beispiel demonstriert die Effekte des Setzens der `a`- und `b`-Werte der `lab()`-Funktion auf die Enden und Mittelpunkte der a-Achse, die von grün (-125) zu rot (125) reicht, und der b-Achse, die von gelb (-125) zu blau (125) reicht.

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

Mittels der CSS {{cssxref("background-color")}}-Eigenschaft variieren wir die `a`- und `b`-Werte der `lab()`-Farb-Funktion entlang der a-Achse und b-Achse, wobei die Effekte der maximalen, mittleren und minimalen Werte in jedem Fall gezeigt werden.

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

Die linke Spalte steht am gelben Ende (-125) der b-Achse, und die rechte Spalte steht am blauen Ende (125). Die obere Reihe zeigt Farben am roten Ende der a-Achse (-125), und die untere Reihe zeigt Farben am grünen Ende (125). Die mittlere Spalte und Reihe stehen an den Mittelpunkten (0) jeder Achse, wobei die mittlere Zelle grau ist; sie enthält weder Rot, Grün, Gelb noch Blau, mit einem Wert von `0` für beide Achsen.

### Lineare Verläufe entlang der a- und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Werteprogression der `lab()`-Funktion entlang der a-Achse (von rot zu grün) und entlang der b-Achse (von gelb zu blau) zu demonstrieren. In jedem Verlaufsbild bleibt eine Achse statisch, während die andere Achse von einem Ende zum anderen der Achsenwerte fortschreitet.

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

### Anpassung der Opazität

Das folgende Beispiel zeigt den Effekt variierender `A` (Alpha)-Werte der `lab()`-Funktionsnotation.
Die `red` und `red-alpha` Elemente überlagern das `#background-div`-Element, um den Opazitätseffekt zu demonstrieren.
Das Festlegen von `A` auf einen Wert von `0.4` macht die Farbe zu 40% undurchsichtig.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während den linken und rechten Varianten dieser `--base-color` als aufgehellte und verdunkelte Varianten zugewiesen werden.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `lab()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die verdunkelte Farbe hat 15% vom Helligkeitskanal subtrahiert.

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

Der Output ist wie folgt:

{{ EmbedLiveSample("Using relative colors with lab", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp
- [`<color-function>`](/de/docs/Web/CSS/Guides/Colors#functions) Datentyp
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [LCH-Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Safari Technology Preview 122 Veröffentlichungsnotizen](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): beinhaltet `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben
