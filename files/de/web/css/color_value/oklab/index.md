---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`oklab()`** funktionsbasierte Notation drückt eine gegebene Farbe im Oklab [Farbraum](/de/docs/Glossary/color_space) aus, der versucht, die Wahrnehmung von Farben durch das menschliche Auge nachzuahmen.

Oklab ist ein wahrnehmungsbasierter Farbraum und eignet sich dazu, um:

- Ein Bild in Graustufen umzuwandeln, ohne dessen Helligkeit zu verändern.
- Die Sättigung von Farben zu modifizieren, während die Benutzerwahrnehmung von Farbton und Helligkeit erhalten bleibt
- Sanfte und einheitliche Farbverläufe zu erstellen (wenn sie manuell interpoliert werden, zum Beispiel in einem {{HTMLElement("canvas")}} Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab Farbraum — den a- und b-Achsen. Es kann ein breiteres Farbspektrum als RGB darstellen, einschließlich Wide-Gamut und P3 Farben. Wenn Sie ein polares Farbsystem verwenden möchten, Chroma und Farbton, nutzen Sie {{cssxref("color_value/oklch", "oklch()")}}.

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

Untenstehend sind Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) angegeben.

#### Absolute Syntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a` Achse im Oklab Farbraum an, welche definiert, wie grün (richtung `-0.4`) oder rot (richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte sowohl positive als auch negative Werte zulassen und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b` Achse im Oklab Farbraum an, welche definiert, wie blau (richtung `-0.4`) oder gelb (richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte sowohl positive als auch negative Werte zulassen und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Syntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a` Achse im Oklab Farbraum, welche definiert, wie grün (richtung `-0.4`) oder rot (richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte sowohl positive als auch negative Werte zulassen und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b` Achse im Oklab Farbraum, welche definiert, wie blau (richtung `-0.4`) oder gelb (richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte sowohl positive als auch negative Werte zulassen und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der `±0.4` (`±100%`) Grenzen festlegen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition von Relativen Farb-Ausgabekanalkomponenten

Beim Verwenden der relativen Farbsyntax innerhalb einer `oklab()` Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklab Farbe (falls diese nicht bereits als solche spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot Achse), und `b` (blau/gelb Achse) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um sie bei der Definition der Ausgabefarbkanalwerte zu verwenden:

- Der `l` Kanalwert wird zu einem `<number>` zwischen `0` und `1` aufgelöst, inklusive.
- Die `a` und `b` Kanäle werden jeweils zu einem `<number>` zwischen `-0.4` und `0.4` aufgelöst, inklusive.
- Der `alpha` Kanal wird zu einem `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Wenn Sie eine relative Farbe definieren, können die verschiedenen Kanäle der Ausgabefarbe in mehreren verschiedenen Weisen ausgedrückt werden. Unten werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Jedoch gibt das erste Beispiel dieselbe Farbe aus wie die Ursprungsfarbe und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen keine wirklichen relativen Farben! Sie würden diese in einer echten Codebasis wahrscheinlich nie verwenden und wahrscheinlich nur einen absoluten Farbwert stattdessen verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `oklab()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `a` und `b` Kanalwerte der Ursprungsfarbe (`0.627966`, `0.22488`, und `0.125859`) als Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere, nicht auf der Ursprungsfarbe basierende Farbe aus:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In dem obigen Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()` Ursprungsfarbe in eine äquivalente `oklab()` Farbe — `oklab(0.627966 0.22488 0.125859)`.
- Setzt die `L` und `b` Kanalwerte der Ausgabefarbe auf diejenigen der äquivalenten `oklab()` Ursprungsfarbwerte — diese Werte sind `0.627966` und `0.125859`, jeweils.
- Setzt den `a` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht durch die Ursprungsfarbe bestimmt ist: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, um sie in einer Weise darzustellen, die kompatibel ist (d. h. die dieselben Kanäle verwendet).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alphakanäle für weder die Ursprungs- noch die Ausgabefarben explizit spezifiziert. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem Alphakanalwert der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es keine relative Farbe ist), beträgt er standardmäßig `1`. Daher betragen die Alphakanalwerte der Ursprungs- und Ausgabefarben `1` für die obigen Beispiele.

Sehen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarbkanalwerte festlegen. Das erste Beispiel gibt den Alphakanalwert der Ausgabefarbe als den gleichen wie den Alphakanalwert der Ursprungsfarbe an, während das zweite Beispiel einen anderen Alphakanalwert angibt, der in keiner Verbindung mit dem Alphakanalwert der Ursprungsfarbe steht.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in das äquivalente `oklab()` umgewandelt — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}} Berechnungen werden auf die `L`, `a`, `b`, und `A` Werte angewendet, was zu einer Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` führt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>` Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen akzeptieren würde. Einen `<percentage>` zu einem `<number>` hinzuzufügen, funktioniert zum Beispiel nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Wirkung der Variation der Helligkeits-, a-Achsen- und b-Achsenwerte der `oklab()` Funktion.

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

Das folgende Beispiel zeigt die Wirkung der Variation des `A` (Alpha) Wertes der `oklab()` Funktion. Die `red` und `red-alpha` Elemente überlappen das `#background-div` Element, um die Wirkung der Opazität zu demonstrieren. Das `red-alpha` Element mit einer Opazität von `0.4` erscheint durchsichtiger als das `red` Element.

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

