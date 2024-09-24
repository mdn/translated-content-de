---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 00a04a0f4d63a1955b082db4fe95f00fc1c61d50
---

{{CSSRef}}

> [!NOTE]
> Die `rgba()` Funktionsnotation ist ein Alias für `rgb()`. Sie sind genau gleichwertig. Es wird empfohlen, `rgb()` zu verwenden.

Die **`rgb()`** Funktionsnotation exprimiert eine Farbe im {{glossary("RGB", "sRGB")}}-{{glossary("Farbraum")}} gemäß ihrer roten, grünen und blauen Komponente. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe.

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

## Syntax

```css
/* Absolute Werte */
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* Relative Werte */
rgb(from green r g b / 0.5)
rgb(from #0000FF calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))

/* Veralteter 'rgba()' Alias */
rgba(0 255 255)

/* Veraltetes Format */
rgb(0, 255, 255)
rgb(0, 255, 255, 50%)
```

> [!NOTE]
> Aus Kompatibilitätsgründen werden [Web API](/de/docs/Web/API/Window/getComputedStyle)-serialisierte Farbwerte als `rgb()`-Farben ausgedrückt, wenn der Alpha-Wert genau 1 ist, und als `rgba()`-Farben andernfalls. In beiden Fällen wird veraltete Syntax mit Kommas als Trennzeichen verwendet (zum Beispiel `rgb(255, 0, 0)`).

### Werte

Im Folgenden finden Sie Beschreibungen der erlaubten Werte für absolute und [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors).

#### Absolute Wertsyntax

```plain
rgb(R G B[ / A])
```

Die Parameter sind wie folgt:

- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder als Schlüsselwort `none` (entspricht `0%` in diesem Fall) dargestellt werden. Diese Werte repräsentieren die roten, grünen und blauen Kanäle jeweils.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alpha-Kanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alpha-Kanal vorhanden ist. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird er standardmäßig auf 100% gesetzt. Wenn eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Wirkung von `none`.

#### Relative Wertsyntax

```plain
rgb(from <color> R G B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`
  - : Das Schlüsselwort `from` wird immer bei der Definition einer relativen Farbe eingeschlossen, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt: Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.
- `R`, `G`, `B`
  - : Jeder Wert kann als {{CSSXref("&lt;number&gt;")}} zwischen `0` und `255`, als {{CSSXref("&lt;percentage&gt;")}} zwischen `0%` und `100%`, oder als Schlüsselwort `none` (entspricht `0%` in diesem Fall) dargestellt werden. Diese Werte repräsentieren die Rot-, Grün- und Blaukanalwerte der Ausgangsfarbe jeweils.
- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}} der den Alpha-Kanalwert der Ausgangsfarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit anzugeben, dass kein Alpha-Kanal vorhanden ist. Wenn der `A`-Kanalwert nicht explizit angegeben ist, wird standardmäßig der Alpha-Kanalwert der Ursprungsfarbe verwendet. Wenn eingeschlossen, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des vollständigen Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `rgb()`-Farbfunktionen zu `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgangsfarbwerts über die {{DOMxRef("HTMLElement.style")}}-Eigenschaft oder die {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}}-Methode den Ausgangsfarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

#### Definition von Ausgabefarbkanalkomponenten relativ zu Farben

Bei der Verwendung der relativen Farbsyntax innerhalb einer `rgb()`-Funktion konvertiert der Browser die Ursprungsfarbe in eine äquivalente RGB-Farbe (falls diese nicht bereits so angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `r` (rot), `g` (grün) und `b` (blau) — plus ein Alpha-Kanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um verwendet zu werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Die Werte `r`, `g` und `b` werden jeweils in `<number>` zwischen `0` und `255` aufgelöst, inklusiv.
- Der `alpha`-Kanal wird in einen `<number>` zwischen `0` und `1` aufgelöst, inklusiv.

Wenn eine relative Farbe definiert wird, können die verschiedenen Kanäle der Ausgangsfarbe auf verschiedene Weise ausgedrückt werden. Im Folgenden werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden nachstehenden Beispielen verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Sie würden diese wahrscheinlich nie in einer echten Codebasis verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen über die relative `rgb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (gleichwertig mit `rgb(255 0 0)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `r`, `g` und `b` Kanalwerte (`255`, `0` und `0`) der Ursprungsfarbe als Ausgabekanalwerte:

```css
rgb(from hsl(0 100% 50%) r g b)
```

Die Ausgabe dieser Funktion ist das sRGB `color()`-Äquivalent von `rgb(255 0 0)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgangsfarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

In diesem Fall ist die Ausgangsfarbe das sRGB `color()`-Äquivalent von `rgb(132 132 224)`: `color(srgb 0.517647 0.517647 0.878431)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `rgb()`-Äquivalent (`rgb(255 0 0)`).
- Setzt den `R` Kanalwert für die Ausgangsfarbe auf den `R` Kanalwert des `rgb()`-Äquivalents der Ursprungsfarbe — `255`.
- Setzt die `G` und `B` Kanalwerte der Ausgangsfarbe auf neue Werte, die nicht auf der Ursprungsfarbe basieren: `80` und `80`.

Die endgültige Ausgangsfarbe ist das Äquivalent von `rgb(255 80 80)` im sRGB-Farbraum — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Wie oben erwähnt, wenn die Ausgangsfarbe ein anderes Farbmodell verwendet als die Ursprungsfarbe, wird die Ursprungsfarbe im Hintergrund in dasselbe Modell oder denselben Raum konvertiert wie die Ausgangsfarbe, sodass sie in einer kompatiblen Weise dargestellt werden kann (d. h. unter Verwendung derselben Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alpha-Kanäle weder für die Ursprungs- noch für die Ausgangsfarben explizit angegeben. Wenn der Alpha-Kanal der Ausgangsfarbe nicht angegeben wird, entspricht er standardmäßig dem Wert des Alpha-Kanals der Ursprungsfarbe. Wenn der Alpha-Kanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), ist der Standardwert `1`. Daher sind die Alpha-Kanalwerte der Ursprungs- und Ausgangsfarbe `1` in den obigen Beispielen.

Werfen wir einen Blick auf einige Beispiele, die die Alpha-Kanalwerte der Ursprungs- und Ausgangsfarben angeben. Das erste Beispiel gibt den Alpha-Kanalwert der Ausgangsfarbe als gleich dem Alpha-Kanalwert der Ursprungsfarbe an, während das zweite einen anderen Alpha-Kanalwert der Ausgangsfarbe angibt, der nichts mit dem Alpha-Kanalwert der Ursprungsfarbe zu tun hat.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Berechnete Ausgangsfarbe: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Berechnete Ausgangsfarbe: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die Ursprungsfarbe `hsl()` erneut in eine `rgb()`-Darstellung umgewandelt — `rgb(255 0 0)`. {{cssxref("calc")}}-Berechnungen werden auf die `R`, `G`, `B` und `A` Werte angewandt. Nach der Berechnung sind die R-, G-, B- und A-Werte `127.5`, `25`, `175` bzw. `0.9`. Die endgültige Ausgangsfarbe ist das Äquivalent von `rgb(127.5 25 175 / 0.9)` im sRGB-Farbraum: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte in `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen addieren, wenn Sie sie in Berechnungen verwenden, auch in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Beispielsweise funktioniert das Hinzufügen eines `<percentage>` zu einem `<number>` nicht.

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

Die Hintergrundfarben werden mit der `rgb()`-Funktion gesetzt. Die drei Farben sind gleich. Die dritte ist halbtransparent, daher haben wir einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} auf dem {{htmlelement("body")}} hinzugefügt, um die Transparenz der Alphakanäle besser zu demonstrieren.

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

Dieses Beispiel stylt drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben. Das linke Element erhält die unveränderte `--base-color`, während das mittlere und rechte Elemente Varianten dieser `--base-color` erhalten, die nach und nach mehr vom Rotkanal entfernen und mehr zum Blaukanal hinzufügen.

Diese Varianten werden mit relativen Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `rgb()`-Funktion eingegeben, und die Ausgangsfarbe hat ihre Rot- und Blaukanäle modifiziert, um den gewünschten Effekt über `calc()`-Funktionen zu erzielen, während der Grünkanal unverändert bleibt.

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
  /* entspricht rgb(255 165 0) */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 76,5 sind 30% von 255 */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 153 sind 60% von 255 */
}

/* Verwenden Sie @supports, um Unterstützung für alte Syntax hinzuzufügen,
   die erfordert, dass r g b Werte in Berechnungen als Prozentangaben (mit Einheiten) angegeben werden.
   Dies ist erforderlich für Safari 16.4+. */
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

Aus Kompatibilitätsgründen akzeptiert die Funktion `rgb()` eine Form, in der alle Werte durch Kommas getrennt werden.

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
- [sRGB-Farbwähler und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
