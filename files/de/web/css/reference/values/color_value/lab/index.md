---
title: CSS-Funktion `lab()`
short-title: lab()
slug: Web/CSS/Reference/Values/color_value/lab
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die **`lab()`** Funktionsnotation drückt eine gegebene Farbe im CIE L\*a\*b\* {{Glossary("color_space", "Farbraum")}} aus.

Lab repräsentiert das gesamte Spektrum der Farben, die der Mensch sehen kann, indem es die Helligkeit der Farbe, einen Rot/Grün-Achsenwert, einen Blau/Gelb-Achsenwert und einen optionalen Alphatransparenzwert angibt.

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

Nachfolgend sind die Beschreibungen der erlaubten Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

#### Absolute Werte-Syntax

```plain
lab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Helligkeit der Farbe an. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse an, die definiert, wie grün (bewegend in Richtung `-125`) oder rot (bewegend in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse an, die definiert, wie blau (bewegend in Richtung `-125`) oder gelb (bewegend in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig auf 100% gesetzt. Falls enthalten, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components) für mehr Informationen über die Wirkung von `none`.

#### Relative Werte-Syntax

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer einbezogen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `100` `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse, die definiert, wie grün (bewegend in Richtung `-125`) oder rot (bewegend in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse, die definiert, wie blau (bewegend in Richtung `-125`) oder gelb (bewegend in Richtung `+125`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulassen) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±125` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Falls enthalten, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> In der Regel sind Prozentwerte, die in CSS eine numerische Entsprechung haben, so dass `100%` der Zahl `1` entspricht. Dies ist jedoch nicht immer der Fall bei der Helligkeit von Lab und den `a`- und `b`-Achsen, wie oben erwähnt. Bei `L` reicht der Bereich von 0 bis 100, wobei `100%` `100` entspricht. Die Werte `a` und `b` unterstützen sowohl negative als auch positive Werte, wobei `100%` `125` und `-100%` `-125` entspricht.

#### Definition der Ausgabekanalkomponenten von relativen Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `lab()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Lab-Farbe (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte — `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) — sowie ein Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Die `a`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `-125` und `125` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich niemals in einer tatsächlichen Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen der relativen `lab()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte (`54.29`, `80.8198`, und `69.8997`) der Ursprungsfarbe als die Ausgabekanalwerte:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die Ausgabefarbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ursprungsfarbe in eine äquivalente `lab()`-Farbe — `lab(54.29 80.8198 69.8997)`.
- Setzt die `l`- und `b`-Kanalwerte der Ausgabefarbe auf die `L`- und `b`-Kanalwerte des `lab()`-Äquivalents der Ursprungsfarbe — diese Werte sind `54.29` und `69.8997`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen, nicht auf der Ursprungsfarbe basierenden Wert: `-100`.

Die finale Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe in das gleiche Modell wie die Ausgabefarbe konvertiert, falls die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, damit sie in kompatibler Weise dargestellt werden kann (d.h. mit den gleichen Kanälen).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), entspricht er standardmäßig `1`. Daher sind die Ursprungs- und Ausgabekanalwerte in den obigen Beispielen `1`.

Untersuchen wir einige Beispiele, die Ursprungs- und Ausgabewerte für Alphakanäle angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabefarbe als identisch mit dem Alphakanalwert der Ursprungsfarbe an, während das zweite einen anderen Alphakanalwert für die Ausgabefarbe angibt, der nicht im Zusammenhang mit dem Alphakanalwert der Ursprungsfarbe steht.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe wieder in das `lab()`-Äquivalent — `lab(54.29 80.8198 69.8997)` — konvertiert. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `a`-, `b`- und `A`-Werte angewendet, wodurch eine Ausgabefarbe von `lab(74.29 60.8198 29.8997 / 0.9)` entsteht:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt den Effekt der Variation des Helligkeitswertes der `lab()`-Funktion.

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

Dieses Beispiel demonstriert die Auswirkungen der Einstellung der `a`- und `b`-Werte der `lab()`-Funktion auf die Enden und Mittelpunkte der a-Achse, die von grün (-125) zu rot (125) geht und die b-Achse, die von gelb (-125) zu blau (125) geht.

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

Mit der CSS {{cssxref("background-color")}}-Eigenschaft variieren wir die `a`- und `b`-Werte der `lab()`-Farbfunktion entlang der a- und b-Achse, um die Auswirkungen von maximalen, mittleren und minimalen Werten in jedem Fall zu zeigen.

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

Die linke Spalte befindet sich am Gelbende (-125) der b-Achse und die rechte Spalte befindet sich am Blauende (125). Die obere Reihe zeigt Farben am Rotende der a-Achse (-125) und die untere Reihe befindet sich am Grünende (125). Die mittlere Spalte und die Reihe befinden sich an den Mittelpunkten (0) der jeweiligen Achsen, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um den Verlauf der Werte der `lab()`-Funktion entlang der a-Achse (von rot zu grün) und entlang der b-Achse (von gelb zu blau) zu demonstrieren. In jedem Verlauf bleibt eine Achse statisch, während die andere Achse vom unteren Ende zum oberen Ende der Achsenwerte fortschreitet.

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

### Anpassung der Transparenz

Das folgende Beispiel zeigt die Wirkung der Veränderung des `A` (Alpha)-Wertes der `lab()` Funktionsnotation.
Die `red`- und `red-alpha`-Elemente überlagern das `#background-div`-Element, um die Wirkung der Transparenz zu demonstrieren.
Durch die Zuweisung eines Wertes von `0.4` für `A` wird die Farbe 40% undurchsichtig.

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

### Verwenden von relativen Farben mit lab()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linke und rechte Variante dieser `--base-color` aufgehellt bzw. abgedunkelt sind.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in einer `lab()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal verändert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 15% zur Helligkeit hinzugefügt, und die abgedunkelte Farbe hat 15% von der Helligkeit subtrahiert.

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

- {{cssxref("&lt;color&gt;")}} Datentyp
- [`<color-function>`](/de/docs/Web/CSS/Guides/Colors#functions) Datentyp
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [LCH-Farben in CSS: Was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Safari Technology Preview 122 Release Notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): beinhaltet `lab()` und {{cssxref("color_value/lch",'lch()')}} Farben
