---
title: lch()
slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die funktionale Notation **`lch()`** drückt eine gegebene Farbe mit dem LCH-{{Glossary("color_space", "Farbraum")}} aus, der Helligkeit, Chroma und Farbton repräsentiert. Es verwendet die gleiche `L`-Achse wie die {{cssxref("color_value/lab","lab()")}}-Farbfunktion des {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraums")}}, jedoch mit den Polarkoordinaten `C` (Chroma) und `H` (Farbton).

## Syntax

```css
/* Absolute values */
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);

/* Relative values */
lch(from green l c h / 0.5)
lch(from #0000FF calc(l + 10) c h)
lch(from hsl(180 100% 50%) calc(l - 10) c h)
lch(from var(--aColorValue) l c h / calc(alpha - 0.1))
```

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

> [!NOTE]
> Normalerweise gilt in CSS, wenn Prozentwerte ein numerisches Äquivalent haben, dass `100%` der Zahl `1` entspricht. Dies ist bei `lch()` nicht der Fall. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `150` für den `C`-Wert.

#### Syntax für absolute Werte

```plain
lch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (Schwarz), und die Zahl `100` entspricht `100%` (Weiß). Dieser Wert gibt die Helligkeit der Farbe im {{Glossary("Color_space#cielab_color_spaces", "CIELab-Farbraum")}} an.

    > [!NOTE]
    > Das `L` in `lch()` ist die wahrgenommene Helligkeit, die sich auf die "Helligkeit" bezieht, die wir visuell mit unseren Augen wahrnehmen. Dies unterscheidet sich von dem `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert misst das Chroma der Farbe (ungefähr die "Menge an Farbe"). Sein minimaler nützlicher Wert ist `0%` oder `0`, während sein Maximum theoretisch unbegrenzt ist (in der Praxis jedoch nicht mehr als `230`), wobei `100%` `150` entspricht.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (entspricht `0deg`), das den Farbtonwinkel der Farbe repräsentiert.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich je nach sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von `lch()`) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. Siehe das [Beispiel für Farbtöne in LCH](#farbtöne_in_lch) unten und die {{CSSXref("&lt;hue&gt;")}}-Referenzseite für weitere Details und Beispiele.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt der Standardwert 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Auswirkung von `none`.

#### Syntax für relative Werte

```plain
lch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **ursprüngliche Farbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die ursprüngliche Farbe kann in _jeder_ gültigen {{cssxref("&lt;color&gt;")}}-Syntax angegeben werden, einschließlich einer anderen relativen Farbe.

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `100`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (entspricht `0%`). Die Zahl `0` entspricht `0%` (Schwarz) und die Zahl `100` entspricht `100%` (Weiß). Dieser Wert gibt die Helligkeit der Farbe im CIELab-Farbraum an.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (ungefähr die "Menge an Farbe"). Sein minimaler nützlicher Wert ist `0%` oder `0`, sein Maximum ist theoretisch unbegrenzt (in der Praxis jedoch nicht mehr als `230`), wobei `100%` `150` entspricht.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (entspricht `0deg`), die den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe repräsentiert. Siehe das [Farbbsp.](#result_3) unten.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert der Alphakanalwert der ursprünglichen Farbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

#### Definieren von relativen Farbausgabekanal-Komponenten

Bei der Verwendung der relativen Farbsyntax innerhalb einer `lch()`-Funktion konvertiert der Browser die ursprüngliche Farbe in eine äquivalente Lch-Farbe (falls diese nicht bereits so angegeben ist). Die Farbe wird als drei separate Farbkanal-Werte definiert - `l` (Helligkeit), `c` (Chroma) und `h` (Farbton) - plus ein Alphakanal-Wert (`alpha`). Diese Kanal-Werte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanal-Werte verwendet zu werden:

- Der `l`-Kanalwert wird auf einen `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird auf einen `<number>` zwischen `0` und `150` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden betrachten wir einige Beispiele, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings liefert das erste das gleiche Ergebnis wie die ursprüngliche Farbe und das zweite ergibt eine Farbe, die nicht auf der ursprünglichen Farbe basiert. Sie erzeugen eigentlich keine relativen Farben! Diese würden Sie wahrscheinlich nie in einem realen Code verwenden, und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `lch()`-Syntax aufgenommen.

Beginnen wir mit einer ursprünglichen Farbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion gibt die gleiche Farbe wie die ursprüngliche Farbe aus — sie verwendet die `l`, `c` und `h` Kanalwerte der ursprünglichen Farbe als Ausgabekanalwerte:

```css
lch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe der Funktion ist die Farbe `lch(54.29 106.854 40.856)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine komplett andere Farbe aus, die nicht auf der ursprünglichen Farbe basiert:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

In dem obigen Fall ist die Ausgabefarbe `lch(29.6871 66.83 327.109)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der ursprünglichen Farbe:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

Dieses Beispiel:

- Konvertiert die `hsl()`-Ursprungsfarbe in eine äquivalente `lch()`-Farbe — `lch(54.29 106.854 40.856)`.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der äquivalenten Ursprung `lch()`-Farbe — `40.856`.
- Setzt die `L`- und `C`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der ursprünglichen Farbe basieren: `70` und `150` jeweils.

Die endgültige Ausgabefarbe ist `lch(70 150 40.856)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die ursprüngliche Farbe verwendet, wird die ursprüngliche Farbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe konvertiert, sodass sie in einer kompatiblen Weise dargestellt werden kann (d.h. mit den gleichen Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die ursprünglichen noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, nimmt er standardmäßig denselben Wert wie der Alphakanal der ursprünglichen Farbe an. Wenn der Alphakanal der ursprünglichen Farbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt sein Standardwert `1`. Daher betragen die Ursprung- und Ausgabefarbkanalwerte `1` für die oben genannten Beispiele.

Schauen wir uns einige Beispiele an, die Ursprung- und Ausgabefarbkanalwerte spezifisch angeben. Das erste gibt den Alphakanalwert der Ausgabe an, der dem Alphakanalwert der ursprünglichen Farbe entspricht, während das zweite einen anderen, nicht mit dem Ursprung-Alphakanalwert zusammenhängenden Ausgangs-Alphakanalwert spezifiziert.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: lch(54.29 106.854 40.856 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe wieder in das `lch()`-Äquivalent konvertiert — `lch(54.29 106.854 40.856)`. {{cssxref("calc")}}-Berechnungen werden auf die `L`-, `C`-, `H`- und `A`-Werte angewendet, was zu einer Ausgabefarbe von `lch(74.29 86.8541 0.856018 / 0.9)` führt:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprung-Farbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Helligkeit einer Farbe

Dieses Beispiel zeigt die Auswirkung von variierenden `L` (Helligkeit)-Werten der `lch()`-Funktionalnotation.

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

### Anpassung der Farbintensität über Chroma

Das folgende Beispiel zeigt die Wirkung von variierenden `C` (Chroma)-Werten der `lch()`-Funktionalnotation, wobei die Farben an Intensität abnehmen, wenn der `C`-Wert von vollständig gesättigt zu fast grau abnimmt.

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

Bei den anfänglichen Ausgangsfarben Blau, Rot und Grün deklarieren wir sukzessiv kleinere Chromawerte: beginnend mit voller Farbsättigung bei dem höchsten Wert von `150` (entsprechend `100%`) bis hin zu `3` (entsprechend `2%`), was für alle Farben fast grau ist.

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

Wenn wir `0` anstelle von `3` und `2%` mit denselben Helligkeitswerten verwendet hätten, wären alle Farben in diesem Beispiel derselbe Grauton gewesen. In diesem Beispiel sind sie fast grau.

### Farbtöne in LCH

Das folgende Beispiel zeigt Farbfelder mit verschiedenen `H` (Farbton)-Werten der `lch()`-Funktionalnotation.

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

Die Farbtonwinkel in `lch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für weitere Informationen. In `hsl()` repräsentiert der sRGB-Farbton `0deg` Rot. Jedoch entspricht im CIELab-Farbraum `0deg` Magenta, während Rot ungefähr `41deg` ist.

### Anpassung der Deckkraft mit lch()

Das folgende Beispiel zeigt den Effekt des variierens des `A` (Alpha)-Wertes der `lch()`-Funktionalnotation.
Die `red`- und `red-alpha`-Elemente überlagern das `#background-div`-Element, um die Wirkung der Deckkraft zu demonstrieren.
Geben Sie `A` einen Wert von `0.4`, um die Farbe 40% deckend zu machen.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben, um die Verwendung von relativen Farben zu demonstrieren, um die Helligkeit einer Farbe mit der `lch()`-Farb-Funktion zu ändern. Das mittlere `<div>` behält die ursprüngliche `--base-color` bei, während die linken und rechten `<div>`s aufgehellte und abgedunkelte Varianten der `--base-color` erhalten.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `lch()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 15% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 15% vom Helligkeitskanal subtrahiert.

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

{{ EmbedLiveSample("Using relative colors with lch()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- {{CSSXref("&lt;hue&gt;")}} Datentyp
- [LCH-Farben in CSS: was, warum und wie?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) von Lea Verou (2020)
