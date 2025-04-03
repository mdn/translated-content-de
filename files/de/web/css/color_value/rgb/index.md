---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

> [!NOTE]
> Die `rgba()` Funktionsnotation ist ein Alias für `rgb()`. Sie sind genau gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} entsprechend ihrer Rot-, Grün- und Blaukomponenten aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

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
rgb(from #0000FF calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))

/* Legacy 'rgba()' alias */
rgba(0 255 255)

/* Legacy format */
rgb(0, 255, 255)
rgb(0, 255, 255, 50%)
```

> [!NOTE]
> Aus Kompatibilitätsgründen werden [Web API](/de/docs/Web/API/Window/getComputedStyle)-serialisierte Farbwerte als `rgb()` Farben ausgedrückt, wenn der Wert des Alphakanals genau 1 ist, und ansonsten als `rgba()` Farben. In beiden Fällen wird die alte Syntax verwendet, mit Kommata als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Im Folgenden finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als das Schlüsselwort `none` (entspricht in diesem Fall `0%`) dargestellt werden. Diese Werte repräsentieren die Rot-, Grün- und Blaukanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} Wert, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Kanalwert `A` nicht explizit angegeben wird, ist der Standardwert 100%. Falls enthalten, geht dem Wert ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als ein {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als ein {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als das Schlüsselwort `none` (entsprechend `0%` in diesem Fall) dargestellt werden. Diese Werte stellen die Rot-, Grün- und Blaukanalwerte der Ausgabefarbe dar.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} Wert, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Kanalwert `A` nicht explizit angegeben wird, entspricht er dem Alphakanalwert der Ursprungsfarbe. Falls enthalten, geht dem Wert ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Um sicherzustellen, dass das gesamte Spektrum sichtbarer Farben dargestellt werden kann, wird die Ausgabe von relativen `rgb()` Farb-Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass beim Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) zurückgegeben wird.

#### Definition der Ausgangskanalwerte relativer Farben

Beim Verwenden der relativen Farbsyntax in einer `rgb()` Funktion konvertiert der Browser die Ursprungsfarbe in eine gleichwertige RGB-Farbe (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — sowie einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgangsfarbkanalwerte verwendet zu werden:

- Die `r`, `g` und `b` Werte werden jeweils zu `<number>`s zwischen `0` und `255` aufgelöst.
- Der `alpha` Kanal wird zu einem `<number>` zwischen `0` und `1` aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden sehen wir uns einige Beispiele zur Verdeutlichung an.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus und das zweite erzeugt eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einem realen Code verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `rgb()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rgb(255 0 0)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`, `g` und `b` Kanalwerte (`255`, `0` und `0`) der Ursprungsfarbe als Ausgangskanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Die Ausgabe dieser Funktion ist das `color()` Pendant zu `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgangskanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

Im obigen Fall ist die Ausgabefarbe das `color()` Äquivalent zu `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()` Äquivalent (`rgb(255 0 0)`).
- Setzt den `R` Kanalwert für die Ausgabefarbe auf den `R` Kanalwert des Ursprungsfarb-`rgb()`-Äquivalents — `255`.
- Setzt die `G` und `B` Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80` beziehungsweise.

Die endgültige Ausgabefarbe ist das Äquivalent zu `rgb(255 80 80)` im sRGB Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. dieselben Kanäle verwendet).

In den Beispielen, die wir in diesem Abschnitt bisher gesehen haben, sind die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, entspricht er dem gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher haben der Ursprungs- und der Ausgangs-Alphakanal in den obigen Beispielen den Wert `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarb-Alphakanalwerte spezifizieren. Das erste Beispiel spezifiziert den Ausgabefarb-Alphakanalwert als den gleichen wie den Ursprungs-Alphakanalwert, während das zweite ein anderes Ausgabefarb-Alphakanalwert spezifiziert, der nicht mit dem Ursprungs-Alphakanalwert zusammenhängt.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in eine `rgb()` Darstellung — `rgb(255 0 0)` — konvertiert. {{cssxref("calc")}} Berechnungen werden auf die `R`, `G`, `B` und `A` Werte angewendet. Nach der Berechnung sind die R, G, B und A Werte `127.5`, `25`, `175`, und `0.9`. Die endgültige Ausgabefarbe ist das Äquivalent zu `rgb(127.5 25 175 / 0.9)` im sRGB Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarb-Kanalwerte zu `<number>` Werten aufgelöst werden, müssen Sie ihnen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Addieren eines `<percentage>` zu einem `<number>`, funktioniert zum Beispiel nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundsyntax

In diesem Beispiel haben wir drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben, die über einem gestreiften Hintergrund angezeigt werden.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

Die Hintergrundfarben werden mit der `rgb()` Farb-Funktion gesetzt. Die drei Farben sind dieselben. Die dritte ist halbtransparent, deshalb haben wir dem {{htmlelement("body")}} einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} hinzugefügt, um die Transparenz der Alphakanäle besser zu demonstrieren.

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
  background: repeating-linear-gradient(-45deg, #eee 0 2px, #fff 2px 6px);
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

### Verwendung relativer Farben mit rgb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das linke Element erhält die unveränderte `--base-color`, während die mittlere und rechte Varianten dieser `--base-color` erhalten, die sukzessive mehr aus dem roten Kanal entfernen und mehr zum blauen Kanal hinzufügen.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird an eine `rgb()` Funktion übergeben, und die Ausgabefarbe hat ihre roten und blauen Kanäle modifiziert, um den gewünschten Effekt über `calc()` Funktionen zu erreichen, während der grüne Kanal unverändert bleibt.

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

### Alte Syntax: kommagetrennte Werte

Aus alten Gründen akzeptiert die `rgb()` Funktion eine Form, in der alle Werte mit Kommata getrennt sind.

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

- Der {{CSSXref("&lt;color&gt;")}} Datentyp für eine Liste aller Farbnotationen
- [sRGB Farbwähler und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
