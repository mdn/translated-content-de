---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Die **`lab()`**-Funktionalnotation drückt eine angegebene Farbe im CIE L\*a\*b\* {{Glossary("color_space", "Farbraum")}} aus.

Lab repräsentiert das gesamte Spektrum der Farben, die Menschen sehen können, indem es die Helligkeit der Farbe, einen Rot/Grün-Achsenwert, einen Blau/Gelb-Achsenwert und einen optionalen Alpha-Transparenzwert angibt.

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

Unten finden Sie Beschreibungen der zugelassenen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntax von absoluten Werten

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Helligkeit der Farbe an. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse an, die definiert, wie grün (zurückgehend zu `-125`) oder rot (zurückgehend zu `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Limits festlegen können. In der Praxis können Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse an, die definiert, wie blau (zurückgehend zu `-125`) oder gelb (zurückgehend zu `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Limits festlegen können. In der Praxis können Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alpha-Kanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relativwert-Syntax

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse, die definiert, wie grün (zurückgehend zu `-125`) oder rot (zurückgehend zu `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Limits festlegen können. In der Praxis können Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse, die definiert, wie blau (zurückgehend zu `-125`) oder gelb (zurückgehend zu `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Limits festlegen können. In der Praxis können Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alpha-Kanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Normalerweise, wenn Prozentwerte ein numerisches Äquivalent in CSS haben, entspricht `100%` der Zahl `1`. Dies ist nicht immer der Fall für die Helligkeit von Lab und die `a`- und `b`-Achsen, wie oben erwähnt. Bei `L` reicht der Bereich von 0 bis 100, wobei `100%` `100` entspricht. Die `a`- und `b`-Werte unterstützen sowohl negative als auch positive Werte, wobei `100%` `125` entspricht und `-100%` `-125` entspricht.

#### Definieren von relativen Farb-Outputkanalkomponenten

Beim Verwenden der relativen Farbsyntax innerhalb einer `lab()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Lab-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbausgangswerte definiert — `l` (Helligkeit), `a` (Grün/Rot-Achse) und `b` (Blau/Gelb-Achse) — sowie ein Alpha-Kanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgangsfarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf eine `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Die `a`- und `b`-Kanäle werden jeweils auf eine `<number>` zwischen `-125` und `125` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf eine `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Wenn eine relative Farbe definiert wird, können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Unten werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden unten stehenden Beispielen verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie machen wirklich keine relativen Farben! Es ist unwahrscheinlich, dass diese in einem echten Codeprojekt verwendet werden, und würden wahrscheinlich stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `lab()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte der Ursprungsfarbe (`54.29`, `80.8198` und `69.8997`) als die Ausgabekanalwerte:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die ausgegebene Farbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ursprungsfarbe in eine äquivalente `lab()`-Farbe — `lab(54.29 80.8198 69.8997)`.
- Setzt die `l`- und `b`-Kanalwerte für die Ausgabefarbe auf diejenigen der äquivalenten `lab()`-Ursprungsfarbenwerte — diese Werte sind `54.29` und `69.8997`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe umgewandelt, damit sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit spezifiziert. Wenn der Alpha-Kanal der Ausgabefarbe nicht spezifiziert ist, übernimmt er standardmäßig denselben Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Ursprungs- und Ausgabekanalwerte für den Alpha-Kanal `1` für die obigen Beispiele.

Sehen wir uns einige Beispiele an, in denen Ursprungs- und Ausgabekanalwerte explizit spezifiziert werden. Das erste Beispiel spezifiziert den Ausgabekanalwert als denselben wie den Ursprungsalphakanalwert, während das zweite Beispiel einen anderen Ausgabekanalwert angibt, der nicht mit dem Ursprungsalphakanalwert zusammenhängt.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe wieder in das `lab()`-Äquivalent konvertiert — `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `a`-, `b`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)` führt:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie diese in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`-, `<angle>`- oder andere Werttypen akzeptieren würde. Ein `<percentage>` zu einer `<number>` hinzuzufügen, funktioniert zum Beispiel nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Auswirkung der Variation des Helligkeitswertes der `lab()`-Funktion.

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

Dieses Beispiel demonstriert die Effekte der Einstellung der `a`- und `b`-Werte der `lab()`-Funktion zu den Enden und Mittelpunkten der a-Achse, die von grün (-125) zu rot (125) verläuft, und der b-Achse, die von gelb (-125) zu blau (125) verläuft.

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

Mit der CSS-Eigenschaft {{cssxref("background-color")}} variieren wir die `a`- und `b`-Werte der `lab()`-Farb-Funktion entlang der a-Achse und b-Achse, um die Effekte von maximalen, mittleren und minimalen Werten in jedem Fall zu zeigen.

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

Die linke Spalte ist am gelben Ende (-125) der b-Achse und die rechte Spalte am blauen Ende (125). Die obere Reihe zeigt Farben am roten Ende der a-Achse (-125) und die untere Reihe am grünen Ende (125). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten (0) jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Fortschreitung der Werte der `lab()`-Funktion entlang der a-Achse (von rot zu grün) und entlang der b-Achse (von gelb zu blau) zu demonstrieren. In jedem Farbverlaufsbild bleibt eine Achse statisch, während die andere Achse vom unteren Ende zum oberen Ende der Achsenwerte fortschreitet.

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

Das folgende Beispiel zeigt die Auswirkung der Variation des `A` (Alpha)-Wertes der `lab()`-Funktionalnotation. Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren. Durch die Angabe eines `A`-Wertes von `0.4` wird die Farbe zu 40% undurchsichtig.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit verschiedenen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten aufgehellte beziehungsweise abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird an eine `lab()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 15% zur Helligkeit hinzugefügt, und die abgedunkelte Farbe hat 15% von der Helligkeit abgezogen.

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
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [LCH-Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Release Notes für Safari Technology Preview 122](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): enthält `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben
