---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Die **`hwb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} entsprechend ihrem Farbton, Weißanteil und Schwarzanteil aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

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

Diese Farb-Funktion im {{Glossary("Color_space#srgb", "`sRGB`-Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}}-Winkelwert, einen Weißanteil, einen Schwarzanteil und optional einen Alphawert zur Darstellung der Transparenz der Farbe definiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im selben Farbraum wie `hsl()` und hat daher dieselben Farbton-Winkel. Weitere Details und Beispiele finden Sie auf der {{CSSXref("&lt;hue&gt;")}} Referenzseite oder probieren Sie die Farbtöne im [Farbpicker](/de/docs/Web/CSS/CSS_colors#colors_in_action) aus, um es in Aktion zu sehen.

Eine `hwb()`-Farbe ist vollständig gesättigt, wenn sowohl der Weißanteil (`W`) als auch der Schwarzanteil (`B`) bei `0` liegen. Für jeden Farbwert `H` ist `hwb(H 0% 0%)` dieselbe Farbe wie `hsl(H 100% 50%)`. Das Erhöhen des Weißanteils hellt die Farbe auf. Das Erhöhen des Schwarzanteils verdunkelt die Farbe.

Wenn sowohl der Schwarz- als auch der Weißanteil größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Menge des hinzugefügten Weiß- und Schwarzanteils zusammen 100% oder mehr ergibt – in anderen Worten, wenn `W + B >= 100%`, definiert die Farb-Funktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzwerte der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachfolgend sind die Beschreibungen der zulässigen Werte sowohl für absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe darstellt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe angibt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das hinzumischen ist. `0%` steht für keinen Weißanteil. `100%` steht für vollen Weißanteil, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe angibt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das hinzumischen ist. `0%` steht für keinen Schwarzanteil. `100%` steht für vollen Schwarzanteil, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben ist, wird er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()`-Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}}-Werten serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer eingeschlossen, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe darstellt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe angibt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das hinzumischen ist. `0%` steht für keinen Weißanteil. `100%` steht für vollen Weißanteil, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe angibt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das hinzumischen ist. `0%` steht für keinen Schwarzanteil. `100%` steht für vollen Schwarzanteil, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht ausdrücklich angegeben ist, wird er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Repräsentation des vollständigen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()`-Farb-Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

### Definition von Farbausgabekanal-Komponenten bei relativen Farben

Bei Verwendung der relativen Farbsyntax innerhalb einer `hwb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei separate Farbkanal-Werte definiert – `h` (Farbton), `w` (Weiß) und `b` (Schwarz) – plus ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanal-Werte verwendet zu werden:

- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360`, inklusive, aufgelöst.
- Die `w`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele betrachten, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen wirklich keine relativen Farben! Sie würden solche wahrscheinlich nie in einem echten Code verwenden und wahrscheinlich stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um mehr über die relative `hwb()`-Syntax zu lernen.

Lassen Sie uns mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`) beginnen. Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte (`0`, `0%` und `0%`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `hwb()`-Äquivalent (`hwb(0 0% 0%)`).
- Setzt die `H` und `B` Kanalwerte für die Ausgabefarbe auf die `H` und `B` Kanalwerte des `hwb()`-Äquivalents der Ursprungsfarbe — diese Werte sind `0` und `0%`.
- Setzt den `W` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die finale Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe in den Hintergrund auf das gleiche Modell oder denselben Farbraum wie die Ausgabefarbe konvertiert, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, sodass sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. mit denselben Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Ausgabefarben-Alphakanal nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Ursprungs-Alphakanal gesetzt. Wenn der Ursprungs-Alphakanal nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er standardmäßig auf `1` gesetzt. Daher sind die Ursprungs- und Ausgabefarb-Alphakanalwerte `1` für die obigen Beispiele.

Lassen Sie uns einige Beispiele betrachten, die Ursprungs- und Ausgabefarben-Alphakanalwerte angeben. Das erste Beispiel spezifiziert den Ausgabefarben-Alphakanalwert als derselbe wie der Ursprungs-Alphakanalwert, während das zweite Beispiel einen anderen Ausgabefarben-Alphakanalwert spezifiziert, der nicht mit dem Ursprungs-Alphakanalwert in Verbindung steht.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe wieder in eine `hwb()` Repräsentation konvertiert — `hwb(0 0% 0%)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`, `W`, `B` und `A` Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9` im sRGB-Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungs-Farbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie diesen bei Berechnungen Werte hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>`-Wertes zu einem `<number>`-Wert funktioniert zum Beispiel nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung relativer Farben mit hwb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unmodifizierte `--base-color`, während die linken und rechten Elementen aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird an eine `hwb()`-Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarztöne modifiziert, um den gewünschten Effekt mit einer `calc()`-Funktion zu erzielen. Der aufgehellte Farbton hat 30% zum Weißkanal hinzugefügt, und der abgedunkelte Farbton hat 30% zum Schwarztöne hinzugefügt.

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

- {{CSSXref("&lt;color&gt;")}}: Für eine Liste aller Farbnationen
- [Farbformat-Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: Der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
