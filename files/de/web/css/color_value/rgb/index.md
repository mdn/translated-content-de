---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

> [!NOTE]
> Die funktionale Notation `rgba()` ist ein Alias für `rgb()`. Sie sind exakt gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`**-Funktionalnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}}-{{Glossary("color_space", "Farbraum")}} gemäß ihrer Rot-, Grün- und Blau-Komponenten aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

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
> Aus Kompatibilitätsgründen werden vom [Web-API](/de/docs/Web/API/Window/getComputedStyle) serialisierte Farbwerte als `rgb()`-Farben ausgedrückt, wenn der Alpha-Kanalwert genau 1 ist, und als `rgba()`-Farben andernfalls. In beiden Fällen wird die alte Syntax verwendet, mit Kommas als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

#### Absolute Wertsyntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) dargestellt werden. Diese Werte repräsentieren die Rot-, Grün- und Blau-Kanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zudem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit spezifiziert ist, ist der Standardwert 100%. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) angeführt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer bei der Definition einer relativen Farbe enthalten, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) dargestellt werden. Diese Werte repräsentieren die Rot-, Grün- und Blau-Kanalwerte der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zudem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit spezifiziert ist, ist der Standardwert der Alpha-Kanalwert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) angeführt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `rgb()`-Farbfunktionen in `color(srgb)` serialisiert. Das bedeutet, dass die Abfrage des Ausgabefarbwertes über die Eigenschaft [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) die Ausgabe der Farbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Definition der Ausgabekanalkomponenten relativer Farben

Bei der Verwendung einer relativen Farbsyntax innerhalb einer `rgb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine gleichwertige RGB-Farbe (falls sie nicht bereits so spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — plus einen Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabekanalkomponenten verwendet zu werden:

- Die `r`, `g`- und `b`-Werte werden jeweils auf `<number>`-Werte zwischen `0` und `255`, einschließlich, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>`-Wert zwischen `0` und `1`, einschließlich, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere unterschiedliche Arten ausgedrückt werden. Unten werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen der relativen `rgb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (äquivalent zu `rgb(255 0 0)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`, `g` und `b`-Kanalwerte (`255`, `0` und `0`) der Ursprungsfarbe als Ausgabekanäle:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Die Ausgabe dieser Funktion ist der sRGB-`color()`-Gleichwert von `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und gibt eine komplett andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

Im obigen Fall ist die Ausgabefarbe der sRGB-`color()`-Gleichwert von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R`-Kanalwert der Ausgabefarbe auf den `R`-Kanalwert des `rgb()`-Äquivalents der Ursprungsfarbe — `255`.
- Setzt die `G`- und `B`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80` jeweils.

Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wird, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, sodass sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. mit denselben Kanälen).

In den bisher gesehenen Beispielen in diesem Abschnitt wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, entspricht er standardmäßig dem gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), entspricht er standardmäßig `1`. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarbe `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Ihre Ursprungs- und Ausgabefarbkanalwerte spezifizieren. Das erste Beispiel gibt denselben Alpha-Kanalwert für die Ausgabe an wie der Ursprungs-Alpha-Kanalwert, während das zweite Beispiel einen anderen Ausgabe-Alpha-Kanalwert spezifiziert, der nicht mit dem Ursprungs-Alpha-Kanalwert in Beziehung steht.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die Ursprungsfarbe `hsl()` erneut in eine `rgb()`-Darstellung konvertiert — `rgb(255 0 0)`. {{cssxref("calc")}}-Berechnungen werden auf die `R`-, `G`-, `B`- und `A`-Werte angewendet. Nach der Berechnung sind die R-, G-, B- und A-Werte `127.5`, `25`, `175` und `0.9`. Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(127.5 25 175 / 0.9)` im sRGB-Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie ihnen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

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

Die Hintergrundfarben werden mit der `rgb()`-Farbfunktion gesetzt. Die drei Farben sind gleich. Die dritte ist halbtransparent, daher haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf dem {{htmlelement("body")}} eingefügt, um die Transparenz der Alpha-Kanäle besser zu demonstrieren.

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
  background: repeating-linear-gradient(-45deg, #eee 0 2px, white 2px 6px);
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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das linke erhält die unveränderte `--base-color`, während das mittlere und rechte je Varianten dieser `--base-color` erhalten, die sukzessive mehr vom Rotkanal entfernen und mehr zum Blaukanal hinzufügen.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color`-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `rgb()`-Funktion überführt, und die Ausgabefarbe hat ihre Rot- und Blaukanäle modifiziert, um den gewünschten Effekt über `calc()`-Funktionen zu erzielen, während der Grünkanal unverändert bleibt.

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

### Alte Syntax: Kommagetrennte Werte

Aus alten Gründen akzeptiert die `rgb()`-Funktion eine Form, bei der alle Werte mit Kommas getrennt sind.

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

- Der Datentyp {{CSSXref("&lt;color&gt;")}} für eine Liste aller Farbnationen
- [sRGB-Farbauswahl und -Umrechnungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- Modulkategorie [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
