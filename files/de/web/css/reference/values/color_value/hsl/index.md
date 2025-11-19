---
title: hsl()
slug: Web/CSS/Reference/Values/color_value/hsl
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

> [!NOTE]
> Die `hsla()` Funktionsnotation ist ein Alias für `hsl()`. Sie sind genau äquivalent. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} basierend auf ihren Komponenten _Farbton_, _Sättigung_ und _Helligkeit_ aus. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

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

Komplementärfarben mit `hsl()` zu definieren, kann durch Hinzufügen oder Subtrahieren von 180 Grad zum Farbtonwert erfolgen, da sie auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} positioniert sind. Zum Beispiel hat eine Farbe mit einem Farbtonwinkel von `10deg` eine Komplementärfarbe mit einem Farbtonwinkel von `190deg`.

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
> `hsl()`/`hsla()` kann auch in einer älteren Form geschrieben werden, in der alle Werte durch Kommata getrennt sind, wie `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist im komma-getrennten älteren Syntax nicht erlaubt, das `deg` beim Farbtonwert ist optional, und die `%` Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Nachfolgend sind Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den Farbräumen sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Siehe die {{CSSXref("&lt;hue&gt;")}} Referenzseite für weitere Details und Beispiele.

- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert repräsentiert die Sättigung der Farbe. Hier ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dieser Wert repräsentiert die Helligkeit der Farbe. Hier ist `100%` weiß, `0%` ist schwarz und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}} Werten serialisiert. Die Werte der rot, grün, und blau Komponenten können in der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann eine _beliebige_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall), das den Ausgabefarbfarbe {{CSSXref("&lt;hue&gt;")}} Winkel repräsentiert.
- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dies repräsentiert die Sättigung der Ausgabefarbe. Hier ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hier ist `100%` weiß, `0%` ist schwarz und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert der Alpha-Kanal-Wert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Zur vollständigen Darstellung des gesamten Spektrums sichtbarer Farben wird die Ausgabe der relativen `hsl()` Farb Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abrufen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) zurückgibt.

#### Definieren der Ausgabekanal-Komponenten relativer Farben

Wenn die relative Farbsyntax innerhalb einer `hsl()` Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkunkanal-Werte definiert — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus ein Alpha-Kanal-Wert (`alpha`). Diese Kanalswerte können innerhalb der Funktion verwendet werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Der `h` Wert wird zu einer {{cssxref("&lt;number&gt;")}} zwischen `0` und `360` aufgelöst, einschließlich, der die {{cssxref("&lt;hue&gt;")}} Grad-Wert der Ursprungsfarbe repräsentiert.
- Die `s` und `l` Werte werden jeweils zu einem `<number>` zwischen `0` und `100` aufgelöst, einschließlich, wobei `100` äquivalent zu `100%` ist.
- Der `alpha` Wert wird zu einem `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen wirklich keine relativen Farben! In einer echten Codebasis würden Sie diese wahrscheinlich nicht verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt gewählt, um die relative `hsl()` Syntax zu lernen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (äquivalent zu `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `s`, und `l` Kanalwerte (`0`, `100%`, und `50%`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarben-Kanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

Im obigen Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()` Äquivalent (`hsl(0 100% 50%)`).
- Setzt den `H` Kanalwert für die Ausgabefarbe auf den `h` Kanalwert der `hsl()` Äquivalent der Ursprungsfarbe — `0`.
- Setzt die `S` und `L` Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` und `60%`, beziehungsweise.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie auf eine kompatible Weise dargestellt werden kann (d.h. unter Verwendung der gleichen Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle für sowohl die Ursprungs- als auch die Ausgabefarben nicht explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, ist der Standardwert derselbe wie der Alpha-Kanalwert der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Ursprungs- und Ausgabekanalwerte für die obigen Beispiele `1`.

Werfen wir einen Blick auf einige Beispiele, die die Ursprungs- und Ausgabekanalwert ausdrücklich angeben. Das erste gibt den Alpha-Kanalwert der Ausgabe als denselben Wert wie den der Ursprungsfarbe an, während das zweite einen anderen Ausgabekanalwert, der nicht mit dem der Ursprungsfarbe zusammenhängt, angibt.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()` Ursprungsfarbe erneut in eine `hsl()` Repräsentation umgewandelt — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `S`, `L`, und `A` Werte angewendet. Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>` Werten aufgelöst werden, müssen Sie beim Verwenden von Berechnungen Zahlen zu ihnen hinzuzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formal Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von hsl() mit conic-gradient()

Die `hsl()` Funktion funktioniert gut mit [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient), da beide mit Winkeln arbeiten.

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

Dieses Beispiel stylt drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere Element erhält die unveränderte `--base-color`, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `hsl()` Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% hinzugefügt zum Helligkeitskanal, und die abgedunkelte Farbe hat 20% subtrahiert.

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

### Ältere Syntax: kommegetrennte Werte

Aus älteren Gründen akzeptiert die `hsl()` Funktion eine Form, in der alle Werte durch Kommata getrennt werden.

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

Das Beispiel zeigt, wie die `hsla()` Syntax ein Alias für `hsl()` ist; beide werden sowohl in modernen als auch älteren (komma-getrennten) Notationen unterstützt.

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
- [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Farb Funktionen
- [Farbton Interpolation in `color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbschreibweisen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Tool zur Konvertierung von Farbformaten](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [Farbwähler Tool](https://apps.colorjs.io/picker/) von Lea Verou
