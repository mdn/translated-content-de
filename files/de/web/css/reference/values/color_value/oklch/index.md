---
title: oklch()
slug: Web/CSS/Reference/Values/color_value/oklch
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`oklch()`**-Funktionsnotation gibt eine bestimmte Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} an. `oklch()` ist die zylindrische Form von {{CSSXref("color_value/oklab", "oklab()")}}, wobei dieselbe `L`-Achse verwendet wird, jedoch mit polaren Chroma- (`C`) und Farbton- (`h`) Koordinaten.

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

Nachfolgend finden Sie Beschreibungen der erlaubten Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors).

> [!NOTE]
> Normalerweise entspricht ein Prozentwert in CSS einem numerischen Gegenwert, wobei `100%` gleich der Zahl `1` ist.
> Dies ist nicht der Fall bei allen `oklch()`-Komponentenwerten. Hier entspricht `100%` dem Wert `0.4` für den `C`-Wert.

#### Absolute Wertsyntax

```plain
oklch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). In diesem Fall entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß). Dieser Wert gibt die wahrgenommene Helligkeit oder "Leuchtkraft" der Farbe an.

    > [!NOTE]
    > Das `L` in `oklch()` steht für die wahrgenommene Helligkeit, die die "Leuchtkraft" beschreibt, die wir mit unseren Augen wahrnehmen. Dies unterscheidet sich vom `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert ist ein Maß für das Chroma der Farbe (ungefähr die "Farbmenge"). Sein minimal nützlicher Wert ist `0`, während das Maximum theoretisch unbegrenzt ist (in der Praxis jedoch nicht über `0.5` hinausgeht). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`) und stellt den Winkel des Farbtons {{CSSXref("&lt;hue&gt;")}} der Farbe dar.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB- (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB- (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab-Farbräumen (verwendet von `oklch()`). Siehe das Beispiel [Farbtöne in `oklch()`](#farbtöne_in_oklch) unten und die {{CSSXref("&lt;hue&gt;")}}-Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, nimmt er standardmäßig 100% an. Wenn enthalten, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
oklch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies repräsentiert den Helligkeitswert der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß).

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (ungefähr die "Farbmenge"). Sein minimal nützlicher Wert ist `0`, während sein Maximum theoretisch unbegrenzt ist (in der Praxis jedoch nicht über `0.5` hinausgeht). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe repräsentiert. Siehe ein [Beispiel verschiedener Farbtöne](#result_3) im Abschnitt [Beispiele](#beispiele) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, nimmt er standardmäßig den Alphakanal-Wert der Ursprungsfarbe an. Wenn enthalten, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

#### Definition von Relativen Farbkanalkomponenten-Ausgaben

Bei der Verwendung der relativen Farbsyntax innerhalb einer `oklch()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente OkLCh-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) — plus ein Alphakanal-Wert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um die Ausgangsfarbkanal-Werte zu definieren:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.
- Der `c`-Kanalwert wird auf einen `<number>` zwischen `0` und `0.4`, inklusive, aufgelöst.
- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend werden wir einige Beispiele untersuchen, um dies zu veranschaulichen.

In den ersten beiden Beispielen verwenden wir relative Farbsyntax. Im ersten Beispiel wird jedoch die gleiche Farbe wie die Ursprungsfarbe ausgegeben und im zweiten Fall wird eine Farbe ausgegeben, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen keine wirklichen relativen Farben! Sie würden diese wahrscheinlich niemals in einem echten Codebase verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `oklch()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe `hsl(0 100% 50%)` (entspricht `Rot`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `l`-, `c`- und `h`-Kanalwerte (`0.627966`, `0.257704` und `29.2346`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
oklch(from hsl(0 100% 50%) l c h)
```

Die Ausgabefarbe dieser Funktion ist `oklch(0.627966 0.257704 29.2346)`.

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
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der äquivalenten `oklch()`-Ursprungsfarbe — `29.2346`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `0.8` und `0.4` jeweils.

