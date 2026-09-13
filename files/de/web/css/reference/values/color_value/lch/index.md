---
title: "`lch()` CSS-Funktion"
short-title: lch()
slug: Web/CSS/Reference/Values/color_value/lch
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die **`lch()`**-Funktionsnotierung drückt eine gegebene Farbe unter Verwendung des LCH-{{Glossary("color_space", "Farbraums")}} aus, der Helligkeit, Chroma und Farbton darstellt. Sie verwendet dieselbe `L`-Achse wie die {{cssxref("color_value/lab","lab()")}}-Funktion des {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraums")}}, jedoch nutzt sie die Polarkoordinaten `C` (Chroma) und `H` (Farbton).

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

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors).

> [!NOTE]
> Normalerweise ist in CSS bei prozentualen Werten `100%` gleich der Zahl `1`.
> Dies ist bei `lch()` nicht der Fall. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Absolute Wertesyntax

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz) und die Zahl `100` entspricht `100%` (weiß). Dieser Wert spezifiziert die Helligkeit der Farbe im {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraum")}}.

    > [!NOTE]
    > Das `L` in `lch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir mit unseren Augen visuell wahrnehmen. Dies ist anders als das `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert misst das Chroma der Farbe (ungefähr die "Menge der Farbe"). Sein minimal nützlicher Wert ist `0%` oder `0`, während sein Maximum theoretisch unbegrenzt ist (aber in der Praxis nicht über `230` hinausgeht), wobei `100%` `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (entspricht `0deg`) und repräsentiert den Farbton-Winkel der Farbe.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den Farbmodellen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von `lch()`), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Siehe das Beispiel zu [Farbton in LCH](#farbtöne_in_lch) unten und die {{cssxref("hue")}} Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben ist, ist der Standardwert 100%. Falls angegeben, geht dem Wert ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Weitere Informationen über die Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Relative Wertesyntax

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert spezifiziert die Helligkeit der Farbe im CIELab-Farbraum.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (ungefähr die "Menge der Farbe"). Sein minimal nützlicher Wert ist `0%` oder `0`, während sein Maximum theoretisch unbegrenzt ist (in der Praxis jedoch nicht über `230` hinausgeht), wobei `100%` `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (entspricht `0deg`) und repräsentiert den Farbton-Winkel der Ausgabefarbe. Siehe das untenstehende [Farbton-Beispiel](#result_3).

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben ist, wird der Standardwert des Alpha-Kanal-Wertes der Ursprungsfarbe verwendet. Falls enthalten, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

#### Definition von relativen Farbkanal-Ausgabekomponenten

Wenn die relative Farbsyntax innerhalb einer `lch()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Lch-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — plus einen Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird auf einen `<number>` zwischen `0` und `150` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Nachfolgend werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen verwenden wir relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen keine echten relativen Farben! Sie würden diese in einem echten Code wahrscheinlich nie verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zur Einführung in die relative `lch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `c` und `h`-Kanalwerte der Ursprungsfarbe (`54.29`, `106.854` und `40.856`) als Ausgabekanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Die Ausgabefarbe dieser Funktion ist `lch(54.29 106.854 40.856)`.

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
- Setzt den `H`-Kanalwert der Ausgabefarbe auf den `H`-Kanalwert der äquivalenten `lch()` Ursprungsfarbe — `40.856`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `70` und `150` respektive.

Die endgültige Ausgabefarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe, wenn sie ein anderes Farbmodell verwendet als die Ausgabefarbe, im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie kompatibel dargestellt werden kann (d.h. mit denselben Kanälen).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, verwendet er standardmäßig denselben Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Ursprungs- und Ausgabewerte des Alpha-Kanals `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabewerte des Alpha-Kanals angeben. Das erste gibt den gleichen Alpha-Kanalwert für die Ausgabe an wie für den Ursprung, während das zweite einen anderen Alpha-Kanalwert für die Ausgabe angibt, der nicht mit dem Ursprung verwandt ist.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das `lch()`-Äquivalent — `lch(54.29 106.854 40.856)` — konvertiert. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lch(74.29 86.8541 0.856018 / 0.9)` führt:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanalwerte der Ursprungsfarbe zu `<number>`-Werten aufgelöst werden, müssen Sie bei Berechnungen Zahlen zu ihnen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit einer Farbe

Dieses Beispiel zeigt die Auswirkung der Variation des `L` (Helligkeit)-Wertes der `lch()`-Funktionsnotation.

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

### Anpassung der Farbintensität durch Chroma

Das folgende Beispiel zeigt die Auswirkung der Variation des `C` (Chroma)-Wertes der `lch()`-Funktionsnotation, wobei die Farben weniger intensiv werden, da der `C`-Wert von vollständig gesättigt zu fast grau abnimmt.

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

Mit den ursprünglichen Ausgangsfarben Blau, Rot und Grün deklarieren wir schrittweise kleinere Werte für Chroma: beginnend bei voller Farbsättigung beim höchsten Wert von `150` (entspricht `100%`) bis hin zu `3` (entspricht `2%`), was für alle Farben fast grau ist.

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

Wenn wir `0` anstelle von `3` und `2%` mit denselben Helligkeitswerten verwendet hätten, wären die Farben alle in einem gleichen Grauton. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbfelder mit verschiedenen `H` (Farbton)-Werten der `lch()`-Funktionsnotation.

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

Die Farbtonwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für weitere Informationen. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. Im CIELab-Farbraum jedoch entspricht `0deg` Magenta, während Rot ungefähr `41deg` ist.

### Anpassung der Opazität mit lch()

Das folgende Beispiel zeigt die Auswirkung der Variation des `A` (Alpha)-Wertes der `lch()`-Funktionsnotation.
Die `red` und `red-alpha` Elemente überlappen das `#background-div` Element, um die Auswirkung der Opazität zu demonstrieren.
Durch Angabe eines Wertes von `0.4` für `A` wird die Farbe zu 40% opak gemacht.

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

### Verwendung von relativen Farben mit lch()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben, um die Verwendung von relativen Farben zur Veränderung der Helligkeit einer Farbe mithilfe der `lch()`-Funktion zu demonstrieren. Das mittlere `<div>` behält die ursprüngliche `--base-color`, während die linke und rechte `<div>`-Elemente aufgehellte und abgedunkelte Varianten der `--base-color` erhalten.

Diese Varianten sind durch relative Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird in eine `lch()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt durch eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 15% zur Helligkeit hinzugefügt, während die abgedunkelte Farbe 15% von der Helligkeit subtrahiert.

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

- [Liste aller Farbnennungen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("hue")}}-Datentyp
- [LCH Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
