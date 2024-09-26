---
title: lch()
slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`lch()`**-Funktionsnotation drückt eine gegebene Farbe im LCH-{{glossary("color space","Farbraum")}} aus, der Helligkeit, Chroma und Farbton darstellt. Sie verwendet dieselbe `L`-Achse wie die {{cssxref("color_value/lab","lab()")}}-Funktion des [CIELab-Farbraums](/de/docs/Glossary/Color_space#cielab_color_spaces), nutzt jedoch die Polarkoordinaten `C` (Chroma) und `H` (Farbton).

## Syntax

```css
/* Absolute Werte */
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);

/* Relative Werte */
lch(from green l c h / 0.5)
lch(from #0000FF calc(l + 10) c h)
lch(from hsl(180 100% 50%) calc(l - 10) c h)
lch(from var(--aColorValue) l c h / calc(alpha - 0.1))
```

### Werte

Nachstehend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Normalerweise, wenn Prozentwerte in CSS ein numerisches Äquivalent haben, entspricht `100%` der Zahl `1`.
> Dies ist bei `lch()` nicht der Fall. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Syntax für absolute Werte

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (Schwarz), und die Zahl `100` entspricht `100%` (Weiß). Dieser Wert gibt die Helligkeit der Farbe im [CIELab-Farbraum](/de/docs/Glossary/Color_space#cielab_color_spaces) an.

    > [!NOTE]
    > Das `L` in `lch()` bezieht sich auf die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir mit unseren Augen wahrnehmen. Dies unterscheidet sich vom `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert ist ein Maß für die Chroma der Farbe (ungefähr das "Ausmaß der Farbe"). Sein minimal nützlicher Wert ist `0%` oder `0`, während sein Maximum theoretisch unbegrenzt ist (aber in der Praxis nicht `230` überschreitet), wobei `100%` `150` entspricht.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farben entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von `lch()`) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Siehe das untenstehende Beispiel [Farbtöne in LCH](#farbtöne_in_lch) und die {{CSSXref("&lt;hue&gt;")}} Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt der Standardwert 100%. Bei vorhandener Spezifikation wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Syntax für relative Werte

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (Schwarz), und die Zahl `100` entspricht `100%` (Weiß). Dieser Wert gibt die Helligkeit der Farbe im CIELab-Farbraum an.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt den Chroma-Wert der Ausgangsfarbe dar (ungefähr das "Ausmaß der Farbe"). Sein minimal nützlicher Wert ist `0%` oder `0`, während sein Maximum theoretisch unbegrenzt ist (aber in der Praxis nicht `230` überschreitet), wobei `100%` `150` entspricht.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgangsfarbe darstellt. Siehe das untenstehende [Farbtöne-Beispiel](#result_3).

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanalwert der Ausgangsfarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanalwert der Ursprungsfarbe. Bei vorhandener Spezifikation wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

#### Definition von relativen Farb-Ausgabekanal-Komponenten

Bei der Verwendung der relativen Farbsyntax innerhalb einer `lch()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Lch-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — plus einem Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird auf einen `<number>` zwischen `0` und `150` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Nachfolgend werden wir einige Beispiele betrachten, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen tatsächlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `lch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `c` und `h`-Kanalwerte der Ursprungsfarbe (`54.29`, `106.854` und `40.856`) als Ausgabekanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist `lch(54.29 106.854 40.856)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

In diesem Fall ist die Ausgabefarbe `lch(29.6871 66.83 327.109)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ursprungsfarbe in eine äquivalente `lch()`-Farbe — `lch(54.29 106.854 40.856)`.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert des äquivalenten `lch()`-Ursprungswertes — `40.856`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `70` und `150` entsprechend.

Die endgültige Ausgabefarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. dieselben Kanäle verwendet).

In den bisher in diesem Abschnitt betrachteten Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, entspricht er standardmäßig demselben Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt der Standardwert `1`. Daher sind die Alpha-Kanalwerte der Ursprungs- und Ausgabefarbe `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Alpha-Kanalwerte für die Ursprungs- und Ausgabefarbe angeben. Das erste Beispiel gibt den Alpha-Kanalwert der Ausgabefarbe als identisch mit dem der Ursprungsfarbe an, während das zweite Beispiel einen anderen Alpha-Kanalwert für die Ausgabefarbe angibt, der nicht mit dem Alpha-Kanalwert der Ursprungsfarbe verbunden ist.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Berechnete Ausgabe-Farbe: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Berechnete Ausgabe-Farbe: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das `lch()`-Äquivalent konvertiert — `lch(54.29 106.854 40.856)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lch(74.29 86.8541 0.856018 / 0.9)` führt:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie diesen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einer `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung des Variierens des `L`- (Helligkeits-) Wertes der `lch()`-Funktionsnotation.

#### HTML

```html
<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>
```

#### CSS

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue-dark"] {
  background-color: lch(10% 100 240);
}
[data-color="blue"] {
  background-color: lch(50% 100 240);
}
[data-color="blue-light"] {
  background-color: lch(90% 100 240);
}

[data-color="red-dark"] {
  background-color: lch(10% 130 20);
}
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-light"] {
  background-color: lch(90% 130 20);
}

[data-color="green-dark"] {
  background-color: lch(10% 132 130);
}
[data-color="green"] {
  background-color: lch(50% 132 130);
}
[data-color="green-light"] {
  background-color: lch(90% 132 130);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting the brightness of a color", "", "200")}}

### Anpassen der Farbintensität über Chroma

Das folgende Beispiel zeigt die Wirkung des Variierens des `C`- (Chroma-) Wertes der `lch()`-Funktionsnotation, wobei die Farben in der Intensität abnehmen, wenn der `C`-Wert von voll gesättigt zu fast grau abnimmt.

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-chroma1"></div>
<div data-color="blue-chroma2"></div>
<div data-color="blue-chroma3"></div>

<div data-color="red"></div>
<div data-color="red-chroma1"></div>
<div data-color="red-chroma2"></div>
<div data-color="red-chroma3"></div>

<div data-color="green"></div>
<div data-color="green-chroma1"></div>
<div data-color="green-chroma2"></div>
<div data-color="green-chroma3"></div>
```

#### CSS

Bei den anfänglichen Farbwerten Blau, Rot und Grün deklarieren wir progressiv kleinere Werte für Chroma auf ihnen: Beginnend mit voller Farbsättigung bei dem höchsten Wert von `150` (entspricht `100%`) bis hin zu `3` (entspricht `2%`), was für alle Farben nahezu grau ist.

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue"] {
  background-color: lch(50% 150 240);
}
[data-color="blue-chroma1"] {
  background-color: lch(50% 105 240);
}
[data-color="blue-chroma2"] {
  background-color: lch(50% 54 240);
}
[data-color="blue-chroma3"] {
  background-color: lch(50% 3 240);
}

[data-color="red"] {
  background-color: lch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: lch(50% 70% 20deg);
}
[data-color="red-chroma2"] {
  background-color: lch(50% 36% 20deg);
}
[data-color="red-chroma3"] {
  background-color: lch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: lch(50% 150 130);
}
[data-color="green-chroma1"] {
  background-color: lch(50% 105 130);
}
[data-color="green-chroma2"] {
  background-color: lch(50% 54 130);
}
[data-color="green-chroma3"] {
  background-color: lch(50% 3 130);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting color intensity via chroma", '', '200')}}

Hätten wir `0` anstelle von `3` und `2%` verwendet, bei den gleichen Helligkeitswerten, wären die Farben alle derselbe Grauton gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbproben mit unterschiedlichen `H`- (Farbton-) Werten der `lch()`-Funktionsnotation.

#### HTML

```html
<div data-color="0">0deg</div>
<div data-color="20">20deg</div>
<div data-color="40">40deg</div>
<div data-color="60">60deg</div>
```

und so weiter.

```html hidden
<div data-color="80">80deg</div>
<div data-color="100">100deg</div>
<div data-color="120">120deg</div>
<div data-color="140">140deg</div>
<div data-color="160">160deg</div>
<div data-color="180">180deg</div>
<div data-color="200">200deg</div>
<div data-color="220">220deg</div>
<div data-color="240">240deg</div>
<div data-color="260">260deg</div>
<div data-color="280">280deg</div>
<div data-color="300">300deg</div>
<div data-color="320">320deg</div>
<div data-color="340">340deg</div>
<div data-color="360">360deg</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
div {
  flex: 0 0 4em;
  text-align: center;
  line-height: 4em;
  display: inline-block;
  border: 1px solid black;
  color: white;
  font-family: monospace;
}
```

```css
[data-color="0"] {
  background-color: lch(50% 150 0deg);
}
[data-color="20"] {
  background-color: lch(50% 150 20deg);
}
[data-color="40"] {
  background-color: lch(50% 150 40deg);
}
[data-color="60"] {
  background-color: lch(50% 150 60deg);
}
```

und so weiter.

```css hidden
[data-color="80"] {
  background-color: lch(50% 150 80deg);
}
[data-color="100"] {
  background-color: lch(50% 150 100deg);
}
[data-color="120"] {
  background-color: lch(50% 150 120deg);
}
[data-color="140"] {
  background-color: lch(50% 150 140deg);
}
[data-color="160"] {
  background-color: lch(50% 150 160deg);
}
[data-color="180"] {
  background-color: lch(50% 150 180deg);
}
[data-color="200"] {
  background-color: lch(50% 150 200deg);
}
[data-color="220"] {
  background-color: lch(50% 150 220deg);
}
[data-color="240"] {
  background-color: lch(50% 150 240deg);
}
[data-color="260"] {
  background-color: lch(50% 150 260deg);
}
[data-color="280"] {
  background-color: lch(50% 150 280deg);
}
[data-color="300"] {
  background-color: lch(50% 150 300deg);
}
[data-color="320"] {
  background-color: lch(50% 150 320deg);
}
[data-color="340"] {
  background-color: lch(50% 150 340deg);
}
[data-color="360"] {
  background-color: lch(50% 150 360deg);
}
```

#### Ergebnis

{{EmbedLiveSample("hues in lch")}}

Die Farbtonwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für mehr Informationen. In `hsl()` stellt die sRGB-Farbe `0deg` Rot dar. Im CIELab-Farbraum entspricht `0deg` jedoch Magenta, während Rot ungefähr `41deg` entspricht.

### Anpassen der Deckkraft mit lch()

Das folgende Beispiel zeigt die Wirkung des Variierens des `A`- (Alpha-) Wertes der `lch()`-Funktionsnotation.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren.
Ein `A`-Wert von `0.4` macht die Farbe 40% deckend.

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
  background-color: lch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: lch(50% 130 20 / 0.4);
}
```

#### Ergebnis

{{EmbedLiveSample("adjusting_opacity_with_lch")}}

### Verwendung relativer Farben mit lch()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben, um die Verwendung relativer Farben zur Änderung der Helligkeit einer Farbe mit der `lch()`-Funktion darzustellen. Das mittlere `<div>` behält die ursprüngliche `--base-color`, während das linke und das rechte `<div>` hellere und dunklere Varianten der `--base-color` erhalten.

Diese Varianten werden mithilfe relativer Farben definiert – die `--base-color` [Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `lch()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal, um den gewünschten Effekt zu erzielen, über eine `calc()`-Funktion modifiziert. Die aufgehellte Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 15% vom Helligkeitskanal subtrahiert.

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
  background-color: lch(from var(--base-color) calc(l + 15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 15) c h);
}
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with lch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnationen](/de/docs/Web/CSS/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Mod
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- [LCH-Farben in CSS: Was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)