Die endgültige Ausgabefarbe ist `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe in den gleichen Farbraummodell wie die Ausgabefarbe konvertiert, wenn die Ausgabefarbe ein anderes Farbraummodell verwendet, damit sie auf kompatible Weise dargestellt werden kann (d.h. mit denselben Kanälen).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, nimmt er standardmäßig denselben Wert wie der Alphakanal der Ursprungsfarbe an. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird der Standardwert `1` angenommen. Daher sind die Alpha-Kanalwerte der Ursprungs- und Ausgabefarbe für die obigen Beispiele `1`.

Sehen wir uns einige Beispiele an, die die Ursprungs- und Ausgabefarbkanalwerte spezifizieren. Das erste Beispiel gibt den Ausgabefarbkanalwert als gleich dem Wert des Ursprungsalphakanals an, während das zweite Beispiel einen anderen Ausgabefarbkanalwert spezifiziert, der nicht mit dem des Ursprungsalphakanals zusammenhängt.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in das `oklch()`-Äquivalent konvertiert — `oklch(0.627966 0.257704 29.2346)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `oklch(0.827966 0.357704 9.23462 / 0.9)` führt:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `&lt;number&gt;`-Werte aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `&lt;percentage&gt;`-, `&lt;angle&gt;`- oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `&lt;percentage&gt;` zu einem `&lt;number&gt;` funktioniert beispielsweise nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit einer Farbe

Dieses Beispiel zeigt die Auswirkung der Variation des `L`-Wertes (Helligkeit) der `oklch()`-Funktionsnotation.

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

Das folgende Beispiel zeigt die Wirkung der Variierung des `C`-Wertes (Chroma) der `oklch()`-Funktionsnotation, wobei die Farben in der Intensität abnehmen, während der `C`-Wert von vollständig gesättigt bis fast grau abnimmt.

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

Mit den Anfangsfarben Blau, Rot und Grün deklarieren wir fortschreitend kleinere Werte für Chroma darauf: Beginnend mit voller Farbsättigung bei dem hohen Wert von `0.4` (entspricht `100%`) bis zu `0.01` (entspricht `2%`), was fast grau für alle Farben ist.

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

Hätten wir `0` anstelle von `0.01` und `2%` verwendet, mit den gleichen Helligkeitswerten, wären die Farben alle in demselben Grauton. In diesem Beispiel sind sie fast grau.

### Farbtöne in OkLCh

Das folgende Beispiel zeigt Farbfelder mit verschiedenen `H`- (Farbton-)Werten der `oklch()`-Funktionalnotation.

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

Die Farbtonwinkel in `oklch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Weitere Informationen finden Sie unter {{cssxref("hue")}}. In `hsl()` repräsentiert die sRGB-Farbe `0deg` Rot. Im CIELab-Farbraum entspricht jedoch `0deg` Magenta, während Rot ungefähr `41deg` ist.

### Anpassung des Alphawertes einer Farbe

Das folgende Beispiel zeigt die Wirkung der Variation des `A`-Wertes (Alpha) der `oklch()`-Farbfunktion.
Die `red`- und `red-alpha`-Elemente überlappen das `#background-div`-Element, um den Effekt der Opazität zu demonstrieren.
Wenn `A` einen Wert von `0.4` hat, macht es die Farbe zu 40% undurchsichtig.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere Element erhält die unveränderte `--base-color`, während die linken und rechten Varianten dieser `--base-color` aufgehellt und abgedunkelt werden.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--) wird in eine `oklch()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um die gewünschte Wirkung über eine `calc()`-Funktion zu erzielen. Der aufgehellte Farbkanal hat `0.15` (15%) zur Helligkeit addiert, während die abgedunkelte Farbe `0.15` (15%) von der Helligkeit subtrahiert hat.

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

- [Liste aller Farbdarstellungen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)-Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- {{cssxref("color_value/lch","lch()")}} und {{cssxref("color_value/oklab","oklab()")}} Farb-Funktionen
- [Interaktiver Beitrag über den OkLCh-Farbraum](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: Warum wir von RGB und HSL abgerückt sind](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Ein perceptueller Farbraum für die Bildbearbeitung](https://bottosson.github.io/posts/oklab/) (2020)