Dieses Beispiel demonstriert die Auswirkungen der Einstellung der `a` und `b` Werte der `oklab()` Funktion auf die Enden und Mittelpunkte der a-Achse und b-Achse. Die a-Achse reicht von grün (`-0.4`) bis rot (`0.4`) und die b-Achse reicht von gelb (`-0.4`) bis blau (`0.4`).

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

Unter Verwendung der CSS {{cssxref("background-color")}} Eigenschaft variieren wir die `a` und `b` Werte der `oklab()` Farb- funktion entlang der a-Achse und b-Achse, um die Auswirkungen der maximalen, mittleren und minimalen Werte in jedem Fall zu zeigen.

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
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="redzero"] {
  background-color: oklab(0.5 0.4 0);
}
[data-color="redblue"] {
  background-color: oklab(0.5 0.4 -0.4);
}

/* a-axis center, variable b-axis */
[data-color="zeroyellow"] {
  background-color: oklab(0.5 0 0.4);
}
[data-color="zerozero"] {
  background-color: oklab(0.5 0 0);
}
[data-color="zeroblue"] {
  background-color: oklab(0.5 0 -0.4);
}

/* a-axis min, variable b-axis */
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

Die linke Spalte liegt am gelben Ende (`-0.4`) der b-Achse und die rechte Spalte liegt am blauen Ende (`0.4`). Die obere Reihe zeigt Farben am roten Ende der a-Achse (`-0.4`) und die untere Reihe liegt am grünen Ende (`0.4`). Die mittlere Spalte und Reihe liegen an den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält weder rot, grün, gelb noch blau, mit einem `0` Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Entwicklung der Werte der `oklab()` Funktion entlang der a-Achse (von rot nach grün) und entlang der b-Achse (von gelb nach blau) zu demonstrieren. In jedem Verlauf bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten fortschreitet.

```html hidden
<div data-color="redtogreen-yellow">
  <span>red</span><span>`b`= -0.4 (yellow)</span><span>green</span>
</div>
<div data-color="redtogreen-zero">
  <span>red</span><span>no yellow or blue</span><span>green</span>
</div>
<div data-color="redtogreen-blue">
  <span>red</span><span>`b`= 0.4 (blue)</span><span>green</span>
</div>

<div data-color="yellowtoblue-red">
  <span>yellow</span><span>`a` = -0.4 (red)</span><span>blue</span>
</div>
<div data-color="yellowtoblue-zero">
  <span>yellow</span><span>no red or green</span><span>blue</span>
</div>
<div data-color="yellowtoblue-green">
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
[data-color="redtogreen-yellow"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% -0.4 0.4));
}
[data-color="redtogreen-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0), oklab(50% -0.4 0));
}
[data-color="redtogreen-blue"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 -0.4), oklab(50% -0.4 -0.4));
}

/* b-axis gradients */
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

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten aufgehellte bzw. abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mithilfe relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklab()` Funktion überführt, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat `0.15` (15%) zur Helligkeit addiert, und die abgedunkelte Farbe hat `0.15` (15%) von der Helligkeit subtrahiert.

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

Das Ergebnis lautet wie folgt:

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbnotationen
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farbfuntionen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Ein wahrnehmungsbasierter Farbraum für Bildbearbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB-Farbrad](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
