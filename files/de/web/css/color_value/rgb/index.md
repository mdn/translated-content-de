---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

> [!NOTE]
> Die `rgba()`-Funktionsnotation ist ein Alias für `rgb()`. Sie sind genau gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`**-Funktionsnotation beschreibt eine Farbe im {{Glossary("RGB", "sRGB")}}-{{Glossary("color_space", "Farbraum")}} gemäß ihrer Rot-, Grün- und Blau-Komponenten. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

## Syntax

```css
/* Absolute values */
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* Relative values */
rgb(from green r g b / 0.5)
rgb(from #0000FF calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))

/* Legacy 'rgba()' alias */
rgba(0 255 255)

/* Legacy format */
rgb(0, 255, 255)
rgb(0, 255, 255, 50%)
```

> [!NOTE]
> Aus Kompatibilitätsgründen werden [Web-API](/de/docs/Web/API/Window/getComputedStyle)-serialisierte Farbwerte als `rgb()`-Farben ausgedrückt, wenn der Alpha-Kanal-Wert genau 1 ist, und als `rgba()`-Farben andernfalls. In beiden Fällen wird die veraltete Syntax mit Kommas als Trennzeichen verwendet (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für absolute und [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wert-Syntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (entspricht in diesem Fall `0%`) dargestellt werden. Diese Werte repräsentieren die Rot-, Grün- und Blau-Kanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist er standardmäßig auf 100% gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Auswirkungen von `none`.

#### Relative Wert-Syntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** repräsentiert: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (entspricht in diesem Fall `0%`) dargestellt werden. Diese Werte repräsentieren die Rot-, Grün- und Blau-Kanalwerte der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alpha-Kanal-Wert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, wird er standardmäßig auf den Alpha-Kanal-Wert der Ursprungsfarbe gesetzt. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des vollständigen Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe relativer `rgb()`-Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

#### Definition der Komponenten für die Ausgabekanäle von relativen Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `rgb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine gleichwertige RGB-Farbe (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei separate Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — plus einem Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte stehen in der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die `r`, `g` und `b` Werte werden jeweils in `<number>`-Werte zwischen `0` und `255`, einschließlich, aufgelöst.
- Der `alpha`-Kanal wird in einen `<number>`-Wert zwischen `0` und `1`, einschließlich, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Weisen ausgedrückt werden. Im Folgenden werden einige Beispiele untersucht, um diese zu veranschaulichen.

In den ersten beiden Beispielen verwenden wir relative Farbsyntax. Allerdings liefert das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe und das zweite Beispiel eine Farbe, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Wahrscheinlich würden Sie diese in einem realen Code nicht verwenden und stattdessen einfach einen absoluten Farbwert nutzen. Wir haben diese Beispiele als Ausgangspunkt zum Lernen über die relative `rgb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe `hsl(0 100% 50%)` (gleichwertig zu `rgb(255 0 0)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`, `g` und `b` Kanalwerte (`255`, `0` und `0`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Die Ausgabefarbe dieser Funktion ist das sRGB-`color()`-Äquivalent von `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

In diesem Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R` Kanalwert der Ausgabefarbe auf den `R` Kanalwert des `rgb()`-Äquivalents der Ursprungsfarbe — `255`.
- Setzt die `G` und `B` Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80`.

Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum wie die Ausgabefarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d. h. unter Verwendung derselben Kanäle).

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Ausgabefarb-Alpha-Kanal nicht angegeben wird, entspricht er standardmäßig dem Alpha-Kanal-Wert der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt er standardmäßig `1`. Daher sind die Ursprungs- und Ausgabefarb-Alpha-Kanalwerte für die obigen Beispiele `1`.

Schauen wir uns einige Beispiele an, die Ursprungs- und Ausgabefarb-Alpha-Kanalwerte angeben. Das erste Beispiel legt den Alpha-Kanal-Wert der Ausgabe gleich dem Alpha-Kanal-Wert der Ursprungsfarbe fest, während das zweite Beispiel einen anderen Alpha-Kanal-Wert der Ausgabe festlegt, der nicht mit dem Alpha-Kanal-Wert der Ursprungsfarbe verwandt ist.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in eine `rgb()`-Darstellung umgewandelt — `rgb(255 0 0)`. {{cssxref("calc")}}-Berechnungen werden auf die `R`, `G`, `B`, und `A`-Werte angewendet. Nach der Berechnung betragen die R, G, B und A Werte `127,5`, `25`, `175`, und `0,9`. Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(127.5 25 175 / 0.9)` im sRGB-Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie beim Verwenden dieser in Berechnungen Zahlen hinzufügen, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`-, `<angle>`- oder andere Werttypen akzeptieren würde. Zum Beispiel funktioniert das Hinzufügen eines `<percentage>` zu einer `<number>` nicht.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundsyntax

In diesem Beispiel haben wir drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben über einem gestreiften Hintergrund dargestellt.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

Die Hintergrundfarben werden mit der `rgb()`-Funktion gesetzt. Die drei Farben sind gleich. Die dritte ist halbtransparent, daher haben wir einen {{cssxref("gradient/repeating-linear-gradient", "wiederholenden linearen Farbverlauf")}} auf dem {{htmlelement("body")}} hinzugefügt, um die Transparenz der Alpha-Kanäle besser zu demonstrieren.

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
  background: repeating-linear-gradient(-45deg, #eee 0 2px, #fff 2px 6px);
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

### Verwendung von relativen Farben mit rgb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das linke Element erhält die unveränderte `--base-color`, während die mittleren und rechten Elemente Varianten dieser `--base-color` erhalten, die jeweils weniger Rot und mehr Blau enthalten.

Diese Varianten werden mit relativen Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `rgb()`-Funktion übergeben und die Ausgabefarbe wird mit ihren Rot- und Blau-Kanälen modifiziert, um den gewünschten Effekt mit `calc()`-Funktionen zu erreichen, während der Grün-Kanal unverändert bleibt.

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

### Veraltete Syntax: durch Kommas getrennte Werte

Aus Kompatibilitätsgründen akzeptiert die `rgb()`-Funktion eine Form, bei der alle Werte durch Kommas getrennt sind.

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

- Der {{CSSXref("&lt;color&gt;")}} Datentyp für eine Liste aller Farbnationen
- [sRGB Farb-Picker und Umwandlungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
