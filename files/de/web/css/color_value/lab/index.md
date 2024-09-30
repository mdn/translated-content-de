---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`lab()`** Funktionsnotation gibt eine bestimmte Farbe im CIE L\*a\*b\* [Farbraum](/de/docs/Glossary/color_space) an.

Lab repräsentiert das gesamte Farbspektrum, das Menschen sehen können, indem die Helligkeit der Farbe, ein Rot/Grün-Achsenwert, ein Blau/Gelb-Achsenwert und ein optionaler Alpha-Transparenzwert angegeben werden.

## Syntax

```css
/* Absolute values */
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);

/* Relative values */
lab(from green l a b / 0.5)
lab(from #0000FF calc(l + 10) a b)
lab(from hsl(180 100% 50%) calc(l - 10) a b)
```

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Helligkeit der Farbe an. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse an, die definiert, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen tragen können (ermöglichen sowohl positive als auch negative Werte) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenze setzen können. In der Praxis können Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse an, die definiert, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen tragen können (ermöglichen sowohl positive als auch negative Werte) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenze setzen können. In der Praxis können Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} Wert, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben ist, wird er standardmäßig auf 100% gesetzt. Falls inbegriffen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse, die definiert, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen tragen können (ermöglichen sowohl positive als auch negative Werte) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenze setzen können. In der Praxis können Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse, die definiert, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen tragen können (ermöglichen sowohl positive als auch negative Werte) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenze setzen können. In der Praxis können Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} Wert, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben ist, wird er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Falls inbegriffen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Üblicherweise entspricht bei prozentualen Werten, die ein numerisches Äquivalent in CSS haben, `100%` der Zahl `1`. Dies gilt nicht immer für die Helligkeit von LAB und die `a`- und `b`-Achsen, wie oben erwähnt. Bei `L` reicht der Bereich von 0 bis 100, wobei `100%` gleich `100` ist. Die `a`- und `b`-Werte unterstützen sowohl negative als auch positive Werte, wobei `100%` gleich `125` und `-100%` gleich `-125` ist.

#### Definieren von relativen Farbausgängerkomponenten

