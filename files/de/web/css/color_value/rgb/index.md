---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

> [!NOTE]
> Die `rgba()`-Funktionsnotation ist ein Alias für `rgb()`. Sie sind exakt gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`**-Funktionsnotation gibt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} gemäß ihren roten, grünen und blauen Komponenten an. Eine optionale Alphakomponente stellt die Transparenz der Farbe dar.

{{InteractiveExample("CSS Demo: rgb()")}}

```css interactive-example-choice
background: rgb(31 120 50);
```

```css interactive-example-choice
background: rgb(30% 20% 50%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 80%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 0.2);
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
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* Relative values */
rgb(from green r g b / 0.5)
rgb(from #123456 calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))

/* Legacy 'rgba()' alias */
rgba(0 255 255)

/* Legacy format */
rgb(0, 255, 255)
rgb(0, 255, 255, 50%)
```

> [!NOTE]
> Aus Kompatibilitätsgründen werden [Web API](/de/docs/Web/API/Window/getComputedStyle)-serialisierte Farbwerte als `rgb()`-Farben ausgedrückt, wenn der Alphakanalwert genau 1 ist, und ansonsten als `rgba()`-Farben. In beiden Fällen wird die alte Syntax verwendet, wobei Kommata als Trennzeichen verwendet werden (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Im Folgenden finden Sie Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (entspricht hier `0%`) dargestellt werden. Diese Werte repräsentieren jeweils die roten, grünen und blauen Kanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er auf 100% gesetzt. Wenn er enthalten ist, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer beim Definieren einer relativen Farbe einbezogen, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ausgangsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ausgangsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (entspricht hier `0%`) dargestellt werden. Diese Werte repräsentieren jeweils die roten, grünen und blauen Kanalwerte der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er auf den Alphakanalwert der Ausgangsfarbe gesetzt. Wenn enthalten, wird der Wert mit einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Repräsentation des vollständigen Farbspektrums sichtbar zu machen, wird die Ausgabe von relativen `rgb()`-Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass die Abfrage des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Definition von relativen Farbkanalkomponenten der Ausgabe

Wenn relative Farbsyntax innerhalb einer `rgb()`-Funktion verwendet wird, konvertiert der Browser die Ausgangsfarbe in eine äquivalente RGB-Farbe (wenn sie nicht bereits so spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um beim Definieren der Ausgabe-Farbkanalwerte verwendet zu werden:

- Die `r`, `g` und `b` Werte werden jeweils auf `<number>`s zwischen `0` und `255` aufgelöst, inklusive.
- Der `alpha`-Kanal wird auf ein `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabe-Farbe auf verschiedene Weise ausgedrückt werden. Im Folgenden untersuchen wir einige Beispiele, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Allerdings gibt das erste Beispiel die gleiche Farbe aus wie die Ausgangsfarbe, und das zweite eine Farbe, die überhaupt nicht auf der Ausgangsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! In einem echten Codebase würden Sie wahrscheinlich nie diese verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Einstiegspunkt zum Lernen über relative `rgb()`-Syntax aufgenommen.

Beginnen wir mit einer Ausgangsfarbe von `hsl(0 100% 50%)` (entspricht `rgb(255 0 0)`). Die folgende Funktion gibt dieselbe Farbe wie die Ausgangsfarbe aus — sie verwendet die `r`-, `g`- und `b`-Kanalwerte (`255`, `0` und `0`) der Ausgangsfarbe als Ausgabekanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Die Ausgabe dieser Funktion ist das sRGB-`color()`-Äquivalent von `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte der Farbe und gibt eine völlig andere Farbe aus, die nicht auf der Ausgangsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

In diesem Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ausgangsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ausgangsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R`-Kanalwert für die Ausgabefarbe auf den `R`-Kanalwert des `rgb()`-Äquivalents der Ausgangsfarbe — `255`.
- Setzt die `G`- und `B`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ausgangsfarbe basieren: `80` und `80` jeweils.

Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ausgangsfarbe, wenn die Ausgabefarbe ein anderes Farbmodell als die Ausgangsfarbe verwendet, im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, so dass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt betrachteten Beispielen wurden die Alphakanäle weder für die Ausgangs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanalwert der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf den Alphakanalwert der Ausgangsfarbe gesetzt. Wenn der Alphakanalwert der Ausgangsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` gesetzt. Daher sind die Alphakanalwerte der Ausgangs- und der Ausgabefarbe für die obigen Beispiele `1`.

Lassen Sie uns einige Beispiele betrachten, die Alphakanalwerte für die Ausgangs- und die Ausgabefarben angeben. Das erste bestimmt den Ausgaben-Alphakanalwert als denselben wie den Ausgangs-Alphakanalwert, während das zweite einen anderen Ausgaben-Alphakanalwert bestimmt, der nichts mit dem Ausgangs-Alphakanalwert zu tun hat.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ausgangsfarbe erneut in eine `rgb()`-Darstellung konvertiert — `rgb(255 0 0)`. {{cssxref("calc")}}-Berechnungen werden auf die `R`-, `G`-, `B`- und `A`-Werte angewendet. Nach der Berechnung betragen die R-, G-, B- und A-Werte `127.5`, `25`, `175` und `0.9` jeweils. Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(127.5 25 175 / 0.9)` im sRGB-Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ausgangsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie beim Verwenden in Berechnungen Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundsyntax

In diesem Beispiel haben wir drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben, die über einem gestreiften Hintergrund angezeigt werden.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

Die Hintergrundfarben werden mit der `rgb()`-Funktion festgelegt. Die drei Farben sind gleich. Die dritte ist halbtransparent, deshalb haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf dem {{htmlelement("body")}} eingefügt, um die Transparenz der Alphakanäle besser zu demonstrieren.

```css hidden
div {
  display: flex;
  gap: 20px;
  height: 50px;
  flex: 1;
}
body {
  height: calc(100vh - 20px);
}
```

```css
body {
  background: repeating-linear-gradient(-45deg, #eeeeee 0 2px, white 2px 6px);
  padding: 10px;
}

#integer {
  background-color: rgb(189 85 218);
}

#percent {
  background-color: rgb(74% 33% 85%);
}

#alpha {
  background-color: rgb(189 85 218 / 0.25);
}
```

#### Ergebnis

{{ EmbedLiveSample("Basic syntax", "100%", "75") }}

### Verwendung von relativen Farben mit rgb()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Die linke erhält die unveränderte `--base-color`, während die mittlere und rechte Varianten dieser `--base-color` erhalten, bei denen jeweils mehr vom roten Kanal entfernt und mehr zum blauen Kanal hinzugefügt wird.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `rgb()`-Funktion eingesetzt, und die Ausgabefarbe hat geänderte rote und blaue Kanäle, um den gewünschten Effekt über `calc()`-Funktionen zu erzielen, während der grüne Kanal unverändert bleibt.

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
  /* equal to rgb(255 165 0) */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 76.5 is 30% of 255 */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 153 is 60% of 255 */
}

/* Use @supports to add in support for old syntax that requires r g b values to
   be specified as percentages (with units) in calculations. This is required
   for Safari 16.4+. */
@supports (color: rgb(from red r g calc(b + 30%))) {
  #two {
    background-color: rgb(from var(--base-color) calc(r - 30%) g calc(b + 30%));
  }

  #three {
    background-color: rgb(from var(--base-color) calc(r - 60%) g calc(b + 60%));
  }
}
```

#### Ergebnis

{{ EmbedLiveSample("Using relative colors with rgb()", "100%", "200") }}

### Veraltete Syntax: Kommagetrennte Werte

Aus historischen Gründen akzeptiert die `rgb()`-Funktion eine Form, bei der alle Werte mit Kommata getrennt werden.

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
  background-color: rgb(255 0 0 / 50%);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### Ergebnis

{{EmbedLiveSample('Legacy syntax: comma-separated values', '100%', '150px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp für eine Liste aller Farbnomenklaturen
- [Werkzeug zur Farbumwandlung](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
