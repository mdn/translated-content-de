---
title: CSS-Funktion `oklab()`
short-title: oklab()
slug: Web/CSS/Reference/Values/color_value/oklab
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die funktionale Schreibweise **`oklab()`** beschreibt eine Farbe im Oklab-{{Glossary("color_space", "Farbraum")}}, der nachbilden soll, wie das menschliche Auge Farben wahrnimmt.

Oklab ist ein wahrnehmungsbasierter Farbraum und eignet sich dazu:

- Ein Bild in Graustufen umzuwandeln, ohne seine wahrgenommene Helligkeit zu verändern.
- Die Sättigung von Farben zu ändern, während Farbton und wahrgenommene Helligkeit für Betrachter gleich bleiben.
- Gleichmäßige, weiche Farbverläufe zu erzeugen, beispielsweise bei manueller Interpolation in einem {{HTMLElement("canvas")}}-Element.

`oklab()` verwendet ein kartesisches Koordinatensystem mit einer a- und einer b-Achse. Es kann einen größeren Farbbereich als RGB darstellen, einschließlich Wide-Gamut- und P3-Farben. Wenn Sie ein polares Farbsystem mit Chroma und Farbton verwenden möchten, nutzen Sie {{cssxref("color_value/oklch", "oklch()")}}.

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

Im Folgenden werden die zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) beschrieben.

#### Syntax für absolute Werte

```plain
oklab(L a b[ / A])
```

