---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`oklab()`** Funktionsnotation drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus, der versucht, die Farbwahrnehmung durch das menschliche Auge nachzubilden.

Oklab ist ein wahrnehmungsbasierter Farbraum und nützlich für:

- Die Umwandlung eines Bildes in Graustufen, ohne seine Helligkeit zu verändern.
- Anpassung der Farbsättigung, während der Farbton und die Helligkeit aus Nutzersicht beibehalten werden.
- Erstellung von sanften und gleichmäßigen Farbverläufen (wenn sie manuell interpoliert werden, zum Beispiel in einem {{HTMLElement("canvas")}}-Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — a- und b-Achsen. Es kann einen größeren Farbbereich als RGB darstellen, einschließlich Wide-Gamut und P3-Farben. Wenn Sie ein polares Farbsystem wünschen, Chroma und Farbton, verwenden Sie {{cssxref("color_value/oklch", "oklch()")}}.

## Syntax

```css
/* Absolute values */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Relative values */
oklab(from green l a b / 0.5)
oklab(from #0000FF calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (In diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (In diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt den Abstand der Farbe entlang der `a`-Achse im Oklab-Farbraum an, der definiert, wie grün (bewegt sich in Richtung `-0.4`) oder rot (bewegt sich in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der ±0.4 (±100%) Grenzen setzen können. In der Praxis können die Werte jedoch nicht über ±0.5 hinausgehen.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (In diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt den Abstand der Farbe entlang der `b`-Achse im Oklab-Farbraum an, der definiert, wie blau (bewegt sich in Richtung `-0.4`) oder gelb (bewegt sich in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der ±0.4 (±100%) Grenzen setzen können. In der Praxis können die Werte jedoch nicht über ±0.5 hinausgehen.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (In diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (In diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum, der definiert, wie grün (bewegt sich in Richtung `-0.4`) oder rot (bewegt sich in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der ±0.4 (±100%) Grenzen setzen können. In der Praxis können die Werte jedoch nicht über ±0.5 hinausgehen.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (In diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert den Abstand der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum, der definiert, wie blau (bewegt sich in Richtung `-0.4`) oder gelb (bewegt sich in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte vorzeichenbehaftet sind (positive und negative Werte erlaubt) und theoretisch unbegrenzt, was bedeutet, dass Sie Werte außerhalb der ±0.4 (±100%) Grenzen setzen können. In der Praxis können die Werte jedoch nicht über ±0.5 hinausgehen.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} das den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition relativer Farbausgabekanal-Komponenten

Bei Verwendung relativer Farbsyntax innerhalb einer `oklab()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklab-Farbe (wenn sie nicht bereits so spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) — plus ein Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um sie beim Definieren der Ausgabefarbkanalwerte zu verwenden:

- Der `l`-Kanalwert wird als `<number>` zwischen `0` und `1` aufgelöst, einschließlich.
- Die `a`- und `b`-Kanäle sind jeweils als `<number>` zwischen `-0.4` und `0.4` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird als `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend betrachten wir einige Beispiele, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Im ersten Beispiel wird jedoch dieselbe Farbe wie die Ursprungsfarbe ausgegeben und im zweiten Beispiel eine Farbe ausgegeben, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einem realen Code verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um über die relative `oklab()`-Syntax zu lernen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `a`, und `b` Kanalwerte der Ursprungsfarbe (`0.627966`, `0.22488` und `0.125859`) als Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()` Ursprungsfarbe in eine äquivalente `oklab()` Farbe — `oklab(0.627966 0.22488 0.125859)`.
- Setzt die `L` und `b` Kanalwerte für die Ausgabefarbe auf die `L` und `b` Kanalwerte des `oklab()`-Äquivalents der Ursprungsfarbe — diese Werte sind `0.627966` und `0.125859`, jeweils.
- Setzt den `a` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d. h. mit denselben Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht spezifiziert ist, entspricht er standardmäßig demselben Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), entspricht er standardmäßig `1`. Daher sind die Ursprungs- und Ausgabekanalwerte in den obigen Beispielen `1`.

Betrachten wir einige Beispiele, die Ursprungs- und Ausgabefarbkanalwerte spezifizieren. Das erste gibt an, dass der Ausgabefarbkanalwert derselbe wie der Ursprungsfarbkanalwert ist, während das zweite einen anderen Ausgabefarbkanalwert spezifiziert, der nicht auf dem Ursprungsfarbkanalwert basiert.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe wieder in die `oklab()` Äquivalent konvertiert — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}} Berechnungen werden auf die `L`, `a`, `b` und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` führt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Nummern zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Wirkung der Variierung der Helligkeits-, a-Achsen- und b-Achsenwerte der `oklab()`-Funktion.

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

Das folgende Beispiel zeigt die Wirkung der Variierung des `A` (Alpha)-Wertes der `oklab()`-Funktion. Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren. Wenn das `red-alpha`-Element eine Deckkraft von `0.4` erhält, erscheint es transparenter als das `red`-Element.

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

Dieses Beispiel zeigt die Auswirkungen, wenn Sie die `a`- und `b`-Werte der `oklab()`-Funktion auf die Enden und Mittelpunkte der a-Achse und b-Achse setzen. Die a-Achse geht von Grün (`-0.4`) zu Rot (`0.4`) und die b-Achse geht von Gelb (`-0.4`) zu Blau (`0.4`).

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

Durch die Verwendung der CSS {{cssxref("background-color")}}-Eigenschaft variieren wir die `a`- und `b`-Werte der `oklab()`-Funktion entlang der a-Achse und b-Achse und zeigen die Effekte von maximalen, mittleren und minimalen Werten in jedem Fall.

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

Die linke Spalte befindet sich am Gelb-Ende (`-0.4`) der b-Achse und die rechte Spalte am Blau-Ende (`0.4`). Die obere Reihe zeigt Farben am Rot-Ende der a-Achse (`-0.4`) und die untere Reihe am Grün-Ende (`0.4`). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten der jeweiligen Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem Wert von `0` für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Progression der Werte der `oklab()`-Funktion entlang der a-Achse (von Rot zu Grün) und entlang der b-Achse (von Gelb zu Blau) zu demonstrieren. In jedem Gradientenbild bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten fortschreitet.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten licht- und dunkelmäßigen Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit Hilfe relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklab()`-Funktion eingebracht, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erreichen. Die aufgehellte Farbe hat `0.15` (15%) zur Helligkeitsstufe hinzugefügt, und die abgedunkelte Farbe hat `0.15` (15%) von der Helligkeitsstufe subtrahiert.

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

Das Ausgaberesultat ist wie folgt:

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farbfunktions
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Ein wahrnehmungsbasierter Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB Farbrad](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
