---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 00a04a0f4d63a1955b082db4fe95f00fc1c61d50
---

{{CSSRef}}

> [!NOTE]
> Die `rgba()`-Funktionsnotation ist ein Alias für `rgb()`. Sie sind völlig gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`**-Funktionsnotation drückt eine Farbe im [sRGB](/de/docs/Glossary/RGB)-[Farbraum](/de/docs/Glossary/color_space) entsprechend seiner roten, grünen und blauen Komponenten aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

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
> Aus Kompatibilitätsgründen werden von [Web API](/de/docs/Web/API/Window/getComputedStyle) serialisierte Farbwörter als `rgb()`-Farben ausgedrückt, wenn der Wert des Alphakanals genau 1 beträgt, und als `rgba()`-Farben andernfalls. In beiden Fällen wird das ältere Syntaxformat verwendet, mit Kommas als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Nachfolgend finden Sie Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wert-Syntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (entspricht in diesem Fall `0%`) dargestellt werden. Diese Werte repräsentieren die roten, grünen und blauen Kanäle.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alphakanalwert der Farbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert 100%. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen über die Wirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

#### Relative Wert-Syntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die Originalfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%` oder als Schlüsselwort `none` (entspricht in diesem Fall `0%`) dargestellt werden. Diese Werte repräsentieren die roten, grünen und blauen Kanalwerte der Ausgabefarbe.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}-Wert, der den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben wird, ist der Standardwert der Alphakanalwert der Ursprungsfarbe. Wenn enthalten, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `rgb()`-Farbfunktionen in `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Definition der Ausgabekanalkomponenten relativer Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `rgb()`-Funktion wandelt der Browser die Ursprungsfarbe in eine gleichwertige RGB-Farbe um (falls sie nicht bereits als solche angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — plus ein Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um bei der Definition der Ausgabefarbkanalwerte verwendet zu werden:

- Die `r`-, `g`- und `b`-Werte werden jeweils in `<number>`-Werte zwischen `0` und `255` aufgelöst, einschließlich.
- Der `alpha`-Kanal wird in einen `<number>`-Wert zwischen `0` und `1` aufgelöst, einschließlich.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf verschiedene Weise ausgedrückt werden. Nachfolgend werden einige Beispiele untersucht, um dies zu veranschaulichen.

In den folgenden beiden Beispielen verwenden wir die relative Farbsyntax. Im ersten Beispiel wird jedoch die gleiche Farbe wie die Ursprungsfarbe ausgegeben, und im zweiten Beispiel wird eine Farbe ausgegeben, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen also keine relativen Farben! Sie würden diese wahrscheinlich niemals in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt aufgenommen, um die relative `rgb()`-Syntax zu lernen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `rgb(255 0 0)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`-, `g`- und `b`-Kanalwerte (`255`, `0` und `0`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Die Ausgabe der Funktion ist das sRGB-`color()`-Äquivalent von `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

In diesem Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R`-Kanalwert für die Ausgabefarbe auf den `R`-Kanalwert des `rgb()`-Äquivalents der Ursprungsfarbe — `255`.
- Setzt die `G`- und `B`-Kanalwerte der Ausgabefarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80`.

Die endgültige Ausgabefarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe in das gleiche Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, wenn die Ausgabefarbe ein anderes Farbmodell verwendet als die Ursprungsfarbe, damit sie in einer kompatiblen Weise dargestellt werden kann (d. h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt vorgestellten Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarbe explizit angegeben. Wenn der Alphakanal der Ausgabefarbe nicht angegeben wird, entspricht er standardmäßig dem Wert des Alphakanals der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt der Standardwert `1`. Daher beträgt der Wert der Alphakanäle der Ursprungs- und Ausgabefarbe `1` für die obigen Beispiele.

Sehen wir uns einige Beispiele an, die die Alphakanalwerte von Ursprungs- und Ausgabefarben angeben. Das erste Beispiel gibt den Alphakanalwert der Ausgabe als gleich dem Alphakanalwert der Ursprungsfarbe an, während das zweite Beispiel einen anderen Alphakanalwert der Ausgabe angibt, der unabhängig vom Alphakanalwert der Ursprungsfarbe ist.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Farbe der Ursprungsfarbe erneut in eine `rgb()`-Darstellung umgewandelt — `rgb(255 0 0)`. {{cssxref("calc")}}-Berechnungen werden auf die `R`-, `G`-, `B`- und `A`-Werte angewendet. Nach der Berechnung betragen die `R`-, `G`-, `B`- und `A`-Werte `127,5`, `25`, `175` bzw. `0,9`. Die endgültige Ausgabefarbe entspricht `rgb(127.5 25 175 / 0.9)` im sRGB-Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Kanäle der Ursprungsfarbe in `<number>`-Werte aufgelöst werden, müssen Sie ihnen Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Beispielsweise funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

### Formale Syntax

{{csssyntax}}

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

Die Hintergrundfarben werden mit der `rgb()`-Funktion gesetzt. Die drei Farben sind identisch. Die dritte ist halbtransparent, daher haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf dem {{htmlelement("body")}} hinzugefügt, um die Transparenz der Alphakanäle besser zu demonstrieren.

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

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das linke erhält die unveränderte `--base-color`, während die mittleren und rechten Varianten dieser `--base-color` nacheinander mehr vom roten Kanal entfernen und mehr zum blauen Kanal hinzufügen.

Diese Varianten werden unter Verwendung relativer Farben definiert — die `--base-color`-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) wird in eine `rgb()`-Funktion übergeben, und die Ausgabefarbe hat modifizierte rote und blaue Kanäle, um den gewünschten Effekt über `calc()`-Funktionen zu erzielen, während der grüne Kanal unverändert bleibt.

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

### Legacy-Syntax: Kommagetrennte Werte

Aus älteren Gründen akzeptiert die `rgb()`-Funktion eine Form, bei der alle Werte durch Kommata getrennt werden.

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

- Der {{CSSXref("&lt;color&gt;")}}-Datentyp für eine Liste aller Farbnotationen
- [sRGB-Farbwähler und -Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
