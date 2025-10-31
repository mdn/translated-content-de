---
title: lch()
slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`lch()`** Funktionsnotation drückt eine gegebene Farbe im LCH-{{Glossary("color_space", "Farbraum")}} aus, der Helligkeit, Chroma und Farbton repräsentiert. Sie verwendet die gleiche `L`-Achse wie die {{cssxref("color_value/lab","lab()")}}-Funktion der {{Glossary("Color_space#cielab_color_spaces", "CIELab Farbraum")}}, jedoch mit den Polarkoordinaten `C` (Chroma) und `H` (Farbton).

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

Nachfolgend sind Beschreibungen der erlaubten Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

> [!NOTE]
> In der Regel entspricht in CSS, wenn Prozentwerte einen numerischen Äquivalent haben, `100%` der Zahl `1`.
> Das ist bei `lch()` nicht der Fall. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Absolute Wertsyntax

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im {{Glossary("Color_space#cielab_color_spaces", "CIELab Farbraum")}} an.

    > [!NOTE]
    > Das `L` in `lch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir visuell mit unseren Augen wahrnehmen. Dies unterscheidet sich von dem `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert ist ein Maß für das Chroma der Farbe (ungefähr den "Farbanteil" darstellend). Der minimal nützliche Wert ist `0%`, oder `0`, während der maximale theoretisch unbegrenzt ist (praktisch jedoch `230` nicht übersteigt), wobei `100%` gleich `150` ist.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von `lch()`), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. Weitere Details und Beispiele finden Sie im Beispiel zu den [Farbtönen in LCH](#farbtöne_in_lch) unten und auf der {{CSSXref("&lt;hue&gt;")}} Referenzseite.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alphakanals der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt der Standardwert 100%. Ist er enthalten, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer weiteren relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im CIELab Farbraum an.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (ungefähr den "Farbanteil" darstellend). Der minimal nützliche Wert ist `0%`, oder `0`, während der maximale theoretisch unbegrenzt ist (praktisch jedoch `230` nicht übersteigt), wobei `100%` gleich `150` ist.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe darstellt. Siehe das [Farbtonbeispiel](#result_3) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt der Standardwert den Alphakanalwert der Ursprungsfarbe. Ist er enthalten, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

#### Definition von Ausgabekanal-Komponenten relativer Farben

Bei Verwendung der relativen Farbsyntax innerhalb einer `lch()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Lch-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um sie zur Definition der Ausgabefarbkanalwerte zu verwenden:

- Der `l`-Kanalwert wird in eine `<number>` zwischen `0` und `100`, einschließlich beider Endwerte, aufgelöst.
- Der `c`-Kanalwert wird in eine `<number>` zwischen `0` und `150`, einschließlich beider Endwerte, aufgelöst.
- Der `h`-Kanalwert wird in eine `<number>` zwischen `0` und `360`, einschließlich beider Endwerte, aufgelöst.
- Der `alpha`-Kanal wird in eine `<number>` zwischen `0` und `1`, einschließlich beider Endwerte, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Unten sehen wir uns einige Beispiele an, um diese zu verdeutlichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, während das zweite eine Farbe ausgibt, die überhaupt nicht auf der Ursprungsfarbe basiert. Diese erzeugen eigentlich keine relativen Farben! Es ist unwahrscheinlich, diese jemals in einem echten Code zu verwenden, und man würde stattdessen wahrscheinlich einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `lch()`-Syntax eingeschlossen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `c` und `h` Kanalwerte der Ursprungsfarbe (`54.29`, `106.854` und `40.856`) als die Ausgabekanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Diese Funktion gibt die Farbe `lch(54.29 106.854 40.856)` aus.

Die nächste Funktion verwendet absolute Werte für die Kanalkomponenten der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

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
- Setzt den Wert des `H`-Kanals der Ausgabefarbe auf den des äquivalenten `H`-Kanals der `lch()`-Ursprungsfarbe — `40.856`.
- Setzt die Werte der `L`- und `C`-Kanäle der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `70` bzw. `150`.

Die endgültige Ausgabefarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein unterschiedliches Farbmodell zur Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. mit den gleichen Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, ist der Standardwert derselbe wie der der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), beträgt der Standardwert `1`. Daher beträgt der Alphakanalwert der Ursprung- und Ausgabefarben `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die explizite Ursprungs- und Ausgabefarb-Alphakanalwerte angeben. Das erste gibt den Alphakanalwert der Ausgabefarbe als denselben wie den der Ursprungsfärbe an, während das zweite einen anderen Alphakanalwert der Ausgabefarbe angibt, der nicht mit dem der Ursprungsfärbe zusammenhängt.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das `lch()`-Äquivalent konvertiert — `lch(54.29 106.854 40.856)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lch(74.29 86.8541 0.856018 / 0.9)` führt:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte umgerechnet werden, müssen Zahlen hinzugefügt werden, wenn sie in Berechnungen verwendet werden, selbst in Fällen, in denen ein Kanal üblicherweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Beispielsweise funktioniert das Hinzufügen eines `<percentage>` zu einer `<number>` nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung der Variation des `L`- (Helligkeit)-Wertes der `lch()`-Funktionsnotation.

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

{{EmbedLiveSample("Anpassen der Helligkeit einer Farbe", "", "200")}}

### Anpassen der Farbintensität durch Chroma

Das folgende Beispiel zeigt die Wirkung der Variation des `C` (Chroma)-Wertes der `lch()`-Funktionsnotation, wobei die Farben an Intensität verlieren, wenn der `C`-Wert von voll gesättigt bis fast grau abnimmt.

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

Mit den anfangs blauen, roten und grünen Farben deklarieren wir auf ihnen fortschreitend kleinere Werte für Chroma: beginnend mit voller Farbsättigung bei dem höchsten Wert von `150` (entspricht `100%`) bis hinunter zu `3` (entspricht `2%`), was für alle Farben fast grau ist.

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

{{EmbedLiveSample("Anpassen der Farbintensität durch Chroma", '', '200')}}

Hätten wir `0` anstelle von `3` und `2%` verwendet, wären die Farben mit den gleichen Helligkeitswerten alle in derselben Graustufe gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbproben mit unterschiedlichen `H`- (Farbton) Werten der `lch()`-Funktionsnotation.

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

{{EmbedLiveSample("Farbtöne in lch")}}

Die Farbtonwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Weitere Informationen finden Sie unter {{cssxref("hue")}}. In `hsl()` repräsentiert die sRGB-Farbe `0deg` die Farbe Rot. Im CIELab Farbraum jedoch entspricht `0deg` Magenta, während Rot ungefähr `41deg` entspricht.

### Anpassen der Deckkraft mit lch()

Das folgende Beispiel zeigt die Wirkung der Variation des `A`- (Alpha) Wertes der `lch()`-Funktionsnotation.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren.
Einen Wert von `0.4` für `A` zu vergeben, macht die Farbe zu 40% opak.

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

{{EmbedLiveSample("Anpassen der Deckkraft mit lch")}}

### Verwenden relativer Farben mit lch()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben und demonstriert den Einsatz relativer Farben, um die Helligkeit einer Farbe mithilfe der `lch()`-Farbfunktion zu ändern. Das mittlere `<div>` behält die ursprüngliche `--base-color` bei, während die linken und rechten `<div>`s aufgehellte und abgedunkelte Varianten der `--base-color` erhalten.

Diese Varianten werden mithilfe relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal durch eine `calc()`-Funktion modifiziert, um den gewünschten Effekt zu erzielen. Die aufgehellte Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 15% vom Helligkeitskanal abgezogen.

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

{{ EmbedLiveSample("Verwenden relativer Farben mit lch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [Verwenden relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- [LCH Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
