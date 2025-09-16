---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

> [!NOTE]
> Die `hsla()`-Funktionsnotation ist ein Alias für `hsl()`. Sie sind absolut gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`**-Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}}-{{Glossary("color_space", "Farbraum")}} gemäß ihren _Farbton_, _Sättigung_ und _Helligkeit_-Komponenten aus. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

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

Komplementärfarben können mit `hsl()` definiert werden, indem 180 Grad zum Farbtonwert hinzugefügt oder davon subtrahiert werden, da sie auf dem gleichen Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} positioniert sind. Zum Beispiel, wenn der Farbtonwinkel einer Farbe `10deg` ist, hat ihre Komplementärfarbe `190deg` als Farbtonwinkel.

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
> `hsl()`/`hsla()` kann auch in einer älteren Form geschrieben werden, bei der alle Werte durch Kommata getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der durch Kommata getrennten Syntax nicht erlaubt, das `deg` beim Farbtonwert ist optional, und die `%`-Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Unten sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`) repräsentierend den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräume. Siehe die {{CSSXref("&lt;hue&gt;")}}-Referenzseite für mehr Details und Beispiele.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Sättigung der Farbe. Hier ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dieser Wert repräsentiert die Helligkeit der Farbe. Hier ist `100%` weiß, `0%` ist schwarz, und `50%` ist „normal“.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentierend den Alpha-Kanalwert der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt er standardmäßig 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für mehr Informationen über die Wirkung von `none`.

> [!NOTE]
> Absolute `hsl()`-Farben werden als {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, eine {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe repräsentiert.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies repräsentiert die Sättigung der Ausgabefarbe. Hier ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hier ist `100%` weiß, `0%` ist schwarz, und `50%` ist „normal“.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentierend den Alpha-Kanalwert der Ausgabefarbe, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, beträgt er standardmäßig den Alpha-Kanalwert der Ursprungsfarbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des vollständigen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von `hsl()`-Funktionen mit relativen Farben zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Definition der Ausgabefarbkanalkomponenten für relative Farben

Wenn die relative Farbsyntax in einer `hsl()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei getrennte Farbkanalwerte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus ein Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Wert wird zu einem {{cssxref("&lt;number&gt;")}} zwischen `0` und `360`, einschließlich, aufgelöst, der den {{cssxref("&lt;hue&gt;")}}-Gradwert der Ursprungsfarbe darstellt.
- Die `s`- und `l`-Werte werden jeweils zu einem `<number>` zwischen `0` und `100`, einschließlich, aufgelöst, wobei `100` `100%` entspricht.
- Der `alpha`-Wert wird zu einem `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Bei der Definition einer relativen Farbe können die unterschiedlichen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Unten werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste liefert jedoch dieselbe Farbe wie die Ursprungsfarbe, und das zweite eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen keine wirklichen relativen Farben! In einem echten Code würden Sie diese wahrscheinlich nie verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`-, `s`- und `l`-Kanalwerte (`0`, `100%`, und `50%`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB-`color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert des `hsl()`-Äquivalents der Ursprungsfarbe – `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` bzw. `60%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanalwert der Ausgabefarbe nicht angegeben wird, übernimmt er standardmäßig denselben Wert wie der Alpha-Kanalwert der Ursprungsfarbe. Wenn der Alpha-Kanalwert der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher betragen die Alpha-Kanalwerte der Ursprungs- und Ausgabefarbe in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die Alpha-Kanalwerte für Ursprungs- und Ausgabefarbe angeben. Das erste spezifiziert den Alpha-Kanalwert der Ausgabe als denselben wie den der Ursprungsfarbe, während das zweite einen anderen Alpha-Kanalwert der Ausgabe angibt, der nicht mit dem der Ursprungsfarbe verbunden ist.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()`-Darstellung konvertiert — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB-Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen in Berechnungen Zahlen hinzugefügt werden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

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

### Verwendung von relativen Farben mit hsl()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit verschiedenen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während die linken und rechten aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert – die `--base-color`-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt durch eine `calc()`-Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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

### Altsyntax: durch Kommata getrennte Werte

Aus historischen Gründen akzeptiert die `hsl()`-Funktion eine Form, bei der alle Werte durch Kommata getrennt sind.

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

### Altsyntax versus moderne Syntax

Das Beispiel zeigt, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden sowohl in der modernen als auch in der älteren (komma-getrennten) Syntax unterstützt.

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
- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [sRGB-Farbwähler und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- [Farbwähler-Tool](https://apps.colorjs.io/picker/) von Lea Verou
