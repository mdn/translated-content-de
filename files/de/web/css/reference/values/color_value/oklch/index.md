---
title: "`oklch()` CSS-Funktion"
short-title: oklch()
slug: Web/CSS/Reference/Values/color_value/oklch
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die funktionale Notation **`oklch()`** gibt eine bestimmte Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} an. `oklch()` ist die zylindrische Form von {{CSSXref("color_value/oklab", "oklab()")}}, wobei die gleiche `L`-Achse verwendet wird, aber mit polaren Chroma (`C`) und Hue (`h`) Koordinaten.

## Syntax

```css
/* Absolute values */
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)

/* Relative values */
oklch(from green l c h / 0.5)
oklch(from #123456 calc(l + 0.1) c h)
oklch(from hsl(180 100% 50%) calc(l - 0.1) c h)
oklch(from var(--color) l c h / calc(alpha - 0.1))
```

### Werte

Im Folgenden sind die erlaubten Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) beschrieben.

> [!NOTE]
> Normalerweise entsprechen Prozentwerte, die einen numerischen Äquivalent in CSS haben, bei `100%` der Zahl `1`. Dies gilt jedoch nicht für alle Komponentenwerte von `oklch()`. Hier entspricht `100%` dem Wert `0.4` für den Wert `C`.

#### Syntax für absolute Werte