Beim Verwenden der relativen Farbsyntax innerhalb einer `lab()` Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente Lab-Farbe um (falls sie nicht bereits so spezifiziert ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Ausgangsfarbkanalwerte zu definieren:

- Der `l`-Kanalwert wird auf eine `<number>` zwischen `0` und `100` aufgelöst, inklusive.
- Die `a`- und `b`-Kanäle werden jeweils auf eine `<number>` zwischen `-125` und `125` aufgelöst, inklusive.
- Der `alpha`-Kanal wird auf eine `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden einige Beispiele betrachtet, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbvariante aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Tatsächlich erzeugen sie keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einer realen Codebasis verwenden würden, und würden wahrscheinlich einfach absolute Farbwerte verwenden. Wir haben diese Beispiele als Ausgangspunkt genutzt, um über die relative `lab()` Syntax zu lernen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `a`, und `b` Werte der Ursprungsfarbe als Ausgabekanäle:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabefarbe dieser Funktion ist `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanäle und gibt eine komplett andere, nicht auf der Ursprungsfarbe basierende Farbe aus:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die Ausgabefarbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Dieses Beispiel:

- Wandelt die `hsl()` Ursprungsfarbe in eine äquivalente `lab()` Farbe um — `lab(54.29 80.8198 69.8997)`.
- Setzt die `l`- und `b`-Kanalwerte für die Ausgabefarbe auf diese der äquivalenten `lab()`-Ursprungswerte — die Werte sind `54.29` und `69.8997`.
- Setzt den `a`-Kanalswert der Ausgabefarbe auf einen neuen, nicht auf der Ursprungsfarbe basierenden Wert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie in einer kompatiblen Weise dargestellt werden kann (d. h. unter Verwendung derselben Kanäle).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alphakanäle weder für die Ursprungs- noch die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alpha-Kanal-Werte für die Ursprungs- und Ausgabefarben `1` in den obigen Beispielen.

Lassen Sie uns einige Beispiele betrachten, die Alpha-Kanal-Werte für die Ursprung- und Ausgabefarben spezifizieren. Das erste gibt den Alpha-Kanal-Wert der Ausgabefarbe als identisch mit dem des Ursprungs an, während das zweite einen anderen, nicht mit dem Ursprungs-Alphakanal verbundenen Ausgabefarbkanalwert spezifiziert.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in die `lab()` äquivalent umgewandelt — `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}} Berechnungen werden auf die `L`, `a`, `b` und `A` Werte angewendet, was in einer Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)` resultiert:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit

Das folgende Beispiel zeigt die Wirkung der Variation des Helligkeitswertes der `lab()` Funktion.

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

Dieses Beispiel demonstriert die Effekte des Setzens der `a`- und `b`-Werte der `lab()` Funktion an den Enden und Mittelpunkten der a-Achse, die von grün (-125) zu rot (125) und der b-Achse verläuft, die von gelb (-125) zu blau (125) verläuft.

#### HTML

```html
<div data-color="redyellow"></div>
<div data-color="redzero"></div>
<div data-color="redblue"></div>

<div data-color="zeroyellow"></div>
<div data-color="zerozero"></div>
<div data-color="zeroblue"></div>

<div data-color="greenyellow"></div>
<div data-color="greenzero"></div>
<div data-color="greenblue"></div>
```

#### CSS

Unter Verwendung der CSS {{cssxref("background-color")}} Eigenschaft variieren wir die `a`- und `b`-Werte der `lab()` Farbfunktion entlang der a-Achse und der b-Achse und zeigen die Auswirkungen von maximalen, mittleren und minimalen Werten in jedem Fall.

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
[data-color="redyellow"] {
  background-color: lab(50 125 125);
}
[data-color="redzero"] {
  background-color: lab(50 125 0);
}
[data-color="redblue"] {
  background-color: lab(50 125 -125);
}

/* a-axis center, variable b-axis */
[data-color="zeroyellow"] {
  background-color: lab(50 0 125);
}
[data-color="zerozero"] {
  background-color: lab(50 0 0);
}
[data-color="zeroblue"] {
  background-color: lab(50 0 -125);
}

/* a-axis min, variable b-axis */
[data-color="greenyellow"] {
  background-color: lab(50 -125 125);
}
[data-color="greenzero"] {
  background-color: lab(50 -125 0);
}
[data-color="greenblue"] {
  background-color: lab(50 -125 -125);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_color_axes", "", "200")}}

Die linke Spalte befindet sich am gelben Ende (-125) der b-Achse, und die rechte Spalte befindet sich am blauen Ende (125). Die obere Reihe zeigt die Farben am roten Ende der a-Achse (-125) und die untere Reihe am grünen Ende (125). Die mittlere Spalte und Zeile befinden sich an den Mittelpunkten (0) jeder Achse, wobei die mittlere Zelle grau ist; sie enthält weder rot, grün, gelb noch blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Wertentwicklung der `lab()` Funktion entlang der a-Achse (von rot zu grün) und entlang der b-Achse (von gelb zu blau) zu demonstrieren. In jedem Verlauf verbleibt eine Achse statisch, während die andere Achse vom unteren Ende bis zum oberen Ende der Achsenwerte fortschreitet.

```html hidden
<div data-color="redtogreen-yellow">
  <span>red</span><span>`b`= -125 (yellow)</span><span>green</span>
</div>
<div data-color="redtogreen-zero">
  <span>red</span><span>no yellow or blue</span><span>green</span>
</div>
<div data-color="redtogreen-blue">
  <span>red</span><span>`b`= 125 (blue)</span><span>green</span>
</div>

<div data-color="yellowtoblue-red">
  <span>yellow</span><span>`a` = -125 (red)</span><span>blue</span>
</div>
<div data-color="yellowtoblue-zero">
  <span>yellow</span><span>no red or green</span><span>blue</span>
</div>
<div data-color="yellowtoblue-green">
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
[data-color="redtogreen-yellow"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 -125 125));
}
[data-color="redtogreen-zero"] {
  background-image: linear-gradient(to right, lab(50 125 0), lab(50 -125 0));
}
[data-color="redtogreen-blue"] {
  background-image: linear-gradient(to right, lab(50 125 -125), lab(50 -125 -125));
}

/* b-axis gradients */
[data-color="yellowtoblue-red"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 125 -125));
}
[data-color="yellowtoblue-zero"] {
  background-image: linear-gradient(to right, lab(50 0 125), lab(50 0 -125));
}
[data-color="yellowtoblue-green"] {
  background-image: linear-gradient(to right, lab(50 -125 125),lab(50 -125 -125));
}
```

#### Ergebnis

{{EmbedLiveSample("Linear gradients along the a-axis and b-axis", '', '420')}}

### Anpassung der Opazität

Das folgende Beispiel zeigt den Effekt der Variation des `A` (Alpha) Wertes der `lab()` Funktionsnotation. Die `red` und `red-alpha` Elemente überlappen das `#background-div` Element, um die Wirkung der Opazität zu demonstrieren. Das Angeben eines `A`-Wertes von `0.4` macht die Farbe zu 40% undurchsichtig.

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

Dieses Beispiel styliert drei {{htmlelement("div")}} Elemente mit verschiedenen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `lab()` Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erreichen. Die aufgehellte Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 15% vom Helligkeitskanal subtrahiert.

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
- [Safari Technology Preview 122 Versionshinweise](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): enthält `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben
