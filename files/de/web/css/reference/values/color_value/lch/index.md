---
title: lch()
slug: Web/CSS/Reference/Values/color_value/lch
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`lch()`** Funktionalnotation gibt eine Farbe im LCH-{{Glossary("color_space", "Farbraum")}} an, der Helligkeit, Chroma und Farbton repräsentiert. Sie verwendet die gleiche `L`-Achse wie die {{cssxref("color_value/lab","lab()")}} Farbfunktion des {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraums")}}, jedoch werden die Polarkoordinaten `C` (Chroma) und `H` (Farbton) verwendet.

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
lch(from var(--color-value) l c h / calc(alpha - 0.1))
```

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors).

> [!NOTE]
> Normalerweise haben Prozentwerte, wenn sie in CSS eine numerische Entsprechung haben, `100%` gleich der Zahl `1`.
> Dies ist jedoch nicht der Fall bei `lch()`. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Absolute Wertsyntax

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraum")}} an.

    > [!NOTE]
    > Das `L` in `lch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir mit unseren Augen wahrnehmen. Dies unterscheidet sich vom `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall entspricht dies `0%`). Dieser Wert ist ein Maß für das Chroma der Farbe (entspricht ungefähr der "Menge an Farbe"). Sein minimaler nützlicher Wert ist `0%` oder `0`, während sein Maximalwert theoretisch unbegrenzt ist (in der Praxis jedoch nicht über `230` hinausgeht), wobei `100%` `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}} oder das Schlüsselwort `none` (entspricht `0deg`), das den {{cssxref("hue")}} Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtonen entsprechen, unterscheiden sich über die Farbräume sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von `lch()`) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Siehe das Beispiel [Hues in LCH](#farbtöne_in_lch) unten und die {{cssxref("hue")}} Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components) für weitere Informationen zur Wirkung von `none`.

#### Relative Wertsyntax

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im CIELab-Farbraum an.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (entspricht ungefähr der "Menge an Farbe"). Sein minimaler nützlicher Wert ist `0%`, oder `0`, während sein Maximalwert theoretisch unbegrenzt ist (aber in der Praxis nicht über `230` hinausgeht), wobei `100%` `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (entspricht `0deg`) repräsentiert den {{cssxref("hue")}} Winkel der Ausgabefarbe. Siehe das [Hue-Beispiel](#result_3) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} das den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, übernimmt er standardmäßig den Alpha-Kanal-Wert der Ursprungsfarbe. Wenn enthalten, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

#### Definieren der relativen Farbausgabenkanalkomponenten

Wenn Sie die relative Farbsyntax innerhalb einer `lch()`-Funktion verwenden, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Lch-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei separate Farbkanalwerte — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — plus ein Alpha-Kanalwert (`alpha`) definiert. Diese Kanalwerte sind innerhalb der Funktion verfügbar, um beim Definieren der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird auf einen `<number>` zwischen `0` und `150` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele betrachten, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel die gleiche Farbe wie die Ursprungsfarbe aus und das zweite erzeugt eine Farbe, die gar nicht auf der Ursprungsfarbe basiert. Sie erstellen also keine echten relativen Farben! Sie würden diese wahrscheinlich niemals in einem echten Codebase verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen der relativen `lch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `c` und `h` Kanalwerte der Ursprungsfarbe (`54.29`, `106.854` und `40.856`) als Ausgabekanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist `lch(54.29 106.854 40.856)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

In diesem Fall ist die Ausgabefarbe `lch(29.6871 66.83 327.109)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe `hsl()` in eine äquivalente `lch()`-Farbe — `lch(54.29 106.854 40.856)`.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der äquivalenten `lch()`-Ursprungsfarbe — `40.856`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `70` und `150` bzw.

Die endgültige Ausgabefarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe konvertiert, wenn sie ein anderes Farbmodell verwendet, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. mit denselben Kanälen).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Alpha-Kanal der Ursprungsfarbe gesetzt. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alpha-Kanalwerte der Ursprungs- und Ausgabefarbe in den obigen Beispielen `1`.

Schauen wir uns nun einige Beispiele an, die Alpha-Kanalwerte für Ursprungs- und Ausgabefarben angeben. Das erste spezifiziert den Alpha-Kanalwert der Ausgabe als denselben wie den der Ursprungsfarbe, während das zweite einen anderen Alpha-Kanalwert der Ausgabe spezifiziert, der mit dem der Ursprungsfarbe nichts zu tun hat.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die Ursprungsfarbe `hsl()` erneut in das äquivalente `lch()` konvertiert — `lch(54.29 106.854 40.856)`. {{cssxref("calc")}} Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lch(74.29 86.8541 0.856018 / 0.9)` führt:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>` Werten aufgelöst werden, müssen Sie in Berechnungen Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert z.B. nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung, wenn der `L` (Helligkeits-)Wert der `lch()`-Funktionalnotation variiert wird.

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

### Anpassung der Farbstärke durch Chroma

Das folgende Beispiel zeigt die Wirkung, wenn der `C` (Chroma-)Wert der `lch()`-Funktionalnotation variiert wird, wobei die Farben in der Intensität abnehmen, wenn der `C`-Wert von vollständig gesättigt auf fast Grau abnimmt.

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

Mit den anfänglichen Grundfarben Blau, Rot und Grün deklarieren wir schrittweise kleinere Werte für Chroma: beginnend bei voller Farbsättigung mit dem höchsten Wert von `150` (entspricht `100%`) bis zu `3` (entspricht `2%`), was für alle Farben fast grau ist.

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

Wenn wir `0` anstelle von `3` und `2%` verwendet hätten, mit den gleichen Helligkeitswerten, wären die Farben alle im gleichen Grauton. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbplatten mit unterschiedlichen `H` (Farbton-)Werten der `lch()`-Funktionalnotation.

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

Die Farbtonwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Weitere Informationen finden Sie unter {{cssxref("hue")}}. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. Im CIELab-Farbraum entspricht `0deg` jedoch Magenta, während Rot etwa `41deg` ist.

### Anpassung der Deckkraft mit lch()

Das folgende Beispiel zeigt die Wirkung, wenn der `A` (Alpha-)Wert der `lch()`-Funktionalnotation variiert wird. Die Elemente `red` und `red-alpha` überlappen das `#background-div`-Element, um die Wirkung der Deckkraft zu demonstrieren. Wenn `A` einen Wert von `0.4` hat, macht dies die Farbe zu 40% deckend.

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

### Verwenden relativer Farben mit lch()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben und demonstriert die Verwendung relativer Farben, um die Helligkeit einer Farbe mit der `lch()`-Funktion zu ändern. Das mittlere `<div>` behält die ursprüngliche `--base-color`, während die linken und rechten `<div>`s aufgehellte und abgedunkelte Varianten der `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert – die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Bei der aufgehellten Farbe wird dem Helligkeitskanal 15% hinzugefügt, und bei der abgedunkelten Farbe werden 15% vom Helligkeitskanal abgezogen.

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

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using relative colors with lch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnotationen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Verwenden relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("hue")}} Datentyp
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
