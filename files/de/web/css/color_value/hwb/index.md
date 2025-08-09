---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
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

Diese Farbfunktionsnotation im {{Glossary("Color_space#srgb", "`sRGB`-Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißanteil, einen Schwarzanteil und optional einen Alphawert, der die Transparenz der Farbe repräsentiert, definiert.

Die Winkel, die bestimmten Farbtönen entsprechen, variieren in den Farbräumen sRGB (verwendet durch {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet durch {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet durch {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im gleichen Farbraum wie `hsl()` und hat daher die gleichen Farbtonwinkel. Siehe die {{CSSXref("&lt;hue&gt;")}} Referenzseite für weitere Details und Beispiele oder versuchen Sie, die Farbtöne im [Farbwähler](/de/docs/Web/CSS/CSS_colors#colors_in_action) zu ändern, um dies in Aktion zu sehen.

Eine `hwb()` Farbe ist vollständig gesättigt, wenn ihre Weiß- (`W`) und Schwarzwerte (`B`) beide `0` sind. Für jeden Farbtonwert `H` ist `hwb(H 0% 0%)` die gleiche Farbe wie `hsl(H 100% 50%)`. Das Erhöhen des Weiß- erhöht die Helligkeit der Farbe. Das Erhöhen des Schwazwerts macht die Farbe dunkler.

Wenn sowohl der Schwarz- als auch der Weißwert größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Summe der hinzugefügten Weiß- und Schwarzwerte gleich oder größer als 100% ist — mit anderen Worten, wenn `W + B >= 100%` — definiert die Farbfunktionsnotation einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzwerte der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachfolgend sind Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0deg`), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`) zum Mischen. `0%` bedeutet kein Weißanteil. `100%` bedeutet voller Weißanteil, wenn `B` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`) zum Mischen. `0%` bedeutet kein Schwarzanteil. `100%` bedeutet voller Schwarzanteil, wenn `W` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Falls inkludiert, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

> [!NOTE]
> Absolute `hwb()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}} Werten serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer beim Definieren einer relativen Farbe eingefügt, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** repräsentiert. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}} oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0deg`), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Ausgabefarbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Weißanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`) zum Mischen. `0%` bedeutet kein Weißanteil. `100%` bedeutet voller Weißanteil, wenn `B` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das den Schwarzanteil der Farbe repräsentiert, oder das Schlüsselwort `none` (in diesem Fall äquivalent zu `0%`) zum Mischen. `0%` bedeutet kein Schwarzanteil. `100%` bedeutet voller Schwarzanteil, wenn `W` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben ist, wird er auf den Alphakanalwert der Ursprungsfarbe standardisiert. Falls inkludiert, wird der Wert durch einen Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Um die Darstellung des gesamten sichtbaren Farbspektrums vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()` Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

### Definierung der Kanalkomponenten einer relativen Farbenausgabe

Wenn man relative Farbsyntax innerhalb einer `hwb()` Funktion benutzt, konvertiert der Browser die Ursprungsfarbe in eine gleichwertige HWB-Farbe (falls sie nicht bereits so angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte – `h` (Farbton), `w` (weiß) und `b` (schwarz) – sowie ein Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um beim Definieren der Kanalausgabewerte der Farben genutzt zu werden:

- Der `h` Kanalwert wird auf eine `<number>` zwischen `0` und `360` aufgelöst.
- Die `w` und `b` Kanäle werden jeweils auf eine `<number>` zwischen `0` und `100` aufgelöst.
- Der `alpha` Kanal wird auf eine `<number>` zwischen `0` und `1` aufgelöst.

Wenn man eine relative Farbe definiert, können die unterschiedlichen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden untersuchen wir einige Beispiele, um dies zu verdeutlichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Allerdings gibt das erste Beispiel die gleiche Farbe wie die Ursprungsfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Wahrscheinlich würden Sie diese nie in einer realen Codebasis verwenden, sondern stattdessen einen absoluten Farbwert benutzen. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `hwb()` Syntax beigefügt.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie nutzt die `h`, `w` und `b` Kanalwerte (`0`, `0%` und `0%`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()` Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanäle der Ausgabefarbe und erzeugt eine völlig andere Farbe, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB `color()` Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe, die auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Wandelt die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein äquivalentes `hwb()` um (`hwb(0 0% 0%)`).
- Setzt die `H` und `B` Kanalwerte für die Ausgabefarbe auf die `H` und `B` Kanalwerte der `hwb()` Ursprungsfarbe — diese Werte sind `0` und `0%`.
- Setzt den `W` Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe entspricht `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. die gleichen Kanäle verwendet).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit definiert. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert ist, übernimmt er den gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert ist (und es keine relative Farbe ist), ist sein Standardwert `1`. Daher sind die Alpha-Werte für die Ursprung- und Ausgabefarben in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabealphakanalwerte spezifizieren. Im ersten Beispiel wird der Ausgabealphakanalwert als gleich dem Ursprungsalphakanalwert festgelegt, während im zweiten Beispiel ein anderer Ausgabealphakanalwert, der nicht auf dem Ursprungsalphakanalwert basiert, festgelegt wird.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in eine `hwb()` Darstellung umgewandelt — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B`, und `A` Werte angewendet und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>` Werte aufgelöst werden, müssen Zahlen hinzugefügt werden, wenn sie in Berechnungen verwendet werden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von relativen Farben mit hwb()

Dieses Beispiel stylt drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere bekommt die unmodifizierte `--base-color`, während die linken und rechten Varianten dieser `--base-color` aufgehellt und abgedunkelt sind.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hwb()` Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarzkanäle modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 30% zum Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum Schwarzkanal hinzugefügt.

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

- {{CSSXref("&lt;color&gt;")}}: Für eine Liste aller Farbfunktionen
- [Farbwähler und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der den Farbtonwinkel einer Farbe repräsentiert
