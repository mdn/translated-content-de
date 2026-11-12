---
title: CSS-Funktion `hwb()`
short-title: hwb()
slug: Web/CSS/Reference/Values/color_value/hwb
l10n:
  sourceCommit: 5cea7df435db1905b06d693b0192ef1e2166d6a7
---

Die funktionale Notation **`hwb()`** beschreibt eine Farbe im {{Glossary("RGB", "sRGB-")}}{{Glossary("color_space", "Farbraum")}} anhand ihres Farbtons, ihres Weißanteils und ihres Schwarzanteils. Eine optionale Alpha-Komponente gibt die Transparenz der Farbe an.

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

## Werte

Im Folgenden werden die zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) beschrieben.

### Syntax für absolute Werte

```plain
hwb(H W B[ / A])
```

Die Parameter sind:

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den {{cssxref("hue")}}-Winkel der Farbe angibt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der den beizumischenden Weißanteil der Farbe angibt, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). `0%` bedeutet, dass kein Weiß beigemischt wird. `100%` bedeutet vollständiges Weiß, wenn `B` gleich `0` ist; andernfalls werden die Werte von `W` und `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der den beizumischenden Schwarzanteil der Farbe angibt, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). `0%` bedeutet, dass kein Schwarz beigemischt wird. `100%` bedeutet vollständiges Schwarz, wenn `W` gleich `0` ist; andernfalls werden die Werte von `W` und `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alpha-Kanals der Farbe angibt. Dabei entspricht die Zahl `0` dem Wert `0%` (vollständig transparent) und `1` dem Wert `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alpha-Kanal vorhanden ist. Wird der Wert des Kanals `A` nicht ausdrücklich angegeben, ist sein Standardwert 100 %. Falls er angegeben wird, steht vor dem Wert ein Schrägstrich (`/`).

> [!NOTE]
> Weitere Informationen zur Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/Reference/Values/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()`-Farben werden als {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

### Syntax für relative Werte

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind:

- `from <color>`
  - : Beim Definieren einer relativen Farbe steht immer zuerst das Schlüsselwort `from`, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ausgangsfarbe** angibt. Auf dieser ursprünglichen Farbe basiert die relative Farbe. Die Ausgangsfarbe kann in _jeder_ gültigen {{cssxref("&lt;color&gt;")}}-Syntax angegeben werden, auch als weitere relative Farbe.

- `H`
  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{cssxref("angle")}} oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0deg`), das den {{cssxref("hue")}}-Winkel der Ausgabefarbe angibt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der den beizumischenden Weißanteil der Farbe angibt, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). `0%` bedeutet, dass kein Weiß beigemischt wird. `100%` bedeutet vollständiges Weiß, wenn `B` gleich `0` ist; andernfalls werden die Werte von `W` und `B` normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, der den beizumischenden Schwarzanteil der Farbe angibt, oder das Schlüsselwort `none` (in diesem Fall gleichbedeutend mit `0%`). `0%` bedeutet, dass kein Schwarz beigemischt wird. `100%` bedeutet vollständiges Schwarz, wenn `W` gleich `0` ist; andernfalls werden die Werte von `W` und `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Wert des Alpha-Kanals der Ausgabefarbe angibt. Dabei entspricht die Zahl `0` dem Wert `0%` (vollständig transparent) und `1` dem Wert `100%` (vollständig deckend). Mit dem Schlüsselwort `none` kann außerdem ausdrücklich angegeben werden, dass kein Alpha-Kanal vorhanden ist. Wird der Wert des Kanals `A` nicht ausdrücklich angegeben, wird der Wert des Alpha-Kanals der Ausgangsfarbe übernommen. Falls er angegeben wird, steht vor dem Wert ein Schrägstrich (`/`).

