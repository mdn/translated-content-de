---
title: oklab()
slug: Web/CSS/Reference/Values/color_value/oklab
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`oklab()`** Funktionsnotation beschreibt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}}, der versucht nachzuahmen, wie Farben vom menschlichen Auge wahrgenommen werden.

Oklab ist ein perzeptueller Farbraum und nützlich für:

- Die Umwandlung eines Bildes in Graustufen, ohne dessen Helligkeit zu verändern.
- Die Modifikation der Farbsättigung, während die Benutzerwahrnehmung von Farbton und Helligkeit beibehalten wird.
- Die Erstellung von sanften und gleichmäßigen Farbverläufen (wenn z. B. manuell interpoliert in einem {{HTMLElement("canvas")}}-Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — a- und b-Achsen. Es kann ein breiteres Farbspektrum als RGB darstellen, einschließlich Wide-Gamut- und P3-Farben. Wenn Sie ein polarer Farbsystem, Chroma und Farbton wünschen, verwenden Sie {{cssxref("color_value/oklch", "oklch()")}}.

## Syntax

```css
/* Absolute values */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Relative values */
oklab(from green l a b / 0.5)
oklab(from #123456 calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### Werte

Nachfolgend sind Beschreibungen der zulässigen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse im Oklab-Farbraum an, was definiert, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbeschränkt sind, sodass Sie Werte außerhalb der Grenzwerte von `±0.4` (`±100%`) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse im Oklab-Farbraum an, was definiert, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbeschränkt sind, sodass Sie Werte außerhalb der Grenzwerte von `±0.4` (`±100%`) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alpha-Kanal-Wert der Farbe darstellt. Die Zahl `0` entspricht `0%` (vollständig transparent) und `1` entspricht `100%` (vollständig opak). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wird der `A`-Kanal-Wert nicht explizit angegeben, wird er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum, was definiert, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbeschränkt sind, sodass Sie Werte außerhalb der Grenzwerte von `±0.4` (`±100%`) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum, was definiert, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind möglich) und theoretisch unbeschränkt sind, sodass Sie Werte außerhalb der Grenzwerte von `±0.4` (`±100%`) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alpha-Kanal-Wert der Ausgabefarbe darstellt. Die Zahl `0` entspricht `0%` (vollständig transparent) und `1` entspricht `100%` (vollständig opak). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird er auf den Alpha-Kanalwert der Ursprungsfarbe standardmäßig gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition der Kanal-Komponenten der relativen Farbausgabe

Bei der Verwendung der relativen Farbsyntax in einer `oklab()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklab-Farbe (sofern sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) — plus einem Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf ein `<number>` zwischen `0` und `1`, inklusive, aufgelöst.
- Die `a` und `b` Kanäle werden jeweils auf ein `<number>` zwischen `-0.4` und `0.4`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird auf ein `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Unten werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einem echten Codebase verwenden und stattdessen wahrscheinlich nur einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `oklab()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (äquivalent zu `rot`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `a` und `b`-Kanalwerte der Ursprungsfarbe (`0.627966`, `0.22488` und `0.125859`) als Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Diese Funktion gibt die Farbe `oklab(0.627966 0.22488 0.125859)` aus.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte, was eine völlig andere Farbe ausgibt, die nicht auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ursprungsfarbe in eine äquivalente `oklab()`-Farbe — `oklab(0.627966 0.22488 0.125859)`.
- Setzt die `L` und `b`-Kanalwerte der Ausgabefarbe auf die der äquivalenten Ursprungs-`oklab()`-Kanalwerte — diese Werte sind `0.627966` und `0.125859`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. mit denselben Kanälen).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Alpha-Kanal der Ursprungsfarbe gesetzt. Ist der Alpha-Kanal der Ursprungsfarbe nicht angegeben (und handelt es sich nicht um eine relative Farbe), wird er auf `1` gesetzt. Daher sind die Alpha-Kanal-Werte der Ursprung- und Ausgabefarbe `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Alpha-Kanal-Werte für Ursprung- und Ausgabekanal-Werte spezifizieren. Das erste Beispiel spezifiziert den Alpha-Kanal-Wert der Ausgabefarbe als gleich dem Alpha-Kanal-Wert der Ursprungsfarbe, während das zweite Beispiel einen anderen Alpha-Kanal-Wert für die Ausgabefarbe angibt, der nicht mit dem Alpha-Kanal-Wert der Ursprungsfarbe in Verbindung steht.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in die `oklab()`-äquivalente Farbe konvertiert — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`, `a`, `b` und `A` Werte angewendet, was eine Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` ergibt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Auswirkungen von variierenden Werten für Helligkeit, a-Achse und b-Achse der `oklab()` Funktion.

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

### Anpassung der Deckkraft

Das folgende Beispiel zeigt die Auswirkungen von variierenden `A` (Alpha)-Werten der `oklab()` Funktion.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div` Element, um den Effekt der Deckkraft zu demonstrieren.
Indem dem `red-alpha` Element eine Deckkraft von `0.4` zugewiesen wird, erscheint es transparenter als das `red` Element.

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

Dieses Beispiel demonstriert die Effekte beim Setzen der `a` und `b`-Werte der `oklab()` Funktion auf die End- und Mittelpunkte der a-Achse und b-Achse. Die a-Achse verläuft von Grün (`-0.4`) zu Rot (`0.4`), und die b-Achse verläuft von Gelb (`-0.4`) zu Blau (`0.4`).

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

Unter Verwendung der CSS {{cssxref("background-color")}}-Eigenschaft variieren wir die `a` und `b`-Werte der `oklab()` Farbfunktions entlang der a-Achse und b-Achse und zeigen die Effekte der maximalen, mittleren und minimalen Werte in jedem Fall.

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

Die linke Spalte befindet sich am gelben Ende (`-0.4`) der b-Achse und die rechte Spalte am blauen Ende (`0.4`). Die obere Reihe zeigt Farben am roten Ende der a-Achse (`-0.4`) und die untere Reihe am grünen Ende (`0.4`). Die mittlere Spalte und Reihe liegen an den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält weder Rot, Grün, Gelb noch Blau mit einem Wert von `0` für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Wertverläufe der `oklab()` Funktion entlang der a-Achse (von Rot zu Grün) und entlang der b-Achse (von Gelb zu Blau) zu demonstrieren. In jedem Verlaufbild bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten fortschreitet.

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

### Verwendung relativer Farben mit oklab()

Dieses Beispiel stilisiert drei {{htmlelement("div")}} Elemente mit verschiedenen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während den linken und rechten aufgehellte und verdunkelte Varianten dieser `--base-color` zugewiesen werden.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `oklab()` Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erreichen. Der aufgehellte Farbton hat `0.15` (15%) zum Helligkeitskanal hinzugefügt und der verdunkelte Farbton hat `0.15` (15%) vom Helligkeitskanal abgezogen.

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

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`<color>` Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) für eine Liste aller Farbnotationen
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farb-Funktionen
- [Verwendung von relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [Ein perzeptueller Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB Farbkreis](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
