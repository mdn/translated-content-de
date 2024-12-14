---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

> [!NOTE]
> Die `hsla()`-Funktionsnotation ist ein Alias für `hsl()`. Sie sind exakt gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`**-Funktionsnotation beschreibt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} anhand der Komponenten _Farbton_ (hue), _Sättigung_ (saturation) und _Helligkeit_ (lightness). Ein optionaler _Alpha_-Wert repräsentiert die Transparenz der Farbe.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Komplementärfarben mit `hsl()` zu definieren, kann durch Hinzufügen oder Subtrahieren von 180 Grad zum Farbtonwert erfolgen, da sie sich auf demselben Durchmesser des {{Glossary("color_wheel", "Farbkreises")}} befinden. Zum Beispiel, wenn der Farbtonwinkel einer Farbe `10deg` beträgt, hat ihr Komplementär `190deg` als Farbtonwinkel.

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

> **Hinweis:** `hsl()`/`hsla()` kann auch in einer alten Form geschrieben werden, bei der alle Werte durch Kommas getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der durch Kommas getrennten alten Syntax nicht zulässig, das `deg` beim Farbtonwert ist optional, und die `%`-Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wert-Syntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den Farbton-Winkel ({{CSSXref("&lt;hue&gt;")}}) der Farbe repräsentiert.

    > [!NOTE]
    > Die Winkelschritte, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Weitere Details und Beispiele finden Sie auf der Referenzseite zu {{CSSXref("&lt;hue&gt;")}}.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig zu `0%`). Dieser Wert repräsentiert die Sättigung der Farbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt ist (grau).
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig zu `0%`). Dieser Wert repräsentiert die Helligkeit der Farbe. Hierbei ist `100%` weiß, `0%` schwarz und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alphakanal anzugeben. Wenn der `A`-Wert nicht explizit angegeben wird, ist der Standardwert 100%. Ist er vorhanden, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Weitere Informationen über die Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()`-Farben werden in {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

#### Relative Wert-Syntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichwertig zu `0deg`), das den Farbton-Winkel ({{CSSXref("&lt;hue&gt;")}}) der Ausgabefarbe repräsentiert.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig zu `0%`). Dies repräsentiert die Sättigung der Ausgabefarbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt ist (grau).
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig zu `0%`). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hierbei ist `100%` weiß, `0%` schwarz und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` mit `0%` (vollständig transparent) und `1` mit `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alphakanal anzugeben. Wenn der `A`-Wert nicht explizit angegeben wird, entspricht er dem Alphakanalwert der Ursprungsfarbe. Ist er vorhanden, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hsl()`-Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) zurückgibt.

#### Definition von Komponenten des Ausgabekanals einer relativen Farbe

Bei der Verwendung der relativen Farbsyntax innerhalb einer `hsl()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei separate Farbkanalwerte — `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) — plus einem Alphakanalwert (`alpha`) definiert. Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Wert wird auf eine {{cssxref("&lt;number&gt;")}} zwischen `0` und `360`, inklusive, gelöst, die den Farbton-Wert der Ursprungsfarbe in Grad repräsentiert.
- Die `s`- und `l`-Werte werden je auf eine `<number>` zwischen `0` und `100`, inklusive, gelöst, wobei `100` `100%` entspricht.
- Der `alpha`-Wert wird auf eine `<number>` zwischen `0` und `1`, inklusive, gelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Nachfolgend werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Allerdings gibt das erste Beispiel die gleiche Farbe wie die Ursprungsfarbe aus und das zweite Beispiel ergibt eine Farbe, die sich überhaupt nicht auf die Ursprungsfarbe stützt. Sie erzeugen eigentlich keine relativen Farben! Wahrscheinlich würden Sie diese niemals in einem realen Code nutzen und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen der relativen `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (gleichwertig zu `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `s` und `l`-Kanalwerte (`0`, `100%` und `50%`) der Ursprungsfarbe als Ausgabewerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Diese Funktion gibt die sRGB `color()`-Entsprechung von `hsl(0 100% 50%)` zurück: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe die sRGB `color()`-Entsprechung von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert der Ausgabefarbe auf den `H`-Wert der `hsl()`-Äquivalent-Ursprungsfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` und `60%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, um eine kompatible Darstellung zu ermöglichen (d. h. unter Verwendung derselben Kanäle).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarbe explizit angegeben. Wenn der Ausgabefarb-Alphakanal nicht angegeben wird, entspricht er dem gleichen Wert wie der Ursprungsfarb-Alphakanal. Wenn der Ursprungsfarb-Alphakanal nicht angegeben wird (und es keine relative Farbe ist), ist der Standardwert `1`. Daher sind die Ursprungs- und Ausgabefarb-Alphawerte in den oben genannten Beispielen `1`.

Betrachten wir einige Beispiele, die die Ursprungs- und Ausgabefarb-Alphawerte angeben. Das erste Beispiel gibt den Ausgabefarb-Alphakanalwert gleich dem Ursprungs-Alphakanalwert an, während das zweite Beispiel einen anderen Ausgabefarb-Alphakanalwert angibt, der nicht mit dem Ursprungs-Alphakanalwert zusammenhängt.

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
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie ihnen bei der Verwendung in Berechnungen Zahlen hinzufügen, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere Element erhält die unveränderte `--base-color`, während das linke und rechte Element aufgehellte bzw. abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe lässt ihren Helligkeitskanal modifizieren, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen, während Farbton und Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zur Helligkeit hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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

### Alte Syntax: kommaseparierte Werte

Aus alten Gründen akzeptiert die `hsl()`-Funktion eine Form, bei der alle Werte mit Kommas getrennt werden.

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

Das Beispiel zeigt, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden sowohl in modernen als auch in alten (kommaseparierten) Syntaxen unterstützt.

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
- [Liste aller Farbnotationen](/de/docs/Web/CSS/color_value)
- [sRGB Farb-Picker und Konverter-Werkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Color Picker Tool](https://apps.colorjs.io/picker/) von Lea Verou
