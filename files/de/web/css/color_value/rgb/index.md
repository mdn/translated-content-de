---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

> [!NOTE]
> Die funktionale Notation `rgba()` ist ein Alias für `rgb()`. Sie sind genau gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`** Funktion beschreibt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} anhand ihrer Rot-, Grün- und Blaukomponenten. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

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
> Aus Kompatibilitätsgründen werden die durch [Web API](/de/docs/Web/API/Window/getComputedStyle) serialisierten Farbwerte als `rgb()` Farben ausgedrückt, wenn der Wert des Alphakanals genau 1 ist, und als `rgba()` Farben ansonsten. In beiden Fällen wird die alte Syntax mit Kommas als Trenner verwendet (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Im Folgenden finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`) dargestellt werden. Diese Werte repräsentieren die Rot-, Grün- und Blaukanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` entspricht (vollkommen transparent) und `1` `100%` (vollkommen undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig 100%. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer beim Definieren einer relativen Farbe eingeschlossen, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`) dargestellt werden. Diese Werte repräsentieren die Werte der Rot-, Grün- und Blaukanäle der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` entspricht (vollkommen transparent) und `1` `100%` (vollkommen undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig gleich dem Alphakanalwert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten sichtbaren Farbspektrums vollständig zu ermöglichen, wird die Ausgabe von relativen `rgb()` Farboperationen zu `color(srgb)` serialisiert. Dies bedeutet, dass die Abfrage des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Definition von relativen Farbausgabe-Kanalwerten

Beim Verwenden der relativen Farbsyntax innerhalb einer `rgb()` Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente RGB-Farbe (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `r` (Rot), `g` (Grün) und `b` (Blau) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die `r`, `g` und `b` Werte werden jeweils in `<number>`s zwischen `0` und `255`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird in ein `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Unten werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste die gleiche Farbe wie die Ursprungsfarbe aus und das zweite eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen wirklich keine relativen Farben! Sie würden diese wahrscheinlich nie in einem echten Code-Base verwenden und stattdessen wahrscheinlich einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `rgb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rgb(255 0 0)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`-, `g`- und `b`-Kanalwerte (`255`, `0`, und `0`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Diese Funktion gibt die sRGB `color()`-Äquivalente von `rgb(255 0 0)` aus: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt damit eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

In dem obigen Fall ist die ausgegebene Farbe das sRGB `color()`-Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R`-Kanalwert für die Ausgabefarbe auf den `R`-Kanalwert des `rgb()`-Äquivalents der Ursprungsfarbe — `255`.
- Setzt die `G`- und `B`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80`, jeweils.

Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie bereits erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, sodass sie auf eine kompatible Art und Weise dargestellt werden kann (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Ausgabefarbenalphakanal nicht spezifiziert ist, hat er standardmäßig den gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist er standardmäßig `1`. Daher haben die Ursprungs- und Ausgabefarbalphakanalwerte den Wert `1` für die obigen Beispiele.

Sehen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarbalphakanalwerte spezifizieren. Das erste gibt den Ausgabefarbenalphakanalwert als gleich dem Alpha-Wert des Ursprungs an, während das zweite einen anderen, nicht mit dem Ursprungsalphakanalwert in Zusammenhang stehenden, Ausgabewert angibt.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in eine `rgb()`-Darstellung konvertiert — `rgb(255 0 0)`. {{cssxref("calc")}} Berechnungen werden auf die `R`-, `G`-, `B`- und `A`-Werte angewendet. Nach Berechnungen sind die R-, G-, B- und A-Werte `127.5`, `25`, `175` bzw. `0.9`. Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(127.5 25 175 / 0.9)` im sRGB Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Weil die Kanalswerte der Ursprungsfarbe in `<number>` Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Zum Beispiel funktioniert es nicht, ein `<percentage>` zu einer `<number>` hinzuzufügen.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Syntax

In diesem Beispiel haben wir drei {{htmlelement("div")}}-Elemente mit verschiedenen Hintergrundfarben, die über einem gestreiften Hintergrund angezeigt werden.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

Die Hintergrundfarben werden mit der `rgb()` Farb-Funktion gesetzt. Die drei Farben sind gleich. Die dritte ist halbtransparent, deshalb haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf den {{htmlelement("body")}} hinzugefügt, um die Transparenz der Alphakanäle besser zu demonstrieren.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das linke erhält die unveränderte `--base-color`, während die mittleren und rechten Varianten dieser `--base-color` nacheinander mehr vom roten Kanal entfernen und mehr zum blauen Kanal hinzufügen.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `rgb()`-Funktion übergeben, und die Ausgabefarbe hat ihre roten und blauen Kanäle modifiziert, um den gewünschten Effekt über `calc()` Funktionen zu erzielen, während der grüne Kanal unverändert bleibt.

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

Aus historischen Gründen akzeptiert die `rgb()`-Funktion eine Form, in der alle Werte durch Kommas getrennt werden.

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

- Der {{CSSXref("&lt;color&gt;")}} Datentyp für eine Liste aller Farbnährungen
- [sRGB Farbwahlwerkzeug und Umrechnungstool](/de/docs/Web/CSS/CSS_colors/Color_picker)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
