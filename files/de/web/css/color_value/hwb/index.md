---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`hwb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} gemäß ihrem Farbton, Weißanteil und Schwarzanteil aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

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
hwb(from #0000FF h calc(w + 30) b)
hwb(from lch(40% 70 240deg) h w calc(b - 30))
```

## Beschreibung

Diese Farb-Funktion im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißheitswert, einen Schwarzheitswert und optional einen Alphawert definiert, der die Transparenz der Farbe darstellt.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den Farbräumen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im gleichen Farbraum wie `hsl()` und hat daher die gleichen Farbtonwinkel. Weitere Details und Beispiele finden Sie auf der {{CSSXref("&lt;hue&gt;")}} Referenzseite, oder versuchen Sie, die Farbtöne im [Farbwähler](/de/docs/Web/CSS/CSS_colors#colors_in_action) zu ändern, um es in der Praxis zu sehen.

Eine `hwb()`-Farbe ist vollständig gesättigt, wenn ihre Weißheit (`W`) und Schwarzheit (`B`) beide `0` sind. Für jeden Farbtonwert `H`, entspricht `hwb(H 0% 0%)` derselben Farbe wie `hsl(H 100% 50%)`. Erhöht man den Weißheitswert, wird die Farbe aufgehellt. Erhöht man die Schwarzheit, wird die Farbe abgedunkelt.

Wenn sowohl die Schwarzheit als auch die Weißheit größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Summe von Weißheit und Schwarzheit gleich oder größer als 100 % ist — mit anderen Worten, wenn `W + B >= 100%`, definiert die Farb-Funktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzwerte des Grautons effektiv normalisiert als `W / (W + B)` und `B / (W + B)`.

## Werte

Nachfolgend sind Beschreibungen der zulässigen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall), der den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe darstellt.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der die Weißheit der Farbe darstellt, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall), um zu mischen. `0%` repräsentiert keine Weißheit. `100%` repräsentiert volle Weißheit, wenn `B` `0` ist, ansonsten werden die `W` und `B` Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der die Schwarzheit der Farbe darstellt, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall), um zu mischen. `0%` repräsentiert keine Schwarzheit. `100%` repräsentiert volle Schwarzheit, wenn `W` `0` ist, ansonsten werden die `W` und `B` Werte normalisiert.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alphakanal explizit anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben wird, standardmäßig 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Missing color components](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()` Farben werden als {{CSSXref("color_value/rgb", "rgb()")}} Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall), der den Ausgabefarbtonwinkel der Farbe darstellt.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der die Weißheit der Farbe darstellt, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall), um zu mischen. `0%` repräsentiert keine Weißheit. `100%` repräsentiert volle Weißheit, wenn `B` `0` ist, ansonsten werden die `W` und `B` Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der die Schwarzheit der Farbe darstellt, oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall), um zu mischen. `0%` repräsentiert keine Schwarzheit. `100%` repräsentiert volle Schwarzheit, wenn `W` `0` ist, ansonsten werden die `W` und `B` Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um keinen Alphakanal explizit anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben wird, entspricht er standardmäßig dem Alphakanalwert der Ursprungsfarbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten sichtbaren Farbspektrums vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()` Farb-Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass beim Abfragen des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgegeben wird.

### Definition der Kanalkomponenten des relativen Farboutputs

Bei der Verwendung der relativen Färbungssyntax in einer `hwb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe (wenn sie nicht bereits so spezifiziert ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `h` (Farbton), `w` (Weiß) und `b` (Schwarz) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar und können zur Definition der Ausgabefarbkanalwerte verwendet werden:

- Der `h` Kanalwert wird auf einen `<number>` zwischen `0` und `360`, inklusive, aufgelöst.
- Die `w` und `b` Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100`, inklusive, aufgelöst.
- Der `alpha` Kanal wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden betrachten wir einige Beispiele, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Färbungssyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen also eigentlich keine relativen Farben! In einem echten Codebasis würden Sie diese wahrscheinlich nie verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `hwb()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte der Ursprungsfarbe (`0`, `0%` und `0%`) als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist die sRGB `color()` Entsprechung von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe die sRGB `color()` Entsprechung von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Wandelt die Ursprungsfarbe (`hsl(0 100% 50%)`) in eine äquivalente `hwb()` um (`hwb(0 0% 0%)`).
- Setzt die `H` und `B` Kanalwerte für die Ausgabefarbe auf diejenigen der `hwb()` Entsprechung der Ursprungsfarbe — diese Werte sind `0` und `0%`, jeweils.
- Setzt den `W` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist die Entsprechung von `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, so dass sie in einer kompatiblen Weise dargestellt werden kann (d.h. mit den gleichen Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert ist, entspricht er standardmäßig dem Wert des Alphakanals der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert ist (und es sich nicht um eine relative Farbe handelt), ist er standardmäßig `1`. Daher sind die Ursprungs- und Ausgabealphakanäle in den obigen Beispielen `1`.

Betrachten wir einige Beispiele, die die Ursprungs- und Ausgabealphakanalwerte angeben. Das erste gibt den Alphakanalwert der Ausgabefarbe an, der dem der Ursprungsfarbe entspricht, während das zweite einen anderen Ausgabefarb-Alphakanalwert angibt, der nicht mit dem der Ursprungsfarbe verwandt ist.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in eine `hwb()` Darstellung konvertiert — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B` und `A` Werte angewendet, und die endgültige Ausgabefarbe ist die Entsprechung von `hwb(120 25% 10% / 0.9` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbenkanalwerte auf `<number>` Werte aufgelöst werden, müssen Sie bei der Verwendung in Berechnungen Zahlen zu ihnen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung relativer Farben mit hwb()

In diesem Beispiel werden drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten sind mit relativen Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hwb()` Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarzkanäle modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 30% dem Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% dem Schwarzkanal hinzugefügt.

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

- {{CSSXref("&lt;color&gt;")}}: Eine Liste aller Farbnationen
- [Farbwähler- und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: Der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
