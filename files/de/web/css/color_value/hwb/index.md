---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`hwb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} gemäß ihrem Farbton, ihrer Weißheit und Schwärze aus. Eine optionale Alpha-Komponente stellt die Transparenz der Farbe dar.

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

Diese Farbfunktionsnotierung im {{Glossary("Color_space#srgb", "`sRGB` Farbraum")}} wird durch einen {{CSSXref("&lt;hue&gt;")}} Winkelwert, einen Weißheitswert, einen Schwärzewert und optional einen Alphawert, der die Transparenz der Farbe darstellt, definiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich im sRGB (genutzt bei {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (genutzt bei {{CSSXref("color_value/lch", "lch()")}}) und Oklab (genutzt bei {{CSSXref("color_value/oklch", "oklch()")}}) Farbräumen. `hwb()` befindet sich im selben Farbraum wie `hsl()` und hat daher dieselben Farbwinkel. Siehe die {{CSSXref("&lt;hue&gt;")}} Referenzseite für mehr Details und Beispiele, oder probieren Sie, die Farbtöne im [Farbwähler](/de/docs/Web/CSS/CSS_colors#colors_in_action) zu ändern, um es in Aktion zu sehen.

Eine `hwb()` Farbe ist vollständig gesättigt, wenn ihre Weißheit (`W`) und Schwärze (`B`) beide `0` sind. Für jeden Farbtonwert `H` entspricht `hwb(H 0% 0%)` derselben Farbe wie `hsl(H 100% 50%)`. Ein Erhöhen des Weißheitswertes hellt die Farbe auf. Ein Erhöhen der Schwärze verdunkelt die Farbe.

Wenn sowohl die Schwärze als auch die Weißheit größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Summe der hinzugefügten Weißheit und Schwärze gleich oder größer als 100% ist — mit anderen Worten, wenn `W + B >= 100%`, definiert die Farbfunktion eine Grauschattierung. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weißheits- und Schwärzwerte der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Unten finden Sie Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleichwertig mit `0deg` in diesem Fall), das den {{CSSXref("&lt;hue&gt;")}} Winkel der Farbe darstellt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall) darstellt, die hinzugefügt wird. `0%` repräsentiert keine Weißheit. `100%` repräsentiert vollständige Weißheit, wenn `B` `0` ist, andernfalls werden die `W` und `B` Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall) darstellt, die hinzugefügt wird. `0%` repräsentiert keine Schwärze. `100%` repräsentiert vollständige Schwärze, wenn `W` `0` ist, andernfalls werden die `W` und `B` Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht, und `1` `100%` (vollständig opak) entspricht. Zudem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der Wert des `A` Kanals nicht explizit angegeben wird, wird er auf 100% standardisiert. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für mehr Informationen über die Wirkung von `none`.

> [!NOTE]
> Absolute `hwb()` Farben werden zu {{CSSXref("color_value/rgb", "rgb()")}} Werten serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** darstellt. Dies ist die originale Farbe, von der die relative Farbe abgeleitet ist. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}} Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`
  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (gleichwertig mit `0deg` in diesem Fall), das den Ausgabefarbtonwinkel der Farbe darstellt.

- `W`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall) darstellt, die hinzugefügt wird. `0%` repräsentiert keine Weißheit. `100%` repräsentiert vollständige Weißheit, wenn `B` `0` ist, andernfalls werden die `W` und `B` Werte normalisiert.

