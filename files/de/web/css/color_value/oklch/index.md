---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: c494fb86c1be1048a4bc75738ebbb9052ee70c58
---

{{CSSRef}}

Die **`oklch()`** funktionale Notation drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus. `oklch()` ist die zylindrische Form von {{CSSXref("color_value/oklab", "oklab()")}}, die dieselbe `L`-Achse verwendet, aber mit polaren Chroma- (`C`) und Farbton- (`h`) Koordinaten.

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

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Normalerweise, wenn Prozentwerte in CSS eine numerische Entsprechung haben, ist `100%` gleich der Zahl `1`.
> Dies gilt nicht für alle `oklch()`-Komponentenwerte. Hier ist `100%` gleich `0.4` für den `C`-Wert.

#### Absolute Wert-Syntax

```plain
oklch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). In diesem Fall entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß). Dieser Wert spezifiziert die wahrgenommene Helligkeit der Farbe, oder "Leuchtkraft".

    > [!NOTE]
    > Das `L` in `oklch()` ist die wahrgenommene Helligkeit, die sich auf die "Leuchtkraft" bezieht, die wir visuell mit unseren Augen wahrnehmen. Dies ist anders als das `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert ist ein Maß für das Chroma der Farbe (ungefähr die "Menge der Farbe" repräsentierend). Sein minimaler nützlicher Wert ist `0`, während der maximale theoretisch unbegrenzt ist (in der Praxis jedoch `0.5` nicht übersteigt). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg` in diesem Fall), das den Farbwinkel der {{CSSXref("&lt;hue&gt;")}} darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von `oklch()`) Farbräumen. Siehe das Beispiel [Farbtöne in `oklch()`](#farbtöne_in_oklch) unten und die {{CSSXref("&lt;hue&gt;")}} Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanal der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alphakanal vorhanden ist. Wenn der `A`-Kanalwert nicht explizit festgelegt ist, wird standardmäßig 100 % verwendet. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
oklch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dies repräsentiert den Helligkeitswert der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß).

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht `0%` in diesem Fall). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (ungefähr die "Menge der Farbe" repräsentierend). Sein minimaler nützlicher Wert ist `0`, während der maximale theoretisch unbegrenzt ist (in der Praxis jedoch `0.5` nicht übersteigt). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht `0deg` in diesem Fall), das den Farbwinkel der Ausgabefarbe {{CSSXref("&lt;hue&gt;")}} repräsentiert. Siehe ein [Beispiel für verschiedene Farbtöne](#result_3) im Abschnitt [Beispiele](#beispiele) unten.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alphakanal vorhanden ist. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird standardmäßig der Alphakanalwert der Ursprungsfarbe verwendet. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definition relativer Farb-Ausgabekanalkomponenten

Wenn Sie die relative Farbsyntax innerhalb einer `oklch()`-Funktion verwenden, konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklch-Farbe (wenn sie nicht bereits so spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — sowie ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.
- Der `c`-Kanalwert wird auf einen `<number>` zwischen `0` und `0.4`, inklusive, aufgelöst.
- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden einige Beispiele studiert, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer realen Codebasis verwenden und wahrscheinlich eher einen absoluten Farbwert nehmen. Wir haben diese Beispiele als Ausgangspunkt zum Lernen der relativen `oklch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `c`- und `h`-Kanalwerte der Ursprungsfarbe (`0.627966`, `0.257704` und `29.2346`) als Ausgabekanalwerte:

```css
oklch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist die Farbe `oklch(0.627966 0.257704 29.2346)`.

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
- Setzt den `H`-Kanalwert der Ausgabefarbe auf den `H`-Kanalwert der äquivalenten `oklch()`-Ursprungsfarbe — `29.2346`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `0.8` und `0.4` respektive.

Die endgültige Ausgabefarbe ist `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, um sie in einer Weise zu repräsentieren, die kompatibel ist (d. h. dieselben Kanäle verwendet).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit festgelegt. Wenn der Ausgabefarben-Alphakanal nicht angegeben ist, wird standardmäßig derselbe Wert wie der Ursprungsfarben-Alphakanal verwendet. Wenn der Ursprungsfarben-Alphakanal nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird standardmäßig `1` verwendet. Daher sind die Ursprungs- und Ausgabewert der Alphakanäle in den obigen Beispielen `1`.

