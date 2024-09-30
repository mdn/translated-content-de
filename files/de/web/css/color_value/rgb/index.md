---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 00a04a0f4d63a1955b082db4fe95f00fc1c61d50
---

{{CSSRef}}

> [!NOTE]
> Die funktionale Notation `rgba()` ist ein Alias für `rgb()`. Sie sind exakt gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die funktionale Notation **`rgb()`** drückt eine Farbe im [sRGB](/de/docs/Glossary/RGB) [Farbraum](/de/docs/Glossary/color_space) anhand ihrer roten, grünen und blauen Komponenten aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe.

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
> Aus Kompatibilitätsgründen werden [Web API](/de/docs/Web/API/Window/getComputedStyle)-serialisierte Farbausgaben als `rgb()`-Farben ausgedrückt, wenn der Alpha-Kanal-Wert genau 1 ist, und als `rgba()`-Farben, wenn nicht. In beiden Fällen wird die veraltete Syntax mit Kommata als Trennzeichen verwendet (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Im Folgenden finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` dargestellt werden (was in diesem Fall `0%` entspricht). Diese Werte repräsentieren die roten, grünen und blauen Kanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanal-Wert der Farbe, wobei die Zahl `0` `0%` (vollkommen transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zu den Auswirkungen von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wertsyntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann eine beliebige gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` dargestellt werden (was in diesem Fall `0%` entspricht). Diese Werte repräsentieren die roten, grünen und blauen Kanalwerte der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} repräsentiert den Alpha-Kanal-Wert der Ausgabefarbe, wobei die Zahl `0` `0%` (vollkommen transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alpha-Kanal anzugeben. Wenn der `A`-Kanal-Wert nicht explizit angegeben wird, ist der Standardwert der Alpha-Kanal-Wert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Repräsentation des gesamten Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `rgb()`-Farbfunktionen in `color(srgb)` serialisiert. Das bedeutet, dass die Abfrage des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

#### Definition der Ausgabekanal-Komponenten für relative Farben

Wenn relative Farbsyntax innerhalb einer `rgb()`-Funktion verwendet wird, konvertiert der Browser die Ursprungsfarbe in eine äquivalente RGB-Farbe (falls nicht bereits so angegeben). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — plus einen Alpha-Kanal-Wert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um verwendet zu werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Die `r`, `g` und `b` Werte werden jeweils als `<number>` zwischen `0` und `255`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird als `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele untersuchen, um dies zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir relative Farbsyntax. Allerdings gibt das erste Beispiel dieselbe Farbe wie die Ursprungsfarbe aus, und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen eigentlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem echten Code verwenden und wahrscheinlich stattdessen einen absoluten Farbwert verwenden würden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um die relative `rgb()`-Syntax kennenzulernen.

Lassen Sie uns mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rgb(255 0 0)`) beginnen. Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`, `g`, und `b` Kanalwerte der Ursprungsfarbe (`255`, `0`, und `0`) als Ausgabekanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Diese Funktion gibt als Ausgabe die im sRGB `color()`-Äquivalent von `rgb(255 0 0)` zurück: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

Im obigen Fall ist die Ausgabefarbe das im sRGB `color()`-Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R`-Kanalwert für die Ausgabefarbe auf den `R`-Kanalwert der Ursprungsfarbe im `rgb()`-Äquivalent — `255`.
- Setzt die `G`- und `B`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80` beziehungsweise.

Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wird, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, die Ursprungsfarbe im Hintergrund in das gleiche Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, damit sie auf eine Weise dargestellt werden kann, die kompatibel ist (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben ausdrücklich angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, wird er als derselbe Wert wie der Alphakanal der Ursprungsfarbe standardisiert. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben wird (und es sich nicht um eine relative Farbe handelt), beträgt der Standardwert `1`. Daher sind die Ursprungs- und Ausgabewerte der Alphakanäle der obigen Beispiele `1`.

Sehen wir uns einige Beispiele an, die Ursprungs- und Ausgabewerte der Alphakanal-Parameter spezifizieren. Das erste Beispiel gibt an, dass der Ausgabewert des Alphakanals derselbe wie der Ursprungswert des Alphakanals ist, während das zweite Beispiel einen anderen Ausgabewert des Alphakanals spezifiziert, der unabhängig vom Ursprungswert des Alphakanals ist.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in eine `rgb()`-Darstellung konvertiert — `rgb(255 0 0)`. {{cssxref("calc")}}-Berechnungen werden auf die `R`-, `G`-, `B`- und `A`-Werte angewendet. Nach Berechnung sind die R-, G-, B- und A-Werte `127.5`, `25`, `175`, und `0.9`. Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(127.5 25 175 / 0.9)` im sRGB-Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungs-Farbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen annehmen würde. Das Hinzufügen eines `<percentage>` zu einem `<number>` funktioniert zum Beispiel nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Grundsyntax

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

Die Hintergrundfarben werden mit der `rgb()`-Farb-Funktion festgelegt. Die drei Farben sind gleich. Die dritte ist halbtransparent, daher haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf dem {{htmlelement("body")}} eingefügt, um die Transparenz der Alphakanäle besser zu demonstrieren.

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

### Verwendung relativer Farben mit rgb()

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das linke hat die unveränderte `--base-color`, während das mittlere und rechte Varianten dieser `--base-color` erhalten, die nacheinander mehr vom roten Kanal entfernen und mehr zum blauen Kanal hinzufügen.

Diese Varianten werden unter Verwendung von relativen Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `rgb()`-Funktion eingegeben, und die Ausgabefarbe hat ihre roten und blauen Kanäle verändert, um den gewünschten Effekt durch `calc()`-Funktionen zu erzielen, während der grüne Kanal unverändert bleibt.

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

### Veraltete Syntax: kommagetrennte Werte

Aus Gründen der Kompatibilität akzeptiert die `rgb()`-Funktion eine Form, in der alle Werte durch Kommata getrennt werden.

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
- [sRGB-Farbwähler und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
