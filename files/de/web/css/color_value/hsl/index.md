---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

> [!NOTE]
> Die funktionale Notation `hsla()` ist ein Alias für `hsl()`. Sie sind genau gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`** funktionale Notation drückt eine Farbe im {{glossary("RGB", "sRGB")}}-{{glossary("color space", "Farbraum")}} gemäß ihren Komponenten _Farbton_, _Sättigung_ und _Helligkeit_ aus. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Konträrfarben mit `hsl()` können definiert werden, indem zum Farbtonwert 180 Grad hinzugefügt oder subtrahiert werden, da sie sich auf demselben Durchmesser des {{glossary("color wheel", "Farbkreises")}} befinden. Zum Beispiel hat eine Farbe mit einem Farbtonwinkel von `10deg` eine Komplementärfarbe mit einem Farbtonwinkel von `190deg`.

## Syntax

```css
/* Absolute Werte */
hsl(120deg 75% 25%)
hsl(120 75 25) /* Grad- und %-Einheiten sind optional */
hsl(120deg 75% 25% / 60%)
hsl(none 75% 25%)

/* Relative Werte */
hsl(from green h s l / 0.5)
hsl(from #0000FF h s calc(l + 20))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))

/* Veralteter 'hsla()'-Alias */
hsla(120deg 75% 25% / 60%)

/* Veraltetes Format */
hsl(120, 75%, 25%)
hsl(120deg, 75%, 25%, 0.8)
```

> **Hinweis:** `hsl()`/`hsla()` kann auch in einer veralteten Form geschrieben werden, bei der alle Werte durch Kommata getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der durch Kommata getrennten veralteten Syntax nicht zulässig, der `deg` auf dem Farbtonwert ist optional, und die `%`-Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Nachfolgend sind Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absoluter Wert-Syntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den Farbtonwinkel der Farbe repräsentiert.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB-Farbräumen (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Weitere Details und Beispiele finden Sie auf der Referenzseite {{CSSXref("&lt;hue&gt;")}}.

- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert repräsentiert die Sättigung der Farbe. `100%` ist vollständig gesättigt, während `0%` völlig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dieser Wert repräsentiert die Helligkeit der Farbe. `100%` ist weiß, `0%` ist schwarz und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alphakanal explizit anzugeben. Wird der `A`-Kanal-Wert nicht ausdrücklich angegeben, wird er standardmäßig auf 100 % gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()`-Farben werden in {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

#### Relative Wert-Syntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer dann verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann in _jeder_ gültigen {{cssxref("&lt;color&gt;")}}-Syntax angegeben werden, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0deg`), das den Ausgabefarbtonwinkel der Farbe repräsentiert.
- `S`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies repräsentiert die Sättigung der Ausgabefarbe. `100%` ist vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Eine {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall gleichwertig mit `0%`). Dies repräsentiert die Helligkeit der Ausgabefarbe. `100%` ist weiß, `0%` ist schwarz und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alphakanal explizit anzugeben. Wird der `A`-Kanal-Wert nicht ausdrücklich angegeben, wird er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird das Ergebnis der relativen `hsl()`-Farbfunktionen in `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwertes über die {{DOMxRef("HTMLElement.style")}}-Eigenschaft oder die {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}}-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) zurückgibt.

#### Definition der Ausgabe-Kanal-Komponenten der relativen Farben

Bei der Verwendung der relativen Farbsyntax innerhalb einer `hsl()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine gleichwertige HSL-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert – `h` (Farbton), `s` (Sättigung) und `l` (Helligkeit) – sowie ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Wert wird auf eine {{cssxref("&lt;number&gt;")}} zwischen `0` und `360` aufgelöst, inklusive, die den Ursprungsfarbtonwinkel repräsentiert.
- Die Werte `s` und `l` werden jeweils auf eine `<number>` zwischen `0` und `100` aufgelöst, inklusive, wobei `100` 100 % entspricht.
- Der `alpha`-Wert wird auf eine `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden untersuchen wir einige Beispiele, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen wirklich keine relativen Farben! Sie würden wahrscheinlich diese in einem echten Codebase nicht verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus – sie verwendet die `h`, `s` und `l`-Kanalwerte der Ursprungsfarbe (`0`, `100%`, und `50%`) als die Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabefarbe dieser Funktion ist das sRGB `color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

In diesem Beispiel:

- Wird die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent (`hsl(0 100% 50%)`) umgewandelt.
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert des `hsl()`-Äquivalents der Ursprungsfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` bzw. `60%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, damit sie auf eine kompatible Weise dargestellt werden kann (d. h. mit denselben Kanälen).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarbe für die obigen Beispiele `1`.

Werfen wir einen Blick auf einige Beispiele, die Ursprungs- und Ausgabefarbalphakanalwerte angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabefarbe als denselben wie den Alphakanalwert der Ursprungsfarbe an, während das zweite Beispiel einen anderen Alphakanalwert der Ausgabe angibt, der mit dem Alphakanalwert der Ursprungsfarbe nicht in Zusammenhang steht.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Berechnete Ausgabefarbe: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Berechnete Ausgabefarbe: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe erneut in eine `hsl()`-Darstellung umgewandelt — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB-Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von hsl() mit Kegelverlauf (conic-gradient())

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

### Verwendung von relativen Farben mit hsl()

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestaltet. Das mittlere erhält die unveränderte `--base-color`, während die linke und rechte Variante aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zur Helligkeit hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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

/* Laut Spezifikation sollten s- und l-Werte auf eine Zahl zwischen 0-100
   aufgelöst werden. Allerdings löst Chrome 121+ sie fälschlicherweise zu
   Zahlen zwischen 0-1 auf, daher werden derzeit Berechnungen wie l + 0.2
   anstelle von l + 20 verwendet */

#one {
  background-color: hsl(from var(--base-color) h s calc(l + 0.2));
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hsl(from var(--base-color) h s calc(l - 0.2));
}

/* Verwenden Sie @supports, um Unterstützung für die alte Syntax hinzuzufügen, die % Einheiten
   benötigt, um Helligkeitsberechnungen anzugeben. Dies ist für Safari 16.4+ erforderlich */
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

### Veraltete Syntax: Mit Kommas getrennte Werte

Aus Gründen der Abwärtskompatibilität akzeptiert die Funktion `hsl()` eine Form, bei der alle Werte mit Kommas getrennt sind.

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

Das Beispiel zeigt, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden sowohl in der modernen als auch in der veralteten (durch Kommas getrennten) Syntax unterstützt.

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
- [sRGB-Farbwähler und -Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Farbpicker-Tool](https://apps.colorjs.io/picker/) von Lea Verou
