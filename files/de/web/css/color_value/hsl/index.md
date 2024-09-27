---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

> [!NOTE]
> Die funktionale Notation `hsla()` ist ein Alias für `hsl()`. Sie sind genau gleich. Es wird empfohlen, `hsl()` zu verwenden.

Die funktionale Notation **`hsl()`** drückt eine Farbe im [sRGB](/de/docs/Glossary/RGB) [Farbraum](/de/docs/Glossary/color_space) gemäß ihren Komponenten _Farbton_ (hue), _Sättigung_ (saturation) und _Helligkeit_ (lightness) aus. Eine optionale _Alpha_-Komponente steht für die Transparenz der Farbe.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Das Definieren von _komplementären Farben_ mit `hsl()` kann durch Hinzufügen oder Subtrahieren von 180 Grad vom Farbwert erfolgen, da sie auf demselben Durchmesser des [Farbkreises](/de/docs/Glossary/color_wheel) positioniert sind. Zum Beispiel hat eine Farbe mit einem Farbwinkel von `10deg` ihre komplementäre Farbe bei `190deg`.

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

> **Hinweis:** `hsl()`/`hsla()` kann auch in einer älteren Form geschrieben werden, bei der alle Werte durch Kommas getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der Syntax mit Kommaseparierung nicht zulässig, das `deg` beim Farbwert ist optional, und die `%` Einheiten sind für die Werte der Sättigung und Helligkeit erforderlich.

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleichwertig mit `0deg` in diesem Fall), das den Winkel des Farbtons der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den Farbmodellen sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). Siehe die Referenzseite {{CSSXref("&lt;hue&gt;")}} für mehr Details und Beispiele.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dieser Wert repräsentiert die Sättigung der Farbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dieser Wert repräsentiert die Helligkeit der Farbe. Hierbei ist `100%` weiß, `0%` schwarz, und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanalwert der Farbe, wobei die Zahl `0` `0%` entspricht (vollständig transparent) und `1` `100%` entspricht (vollständig undurchsichtig). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal festzulegen. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()`-Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}}-Werten serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleichwertig mit `0deg` in diesem Fall), repräsentiert den Farbwinkel der Ausgabefarbe.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dies repräsentiert die Sättigung der Ausgabefarbe. Hierbei ist `100%` vollständig gesättigt, während `0%` vollständig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hierbei ist `100%` weiß, `0%` schwarz, und `50%` "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanalwert der Ausgabefarbe, wobei die Zahl `0` `0%` entspricht (vollständig transparent) und `1` `100%` entspricht (vollständig undurchsichtig). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal festzulegen. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf den Alpha-Kanalwert der Ursprungsfarbe gesetzt. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten sichtbaren Farbspektrums vollständig zu ermöglichen, wird die Ausgabe von relativen `hsl()`-Farbfunktionen als `color(srgb)` serialisiert. Das bedeutet, dass bei Abfrage des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgegeben wird.

#### Definieren von relativen Farbkanalkomponenten

Bei Verwendung der relativen Farbsyntax innerhalb einer `hsl()`-Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente HSL-Farbe um (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `h` (hue), `s` (saturation) und `l` (lightness) — sowie einen Alpha-Kanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um beim Definieren der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Wert wird zu einer {{cssxref("&lt;number&gt;")}} zwischen `0` und `360` aufgelöst, einschließlich, der den Farbwerts der Ursprungsfarbe darstellt.
- Die `s`- und `l`-Werte werden jeweils in eine `<number>` zwischen `0` und `100` aufgelöst, einschließlich, wobei `100` `100%` entspricht.
- Der `alpha`-Wert wird in eine `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Ausgabe ist jedoch dieselbe Farbe wie die Ursprungsfarbe und das zweite Ausgabe eine Farbe, die nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einer realen Codebasis verwenden würden und stattdessen wahrscheinlich einen absoluten Farbwert verwenden würden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `hsl()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`-, `s`- und `l`-Kanalwerte (`0`, `100%` und `50%`) der Ursprungsfarbe als Ausgabekanäle:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion ist das sRGB `color()`-Äquivalent von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()`-Äquivalent von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Wandelt die Ursprungsfarbe (`rgb(255 0 0)`) in ein `hsl()`-Äquivalent um (`hsl(0 100% 50%)`).
- Setzt den `H`-Kanalwert für die Ausgabefarbe auf den `H`-Kanalwert der Ursprungsfarbe — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` und `60%`.

Die endgültige Ausgabefarbe entspricht `hsl(0 30% 60%)` im sRGB-Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe umgewandelt, sodass sie auf kompatible Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Alpha-Kanal der Ursprungsfarbe gesetzt. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alpha-Kanalwerte der Ursprung- und Ausgabefarbe in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die spezifizieren, dass der Ursprungs- und Ausgabefarbkanalwert spezifiziert wird. Das erste Beispiel gibt den Alpha-Kanalwert der Ausgabefarbe als gleich dem Alpha-Kanalwert der Ursprungsfarbe an, während das zweite Beispiel einen anderen Alpha-Kanalwert für die Ausgabefarbe angibt, der nicht mit dem Alpha-Kanalwert der Ursprungsfarbe basiert.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()`-Ursprungsfarbe wieder in eine `hsl()`-Darstellung konvertiert — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet und die endgültige Ausgabefarbe ist das Äquivalent von `hsl(60 80% 30% / 0.7)` im sRGB-Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten gelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

### Formale Syntax

{{csssyntax}}

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

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestaltet. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten mit aufgehellten und abgedunkelten Varianten dieser `--base-color` versehen sind.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen, während der Farbton und die Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% davon subtrahiert.

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

### Legacy-Syntax: Kommagetrennte Werte

Aus historischen Gründen akzeptiert die `hsl()`-Funktion eine Form, in der alle Werte durch Kommas getrennt werden.

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

Das Beispiel zeigt, wie die `hsla()`-Syntax ein Alias für `hsl()` ist; beide werden unterstützt, sowohl mit moderner als auch mit älterer (kommagetrennter) Syntax.

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
- [sRGB-Farbwähler und Konvertierungs-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [Farbwähler-Tool](https://apps.colorjs.io/picker/) von Lea Verou
