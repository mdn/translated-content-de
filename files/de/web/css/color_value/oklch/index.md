---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Die **`oklch()`** funktionale Notation drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus. `oklch()` ist die zylindrische Form von {{CSSXref("color_value/oklab", "oklab()")}}, die dieselbe `L`-Achse verwendet, aber mit den polaren Chroma- (`C`) und Farbton- (`h`) Koordinaten arbeitet.

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

Nachfolgend finden Sie Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Normalerweise entspricht in CSS bei Prozentwerten `100%` der Zahl `1`.
> Dies gilt nicht für alle `oklch()`-Komponentenwerte. Hier entspricht `100%` dem Wert `0.4` für den `C`-Wert.

#### Syntax für absolute Werte

```plain
oklch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Hierbei entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß). Dieser Wert gibt die wahrgenommene Helligkeit, oder "Helligkeit", der Farbe an.

    > [!NOTE]
    > Das `L` in `oklch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir mit unseren Augen visuell wahrnehmen. Dies unterscheidet sich von dem `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert ist ein Maß für das Chroma des Farbtons (ungefähr die "Farbmenge"). Sein minimaler nützlicher Wert ist `0`, während der maximale theoretisch unbegrenzt ist (aber in der Praxis nicht `0.5` überschreitet). Hierbei ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), welches den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe repräsentiert.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB-Farbräumen (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von `oklch()`). Siehe das [Beispiel zu Farbtönen in `oklch()`](#farbtöne_in_oklch) unten und die Referenzseite zum {{CSSXref("&lt;hue&gt;")}} für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Falls der `A`-Kanalwert nicht explizit angegeben wird, wird er auf 100% standardisiert. Falls er enthalten ist, geht dem Wert ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Auswirkungen von `none`.

#### Syntax für relative Werte

```plain
oklch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, das die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`
  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies stellt den Helligkeitswert der Ausgabefarbe dar. Hierbei entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß).

- `C`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt den Chromawert der Ausgabefarbe dar (ungefähr die "Farbmenge"). Sein minimaler nützlicher Wert ist `0`, während sein maximaler theoretisch unbegrenzt ist (aber in der Praxis nicht `0.5` überschreitet). Hierbei ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), welches den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe repräsentiert. Siehe ein [Beispiel verschiedener Farbtöne](#result_3) im Abschnitt [Beispiele](#beispiele) weiter unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Falls der `A`-Kanalwert nicht explizit angegeben wird, wird er auf den Alphakanalwert der Ursprungsfarbe standardisiert. Falls er enthalten ist, geht dem Wert ein Schrägstrich (`/`) voraus.

#### Definition von Ausgabekanal-Komponenten für relative Farben

Wenn die relative Farbsyntax innerhalb einer `oklch()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente OkLCh-Farbe (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — sowie ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird zu einem `<number>` zwischen `0` und `1` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird zu einem `<number>` zwischen `0` und `0.4` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird zu einem `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird zu einem `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine nicht auf der Ursprungsfarbe basierende Farbe aus. Sie erzeugen keine wirklichen relativen Farben! In einem echten Codebasis würden Sie diese wahrscheinlich nie verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `oklch()`-Syntax mit aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `c`- und `h`-Kanalwerte der Ursprungsfarbe (`0.627966`, `0.257704` und `29.2346`) als Ausgabekanalwerte:

```css
oklch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist `oklch(0.627966 0.257704 29.2346)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

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
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der äquivalenten `oklch()`-Ursprungsfarbe — `29.2346`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `0.8` und `0.4` jeweils.

Die endgültige Ausgabefarbe ist `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe konvertiert, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf den gleichen Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` standardisiert. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarben für die obigen Beispiele `1`.

Sehen wir uns einige Beispiele an, die die Ursprungs- und Ausgabefarbenalphakanalwerte angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabefarbe an, der mit dem Alphakanalwert der Ursprungsfarbe identisch ist, während das zweite Beispiel einen anderen Ausgabefarbenalphakanalwert angibt, der nicht mit dem Alphakanalwert der Ursprungsfarbe zusammenhängt.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in ihre `oklch()`-Äquivalente konvertiert — `oklch(0.627966 0.257704 29.2346)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklch(0.827966 0.357704 9.23462 / 0.9)` führt:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen Sie Zahlen zu diesen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, beispielsweise, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung der Variation des `L`- (Helligkeits-)Wertes der `oklch()`-Funktion.

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

Das folgende Beispiel zeigt die Auswirkung der Variation des `C`- (Chroma-)Wertes der `oklch()`-Funktion, wobei die Farbsättigung abnimmt, wenn der `C`-Wert von vollständig gesättigt zu fast grau abnimmt.

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

Mit den anfänglichen Ausgangsfarben Blau, Rot und Grün definieren wir fortschreitend kleinere Chroma-Werte für sie: beginnend mit voller Farbsättigung beim hohen Wert von `0.4` (entspricht `100%`) bis zu `0.01` (entspricht `2%`), was für alle Farben fast grau ist.

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

Hätten wir `0` anstelle von `0.01` und `2%` verwendet, mit denselben Helligkeitswerten, wären die Farben in diesem Beispiel alle in derselben Grauschattierung. In diesem Beispiel sind sie fast grau.

### Farbtöne in OkLCh

Das folgende Beispiel zeigt Farbproben mit unterschiedlichen `H`- (Farbton-)Werten der `oklch()`-Funktion.

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

Die Farbtonwinkel in `oklch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für weitere Informationen. In `hsl()` repräsentiert die sRGB-Farbe `0deg` rot. Im CIELab-Farbraum entspricht `0deg` jedoch magenta, während rot ungefähr `41deg` entspricht.

### Anpassung des Alphawerts einer Farbe

Das folgende Beispiel zeigt die Auswirkungen der Variation des `A`- (Alpha-)Wertes der `oklch()`-Farbfunktion. Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren. Ein Wert von `0.4` für `A` macht die Farbe zu 40% undurchsichtig.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten jeweils aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color`- [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklch()`-Funktion übergeben, und die Ausgabefarben lassen ihren Helligkeitskanal modifizieren, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat `0.15` (15%) zum Helligkeitskanal hinzugefügt und die abgedunkelte Farbe `0.15` (15%) vom Helligkeitskanal subtrahiert.

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

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using relative colors with oklch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnationen](/de/docs/Web/CSS/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- {{cssxref("color_value/lch","lch()")}} und {{cssxref("color_value/oklab","oklab()")}} Farbfunktionen
- [Interaktiver Beitrag zum OkLCh-Farbraum](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: warum wir von RGB und HSL gewechselt sind](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Ein perceptueller Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) (2020)
