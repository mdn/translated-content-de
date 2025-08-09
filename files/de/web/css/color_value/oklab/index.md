---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`oklab()`** funktionale Notation drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus, der versucht, nachzuahmen, wie Farbe vom menschlichen Auge wahrgenommen wird.

Oklab ist ein perzeptueller Farbraum und nützlich, um:

- Ein Bild in Graustufen umzuwandeln, ohne seine Helligkeit zu ändern.
- Die Sättigung von Farben zu verändern, während die Wahrnehmung des Farbtons und der Helligkeit durch den Benutzer beibehalten wird.
- Glatte und einheitliche Farbverläufe (z.B. bei manueller Interpolation, etwa in einem {{HTMLElement("canvas")}}-Element) zu erstellen.

`oklab()` funktioniert mit einem kartesischen Koordinatensystem im Oklab-Farbraum – a- und b-Achsen. Es kann ein breiteres Farbspektrum als RGB darstellen, einschließlich Wide-Gamut- und P3-Farben. Wenn Sie ein polares Farbsystem wie Chroma und Farbton wünschen, verwenden Sie {{cssxref("color_value/oklch", "oklch()")}}.

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

Nachfolgend sind Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) angegeben.

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt an, wie hell die Farbe wahrgenommen wird. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt an, wie weit die Farbe entlang der `a`-Achse im Oklab-Farbraum entfernt ist, was definiert, wie grün (Richtung `-0.4`) oder rot (Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulässig) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der Begrenzungen von `±0.4` (`±100%`) festlegen können. In der Praxis können die Werte jedoch `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt an, wie weit die Farbe entlang der `b`-Achse im Oklab-Farbraum entfernt ist, was definiert, wie blau (Richtung `-0.4`) oder gelb (Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulässig) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der Begrenzungen von `±0.4` (`±100%`) festlegen können. In der Praxis können die Werte jedoch `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Farbe darstellt, wobei `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Das Schlüsselwort `none` kann zusätzlich verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Wert des Kanals nicht explizit angegeben wird, ist er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die ursprüngliche Farbe kann eine beliebige gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt die Helligkeit der Ausgabefarbe dar. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt den Abstand der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum dar, was definiert, wie grün (Richtung `-0.4`) oder rot (Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulässig) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der Begrenzungen von `±0.4` (`±100%`) festlegen können. In der Praxis können die Werte jedoch `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt den Abstand der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum dar, was definiert, wie blau (Richtung `-0.4`) oder gelb (Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte zulässig) und theoretisch unbeschränkt sind, was bedeutet, dass Sie Werte außerhalb der Begrenzungen von `±0.4` (`±100%`) festlegen können. In der Praxis können die Werte jedoch `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Das Schlüsselwort `none` kann zusätzlich verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Wert des Kanals nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der ursprünglichen Farbe. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definieren von relativen Farbkanalkomponenten

Wenn Sie die relative Farbsyntax innerhalb einer `oklab()`-Funktion verwenden, wandelt der Browser die ursprüngliche Farbe in eine äquivalente Oklab-Farbe um (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot-Achse) und `b` (blau/gelb-Achse) — plus einem Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird zu einer `<number>` zwischen `0` und `1` aufgelöst, einschließlich.
- Die `a`- und `b`-Kanäle werden jeweils zu `<number>` zwischen `-0,4` und `0,4` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird zu einer `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden einige Beispiele betrachtet, um diese zu veranschaulichen.

In den ersten beiden der nachstehenden Beispiele verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die ursprüngliche Farbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der ursprünglichen Farbe basiert. Sie erzeugen wirklich keine relativen Farben! Sie würden diese in einem echten Code wahrscheinlich niemals verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `oklab()`-Syntax hinzugefügt.

