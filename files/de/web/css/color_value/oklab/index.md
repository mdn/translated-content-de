---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die funktionale Notation **`oklab()`** drückt eine gegebene Farbe im Oklab-{{glossary("color space","Farbraum")}} aus, der versucht, die Farbwahrnehmung des menschlichen Auges nachzubilden.

Oklab ist ein perceptualer Farbraum und ist nützlich für:

- Umwandlung eines Bildes in Graustufen, ohne die Helligkeit zu verändern.
- Veränderung der Farbsättigung, während die Benutzerwahrnehmung des Farbtons und der Helligkeit beibehalten wird.
- Erstellen von glatten und einheitlichen Farbverläufen (wenn sie manuell interpoliert werden, zum Beispiel in einem {{HTMLElement("canvas")}}-Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — a- und b-Achsen. Es kann eine größere Farbpalette als RGB darstellen, einschließlich Wide-Gamut- und P3-Farben. Wenn Sie ein polares Farbsystem, Chroma und Farbton wünschen, verwenden Sie {{cssxref("color_value/oklch", "oklch()")}}.

## Syntax

```css
/* Absolute Werte */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Relative Werte */
oklab(from green l a b / 0.5)
oklab(from #0000FF calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### Werte

Nachfolgend sind die Beschreibungen der erlaubten Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert bestimmt die wahrgenommene Helligkeit der Farbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert bestimmt die Entfernung der Farbe entlang der `a`-Achse im Oklab-Farbraum, die definiert, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte werden erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert definiert die Entfernung der Farbe entlang der `b`-Achse im Oklab-Farbraum, die bestimmt, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte werden erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alpha-Kanal zu spezifizieren. Wenn der `A`-Kanalwert nicht ausdrücklich spezifiziert wird, wird er standardmäßig auf 100 % gesetzt. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgangsfarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgangsfarbe entlang der `a`-Achse im Oklab-Farbraum, die definiert, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte werden erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgangsfarbe entlang der `b`-Achse im Oklab-Farbraum, die definiert, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte signiert sind (sowohl positive als auch negative Werte werden erlaubt) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen setzen können. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanalwert der Ausgangsfarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alpha-Kanal zu spezifizieren. Wenn der `A`-Kanalwert nicht ausdrücklich spezifiziert wird, wird er auf den Alpha-Kanalwert der Ursprungsfarbe standardmäßig gesetzt. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition von Ausgangsfarbkanalkomponenten bei relativen Farben

Wenn eine relative Farbsyntax innerhalb einer `oklab()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklab-Farbe (wenn sie nicht bereits so angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) — sowie ein Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgangsfarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1` aufgelöst, inklusive.
- Die `a`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `-0.4` und `0.4` aufgelöst, inklusive.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgangsfarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um dies zu verdeutlichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Wahrscheinlich würden Sie diese in einem echten Codebasis nie verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um die relative `oklab()`-Syntax zu erlernen.

Starten wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte (`0.627966`, `0.22488`, und `0.125859`) der Ursprungsfarbe als die Ausgangskanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgangsfarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgangsfarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

In diesem Beispiel:

- Wird die `hsl()`-Ursprungsfarbe in eine äquivalente `oklab()`-Farbe konvertiert — `oklab(0.627966 0.22488 0.125859)`.
- Die `L`- und `b`-Kanalwerte für die Ausgangsfarbe werden auf diejenigen der äquivalenten `oklab()`-Ursprungsfarbwerte gesetzt — Diese Werte sind `0.627966` und `0.125859`.
- Der `a`-Kanalwert der Ausgangsfarbe wird auf einen neuen Wert gesetzt, der nicht auf der Ursprungsfarbe basiert: `-0.3`.

Die endgültige Ausgangsfarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgangsfarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgangsfarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d. h. mit denselben Kanälen).

In den bisher in diesem Abschnitt betrachteten Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgangsfarben explizit angegeben. Wenn der Alpha-Kanal der Ausgangsfarbe nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Alpha-Kanal der Ursprungsfarbe gesetzt. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alpha-Kanalwerte der Ursprungs- und Ausgangsfarbe in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die die Ursprungs- und Ausgangsalpha-Kanalwerte spezifizieren. Das erste Beispiel spezifiziert den Alpha-Kanalwert der Ausgangsfarbe als denselben wie den Alpha-Kanalwert der Ursprungsfarbe, während das zweite Beispiel einen anderen Alpha-Kanalwert der Ausgangsfarbe spezifiziert, der nicht mit dem Alpha-Kanalwert der Ursprungsfarbe in Beziehung steht.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Berechnete Ausgangsfarbe: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Berechnete Ausgangsfarbe: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das `oklab()`-Äquivalent konvertiert — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}}-Berechnungen werden auf die Werte `L`, `a`, `b` und `A` angewendet, was zu einer Ausgangsfarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` führt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanalwerte der Ursprungsfarbe auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Auswirkungen der Variation der Werte für Helligkeit, a-Achse und b-Achse der `oklab()`-Funktion.

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

### Anpassung der Opazität

Das folgende Beispiel zeigt die Auswirkungen der Variation des `A`- (Alpha-)Wertes der `oklab()`-Funktion. Die Elemente `red` und `red-alpha` überlappen das Element `#background-div`, um den Effekt der Opazität zu demonstrieren. Durch die Angabe einer Opazität von `0.4` für das Element `red-alpha` erscheint es transparenter als das `red`-Element.

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

Dieses Beispiel zeigt die Auswirkungen, wenn die Werte `a` und `b` der `oklab()`-Funktion auf die Endpunkte und Mittelpunkte der a-Achse und b-Achse gesetzt werden. Die a-Achse reicht von grün (`-0.4`) bis rot (`0.4`) und die b-Achse von gelb (`-0.4`) bis blau (`0.4`).

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

Mit der CSS-{{cssxref("background-color")}}-Eigenschaft variieren wir die `a`- und `b`-Werte der `oklab()`-Farbfunktion entlang der a-Achse und b-Achse, um die Wirkung von maximalen, mittleren und minimalen Werten in jedem Fall zu zeigen.

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
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="redzero"] {
  background-color: oklab(0.5 0.4 0);
}
[data-color="redblue"] {
  background-color: oklab(0.5 0.4 -0.4);
}

