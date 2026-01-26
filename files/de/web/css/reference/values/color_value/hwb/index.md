---
title: hwb()
slug: Web/CSS/Reference/Values/color_value/hwb
l10n:
  sourceCommit: db52e840c36da02f761984001bd25b603c84ee92
---

Die **`hwb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} basierend auf Farbton, Weißanteil und Schwarzanteil aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

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

Diese Farb-Funktion im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{cssxref("hue")}} Winkelwert, einen Weißanteil, einen Schwarzanteil und optional einen Alphawert definiert, der die Transparenz der Farbe repräsentiert.

Die Winkel, die bestimmten Farbtönen entsprechen, variieren zwischen den sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. `hwb()` befindet sich im selben Farbraum wie `hsl()` und hat daher die gleichen Farbwinkel. Siehe die {{cssxref("hue")}} Referenzseite für mehr Details und Beispiele, oder probieren Sie das Ändern der Farbtöne im [Farbauswahlinstrument](/de-DE/docs/Web/CSS/Guides/Colors#colors_in_action), um es in Aktion zu sehen.

Eine `hwb()` Farbe ist vollständig gesättigt, wenn sowohl der Weißanteil (`W`) als auch der Schwarzanteil (`B`) `0` sind. Für jeden Farbtonwert `H` ist `hwb(H 0% 0%)` dieselbe Farbe wie `hsl(H 100% 50%)`. Wenn der Weißanteil erhöht wird, wird die Farbe heller. Erhöht man den Schwarzanteil, wird die Farbe dunkler.

Wenn sowohl Schwarzanteil als auch Weißanteil größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn der Weiß- und Schwarzanteil zusammen gleich oder größer als 100 % sind — in anderen Worten, wenn `W + B >= 100%`, definiert die Farbfunktion einen Grauton. Wenn die Summe beider Werte größer als 100 % ist (`W + B > 100%`), werden die Weiß- und Schwarzanteilwerte der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Im Folgenden finden Sie Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de-DE/docs/Web/CSS/Guides/Colors/Using_relative_colors).

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den Farbtonwinkel der Farbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um eingemischt zu werden. `0%` repräsentiert keinen Weißanteil. `100%` repräsentiert vollen Weißanteil, wenn `B` `0` ist, ansonsten werden die Werte von `W` und `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um eingemischt zu werden. `0%` repräsentiert keinen Schwarzanteil. `100%` repräsentiert vollen Schwarzanteil, wenn `W` `0` ist, ansonsten werden die Werte von `W` und `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn er enthalten ist, geht ihm ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de-DE/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}} Werten serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den Farbtonwinkel der Ausgabefarbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um eingemischt zu werden. `0%` bedeutet keinen Weißanteil. `100%` bedeutet vollen Weißanteil, wenn `B` `0` ist, andernfalls werden die `W`- und `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um eingemischt zu werden. `0%` bedeutet keinen Schwarzanteil. `100%` bedeutet vollen Schwarzanteil, wenn `W` `0` ist, andernfalls werden die `W`- und `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben wird, übernimmt er standardmäßig den Alphakanalwert der Ursprungsfarbe. Wenn er enthalten ist, geht ihm ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Um die vollständige Darstellung des sichtbaren Farbspektrums zu ermöglichen, wird die Ausgabe von relativen `hwb()` Farb-Funktionen zu `color(srgb)` serialisiert. Das bedeutet, dass beim Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color) Wert zurückgegeben wird.

### Definition der Ausgabefarbkanalkomponenten bei relativen Farben

Wenn relative Farbsyntax innerhalb einer `hwb()` Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe (falls sie nicht bereits so spezifiziert ist). Die Farbe wird als drei verschiedene Farbberechnungswerte definiert — `h` (Farbton), `w` (weiß) und `b` (schwarz) — sowie ein Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Kanalwert wird auf ein `<number>` zwischen `0` und `360` aufgelöst, inklusive.
- Die `w`- und `b`-Kanäle werden jeweils auf ein `<number>` zwischen `0` und `100` aufgelöst, inklusive.
- Der `alpha`-Kanal wird auf ein `<number>` zwischen `0` und `1` aufgelöst, inklusive.

Beim Definieren einer relativen Farbe können die unterschiedlichen Kanäle der Ausgabefarbe auf verschiedene Weisen ausgedrückt werden. Im Folgenden zeigen wir einige Beispiele, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen keine wirklichen relativen Farben! In einem echten Code würden Sie diese wahrscheinlich nicht verwenden und stattdessen einfach einen absoluten Farbwert nutzen. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über relative `hwb()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte (`0`, `0%` und `0%`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Pendant von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte, wodurch sie eine völlig andere Farbe ausgibt, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()` Pendant von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

In diesem Beispiel:

- Wird die Ursprungsfarbe (`hsl(0 100% 50%)`) in eine `hwb()` Entsprechung (`hwb(0 0% 0%)`) umgewandelt.
- Werden die `H`- und `B`-Kanalwerte der Ausgabefarbe auf die `H`- und `B`-Kanalwerte der `hwb()` Entsprechung der Ursprungsfarbe gesetzt — diese Werte sind `0` und `0%`.
- Wird der `W`-Kanalwert der Ausgabefarbe auf einen neuen Wert gesetzt, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder den gleichen Raum wie die Ausgabefarbe umgewandelt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, um sie auf eine Weise darzustellen, die kompatibel ist (d.h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle für die Ursprungs- und Ausgabefarben nicht explizit spezifiziert. Wenn der Ausgabefarbenalphakanal nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Ursprungsfarbenalphakanal voreingestellt. Wenn der Ursprungsfarbenalphakanal nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird er auf `1` gesetzt. Daher sind die Ursprung- und Ausgabealphakanalwerte für die obigen Beispiele `1`.

Lassen Sie uns einige Beispiele betrachten, die Ursprungs- und Ausgabefarbenalphakanalwerte spezifizieren. Das erste Beispiel gibt den Ausgabefarbenalphakanalwert als gleichen Wert wie den Ursprungsalphakanalwert an, während das zweite Beispiel einen anderen Ausgabefarbkanalwert angibt, der nicht auf dem Ursprungsalphakanalwert basiert.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in eine `hwb()` Darstellung konvertiert — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`-, `W`-, `B`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9)` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>` Werte aufgelöst werden, müssen Sie diesen, wenn sie in Berechnungen verwendet werden, Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen annehmen würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung relativer Farben mit hwb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während die linken und rechten eine aufgehellte bzw. abgedunkelte Variante dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de-DE/docs/Web/CSS/Reference/Properties/--*) wird in eine `hwb()` Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarzkanäle modifiziert, um die gewünschte Wirkung über eine `calc()` Funktion zu erzielen. Der aufgehellten Farbe werden 30 % zum Weißkanal hinzugefügt, und der abgedunkelten Farbe werden 30 % zum Schwarzkanal hinzugefügt.

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
- [Farbformat-Konverter Werkzeug](/de-DE/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Verwendung relativer Farben](/de-DE/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS Farben](/de-DE/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("hue")}}: der Datentyp, der einen Farbtonwinkel einer Farbe repräsentiert
