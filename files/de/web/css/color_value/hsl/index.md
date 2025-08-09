---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

> [!NOTE]
> Die funktionale Notation `hsla()` ist ein Alias für `hsl()`. Sie sind exakt gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`** funktionale Notation beschreibt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} gemäß ihrer _Farbton_- , _Sättigungs_- und _Helligkeits_komponenten. Eine optionale \_Alpha_-Komponente stellt die Transparenz der Farbe dar.

{{InteractiveExample("CSS Demo: hsl()")}}

```css interactive-example-choice
background: hsl(50 80% 40%);
```

```css interactive-example-choice
background: hsl(150deg 30% 60%);
```

```css interactive-example-choice
background: hsl(0.3turn 60% 45% / 0.7);
```

```css interactive-example-choice
background: hsl(0 80% 50% / 25%);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

Das Definieren von _komplementären Farben_ mit `hsl()` kann durch Addieren oder Subtrahieren von 180 Grad vom Farbtonwert erfolgen, da sie sich auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} befinden. Zum Beispiel, wenn der Farbtonwinkel einer Farbe `10deg` beträgt, hat ihre Komplementärfarbe `190deg` als Farbtonwinkel.

## Syntax

```css
/* Absolute values */
hsl(120deg 75% 25%)
hsl(120 75 25) /* deg and % units are optional */
hsl(120deg 75% 25% / 60%)
hsl(none 75% 25%)

/* Relative values */
hsl(from green h s l / 0.5)
hsl(from #123456 h s calc(l + 20))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))

/* Legacy 'hsla()' alias */
hsla(120deg 75% 25% / 60%)

/* Legacy format */
hsl(120, 75%, 25%)
hsl(120deg, 75%, 25%, 0.8)
```

> [!NOTE]
> `hsl()`/`hsla()` kann auch in einer älteren Form geschrieben werden, in der alle Werte durch Kommas getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der komma-separierten alten Syntax nicht erlaubt, das `deg` beim Farbtonwert ist optional, und die `%`-Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Nachfolgend sind Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräume. Siehe die {{CSSXref("&lt;hue&gt;")}}-Referenzseite für mehr Details und Beispiele.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert die Sättigung der Farbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig entsättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dieser Wert repräsentiert die Helligkeit der Farbe. Hierbei ist `100%` weiß, `0%` schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alpha-Kanal vorhanden ist. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt der Standardwert 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu der Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()`-Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}}-Werten serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **ursprüngliche Farbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die ursprüngliche Farbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe darstellt.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dies repräsentiert die Sättigung der Ausgabefarbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig entsättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hierbei ist `100%` weiß, `0%` schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alpha-Kanal vorhanden ist. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanalwert der ursprünglichen Farbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Farbenspektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hsl()`-Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) zurückgibt.

#### Definition von Komponenten des Relativfarben-Ausgabekanals