/* a-Achse Mitte, variable b-Achse */
[data-color="zeroyellow"] {
  background-color: oklab(0.5 0 0.4);
}
[data-color="zerozero"] {
  background-color: oklab(0.5 0 0);
}
[data-color="zeroblue"] {
  background-color: oklab(0.5 0 -0.4);
}

/* a-Achse min, variable b-Achse */
[data-color="greenyellow"] {
  background-color: oklab(0.5 -0.4 0.4);
}
[data-color="greenzero"] {
  background-color: oklab(0.5 -0.4 0);
}
[data-color="greenblue"] {
  background-color: oklab(0.5 -0.4 -0.4);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_color_axes", "", "200")}}

Die linke Spalte liegt am gelben Ende (`-0.4`) der b-Achse, die rechte Spalte am blauen Ende (`0.4`). Die obere Zeile zeigt Farben am roten Ende der a-Achse (`-0.4`) und die untere Zeile am grünen Ende (`0.4`). Die mittlere Spalte und Zeile liegen an den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Progression der Werte der `oklab()`-Funktion entlang der a-Achse (von Rot zu Grün) und entlang der b-Achse (von Gelb zu Blau) zu demonstrieren. In jedem Verlauf bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten fortschreitet.

```html hidden
<div data-color="redtogreen-yellow">
  <span>Rot</span><span>`b`= -0.4 (gelb)</span><span>Grün</span>
</div>
<div data-color="redtogreen-zero">
  <span>Rot</span><span>kein Gelb oder Blau</span><span>Grün</span>
</div>
<div data-color="redtogreen-blue">
  <span>Rot</span><span>`b`= 0.4 (blau)</span><span>Grün</span>
</div>

<div data-color="yellowtoblue-red">
  <span>Gelb</span><span>`a` = -0.4 (rot)</span><span>Blau</span>
</div>
<div data-color="yellowtoblue-zero">
  <span>Gelb</span><span>kein Rot oder Grün</span><span>Blau</span>
</div>
<div data-color="yellowtoblue-green">
  <span>Gelb</span><span>`a` = 0.4 (grün)</span><span>Blau</span>
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
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% -0.4 0.4));
}
[data-color="redtogreen-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0), oklab(50% -0.4 0));
}
[data-color="redtogreen-blue"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 -0.4), oklab(50% -0.4 -0.4));
}

/* b-Achse Verläufe */
[data-color="yellowtoblue-red"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% 0.4 -0.4));
}
[data-color="yellowtoblue-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0 0.4), oklab(50% 0 -0.4));
}
[data-color="yellowtoblue-green"] {
  background-image: linear-gradient(to right, oklab(50% -0.4 0.4),oklab(50% -0.4 -0.4));
}
```

#### Ergebnis

{{EmbedLiveSample("Linear gradients along the a-axis and b-axis", '', '420')}}

### Verwendung relativer Farben mit oklab()

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das mittlere Element erhält die unmodifizierte `--base-color`, während das linke und rechte hellere und dunklere Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color`- [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklab()`-Funktion übergeben, und die Ausgangsfarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die hellere Farbe hat `0.15` (15%) zum Helligkeitskanal hinzugefügt, und die dunklere Farbe hat `0.15` (15%) vom Helligkeitskanal subtrahiert.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Der [`<color>`-Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farb-Funktionen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Ein perceptualer Farbraum für Bildverarbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB Farbkreis](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
