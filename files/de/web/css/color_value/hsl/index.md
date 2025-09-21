---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

> [!NOTE]
> Die `hsla()`-Funktion ist ein Alias für `hsl()`. Beide sind genau gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`**-Funktionsnotation beschreibt eine Farbe im {{Glossary("RGB", "sRGB")}}-{{Glossary("color_space", "Farbraum")}} anhand ihrer _Farbton_, _Sättigung_ und _Helligkeit_-Komponenten. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

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

Ergänzende Farben mit `hsl()` zu definieren, kann durch das Hinzufügen oder Subtrahieren von 180 Grad vom Farbtonwert erfolgen, da sie sich auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} befinden. Zum Beispiel, wenn der Farbtonwinkel einer Farbe `10deg` ist, hat ihre Ergänzungsfarbe `190deg` als Farbtonwinkel.

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
> `hsl()`/`hsla()` können auch in einer alten Form geschrieben werden, in der alle Werte mit Kommas getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der `none`-Wert ist in der komma-getrennten alten Syntax nicht erlaubt, die `deg` beim Farbtonwert ist optional, und die `%`-Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe repräsentiert.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich je nach Farbraum: sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Weitere Details und Beispiele finden Sie auf der {{CSSXref("&lt;hue&gt;")}}-Referenzseite.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert repräsentiert die Sättigung der Farbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert repräsentiert die Helligkeit der Farbe. Hierbei ist `100%` weiß, `0%` schwarz und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal zu spezifizieren. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er auf 100% gesetzt. Wenn er angegeben ist, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()`-Farben werden in {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe repräsentiert.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies repräsentiert die Sättigung der Ausgabefarbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hierbei ist `100%` weiß, `0%` schwarz und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal zu spezifizieren. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er auf den Alphakanalwert der Ursprungsfarbe gesetzt. Wenn er angegeben ist, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Um die Darstellung des vollen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe der relativen `hsl()`-Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass beim Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgegeben wird.

#### Definition von Ausgabekanal-Komponenten relativer Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `hsl()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe (wenn diese nicht bereits als solche spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um verwendet zu werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Der `h`-Wert wird zu einer {{cssxref("&lt;number&gt;")}} zwischen `0` und `360`, einschließlich, aufgelöst, die den {{cssxref("&lt;hue&gt;")}}-Gradwert der Ursprungsfarbe repräsentiert.
- Die `s`- und `l`-Werte werden jeweils zu einem `<number>` zwischen `0` und `100`, einschließlich, aufgelöst, wobei `100` gleichwertig mit `100%` ist.
- Der `alpha`-Wert wird zu einem `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden unten stehenden Beispielen verwenden wir die relative Farbsyntax. Allerdings gibt das erste dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen also keine echten relativen Farben! Es ist unwahrscheinlich, dass Sie diese je in einer realen Codebasis verwenden würden, und würden wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen der relativen `hsl()`-Syntax hinzugefügt.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`-, `s`- und `l`-Kanalwerte der Ursprungsfarbe (`0`, `100%` und `50%`) als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB `color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Farbausgabekanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf denjenigen der `hsl()`-Äquivalent `H`-Kanalwert der Ursprungsfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` bzw. `60%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, um auf eine Weise dargestellt zu werden, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden keine Alphakanäle für die Ursprungs- oder Ausgabefarben explizit spezifiziert. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert ist, entspricht er standardmäßig dem Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` gesetzt. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarbe `1` für die obigen Beispiele.

Betrachten wir einige Beispiele, bei denen die Alphakanalwerte der Ursprungs- und Ausgabefarbe spezifiziert sind. Das erste Beispiel gibt den Alphakanalwert der Ausgabe als gleich dem Alphakanalwert der Ursprungsfarbe an, während das zweite Beispiel einen anderen Alphakanalwert der Ausgabe anzeigt, der nicht mit dem Alphakanalwert der Ursprungsfarbe zusammenhängt.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()`-Repräsentation konvertiert — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB-Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanäle der Ursprungsfarbe als `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Es funktioniert zum Beispiel nicht, einen `<percentage>` zu einem `<number>` hinzuzufügen.

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

### Verwendung relativer Farben mit hsl()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit verschiedenen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt mit einer `calc()`-Funktion zu erreichen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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

### Alte Syntax: durch Kommas getrennte Werte

Aus historischen Gründen akzeptiert die `hsl()`-Funktion eine Form, in der alle Werte durch Kommas getrennt sind.

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

### Alte versus moderne Syntax

Das Beispiel zeigt, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden unterstützt, sowohl in der modernen als auch in der alten (durch Kommata getrennten) Syntax.

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
- [Liste aller Farbschreibweisen](/de/docs/Web/CSS/color_value)
- [Werkzeug zur Konvertierung von Farbformaten](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Farbauswahl-Tool](https://apps.colorjs.io/picker/) von Lea Verou
