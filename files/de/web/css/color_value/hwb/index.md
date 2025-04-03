---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`hwb()`** Funktionalnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} entsprechend ihrem Farbton, Weißanteil und Schwarzanteil aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

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

Diese Farbfunktionsnotation im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißwert, einen Schwarzanteil und optional einen Alphawert, der die Transparenz der Farbe repräsentiert, definiert.

Die den Farbtönen entsprechenden Winkel unterscheiden sich in den sRGB- (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB- (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab- (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. `hwb()` befindet sich im gleichen Farbraum wie `hsl()`, und hat daher die gleichen Farbtonfarbenwinkel. Siehe die {{CSSXref("&lt;hue&gt;")}} Referenzseite für weitere Details und Beispiele, oder probieren Sie das Ändern der Farbtöne im [Farbwähler](/de/docs/Web/CSS/CSS_colors#colors_in_action) aus, um es in Aktion zu sehen.

Eine `hwb()` Farbe ist vollständig gesättigt, wenn ihre Weiß- (`W`) und Schwarz- (`B`) Werte beide `0` sind. Für jeden Farbtonwert `H`, `hwb(H 0% 0%)` ist die gleiche Farbe wie `hsl(H 100% 50%)`. Das Erhöhen des Weißwertes hellt die Farbe auf. Das Erhöhen des Schwarzanteils verdunkelt die Farbe.

Wenn sowohl der Schwarz- als auch der Weißanteil größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Menge des hinzugefügten Weiß- und Schwarzanteils gleich oder größer als 100% ist — mit anderen Worten, wenn `W + B >= 100%`, definiert die Farbfunktionsnotation einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzanteile der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Im Folgenden sind die zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) beschrieben.

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe darstellt.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe darstellt, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). `0%` repräsentiert keinen Weißanteil. `100%` steht für vollständigen Weißanteil, wenn `B` `0` ist, ansonsten werden sowohl die `W` als auch `B` Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe darstellt, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`) zum Mischen. `0%` repräsentiert keinen Schwarzanteil. `100%` steht für vollständigen Schwarzanteil, wenn `W` `0` ist, ansonsten werden sowohl die `W` als auch `B` Werte normalisiert.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

> [!NOTE]
> Absolute `hwb()` Farben werden in {{CSSXref("color_value/rgb", "rgb()")}} Werte serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können in der Serialisierung gerundet sein.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **ursprüngliche Farbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den Ausgabe-Farbtonwinkel der Farbe darstellt.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}} das den Weißanteil der Farbe darstellt oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall) zum Mischen. `0%` repräsentiert keinen Weißanteil. `100%` steht für vollständigen Weißanteil, wenn `B` `0` ist, ansonsten werden sowohl die `W` als auch `B` Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}} das den Schwarzanteil der Farbe darstellt oder das Schlüsselwort `none` (gleichbedeutend mit `0%` in diesem Fall) zum Mischen. `0%` repräsentiert keinen Schwarzanteil. `100%` steht für vollständigen Schwarzanteil, wenn `W` `0` ist, ansonsten werden sowohl die `W` als auch `B` Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alphakanalwert der Ausgabe-Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben ist, wird er auf den Alphakanalwert der Ursprungsfarbe standardisiert. Falls enthalten, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()` Farbfunktionsnotationen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabe-Farbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabe-Farbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

### Definieren von relativen Farb-Ausgabekanal-Komponenten

Bei der Verwendung relativer Farbsyntax innerhalb einer `hwb()` Funktion, konvertiert der Browser die Ursprungsfarbe in eine gleichwertige HWB-Farbe (wenn sie nicht bereits als solche spezifiziert ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `h` (Farbton), `w` (Weiß) und `b` (Schwarz) — plus einen Alphakanalwert (`alpha`). Diese Kanalwerte sind innerhalb der Funktion verfügbar, um verwendet zu werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Der `h` Kanalwert wird auf einen `<number>` zwischen `0` und `360`, einschließlich, aufgelöst.
- Die `w` und `b` Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100`, einschließlich, aufgelöst.
- Der `alpha` Kanal wird auf einen `<number>` zwischen `0` und `1`, einschließlich, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele betrachten, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch die gleiche Farbe wie die Ursprungsfarbe und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen wirklich keine relativen Farben! In einem echten Quelltext würden Sie diese wahrscheinlich nie verwenden, sondern stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um mehr über die relative `hwb()` Syntax zu lernen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte (`0`, `0%`, und `0%`) der Ursprungsfarbe als die Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Das Ergebnis der Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist das Ergebnis die sRGB `color()` Entsprechung von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `hwb()` Äquivalent (`hwb(0 0% 0%)`).
- Setzt die `H` und `B` Kanalwerte für die Ausgabefarbe auf die der Ursprungsfarbe `hwb()` Äquivalent-Werte — diese Werte sind `0` und `0%`, jeweils.
- Setzt den `W` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB-Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, damit sie in einer Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung der gleichen Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alpha-Kanal der Ausgabefarbe nicht angegeben wird, wird er auf denselben Wert wie der Alpha-Kanal der Ursprungsfarbe standardisiert. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), wird der Wert auf `1` standardisiert. Daher sind die Alpha-Kanalwerte der Ursprungs- und Ausgabefarben `1` für die obigen Beispiele.

Lassen Sie uns einige Beispiele betrachten, die die Ursprungs- und Ausgabefarb-Alphakanalwerte angeben. Das erste Beispiel gibt den Ausgabefarb-Alphakanalwert als denselben wie den Ursprungs-Alphakanalwert an, während das zweite Beispiel einen anderen Ausgabefarb-Alphakanalwert angibt, der nicht mit dem Ursprungs-Alphakanalwert zusammenhängt.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe wieder in eine `hwb()` Darstellung umgewandelt — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B` und `A` Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9` im sRGB-Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarb-Kanalwerte in `<number>` Werte aufgelöst werden, müssen Sie ihnen in Berechnungen Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen akzeptieren würde. Ein `<percentage>` zu einem `<number>` hinzuzufügen, funktioniert zum Beispiel nicht.

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Verwenden von relativen Farben mit hwb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten Varianten von dieser `--base-color` aufgehellt und abgedunkelt wurden.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hwb()` Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarztöne modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 30% zum weißen Kanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum schwarzen Kanal hinzugefügt.

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

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("Using relative colors with hwb()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}: Eine Liste aller Farbnotationen
- [Farbwähler und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwenden von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
