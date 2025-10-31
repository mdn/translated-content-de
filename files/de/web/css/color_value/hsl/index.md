---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

> [!NOTE]
> Die `hsla()` Funktionsnotation ist ein Alias für `hsl()`. Sie sind genau gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} gemäß ihren Komponenten _Farbton_, _Sättigung_ und _Helligkeit_ aus. Eine optionale _Alphakomponente_ stellt die Transparenz der Farbe dar.

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

Das Definieren von _komplementären Farben_ mit `hsl()` kann durch Hinzufügen oder Subtrahieren von 180 Grad vom Farbtonwert erfolgen, da sie auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} positioniert sind. Wenn zum Beispiel der Farbtonwinkel einer Farbe `10deg` ist, hat ihr Komplementär ein Farbtonwinkel von `190deg`.

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
> `hsl()`/`hsla()` kann auch in einer veralteten Form geschrieben werden, in der alle Werte mit Kommas getrennt sind, z.B. `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der durch Kommas getrennten veralteten Syntax nicht zulässig, das `deg` am Farbtonwert ist optional, und die `%`-Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Im Folgenden sind die Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den Farbtonwinkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. Weitere Details und Beispiele finden Sie auf der Referenzseite für {{CSSXref("&lt;hue&gt;")}}.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt die Sättigung der Farbe dar. Hier bedeutet `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert stellt die Helligkeit der Farbe dar. Hier steht `100%` für weiß, `0%` für schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, beträgt der Standardwert 100%. Wenn vorhanden, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}} Werten serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{CSSXref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{CSSXref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den Farbtonwinkel der Ausgabefarbe darstellt.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies stellt die Sättigung der Ausgabefarbe dar. Hier bedeutet `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies stellt die Helligkeit der Ausgabefarbe dar. Hier steht `100%` für weiß, `0%` für schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, beträgt der Standardwert der Alpha-Kanalwert der Ursprungsfarbe. Wenn vorhanden, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des vollständigen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hsl()` Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass beim Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) der Ausgabefarbwert als `color(srgb ...)` Wert zurückgegeben wird.

#### Definieren von Relativfarben-Ausgabekanal-Komponenten

Beim Verwenden der relativen Farbsyntax innerhalb einer `hsl()` Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbekanal-Werte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um sie bei der Definition der Ausgabekanalwerte zu verwenden:

- Der `h`-Wert wird auf einen {{CSSXref("&lt;number&gt;")}} zwischen `0` und `360`, einschließlich, aufgelöst, der den Gradwert der Ursprungsfarbe für {{CSSXref("&lt;hue&gt;")}} darstellt.
- Die `s`- und `l`-Werte werden jeweils auf einen `<number>` zwischen `0` und `100`, einschließlich, aufgelöst, wobei `100` `100%` entspricht.
- Der `alpha`-Wert wird auf einen `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden einige Beispiele vorgestellt, um diese zu veranschaulichen.

In den ersten beiden Beispielen verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe aus wie die Ursprungsfarbe, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie schaffen eigentlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einer echten Codebasis verwenden würden, und wahrscheinlich würden Sie stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `hsl()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe aus wie die Ursprungsfarbe — sie verwendet die `h`, `s` und `l` Kanalwerte der Ursprungsfarbe (`0`, `100%` und `50%`) als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte der Farbe und gibt eine ganz andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabe die sRGB `color()` Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein äquivalentes `hsl()` (`hsl(0 100% 50%)`).
- Setzt den `H` Kanalwert für die Ausgabefarbe auf den `H` Kanalwert des `hsl()` der Ursprungsfarbe — `0`.
- Setzt die `S` und `L` Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` bzw. `60%`.

Die finale Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, sodass sie in einer Weise dargestellt wird, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem Alphakanalwert der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), entspricht er standardmäßig `1`. Daher beträgt der Wert des Ursprungs- und Ausgabekanals in den obigen Beispielen `1`.

Sehen wir uns einige Beispiele an, die Werte für den Alphakanal der Ursprungs- und Ausgabefarbe angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabefarbe als den gleichen wie den Alphakanalwert der Ursprungfarbe an, während das zweite einen abweichenden Alphakanalwert der Ausgabefarbe angibt, der nicht auf dem Alphakanalwert der Ursprungsfarbe basiert.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()` Darstellung umgewandelt — `hsl(0 100% 50% / 0.8)`. {{CSSXref("calc")}} Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die finale Ausgabefarbe entspricht `hsl(60 80% 30% / 0.7)` im sRGB Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie bei Berechnungen auch Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Addieren eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von hsl() mit conic-gradient()

Die `hsl()` Funktion funktioniert gut mit [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), da beide sich mit Winkeln befassen.

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

### Verwendung relativer Farben mit hsl()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten aufgehellte bzw. abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden durch die Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird in eine `hsl()` Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal durch eine `calc()` Funktion modifiziert, um den gewünschten Effekt zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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
  background-color: hsl(from var(--base-color) h s calc(l + 20));
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hsl(from var(--base-color) h s calc(l - 20));
}

/* Use @supports to add in support for old syntax that requires % units to
   be specified in lightness calculations */
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

### Veraltete Syntax: durch Kommas getrennte Werte

Aus Gründen der Kompatibilität akzeptiert die `hsl()` Funktion eine Form, in der alle Werte durch Kommas getrennt sind.

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

### Veraltete versus moderne Syntax

Das Beispiel zeigt, wie die `hsla()` Syntax ein Alias für `hsl()` ist; beide werden sowohl in modernen als auch in veralteten (durch Kommas getrennten) Syntaxformen unterstützt.

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
- [Farbtoninterpolation in `color-mix()`](/de/docs/Web/CSS/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbanotationen](/de/docs/Web/CSS/color_value)
- [Farbformat-Konverterwerkzeug](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Farbwähler-Werkzeug](https://apps.colorjs.io/picker/) von Lea Verou
