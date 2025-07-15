---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`oklch()`** Funktionsnotation drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus. `oklch()` ist die zylindrische Form von {{CSSXref("color_value/oklab", "oklab()")}}, die dieselbe `L`-Achse verwendet, jedoch mit polaren Chroma- (`C`) und Farbton- (`h`) Koordinaten.

## Syntax

```css
/* Absolute values */
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)

/* Relative values */
oklch(from green l c h / 0.5)
oklch(from #0000FF calc(l + 0.1) c h)
oklch(from hsl(180 100% 50%) calc(l - 0.1) c h)
oklch(from var(--aColor) l c h / calc(alpha - 0.1))
```

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgelistet.

> [!NOTE]
> Normalerweise, wenn Prozentwerte in CSS eine numerische Entsprechung haben, ist `100%` gleich der Zahl `1`.
> Dies trifft nicht auf alle `oklch()` Komponentenwerte zu. Hier entspricht `100%` dem Wert `0.4` für den `C`-Wert.

#### Absolute Wert-Syntax

```plain
oklch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). In diesem Fall entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß). Dieser Wert gibt die wahrgenommene Helligkeit oder "Helligkeit" der Farbe an.

    > [!NOTE]
    > Das `L` in `oklch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir mit unseren Augen wahrnehmen. Dies unterscheidet sich vom `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (gleich `0%` in diesem Fall). Dieser Wert ist ein Maß für die Chroma der Farbe (ungefähr die "Menge der Farbe"). Sein minimaler nützlicher Wert ist `0`, während der maximale theoretisch unbegrenzt ist (praktisch jedoch nicht `0.5` überschreitet). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleich `0deg` in diesem Fall), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe repräsentiert.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen dem sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von `oklch()`) Farbräumen. Siehe das untenstehende Beispiel [Farbtöne in `oklch()`](#farbtöne_in_oklch) und die {{CSSXref("&lt;hue&gt;")}} Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben wird, beträgt er standardmäßig 100%. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wert-Syntax

```plain
oklch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`
  - : Ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dies repräsentiert den Helligkeitswert der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß).

- `C`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert repräsentiert den Chromawert der Ausgabefarbe (ungefähr die "Menge der Farbe"). Sein minimaler nützlicher Wert ist `0`, während sein maximaler theoretisch unbegrenzt ist (praktisch jedoch nicht `0.5` überschreitet). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleichbedeutend mit `0deg` in diesem Fall), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe repräsentiert. Siehe ein [Beispiel für verschiedene Farbtöne](#result_3) im Abschnitt [Beispiele](#beispiele) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

#### Definieren von Kanal-Komponenten für den Ausgabefarbkanal

Beim Verwenden der relativen Farbsyntax innerhalb einer `oklch()` Funktion konvertiert der Browser die Ursprungsfarbe in eine gleichwertige Oklch-Farbe (wenn diese nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — sowie einen Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um beim Definieren der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird zu einem `<number>` zwischen `0` und `1` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird zu einem `<number>` zwischen `0` und `0.4` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird zu einem `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird zu einem `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weisen ausgedrückt werden. Nachfolgend untersuchen wir einige Beispiele, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einem echten Codebase verwenden und wahrscheinlich stattdessen nur einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `oklch()`-Syntax aufgenommen.

Lassen Sie uns mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`) beginnen. Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`, `c` und `h` Kanalwerte (`0.627966`, `0.257704` und `29.2346`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
oklch(from hsl(0 100% 50%) l c h)
```

Diese Funktion ergibt die Ausgabefarbe `oklch(0.627966 0.257704 29.2346)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
oklch(from hsl(0 100% 50%) 42.1% 0.25 328.363)
```

In diesem Fall ist die Ausgabefarbe `oklch(0.421 0.25 328.363)`.

Die folgende Funktion erstellt eine relative Farbe auf Basis der Ursprungsfarbe:

