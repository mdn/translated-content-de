---
title: hwb()
slug: Web/CSS/Reference/Values/color_value/hwb
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`hwb()`** Funktionalnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} Farbraum basierend auf ihrem Farbton, Weißheit und Schwärze aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

{{InteractiveExample("CSS Demo: hwb()")}}

```css interactive-example-choice
background: hwb(12 50% 0%);
```

```css interactive-example-choice
background: hwb(50deg 30% 40%);
```

```css interactive-example-choice
background: hwb(0.5turn 10% 0% / 0.5);
```

```css interactive-example-choice
background: hwb(0 100% 0% / 50%);
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
hwb(194 0% 0%)
hwb(194 0% 0% / .5)

/* Relative values */
hwb(from green h w b / 0.5)
hwb(from #123456 h calc(w + 30) b)
hwb(from lch(40% 70 240deg) h w calc(b - 30))
```

## Beschreibung

Diese Farb-Funktion im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißwert, einen Schwarzwert und optional einen Alphawert definiert, der die Transparenz der Farbe repräsentiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im selben Farbraum wie `hsl()` und hat daher die gleichen Farbtonwinkel. Weitere Details und Beispiele finden Sie auf der {{CSSXref("&lt;hue&gt;")}} Referenzseite oder probieren Sie die Farbtöne im [Farbwähler](/de/docs/Web/CSS/CSS_colors#colors_in_action) aus, um es in Aktion zu sehen.

Eine `hwb()` Farbe ist vollständig gesättigt, wenn sowohl ihre Weißheit (`W`) als auch ihre Schwärze (`B`) Werte `0` sind. Für einen beliebigen Farbtonwert `H` entspricht `hwb(H 0% 0%)` der gleichen Farbe wie `hsl(H 100% 50%)`. Das Erhöhen des Weißwertes hellt die Farbe auf. Das Erhöhen der Schwärze dunkelt die Farbe ab.

Wenn sowohl die Schwärze als auch die Weißheit größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Menge an hinzugefügter Weißheit und Schwärze 100% oder mehr beträgt — mit anderen Worten, wenn `W + B >= 100%`, definiert die Farb-Funktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weißheits- und Schwärzwerte der grauen Farbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Unten sind Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

### Absoluter Wert-Syntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall) repräsentiert den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentiert die Weißheit der Farbe oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` repräsentiert keine Weißheit. `100%` repräsentiert vollständige Weißheit, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentiert die Schwärze der Farbe oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` repräsentiert keine Schwärze. `100%` repräsentiert vollständige Schwärze, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Farbe, wobei die Zahl `0` `0%` entspricht (vollständig transparent) und `1` `100%` entspricht (vollständig undurchsichtig). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alphakanal vorhanden ist. Wenn der `A` Kanalwert nicht explizit angegeben wird, ist er standardmäßig 100%. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()` Farben werden in {{CSSXref("color_value/rgb", "rgb()")}} Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relative Wert-Syntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die ursprüngliche Farbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall) repräsentiert den Ausgabefarbton der Farbe.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentiert die Weißheit der Farbe oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` repräsentiert keine Weißheit. `100%` repräsentiert vollständige Weißheit, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentiert die Schwärze der Farbe oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` repräsentiert keine Schwärze. `100%` repräsentiert vollständige Schwärze, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alphakanalwert der Ausgabefarbe, wobei die Zahl `0` `0%` entspricht (vollständig transparent) und `1` `100%` entspricht (vollständig undurchsichtig). Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alphakanal vorhanden ist. Wenn der `A` Kanalwert nicht explizit angegeben wird, ist er standardmäßig der Alphakanalwert der ursprünglichen Farbe. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()` Farb-Funktionen als `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Property oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) Wert zurückgibt.

### Definition von Ausgabefarbkanalkomponenten für relative Farben

Beim Verwenden der Relativfarbsyntax innerhalb einer `hwb()` Funktion konvertiert der Browser die ursprüngliche Farbe in eine äquivalente HWB-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `h` (Farbton), `w` (Weiß) und `b` (Schwarz) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h` Kanalwert wird in ein `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Die `w`- und `b`-Kanäle werden jeweils in ein `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `alpha` Kanal wird in ein `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Unten werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die Relativfarbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die ursprüngliche Farbe aus und das zweite Beispiel gibt eine völlig andere Farbe aus, die überhaupt nicht auf der ursprünglichen Farbe basiert. Sie erstellen tatsächlich keine relativen Farben! Sie würden wahrscheinlich diese niemals in einer realen Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `hwb()` Syntax aufgenommen.

Beginnen wir mit einer ursprünglichen Farbe von `hsl(0 100% 50%)` (äquivalent zu `hwb(0 0% 0%)`). Die folgende Funktion gibt dieselbe Farbe wie die ursprüngliche Farbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte der ursprünglichen Farbe (`0`, `0%` und `0%`) als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der ursprünglichen Farbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In dem obigen Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der ursprünglichen Farbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Konvertiert die ursprüngliche Farbe (`hsl(0 100% 50%)`) in ein `hwb()` Äquivalent (`hwb(0 0% 0%)`).
- Setzt die `H`- und `B`-Kanalwerte für die Ausgabefarbe auf die `H`- und `B`-Kanalwerte der `hwb()` Äquivalente der ursprünglichen Farbe — diese Werte sind `0` und `0%`.
- Setzt den `W`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der ursprünglichen Farbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die ursprüngliche Farbe verwendet, wird die ursprüngliche Farbe im Hintergrund in dasselbe Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h., dieselben Kanäle verwendet).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die ursprüngliche noch für die Ausgabefarbe explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, ist er standardmäßig derselbe Wert wie der Alphakanal der ursprünglichen Farbe. Wenn der Alphakanal der ursprünglichen Farbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), ist er standardmäßig `1`. Daher sind die Alphakanalwerte der ursprünglichen und der Ausgabefarbe `1` in den obigen Beispielen.

Schauen wir uns einige Beispiele an, die sowohl die ursprünglichen als auch die Ausgabefarbalphakanalwerte spezifizieren. Im ersten Beispiel wird der Ausgabefarbalphakanalwert als derselbe wie der ursprüngliche Alphakanalwert angegeben, während im zweiten Beispiel ein anderer Ausgabefarbalphakanalwert angegeben wird, der nicht mit dem ursprünglichen Alphakanalwert in Verbindung steht.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` ursprüngliche Farbe wieder in einer `hwb()` Darstellung umgewandelt — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B` und `A` Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9)` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die ursprünglichen Farbkanalwerte zu `<number>` Werten aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von relativen Farben mit hwb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere Element erhält die unveränderte `--base-color`, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `hwb()` Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarzkanäle modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 30% zum Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum Schwarzkanal hinzugefügt.

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

/* As per the spec, w and b values should resolve to a number between 0-100
   However, Chrome 121+ incorrectly resolves them to numbers between 0-1
   hence currently using calculations like w + 0.3 instead of w + 30 */

#one {
  background-color: hwb(from var(--base-color) h calc(w + 0.3) b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hwb(from var(--base-color) h w calc(b + 0.3));
}

/* Use @supports to add in support for old syntax that requires % units to
   be specified in w and b calculations. This is required for Safari 16.4+. */
@supports (color: hwb(from red h w calc(b + 30%))) {
  #one {
    background-color: hwb(from var(--base-color) h calc(w + 30%) b);
  }

  #three {
    background-color: hwb(from var(--base-color) h w calc(b + 30%));
  }
}
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{ EmbedLiveSample("Using relative colors with hwb()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}: Für eine Liste aller Farbnotierungen
- [Farbformat-Konverter-Tool](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
