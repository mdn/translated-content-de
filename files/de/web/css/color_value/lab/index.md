---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`lab()`** Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* {{glossary("Farbmodell")}} aus.

Lab repräsentiert das gesamte Farbspektrum, das Menschen sehen können, indem die Helligkeit der Farbe, ein Rot/Grün-Achsenwert, ein Blau/Gelb-Achsenwert und ein optionaler Alpha-Transparenzwert angegeben werden.

## Syntax

```css
/* Absolute Werte */
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);

/* Relative Werte */
lab(from green l a b / 0.5)
lab(from #0000FF calc(l + 10) a b)
lab(from hsl(180 100% 50%) calc(l - 10) a b)
```

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Helligkeit der Farbe. Hierbei entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der `a`-Achse, die definiert, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können Werte nicht über `±160` hinausgehen.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert die Entfernung der Farbe entlang der `b`-Achse, die definiert, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können Werte nicht über `±160` hinausgehen.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} Wert, der den Alpha-Kanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Auswirkungen von `none` finden Sie bei den [fehlenden Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die ursprüngliche Farbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hierbei entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse, die definiert, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können Werte nicht über `±160` hinausgehen.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse, die definiert, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können Werte nicht über `±160` hinausgehen.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} Wert, der den Alpha-Kanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, übernimmt er den Alpha-Kanalwert der ursprünglichen Farbe. Wenn enthalten, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Normalerweise gilt, wenn Prozentsätze in CSS einen numerischen Äquivalent haben, dass `100%` der Zahl `1` entspricht. Dies ist nicht immer der Fall bei der Helligkeit und den `a`- und `b`-Achsen von LAB, wie oben erwähnt. Bei `L` liegt der Bereich von 0 bis 100, wobei `100%` gleich `100` ist. Die `a`- und `b`-Werte unterstützen sowohl negative als auch positive Werte, wobei `100%` gleich `125` und `-100%` gleich `-125` ist.

#### Definition von relativen Farbkanalausgabekomponenten

Bei der Verwendung der relativen Farbsyntax innerhalb einer `lab()` Funktion konvertiert der Browser die ursprüngliche Farbe in eine äquivalente Lab-Farbe (wenn sie nicht bereits so angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `a` (Grün/Rot-Achse) und `b` (Blau/Gelb-Achse) — plus einen Alpha-Kanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l` Kanalwert wird auf eine `<number>` zwischen `0` und `100`, einschließlich, aufgelöst.
- Die `a` und `b` Kanäle werden jeweils auf eine `<number>` zwischen `-125` und `125`, einschließlich, aufgelöst.
- Der `alpha` Kanal wird auf eine `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Bei der Definition einer relativen Farbe können die unterschiedlichen Kanäle der Ausgabefarbe auf verschiedene Weisen ausgedrückt werden. Unten werden einige Beispiele gezeigt, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel die gleiche Farbe wie die ursprüngliche Farbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der ursprünglichen Farbe basiert. Sie erzeugen eigentlich keine relativen Farben! Wahrscheinlich würden Sie diese nie in einem echten Code verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `lab()`-Syntax aufgenommen.

Beginnen wir mit einer ursprünglichen Farbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt die gleiche Farbe wie die ursprüngliche Farbe aus — sie verwendet die `l`, `a` und `b` Kanalwerte der ursprünglichen Farbe (`54.29`, `80.8198` und `69.8997`) als die Ausgabekanalwerte:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabefarbe dieser Funktion ist `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der ursprünglichen Farbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die Ausgabefarbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der ursprünglichen Farbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()` Ursprungfarbe in eine äquivalente `lab()` Farbe — `lab(54.29 80.8198 69.8997)`.
- Setzt die `l` und `b` Kanalwerte für die Ausgabefarbe auf die `L` und `b` Kanalwerte des `lab()` Äquivalents der Ursprungfarbe — diese Werte sind `54.29` und `69.8997`.
- Setzt den `a` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wird, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, sodass sie in einer kompatiblen Weise dargestellt werden kann (d. h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gezeigten Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, übernimmt er standardmäßig den gleichen Wert wie der Alphakanal der Ursprungfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` gesetzt. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarben in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarbkanalwerte explizit angeben. Das erste Beispiel gibt den Ausgabefarbkanalwert als den gleichen wie den Alphakanalwert an, während das zweite Beispiel einen anderen Ausgabefarbkanalwert angibt, der nicht mit dem Ursprungskanal übereinstimmt.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Berechnete Ausgabefarbe: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Berechnete Ausgabefarbe: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungfarbe erneut in das `lab()` Äquivalent konvertiert — `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}} Berechnungen werden auf die `L`, `a`, `b` und `A` Werte angewendet und führen zu einer Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)`:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungskanäle auf `<number>` Werte aufgelöst werden, müssen Sie ihnen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einer `<number>` funktioniert nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit

Das folgende Beispiel zeigt den Effekt der Variation des Helligkeitswerts der `lab()` Funktion.

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

Dieses Beispiel zeigt die Effekte der Festlegung der `a` und `b` Werte der `lab()` Funktion auf die Endpunkte und Mittelpunkte der a-Achse, die von grün (-125) zu rot (125) und der b-Achse, die von gelb (-125) zu blau (125) verläuft.

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

Durch die Verwendung der CSS {{cssxref("background-color")}} Eigenschaft variieren wir die `a` und `b` Werte der `lab()` Farbener Funktion entlang der a-Achse und der b-Achse, um die Effekte von maximalen, mittleren und minimalen Werten in jedem Fall zu zeigen.

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
/* a-Achse max, variable b-Achse */
[data-color="redyellow"] {
  background-color: lab(50 125 125);
}
[data-color="redzero"] {
  background-color: lab(50 125 0);
}
[data-color="redblue"] {
  background-color: lab(50 125 -125);
}

/* a-Achse Mitte, variable b-Achse */
[data-color="zeroyellow"] {
  background-color: lab(50 0 125);
}
[data-color="zerozero"] {
  background-color: lab(50 0 0);
}
[data-color="zeroblue"] {
  background-color: lab(50 0 -125);
}

/* a-Achse min, variable b-Achse */
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

Die linke Spalte ist am gelben Ende (-125) der b-Achse und die rechte Spalte ist am blauen Ende (125). Die obere Reihe zeigt Farben am roten Ende der a-Achse (-125) und die untere Reihe ist am grünen Ende (125). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten (0) jeder Achse, wobei die mittlere Zelle grau ist; sie enthält weder Rot, Grün, Gelb noch Blau, mit einem Wert von `0` für beide Achsen.

### Lineare Verläufe entlang der a-Achse und der b-Achse

Dieses Beispiel beinhaltet lineare Verläufe, um die Progression der Werte der `lab()` Funktion entlang der a-Achse (von rot zu grün) und entlang der b-Achse (von gelb zu blau) zu demonstrieren. In jedem Verlaufsbild bleibt eine Achse statisch, während die andere Achse von einem Ende zum anderen der Achsenwerte fortschreitet.

```html hidden
<div data-color="redtogreen-yellow">
  <span>rot</span><span>`b`= -125 (gelb)</span><span>grün</span>
