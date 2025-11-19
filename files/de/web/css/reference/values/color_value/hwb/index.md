---
title: hwb()
slug: Web/CSS/Reference/Values/color_value/hwb
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`hwb()`** Funktionalnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} aus, basierend auf Farbton, Weißanteil und Schwarzanteil. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

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

Diese Farb-Funktion im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißanteil-Wert, einen Schwarzanteil-Wert und optional einen Alpha-Wert, der die Transparenz der Farbe darstellt, definiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet durch {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet durch {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet durch {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im gleichen Farbraum wie `hsl()`, und hat daher die gleichen Farbton-Winkel. Details und Beispiele finden Sie auf der {{CSSXref("&lt;hue&gt;")}} Referenzseite, oder versuchen Sie, die Farbtöne auf dem [Farbauswahltool](/de/docs/Web/CSS/Guides/Colors#colors_in_action) zu ändern, um es in Aktion zu sehen.

Eine `hwb()`-Farbe ist vollständig gesättigt, wenn sowohl der Weißanteil (`W`) als auch der Schwarzanteil (`B`) `0` sind. Für jeden Farbton-Wert `H` entspricht `hwb(H 0% 0%)` der gleichen Farbe wie `hsl(H 100% 50%)`. Erhöhung des Weißanteils hellt die Farbe auf. Erhöhung des Schwarzanteils dunkelt die Farbe ab.

Wenn sowohl der Schwarzanteil als auch der Weißanteil größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Summe von Weißanteil und Schwarzanteil gleich oder größer als 100% ist — das heißt `W + B >= 100%`, definiert die Farbfunktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzwerte der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachfolgend sind die Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) aufgeführt.

### Absolute Wert-Syntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (äquivalent zu `0%`), das zum Mischen verwendet wird. `0%` bedeutet kein Weißanteil. `100%` bedeutet voller Weißanteil, wenn `B` `0` ist, andernfalls werden die Werte von `W` und `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (äquivalent zu `0%`), das zum Mischen verwendet wird. `0%` bedeutet kein Schwarzanteil. `100%` bedeutet voller Schwarzanteil, wenn `W` `0` ist, andernfalls werden die Werte von `W` und `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben ist, wird er zu 100% standardmäßig. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()` Farben werden als {{CSSXref("color_value/rgb", "rgb()")}} Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relativwert-Syntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer beim Definieren einer relativen Farbe verwendet, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Ausgabefarbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (äquivalent zu `0%`), das zum Mischen verwendet wird. `0%` bedeutet kein Weißanteil. `100%` bedeutet voller Weißanteil, wenn `B` `0` ist, andernfalls werden die Werte von `W` und `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (äquivalent zu `0%`), das zum Mischen verwendet wird. `0%` bedeutet kein Schwarzanteil. `100%` bedeutet voller Schwarzanteil, wenn `W` `0` ist, andernfalls werden die Werte von `W` und `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben ist, wird er auf den Alpha-Kanal-Wert der Ursprungsfarbe standardmäßig gesetzt. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()` Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbenwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbenwert als einen [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) Wert zurückgibt.

### Definition der Ausgabefarbkomponenten von relativen Farben

Beim Verwenden der relativen Farbsyntax in einer `hwb()` Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe um (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `h` (Farbton), `w` (Weiß) und `b` (Schwarz) — plus einem Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar und können verwendet werden, um die Ausgabefarbkanalwerte zu definieren:

- Der `h` Kanalwert wird auf einen `<number>` zwischen `0` und `360`, einschließlich beider, aufgelöst.
- Die `w` und `b` Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100`, einschließlich beider, aufgelöst.
- Der `alpha` Kanal wird auf einen `<number>` zwischen `0` und `1`, einschließlich beider, aufgelöst.

Beim Definieren einer relativen Farbe können die unterschiedlichen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden lernen wir einige Beispiele kennen, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Im ersten Beispiel wird jedoch die gleiche Farbe wie die Ursprungsfarbe ausgegeben und im zweiten eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen keine wirklichen relativen Farben! In einem echten Codebasis würde man diese wahrscheinlich nie verwenden und stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Erlernen der relativen `hwb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte der Ursprungsfarbe (`0`, `0%`, und `0%`) als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

In diesem Beispiel:

- Wird die Ursprungsfarbe (`hsl(0 100% 50%)`) in eine `hwb()` Äquivalente (`hwb(0 0% 0%)`) umgewandelt.
- Werden die `H` und `B` Kanalwerte der Ausgabefarbe auf die Kanäle der `hwb()` Äquivalentwerte der Ursprungsfarbe gesetzt — diese Werte sind `0` und `0%`.
- Der `W` Kanalwert der Ausgabefarbe wird auf einen neuen Wert gesetzt, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe entspricht `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe im Hintergrund auf das gleiche Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, um sie in einer Weise darzustellen, die kompatibel ist (d.h. mit den gleichen Kanälen arbeitet).

In den bisherigen Beispielen in diesem Abschnitt wurden die Alphakanäle weder für die Ursprungsfarben noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, wird er auf den gleichen Wert wie der Alphakanal der Ursprungsfarbe standardmäßig gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` gesetzt. Daher sind die Ursprung- und Ausgabefarben-Alphakanalwerte `1` für die obigen Beispiele.

Sehen wir uns einige Beispiele an, die die Ursprungs- und Ausgabefarb-Alphakanalwerte angeben. Das erste Beispiel gibt den gleichen Wert für den Ausgabefarb-Alphakanal wie für den Ursprung-Alphakanal an, während das zweite einen anderen Ausgabefarb-Alphakanalwert angibt, der nicht aus dem Ursprung-Alphakanalwert stammt.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in eine `hwb()` Darstellung umgewandelt — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B`, und `A` Werte angewendet und die endgültige Ausgabefarbe ist äquivalent zu `hwb(120 25% 10% / 0.9` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ergebniswerte der Ursprungsfarbkanäle auf `<number>` Werte aufgelöst werden, müssen Zahlen hinzugefügt werden, wenn sie in Berechnungen verwendet werden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung relativer Farben mit hwb()

Dieses Beispiel stylt drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linke und rechte Variante dieser `--base-color` aufgehellte und abgedunkelte Versionen sind.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `hwb()` Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarzkanäle modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 30% hinzugefügt im Weißkanal, und die abgedunkelte Farbe hat 30% hinzugefügt im Schwarzkanal.

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

- {{CSSXref("&lt;color&gt;")}}: Für eine Liste aller Farbnotationen
- [Konverter-Tool für Farbformate](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