> [!NOTE]
> Damit das gesamte Spektrum sichtbarer Farben dargestellt werden kann, wird das Ergebnis relativer `hwb()`-Farbfunktionen als `color(srgb)` serialisiert. Das bedeutet: Wenn der Wert der Ausgabefarbe über die Eigenschaft [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) abgefragt wird, wird er als [`color(srgb ...)`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Wert zurückgegeben.

### Farbkanalkomponenten der Ausgabefarbe bei relativen Farben definieren

Wenn innerhalb einer `hwb()`-Funktion die Syntax für relative Farben verwendet wird, wandelt der Browser die Ausgangsfarbe in eine entsprechende HWB-Farbe um, sofern sie nicht bereits so angegeben ist. Die Farbe wird durch drei getrennte Farbkanalwerte definiert – `h` (Farbton), `w` (Weiß) und `b` (Schwarz) – sowie durch einen Wert für den Alpha-Kanal (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Farbkanalwerte der Ausgabefarbe zu definieren:

- Der Wert des Kanals `h` wird als `<number>` zwischen `0` und `360` einschließlich aufgelöst.
- Die Werte der Kanäle `w` und `b` werden jeweils als `<number>` zwischen `0` und `100` einschließlich aufgelöst.
- Der Wert des Kanals `alpha` wird als `<number>` zwischen `0` und `1` einschließlich aufgelöst.

Beim Definieren einer relativen Farbe lassen sich die verschiedenen Kanäle der Ausgabefarbe auf unterschiedliche Weise ausdrücken. Die folgenden Beispiele veranschaulichen einige Möglichkeiten.

Die ersten beiden Beispiele verwenden zwar die Syntax für relative Farben. Das erste gibt jedoch dieselbe Farbe wie die Ausgangsfarbe aus, und das zweite eine Farbe, die überhaupt nicht auf der Ausgangsfarbe basiert. Sie erzeugen also keine wirklich relativen Farben! In einer echten Codebasis würden Sie diese Varianten vermutlich kaum verwenden, sondern stattdessen einen absoluten Farbwert angeben. Sie dienen hier als Einstieg in die Syntax relativer `hwb()`-Farben.

Beginnen wir mit der Ausgangsfarbe `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ausgangsfarbe aus: Sie verwendet deren Kanalwerte für `h`, `w` und `b` (`0`, `0%` und `0%`) als Kanalwerte der Ausgabefarbe:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabefarbe dieser Funktion ist das sRGB-`color()`-Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Kanalwerte für die Ausgabefarbe. Dadurch gibt sie eine völlig andere Farbe aus, die nicht auf der Ausgangsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe auf Basis der Ausgangsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Wandelt die Ausgangsfarbe (`hsl(0 100% 50%)`) in ihr `hwb()`-Äquivalent (`hwb(0 0% 0%)`) um.
- Setzt die Kanalwerte `H` und `B` der Ausgabefarbe auf die entsprechenden Werte des `hwb()`-Äquivalents der Ausgangsfarbe – also auf `0` beziehungsweise `0%`.
- Setzt den Kanalwert `W` der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ausgangsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe entspricht `hwb(0 30% 0%)` im sRGB-Farbraum: `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ausgangsfarbe im Hintergrund in dasselbe Farbmodell beziehungsweise denselben Farbraum wie die Ausgabefarbe umgewandelt, falls die beiden unterschiedliche Farbmodelle verwenden. So kann sie in einer kompatiblen Form, also mit denselben Kanälen, dargestellt werden.

In den bisherigen Beispielen dieses Abschnitts wurden die Alpha-Kanäle weder für die Ausgangs- noch für die Ausgabefarben ausdrücklich angegeben. Wird der Alpha-Kanal der Ausgabefarbe nicht angegeben, übernimmt er den Wert des Alpha-Kanals der Ausgangsfarbe. Wird der Alpha-Kanal der Ausgangsfarbe nicht angegeben und handelt es sich nicht um eine relative Farbe, ist sein Standardwert `1`. Daher haben die Alpha-Kanäle der Ausgangs- und Ausgabefarben in den obigen Beispielen jeweils den Wert `1`.

Sehen wir uns einige Beispiele an, in denen Alpha-Kanalwerte für die Ausgangs- und Ausgabefarbe angegeben werden. Im ersten Beispiel hat der Alpha-Kanal der Ausgabefarbe denselben Wert wie der der Ausgangsfarbe. Im zweiten Beispiel erhält er einen anderen Wert, der unabhängig vom Alpha-Kanal der Ausgangsfarbe ist.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ausgangsfarbe erneut in eine `hwb()`-Darstellung umgewandelt: `hwb(0 0% 0%)`. Auf die Werte `H`, `W`, `B` und `A` werden {{cssxref("calc")}}-Berechnungen angewendet. Die endgültige Ausgabefarbe entspricht `hwb(120 25% 10% / 0.9)` im sRGB-Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanalwerte der Ausgangsfarbe als `<number>`-Werte aufgelöst werden, müssen Sie bei Berechnungen Zahlen zu ihnen addieren – auch wenn ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptiert. Beispielsweise funktioniert es nicht, einen `<percentage>`-Wert zu einem `<number>`-Wert zu addieren.

## Beschreibung

Diese Farbfunktion im {{Glossary("Color_space#srgb", "`sRGB`-Farbraum")}} wird durch einen {{cssxref("hue")}}-Winkel, einen Weißanteil, einen Schwarzanteil und optional einen Alpha-Wert definiert, der die Transparenz der Farbe angibt.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` verwendet denselben Farbraum wie `hsl()` und daher dieselben Farbtonwinkel. Weitere Einzelheiten und Beispiele finden Sie auf der Referenzseite zu {{cssxref("hue")}}. Sie können auch die Farbtöne im [Color Picker](/de/docs/Web/CSS/Guides/Colors#colors_in_action) ändern, um die Wirkung zu sehen.

Eine `hwb()`-Farbe ist vollständig gesättigt, wenn ihr Weißanteil (`W`) und ihr Schwarzanteil (`B`) beide `0` betragen. Für jeden Farbtonwert `H` bezeichnet `hwb(H 0% 0%)` dieselbe Farbe wie `hsl(H 100% 50%)`. Ein höherer Weißanteil hellt die Farbe auf; ein höherer Schwarzanteil dunkelt sie ab.

Wenn sowohl der Schwarz- als auch der Weißanteil größer als 0 sind, wird die Farbe gedämpfter und nähert sich Grau an. Beträgt die Summe der beigemischten Weiß- und Schwarzanteile mindestens 100 % – gilt also `W + B >= 100%` –, definiert die Farbfunktion einen Grauton. Ist die Summe beider Werte größer als 100 % (`W + B > 100%`), werden der Weiß- und der Schwarzanteil des Grautons effektiv auf `W / (W + B)` beziehungsweise `B / (W + B)` normalisiert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Farben mit hwb() verwenden

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält den unveränderten Wert von `--base-color`, während das linke und das rechte Element aufgehellte beziehungsweise abgedunkelte Varianten davon erhalten.

Diese Varianten werden mithilfe relativer Farben definiert: Die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base-color` wird an eine `hwb()`-Funktion übergeben. Die Weiß- und Schwarzkanäle der Ausgabefarben werden mithilfe einer `calc()`-Funktion verändert, um den gewünschten Effekt zu erzielen. Für die aufgehellte Farbe werden 30 % zum Weißkanal addiert, für die abgedunkelte Farbe 30 % zum Schwarzkanal.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("Using relative colors with hwb()", "100%", "200") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}: Liste aller Farbnotationen
- [Tool zur Umwandlung von Farbformaten](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("hue")}}: Datentyp, der den Farbtonwinkel einer Farbe angibt
