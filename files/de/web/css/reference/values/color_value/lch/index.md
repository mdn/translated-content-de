---
title: lch()
slug: Web/CSS/Reference/Values/color_value/lch
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`lch()`** Funktionale Notation drückt eine gegebene Farbe im LCH-{{Glossary("color_space", "Farbraum")}} aus, der Helligkeit, Chroma und Farbton darstellt. Sie verwendet die gleiche `L`-Achse wie die {{cssxref("color_value/lab","lab()")}} Farb-Funktion des {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraums")}}, jedoch mit den Polarkoordinaten `C` (Chroma) und `H` (Farbton).

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

Unten finden Sie Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors).

> [!NOTE]
> Üblicherweise entspricht `100%`, wenn Prozentwerte einen numerischen Äquivalent in CSS haben, der Zahl `1`.
> Dies ist bei `lch()` nicht der Fall. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Absolute Wert-Syntax

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (gleichbedeutend mit `0%`). Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `100` entspricht `100%` (weiß). Dieser Wert spezifiziert die Helligkeit der Farbe im {{Glossary("Color_space#cielab_color_spaces", "CIELab Farbraum")}}.

    > [!NOTE]
    > Das `L` in `lch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir visuell mit unseren Augen wahrnehmen. Dies unterscheidet sich vom `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert ist ein Maß für das Chroma der Farbe (großzügig ausgedrückt die "Menge an Farbe"). Sein minimaler nützlicher Wert ist `0%` oder `0`, während sein Maximalwert theoretisch unbegrenzt ist (in der Praxis jedoch nicht über `230` hinausgeht), wobei `100%` dem Wert `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (gleichbedeutend mit `0deg`) repräsentiert den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von `lch()`), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Siehe das Beispiel zu den [Farbtönen in LCH](#farbtöne_in_lch) unten und die {{CSSXref("&lt;hue&gt;")}}-Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alphakanals der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanal-Wert nicht ausdrücklich angegeben ist, wird er auf 100% voreingestellt. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (gleichbedeutend mit `0%`). Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `100` entspricht `100%` (weiß). Dieser Wert spezifiziert die Helligkeit der Farbe im CIELab-Farbraum.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (hier gleichbedeutend mit `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgangsfarbe (großzügig ausgedrückt die "Menge an Farbe"). Sein minimaler nützlicher Wert ist `0%` oder `0`, während sein Maximalwert theoretisch unbegrenzt ist (in der Praxis jedoch nicht über `230` hinausgeht), wobei `100%` dem Wert `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (gleichbedeutend mit `0deg`) repräsentiert den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgangsfarbe. Siehe das Beispiel zum [Farbton](#result_3) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Ausgangsfarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanal-Wert nicht ausdrücklich angegeben ist, wird er auf den Alphakanalwert der Ursprungsfarbe voreingestellt. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

#### Definition der Ausgangskanal-Komponenten für relative Farben

Bei der Verwendung der relativen Farbsyntax innerhalb einer `lch()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Lch-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanal-Werte definiert — `l` (Lichtstärke), `c` (Chroma) und `h` (Farbton) — sowie ein Alphakanal-Wert (`alpha`). Diese Kanal-Werte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgangs-Farbkanal-Werte verwendet zu werden:

- Der `l`-Kanal-Wert wird in eine `<number>` zwischen `0` und `100`, inklusiv, aufgelöst.
- Der `c`-Kanal-Wert wird in eine `<number>` zwischen `0` und `150`, inklusiv, aufgelöst.
- Der `h`-Kanal-Wert wird in eine `<number>` zwischen `0` und `360`, inklusiv, aufgelöst.
- Der `alpha`-Kanal wird in eine `<number>` zwischen `0` und `1`, inklusiv, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgangsfarbe auf mehrere verschiedene Arten ausgedrückt werden. Unten werden einige Beispiele untersucht, um dies zu veranschaulichen.

