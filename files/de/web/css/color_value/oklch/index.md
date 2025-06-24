---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`oklch()`** funktionale Notation gibt eine Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} an. `oklch()` ist die zylindrische Form von {{CSSXref("color_value/oklab", "oklab()")}}, und verwendet dieselbe `L`-Achse, aber mit polaren Chroma- (`C`) und Farbton- (`h`) Koordinaten.

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

Unten sind Beschreibungen der erlaubten Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

> [!NOTE]
> Üblicherweise, wenn Prozentwerte in CSS eine numerische Entsprechung haben, ist `100%` gleich der Zahl `1`.
> Dies ist nicht der Fall für alle `oklch()`-Komponentenwerte. Hier entspricht `100%` dem Wert `0.4` für den `C`-Wert.

#### Syntax für absolute Werte

```plain
oklch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). In diesem Fall entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß). Dieser Wert bestimmt die wahrgenommene Helligkeit oder "Lichtstärke" der Farbe.

    > [!NOTE]
    > Das `L` in `oklch()` ist die wahrgenommene Helligkeit, die sich auf die "Lichtstärke" bezieht, die wir mit unseren Augen wahrnehmen. Dies unterscheidet sich von dem `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben beschreibt.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert ist ein Maß für das Chroma der Farbe (entspricht in etwa der "Farbmenge"). Sein minimaler nützlicher Wert ist `0`, während das Maximum theoretisch unbegrenzt ist (in der Praxis jedoch `0.5` nicht überschreitet). In diesem Fall ist `0%` gleich `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von `oklch()`) Farbräumen. Siehe das Beispiel [Farbtöne in `oklch()`](#farbtöne_in_oklch) unten und die {{CSSXref("&lt;hue&gt;")}} Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn enthalten, wird der Wert mit einem Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Syntax für relative Werte

```plain
oklch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies stellt den Helligkeitswert der Ausgabefarbe dar. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß).

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt den Chroma-Wert der Ausgabefarbe dar (entspricht in etwa der "Farbmenge"). Sein minimaler nützlicher Wert ist `0`, während sein Maximum theoretisch unbegrenzt ist (in der Praxis jedoch `0.5` nicht überschreitet). In diesem Fall ist `0%` gleich `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe darstellt. Sehen Sie sich ein [Beispiel für verschiedene Farbtöne](#result_3) im Abschnitt [Beispiele](#beispiele) unten an.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert der Alpha-Kanal-Wert der Ursprungsfarbe. Wenn enthalten, wird der Wert mit einem Schrägstrich (`/`) eingeleitet.

#### Definition der Ausgabekanal-Komponenten für relative Farben

Wenn eine relative Farbsyntax innerhalb einer `oklch()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklch-Farbe (wenn sie nicht bereits so angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — sowie ein Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um sie bei der Definition der Ausgabefarbkanalwerte zu verwenden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.
- Der `c`-Kanalwert wird auf einen `<number>` zwischen `0` und `0.4`, einschließlich, aufgelöst.
- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360`, einschließlich, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere Arten ausgedrückt werden. Unten werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die Syntax für relative Farben. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die nicht auf der Ursprungsfarbe basiert. Sie erzeugen tatsächlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem echten Codebasis verwenden würden, und Sie würden wahrscheinlich stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `oklch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `red`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `c`- und `h`-Kanalwerte (`0.627966`, `0.257704` und `29.2346`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
oklch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist `oklch(0.627966 0.257704 29.2346)`.

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

- Konvertiert die `hsl()` Ursprungsfarbe in eine äquivalente `oklch()` Farbe — `oklch(0.627966 0.257704 29.2346)`.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der `oklch()`-Äquivalenz der Ursprungsfarbe — `29.2346`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `0.8` und `0.4` jeweils.

Die finale Ausgabefarbe ist `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, entspricht er standardmäßig demselben Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt der Standardwert `1`. Daher haben die Ursprungs- und Ausgabefarbkanalwerte der obigen Beispiele den Wert `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarbkanalwerte angeben. Das erste Beispiel spezifiziert den Ausgabekanalwert als denselben wie der der Ursprungsfarbe, während das zweite Beispiel einen anderen Ausgabekanalwert angibt, der nicht mit dem der Ursprungsfarbe zusammenhängt.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in die `oklch()` Äquivalenz konvertiert — `oklch(0.627966 0.257704 29.2346)`. {{cssxref("calc")}} Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, wodurch eine Ausgabefarbe von `oklch(0.827966 0.357704 9.23462 / 0.9)` entsteht:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzuzufügen, wenn Sie sie in Berechnungen verwenden, sogar in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Es funktioniert zum Beispiel nicht, ein `<percentage>` zu einem `<number>` hinzuzufügen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Helligkeit einer Farbe einstellen

Dieses Beispiel zeigt die Wirkung des Variierens des `L` (Helligkeit)-Wertes der `oklch()` funktionalen Notation.

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

### Die Farbintensität über Chroma einstellen

Das folgende Beispiel zeigt die Wirkung des Variierens des `C` (Chroma)-Wertes der `oklch()` funktionalen Notation, mit Farben, die an Intensität abnehmen, wenn der `C`-Wert von voll gesättigt bis fast grau abnimmt.

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

Mit den anfänglichen Ausgangsfarben Blau, Rot und Grün deklarieren wir schrittweise kleinere Werte für Chroma: Beginnend bei voller Farbsättigung mit dem hohen Wert von `0.4` (entspricht `100%`) bis `0.01` (entspricht `2%`), was für alle Farben fast grau ist.

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

Wenn wir `0` anstelle von `0.01` und `2%` verwendet hätten, bei denselben Helligkeitswerten, wären die Farben alle derselbe Grauton gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in oklch

Das folgende Beispiel zeigt Farbfelder mit unterschiedlichen `H` (Farbton)-Werten der `oklch()` funktionalen Notation.

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

Die Farbtonwinkel in `oklch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für mehr Informationen. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. Im CIELab-Farbraum hingegen entspricht `0deg` Magenta, während Rot etwa `41deg` ist.

### Den Alphawert einer Farbe einstellen

Das folgende Beispiel zeigt die Wirkung des Variierens des `A` (Alpha)-Wertes der `oklch()`-Farbfunktion.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Deckkraft zu demonstrieren.
Wenn man `A` den Wert `0.4` gibt, macht dies die Farbe zu 40% deckend.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere wird mit der unveränderten `--base-color` versehen, während die linken und rechten hellere bzw. dunklere Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklch()`-Funktion übergeben, und die Ausgabefarbkanalwerte werden modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Der aufgehellte Farbton erhält `0.15` (15%) zum Helligkeitskanal addiert, und der verdunkelte Farbton erhält `0.15` (15%) vom Helligkeitskanal subtrahiert.

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

- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- {{cssxref("color_value/lch","lch()")}} und {{cssxref("color_value/oklab","oklab()")}} Farb-Funktionen
- [Interaktiver Beitrag zum OKLCH-Farbraum](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: warum wir von RGB und HSL umgestiegen sind](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Ein wahrnehmungsbasierter Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) (2020)
