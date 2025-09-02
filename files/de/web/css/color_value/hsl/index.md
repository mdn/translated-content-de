---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 97044daa61dbccde690d18e89396c729e23d5f5e
---

> [!NOTE]
> Die `hsla()` Funktionsnotation ist ein Alias für `hsl()`. Sie sind genau gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} aus, basierend auf den Komponenten _Farbton_, _Sättigung_ und _Helligkeit_. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

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

Die Definition von _komplementären Farben_ mit `hsl()` kann durch Addition oder Subtraktion von 180 Grad vom Farbtonwert erfolgen, da sie auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} positioniert sind. Beispielsweise, wenn der Farbtonwinkel einer Farbe `10deg` beträgt, hat ihre komplementäre Farbe `190deg` als Farbtonwinkel.

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
> `hsl()`/`hsla()` kann auch in einer älteren Form geschrieben werden, in der alle Werte durch Kommas getrennt sind, beispielsweise `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der durch Kommas getrennten älteren Syntax nicht erlaubt, das `deg` für den Farbtonwert ist optional, und die `%`-Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Im Folgenden sind Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0deg` in diesem Fall), das den Farbtonwinkel der Farbe darstellt {{CSSXref("&lt;hue&gt;")}}.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}} verwendet), CIELAB (von {{CSSXref("color_value/lch", "lch()")}} verwendet) und Oklab (von {{CSSXref("color_value/oklch", "oklch()")}} verwendet). Siehe die {{CSSXref("&lt;hue&gt;")}} Referenzseite für mehr Details und Beispiele.

- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dieser Wert repräsentiert die Sättigung der Farbe. Hier ist `100%` vollständig gesättigt, während `0%` völlig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dieser Wert repräsentiert die Helligkeit der Farbe. Hier ist `100%` weiß, `0%` ist schwarz und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}} Werten serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0deg` in diesem Fall), das den Farbtonwinkel der Ausgabefarbe darstellt {{CSSXref("&lt;hue&gt;")}}.
- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dies repräsentiert die Sättigung der Ausgabefarbe. Hier ist `100%` vollständig gesättigt, während `0%` völlig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hier ist `100%` weiß, `0%` ist schwarz und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alphakanalwert der Ursprungsfarbe. Wird er einbezogen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Das Relative `hsl()`-Farbfunktionen werden serialisiert zu `color(srgb)`, um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen. Das bedeutet, dass das Abfragen des Ausgabefarbenwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbenwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) zurückgibt.

#### Definition der Ausgabekanalkomponenten von relativen Farben

Wenn relative Farbsyntax in einer `hsl()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe (falls dies nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbe-kanalwerte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus ein Alphakanalwert (`alpha`). Diese Kanäle-Werte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarben-Kanalwerte verwendet zu werden:

- Der `h`-Wert wird zu einem {{cssxref("&lt;number&gt;")}} zwischen `0` und `360` aufgelöst, einschließlich, der den Farbton-Gradwert der Ursprungsfarbe repräsentiert.
- Die `s`- und `l`-Werte werden jeweils zu einem `<number>` zwischen `0` und `100` aufgelöst, einschließlich, wobei `100` `100%` entspricht.
- Der `alpha`-Wert wird zu einem `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf unterschiedliche Weise ausgedrückt werden. Unten werden wir einige Beispiele studieren, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Allerdings gibt das erste das gleiche Farbergebnis wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem echten Code verwenden, und Sie würden wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über relative `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `s` und `l` Kanalwerte der Ursprungsfarbe (`0`, `100%` und `50%`) als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das `color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In dem obigen Fall ist die Ausgabefarbe das `color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe auf der Grundlage der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert der Ausgabefarbe auf den `H`-Kanalwert des `hsl()`-Äquivalents der Ursprungsfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Austrittsfarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` und `60%`.

Die endgültige Ausgabe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell wie die Ausgabefarbe konvertiert, damit sie auf kompatible Weise dargestellt werden kann (d.h. mit denselben Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden für die Ursprungs- oder Ausgabefarben keine Alphakanäle explizit angegeben. Wenn der Ausgabefarb-Alphakanal nicht spezifiziert ist, übernimmt er standardmäßig denselben Wert wie der Ursprungsfarben-Alphakanal. Wenn der Ursprungsfarben-Alphakanal nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), übernimmt er standardmäßig `1`. Daher sind die Ursprungs- und Austritts-Alphakanalwerte in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarb-Alphakanalwerte spezifizieren. Das erste spezifiziert den Ausgabefarb-Alphakanal als den gleichen wie den der Ursprungsfarbe, während das zweite einen anderen Ausgabefarb-Alphakanalwert spezifiziert, der nicht mit dem Alphakanalwert der Ursprungsfarbe verwandt ist.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()`-Repräsentation konvertiert — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}} Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB-Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von hsl() mit conic-gradient()

Die Funktion `hsl()` funktioniert gut mit [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), da beide mit Winkeln arbeiten.

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

Dieses Beispiel stylt drei {{htmlelement("div")}} Elemente mit verschiedenen Hintergrundfarben. Das mittlere Element erhält die unveränderte `--base-color`, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

Aus veralteten Gründen akzeptiert die `hsl()` Funktion eine Form, in der alle Werte mit Kommas getrennt werden.

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

Das Beispiel demonstriert, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden sowohl in modernen als auch in veralteten (durch Kommas getrennten) Syntaxen unterstützt.

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
- [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farbfunktions
- [Farbtoninterpolation in `color-mix()`](/de/docs/Web/CSS/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbnennungen](/de/docs/Web/CSS/color_value)
- [sRGB-Farbauswahl und Umwandlungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Farbwähler-Werkzeug](https://apps.colorjs.io/picker/) von Lea Verou
