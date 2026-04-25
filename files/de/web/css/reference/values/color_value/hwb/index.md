---
title: "`hwb()` CSS-Funktion"
short-title: hwb()
slug: Web/CSS/Reference/Values/color_value/hwb
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`hwb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} in Bezug auf ihren Farbton, ihre Weiße und Schwärze aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

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

Diese Farbfunktion im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{cssxref("hue")}}-Winkelwert, einen Weißwert, einen Schwarzwerte und optional einen Alphawert, der die Transparenz der Farbe darstellt, definiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich in den sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. `hwb()` befindet sich im gleichen Farbraum wie `hsl()` und hat daher die gleichen Farbtonwinkel. Weitere Details und Beispiele finden Sie auf der {{cssxref("hue")}} Referenzseite oder ändern Sie die Farbtonwerte im [Farbwähler](/de/docs/Web/CSS/Guides/Colors#colors_in_action), um es in Aktion zu sehen.

Eine `hwb()`-Farbe ist vollständig gesättigt, wenn sowohl die Werte für Weiße (`W`) als auch Schwärze (`B`) `0` sind. Für jeden Farbtonwert `H` ist `hwb(H 0% 0%)` dieselbe Farbe wie `hsl(H 100% 50%)`. Die Erhöhung des Weißwerts hellt die Farbe auf. Eine Erhöhung des Schwarzwerts dunkelt die Farbe ab.

Wenn sowohl der Schwarz- als auch der Weißwert größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Menge an hinzugefügter Weiße und Schwärze gleich oder größer als 100% ist — mit anderen Worten, wenn `W + B >= 100%`, definiert die Farbfunktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzwerte der grauen Farbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Unten sind Beschreibungen der zulässigen Werte sowohl für absolute als auch für [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors).

### Absolute Wert-Syntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (in diesem Fall gleich `0deg`), das den Farbtonwinkel der Farbe darstellt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weiße der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall gleich `0%`), um zu mischen. `0%` steht für keine Weiße. `100%` steht für volle Weiße, wenn `B` `0` ist, andernfalls werden sowohl die Werte `W` als auch `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall gleich `0%`), um zu mischen. `0%` steht für keine Schwärze. `100%` steht für volle Schwärze, wenn `W` `0` ist, andernfalls werden sowohl die Werte `W` als auch `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben ist, beträgt dieser standardmäßig 100%. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()`-Farben werden in {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relative Wert-Syntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, um eine relative Farbe zu definieren, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (in diesem Fall gleich `0deg`), das den Farbtonwinkel der Ausgabefarbe darstellt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weiße der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall gleich `0%`), um zu mischen. `0%` steht für keine Weiße. `100%` steht für volle Weiße, wenn `B` `0` ist, andernfalls werden sowohl die Werte `W` als auch `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall gleich `0%`), um zu mischen. `0%` steht für keine Schwärze. `100%` steht für volle Schwärze, wenn `W` `0` ist, andernfalls werden sowohl die Werte `W` als auch `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alpha-Kanal-Wert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Außerdem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben ist, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()`-Farbwerten zu `color(srgb)` serialisiert. Das bedeutet, dass bei Abfrage des Ausgabefarbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) Wert zurückgegeben wird.

### Definition von relativen Farbkanal-Ausgabekomponenten

Beim Verwenden der relativen Farbsyntax innerhalb einer `hwb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine gleichwertige HWB-Farbe (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `h` (Farbton), `w` (Weiß) und `b` (Schwarz) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Kanalwert wird in eine `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Die `w`- und `b`-Kanäle werden jeweils in eine `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird in eine `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele aufgenommen, um einen Einstiegspunkt für das Erlernen der relativen `hwb()`-Syntax zu bieten.

Lassen Sie uns mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`) beginnen. Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte der Ursprungsfarbe (`0`, `0%` und `0%`) als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte der Farbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

Im obigen Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `hwb()` Äquivalent (`hwb(0 0% 0%)`).
- Setzt die `H`- und `B`-Kanalwerte für die Ausgabefarbe auf die `H`- und `B`-Kanalwerte des `hwb()`-Äquivalents der Ursprungsfarbe — diese Werte sind `0` und `0%`, jeweils.
- Setzt den `W`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB-Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe umgewandelt, damit sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den bislang in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, entspricht er standardmäßig demselben Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher betragen die Ursprungs- und Ausgabefarbeneinheiten für die Beispiele oben `1`.

Schauen wir uns einige Beispiele an, die die Ursprungs- und Ausgabefarbeneinheiten angeben. Das erste gibt den Alphakanalwert der Ausgabefarbe identisch mit dem der Ursprungsfarbe an, während das zweite einen anderen Ausgabefarbeneinheitenwert festlegt, der nichts mit dem Alphakanalwert der Ursprungsfarbe zu tun hat.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in eine `hwb()`-Darstellung konvertiert — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`-, `W`-, `B`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9)` im sRGB-Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie beim Verwenden in Berechnungen Zahlen zu ihnen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von relativen Farben mit hwb()

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestaltet. Das mittlere Element erhält die unveränderte `--base-color`, während die linke und rechte Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird in eine `hwb()`-Funktion eingegeben und die Ausgabefarben haben ihre Weiße und Schwarze Kanäle verändert, um den gewünschten Effekt mit einer `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 30% zu ihrem Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% zu ihrem Schwarzkraut hinzugefügt.

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
- [Farbformat-Konverter-Tool](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modulk
- {{cssxref("hue")}}: der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
