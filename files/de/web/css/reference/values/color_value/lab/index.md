---
title: CSS-Funktion `lab()`
short-title: lab()
slug: Web/CSS/Reference/Values/color_value/lab
l10n:
  sourceCommit: 5cea7df435db1905b06d693b0192ef1e2166d6a7
---

Die funktionale Schreibweise **`lab()`** drückt eine Farbe im CIE-L\*a\*b\*-{{Glossary("color_space", "Farbraum")}} aus.

Lab bildet den gesamten für Menschen sichtbaren Farbbereich ab. Dazu werden die Helligkeit der Farbe, ein Wert auf der Rot-Grün-Achse, ein Wert auf der Blau-Gelb-Achse und optional ein Alphawert für die Transparenz angegeben.

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

Im Folgenden werden die zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) beschrieben.

#### Syntax für absolute Werte

```plain
lab(L a b[ / A])
```

Die Parameter sind:

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Helligkeit der Farbe an. Dabei entspricht die Zahl `0` dem Wert `0%` (Schwarz) und die Zahl `100` dem Wert `100%` (Weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Farbe auf der `a`-Achse an und bestimmt, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Die Werte können positiv oder negativ sein und sind theoretisch nicht begrenzt. Sie können daher auch Werte außerhalb der Grenzen von `±125` (`±100%`) angeben. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Farbe auf der `b`-Achse an und bestimmt, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Die Werte können positiv oder negativ sein und sind theoretisch nicht begrenzt. Sie können daher auch Werte außerhalb der Grenzen von `±125` (`±100%`) angeben. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alphakanals der Farbe angibt. Die Zahl `0` entspricht `0%` (vollständig transparent) und `1` entspricht `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alphakanal vorhanden ist. Wird der Wert des `A`-Kanals nicht ausdrücklich angegeben, beträgt er standardmäßig 100 %. Falls er angegeben wird, steht vor dem Wert ein Schrägstrich (`/`).

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Syntax für relative Werte

```plain
lab(from <color> L a b[ / A])
```

Die Parameter sind:

- `from <color>`
  - : Beim Definieren einer relativen Farbe steht immer das Schlüsselwort `from`, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ausgangsfarbe** angibt. Auf dieser Farbe basiert die relative Farbe. Als Ausgangsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax verwendet werden, auch eine andere relative Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Helligkeit der Ausgabefarbe an. Dabei entspricht die Zahl `0` dem Wert `0%` (Schwarz) und die Zahl `100` dem Wert `100%` (Weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Ausgabefarbe auf der `a`-Achse an und bestimmt, wie grün (in Richtung `-125`) oder rot (in Richtung `+125`) die Farbe ist. Die Werte können positiv oder negativ sein und sind theoretisch nicht begrenzt. Sie können daher auch Werte außerhalb der Grenzen von `±125` (`±100%`) angeben. In der Praxis können die Werte `±160` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-125` und `125`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Ausgabefarbe auf der `b`-Achse an und bestimmt, wie blau (in Richtung `-125`) oder gelb (in Richtung `+125`) die Farbe ist. Die Werte können positiv oder negativ sein und sind theoretisch nicht begrenzt. Sie können daher auch Werte außerhalb der Grenzen von `±125` (`±100%`) angeben. In der Praxis können die Werte `±160` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alphakanals der Ausgabefarbe angibt. Die Zahl `0` entspricht `0%` (vollständig transparent) und `1` entspricht `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alphakanal vorhanden ist. Wird der Wert des `A`-Kanals nicht ausdrücklich angegeben, übernimmt er standardmäßig den Wert des Alphakanals der Ausgangsfarbe. Falls er angegeben wird, steht vor dem Wert ein Schrägstrich (`/`).

> [!NOTE]
> Wenn Prozentwerte in CSS ein numerisches Äquivalent haben, entspricht `100%` normalerweise der Zahl `1`. Bei der Helligkeit sowie den `a`- und `b`-Achsen von Lab ist das nicht immer der Fall. Für `L` reicht der Wertebereich von 0 bis 100; dabei entspricht `100%` dem Wert `100`. Die Werte für `a` und `b` können negativ oder positiv sein: `100%` entspricht `125` und `-100%` entspricht `-125`.

#### Kanalwerte der Ausgabefarbe bei relativen Farben definieren

Wenn Sie die Syntax für relative Farben innerhalb einer `lab()`-Funktion verwenden, konvertiert der Browser die Ausgangsfarbe in eine entsprechende Lab-Farbe, sofern sie nicht bereits als solche angegeben ist. Die Farbe wird durch drei getrennte Farbkanalwerte definiert: `l` (Helligkeit), `a` (Grün-Rot-Achse) und `b` (Blau-Gelb-Achse). Hinzu kommt ein Wert für den Alphakanal (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Kanalwerte der Ausgabefarbe festzulegen:

- Der Kanalwert `l` wird in einen `<number>`-Wert zwischen `0` und `100` einschließlich aufgelöst.
- Die Kanalwerte `a` und `b` werden jeweils in einen `<number>`-Wert zwischen `-125` und `125` einschließlich aufgelöst.
- Der Kanalwert `alpha` wird in einen `<number>`-Wert zwischen `0` und `1` einschließlich aufgelöst.

Beim Definieren einer relativen Farbe können die einzelnen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Die folgenden Beispiele veranschaulichen dies.

In den ersten beiden Beispielen verwenden wir die Syntax für relative Farben. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ausgangsfarbe aus, während die Ausgabefarbe des zweiten Beispiels überhaupt nicht auf der Ausgangsfarbe basiert. Sie erzeugen also keine wirklich relativen Farben! In einem echten Projekt würden Sie diese Schreibweisen wahrscheinlich nicht verwenden, sondern stattdessen einen absoluten Farbwert angeben. Die Beispiele dienen als Einstieg in die Syntax relativer Farben mit `lab()`.

Beginnen wir mit der Ausgangsfarbe `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ausgangsfarbe aus. Sie verwendet deren Kanalwerte `l`, `a` und `b` (`54.29`, `80.8198` und `69.8997`) als Kanalwerte der Ausgabefarbe:

```css
lab(from hsl(0 100% 50%) l a b)
```

Die Ausgabefarbe dieser Funktion ist `lab(54.29 80.8198 69.8997)`.

Die nächste Funktion verwendet absolute Kanalwerte für die Ausgabefarbe. Dadurch entsteht eine völlig andere Farbe, die nicht auf der Ausgangsfarbe basiert:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

In diesem Fall ist die Ausgabefarbe `lab(29.692 56.1125 -36.2925)`.

Die folgende Funktion erzeugt eine relative Farbe auf Basis der Ausgangsfarbe:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ausgangsfarbe in die entsprechende `lab()`-Farbe: `lab(54.29 80.8198 69.8997)`.
- Setzt die Kanalwerte `l` und `b` der Ausgabefarbe auf die Werte der Kanäle `L` und `b` der entsprechenden `lab()`-Farbe. Diese Werte sind `54.29` beziehungsweise `69.8997`.
- Setzt den Kanalwert `a` der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ausgangsfarbe basiert: `-100`.

Die endgültige Ausgabefarbe ist `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Wenn die Ausgabefarbe ein anderes Farbmodell als die Ausgangsfarbe verwendet, wird die Ausgangsfarbe im Hintergrund in das Farbmodell der Ausgabefarbe konvertiert. So lässt sie sich in einer kompatiblen Form darstellen, also mit denselben Kanälen.

In den bisherigen Beispielen dieses Abschnitts wurden die Alphakanäle weder für die Ausgangs- noch für die Ausgabefarben ausdrücklich angegeben. Wird der Alphakanal der Ausgabefarbe nicht angegeben, übernimmt er standardmäßig den Wert des Alphakanals der Ausgangsfarbe. Wird der Alphakanal der Ausgangsfarbe nicht angegeben und handelt es sich bei ihr nicht um eine relative Farbe, beträgt sein Standardwert `1`. Daher haben die Alphakanäle der Ausgangs- und Ausgabefarben in den obigen Beispielen jeweils den Wert `1`.

Sehen wir uns Beispiele an, in denen die Alphakanalwerte der Ausgangs- und Ausgabefarben angegeben werden. Im ersten Beispiel erhält der Alphakanal der Ausgabefarbe denselben Wert wie der der Ausgangsfarbe. Im zweiten Beispiel wird für die Ausgabefarbe ein anderer Alphakanalwert angegeben, der nicht vom Wert der Ausgangsfarbe abhängt.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: lab(54.29 80.8198 69.8997 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ausgangsfarbe erneut in die entsprechende `lab()`-Farbe konvertiert: `lab(54.29 80.8198 69.8997)`. Auf die Werte `L`, `a`, `b` und `A` werden Berechnungen mit {{cssxref("calc")}} angewendet. Daraus ergibt sich die Ausgabefarbe `lab(74.29 60.8198 29.8997 / 0.9)`:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanalwerte der Ausgangsfarbe in `<number>`-Werte aufgelöst werden, müssen Sie bei Berechnungen Zahlen zu ihnen addieren. Das gilt auch dann, wenn ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Beispielsweise funktioniert es nicht, einen `<percentage>`-Wert zu einem `<number>`-Wert zu addieren.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Helligkeit anpassen

Das folgende Beispiel zeigt, wie sich unterschiedliche Helligkeitswerte der Funktion `lab()` auswirken.

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

### Deckkraft anpassen

Das folgende Beispiel zeigt, wie sich unterschiedliche Werte für `A` (Alpha) in der funktionalen Schreibweise `lab()` auswirken.
Die Elemente `red` und `red-alpha` überlagern das Element `#background-div`, um die Wirkung der Deckkraft zu veranschaulichen.
Ein Wert von `0.4` für `A` macht die Farbe zu 40 % deckend.

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

### Farbachsen anpassen

Dieses Beispiel zeigt, wie sich Werte für `a` und `b` an den Endpunkten und Mittelpunkten der Achsen auswirken. Die a-Achse verläuft von Grün (-125) nach Rot (125), die b-Achse von Gelb (-125) nach Blau (125).

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

Mithilfe der CSS-Eigenschaft {{cssxref("background-color")}} variieren wir die Werte `a` und `b` der Farbfunktion `lab()` entlang der a- und b-Achse. So werden jeweils die Auswirkungen der Höchst-, Mittel- und Mindestwerte sichtbar.

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

Die linke Spalte liegt am gelben Ende (-125) der b-Achse, die rechte Spalte am blauen Ende (125). Die obere Zeile zeigt Farben am roten Ende der a-Achse (-125), die untere Zeile am grünen Ende (125). Die mittlere Spalte und Zeile liegen jeweils am Mittelpunkt (0) der Achsen. Die mittlere Zelle ist grau: Sie enthält weder Rot noch Grün, Gelb oder Blau, da beide Achsen den Wert `0` haben.

### Lineare Farbverläufe entlang der a- und b-Achse

Dieses Beispiel verwendet lineare Farbverläufe, um die Entwicklung der Werte der Funktion `lab()` entlang der a-Achse (von Rot nach Grün) und der b-Achse (von Gelb nach Blau) zu veranschaulichen. In jedem Farbverlauf bleibt eine Achse unverändert, während die andere vom unteren zum oberen Ende ihres Wertebereichs verläuft.

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

### Relative Farben mit lab() verwenden

In diesem Beispiel erhalten drei {{htmlelement("div")}}-Elemente unterschiedliche Hintergrundfarben. Das mittlere Element erhält die unveränderte Farbe `--base-color`, während das linke und das rechte Element aufgehellte beziehungsweise abgedunkelte Varianten von `--base-color` erhalten.

Diese Varianten werden mithilfe relativer Farben definiert: Die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird an eine `lab()`-Funktion übergeben. Der Helligkeitskanal der Ausgabefarben wird anschließend mit einer `calc()`-Funktion verändert, um den gewünschten Effekt zu erzielen. Für die aufgehellte Farbe werden dem Helligkeitskanal 15 % hinzugefügt; für die abgedunkelte Farbe werden 15 % davon abgezogen.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using relative colors with lab", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Datentyp {{cssxref("&lt;color&gt;")}}
- Datentyp [`<color-function>`](/de/docs/Web/CSS/Guides/Colors#functions)
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [LCH-Farben in CSS: Was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
- [Versionshinweise zu Safari Technology Preview 122](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): enthalten Farben mit `lab()` und {{cssxref("color_value/lch",'lch()')}}