```css
oklch(from hsl(0 100% 50%) 0.8 0.4 h)
```

Dieses Beispiel:

- Konvertiert die `hsl()` Ursprungsfarbe in eine gleichwertige `oklch()`-Farbe — `oklch(0.627966 0.257704 29.2346)`.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der Ursprünglichkeit `oklch()`-Äquivalente — `29.2346`.
- Legt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte fest, die nicht auf der Ursprungsfarbe basieren: `0.8` und `0.4`.

Die endgültige Ausgabefarbe ist `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. dieselben Kanäle verwendet).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alpha-Kanäle weder für die Ursprungs- noch die Ausgabefarben ausdrücklich spezifiziert. Wenn der Alpha-Kanal der Ausgabefarbe nicht spezifiziert ist, entspricht er standardmäßig dem Wert des Alpha-Kanals der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher beträgt der Alpha-Kanalwert der Ursprungs- und Ausgabefarben in den obigen Beispielen `1`.

Lassen Sie uns einige Beispiele betrachten, die Ursprungs- und Ausgabefarbkanalwerte angeben. Das erste gibt den Alpha-Kanalwert der Ausgabefarbe an, der dem Alpha-Kanalwert der Ursprungsfarbe entspricht, während das zweite einen anderen Alpha-Kanalwert angibt, der nicht mit dem Alpha-Kanalwert der Ursprungsfarbe verwandt ist.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in das `oklch()`-Äquivalent konvertiert — `oklch(0.627966 0.257704 29.2346)`. Auf die `L`-, `C`-, `H`- und `A`-Werte werden {{cssxref("calc")}}-Berechnungen angewendet, was zu einer Ausgabefarbe von `oklch(0.827966 0.357704 9.23462 / 0.9)` führt:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>` Werten aufgelöst sind, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen einer `<percentage>` zu einer `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung, die das Variieren des `L` (Helligkeit)-Werts der `oklch()` Funktionsnotation hat.

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
  background-color: oklch(10% 0.4 240);
}
[data-color="blue"] {
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red-dark"] {
  background-color: oklch(10% 0.4 20);
}
[data-color="red"] {
  background-color: oklch(50% 0.4 20);
}
[data-color="red-light"] {
  background-color: oklch(90% 0.4 20);
}

[data-color="green-dark"] {
  background-color: oklch(10% 0.4 130);
}
[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-light"] {
  background-color: oklch(90% 0.4 130);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting the brightness of a color", "", "200")}}

### Anpassen der Farbintensität über Chroma

Das folgende Beispiel zeigt die Wirkung, die das Variieren des `C` (Chroma)-Werts der `oklch()` Funktionsnotation hat, wobei die Farben in der Intensität abnehmen, je mehr der `C`-Wert von vollständig gesättigt zu fast grau abnimmt.

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

Mit den anfänglichen Startfarben Blau, Rot und Grün deklarieren wir progressive kleinere Chroma-Werte für sie: beginnend bei voller Farbsättigung am hohen Wert von `0.4` (entspricht `100%`) bis `0.01` (entspricht `2%`), was für alle Farben fast grau ist.

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
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-chroma1"] {
  background-color: oklch(50% 0.2 240);
}
[data-color="blue-chroma2"] {
  background-color: oklch(50% 0.1 240);
}
[data-color="blue-chroma3"] {
  background-color: oklch(50% 0.01 240);
}

[data-color="red"] {
  background-color: oklch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: oklch(50% 50% 20deg);
}
[data-color="red-chroma2"] {
  background-color: oklch(50% 25% 20deg);
}
[data-color="red-chroma3"] {
  background-color: oklch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-chroma1"] {
  background-color: oklch(50% 0.2 130);
}
[data-color="green-chroma2"] {
  background-color: oklch(50% 0.1 130);
}
[data-color="green-chroma3"] {
  background-color: oklch(50% 0.01 130);
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting color intensity via chroma", '', '200')}}

Hätten wir statt `0` `0.01` und `2%` verwendet, wären bei gleichen Helligkeitswerten alle Farben der gleiche Grauton gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in oklch

Das folgende Beispiel zeigt Farbfelder mit unterschiedlichen `H` (Farbton) Werten der `oklch()` Funktionsnotation.

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
  background-color: oklch(50% 0.4 0deg);
}
[data-color="20"] {
  background-color: oklch(50% 0.4 20deg);
}
[data-color="40"] {
  background-color: oklch(50% 0.4 40deg);
}
[data-color="60"] {
  background-color: oklch(50% 0.4 60deg);
}
```

