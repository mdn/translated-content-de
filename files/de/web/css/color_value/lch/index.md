---
title: lch()
slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Die **`lch()`** Funktionsnotation drückt eine gegebene Farbe unter Verwendung des LCH-{{Glossary("color_space", "Farbraums")}} aus, der Helligkeit, Chroma und Farbton repräsentiert. Sie verwendet die gleiche `L`-Achse wie die {{cssxref("color_value/lab","lab()")}} Farb-Funktion des {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraums")}}, verwendet jedoch die Polarkoordinaten `C` (Chroma) und `H` (Farbton).

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

Unten finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Normalerweise sind Prozentwerte in CSS numerisch gleichwertig, wobei `100%` der Zahl `1` entspricht.
> Dies ist nicht der Fall bei `lch()`. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Syntax für absolute Werte

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraum")}} an.

    > [!NOTE]
    > Das `L` in `lch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir visuell mit den Augen wahrnehmen. Dies unterscheidet sich von dem `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht hier `0%`). Dieser Wert ist ein Maß für das Chroma der Farbe (ungefähr die "Farbintensität"). Sein minimaler nützlicher Wert ist `0%`, oder `0`, wobei sein maximaler Wert theoretisch unbeschränkt ist (in der Praxis jedoch `230` nicht überschreitet), wobei `100%` `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg`) repräsentierend den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB-Farbräumen (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von `lch()`) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Siehe das Beispiel [Farbtöne in LCH](#farbtöne_in_lch) unten und die {{CSSXref("&lt;hue&gt;")}} Referenzseite für mehr Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird er auf 100% standardisiert. Falls eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Syntax für relative Werte

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann eine _beliebige_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (schwarz), und die Zahl `100` entspricht `100%` (weiß). Dieser Wert gibt die Helligkeit der Farbe im CIELab-Farbraum an.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht hier `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgabe-Farbe (ungefähr die "Menge an Farbe"). Sein minimaler nützlicher Wert ist `0%`, oder `0`, wobei sein maximaler Wert theoretisch unbeschränkt ist (aber in der Praxis `230` nicht überschreitet), wobei `100%` `150` entspricht.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg`) repräsentierend den {{CSSXref("&lt;hue&gt;")}} Winkel der Ausgabe-Farbe. Siehe das [Farbton-Beispiel](#result_3) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Ausgabe-Farbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird er auf den Alphakanalwert der Ursprungsfarbe standardisiert. Falls eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definieren von Ausgabekanalkomponenten relativer Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `lch()`-Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente Lch-Farbe um (wenn sie nicht bereits so angegeben ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um zum Definieren der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird zu einer `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird zu einer `<number>` zwischen `0` und `150` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird zu einer `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird zu einer `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe kann die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Unten sehen wir uns einige Beispiele an, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen nicht wirklich relative Farben! Sie würden diese wahrscheinlich nie in einem realen Code verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen der `lch()`-Syntax für relative Farben hinzugefügt.

Lassen Sie uns mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`) beginnen. Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `c`- und `h`-Kanalwerte der Ursprungsfarbe (`54.29`, `106.854`, und `40.856`) als Ausgabekanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist `lch(54.29 106.854 40.856)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

In dem obigen Fall ist die Ausgabefarbe `lch(29.6871 66.83 327.109)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

Dieses Beispiel:

- Wandelt die `hsl()` Ursprungsfarbe in eine äquivalente `lch()` Farbe um — `lch(54.29 106.854 40.856)`.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert des `lch()`-Äquivalents der Ursprungsfarbe — `40.856`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `70` und `150` jeweils.

Die endgültige Ausgabefarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, standardisiert er auf den gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), standardisiert er auf `1`. Daher sind die Ursprungs- und Ausgabe-Alphakanalwerte in den obigen Beispielen `1`.

Betrachten wir einige Beispiele, die Ursprungs- und Ausgabe-Alphakanalwerte angeben. Der erste spezifiziert den Ausgabe-Alphakanalwert als gleich dem Ursprungs-Alphakanalwert, während der zweite einen anderen Ausgabe-Alphakanalwert angibt, der in keinem Zusammenhang mit dem Ursprungs-Alphakanalwert steht.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das `lch()`-Äquivalent konvertiert — `lch(54.29 106.854 40.856)`. {{cssxref("calc")}} Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewandt, was zu einer Ausgabefarbe von `lch(74.29 86.8541 0.856018 / 0.9)` führt:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen Sie diese in Berechnungen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`-, `<angle>`- oder andere Werttypen akzeptieren würde. Ein `<percentage>` zu einem `<number>` hinzufügen, funktioniert beispielsweise nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung der Variation des `L` (Helligkeit)-Wertes der `lch()`-Funktionalnotation.

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

### Anpassung der Farbintensität über Chroma

Das folgende Beispiel zeigt die Auswirkung der Variation des `C` (Chroma)-Wertes der `lch()`-Funktionalnotation, wobei die Farben mit abnehmender Intensität verblassen, während der `C`-Wert von voller Sättigung bis fast grau abnimmt.

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

Mit den anfänglichen Startfarben Blau, Rot und Grün deklarieren wir nach und nach kleinere Werte für Chroma bei ihnen: beginnend mit voller Farbsättigung beim höchsten Wert von `150` (entspricht `100%`) bis hin zu `3` (entspricht `2%`), was für alle Farben fast grau ist.

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

Hätten wir `0` anstelle von `3` und `2%` verwendet, mit denselben Helligkeitswerten, wären die Farben alle der gleiche Grauton gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbfelder mit unterschiedlichen `H` (Farbton)-Werten der `lch()`-Funktionalnotation.

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

Die Farbtonwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für mehr Informationen. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. In dem CIELab-Farbraum entspricht `0deg` jedoch Magenta, während Rot ungefähr `41deg` entspricht.

### Anpassung der Deckkraft mit lch()

Das folgende Beispiel zeigt die Wirkung der Variation des `A` (Alpha)-Wertes der `lch()`-Funktionalnotation.
Die Elemente `red` und `red-alpha` überlappen das `#background-div`-Element, um die Wirkung der Deckkraft zu demonstrieren.
Indem `A` auf einen Wert von `0.4` gesetzt wird, erreicht die Farbe eine Deckkraft von 40%.

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

{{EmbedLiveSample("Anpassen der Deckkraft mit lch()")}}

### Verwenden von relativen Farben mit lch()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben, demonstriert die Verwendung von relativen Farben zur Änderung der Helligkeit einer Farbe mit der `lch()`-Funktion. Das mittlere `<div>` behält die ursprüngliche `--base-color`, während die linken und rechten `<div>`s aufgehellte und abgedunkelte Varianten der `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `lch()`-Funktion eingegeben und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 15% vom Helligkeitskanal subtrahiert.

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

{{ EmbedLiveSample("Verwenden von relativen Farben mit lch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- [LCH-Farben in CSS: Was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