In den beiden folgenden Beispielen verwenden wir die relative Farbsyntax. Jedoch gibt das erste den gleichen Farbton wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die nicht auf der Ursprungsfarbe basiert. Sie erstellen tatsächlich keine relativen Farben! Sie würden solche in einem echten Code wahrscheinlich niemals verwenden und wahrscheinlich einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `lch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion liefert die gleiche Farbe wie die Ursprungsfarbe — sie verwendet die `l`, `c`, und `h` Kanal-Werte der Ursprungsfarbe (`54.29`, `106.854`, und `40.856`) als die Ausgangs-Kanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Diese Funktion gibt die Farbe `lch(54.29 106.854 40.856)` aus.

Die nächste Funktion verwendet absolute Werte für die Ausgangs-Farbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

In diesem Fall ist die Ausgangsfarbe `lch(29.6871 66.83 327.109)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

Dieses Beispiel:

- Konvertiert die `hsl()` Ursprungsfarbe in eine äquivalente `lch()` Farbe — `lch(54.29 106.854 40.856)`.
- Legt den `H`-Wert der Ausgangsfarbe auf den `H`-Kanalwert der äquivalenten `lch()` Ursprungsfarbe — `40.856`.
- Setzt die `L`- und `C`-Werte der Ausgangsfarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `70` bzw. `150`.

Die endgültige Ausgangsfarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgangsfarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgangsfarbe konvertiert, damit sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgangsfarben ausdrücklich angegeben. Wenn der Alphakanal der Ausgangsfarbe nicht angegeben ist, wird er auf den gleichen Wert voreingestellt wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` voreingestellt. Daher sind die Ursprungs- und Ausgangs-Alphakanal-Werte der obigen Beispiele `1`.

Betrachten wir einige Beispiele, die Ursprungs- und Ausgangs-Alphakanal-Werte angeben. Das erste gibt an, dass der Ausgangs-Alphakanal-Wert derselbe ist wie der Ursprungs-Alphakanal-Wert, während das zweite einen anderen Ausgangs-Alphakanalwert angibt, der mit dem Ursprungs-Alphakanal-Wert nicht in Zusammenhang steht.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in die `lch()` äquivalente Farbe — `lch(54.29 106.854 40.856)` — umgewandelt. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet und führen zu einer Ausgangsfarbe von `lch(74.29 86.8541 0.856018 / 0.9)`:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanal-Werte der Ursprungsfarbe in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert zum Beispiel nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit einer Farbe

Dieses Beispiel zeigt die Auswirkung der Variation des `L` (Helligkeit)-Wertes der `lch()` funktionalen Notation.

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

Das folgende Beispiel zeigt die Auswirkungen der Variation des `C` (Chroma)-Wertes der `lch()` funktionalen Notation, wobei die Farbintensität abnimmt, wenn der `C`-Wert von vollständig gesättigt bis fast grau abnimmt.

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

Mit den anfänglichen Startfarben Blau, Rot und Grün deklarieren wir schrittweise kleinere Werte für Chroma: beginnend mit der vollen Farbsättigung beim höchsten Wert von `150` (entspricht `100%`) bis zu `3` (entspricht `2%`), was für alle Farben fast grau ist.

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

Hätten wir `0` anstelle von `3` und `2%` verwendet, mit den gleichen Helligkeitswerten, wären die Farben alle derselbe Grauton gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbmuster mit unterschiedlichen `H` (Farbton)-Werten der `lch()` funktionalen Notation.

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

Die Farbtonwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für weitere Informationen. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. Im CIELab-Farbraum entspricht jedoch `0deg` Magenta, während Rot ungefähr `41deg` entspricht.

### Anpassen der Deckkraft mit lch()

Das folgende Beispiel zeigt die Auswirkungen der Variation des `A` (Alpha)-Wertes der `lch()` funktionalen Notation.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren.
Ein Wert von `0.4` für `A` macht die Farbe zu 40% deckend.

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

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird in eine `lch()`-Funktion übergeben und die Ausgangsfarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 15% zu ihrem Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 15% von ihrem Helligkeitskanal subtrahiert.

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

- [Liste aller Farbnotationen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- [LCH-Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
