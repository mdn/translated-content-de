---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

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

Diese Farbfunktionsnotation im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} ist definiert durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißanteil, einen Schwarzanteil und optional einen Alphawert, der die Transparenz der Farbe repräsentiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den in sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}) verwendeten Farbräumen. `hwb()` befindet sich im gleichen Farbraum wie `hsl()`, und daher haben sie die gleichen Farbtonwinkel. Siehe die {{CSSXref("&lt;hue&gt;")}} Referenzseite für mehr Details und Beispiele, oder versuchen Sie, die Farbtöne im [Farbauswahlwerkzeug](/de/docs/Web/CSS/CSS_colors#colors_in_action) zu ändern, um es zu sehen.

Eine `hwb()` Farbe ist vollständig gesättigt, wenn ihre Weißheit (`W`) und Schwärze (`B`) beide `0` sind. Bei einem beliebigen Farbtonwert `H` entspricht `hwb(H 0% 0%)` der gleichen Farbe wie `hsl(H 100% 50%)`. Das Erhöhen des Weißwertes hellt die Farbe auf. Das Erhöhen des Schwarzanteils dunkelt die Farbe ab.

Wenn sowohl der Schwarz- als auch der Weißanteil größer als 0 sind, wird die Farbe gedämpft und neigt dazu, grau zu werden. Wenn die Menge des hinzugefügten Weiß- und Schwarzanteils gleich oder größer als 100% ist – mit anderen Worten, wenn `W + B >= 100%`, definiert die Farbfunktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weiß- und Schwarzwert der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das hinzugefügt wird. `0%` repräsentiert keine Weißheit. `100%` repräsentiert volle Weißheit, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwarzheit der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das hinzugefügt wird. `0%` repräsentiert keine Schwarzheit. `100%` repräsentiert volle Schwarzheit, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, ist der Standardwert 100%. Falls enthalten, steht der Wert vor einem Slash (`/`).

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

> [!NOTE]
> Absolute `hwb()` Farben werden als {{CSSXref("color_value/rgb", "rgb()")}} Werte serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer bei der Definition einer relativen Farbe angegeben, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den Ausgabefarbtonwinkel der {{CSSXref("&lt;hue&gt;")}} der Farbe repräsentiert.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`) zum Mischen. `0%` repräsentiert keine Weißheit. `100%` repräsentiert volle Weißheit, wenn `B` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwarzheit der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`) zum Mischen. `0%` repräsentiert keine Schwarzheit. `100%` repräsentiert volle Schwarzheit, wenn `W` `0` ist, andernfalls werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er als Alphakanalwert der Ursprungsfarbe standardmäßig angenommen. Falls enthalten, steht der Wert vor einem Slash (`/`).

> [!NOTE]
> Um die Darstellung des gesamten Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()`-Farbfunktionswerten als `color(srgb)` serialisiert. Das bedeutet, dass beim Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die Methode [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) der Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgegeben wird.

### Definition der Ausgabekanalwerte für relative Farben

Bei Verwendung der relativen Farbsyntax innerhalb einer `hwb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbkanalwerte definiert — `h` (Farbton), `w` (Weiß) und `b` (Schwarz) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360`, inklusive, aufgelöst.
- Die `w` und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend sehen wir einige Beispiele, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen wirklich keine relativen Farben! Solche Fälle würden Sie wahrscheinlich niemals in einem echten Code verwenden, sondern eher einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Erlernen der relativen `hwb()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w` und `b` Kanalwerte der Ursprungsfarbe (`0`, `0%` und `0%`) als Ausgabekanalwerte:

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
- Setzt die `H`- und `B`-Kanalwerte der Ausgabefarbe auf die der `hwb()` Äquivalent der Ursprungsfarbe — diese Werte sind `0` und `0%`, respektive.
- Setzt den `W`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe entspricht `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, damit sie auf eine kompatible Weise dargestellt werden kann (d.h. mit denselben Kanälen).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, wird er standardmäßig auf denselben Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarben `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarb-Alphakanalwerte angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabe als den gleichen wie den der Ursprungsfarbe an, während das zweite einen anderen Ausgabefarb-Alphakanalwert spezifiziert, der nichts mit dem Alphakanalwert der Ursprungsfarbe zu tun hat.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe erneut in eine `hwb()` Darstellung konvertiert — `hwb(0 0% 0%)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`, `W`, `B` und `A` Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarb-Kanalwerte als `<number>`-Werte aufgelöst werden, müssen Sie beim Verwenden in Berechnungen Zahlen addieren, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung relativer Farben mit hwb()

Dieses Beispiel beschreibt drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Dem mittleren wird die unveränderte `--base-color` zugewiesen, während die linken und rechten Elemente aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mit relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `hwb()` Funktion übergeben, und die Ausgabefarben haben ihre weißen und schwarzen Kanäle modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erreichen. Die aufgehellte Farbe hat 30% zum weißen Kanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum schwarzen Kanal hinzugefügt.

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
- [Farbauswahl und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der einen Farbtonwinkel einer Farbe repräsentiert
