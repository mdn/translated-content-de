---
title: hsl()
slug: Web/CSS/Reference/Values/color_value/hsl
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

> [!NOTE]
> Die `hsla()` Funktionsnotation ist ein Alias für `hsl()`. Sie sind genau gleichwertig. Es wird empfohlen, `hsl()` zu verwenden.

Die **`hsl()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} basierend auf ihren _Farbton_-, _Sättigungs_- und _Helligkeits_-Komponenten aus. Eine optionale _Alpha_-Komponente repräsentiert die Transparenz der Farbe.

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

Das Definieren _komplementärer Farben_ mit `hsl()` kann durch Hinzufügen oder Subtrahieren von 180 Grad vom Farbtonwert erfolgen, da sie auf dem Farbkreis auf dem gleichen Durchmesser positioniert sind. Zum Beispiel, wenn der Winkel eines Farbtons `10deg` beträgt, hat sein Komplementär einen Winkel von `190deg`.

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
> `hsl()`/`hsla()` kann auch in einer älteren Form geschrieben werden, bei der alle Werte durch Kommas getrennt sind, zum Beispiel `hsl(120, 75%, 25%)` oder `hsla(120deg, 75%, 25%, 0.8)`. Der Wert `none` ist in der kommaseparierten alten Syntax nicht erlaubt, die `deg` beim Farbtonwert ist optional, und die `%` Einheiten sind für die Sättigungs- und Helligkeitswerte erforderlich.

### Werte

Im Folgenden sind Beschreibungen der erlaubten Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) angegeben.

#### Absolute Wertsyntax

```plain
hsl(H S L[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0deg`), das den Farbton der Farbe darstellt.

    > [!NOTE]
    > Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den sRGB (verwendet von `hsl()` und {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. Siehe die {{cssxref("hue")}} Referenzseite für weitere Details und Beispiele.

- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert repräsentiert die Sättigung der Farbe. Hier ist `100%` völlig gesättigt, während `0%` völlig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dieser Wert repräsentiert die Helligkeit der Farbe. Hier ist `100%` weiß, `0%` ist schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Wert des Alpha-Kanals der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben wird, beträgt er standardmäßig 100%. Falls inkludiert, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hsl()` Farben werden in {{CSSXref("color_value/rgb", "rgb()")}} Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Skalierung gerundet werden.

#### Relative Wertsyntax

```plain
hsl(from <color> H S L[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingefügt, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0deg`), das den Farbtonwinkel der Ausgabefarbe darstellt.
- `S`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dies repräsentiert die Sättigung der Ausgabefarbe. Hier ist `100%` völlig gesättigt, während `0%` völlig ungesättigt (grau) ist.
- `L`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`). Dies repräsentiert die Helligkeit der Ausgabefarbe. Hier ist `100%` weiß, `0%` ist schwarz, und `50%` ist "normal".
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit spezifiziert wird, beträgt er standardmäßig den Alphakanalwert der Ursprungsfarbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe der relativen `hsl()` Farbfunktionswerte in `color(srgb)` serialisiert. Das bedeutet, dass bei der Abfrage des Ausgabe-Farbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode der Ausgabe-Farbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) Wert zurückgegeben wird.

#### Definieren von Ausgabekanal-Komponenten für relative Farben

Bei der Verwendung der relativen Farbsyntax innerhalb einer `hsl()` Funktion wandelt der Browser die Ursprungsfarbe in eine gleichwertige HSL-Farbe um (falls sie nicht bereits als solche spezifiziert ist). Die Farbe wird als drei separate Farbkanalwerte — `h` (Farbton), `s` (Sättigung), und `l` (Helligkeit) — plus ein Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, wenn die Ausgabefarbkanalwerte definiert werden:

- Der `h` Wert wird in einen {{cssxref("&lt;number&gt;")}} zwischen `0` und `360` aufgelöst, einschließlich, der den Farbtonwinkel der Ursprungsfarbe darstellt.
- Die `s` und `l` Werte werden jeweils in einen `<number>` zwischen `0` und `100` aufgelöst, einschließlich, wobei `100` gleichbedeutend mit `100%` ist.
- Der `alpha` Wert wird in einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Wenn eine relative Farbe definiert wird, können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Nachfolgend werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden Beispielen verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich niemals in einem realen Code-Bestand verwenden und stattdessen wahrscheinlich nur einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `hsl()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `rgb(255 0 0)` (entspricht `hsl(0 100% 50%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`-, `s`- und `l`-Kanalwerte der Ursprungsfarbe (`0`, `100%` und `50%`) als Ausgabekanalwerte:

```css
hsl(from rgb(255 0 0) h s l)
```

Die Ausgabe dieser Funktion entspricht der sRGB `color()` Entsprechung von `hsl(0 100% 50%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

In diesem Fall ist die Ausgabefarbe die sRGB `color()` Entsprechung von `hsl(240 60% 70%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`rgb(255 0 0)`) in eine `hsl()` Entsprechung (`hsl(0 100% 50%)`).
- Setzt den `H` Kanalwert für die Ausgabefarbe auf den `H` Kanalwert der Ursprungsfarbe `hsl()` Entsprechung — `0`.
- Setzt die `S`- und `L`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `30%` bzw. `60%`.

Die endgültige Ausgabefarbe ist die Entsprechung von `hsl(0 30% 60%)` im sRGB Farbraum — `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell wie die Ausgabefarbe konvertiert, damit sie so dargestellt werden kann, dass sie kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, wird er standardmäßig auf denselben Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und keine relative Farbe vorliegt), wird er standardmäßig auf `1` gesetzt. Daher sind die Alphakanalwerte für die Ursprungs- und die Ausgabewerte `1` für die obigen Beispiele.

Betrachten wir einige Beispiele, die Ursprungs- und Ausgabefarb-Alphakanalwerte angeben. Das erste spezifiziert den Ausgaben-Alphakanalwert als denselben wie den Alphakanalwert der Ursprungsfarbe, während das zweite einen anderen Ausgaben-Alphakanalwert spezifiziert, der nicht mit dem Alphakanalwert der Ursprungsfarbe korreliert.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `rgb()` Ursprungsfarbe erneut in eine `hsl()`-Darstellung umgewandelt — `hsl(0 100% 50% / 0.8)`. {{cssxref("calc")}} Berechnungen werden auf die `H`-, `S`-, `L`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist die Entsprechung von `hsl(60 80% 30% / 0.7)` im sRGB Farbraum: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>` Werte aufgelöst werden, müssen Sie diesen Zahlen beim Berechnen hinzugefügt werden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Das Addieren eines `<percentage>` zu einem `<number>`, funktioniert zum Beispiel nicht.

## Formale Syntax

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

### Verwendung von relativen Farben mit hsl()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält den unveränderten `--base-color`, während das linke und rechte aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — Die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `hsl()`-Funktion übergeben, und die Ausgabefarbe hat ihren Helligkeitskanal so modifiziert, dass der gewünschte Effekt mittels einer `calc()`-Funktion erreicht wird, während Farbton und Sättigung unverändert bleiben. Die aufgehellte Farbe hat 20% zum Helligkeitskanal hinzugefügt, und die abgedunkelte Farbe hat 20% abgezogen bekommen.

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

Aus alten Gründen akzeptiert die `hsl()` Funktion eine Form, bei der alle Werte mit Kommas getrennt werden.

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

Das Beispiel zeigt, wie die `hsla()` Syntax ein Alias für `hsl()` ist; beide werden sowohl in modernen als auch in alten (mit Komma getrennten) Syntaxen unterstützt.

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

- {{cssxref("hue")}} Datentyp
- [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Farb-Funktionen
- [Farbtoninterpolation in `color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix#using_hue_interpolation_in_color-mix)
- [Liste aller Farbnotationen](/de/docs/Web/CSS/Reference/Values/color_value)
- [Farbumrechnungswerkzeug](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [Farbwähler-Werkzeug](https://apps.colorjs.io/picker/) von Lea Verou