Die Parameter sind:

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (Schwarz) und die Zahl `1` entspricht `100%` (Weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Farbe entlang der `a`-Achse im Oklab-Farbraum an. Er bestimmt, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte ein Vorzeichen haben können und theoretisch unbegrenzt sind. Sie können also Werte außerhalb der Grenzen von `±0.4` (`±100%`) angeben. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Farbe entlang der `b`-Achse im Oklab-Farbraum an. Er bestimmt, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte ein Vorzeichen haben können und theoretisch unbegrenzt sind. Sie können also Werte außerhalb der Grenzen von `±0.4` (`±100%`) angeben. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alphakanals der Farbe angibt. Dabei entspricht die Zahl `0` dem Wert `0%` (vollständig transparent) und die Zahl `1` dem Wert `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alphakanal vorhanden ist. Wird der Wert des `A`-Kanals nicht ausdrücklich angegeben, beträgt er standardmäßig 100 %. Falls er angegeben wird, steht vor dem Wert ein Schrägstrich (`/`).

> [!NOTE]
> Weitere Informationen zur Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Syntax für relative Werte

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind:

- `from <color>`
  - : Beim Definieren einer relativen Farbe steht immer das Schlüsselwort `from`, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert für die **Ausgangsfarbe**. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ausgangsfarbe kann in _jeder_ gültigen {{cssxref("&lt;color&gt;")}}-Syntax angegeben werden, auch als weitere relative Farbe.
- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Helligkeit der Ausgabefarbe an. Die Zahl `0` entspricht `0%` (Schwarz) und die Zahl `1` entspricht `100%` (Weiß).
- `a`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum an. Er bestimmt, wie grün (in Richtung `-0.4`) oder rot (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte ein Vorzeichen haben können und theoretisch unbegrenzt sind. Sie können also Werte außerhalb der Grenzen von `±0.4` (`±100%`) angeben. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `b`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert gibt die Position der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum an. Er bestimmt, wie blau (in Richtung `-0.4`) oder gelb (in Richtung `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte ein Vorzeichen haben können und theoretisch unbegrenzt sind. Sie können also Werte außerhalb der Grenzen von `±0.4` (`±100%`) angeben. In der Praxis können die Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alphakanals der Ausgabefarbe angibt. Dabei entspricht die Zahl `0` dem Wert `0%` (vollständig transparent) und die Zahl `1` dem Wert `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alphakanal vorhanden ist. Wird der Wert des `A`-Kanals nicht ausdrücklich angegeben, übernimmt er den Wert des Alphakanals der Ausgangsfarbe. Falls er angegeben wird, steht vor dem Wert ein Schrägstrich (`/`).

#### Kanalwerte der Ausgabefarbe bei relativen Farben definieren

Wenn Sie innerhalb einer `oklab()`-Funktion die Syntax für relative Farben verwenden, wandelt der Browser die Ausgangsfarbe in eine entsprechende Oklab-Farbe um, sofern sie nicht bereits als solche angegeben ist. Die Farbe wird durch drei getrennte Farbkanalwerte beschrieben — `l` (Helligkeit), `a` (Grün-Rot-Achse) und `b` (Blau-Gelb-Achse) — sowie durch einen Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Kanalwerte der Ausgabefarbe zu definieren:

- Der Wert des `l`-Kanals wird als `<number>` zwischen einschließlich `0` und `1` aufgelöst.
- Die Werte der Kanäle `a` und `b` werden jeweils als `<number>` zwischen einschließlich `-0.4` und `0.4` aufgelöst.
- Der Wert des `alpha`-Kanals wird als `<number>` zwischen einschließlich `0` und `1` aufgelöst.

Beim Definieren einer relativen Farbe können die einzelnen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Die folgenden Beispiele veranschaulichen dies.

In den ersten beiden Beispielen wird die Syntax für relative Farben verwendet. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ausgangsfarbe aus, während das zweite eine Farbe ausgibt, die überhaupt nicht auf der Ausgangsfarbe basiert. Tatsächlich erzeugen sie also keine relativen Farben! In einem echten Projekt würden Sie diese Formen wahrscheinlich nicht verwenden, sondern stattdessen einen absoluten Farbwert angeben. Die Beispiele dienen als Einstieg in die Syntax relativer Farben mit `oklab()`.

Beginnen wir mit der Ausgangsfarbe `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ausgangsfarbe aus: Sie verwendet deren Kanalwerte `l`, `a` und `b` (`0.627966`, `0.22488` und `0.125859`) als Werte für die Ausgabekanäle:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabefarbe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe. Dadurch entsteht eine völlig andere Farbe, die nicht auf der Ausgangsfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erzeugt eine relative Farbe auf Basis der Ausgangsfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Wandelt die `hsl()`-Ausgangsfarbe in die entsprechende `oklab()`-Farbe um: `oklab(0.627966 0.22488 0.125859)`.
- Übernimmt für die Kanäle `L` und `b` der Ausgabefarbe die entsprechenden Kanalwerte der umgewandelten Ausgangsfarbe: `0.627966` beziehungsweise `0.125859`.
- Setzt den Wert des `a`-Kanals der Ausgabefarbe auf einen neuen Wert, der nicht von der Ausgangsfarbe abhängt: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ausgangsfarbe im Hintergrund in dasselbe Farbmodell wie die Ausgabefarbe umgewandelt, wenn beide unterschiedliche Farbmodelle verwenden. So kann die Ausgangsfarbe in einer kompatiblen Form, also mit denselben Kanälen, dargestellt werden.

In den bisherigen Beispielen dieses Abschnitts wurden die Alphakanäle weder für die Ausgangs- noch für die Ausgabefarben ausdrücklich angegeben. Wird der Alphakanal der Ausgabefarbe nicht angegeben, übernimmt er den Wert des Alphakanals der Ausgangsfarbe. Wird der Alphakanal der Ausgangsfarbe nicht angegeben und handelt es sich nicht um eine relative Farbe, ist sein Standardwert `1`. Daher haben die Alphakanäle der Ausgangs- und Ausgabefarben in den obigen Beispielen jeweils den Wert `1`.

Sehen wir uns nun Beispiele an, in denen Werte für die Alphakanäle der Ausgangs- und Ausgabefarbe angegeben werden. Im ersten Beispiel erhält der Alphakanal der Ausgabefarbe denselben Wert wie der der Ausgangsfarbe. Im zweiten Beispiel erhält er einen anderen Wert, der nicht vom Alphakanal der Ausgangsfarbe abhängt.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ausgangsfarbe erneut in die entsprechende `oklab()`-Farbe umgewandelt: `oklab(0.627966 0.22488 0.125859)`. Auf die Werte `L`, `a`, `b` und `A` werden Berechnungen mit {{cssxref("calc")}} angewendet. Daraus ergibt sich die Ausgabefarbe `oklab(0.827966 0.14488 -0.0741406 / 0.9)`:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanalwerte der Ausgangsfarbe als `<number>`-Werte aufgelöst werden, müssen Sie bei Berechnungen Zahlen zu ihnen addieren. Das gilt auch dann, wenn ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Beispielsweise funktioniert es nicht, einen `<percentage>`-Wert zu einem `<number>`-Wert zu addieren.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Helligkeit anpassen

Das folgende Beispiel zeigt, wie sich unterschiedliche Werte für Helligkeit sowie für die a- und b-Achse auf die `oklab()`-Funktion auswirken.

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

{{EmbedLiveSample("adjusting_lightness", "", "200")}}

### Deckkraft anpassen

Das folgende Beispiel zeigt, wie sich unterschiedliche Werte für `A` (Alpha) auf die `oklab()`-Funktion auswirken.
Die Elemente `red` und `red-alpha` überlagern das Element `#background-div`, um die Wirkung der Deckkraft zu veranschaulichen.
Wenn dem Element `red-alpha` eine Deckkraft von `0.4` zugewiesen wird, erscheint es transparenter als das Element `red`.

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

### Farbachsen anpassen

Dieses Beispiel zeigt, wie sich die Werte `a` und `b` der `oklab()`-Funktion an den Enden und Mittelpunkten der a- beziehungsweise b-Achse auswirken. Die a-Achse verläuft von Grün (`-0.4`) nach Rot (`0.4`) und die b-Achse von Gelb (`-0.4`) nach Blau (`0.4`).

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

Mit der CSS-Eigenschaft {{cssxref("background-color")}} variieren wir die Werte `a` und `b` der Farbfunktion `oklab()` entlang der a- und b-Achse. So werden jeweils die Auswirkungen von Maximal-, Mittel- und Minimalwerten sichtbar.

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

Die linke Spalte liegt am gelben Ende (`-0.4`) der b-Achse, die rechte Spalte am blauen Ende (`0.4`). Die obere Zeile zeigt Farben am roten Ende der a-Achse (`-0.4`), die untere Zeile Farben am grünen Ende (`0.4`). Die mittlere Spalte und die mittlere Zeile liegen an den Mittelpunkten der jeweiligen Achsen. Die Zelle in der Mitte ist grau: Da beide Achsen den Wert `0` haben, enthält sie weder Rot, Grün, Gelb noch Blau.

### Lineare Farbverläufe entlang der a- und b-Achse

Dieses Beispiel verwendet lineare Farbverläufe, um die Entwicklung der Werte der `oklab()`-Funktion entlang der a-Achse (von Rot nach Grün) und der b-Achse (von Gelb nach Blau) zu zeigen. In jedem Farbverlauf bleibt eine Achse unverändert, während die Werte der anderen Achse von niedrig nach hoch ansteigen.

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

### Relative Farben mit oklab() verwenden

In diesem Beispiel erhalten drei {{htmlelement("div")}}-Elemente unterschiedliche Hintergrundfarben. Das mittlere Element erhält die unveränderte `--base-color`, während die Elemente links und rechts aufgehellte beziehungsweise abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mithilfe relativer Farben definiert: Die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird an eine `oklab()`-Funktion übergeben. Bei den Ausgabefarben wird der Helligkeitskanal mit einer `calc()`-Funktion verändert, um den gewünschten Effekt zu erzielen. Für die aufgehellte Farbe wird `0.15` (15 %) zum Helligkeitskanal addiert, für die abgedunkelte Farbe wird `0.15` (15 %) davon subtrahiert.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [Datentyp `<color>`](/de/docs/Web/CSS/Reference/Values/color_value) mit einer Liste aller Farbschreibweisen
- Die Farbfunktionen {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}}
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- Das Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [Ein wahrnehmungsbasierter Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB-Farbkreis](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
