---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die funktionale Notation **`hwb()`** drückt eine Farbe im [sRGB](/de/docs/Glossary/RGB) [Farbraum](/de/docs/Glossary/color_space) aus, basierend auf ihrem Farbton, ihrer Weißheit und Schwärze. Ein optionaler Alphakomponente repräsentiert die Transparenz der Farbe.

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

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

Diese Farbfunktionsdefinition im [`sRGB` Farbraum](/de/docs/Glossary/Color_space#srgb) erfolgt durch einen {{CSSXref("&lt;hue&gt;")}}-Winkelwert, einen Weißheitswert, einen Schwärzewert und optional einen Alphawert, der die Transparenz der Farbe darstellt.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich je nach Farbraum: sRGB (benutzt von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (benutzt von {{CSSXref("color_value/lch", "lch()")}}) und Oklab (benutzt von {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im gleichen Farbraum wie `hsl()` und hat daher die gleichen Farbtonwinkel. Weitere Details und Beispiele finden Sie auf der {{CSSXref("&lt;hue&gt;")}}-Referenzseite oder probieren Sie die Änderung der Farbtonwerte im [Farbtool](/de/docs/Web/CSS/CSS_colors#colors_in_action) aus, um es in Aktion zu sehen.

Eine `hwb()`-Farbe ist dann vollständig gesättigt, wenn sowohl der Weißheitswert (`W`) als auch der Schwärzewert (`B`) `0` sind. Für jeden Farbtonwert `H` entspricht `hwb(H 0% 0%)` der gleichen Farbe wie `hsl(H 100% 50%)`. Die Erhöhung des Weißheitswerts hellt die Farbe auf. Die Erhöhung der Schwärze verdunkelt die Farbe.

Wenn sowohl die Schwärze als auch die Weißheit größer als 0 sind, wird die Farbe gedämpft und neigt sich zu Grau. Wenn die Summe von Weißheit und Schwärze gleich oder größer als 100% ist — mit anderen Worten, wenn `W + B >= 100%`, definiert die Farbnotation einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weißheits- und Schwärzewerte der grauen Farbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachfolgend sind die Beschreibungen der erlaubten Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

### Absolute Syntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe darstellt.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe darstellt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um es zu mischen. `0%` bedeutet keine Weißheit. `100%` bedeutet volle Weißheit, wenn `B` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe darstellt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um es zu mischen. `0%` bedeutet keine Schwärze. `100%` bedeutet volle Schwärze, wenn `W` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, lautet der Standardwert 100%. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Weitere Informationen zur Auswirkung von `none` finden Sie unter [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components).

> [!NOTE]
> Absolute `hwb()`-Farben werden als {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der roten, grünen und blauen Komponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer beim Definieren einer relativen Farbe verwendet, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die Ausgangsfarbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann _jede_ gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`

  - : Eine {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`) darstellt den Ausgabefarbtonwinkel der Farbe.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe darstellt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um es zu mischen. `0%` bedeutet keine Weißheit. `100%` bedeutet volle Weißheit, wenn `B` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe darstellt, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), um es zu mischen. `0%` bedeutet keine Schwärze. `100%` bedeutet volle Schwärze, wenn `W` `0` ist, andernfalls werden sowohl `W` als auch `B` normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Ausgabefarbe darstellt, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig deckend) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal anzugeben. Wenn der `A`-Kanalwert nicht explizit angegeben ist, ist der Standardwert der Alphakanalwert der Ursprungsfarbe. Wenn er enthalten ist, wird der Wert durch einen Schrägstrich (`/`) vorangestellt.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums sichtbarer Farben zu ermöglichen, wird die Ausgabe von relativen `hwb()`-Farbfunktionen in `color(srgb)` serialisiert. Das bedeutet, dass die Abfrage des Ausgabefarbwerts über die [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft oder die [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode den Ausgabefarbwert als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color) Wert zurückgibt.

### Definition von relativen Farbausgabekanal-Komponenten

Bei Verwendung der relativen Farbsyntax innerhalb einer `hwb()`-Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe um (falls diese nicht bereits so angegeben ist). Die Farbe wird als drei verschiedene Farbkanalwerte definiert — `h` (Farbton), `w` (weiß), und `b` (schwarz) — plus einem Alphakanalwert (`alpha`). Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um die Ausgabefarbkanalwerte zu definieren:

- Der `h`-Kanalwert wird auf einen `<number>` zwischen `0` und `360`, inklusive, aufgelöst.
- Die `w`- und `b`-Kanäle werden jeweils auf einen `<number>` zwischen `0` und `100`, inklusive, aufgelöst.
- Der `alpha`-Kanal wird auf einen `<number>` zwischen `0` und `1`, inklusive, aufgelöst.

Bei der Definition einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf unterschiedliche Weise ausgedrückt werden. Unten werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste gibt jedoch die gleiche Farbe wie die Ursprungsfarbe aus, und das zweite gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erzeugen also keine echten relativen Farben! In einem realen Code würden Sie diese wahrscheinlich nie verwenden und stattdessen einfach einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen der relativen `hwb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (äquivalent zu `hwb(0 0% 0%)`). Die folgende Funktion gibt die gleiche Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`, `w`, und `b`-Kanalwerte der Ursprungsfarbe (`0`, `0%`, und `0%`) als die Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabe dieser Funktion ist das sRGB-`color()`-Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Ausgabefarbkanalwerte und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

In diesem Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erzeugt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

In diesem Beispiel:

- Wandelt die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `hwb()`-Äquivalent (`hwb(0 0% 0%)`) um.
- Setzt die `H` und `B`-Kanalwerte der Ausgabefarbe auf die `H` und `B`-Kanalwerte des `hwb()`-Äquivalents der Ursprungsfarbe — diese Werte sind `0` und `0%` jeweils.
- Setzt den `W`-Kanalwert der Ausgabefarbe auf einen neuen Wert, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB-Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wird, wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet, die Ursprungsfarbe im Hintergrund in dasselbe Modell oder Spektrum wie die Ausgabefarbe umgewandelt, so dass sie auf eine kompatible Weise dargestellt werden kann (d.h. unter Verwendung der gleichen Kanäle).

In den bisher in diesem Abschnitt gesehenen Beispielen wurden die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben. Wenn der Alphakanalwert Ausgabefarbe nicht angegeben ist, entspricht er standardmäßig dem Alphakanalwert der Ursprungsfarbe. Wenn der Alphakanalwert der Ursprungsfarbe nicht angegeben ist (und keine relative Farbe ist), beträgt der Standardwert `1`. Daher sind die Alphakanalwerte für Ursprung und Ausgabe `1` für die obigen Beispiele.

Schauen wir uns einige Beispiele an, die Alphakanalwerte für Ursprung und Ausgabe angeben. Das erste Beispiel legt den Alphakanalwert der Ausgabe auf denselben Wert wie den Alphakanalwert des Ursprungs fest, während das zweite einen anderen Alphakanalwert der Ausgabe angibt, der nichts mit dem Alphakanalwert des Ursprungs zu tun hat.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in eine `hwb()`-Darstellung umgewandelt — `hwb(0 0% 0%)`. {{cssxref("calc")}}-Berechnungen werden auf die `H`, `W`, `B`, und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9` im sRGB-Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte auf `<number>`-Werte aufgelöst werden, müssen Sie Zahlen zu ihnen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>`, oder andere Werttypen zulassen würde. Das Hinzufügen eines `<percentage>` zu einem `<number>`, funktioniert zum Beispiel nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung relativer Farben mit hwb()

Dieses Beispiel gestaltet drei {{htmlelement("div")}} Elemente mit unterschiedlichen Hintergrundfarben. Das mittlere erhält die unveränderte `--base-color`, während die linke und rechte jeweils aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden unter Verwendung relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hwb()`-Funktion übergeben, und die Ausgabefarben haben ihre Weiß- und Schwarzkanäle modifiziert, um den gewünschten Effekt durch eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 30% zum Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum Schwarzkanal hinzugefügt.

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

- {{CSSXref("&lt;color&gt;")}}: Für eine Liste aller Farbnationen
- [Farbtool und Konvertierungswerkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der den Farbtonwinkel einer Farbe repräsentiert
