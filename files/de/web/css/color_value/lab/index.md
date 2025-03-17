---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`lab()`** funktionale Notation drückt eine gegebene Farbe im CIE L\*a\*b\* {{Glossary("color_space", "Farbraum")}} aus.

Lab repräsentiert das gesamte Spektrum der Farben, die Menschen sehen können, indem es die Helligkeit der Farbe, einen Rot/Grün-Achsenwert, einen Blau/Gelb-Achsenwert und einen optionalen Alphatransparenzwert angibt.

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

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntax für absolute Werte

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Helligkeit der Farbe an. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt den Abstand der Farbe entlang der `a`-Achse an, die definiert, wie grün (Richtung `-125`) oder rot (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte unterschrieben sind (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert spezifiziert den Abstand der Farbe entlang der `b`-Achse, die definiert, wie blau (Richtung `-125`) oder gelb (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte unterschrieben sind (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal festzulegen. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn eingeschlossen, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Syntax für relative Werte

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `a`-Achse, die definiert, wie grün (Richtung `-125`) oder rot (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte unterschrieben sind (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `b`-Achse, die definiert, wie blau (Richtung `-125`) oder gelb (Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte unterschrieben sind (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Ausgabefarbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal festzulegen. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert der des Alphakanals der Ursprungsfarbe. Wenn eingeschlossen, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Normalerweise ist, wenn Prozentwerte in CSS eine numerische Entsprechung haben, `100%` gleich der Zahl `1`. Dies ist nicht immer der Fall für die Helligkeit von LAB und die `a`- und `b`-Achsen, wie oben erwähnt. Bei `L` reicht der Bereich von 0 bis 100, wobei `100%` gleich `100` ist. Die `a`- und `b`-Werte unterstützen sowohl negative als auch positive Werte, wobei `100%` gleich `125` und `-100%` gleich `-125` ist.

#### Definition von Ausgabekanalwerten für relative Farben

Wenn die relative Farbsyntax innerhalb einer `lab()`-Funktion verwendet wird, wandelt der Browser die Ursprungsfarbe in eine gleichwertige Lab-Farbe um (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `a` (Grün/Rot-Achse) und `b` (Blau/Gelb-Achse) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um sie bei der Definition der Ausgabefarbkanalwerte zu verwenden:

- Der `l`-Kanalwert wird in eine `<number>` zwischen `0` und `100`, inklusive, aufgelöst.
- Die `a`- und `b`-Kanäle werden jeweils in eine `<number>` zwischen `-125` und `125`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird in eine `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend werden wir einige Beispiele betrachten, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Die erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, und die zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `lab()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `a`, und `b`-Kanalwerte der Ursprungsfarbe (`54.29`, `80.8198`, und `69.8997`) als Ausgabekanalwerte:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist die Farbe `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt damit eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die ausgegebene Farbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erzeugt eine relative Farbe, die auf der Ursprungsfarbe basiert:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Dieses Beispiel:

- Wandelt die `hsl()`-Ursprungsfarbe in eine gleichwertige `lab()`-Farbe um — `lab(54.29 80.8198 69.8997)`.
- Legt die `l`- und `b`-Kanalwerte für die Ausgabefarbe auf die `L`- und `b`-Kanalwerte des gleichwertigen `lab()` der Ursprungsfarbe fest — diese Werte sind `54.29` und `69.8997`.
- Legt den `a`-Kanalwert der Ausgabefarbe auf einen neuen Wert fest, der nicht auf der Ursprungsfarbe basiert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit festgelegt. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, übernimmt er standardmäßig denselben Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird `1` als Standardwert verwendet. Daher ist der Alpha-Kanalwert der Ursprung- und Ausgabefarbe für die obigen Beispiele `1`.

Betrachten Sie einige Beispiele, die Ursprungs- und Ausgabewerte des Alphakanals angeben. Das erste Beispiel legt den Ausgabewert des Alphakanals so fest, dass er mit dem Ursprungswert des Alphakanals übereinstimmt, während das zweite Beispiel einen anderen Ausgabewert des Alphakanals angibt, der nicht auf dem Ursprungswert des Alphakanals basiert.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das äquivalente `lab()` umgewandelt — `lab(54.29 80.8198 69.8997)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `a`-, `b`-, und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)` führt:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einer `<number>`, funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Wirkung von variierenden Helligkeitswerten der `lab()`-Funktion.

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

Dieses Beispiel zeigt die Auswirkungen der Festlegung der `a`- und `b`-Werte der `lab()`-Funktion auf die Enden und Mittelpunkte der a-Achse, die von grün (-125) bis rot (125) und der b-Achse, die von gelb (-125) bis blau (125) reicht.

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

Unter Verwendung der CSS-Eigenschaft {{cssxref("background-color")}} variieren wir die `a`- und `b`-Werte der `lab()`-Farb-Funktion entlang der a-Achse und der b-Achse, um die Auswirkungen von maximalen, mittleren und minimalen Werten in jedem Fall zu zeigen.

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

Die linke Spalte ist am gelben Ende (-125) der b-Achse und die rechte Spalte ist am blauen Ende (125). Die obere Reihe zeigt Farben am roten Ende der a-Achse (-125) und die untere Reihe ist am grünen Ende (125). Die mittlere Spalte und Reihen befinden sich in den Mittelpunkten (0) jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb, oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und der b-Achse

Dieses Beispiel umfasst lineare Verläufe, um den Fortschritt der `lab()`-Funktionswerte entlang der a-Achse (von Rot zu Grün) und entlang der b-Achse (von Gelb zu Blau) zu demonstrieren. In jedem Gradientenbild bleibt eine Achse statisch, während die andere Achse vom unteren Ende zum oberen Ende der Achsenwerte fortschreitet.

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

Das folgende Beispiel zeigt die Wirkung von variierenden `A` (Alpha)-Werten der `lab()`-funktionalen Notation. Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um die Wirkung der Opazität zu demonstrieren. Ein `A`-Wert von `0.4` macht die Farbe zu 40% undurchsichtig.

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

### Verwendung von relativen Farben mit lab()

Dieses Beispiel formatiert drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die nicht modifizierte `--base-color`, während das linke und das rechte eine hellere und eine dunklere Variante dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `lab()`-Funktion eingespeist, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt mittels einer `calc()`-Funktion zu erzielen. Die hellere Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die dunklere Farbe hat 15% subtrahiert.

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

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [`<color-function>`](/de/docs/Web/CSS/CSS_colors#functions) Datentyp
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [LCH Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Safari Technology Preview 122 Veröffentlichungshinweise](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): beinhaltet `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben
