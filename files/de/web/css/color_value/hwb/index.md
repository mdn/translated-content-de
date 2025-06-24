---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`hwb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} basierend auf ihrem Farbton, Weißanteil und Schwarzanteil aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

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

Diese Farb-Funktion im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißanteilwert, einen Schwarzanteilwert und optional einen Alphawert, der die Transparenz der Farbe darstellt, definiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich über die sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräume. `hwb()` befindet sich im gleichen Farbraum wie `hsl()` und hat daher die gleichen Farbwinkel. Weitere Details und Beispiele finden Sie auf der {{CSSXref("&lt;hue&gt;")}} Referenzseite oder versuchen Sie, die Farbtöne im [Farbauswahl-Werkzeug](/de/docs/Web/CSS/CSS_colors#colors_in_action) zu ändern, um es in Aktion zu sehen.

Eine `hwb()` Farbe ist vollständig gesättigt, wenn sowohl der Weißanteil (`W`) als auch der Schwarzanteil (`B`) Werte von `0` haben. Für jeden Farbtonwert `H` ist `hwb(H 0% 0%)` die gleiche Farbe wie `hsl(H 100% 50%)`. Das Erhöhen des Weißanteils hellt die Farbe auf. Das Erhöhen des Schwarzanteils dunkelt die Farbe ab.

Sind sowohl Schwarz- als auch Weißanteil größer als 0, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Summe aus Weiß- und Schwarzanteil gleich oder größer als 100 % ist — in anderen Worten, wenn `W + B >= 100%`, definiert die Farb-Funktion einen Grauton. Ist die Summe beider Werte größer als 100 % (`W + B > 100%`), werden die Weiß- und Schwarzwerte der grauen Farbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachfolgend sind Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

### Absolute Wert-Syntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe repräsentiert.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). `0%` steht für keinen Weißanteil. `100%` steht für vollen Weißanteil, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). `0%` steht für keinen Schwarzanteil. `100%` steht für vollen Schwarzanteil, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wird der `A`-Kanalwert nicht explizit angegeben, ist der Standardwert 100%. Wenn er angegeben wird, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()` Farben werden in {{CSSXref("color_value/rgb", "rgb()")}} Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relative Wert-Syntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer angegeben, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleichbedeutend mit `0deg` in diesem Fall), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Ausgabefarbe repräsentiert.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). `0%` steht für keinen Weißanteil. `100%` steht für vollen Weißanteil, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall). `0%` steht für keinen Schwarzanteil. `100%` steht für vollen Schwarzanteil, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wird der `A`-Kanalwert nicht explizit angegeben, entspricht er standardmäßig dem Alphakanalwert der Ursprungsfarbe. Wenn er angegeben wird, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des vollen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe der relativen `hwb()` Farb-Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des ausgegebenen Farbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den ausgegebenen Farbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

### Definition der Ausgabekanalkomponenten relativer Farben

Bei Verwendung der relativen Farbsyntax innerhalb einer `hwb()` Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte — `h` (Farbton), `w` (Weiß), und `b` (Schwarz) — plus einem Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Kanalwert wird in eine `<number>` zwischen `0` und `360`, inklusive, aufgelöst.
- Die `w` und `b` Kanäle werden jeweils in eine `<number>` zwischen `0` und `100`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird in eine `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden folgenden Beispielen verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `hwb()` Syntax einbezogen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w`, und `b` Kanalwerte (`0`, `0%`, und `0%`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `hwb()` Äquivalent (`hwb(0 0% 0%)`).
- Setzt die `H` und `B` Kanalwerte für die Ausgabefarbe auf die der `hwb()` Äquivalent der Ursprungsfarbe — diese Werte sind `0` und `0%`, jeweils.
- Setzt den `W` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, damit sie in einer kompatiblen Weise dargestellt werden kann (d. h. unter Verwendung der gleichen Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, ist der Standardwert derselbe wie der Alphakanalwert der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Ursprungs- und Ausgabewerte des Alphakanals für die oben genannten Beispiele `1`.

Schauen wir uns einige Beispiele an, die die Ursprungs- und Ausgabewerte des Alphakanals angeben. Das erste gibt den Wert des Ausgabekanals als gleich dem Wert des Ursprungsalphakanals an, während das zweite einen anderen Wert angibt, der nichts mit dem Ursprungsalphakanal zu tun hat.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in eine `hwb()` Darstellung konvertiert — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B`, und `A` Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>` Werte aufgelöst werden, müssen Sie ihnen bei Verwendung in Berechnungen Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Wertetypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung relativer Farben mit hwb()

Dieses Beispiel stylt drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unmodifizierte `--base-color` zugewiesen, während die linken und rechten Varianten dieser `--base-color` Aufhellung bzw. Abdunkelung erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hwb()` Funktion eingegeben, und die Ausgabefarben haben ihre Weiß- und Schwarztöne geändert, um den gewünschten Effekt über eine `calc()` Funktion zu erreichen. Die aufgehellte Farbe hat 30 % zum Weißkanal hinzugefügt und die abgedunkelte Farbe hat 30 % zum Schwarzkanel hinzugefügt.

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

- {{CSSXref("&lt;color&gt;")}}: Für eine Übersicht aller Farbnationalitäten
- [Farbwähler und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der den Farbton eines Winkels repräsentiert.
