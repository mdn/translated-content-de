---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

Die **`hwb()`** Funktionalnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} basierend auf ihrem Farbton, Weißanteil und Schwarzanteil aus. Ein optionaler Alphakanal repräsentiert die Transparenz der Farbe.

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

Diese Farb-Funktion im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen Winkelwert für {{CSSXref("&lt;hue&gt;")}}, einen Weißanteilswert, einen Schwarzanteilswert und optional einen Alphawert definiert, der die Transparenz der Farbe repräsentiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB-Farbraum (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), im CIELAB-Farbraum (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und im Oklab-Farbraum (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im selben Farbraum wie `hsl()` und hat daher die gleichen Farbtonwinkel. Siehe die {{CSSXref("&lt;hue&gt;")}} Referenzseite für mehr Details und Beispiele oder probieren Sie das Ändern der Farbtöne im [Farbwähler](/de/docs/Web/CSS/CSS_colors#colors_in_action) aus, um es in Aktion zu sehen.

Eine `hwb()`-Farbe ist vollständig gesättigt, wenn der Weißanteil (`W`) und der Schwarzanteil (`B`) beide `0` sind. Für jeden Farbwert `H` ist `hwb(H 0% 0%)` die gleiche Farbe wie `hsl(H 100% 50%)`. Eine Erhöhung des Weißanteils hellt die Farbe auf. Eine Erhöhung des Schwarzanteils verdunkelt die Farbe.

Wenn sowohl der Schwarzanteil als auch der Weißanteil größer als 0 sind, wird die Farbe gedämpft und tendiert zu grau. Wenn die Summe der hinzugefügten Weiß- und Schwarzanteile gleich oder größer als 100% ist — mit anderen Worten, wenn `W + B >= 100%`, dann definiert die Farbfunktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzanteile der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachstehend sind Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

### Absoluter Wert Syntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall) repräsentiert den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentierend den Weißanteil der Farbe oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` steht für keinen Weißanteil. `100%` repräsentiert vollen Weißanteil, falls `B` `0` ist, andernfalls werden sowohl die `W`- als auch `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentierend den Schwarzanteil der Farbe oder das Schlüsselwort `none``none``none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` steht für keinen Schwarzanteil. `100%` repräsentiert vollen Schwarzanteil, falls `W` `0` ist, andernfalls werden sowohl die `W`- als auch `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentierend den Alpha-Kanalwert der Farbe, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, ist der Standardwert 100%. Wenn eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Weitere Informationen über den Effekt von `none` auf fehlende Farbkomponenten finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()`-Farben werden in {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relative Wert Syntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (äquivalent zu `0deg` in diesem Fall) repräsentiert den {{CSSXref("&lt;hue&gt;")}} Winkel der Ausgabefarbe.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentierend den Weißanteil der Farbe oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` steht für keinen Weißanteil. `100%` repräsentiert vollen Weißanteil, falls `B` `0` ist, andernfalls werden sowohl die `W`- als auch `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}} repräsentierend den Schwarzanteil der Farbe oder das Schlüsselwort `none` (äquivalent zu `0%` in diesem Fall) zum Mischen. `0%` steht für keinen Schwarzanteil. `100%` repräsentiert vollen Schwarzanteil, falls `W` `0` ist, andernfalls werden sowohl die `W`- als auch `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentierend den Alpha-Kanalwert der Ausgabefarbe, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig opak) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um ausdrücklich keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, entspricht er dem Alpha-Kanalwert der Ursprungsfarbe. Wenn eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe der relativen `hwb()`-Farbfunktionen in `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

### Definieren der relativen Farbkanalkomponenten

Bei Verwendung der relativen Farbsyntax in einer `hwb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `h` (Farbton), `w` (weiß) und `b` (schwarz) — plus ein Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360`, einschließlich, aufgelöst.
- Die `w`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100`, einschließlich, aufgelöst.
- Der `alpha` Kanal wird auf einen `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Unten werden wir einige Beispiele untersuchen, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Jedoch gibt das erste Beispiel die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Diese erzeugen also eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einem echten Code benutzen und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `hwb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (äquivalent zu `hwb(0 0% 0%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte der Ursprungsfarbe (`0`, `0%`, und `0%`) als die Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabekanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe auf der Basis der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `hwb()` Äquivalent (`hwb(0 0% 0%)`).
- Setzt die `H`- und `B`-Kanalwerte für die Ausgabefarbe auf die des `hwb()`-Äquivalents der Ursprungsfarbe — diese Werte sind `0` und `0%`, jeweils.
- Setzt den `W`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB-Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, sodass sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung der gleichen Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanalwert der Ausgabefarbe nicht angegeben ist, entspricht er standardmäßig dem Alpha-Kanalwert der Ursprungsfarbe. Wenn der Alphakanal bei der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt der Standardwert `1`. Daher sind die Ursprungs- und Ausgabekanalwerte `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarbkanalwerte angeben. Das erste Beispiel spezifiziert den Ausgabefarbkanalwert als gleich dem Alphakanalwert der Ursprungsfarbe, während das zweite einen anderen Ausgabefarbkanalwert festlegt, der nicht mit dem Alphakanalwert der Ursprungsfarbe in Verbindung steht.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe wieder in eine `hwb()` Darstellung konvertiert — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B`, und `A` Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9)` im sRGB-Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie ihnen beim Verwenden in Berechnungen Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen akzeptieren würde. Das Addieren eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von relativen Farben mit hwb()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere bekommt die unveränderte `--base-color`, während das linke und rechte aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hwb()`-Funktion übergeben, und die Ausgabefarben haben ihre weißen und schwarzen Kanäle modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erreichen. Die aufgehellte Farbe hat 30% zum Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum Schwarzkkanal hinzugefügt.

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
- [Farbwähler und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
