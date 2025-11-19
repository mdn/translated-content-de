---
title: rgb()
slug: Web/CSS/Reference/Values/color_value/rgb
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

> [!NOTE]
> Die `rgba()` Funktionale Notation ist ein Alias für `rgb()`. Sie sind exakt gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`** funktionale Notation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} aus, basierend auf den roten, grünen und blauen Komponenten. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

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
> Aus Kompatibilitätsgründen werden [Web API](/de/docs/Web/API/Window/getComputedStyle)-serialisierte Farbwerte als `rgb()`-Farben ausgedrückt, wenn der Alpha-Kanalwert genau 1 ist, und als `rgba()`-Farben in anderen Fällen. In beiden Fällen wird die ältere Syntax verwendet, bei der Kommas als Trennzeichen dienen (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

#### Absolute Wert-Syntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`) dargestellt werden. Diese Werte repräsentieren die roten, grünen und blauen Kanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit spezifiziert wird, beträgt er standardmäßig 100%. Wenn eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann eine _beliebige_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`) dargestellt werden. Diese Werte repräsentieren die roten, grünen und blauen Kanalwerte der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, ist er standardmäßig der Alpha-Kanal-Wert der Ursprungsfarbe. Wenn eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die vollständige Darstellung des sichtbaren Farbspektrums zu ermöglichen, wird die Ausgabe der relativen `rgb()`-Farbfunktion zu `color(srgb)` serialisiert. Das bedeutet, dass beim Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Wert zurückgegeben wird.

#### Definition der Ausgabekanalkomponenten für relative Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `rgb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente RGB-Farbe (falls noch nicht angegeben). Die Farbe wird als drei verschiedene Farbkanalwerte definiert - `r` (rot), `g` (grün) und `b` (blau) - sowie ein Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die `r`-, `g`- und `b`-Werte werden jeweils zu `<number>`-Werten zwischen `0` und `255` aufgelöst, inklusive.
- Der `alpha`-Kanal wird zu einem `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! In einem echten Code würden Sie diese wahrscheinlich niemals verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `rgb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rgb(255 0 0)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`-, `g`- und `b`-Kanalwerte (`255`, `0` und `0`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` -Äquivalent von `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

Im obigen Fall ist die Ausgabefarbe das sRGB `color()` -Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R`-Kanal-Wert der Ausgabefarbe auf den `R`-Kanal-Wert des `rgb()`-Äquivalents der Ursprungsfarbe — `255`.
- Setzt die `G`- und `B`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80`, jeweils.

Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (das heißt, unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurde für die Ursprungs- oder Ausgabefarben keine Alpha-Kanäle explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben ist, beträgt er standardmäßig denselben Wert wie der Alpha-Kanal der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher betragen die Ursprungs- und Ausgabewerte der Alpha-Kanäle für die obigen Beispiele `1`.

Sehen wir uns einige Beispiele an, die Ursprungs- und Ausgabewerte der Alpha-Kanäle spezifizieren. Das erste Beispiel gibt den Wert des Alpha-Kanals der Ausgabe als dem der Ursprungesfarbe identisch an, während das zweite einen anderen Ausgabewert des Alpha-Kanals angibt, der nichts mit dem der Ursprungesfarbe zu tun hat.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in eine `rgb()`-Darstellung konvertiert — `rgb(255 0 0)`. {{cssxref("calc")}}-Berechnungen werden auf die `R`-, `G`-, `B`- und `A`-Werte angewendet. Nach der Berechnung betragen die `R`-, `G`-, `B`- und `A`-Werte `127.5`, `25`, `175` und `0.9` jeweils. Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(127.5 25 175 / 0.9)` im sRGB-Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungs-Farbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert zum Beispiel nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundsyntax

In diesem Beispiel haben wir drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben über einem gestreiften Hintergrund angezeigt.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

Die Hintergrundfarben werden durch die `rgb()`-Farbfunktions verwendet. Die drei Farben sind gleich. Die dritte ist halbtransparent, daher haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf dem {{htmlelement("body")}} hinzugefügt, um die Transparenz der Alpha-Kanäle besser zu demonstrieren.

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

#### Result

{{ EmbedLiveSample("Basic syntax", "100%", "75") }}

### Verwendung von relativen Farben mit rgb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das linke erhält die unveränderte `--base-color`, während die mittleren und rechten Variationen dieser `--base-color` sind, die nacheinander mehr vom roten Kanal entfernen und mehr zum blauen Kanal hinzufügen.

Diese Variationen werden mit relativen Farben definiert — das `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `rgb()`-Funktion übergeben, und die Ausgabefarbe hat ihre roten und blauen Kanäle modifiziert, um den gewünschten Effekt durch `calc()`-Funktionen zu erzielen, während der grüne Kanal unverändert bleibt.

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

#### Resultat

{{ EmbedLiveSample("Using relative colors with rgb()", "100%", "200") }}

### Alte Syntax: durch Kommas getrennte Werte

Aus älteren Gründen akzeptiert die `rgb()`-Funktion eine Form, in der alle Werte mit Kommas getrennt werden.

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

#### Resultat

{{ EmbedLiveSample("Legacy syntax: comma-separated values", "100%", "150px") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp für eine Liste aller Farbnotationen
- [Farbformat-Konverter-Tool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
