---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

> [!NOTE]
> Die `rgba()` Funktionsnotation ist ein Alias für `rgb()`. Sie sind genau gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`** Funktionsnotation drückt eine Farbe im {{Glossary("RGB", "sRGB")}} {{Glossary("color_space", "Farbraum")}} entsprechend ihrer roten, grünen und blauen Komponenten aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

{{InteractiveExample("CSS Demo: rgb()")}}

```css interactive-example-choice
background: rgb(31 120 50);
```

```css interactive-example-choice
background: rgb(30% 20% 50%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 80%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 0.2);
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
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* Relative values */
rgb(from green r g b / 0.5)
rgb(from #123456 calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))

/* Legacy 'rgba()' alias */
rgba(0 255 255)

/* Legacy format */
rgb(0, 255, 255)
rgb(0, 255, 255, 50%)
```

> [!NOTE]
> Aus Kompatibilitätsgründen werden [Web-API](/de/docs/Web/API/Window/getComputedStyle)-serialisierte Farbwerte als `rgb()`-Farben ausgedrückt, wenn der Alpha-Kanalwert genau 1 ist, und sonst als `rgba()`-Farben. In beiden Fällen wird die alte Syntax verwendet, bei der Kommas als Trennzeichen dienen (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (in diesem Fall gleichwertig zu `0%`) dargestellt werden. Diese Werte repräsentieren die roten, grünen und blauen Kanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig auf 100% gesetzt. Wenn er eingeschlossen ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsprache

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` ist immer enthalten, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (in diesem Fall gleichwertig zu `0%`) dargestellt werden. Diese Werte repräsentieren die roten, grünen und blauen Kanalwerte der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig auf den Alphakanalwert der Ursprungsfarbe gesetzt. Wenn er eingeschlossen ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des vollen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `rgb()`-Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabe-Farbwertes über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Bestimmung der Ausgabekanal-Komponenten relativer Farben

Wenn eine relative Farbsyntax innerhalb einer `rgb()`-Funktion verwendet wird, wandelt der Browser die Ursprungsfarbe in eine gleichwertige RGB-Farbe um (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabekanalwerte verwendet zu werden:

- Die `r`, `g` und `b` Werte werden jeweils auf `<number>` Werte zwischen `0` und `255` aufgelöst, inklusive.
- Der `alpha` Kanal wird auf einen `<number>` Wert zwischen `0` und `1` aufgelöst, inklusive.

Wenn eine relative Farbe definiert wird, können die unterschiedlichen Kanäle der Ausgabefarbe auf mehrere verschiedene Weisen ausgedrückt werden. Nachfolgend werden wir einige Beispiele studieren, um dies zu illustrieren.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Allerdings gibt das erste Beispiel die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen also eigentlich keine relativen Farben! Man würde diese wahrscheinlich nie in einem realen Code verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt gewählt, um die relative `rgb()`-Syntax kennenzulernen.

Lassen Sie uns mit einer Ursprungsfarbe von `hsl(0 100% 50%)` beginnen (entspricht `rgb(255 0 0)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`, `g` und `b` Kanalwerte (`255`, `0`, und `0`) der Ursprungsfarbe als Ausgabe-Kanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Der Ausgabe-Farbwert dieser Funktion ist das sRGB `color()`-Äquivalent von `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabe-Farbkanalwerte, was zu einer völlig anderen Farbe führt, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

In diesem Fall ist der Ausgabe-Farbwert das sRGB `color()`-Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Wandelt die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`) um.
- Setzt den `R`-Kanalwert für die Ausgabefarbe auf den `R`-Kanalwert des `rgb()`-Äquivalents der Ursprungsfarbe — `255`.
- Setzt die `G`- und `B`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80`, jeweils.

Die endgültige Ausgabefarbe ist in einem SRGB-Farbraum das Äquivalent von `rgb(255 80 80)` — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder den gleichen Raum wie die Ausgabefarbe umgewandelt, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. die gleichen Kanäle verwendet).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alphakanäle weder für die Ursprungs- noch die Ausgabefarben explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, ist er standardmäßig auf den gleichen Wert wie der Alphakanal der Ursprungsfarbe gesetzt. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), ist er standardmäßig `1`. Daher haben die Ursprungs- und Ausgabewerte des Alphakanals den Wert `1` für die obigen Beispiele.

Lassen Sie uns einige Beispiele betrachten, die die Ursprungs- und Ausgabewerte des Alphakanals angeben. Das erste Beispiel gibt den Ausgabewert des Alphakanals als den gleichen wie den Alphawert der Ursprungsfarbe an, während das zweite Beispiel einen anderen Ausgabewert des Alphakanals angibt, der nicht mit dem Alphakanalwert der Ursprungsfarbe in Verbindung steht.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die Ursprungsfarbe `hsl()` erneut in eine `rgb()`-Darstellung umgewandelt — `rgb(255 0 0)`. {{cssxref("calc")}} Berechnungen werden auf die `R`-, `G`-, `B`- und `A`-Werte angewandt. Nach der Berechnung betragen die R-, G-, B- und A-Werte `127.5`, `25`, `175` und `0.9`. Die endgültige Ausgabefarbe ist in einem sRGB-Farbraum das Äquivalent von `rgb(127.5 25 175 / 0.9)`: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie ihnen in Berechnungen Zahlen hinzufügen, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Wertetypen akzeptieren würde. Zum Beispiel funktioniert das Addieren eines `<percentage>` zu einem `<number>` nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Syntax

In diesem Beispiel haben wir drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben, die über einem gestreiften Hintergrund angezeigt werden.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

Die Hintergrundfarben werden mit der `rgb()`-Farbfunktionsnotation festgelegt. Die drei Farben sind identisch. Die dritte ist halbtransparent, daher haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf den {{htmlelement("body")}} angewendet, um die Transparenz von Alphakanälen besser zu demonstrieren.

```css hidden
div {
  display: flex;
  gap: 20px;
  height: 50px;
  flex: 1;
}
body {
  height: calc(100vh - 20px);
}
```

```css
body {
  background: repeating-linear-gradient(-45deg, #eeeeee 0 2px, white 2px 6px);
  padding: 10px;
}

#integer {
  background-color: rgb(189 85 218);
}

#percent {
  background-color: rgb(74% 33% 85%);
}

#alpha {
  background-color: rgb(189 85 218 / 0.25);
}
```

#### Ergebnis

{{ EmbedLiveSample("Basic syntax", "100%", "75") }}

### Verwendung relativer Farben mit rgb()

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das linke wird mit der unveränderten `--base-color` versehen, während die mittleren und rechten Varianten dieser `--base-color` Farben successive mehr vom roten Kanal entfernen und mehr zum blauen Kanal hinzufügen.

Diese Varianten werden unter Verwendung relativer Farben definiert –– die `--base-color` [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `rgb()`-Funktion eingespeist, und die Ausgabefarbe hat ihre roten und blauen Kanäle modifiziert, um den gewünschten Effekt über `calc()`-Funktionen zu erreichen, während der grüne Kanal unverändert bleibt.

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
  /* equal to rgb(255 165 0) */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 76.5 is 30% of 255 */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 153 is 60% of 255 */
}

/* Use @supports to add in support for old syntax that requires r g b values to
   be specified as percentages (with units) in calculations. This is required
   for Safari 16.4+. */
@supports (color: rgb(from red r g calc(b + 30%))) {
  #two {
    background-color: rgb(from var(--base-color) calc(r - 30%) g calc(b + 30%));
  }

  #three {
    background-color: rgb(from var(--base-color) calc(r - 60%) g calc(b + 60%));
  }
}
```

#### Ergebnis

{{ EmbedLiveSample("Using relative colors with rgb()", "100%", "200") }}

### Veraltete Syntax: Komma-getrennte Werte

Aus zerlegten Gründen akzeptiert die `rgb()` Funktion eine Form, bei der alle Werte durch Kommas getrennt werden.

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: rgb(255 0 0 / 50%);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### Ergebnis

{{EmbedLiveSample('Legacy syntax: comma-separated values', '100%', '150px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{CSSXref("&lt;color&gt;")}} Datentyp für eine Liste aller Farbnotationen
- [sRGB Farbwähler und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
