---
title: CSS-Funktion `hsl()`
short-title: hsl()
slug: Web/CSS/Reference/Values/color_value/hsl
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

> [!NOTE]
> Die funktionale Schreibweise `hsla()` ist ein Alias für `hsl()`. Sie sind exakt gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die funktionale Schreibweise **`hsl()`** drückt eine Farbe im {{Glossary("RGB", "sRGB")}}-{{Glossary("color_space", "Farbraum")}} anhand ihrer Komponenten für _Farbton_, _Sättigung_ und _Helligkeit_ aus. Eine optionale _Alpha_-Komponente stellt die Transparenz der Farbe dar.

_Komplementärfarben_ können mit `hsl()` definiert werden, indem dem Farbtonwert 180 Grad hinzugefügt oder davon abgezogen werden, da sie auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} liegen. Wenn der Farbtonwinkel einer Farbe beispielsweise `10deg` beträgt, hat ihre Komplementärfarbe `190deg` als Farbtonwinkel.

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
> `hsl()`/`hsla()` kann auch in einer älteren Form geschrieben werden, bei der alle Werte durch Kommas getrennt sind, beispielsweise `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der durch Kommas getrennten älteren Syntax nicht zulässig, `deg` beim Farbtonwert ist optional, und die Einheiten `%` sind für die Werte für Sättigung und Helligkeit erforderlich.

### Werte

Im Folgenden finden Sie Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors).

#### Absolute Wertsytax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den {{cssxref("hue")}}-Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Weitere Details und Beispiele finden Sie auf der Referenzseite zu {{cssxref("hue")}}.

- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert stellt die Sättigung der Farbe dar. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert stellt die Helligkeit der Farbe dar. Hierbei ist `100%` weiß, `0%` schwarz und `50%` „normal“.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Wert des Alphakanals der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Kanalwert `A` nicht explizit angegeben wird, ist sein Standardwert 100 %. Wenn er enthalten ist, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()`-Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}}-Werten serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist beim Definieren einer relativen Farbe immer enthalten, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den {{cssxref("hue")}}-Winkel der Ausgabefarbe darstellt.
- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies stellt die Sättigung der Ausgabefarbe dar. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies stellt die Helligkeit der Ausgabefarbe dar. Hierbei ist `100%` weiß, `0%` schwarz und `50%` „normal“.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Wert des Alphakanals der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Kanalwert `A` nicht explizit angegeben wird, entspricht sein Standardwert dem Alphakanalwert der Ursprungsfarbe. Wenn er enthalten ist, wird dem Wert ein Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe relativer `hsl()`-Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die Eigenschaft [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) die Ausgabefarbe als Wert [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) zurückgibt.

#### Definieren relativer Ausgabefarbkanalkomponenten

Bei Verwendung relativer Farbsytax innerhalb einer `hsl()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine gleichwertige HSL-Farbe, falls sie nicht bereits als solche angegeben ist. Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — sowie als Alphakanalwert (`alpha`). Diese Kanalwerte werden innerhalb der Funktion verfügbar gemacht, um sie bei der Definition der Ausgabefarbkanalwerte zu verwenden:

- Der Wert `h` wird zu einer {{cssxref("&lt;number&gt;")}} zwischen einschließlich `0` und `360` aufgelöst, die den {{cssxref("hue")}}-Gradwert der Ursprungsfarbe darstellt.
- Die Werte `s` und `l` werden jeweils zu einer `<number>` zwischen einschließlich `0` und `100` aufgelöst, wobei `100` gleichwertig mit `100%` ist.
- Der Wert `alpha` wird zu einer `<number>` zwischen einschließlich `0` und `1` aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden betrachten wir einige Beispiele zur Veranschaulichung.

In den ersten beiden folgenden Beispielen verwenden wir die relative Farbsytax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen also eigentlich keine relativen Farben! In einer echten Codebasis würden Sie diese wahrscheinlich nie verwenden und stattdessen einfach einen absoluten Farbwert einsetzen. Wir haben diese Beispiele als Ausgangspunkt zum Lernen der relativen `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (gleichwertig mit `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die Kanalwerte `h`, `s` und `l` der Ursprungsfarbe (`0`, `100%` und `50%`) als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabefarbe dieser Funktion ist das sRGB-`color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine vollständig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

Im obigen Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent (`hsl(0 100% 50%)`).
- Setzt den Kanalwert `H` der Ausgabefarbe auf den Kanalwert `H` des `hsl()`-Äquivalents der Ursprungsfarbe — `0`.
- Setzt die Kanalwerte `S` und `L` der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: jeweils `30%` und `60%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe im Hintergrund in dasselbe Farbmodell wie die Ausgabefarbe konvertiert, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet. Dadurch kann sie auf kompatible Weise dargestellt werden, das heißt unter Verwendung derselben Kanäle.

In den bisher in diesem Abschnitt gezeigten Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht sein Standardwert dem Alphakanalwert der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und sie keine relative Farbe ist), ist sein Standardwert `1`. Daher sind die Alphakanalwerte für Ursprung und Ausgabe in den obigen Beispielen `1`.

Sehen wir uns einige Beispiele an, die Alphakanalwerte für Ursprung und Ausgabe angeben. Das erste legt fest, dass der Alphakanalwert der Ausgabe mit dem Alphakanalwert des Ursprungs identisch ist, während das zweite einen anderen Alphakanalwert für die Ausgabe angibt, der nicht mit dem Alphakanalwert des Ursprungs zusammenhängt.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()`-Darstellung konvertiert — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die Werte `H`, `S`, `L` und `A` angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB-Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanalwerte der Ursprungsfarbe zu `<number>`-Werten aufgelöst werden, müssen Sie ihnen bei Berechnungen Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von hsl() mit conic-gradient()

Die Funktion `hsl()` funktioniert gut mit [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient), da beide mit Winkeln arbeiten.

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

Dieses Beispiel formatiert drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird das unveränderte `--base-color` zugewiesen, während dem linken und rechten aufgehellte und abgedunkelte Varianten dieser `--base-color` zugewiesen werden.

Diese Varianten werden mithilfe relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird an eine `hsl()`-Funktion übergeben, und der Helligkeitskanal der Ausgabefarbe wird über eine `calc()`-Funktion verändert, um den gewünschten Effekt zu erzielen, während Farbton und Sättigung unverändert bleiben. Der aufgehellten Farbe werden 20 % zum Helligkeitskanal hinzugefügt, und bei der abgedunkelten Farbe werden 20 % davon abgezogen.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using relative colors with hsl()", "100%", "200") }}

### Ältere Syntax: durch Kommas getrennte Werte

Aus Gründen der Abwärtskompatibilität akzeptiert die Funktion `hsl()` eine Form, bei der alle Werte durch Kommas getrennt werden.

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

### Ältere gegenüber moderner Syntax

Das Beispiel zeigt, dass die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden sowohl mit moderner als auch mit älterer, durch Kommas getrennter Syntax unterstützt.

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

- Datentyp {{cssxref("hue")}}
- Farbfunktionen [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)
- [Farbtoninterpolation in `color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbnotationen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Werkzeug zur Konvertierung von Farbformaten](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [Farbauswahlwerkzeug](https://apps.colorjs.io/picker/) von Lea Verou
