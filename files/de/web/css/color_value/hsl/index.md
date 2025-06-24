---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

> [!NOTE]
> Die funktionale Notation `hsla()` ist ein Alias für `hsl()`. Sie sind genau gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`** funktionale Notation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} entsprechend ihrer Komponenten _Farbton_, _Sättigung_ und _Helligkeit_ aus. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

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

Mit `hsl()` können _komplementäre Farben_ definiert werden, indem 180 Grad zum Farbtonwert addiert oder subtrahiert werden, da sie auf dem gleichen Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} positioniert sind. Wenn der Farbtonwinkel einer Farbe z.B. `10deg` beträgt, hat ihr Komplementär `190deg` als Farbtonwinkel.

## Syntax

```css
/* Absolute values */
hsl(120deg 75% 25%)
hsl(120 75 25) /* deg and % units are optional */
hsl(120deg 75% 25% / 60%)
hsl(none 75% 25%)

/* Relative values */
hsl(from green h s l / 0.5)
hsl(from #0000FF h s calc(l + 20))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))

/* Legacy 'hsla()' alias */
hsla(120deg 75% 25% / 60%)

/* Legacy format */
hsl(120, 75%, 25%)
hsl(120deg, 75%, 25%, 0.8)
```

> [!NOTE] > `hsl()`/`hsla()` können auch in einer älteren Form geschrieben werden, bei der alle Werte mit Kommas getrennt werden, z.B. `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der älteren, durch Kommas getrennten Syntax nicht erlaubt, das `deg` beim Farbtonwert ist optional, und die `%` Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Nachfolgend sind Beschreibungen der zulässigen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall) repräsentiert den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. Weitere Details und Beispiele finden Sie auf der Seite mit der Referenz für {{CSSXref("&lt;hue&gt;")}}.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert repräsentiert die Sättigung der Farbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig entsättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert repräsentiert die Helligkeit der Farbe. Hierbei ist `100%` weiß, `0%` schwarz und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanal-Wert der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt er standardmäßig 100%. Wenn enthalten, wird der Wert von einem Schrägstrich (`/`) gefolgt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}}-Werten serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall) repräsentiert den {{CSSXref("&lt;hue&gt;")}} Winkel der Ausgabefarbe.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dies repräsentiert die Sättigung der Ausgabefarbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig entsättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hierbei ist `100%` weiß, `0%` schwarz und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanal-Wert der Ausgabefarbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn enthalten, wird der Wert von einem Schrägstrich (`/`) gefolgt.

> [!NOTE]
> Um die vollständige Bandbreite der sichtbaren Farben darzustellen, wird die Ausgabe von relativen `hsl()`-Farbfunktionen in `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

#### Definition der relativen Farbausgangskanal-Komponenten

Bei Verwendung der relativen Farbsyntax innerhalb einer `hsl()`-Funktion wandelt der Browser die Ursprungsfarbe in eine gleichwertige HSL-Farbe um (sofern sie nicht bereits als solche angegeben ist). Die Farbe wird als drei diskrete Farbkanalwerte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus einem Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Wert wird auf einen {{cssxref("&lt;number&gt;")}} zwischen `0` und `360` aufgelöst, der den {{cssxref("&lt;hue&gt;")}} Gradwert der Ursprungsfarbe darstellt.
- Die `s` und `l` Werte werden jeweils auf einen `<number>` zwischen `0` und `100` aufgelöst, wobei `100` `100%` entspricht.
- Der `alpha`-Wert wird auf einen `<number>` zwischen `0` und `1` aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Weise ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um dies zu veranschaulichen.

In den beiden ersten Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, während das zweite Beispiel eine Farbe ausgibt, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! In einem echten Code könnte man diese wahrscheinlich einfach mit einem absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`-, `s`- und `l`-Kanalwerte der Ursprungsfarbe (`0`, `100%` und `50%`) als Ausgabewerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB `color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe, die auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Wandelt die Ursprungsfarbe (`rgb(255 0 0)`) in ein gleichwertiges `hsl()` um (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert des `hsl()`-Gegenstücks der Ursprungsfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue, nicht auf der Ursprungsfarbe basierende Werte: `30%` und `60%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, sodass sie in einer kompatiblen Weise dargestellt werden kann (d.h. mit den gleichen Kanälen).

In den bisher in diesem Abschnitt gezeigten Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem gleichen Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher sind die Alpha-Kanalwerte für die Ursprungs- und Ausgabefarben in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die Alpha-Kanalwerte für die Ursprungs- und Ausgabefarben angeben. Das erste Beispiel gibt den Alpha-Kanalwert der Ausgabefarbe als den gleichen wie den der Ursprungsfarbe an, während das zweite Beispiel einen anderen Alpha-Kanalwert der Ausgabefarbe angibt, der nicht mit dem Alpha-Kanalwert der Ursprungsfarbe zusammenhängt.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()` Ursprungsfarbe erneut in eine `hsl()` Darstellung konvertiert — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanäle auf `<number>`-Werte aufgelöst werden, müssen Sie diesen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Nutzung von hsl() mit conic-gradient()

Die `hsl()` Funktion funktioniert gut mit [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), da beide mit Winkeln arbeiten.

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

### Verwendung von relativen Farben mit hsl()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Varianten aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hsl()` Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal verändert, um das gewünschte Ergebnis durch eine `calc()` Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using relative colors with hsl()", "100%", "200") }}

### Ältere Syntax: durch Kommas getrennte Werte

Aus Legacy-Gründen akzeptiert die `hsl()` Funktion eine Form, bei der alle Werte durch Kommas getrennt sind.

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

### Ältere versus moderne Syntax

Das Beispiel zeigt, wie die `hsla()` Syntax ein Alias für `hsl()` ist; beide werden sowohl mit modernen als auch mit älteren (durch Kommas getrennten) Syntaxen unterstützt.

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

- {{CSSXref("&lt;hue&gt;")}} Datentyp
- [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farb-Funktionen
- [Farbton-Interpolation in `color-mix()`](/de/docs/Web/CSS/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbnennungen](/de/docs/Web/CSS/color_value)
- [sRGB Farbauswahl- und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Farbauswahl-Tool](https://apps.colorjs.io/picker/) von Lea Verou