- `B`
  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe oder das Schlüsselwort `none` (gleichwertig mit `0%` in diesem Fall) darstellt, die hinzugefügt wird. `0%` repräsentiert keine Schwärze. `100%` repräsentiert vollständige Schwärze, wenn `W` `0` ist, andernfalls werden die `W` und `B` Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) entspricht und `1` `100%` (vollständig opak) entspricht. Zudem kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A` Kanalwert nicht explizit angegeben wird, wird er auf den Alphakanalwert der Ursprungsfarbe standardisiert. Wenn er enthalten ist, wird der Wert von einem Schrägstrich (`/`) eingeleitet.

> [!NOTE]
> Um die Darstellung des gesamten sichtbaren Farbspektrums vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()` Farbfunktionswerten zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als einen [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

### Definition der Ausgabekanal-Komponenten relativer Farben

Bei Verwendung der relativen Farbsyntax innerhalb einer `hwb()` Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe um (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei unterschiedliche Farbakanalwerte — `h` (Farbton), `w` (Weiß) und `b` (Schwarz) — sowie ein Alphakanalwert (`alpha`) definiert. Diese Kanalwerte sind innerhalb der Funktion verfügbar, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Der `h` Kanalwert wird auf einen `<number>` zwischen `0` und `360` aufgelöst, einschließlich.
- Die `w` und `b` Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100` aufgelöst, einschließlich.
- Der `alpha` Kanal wird auf einen `<number>` zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Unten schauen wir uns einige Beispiele an, um diese zu illustrieren.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen nicht wirklich relative Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen wahrscheinlich einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `hwb()` Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (äquivalent zu `hwb(0 0% 0%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w`, und `b` Kanalwerte der Ursprungsfarbe (`0`, `0%`, und `0%`) als die Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Diese Funktion gibt die sRGB `color()` Äquivalenz von `hwb(0 0% 0%)`: `color(srgb 1 0 0)` aus.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe die sRGB `color()` Äquivalenz von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Wandelt die Ursprungsfarbe (`hsl(0 100% 50%)`) in eine `hwb()` Äquivalente (`hwb(0 0% 0%)`) um.
- Setzt die `H` und `B` Kanalwerte für die Ausgabefarbe auf die der `hwb()` Äquivalente Ursprungsfarbe `H` und `B` Kanalwerte — diese Werte sind `0` und `0%`, jeweils.
- Setzt den `W` Kanalwert der Ausgabefarbe auf einen neuen, nicht auf der Ursprungsfarbe basierenden Wert: `30%`.

Die endgültige Ausgabefarbe ist die Äquivalenz von `hwb(0 30% 0%)` im sRGB Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder den gleichen Farbraum wie die Ausgabefarbe umgewandelt, damit sie in einer kompatiblen Weise dargestellt werden kann (d.h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gezeigten Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht spezifiziert wird, wird er auf denselben Wert wie der Alphakanal der Ursprungsfarbe standardisiert. Wenn der Alphakanal der Ursprungsfarbe nicht spezifiziert wird (und es sich nicht um eine relative Farbe handelt), wird auf `1` standardisiert. Daher sind die Alphakanalwerte der Ursprungs- und Ausgabefarben in den obigen Beispielen `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarben Alphakanalwerte spezifizieren. Das erste gibt den Alphakanalwert der Ausgabe als denselben wie den Ursprungsalphakanal an, während das zweite einen anderen, nicht mit dem Ursprungsalphakanal zusammenhängenden Alphakanalwert angibt.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()` Ursprungsfarbe wiederum in eine `hwb()` Darstellung umgewandelt — `hwb(0 0% 0%)`. {{cssxref("calc")}} Berechnungen werden auf die `H`, `W`, `B` und `A` Werte angewendet, und die endgültige Ausgabefarbe ist die Äquivalenz von `hwb(120 25% 10% / 0.9` im sRGB Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>` Werte aufgelöst werden, müssen Sie diesen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, zum Beispiel, funktioniert nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von relativen Farben mit hwb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linken und rechten jeweils aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) wird in eine `hwb()` Funktion übertragen, und die Ausgabefarben haben ihre weißen und schwarzen Kanäle modifiziert, um den gewünschten Effekt über eine `calc()` Funktion zu erzielen. Die aufgehellte Farbe hat 30% zum Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum Schwärzekanal hinzugefügt.

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
- [Farbformat-Konverter-Werkzeug](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