Bei der Verwendung der relativen Farbsyntax innerhalb einer `hsl()`-Funktion wandelt der Browser die ursprüngliche Farbe in eine äquivalente HSL-Farbe um (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei distincte Farbkanalwerte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus ein Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung und können beim Definieren der Ausgabefarbkanalwerte verwendet werden:

- Der `h`-Wert wird als ein {{cssxref("&lt;number&gt;")}} zwischen `0` und `360`, inklusive, aufgelöst, das den Gradwert des Farbtons der ursprünglichen Farbe darstellt.
- Die `s`- und `l`-Werte werden jeweils als ein `<number>` zwischen `0` und `100`, inklusive, aufgelöst, wobei `100` gleichbedeutend mit `100%` ist.
- Der `alpha`-Wert wird als ein `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten zwei Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel die gleiche Farbe wie die ursprüngliche Farbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der ursprünglichen Farbe basiert. Sie erzeugen tatsächlich keine relativen Farben! Sie würden diese vermutlich nie in einem echten Code verwenden und wahrscheinlich einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer ursprünglichen Farbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt die gleiche Farbe wie die ursprüngliche Farbe aus — sie verwendet die `h`-, `s`- und `l`-Kanalwerte (`0`, `100%` und `50%`) der ursprünglichen Farbe als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB-`color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der ursprünglichen Farbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der ursprünglichen Farbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die ursprüngliche Farbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der ursprünglichen `hsl()`-Äquivalentfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der ursprünglichen Farbe basieren: `30%` und `60%`, jeweils.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wird die ursprüngliche Farbe in den gleichen Farbmodell wie die Ausgabefarbe konvertiert, falls diese ein anderes Farbmodell verwendet, um sie in einer Weise darstellen zu können, die kompatibel ist (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt gezeigten Beispielen wurden die Alpha-Kanäle weder für die ursprünglichen noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem gleichen Wert wie der Alpha-Kanal der ursprünglichen Farbe. Wenn der Alpha-Kanal der ursprünglichen Farbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher sind die Alpha-Kanalwerte der ursprünglichen und der Ausgabefarbe `1` für die obigen Beispiele.

Betrachten wir einige Beispiele, die Alpha-Kanalwerte für die ursprüngliche und die Ausgabefarbe angeben. Das erste gibt an, dass der Alpha-Kanalwert der Ausgabefarbe derselbe ist wie der der ursprünglichen Farbe, während das zweite einen anderen, nicht mit dem ursprünglichen Alpha-Kanalwert im Zusammenhang stehenden Alpha-Kanalwert für die Ausgabefarbe angibt.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()`-Darstellung umgewandelt — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`, `S`, `L` und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB-Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungskanäle der Farbwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von hsl() mit conic-gradient()

Die `hsl()`-Funktion funktioniert gut mit [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), da beide mit Winkeln arbeiten.

```html hidden
<div></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}
```

#### Ergebnis

{{EmbedLiveSample("using_hsl_with_conic-gradient", "100%", 140)}}

### Verwenden von relativen Farben mit hsl()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Varianten Aufhellungen und Abdunkelungen dieser `--base-color` sind.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hsl()`-Funktion eingespeist, und die Ausgabefarbe hat ihren Helligkeitskanal verändert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zur Helligkeitskomponente hinzugefügt, während die abgedunkelte Farbe 20% davon subtrahiert hat.

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

/* As per the spec, s and l values should resolve to a number between 0-100
   However, Chrome 121+ incorrectly resolves them to numbers between 0-1
   hence currently using calculations like l + 0.2 instead of l + 20 */

#one {
  background-color: hsl(from var(--base-color) h s calc(l + 0.2));
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hsl(from var(--base-color) h s calc(l - 0.2));
}

/* Use @supports to add in support for old syntax that requires % units to
   be specified in lightness calculations. This is required for
   Safari 16.4+ */
@supports (color: hsl(from red h s calc(l - 20%))) {
  #one {
    background-color: hsl(from var(--base-color) h s calc(l + 20%));
  }

  #three {
    background-color: hsl(from var(--base-color) h s calc(l - 20%));
  }
}
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with hsl()", "100%", "200") }}

### Ältere Syntax: Kommagetrennte Werte

Aus älteren Gründen akzeptiert die `hsl()`-Funktion eine Form, in der alle Werte mit Kommas getrennt sind.

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: hsl(0 100% 50% / 50%);
}

div.comma-separated {
  background-color: hsl(0, 100%, 50%, 0.5);
}
```

#### Ergebnis

{{EmbedLiveSample("legacy_syntax_comma-separated_values", "100%", 150)}}

### Ältere im Vergleich zu moderner Syntax

Das Beispiel demonstriert, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden sowohl in moderner als auch älterer (kommagetrennter) Syntax unterstützt.

#### HTML

```html
<div class="modern">HSL</div>
<div class="legacy">HSL</div>
<div class="modernWithAlpha">HSL</div>
<div class="modernHSLA">HSLA</div>
<div class="legacyHSLA">HSLA</div>
```

#### CSS

```css
div {
  width: 100px;
  min-height: 50px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  display: flex;
  gap: 20px;
}
```

```css
div.modern {
  background-color: hsl(90 80% 50%);
}

div.legacy {
  background-color: hsl(90, 80%, 50%);
}

div.modernWithAlpha {
  background-color: hsl(90 80% 50% / 50%);
}

div.modernHSLA {
  background-color: hsla(90 80% 50% / 50%);
}

div.legacyHSLA {
  background-color: hsla(90, 80%, 50%, 0.5);
}
```

#### Ergebnis

{{EmbedLiveSample("legacy_versus_modern_syntax", "100%", 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;hue&gt;")}}-Datentyp
- [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farb-Funktionen
- [Farbtoninterpolation in `color-mix()`](/de/docs/Web/CSS/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [sRGB-Farbwähler und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- [Farbwählwerkzeug](https://apps.colorjs.io/picker/) von Lea Verou
