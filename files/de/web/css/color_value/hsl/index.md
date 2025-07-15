---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

> [!NOTE]
> Die `hsla()`-Funktionalnotation ist ein Alias für `hsl()`. Sie sind exakt gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`**-Funktionalnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}}-{{Glossary("color_space", "Farbraum")}} entsprechend ihren Komponenten _Farbton_, _Sättigung_ und _Helligkeit_ aus. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

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

Komplementärfarben mit `hsl()` zu definieren, kann durch Hinzufügen oder Subtrahieren von 180 Grad vom Farbtonwert erfolgen, da sie auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} positioniert sind. Zum Beispiel, wenn der Farbtonwinkel einer Farbe `10deg` beträgt, hat ihr Komplementär `190deg` als Farbtonwinkel.

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

> [!NOTE]
> `hsl()`/`hsla()` können auch in einer älteren Form geschrieben werden, in der alle Werte durch Kommas getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist im kommagetrennten alten Syntax nicht erlaubt, das `deg` beim Farbtonwert ist optional, und die `%` Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. Sehen Sie die {{CSSXref("&lt;hue&gt;")}} Referenzseite für mehr Details und Beispiele.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert repräsentiert die Sättigung der Farbe. Hier ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt ist (grau).
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert repräsentiert die Helligkeit der Farbe. Hier ist `100%` weiß, `0%` schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, ist der Standardwert 100%. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Lesen Sie [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen zur Wirkung von `none`.

> [!NOTE]
> Absolute `hsl()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}} Werten serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den Ausgabefarbton der {{CSSXref("&lt;hue&gt;")}}-Winkel darstellt.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies repräsentiert die Sättigung der Ausgabefarbe. Hier ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt ist (grau).
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hier ist `100%` weiß, `0%` schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Wert des `A`-Kanals nicht explizit angegeben wird, ist der Standardwert der Alphakanalwert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des vollständigen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hsl()` Farb Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Definition der Ausgabekanalkomponenten einer relativen Farbe

Wenn relative Farben Syntax innerhalb einer `hsl()`-Funktion verwendet wird, wandelt der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe um (wenn sie nicht bereits so angegeben ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `h` (Farbton), `s` (Sättigung), und `l` (Helligkeit) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Wert wird in einen {{cssxref("&lt;number&gt;")}}-Wert zwischen `0` und `360`, inklusive, aufgelöst, der den {{cssxref("&lt;hue&gt;")}}-Gradwert der Ursprungsfarbe darstellt.
- Die `s`- und `l`-Werte werden jeweils in einen `<number>` zwischen `0` und `100`, inklusive, aufgelöst, wobei `100` gleich `100%` ist.
- Der `alpha`-Wert wird in einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend werden wir einige Beispiele betrachten, um dies zu illustrieren.

In den ersten beiden Beispielen unten verwenden wir relative Farben Syntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden wahrscheinlich nie in einer echten Codebasis verwendet werden und wahrscheinlich eher einen absoluten Farbwert nutzen. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`-, `s`- und `l`-Kanalwerte der Ursprungsfarbe (`0`, `100%`, und `50%`) als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB-äquivalente `color()` von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanäle der Farbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe das sRGB-äquivalente `color()` von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()` Äquivalent (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwerts des `hsl()` Äquivalents der Ursprungsfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` und `60%`, jeweils.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe in den Hintergrund konvertiert, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. mit denselben Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert wird, wird der gleiche Wert wie der Alphakanal der Ursprungsfarbe verwendet. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher haben die Ursprungs- und Ausgabefarben in den obigen Beispielen den Alphakanalwert `1`.

Betrachten wir einige Beispiele, die die Ursprungs- und Ausgabefarbkanalwerte spezifizieren. Das erste legt den Alphakanalwert der Ausgabe als denselben wie den der Ursprungsfarbe fest, während das zweite einen anderen Alphakanalwert für die Ausgabe festlegt, der nicht mit dem Alphakanalwert der Ursprung zu tun hat.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()`-Darstellung konvertiert — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von hsl() mit conic-gradient()

Die `hsl()`-Funktion funktioniert gut mit [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), da beide Winkel verwenden.

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

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere wird mit der unveränderten `--base-color` versehen, während das linke und rechte mit aufgehellten bzw. abgedunkelten Varianten dieser `--base-color` ausgestattet werden.

Diese Varianten werden mit relativen Farben definiert — die `--base-color`-[benutzerdefiniert Eigenschaft](/de/docs/Web/CSS/--) wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon abgezogen.

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

### Alte Syntax: kommagetrennte Werte

Aus Legacy-Gründen akzeptiert die `hsl()` Funktion eine Form, bei der alle Werte mit Kommas getrennt sind.

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

### Legacy versus moderne Syntax

Das Beispiel demonstriert, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden sowohl mit modernen als auch alten (kommagetrennten) Syntaxen unterstützt.

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
- [`lch()`](/de/docs/Web/CSS/color_value/lch) und [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Farb Funktionen
- [Farbton Interpolation in `color-mix()`](/de/docs/Web/CSS/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbnotierungen](/de/docs/Web/CSS/color_value)
- [sRGB-Farbwähler und Konvertierungs-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Farbwähler-Tool](https://apps.colorjs.io/picker/) von Lea Verou