Lassen Sie uns einige Beispiele betrachten, die Ursprungs- und Ausgabefarb-Alphakanalwerte spezifizieren. Das erste Beispiel spezifiziert den Ausgabefarb-Alphakanalwert als denselben wie den Ursprungs-Alphakanalwert, während das zweite einen anderen Ausgabefarb-Alphakanalwert angibt, der nicht im Zusammenhang mit dem Ursprungs-Alphakanalwert steht.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in die `oklch()`-Äquivalenz konvertiert — `oklch(0.627966 0.257704 29.2346)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklch(0.827966 0.357704 9.23462 / 0.9)` führt:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen addieren, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung der Variation des `L` (Helligkeit)-Wertes der `oklch()`-funktionalen Notation.

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

{{EmbedLiveSample("Anpassen der Helligkeit einer Farbe", "", "200")}}

### Anpassung der Farbstärke über Chroma

Das folgende Beispiel zeigt die Wirkung der Variation des `C` (Chroma)-Wertes der `oklch()`-funktionalen Notation, wobei die Farben an Intensität abnehmen, wenn der `C`-Wert von vollständig gesättigt zu fast grau abnimmt.

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

Mit den anfänglichen Ausgangsfarben Blau, Rot und Grün deklarieren wir schrittweise kleinere Werte für Chroma auf ihnen: beginnend mit voller Farbsättigung am hohen Wert von `0.4` (entspricht `100%`) bis hin zu `0.01` (entspricht `2%`), was bei allen Farben fast grau ist.

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

{{EmbedLiveSample("Anpassung der Farbstärke über Chroma", '', '200')}}

Hätten wir `0` anstelle von `0.01` und `2%` mit den gleichen Helligkeitswerten verwendet, wären die Farben alle derselbe Grauton. In diesem Beispiel sind sie fast grau.

### Farbtöne in oklch

Das folgende Beispiel zeigt Farbfelder mit verschiedenen `H` (Farbton)-Werten der `oklch()`-funktionalen Notation.

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

{{EmbedLiveSample("farbtöne in oklch")}}

Die Farbtonwinkel in `oklch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für mehr Informationen. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. Im CIELab-Farbraum entspricht `0deg` jedoch Magenta, während Rot ungefähr `41deg` ist.

### Anpassen des Alphawerts einer Farbe

Das folgende Beispiel zeigt die Wirkung der Variation des `A` (Alpha)-Wertes der `oklch()`-Farb-Funktion. Die `rot`- und `rot-alpha`-Elemente überlappen das `#background-div`-Element, um die Wirkung der Opazität zu demonstrieren. Wenn `A` einen Wert von `0.4` erhält, wird die Farbe zu 40% deckend.

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

{{EmbedLiveSample("anpassen_des_alphawerts_einer_farbe")}}

### Verwendung relativer Farben mit oklch()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten durch Aufhellen und Abdunkeln dieser `--base-color` Variationen erhalten.

Diese Variationen werden durch relative Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `oklch()`-Funktion eingespeist, und die Ausgabefarben haben ihren Helligkeitskanal so modifiziert, dass der gewünschte Effekt über eine `calc()`-Funktion erreicht wird. Die aufgehellte Farbe hat `0.15` (15%) zum Helligkeitskanal hinzugefügt und die abgedunkelte Farbe hat `0.15` (15%) vom Helligkeitskanal subtrahiert.

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

{{ EmbedLiveSample("Verwendung relativer Farben mit oklch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- {{cssxref("color_value/lch","lch()")}} und {{cssxref("color_value/oklab","oklab()")}} Farb-Funktionen
- [Interaktiver Beitrag über OKLCH-Farbraum](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: Warum wir von RGB und HSL gewechselt sind](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Ein wahrnehmbarer Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) (2020)