</div>
<div data-color="redtogreen-zero">
  <span>rot</span><span>kein Gelb oder Blau</span><span>grün</span>
</div>
<div data-color="redtogreen-blue">
  <span>rot</span><span>`b`= 125 (blau)</span><span>grün</span>
</div>

<div data-color="yellowtoblue-red">
  <span>gelb</span><span>`a` = -125 (rot)</span><span>blau</span>
</div>
<div data-color="yellowtoblue-zero">
  <span>gelb</span><span>kein Rot oder Grün</span><span>blau</span>
</div>
<div data-color="yellowtoblue-green">
  <span>gelb</span><span>`a` = 125 (grün)</span><span>blau</span>
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
/* a-Achse Verläufe */
[data-color="redtogreen-yellow"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 -125 125));
}
[data-color="redtogreen-zero"] {
  background-image: linear-gradient(to right, lab(50 125 0), lab(50 -125 0));
}
[data-color="redtogreen-blue"] {
  background-image: linear-gradient(to right, lab(50 125 -125), lab(50 -125 -125));
}

/* b-Achse Verläufe */
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

### Anpassen der Opazität

Das folgende Beispiel zeigt den Effekt der Variation des `A` (Alpha) Werts der `lab()` Funktionsnotation. Die `rot` und `rot-alpha` Elemente überlagern das `#background-div` Element, um den Effekt der Opazität zu demonstrieren. Wenn `A` einen Wert von `0.4` hat, macht dies die Farbe zu 40% undurchsichtig.

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

Dieses Beispiel stylt drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die nicht modifizierte `--base-color`, während die linke und rechte aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `lab()` Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal durch eine `calc()` Funktion modifiziert, um den gewünschten Effekt zu erzielen. Die aufgehellte Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 15% vom Helligkeitskanal subtrahiert.

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
  /* entspricht lab(75 24 79) */
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

Die Ausgabe erfolgt wie folgt:

{{ EmbedLiveSample("Using relative colors with lab", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [`<color-function>`](/de/docs/Web/CSS/CSS_colors#functions) Datentyp
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [LCH-Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Safari Technology Preview 122 Versionshinweise](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): enthält `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben
