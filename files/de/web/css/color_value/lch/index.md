---
title: lch()
slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`lch()`** Funktionsnotation gibt eine Farbe im LCH-{{Glossary("color_space", "Farbraum")}} an, der Lichtstärke (Lightness), Chroma und Farbton (Hue) darstellt. Sie verwendet die gleiche `L`-Achse wie die {{cssxref("color_value/lab","lab()")}}-Funktion des {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraums")}}, verwendet jedoch die Polarkoordinaten `C` (Chroma) und `H` (Farbton).

## Syntax

```css
/* Absolute values */
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);

/* Relative values */
lch(from green l c h / 0.5)
lch(from #123456 calc(l + 10) c h)
lch(from hsl(180 100% 50%) calc(l - 10) c h)
lch(from var(--aColorValue) l c h / calc(alpha - 0.1))
```

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Normalerweise, wenn Prozentwerte in CSS einen numerischen Äquivalent haben, entspricht `100%` der Zahl `1`.
> Dies ist nicht der Fall bei `lch()`. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Absolute Wertsyntax

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraum")}} an.

    > [!NOTE]
    > Das `L` in `lch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir mit unseren Augen visuell wahrnehmen. Dies unterscheidet sich von dem `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert ist ein Maß für das Chroma einer Farbe (ungefähr die "Farbmenge"). Sein minimal nützlicher Wert ist `0%`, oder `0`, während sein maximaler theoretisch unbegrenzt ist (praktisch jedoch nicht mehr als `230` übersteigt), wobei `100%` gleichbedeutend mit `150` ist.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg`) und repräsentiert den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-, CIELAB- und Oklab-Farbräumen. Sehen Sie sich das Beispiel [Farbtöne in LCH](#farbtöne_in_lch) unten und die {{CSSXref("&lt;hue&gt;")}}-Referenzseite für Details und Beispiele an.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entsprechend `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im CIELab-Farbraum an.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entsprechend `0%` in diesem Fall). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (ungefähr die "Menge an Farbe"). Sein minimal nützlicher Wert ist `0%`, oder `0`, während sein maximaler theoretisch unbegrenzt ist (praktisch jedoch nicht mehr als `230` übersteigt), wobei `100%` gleichbedeutend mit `150` ist.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entsprechend `0deg`) und repräsentiert den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe. Siehe das [Farbtonbeispiel](#result_3) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird standardmäßig auf den Alphakanalwert der Ursprungsfarbe zurückgegriffen. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition der Komponenten der Ausgabekanäle für relative Farben

Wenn Sie die relative Farbsyntax innerhalb einer `lch()`-Funktion verwenden, wandelt der Browser die Ursprungsfarbe in eine äquivalente Lch-Farbe um (sofern nicht bereits als solche angegeben). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um während der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf eine `<number>` zwischen `0` und `100` aufgelöst, inklusiv.
- Der `c`-Kanalwert wird auf eine `<number>` zwischen `0` und `150` aufgelöst, inklusiv.
- Der `h`-Kanalwert wird auf eine `<number>` zwischen `0` und `360` aufgelöst, inklusiv.
- Der `alpha`-Kanal wird auf eine `<number>` zwischen `0` und `1` aufgelöst, inklusiv.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Unten betrachten wir einige Beispiele zur Veranschaulichung.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie schaffen eigentlich keine relativen Farben! In einem realen Codebase würden Sie diese wahrscheinlich niemals verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `lch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `c`- und `h`-Kanäle der Ursprungsfarbe (`54.29`, `106.854` und `40.856`) als Ausgabekanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist `lch(54.29 106.854 40.856)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

In diesem Fall ist die Ausgabefarbe `lch(29.6871 66.83 327.109)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

Dieses Beispiel:

- Konvertiert die `hsl()` Ursprungsfarbe in eine äquivalente `lch()` Farbe — `lch(54.29 106.854 40.856)`.
- Setzt den `H`-Kanalwert der Ausgabefarbe auf den `H`-Kanalwert des `lch()`-Äquivalents der Ursprungsfarbe — `40.856`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `70` und `150` beziehungsweise.

Die endgültige Ausgabefarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wird, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie in einer kompatiblen Weise dargestellt werden kann (d.h. mit denselben Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert ist, wird er auf den gleichen Wert wie der Alphakanal der Ursprungsfarbe standardmäßig zurückgesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarbe in den obigen Beispielen `1`.

Sehen wir uns einige Beispiele an, die Alphakanalwerte für die Ursprungs- und Ausgabefarben spezifizieren. Das erste Beispiel spezifiziert den Alphakanalwert der Ausgabefarbe als denselben wie den Alphakanalwert der Ursprungsfarbe, während das zweite Beispiel einen anderen Alphakanalwert für die Ausgabefarbe spezifiziert, der nicht mit dem der Ursprungsfarbe in Verbindung steht.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in das `lch()`-Äquivalent konvertiert — `lch(54.29 106.854 40.856)`. {{cssxref("calc")}} Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewandt und führen zu einer Ausgabefarbe von `lch(74.29 86.8541 0.856018 / 0.9)`:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung der Variation des `L` (Lichtstärke)-Wertes der `lch()`-Funktionsnotation.

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

Das folgende Beispiel zeigt die Wirkung der Variation des `C` (Chroma)-Wertes der `lch()`-Funktionsnotation, bei der Farben in der Intensität abnehmen, wenn der `C`-Wert von vollständig gesättigt zu fast grau abnimmt.

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

Ausgehend von den ursprünglichen Farben Blau, Rot und Grün deklarieren wir auf ihnen schrittweise kleinere Werte für Chroma: beginnend mit der vollen Farbsättigung beim höchsten Wert von `150` (entspricht `100%`) bis zu `3` (entspricht `2%`), was für alle Farben fast grau ist.

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

Hätten wir `0` statt `3` und `2%` mit denselben Lichtstärkewerten verwendet, wären die Farben alle derselben Grauschattierung gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbfelder mit verschiedenen `H` (Hue)-Werten der `lch()`-Funktionsnotation.

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

Die Farbwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Sehen Sie {{cssxref("hue")}} für mehr Informationen. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. Im CIELab-Farbraum entspricht jedoch `0deg` Magenta, während Rot ungefähr `41deg` entspricht.

### Anpassen der Deckkraft mit lch()

Das folgende Beispiel zeigt die Wirkung der Variation des `A` (Alpha)-Wertes der `lch()`-Funktionsnotation.
Die `red` und `red-alpha` Elemente überlappen das `#background-div` Element, um den Effekt der Deckkraft zu demonstrieren.
Das Zuweisen eines Wertes von `0.4` zu `A` macht die Farbe zu 40% deckend.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit verschiedenen Hintergrundfarben und demonstriert die Verwendung von relativen Farben, um die Helligkeit einer Farbe mit der `lch()`-Funktion zu ändern. Das mittlere `<div>` behält die ursprüngliche `--base-color`, während die linken und rechten `<div>`s aufgehellte und abgedunkelte Varianten der `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — das `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `lch()`-Funktion übergeben, und die Ausgabefarben haben ihren Lichtstärke-Kanal mit einer `calc()` Funktion verändert, um den gewünschten Effekt zu erzielen. Die aufgehellte Farbe hat 15% zur Lichtstärke hinzugerechnet, und die abgedunkelte Farbe hat 15% von der Lichtstärke abgezogen.

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

- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
