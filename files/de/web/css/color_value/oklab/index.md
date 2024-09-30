---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die funktionale Notation **`oklab()`** drückt eine gegebene Farbe im Oklab-[Farbraum](/de/docs/Glossary/color_space) aus, der versucht nachzuahmen, wie Farbe vom menschlichen Auge wahrgenommen wird.

Oklab ist ein perzeptueller Farbraum und ist nützlich für:

- Die Umwandlung eines Bildes in Graustufen ohne Änderung der Helligkeit.
- Das Modifizieren der Sättigung von Farben, während die Farbton- und Helligkeitswahrnehmung des Nutzers beibehalten wird.
- Das Erstellen von weichen und gleichmäßigen Farbverläufen (wenn manuell interpoliert, zum Beispiel in einem {{HTMLElement("canvas")}}-Element).

`oklab()` arbeitet mit einem kartesischen Koordinatensystem im Oklab-Farbraum — A- und B-Achsen. Es kann ein größeres Farbspektrum als RGB darstellen, einschließlich Wide-Gamut- und P3-Farben. Wenn Sie ein polares Farbsystem, Chroma und Farbton wünschen, verwenden Sie {{cssxref("color_value/oklch", "oklch()")}}.

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

Im Folgenden sind Beschreibungen der zulässigen Werte für sowohl absolute als auch [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
oklab(L a b[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die wahrgenommene Helligkeit der Farbe an. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `a`-Achse im Oklab-Farbraum an, die definiert, wie grün (bewegend zu `-0.4`) oder rot (bewegend zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±0.4` (±100%) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert gibt die Entfernung der Farbe entlang der `b`-Achse im Oklab-Farbraum an, die angibt, wie blau (bewegend zu `-0.4`) oder gelb (bewegend zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±0.4` (±100%) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal festzulegen. Falls der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Falls inkludiert, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Auswirkungen von `none`.

#### Relative Wertsyntax

```plain
oklab(from <color> L a b[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Ausgabefarbe. Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).
- `a`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `a`-Achse im Oklab-Farbraum, die definiert, wie grün (bewegend zu `-0.4`) oder rot (bewegend zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±0.4` (±100%) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `b`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `-0.4` und `0.4`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `-100%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Entfernung der Ausgabefarbe entlang der `b`-Achse im Oklab-Farbraum, die definiert, wie blau (bewegend zu `-0.4`) oder gelb (bewegend zu `+0.4`) die Farbe ist. Beachten Sie, dass diese Werte Vorzeichen haben (sowohl positive als auch negative Werte sind zulässig) und theoretisch unbegrenzt sind, was bedeutet, dass Sie Werte außerhalb der Grenzen von `±0.4` (±100%) einstellen können. In der Praxis können Werte `±0.5` nicht überschreiten.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal festzulegen. Falls der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf den Alphakanalwert der Ursprungfarbe gesetzt. Falls inkludiert, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition relativer Farb-Ausgabekanal-Komponenten

Wenn relative Farbsyntax innerhalb einer `oklab()`-Funktion verwendet wird, konvertiert der Browser die Ursprungfarbe in eine äquivalente Oklab-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `a` (grün/rot Achse) und `b` (blau/gelb Achse) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabekanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.
- Die `a`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `-0.4` und `0.4` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere unterschiedliche Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungfarbe basiert. Sie erstellen wirklich keine relativen Farben! Sie würden diese in einem echten Code nicht wirklich verwenden und wahrscheinlich eher einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `oklab()`-Syntax eingefügt.

Beginnen wir mit einer Ursprungfarbe von `hsl(0 100% 50%)` (entspricht `red`/rot). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungfarbe aus — sie verwendet die `l`, `a` und `b` Kanalwerte der Ursprungfarbe (`0.627966`, `0.22488` und `0.125859`) als die Ausgabekanalwerte:

```css
oklab(from hsl(0 100% 50%) l a b)
```

Die Ausgabe dieser Funktion ist `oklab(0.627966 0.22488 0.125859)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte, wodurch eine völlig andere Farbe entsteht, die nicht auf der Ursprungfarbe basiert:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

In diesem Fall ist die Ausgabefarbe `oklab(0.421 0.165 -0.101)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungfarbe:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ursprungfarbe in eine äquivalente `oklab()`-Farbe — `oklab(0.627966 0.22488 0.125859)`.
- Setzt die `L`- und `b`-Kanalwerte der Ausgabefarbe auf die der äquivalenten `oklab()`-Werte der Ursprungfarbe — diese Werte sind `0.627966` und `0.125859`.
- Setzt den `a`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungfarbe basiert: `-0.3`.

Die endgültige Ausgabefarbe ist `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungfarbe verwendet, wird die Ursprungfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d. h. unter Verwendung derselben Kanäle).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alphakanäle weder für die Urspungsfarben noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, wird davon ausgegangen, dass er denselben Wert wie der Alphakanal der ursprünglichen Farbe hat. Wenn der Alphakanal der ursprünglichen Farbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird `1` als Standardwert angenommen. Daher haben die Alphakanalwerte für die oben angegebenen Beispiele den Wert `1`.

Sehen wir uns einige Beispiele an, die die Alphakanalwerte für Ursprung und Ausgabe angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabe als gleich dem der Ursprung an, während das zweite einen anderen, nicht mit dem Ursprung verbundenen, Alphakanalwert der Ausgabe angibt.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungfarbe erneut in die `oklab()`-Äquivalente konvertiert — `oklab(0.627966 0.22488 0.125859)`. {{cssxref("calc")}} Berechnungen werden auf die `L`-, `a`-, `b`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklab(0.827966 0.14488 -0.0741406 / 0.9)` führt:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanalwerte der Ursprungfarbe auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen in Berechnungen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen von einem `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit

Das folgende Beispiel zeigt die Auswirkungen der Variierung der Werte für Helligkeit, A-Achse und B-Achse der `oklab()`-Funktion.

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

Das folgende Beispiel zeigt die Auswirkungen der Variierung des `A` (Alpha)-Werts der `oklab()`-Funktion. Die `red`- und `red-alpha`-Elemente überlappen sich mit dem `#background-div`-Element, um den Effekt der Opazität darzustellen. Einem `red-alpha`-Element eine Opazität von `0.4` zu geben, macht es transparenter als das `red`-Element.

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

Dieses Beispiel demonstriert die Effekte der Einstellung der `a`- und `b`-Werte der `oklab()`-Funktion zu den Enden und Mittelpunkten der A-Achse und B-Achse. Die A-Achse geht von grün (`-0.4`) zu rot (`0.4`) und die B-Achse geht von gelb (`-0.4`) zu blau (`0.4`).

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

Mit der CSS-{{cssxref("background-color")}}-Eigenschaft variieren wir die `a`- und `b`-Werte der `oklab()`-Farbfunktion entlang der A-Achse und B-Achse und zeigen die Auswirkungen von maximalen, mittleren und minimalen Werten in jedem Fall.

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

Die linke Spalte ist am gelben Ende (`-0.4`) der B-Achse und die rechte Spalte ist am blauen Ende (`0.4`). Die obere Reihe zeigt die Farben am roten Ende der A-Achse (`-0.4`) und die untere Reihe ist am grünen Ende (`0.4`). Die mittlere Spalte und Reihe befinden sich an den Mittelpunkten der jeweiligen Achsen, wobei die mittlere Zelle grau ist; sie enthält kein Rot, Grün, Gelb oder Blau, mit einem `0`-Wert für beide Achsen.

### Lineare Verläufe entlang der A- und B-Achse

Dieses Beispiel beinhaltet lineare Verläufe zur Demonstration des Werteverlaufs der `oklab()`-Funktion entlang der A-Achse (von rot nach grün) und entlang der B-Achse (von gelb nach blau). In jedem Verlaufsbild bleibt eine Achse statisch, während die andere Achse sich von niedrigen zu hohen Werten bewegt.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` gegeben, während den linken und rechten jeweils aufgehellte und abgedunkelte Varianten dieser `--base-color` zugewiesen werden.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color`- [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in einer `oklab()`-Funktion eingegeben und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat `0.15` (15%) zur Helligkeit addiert, und die abgedunkelte Farbe hat `0.15` (15%) von der Helligkeit subtrahiert.

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

- Der [`<color>` Datentyp](/de/docs/Web/CSS/color_value) für eine Liste aller Farbdarstellungen
- {{cssxref("color_value/lab","lab()")}} und {{cssxref("color_value/oklch","oklch()")}} Farb Funktionen
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Ein perzeptueller Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) auf bottosson.github.io (2023)
- [OKLAB Farbrad](https://observablehq.com/@shan/oklab-color-wheel) auf observablehq.com
