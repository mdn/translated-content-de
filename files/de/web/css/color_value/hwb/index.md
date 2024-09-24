---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die funktionale Notation **`hwb()`** drückt eine Farbe im {{glossary("RGB", "sRGB")}}-{{glossary("color space", "Farbraum")}} entsprechend ihrem Farbton, der Weißheit und der Schwärze aus. Eine optionale Alphakomponente stellt die Transparenz der Farbe dar.

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## Syntax

```css
/* Absolute Werte */
hwb(194 0% 0%)
hwb(194 0% 0% / .5)

/* Relative Werte */
hwb(from green h w b / 0.5)
hwb(from #0000FF h calc(w + 30) b)
hwb(from lch(40% 70 240deg) h w calc(b - 30))
```

## Beschreibung

Diese Farb-Funktion im [`sRGB`-Farbraum](/de/docs/Glossary/Color_space#srgb) wird durch einen {{CSSXref("&lt;hue&gt;")}}-Winkelwert, einen Weißheitswert, einen Schwärzewert und optional einen Alphawert, der die Transparenz der Farbe darstellt, definiert.

Die Winkel, die bestimmten Farbtönen entsprechen, unterscheiden sich zwischen den Farbräumen sRGB (verwendet von {{CSSXref("color_value/hsl", "hsl()")}} und `hwb()`), CIELAB (verwendet von {{CSSXref("color_value/lch", "lch()")}}), und Oklab (verwendet von {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` befindet sich im selben Farbraum wie `hsl()` und hat daher die gleichen Farbton-Winkel. Siehe die {{CSSXref("&lt;hue&gt;")}}-Referenzseite für weitere Detailinformationen und Beispiele oder probieren Sie aus, die Farbtöne im [Farbwähler](/de/docs/Web/CSS/CSS_colors#colors_in_action) zu ändern, um es in Aktion zu sehen.

Eine `hwb()`-Farbe ist vollständig gesättigt, wenn ihre Weißheits- (`W`) und Schwärzewerte (`B`) beide `0` sind. Für einen beliebigen Farbtonwert `H` ist `hwb(H 0% 0%)` dieselbe Farbe wie `hsl(H 100% 50%)`. Das Erhöhen des Weißheitswerts hellt die Farbe auf. Das Erhöhen der Schwärze verdunkelt die Farbe.

Wenn sowohl die Schwärze als auch die Weißheit größer als 0 sind, wird die Farbe gedämpft und tendiert zu Grau. Wenn die Summe der hinzugefügten Weißheit und Schwärze gleich oder größer als 100% ist — in anderen Worten, wenn `W + B >= 100%`, definiert die Farb-Funktion einen Grauton. Wenn die Summe beider Werte größer als 100% ist (`W + B > 100%`), werden die Weißheits- und Schwärzewerte der Graufarbe effektiv als `W / (W + B)` und `B / (W + B)` normalisiert.

## Werte

Nachfolgend sind Beschreibungen der zulässigen Werte für sowohl absolute als auch [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) aufgeführt.

### Absolute Wertsyntax

```plain
hwb(H W B[ / A])
```

Die Parameter sind wie folgt:

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Farbe repräsentiert.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das zur Mischung hinzugefügt wird. `0%` repräsentiert keine Weißheit. `100%` repräsentiert volle Weißheit, wenn `B` `0` ist, ansonsten werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das zur Mischung hinzugefügt wird. `0%` repräsentiert keine Schwärze. `100%` repräsentiert volle Schwärze, wenn `W` `0` ist, ansonsten werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}

  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, das den Alphakanalwert der Farbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal festzulegen. Falls der `A`-Kanalwert nicht explizit angegeben wird, beträgt der Standardwert 100%. Wenn er enthalten ist, geht dem Wert ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Siehe [Fehlende Farbkomponenten](/de/docs/Web/CSS/color_value#missing_color_components) für weitere Informationen über die Auswirkung von `none`.

> [!NOTE]
> Absolute `hwb()`-Farben werden in {{CSSXref("color_value/rgb", "rgb()")}}-Werte serialisiert. Die Werte der Rot-, Grün- und Blaukomponenten können bei der Serialisierung gerundet werden.

### Relative Wertsyntax

```plain
hwb(from <color> H W B[ / A])
```

Die Parameter sind wie folgt:

- `from <color>`

  - : Das Schlüsselwort `from` wird immer verwendet, wenn eine relative Farbe definiert wird, gefolgt von einem {{cssxref("&lt;color&gt;")}}-Wert, der die **Ursprungsfarbe** darstellt. Dies ist die ursprüngliche Farbe, auf der die relative Farbe basiert. Die Ursprungsfarbe kann jede gültige {{cssxref("&lt;color&gt;")}}-Syntax sein, einschließlich einer anderen relativen Farbe.

- `H`

  - : Ein {{CSSXref("&lt;number&gt;")}}, ein {{CSSXref("&lt;angle&gt;")}}, oder das Schlüsselwort `none` (entspricht in diesem Fall `0deg`), das den {{CSSXref("&lt;hue&gt;")}}-Winkel der Ausgabefarbe repräsentiert.

- `W`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Weißheit der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das zur Mischung hinzugefügt wird. `0%` repräsentiert keine Weißheit. `100%` repräsentiert volle Weißheit, wenn `B` `0` ist, ansonsten werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `B`

  - : Ein {{CSSXref("&lt;percentage&gt;")}}, das die Schwärze der Farbe repräsentiert, oder das Schlüsselwort `none` (entspricht in diesem Fall `0%`), das zur Mischung hinzugefügt wird. `0%` repräsentiert keine Schwärze. `100%` repräsentiert volle Schwärze, wenn `W` `0` ist, ansonsten werden sowohl die `W`- als auch die `B`-Werte normalisiert.

- `A` {{optional_inline}}
  - : Ein {{CSSXref("&lt;alpha-value&gt;")}}, der den Alphakanalwert der Ausgabefarbe repräsentiert, wobei die Zahl `0` `0%` (vollständig transparent) und `1` `100%` (vollständig undurchsichtig) entspricht. Zusätzlich kann das Schlüsselwort `none` verwendet werden, um explizit keinen Alphakanal festzulegen. Falls der `A`-Kanalwert nicht explizit angegeben wird, beträgt der Standardwert den Alphakanalwert der Ursprungsfarbe. Wenn er enthalten ist, geht dem Wert ein Schrägstrich (`/`) voraus.

> [!NOTE]
> Um die Darstellung des gesamten Spektrums der sichtbaren Farben vollständig zu ermöglichen, wird die Ausgabe von relativen `hwb()`-Farb-Funktionen in `color(srgb)` serialisiert. Das bedeutet, dass das Abfragen des Ausgabefarbwerts über die {{DOMxRef("HTMLElement.style")}}-Eigenschaft oder die {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}}-Methode die Ausgabefarbe als [`color(srgb ...)`](/de/docs/Web/CSS/color_value/color)-Wert zurückgibt.

### Definition der Ausgabekanalkomponenten für relative Farben

Beim Verwenden der relativen Farbsyntax innerhalb einer `hwb()`-Funktion wandelt der Browser die Ursprungsfarbe in eine äquivalente HWB-Farbe um (wenn sie nicht bereits als solche angegeben ist). Die Farbe wird als drei getrennte Farbkanalwerte — `h` (Farbton), `w` (weiß) und `b` (schwarz) — plus ein Alphakanalwert (`alpha`) definiert. Diese Kanalwerte stehen innerhalb der Funktion zur Verfügung, um verwendet zu werden, wenn die Ausgabefarbkanalwerte definiert werden:

- Der `h`-Kanalwert wird zu einer `<number>` zwischen `0` und `360` aufgelöst.
- Die `w`- und `b`-Kanäle werden jeweils zu einer `<number>` zwischen `0` und `100` aufgelöst.
- Der `alpha`-Kanal wird zu einer `<number>` zwischen `0` und `1` aufgelöst.

Beim Definieren einer relativen Farbe können die verschiedenen Kanäle der Ausgabefarbe auf mehrere verschiedene Arten ausgedrückt werden. Im Folgenden werden wir einige Beispiele studieren, um diese zu veranschaulichen.

In den ersten beiden Beispielen unten verwenden wir die relative Farbsyntax. Das erste Beispiel gibt jedoch dieselbe Farbe wie die Ursprungsfarbe aus und das zweite Beispiel gibt eine Farbe aus, die überhaupt nicht auf der Ursprungsfarbe basiert. Sie erstellen eigentlich keine relativen Farben! Es ist unwahrscheinlich, dass Sie diese jemals in einem realen Codebasis verwenden und würden wahrscheinlich stattdessen einen absoluten Farbwert verwenden. Wir haben diese Beispiele als Ausgangspunkt für das Lernen der relativen `hwb()`-Syntax aufgenommen.

Beginnen wir mit einer Ursprungsfarbe von `hsl(0 100% 50%)` (entspricht `hwb(0 0% 0%)`). Die folgende Funktion gibt dieselbe Farbe wie die Ursprungsfarbe aus — sie verwendet die `h`-, `w`- und `b`-Kanalwerte der Ursprungsfarbe (`0`, `0%`, und `0%`) als die Ausgabekanalwerte:

```css
hwb(from hsl(0 100% 50%) h w b)
```

Die Ausgabefarbe dieser Funktion ist das sRGB-`color()`-Äquivalent von `hwb(0 0% 0%)`: `color(srgb 1 0 0)`.

Die nächste Funktion verwendet absolute Werte für die Kanalwerte der Ausgabefarbe und gibt eine völlig andere Farbe aus, die nicht auf der Ursprungsfarbe basiert:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

Im obigen Fall ist die Ausgabefarbe das sRGB-`color()`-Äquivalent von `hwb(240 52% 12%)`: `color(srgb 0.52 0.52 0.88)`.

Die folgende Funktion erstellt eine relative Farbe basierend auf der Ursprungsfarbe:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Dieses Beispiel:

- Konvertiert die Ursprungsfarbe (`hsl(0 100% 50%)`) in ein `hwb()`-Äquivalent (`hwb(0 0% 0%)`).
- Setzt die `H`- und `B`-Kanalwerte für die Ausgabefarbe auf die der Ursprungsfarb-`hwb()`-Äquivalente `H`- und `B`-Kanalwerte — diese Werte sind `0` und `0%`.
- Der `W`-Kanalwert der Ausgabefarbe wird auf einen neuen Wert gesetzt, der nicht auf der Ursprungsfarbe basiert: `30%`.

Die endgültige Ausgabefarbe ist das Äquivalent von `hwb(0 30% 0%)` im sRGB-Farbraum — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Wie oben erwähnt, wird die Ursprungsfarbe im Hintergrund in das gleiche Modell oder den gleichen Raum wie die Ausgabefarbe konvertiert, um sie so zu repräsentieren, dass sie kompatibel ist (d. h. unter Verwendung derselben Kanäle), wenn die Ausgabefarbe ein anderes Farbmodell als die Ursprungsfarbe verwendet.

In den Beispielen, die wir bisher in diesem Abschnitt gesehen haben, sind die Alphakanäle weder für die Ursprungs- noch für die Ausgabefarben explizit angegeben worden. Wenn der Alphakanal der Ausgabefarbe nicht angegeben ist, entspricht er dem gleichen Wert wie der Alphakanal der Ursprungsfarbe. Wenn der Alphakanal der Ursprungsfarbe nicht angegeben ist (und es sich nicht um eine relative Farbe handelt), beträgt er `1`. Daher beträgt der Alphakanalwert der Ursprung- und Ausgabefarbe `1` für die obigen Beispiele.

Sehen wir uns einige Beispiele an, die die Alphakanalwerte der Ursprungs- und Ausgabefarbe spezifizieren. Das erste Beispiel legt den Alphakanalwert der Ausgabe als gleich dem Alphakanalwert der Ursprungsfarbe fest, während das zweite Beispiel einen anderen Alphakanalwert der Ausgabefarbe festlegt, der nichts mit dem Alphakanalwert der Ursprungsfarbe zu tun hat.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Berechnete Ausgabefarbe: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Berechnete Ausgabefarbe: color(srgb 1 0 0 / 0.5) */
```

Im folgenden Beispiel wird die `hsl()`-Ursprungsfarbe erneut in eine `hwb()`-Darstellung — `hwb(0 0% 0%)` — umgewandelt. {{cssxref("calc")}}-Berechnungen werden auf die `H`-, `W`-, `B`- und `A`-Werte angewendet, und die endgültige Ausgabefarbe ist das Äquivalent von `hwb(120 25% 10% / 0.9` im sRGB-Farbraum: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Da die Ursprungsfarbkanalwerte zu `<number>`-Werten aufgelöst werden, müssen Sie Zahlen hinzufügen, wenn Sie sie in Berechnungen verwenden, selbst in Fällen, in denen ein Kanal normalerweise `<percentage>`, `<angle>` oder andere Werttypen akzeptieren würde. Das Hinzufügen eines `<percentage>` zu einer `<number>` funktioniert beispielsweise nicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von relativen Farben mit hwb()

In diesem Beispiel werden drei {{htmlelement("div")}}-Elemente mit unterschiedlichen Hintergrundfarben gestylt. Das mittlere Element erhält die unveränderte `--base-color`, während das linke und rechte Element aufgehellte und abgedunkelte Varianten dieser `--base-color` erhalten.

Diese Varianten werden mithilfe relativer Farben definiert — die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) `--base-color` wird in eine `hwb()`-Funktion übergeben, und die Ausgabefarben haben ihre weißen und schwarzen Kanäle modifiziert, um den gewünschten Effekt über eine `calc()`-Funktion zu erzielen. Die aufgehellte Farbe hat 30% zum Weißkanal hinzugefügt, und die abgedunkelte Farbe hat 30% zum Schwarzkanel hinzugefügt.

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

/* Entsprechend der Spezifikation sollten w- und b-Werte auf eine Zahl zwischen 0-100 aufgelöst werden.
   Chrome 121+ löst sie jedoch fälschlicherweise in Zahlen zwischen 0-1 auf, daher werden momentan Berechnungen wie w + 0.3 anstelle von w + 30 verwendet */

#one {
  background-color: hwb(from var(--base-color) h calc(w + 0.3) b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hwb(from var(--base-color) h w calc(b + 0.3));
}

/* Verwenden Sie @supports, um Unterstützung für ältere Syntax hinzuzufügen, die erfordert, dass % Einheiten in w- und b-Berechnungen spezifiziert werden. Dies ist erforderlich für Safari 16.4+. */
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

- {{CSSXref("&lt;color&gt;")}}: Für eine Liste aller Farbnomenklaturen
- [Farbauswahl- und Konvertierungstool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors) Modul
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der einen Farbtonwinkel einer Farbe darstellt
