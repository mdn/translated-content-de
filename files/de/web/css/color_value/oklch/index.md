---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: 71a0a05c518c3a4c2588f4c7e256b02605550295
---

{{CSSRef}}

Die **`oklch()`** Funktionalnotation drückt eine gegebene Farbe im Oklab-{{Glossary("color_space", "Farbraum")}} aus. `oklch()` ist die zylindrische Form von {{CSSXref("color_value/oklab", "oklab()")}}, wobei die gleiche `L`-Achse verwendet wird, allerdings mit den polaren Chroma (`C`)- und Farbton (`h`)-Koordinaten.

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

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Üblicherweise gilt in CSS, wenn Prozentwerte ein numerisches Äquivalent haben, dass `100%` gleich der Zahl `1` ist.
> Dies ist bei `oklch()` nicht der Fall. Hier entspricht `100%` der Zahl `100` für den `L`-Wert und `0.4` für den `C`-Wert.

#### Syntax der absoluten Werte

```plain
oklch(L C H[ / A])
```

Die Parameter sind wie folgt:

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). In diesem Fall entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` entspricht `100%` (weiß). Dieser Wert gibt die wahrgenommene Helligkeit oder "Leuchtkraft" der Farbe an.

    > [!NOTE]
    > Das `L` in `oklch()` steht für die wahrgenommene Helligkeit, die sich auf die "Leuchtkraft" bezieht, die wir visuell mit unseren Augen wahrnehmen. Dies unterscheidet sich vom `L` in `hsl()`, wo es die Helligkeit im Vergleich zu anderen Farben darstellt.

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert ist ein Maß für das Chroma der Farbe (ungefähr das Maß für die "Menge an Farbe"). Sein minimal sinnvoller Wert ist `0`, während der maximale theoretisch unbeschränkt ist (in der Praxis jedoch `0.5` nicht überschreitet). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (gleichbedeutend mit `0deg` in diesem Fall), welches den Farbwinkel der {{CSSXref("&lt;hue&gt;")}} der Farbe repräsentiert.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich über die sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von `oklch()`) Farbräumen. Siehe das Beispiel zu [Farbtönen in `oklch()`](#farbtöne_in_oklch) unten und die {{CSSXref("&lt;hue&gt;")}} Referenzseite für mehr Details und Beispiele.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig 100%. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) eingeführt.

> [!NOTE]
> Weitere Informationen über die Wirkung von `keine` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Syntax der relativen Werte

```plain
oklch(from <color> L C H[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann eine beliebige gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `L`

  - : Eine {{CSSXref("&lt;number&gt;")}} zwischen `0` und `1`, eine {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dies repräsentiert den Helligkeitswert der Ausgabefarbe. Hier entspricht die Zahl `0` `0%` (schwarz) und die Zahl `1` `100%` (weiß).

- `C`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;percentage&gt;")}}, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). Dieser Wert repräsentiert den Chroma-Wert der Ausgabefarbe (ungefähr das Maß für die "Menge an Farbe"). Sein minimal sinnvoller Wert ist `0`, während sein maximaler theoretisch unbeschränkt ist (in der Praxis jedoch nicht `0.5` überschreitet). In diesem Fall ist `0%` `0` und `100%` ist die Zahl `0.4`.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleichbedeutend mit `0deg` in diesem Fall), welches den Farbwinkel der {{CSSXref("&lt;hue&gt;")}} der Ausgabefarbe repräsentiert. Siehe eine [Beispielübersicht verschiedener Farbtöne](#result_3) im Abschnitt [Beispiele](#beispiele) unten.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) eingeführt.

#### Definition von relativen Farb-Ausgabekanal-Komponenten

Bei der Verwendung der relativen Farbsyntax innerhalb einer `oklch()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente Oklch-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `l` (Helligkeit), `c` (Chroma), und `h` (Farbton) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `l`-Kanalwert wird auf ein `<number>` zwischen `0` und `1` aufgelöst, einschließlich.
- Der `c`-Kanalwert wird auf ein `<number>` zwischen `0` und `0.4` aufgelöst, einschließlich.
- Der `h`-Kanalwert wird auf ein `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird auf ein `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere unterschiedliche Weisen ausgedrückt werden. Unten werden wir einige Beispiele studieren, um dies zu veranschaulichen.

In den ersten zwei Beispielen unten verwenden wir die relative Farbsyntax. Allerdings liefert das erste Beispiel die gleiche Farbe wie die Ursprungsfarbe, und das zweite exampleine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich niemals in einem realen Codeset verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die Syntax der relativen `oklch()` eingefügt.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rot`). Die folgende Funktion liefert die gleiche Farbe wie die Ursprungsfarbe — sie verwendet die `l`, `c`, und `h` Kanalwerte der Ursprungsfarbe (`0.627966`, `0.257704`, und `29.2346`) als die Ausgabekanalwerte:

```css
oklch(from hsl(0 100% 50%) l c h)
```

Die Ausgabe dieser Funktion ist die Farbe `oklch(0.627966 0.257704 29.2346)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und liefert eine völlig andere Farbe, die nicht auf der Ursprungsfarbe basiert:

```css
oklch(from hsl(0 100% 50%) 42.1% 0.25 328.363)
```

In dem obigen Fall ist die Ausgabefarbe `oklch(0.421 0.25 328.363)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
oklch(from hsl(0 100% 50%) 0.8 0.4 h)
```

Dieses Beispiel:

- Wandelt die `hsl()` Ursprungsfarbe in eine äquivalente `oklch()` Farbe um — `oklch(0.627966 0.257704 29.2346)`.
- Setzt den `H` Kanalwert für die Ausgabefarbe auf den des `H` Kanalwerts der äquivalenten Ursprungs-`oklch()` — `29.2346`.
- Setzt die `L` und `C` Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `0.8` und `0.4` jeweils.

Die endgültige Ausgabefarbe ist `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie auf eine mit dem Kanal identische Weise dargestellt werden kann.

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig demselben Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), entspricht er `1`. Daher sind die Ursprungs- und Ausgabefarb-Alphakanalwerte `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarb-Alphakanalwerte spezifizieren. Das erste Beispiel spezifiziert den Alphakanalwert der Ausgabe als identisch mit dem der Ursprungsfarbe, während das zweite einen anderen, nicht mit dem der Ursprungsfarbe verbundenen Ausgabefarb-Alphakanalwert spezifiziert.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Computed output color: oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe wieder in das äquivalente `oklch()` umgewandelt — `oklch(0.627966 0.257704 29.2346)`. {{cssxref("calc")}} Berechnungen werden auf die `L`, `C`, `H`, und `A` Werte angewendet, was zu einer Ausgabefarbe von `oklch(0.827966 0.357704 9.23462 / 0.9)` führt:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarb-Kanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einer `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassung der Helligkeit einer Farbe

Dieses Beispiel zeigt die Wirkung der Variation des `L` (Helligkeit)-Wertes der `oklch()`-Funktionalnotation.

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

### Anpassung der Farbintensität über Chroma

Folgendes Beispiel zeigt die Auswirkung der Variation des `C` (Chroma)-Wertes der `oklch()` Notation, wobei die Farben an Intensität verlieren, wenn der `C`-Wert von voll gesättigt bis fast grau abnimmt.

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

Mit den anfänglichen Startfarben Blau, Rot und Grün deklarieren wir schrittweise kleinere Werte für Chroma auf ihnen: beginnend bei voller Farbsättigung mit dem hohen Wert von `0.4` (entspricht `100%`) bis auf `0.01` (entspricht `2%`), was für alle Farben fast grau ist.

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

{{EmbedLiveSample("Anpassung der Farbintensität über Chroma", '', '200')}}

Wenn wir `0` statt `0.01` und `2%` mit denselben Helligkeitswerten verwendet hätten, wären alle Farben dieselbe Grauschattierung. In diesem Beispiel sind sie fast grau.

### Farbtöne in oklch

Das folgende Beispiel zeigt Farbmuster mit unterschiedlichen `H` (Farbton)-Werten der `oklch()`-Notation.

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

{{EmbedLiveSample("Farbtöne in oklch")}}

Die Winkel der Farben in `oklch()` unterscheiden sich von denen in {{CSSXref("color_value/hsl", "hsl()")}}. Siehe {{cssxref("hue")}} für weitere Informationen. In `hsl()` repräsentiert die sRGB Farbe `0deg` Rot. Im CIELab-Farbraum jedoch entspricht `0deg` Magenta, während Rot ungefähr bei `41deg` liegt.

### Anpassung des Alphawerts einer Farbe

Das folgende Beispiel zeigt die Auswirkung der Variation des `A` (Alpha)-Wertes der `oklch()` Farbfunktion.
Die Elemente `red` und `red-alpha` überlappen das Element `#background-div`, um die Wirkung der Opazität zu demonstrieren.
Wenn `A` den Wert `0.4` erhält, macht es die Farbe 40% opak.

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

{{EmbedLiveSample("Anpassung des Alphawerts einer Farbe")}}

### Verwendung von relativen Farben mit oklch()

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit verschiedenen Hintergrundfarben gestylt. Das mittlere Element erhält die unveränderte `--base-color`, während die linken und rechten mittels einer aufgehellten und abgedunkelten Variante dieser `--base-color` gestaltet werden.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `oklch()`-Funktion übergeben, und die Ausgabefarben haben ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat `0.15` (15%) zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat `0.15` (15%) vom Helligkeitskanal subtrahiert.

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

{{ EmbedLiveSample("Verwendung von relativen Farben mit oklch()", "100%", "200") }}

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
- [Interaktiver Beitrag zum OKLCH Farbraum](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH in CSS: warum wir RGB und HSL verlassen haben](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Ein wahrnehmungsorientierter Farbraum für die Bildverarbeitung](https://bottosson.github.io/posts/oklab/) (2020)