und so weiter.

```css hidden
[data-color="80"] {
  background-color: oklch(50% 0.4 80deg);
}
[data-color="100"] {
  background-color: oklch(50% 0.4 100deg);
}
[data-color="120"] {
  background-color: oklch(50% 0.4 120deg);
}
[data-color="140"] {
  background-color: oklch(50% 0.4 140deg);
}
[data-color="160"] {
  background-color: oklch(50% 0.4 160deg);
}
[data-color="180"] {
  background-color: oklch(50% 0.4 180deg);
}
[data-color="200"] {
  background-color: oklch(50% 0.4 200deg);
}
[data-color="220"] {
  background-color: oklch(50% 0.4 220deg);
}
[data-color="240"] {
  background-color: oklch(50% 0.4 240deg);
}
[data-color="260"] {
  background-color: oklch(50% 0.4 260deg);
}
[data-color="280"] {
  background-color: oklch(50% 0.4 280deg);
}
[data-color="300"] {
  background-color: oklch(50% 0.4 300deg);
}
[data-color="320"] {
  background-color: oklch(50% 0.4 320deg);
}
[data-color="340"] {
  background-color: oklch(50% 0.4 340deg);
}
[data-color="360"] {
  background-color: oklch(50% 0.4 360deg);
}
```

#### Ergebnis

{{EmbedLiveSample("hues in oklch")}}

Die Farbwinkel in `oklch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Weitere Informationen siehe {{cssxref("hue")}}. In `hsl()` repräsentiert die sRGB-Farbe `0deg` rot. Im CIELab-Farbraum entspricht `0deg` jedoch Magenta, während Rot ungefähr `41deg` ist.

### Anpassen des Alpha-Wertes einer Farbe

Das folgende Beispiel zeigt die Wirkung, die das Variieren des `A` (Alpha)-Werts der `oklch()`-Farbe hat.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um die Wirkung der Deckkraft zu demonstrieren.
Ein `A`-Wert von `0.4` macht die Farbe zu 40% undurchsichtig.

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
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 0.5 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 0.5 20 / 0.4);
}
```

#### Ergebnis

{{EmbedLiveSample("adjusting_the_alpha_value_of_a_color")}}

### Verwendung relativer Farben mit oklch()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere Element erhält die unveränderte `--base-color`, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklch()` Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal über eine `calc()` Funktion so modifiziert, dass der gewünschte Effekt erzielt wird. Der aufgehellte Farbe wird `0.15` (15%) zum Helligkeitskanal hinzugefügt, und der abgedunkelten Farbe wird `0.15` (15%) vom Helligkeitskanal abgezogen.

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
  background-color: oklch(from var(--base-color) calc(l + 0.15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklch(from var(--base-color) calc(l - 0.15) c h);
}
```

#### Ergebnis

Der Output ist wie folgt:

{{ EmbedLiveSample("Using relative colors with oklch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnationen](/de/docs/Web/CSS/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Colormodul](/de/docs/Web/CSS/CSS_colors)
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- {{cssxref("color_value/lch","lch()")}} und {{cssxref("color_value/oklab","oklab()")}} Farb-Funktionen
- [Interaktiver Beitrag zum OKLCH-Farbraum](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: Warum wir von RGB und HSL gewechselt sind](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Ein perceptualer Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) (2020)