Beginnen wir mit einer ursprünglichen Farbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt die gleiche Farbe wie die ursprüngliche Farbe aus — sie verwendet die `l`-, `a`- und `b`-Kanalwerte (`0.627966`, `0.22488` und `0.125859`) der ursprünglichen Farbe als Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabefarbe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der ursprünglichen Farbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erzeugt eine relative Farbe auf Basis der ursprünglichen Farbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Wandelt die `hsl()`-ursprüngliche Farbe in eine äquivalente `oklab()`-Farbe um — `oklab(0.627966 0.22488 0.125859)`.
- Setzt die `L`- und `b`-Kanalwerte für die Ausgabefarbe auf die des ursprünglichen `oklab()`-Äquivalents `L`- und `b`-Kanalwerte — diese Werte sind jeweils `0.627966` und `0.125859`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der ursprünglichen Farbe basiert: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wird die ursprüngliche Farbe in den gleichen Modus wie die Ausgabefarbe umgewandelt, wenn die Ausgabefarbe ein anderes Farbmodell als die ursprüngliche Farbe verwendet, um es kompatibel darzustellen (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt betrachteten Beispielen wurden die Alphakanäle weder für die ursprünglichen noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem gleichen Wert wie der Alphakanal der ursprünglichen Farbe. Wenn der Alphakanal der ursprünglichen Farbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist er standardmäßig `1`. Daher haben die ursprünglichen und Ausgabefarbe-Alphakanalwerte in den obigen Beispielen den Wert `1`.

Lassen Sie uns einige Beispiele betrachten, die ursprüngliche und Ausgabefarbe-Alphakanalwerte angeben. Das erste gibt den Ausgabefarbe-Alphakanalwert an, der dem Alphakanalwert der ursprünglichen Farbe entspricht, während das zweite einen anderen Ausgabefarbe-Alphakanalwert angibt, der in keiner Beziehung zum ursprünglichen Alphakanalwert steht.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-ursprüngliche Farbe wieder in die `oklab()`-Äquivalente umgewandelt — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`, `a`, `b` und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` führt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die ursprünglichen Farbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Das Hinzufügen von `<percentage>` zu `<number>`, beispielsweise, funktioniert nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Wirkung der Variation von Helligkeit, a-Achsen- und b-Achsen-Werten der `oklab()`-Funktion.

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

Das folgende Beispiel zeigt die Wirkung der Variation des `A` (Alpha)-Werts der `oklab()`-Funktion. Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um die Wirkung der Deckkraft zu demonstrieren. Durch das Geben der `red-alpha`-Elemente wird eine Deckkraft von `0.4` angewendet, wodurch es transparenter erscheint als das `red`-Element.

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

Dieses Beispiel zeigt die Auswirkungen des Setzens der `a`- und `b`-Werte der `oklab()`-Funktion auf die Enden und Mittelpunkte der a-Achse und der b-Achse. Die a-Achse reicht von grün (`-0.4`) bis rot (`0.4`) und die b-Achse reicht von gelb (`-0.4`) bis blau (`0.4`).

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

Mit der CSS-Eigenschaft {{cssxref("background-color")}} variieren wir die `a`- und `b`-Werte der `oklab()`-Funktionen entlang der a-Achse und der b-Achse, um die Auswirkungen von maximalen, mittleren und minimalen Werten in jedem Fall zu zeigen.

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

Die linke Spalte befindet sich am gelben Ende (`-0.4`) der b-Achse und die rechte Spalte am blauen Ende (`0.4`). Die obere Zeile zeigt Farben am roten Ende der a-Achse (`-0.4`) und die untere Zeile befindet sich am grünen Ende (`0.4`). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten jeder Achse, wobei die mittlere Zelle grau ist; sie enthält weder Rot, Grün, Gelb noch Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der a-Achse und b-Achse

Dieses Beispiel enthält lineare Verläufe, um die Progression der Werte der `oklab()`-Funktion entlang der a-Achse (von rot bis grün) und entlang der b-Achse (von gelb bis blau) zu demonstrieren. In jedem Verlauf bleibt eine Achse statisch, während die andere Achse von niedrigen zu hohen Werten fortschreitet.

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

### Verwenden relativer Farben mit oklab()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linke und rechte Variante aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklab()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat `0.15` (15%) zum Helligkeitskanal hinzugefügt und die abgedunkelte Farbe hat `0.15` (15%) vom Helligkeitskanal subtrahiert.

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

- Der [`<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbangaben
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farb-Funktionen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Ein perzeptueller Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB Farbrad](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