```plain
oklch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). In diesem Fall entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß). Dieser Wert gibt die wahrgenommene Helligkeit oder "Helligkeit" der Farbe an.

    > [!NOTE]
    > Das `L` in `oklch()` ist die wahrgenommene Helligkeit, die "Helligkeit" bezeichnet, die wir visuell mit unseren Augen wahrnehmen. Dies unterscheidet sich vom `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert ist ein Maß für das Chroma der Farbe (ungefähr die "Menge der Farbe"). Sein minimal nützlicher Wert ist `0`, während der maximale theoretisch unbegrenzt ist (in der Praxis jedoch nicht `0.5` überschreitet). In diesem Fall entspricht `0%` `0` und `100%` der Zahl `0.4`.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{cssxref("hue")}}-Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von `oklch()`) Farbräumen. Siehe das [Hues in `oklch()`](#farbtöne_in_oklch)-Beispiel unten und die {{cssxref("hue")}}-Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Wird er eingeschlossen, steht der Wert vorangestellt durch einen Slash (`/`).

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Relative Values Syntax

```plain
oklch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann eine beliebige gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer weiteren relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies repräsentiert den Helligkeitswert der Ausgabefarbe. Hier entspricht der Wert `0` `0%` (schwarz) und der Wert `1` `100%` (weiß).

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (der ungefähr die "Menge der Farbe" darstellt). Sein minimal nützlicher Wert ist `0`, während sein maximaler theoretisch unbegrenzt ist (in der Praxis jedoch nicht `0.5` überschreitet). In diesem Fall entspricht `0%` `0` und `100%` der Zahl `0.4`.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{cssxref("hue")}}-Winkel der Ausgabefarbe darstellt. Siehe ein [Beispiel für verschiedene Farbtöne](#result_3) im Abschnitt [Beispiele](#beispiele) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf den Alpha-Kanal-Wert der Ursprungsfarbe gesetzt. Wird er eingeschlossen, steht der Wert vorangestellt durch einen Slash (`/`).

#### Definieren von relativen Farbausgabekanalkomponenten

Wenn Sie relative Farbsyntax innerhalb einer `oklch()`-Funktion verwenden, konvertiert der Browser die Ursprungsfarbe in eine äquivalente OkLCh-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — sowie als Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf ein `<number>` zwischen `0` und `1` aufgelöst.
- Der `c`-Kanalwert wird auf ein `<number>` zwischen `0` und `0.4` aufgelöst.
- Der `h`-Kanalwert wird auf ein `<number>` zwischen `0` und `360` aufgelöst.
- Der `alpha`-Kanal wird auf ein `<number>` zwischen `0` und `1` aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Unten werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Diese erstellen keine echten relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem realen Code verwenden würden, und wahrscheinlich einfach einen absoluten Farbwert verwenden würden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `oklch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `c`- und `h`-Kanalwerte (`0.627966`, `0.257704` und `29.2346`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
oklch(from hsl(0 100% 50%) l c h)
```

Diese Funktion hat als Ausgabefarbe `oklch(0.627966 0.257704 29.2346)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
oklch(from hsl(0 100% 50%) 42.1% 0.25 328.363)
```

In diesem Fall ist die Ausgabefarbe `oklch(0.421 0.25 328.363)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
oklch(from hsl(0 100% 50%) 0.8 0.4 h)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ursprungsfarbe in eine äquivalente `oklch()`-Farbe — `oklch(0.627966 0.257704 29.2346)`.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert des äquivalenten Ursprungs-`oklch()` — `29.2346`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `0.8` bzw. `0.4`.

Die endgültige Ausgabefarbe ist `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, wird er auf denselben Wert wie der Alpha-Kanal der Ursprungsfarbe gesetzt. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Ursprungs- und Ausgabe-Alpha-Kanalwerte für die obigen Beispiele `1`.

Sehen wir uns einige Beispiele an, die Alpha-Kanalwerte für Ursprungs- und Ausgabefarben angeben. Das erste Beispiel legt den Alpha-Kanalwert der Ausgabe als gleich dem Alpha-Kanalwert des Ursprungs fest, während das zweite einen anderen Alpha-Kanalwert der Ausgabe angibt, der nichts mit dem Alpha-Kanalwert des Ursprungs zu tun hat.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das äquivalente `oklch()` umgewandelt — `oklch(0.627966 0.257704 29.2346)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklch(0.827966 0.357704 9.23462 / 0.9)` führt:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen addieren, wenn Sie sie in Berechnungen verwenden. Selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert zum Beispiel nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung der Variation des `L`- (Helligkeits-)Werts der `oklch()`-Funktionalnotation.

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

### Anpassung der Farbintensität über Chroma

Das folgende Beispiel zeigt die Wirkung der Variation des `C`- (Chroma-)Werts der `oklch()`-Funktionalnotation, wobei die Farben in der Intensität abnehmen, wenn der `C`-Wert von voll gesättigt zu fast grau abnimmt.

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

Mit den anfänglichen Startfarben Blau, Rot und Grün geben wir schrittweise kleinere Werte für Chroma an: beginnend mit voller Farbsättigung bei dem hohen Wert von `0.4` (entspricht `100%`) bis hin zu `0.01` (entspricht `2%`), was für alle Farben fast Grau ist.

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

Hätten wir `0` anstelle von `0.01` und `2%` bei denselben Helligkeitswerten verwendet, wären die Farben alle dieselbe Grauschattierung gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in OkLCh

Das folgende Beispiel zeigt Farbproben mit unterschiedlichen `H`- (Farbton-)Werten der `oklch()`-Funktionalnotation.

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

Die Farbtonwinkel in `oklch()` sind anders als in {{CSSXref("color_value/hsl", "hsl()")}}. Weitere Informationen finden Sie unter {{cssxref("hue")}}. In `hsl()` repräsentiert der sRGB-Farbton `0deg` Rot. Im CIELab-Farbraum entspricht `0deg` jedoch Magenta, während Rot ungefähr `41deg` ist.

### Anpassung des Alpha-Werts einer Farbe

Das folgende Beispiel zeigt die Wirkung der Variation des `A`- (Alpha-)Werts der `oklch()`-Funktion zur Farbangabe. Die `red`- und `red-alpha`-Elemente überlappen sich mit dem `#background-div`-Element, um die Wirkung der Deckkraft zu demonstrieren. `A` einen Wert von `0.4` zu geben, macht die Farbe 40% deckend.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren Element wird die unveränderte `--base-color` zugewiesen, während den linken und rechten Elementen aufgehellte und abgedunkelte Varianten dieser `--base-color` zugewiesen werden.

Diese Varianten werden mithilfe relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird in eine `oklch()`-Funktion übergeben, und die Ausgabefarben haben ihre Helligkeitskanäle modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat `0.15` (15%) zu ihrem Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat `0.15` (15%) von ihrem Helligkeitskanal subtrahiert.

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

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with oklch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnotationen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("hue")}} Datentyp
- {{cssxref("color_value/lch","lch()")}} und {{cssxref("color_value/oklab","oklab()")}} Farbkomponenten
- [Interaktiver Beitrag über OkLCh-Farbraum](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: Warum wir von RGB und HSL gewechselt haben](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Ein wahrnehmungsbasierter Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) (2020)
