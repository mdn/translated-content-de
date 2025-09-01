---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 8fd67169d113ffd041b6d5d85596b66f7004853a
---

Die **`color-mix()`** Funktionsnotation nimmt zwei {{cssxref("&lt;color&gt;")}}-Werte und gibt das Ergebnis ihrer Mischung in einem bestimmten Farbraum nach einer bestimmten Menge zurück.

Die Wahl des richtigen Farbraums ist entscheidend für das Erreichen der gewünschten Ergebnisse. Bei gegebenen Farben können je nach Interpolationsfall unterschiedliche Farbräume geeigneter sein.

- Wenn das Ergebnis der physischen Mischung zweier farbiger Lichter gewünscht ist, ist der CIE XYZ- oder srgb-linear-Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben gleichmäßig wahrnehmbar verteilt sein müssen (wie in einem Farbverlauf), sind der Oklab-Farbraum (und der ältere Lab) geeignet, da sie darauf ausgelegt sind, wahrnehmungsweise gleichmäßig zu sein.
- Wenn das Vermeiden von Abdunkelung bei der Farbvermischung gewünscht ist, d.h. die Maximierung der Chroma während des Übergangs, funktionieren Oklch (und der ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer bestimmten Software nachahmen müssen, die sRGB verwenden. Der sRGB-Farbraum ist weder linear in der Lichtstärke noch wahrnehmungsweise gleichmäßig und führt zu schlechteren Ergebnissen wie übermäßig dunklen oder grauen Mischungen.

## Syntax

```css
/* Polar color space */
color-mix(in hsl, hsl(200 50 80), coral 80%)

/* Rectangular color space */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* Custom color space */
color-mix(in --swop5c, red, blue)

/* With hue interpolation method */
color-mix(in lch longer hue, hsl(200deg 50% 80%), coral)
```

### Werte

Funktionsnotation: `color-mix(<color-interpolation-method>, <color>[<percentage>], <color>[<percentage>])`

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Es besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}}-Namen. Die folgenden drei Typen sind verfügbar:
    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), der auf ein benutzerdefiniertes [@color-profile](/de/docs/Web/CSS/@color-profile) verweist.

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der verfügbaren Farbräume sein, die in der [formal_syntax](#formale_syntax) aufgelistet sind.

- `<color>`
  - : Ein {{CSSXref("&lt;color&gt;")}}-Wert zum Mischen.

- `<percentage>` {{optional_inline}}
  - : Ein {{CSSXref("&lt;percentage&gt;")}}-Wert zwischen `0%` und `100%`, der die zu mischende Menge der entsprechenden Farbe angibt.

    Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:
    - Wenn sowohl `p1` als auch `p2` ausgelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` ausgelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` ausgelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ähnelt dem Mischen von [`transparent`](/de/docs/Web/CSS/named-color#transparent) mit dem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farbmischer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mit der Funktion `color-mix()`. Die Quellfarben werden außen und die Mischung in der Mitte angezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und eine neue Farbe im resultierenden Farbwähler auswählen. Sie können auch den Prozentsatz jeder Farbe in der Mischung mit den Schiebereglern anpassen und den Farbraum mit dem Dropdown-Menü ändern.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Mischen zweier Farben

Dieses Beispiel demonstriert das Mischen zweier Farben, Rot `#a71e14` in verschiedenen Prozentsätzen und Weiß ohne Angabe eines Prozentsatzes. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto röter und weniger weiß ist die Ausgabefarbe.

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

Die Funktion `color-mix()` wird verwendet, um steigende Prozentsätze von Rot hinzuzufügen, bis zu 100%. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 3px solid #a71e14;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in oklab, #a71e14 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in oklab, #a71e14 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in oklab, #a71e14 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in oklab, #a71e14 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in oklab, #a71e14 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in oklab, #a71e14, white);
}
```

#### Ergebnis

{{EmbedLiveSample("mixing_two_colors", "100%", 120)}}

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht 100% ausmachen. In diesem Beispiel, da nur eine Farbe einen Prozentsatz hat, wird der anderen Farbe implizit ein Prozentsatz zugewiesen, sodass die kombinierte Gesamtsumme 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner der beiden Farben ein Prozentsatz zugewiesen ist, werden beide standardmäßig auf 50% gesetzt.

### Transparenz hinzufügen

Dieses Beispiel demonstriert die Verwendung der `color-mix()`-Funktion, um Transparenz hinzuzufügen, indem eine Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

Die Funktion `color-mix()` wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` deklariert ist, die auf dem {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was zu einer Ausgabefarbe führt, die halb so opak ist wie die `--base`-Farbe. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
:root {
  --base: red;
}

ul {
  background: repeating-linear-gradient(
    45deg,
    chocolate 0px 2px,
    white 2px 12px
  );
}

li:nth-child(1) {
  background-color: color-mix(in srgb, var(--base) 0%, transparent);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, var(--base) 25%, transparent);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, var(--base) 50%, transparent);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, var(--base) 75%, transparent);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, var(--base) 100%, transparent);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, var(--base), transparent);
}
```

#### Ergebnis

{{EmbedLiveSample("adding transparency", "100%", 120)}}

Auf diese Weise kann die `color-mix()`-Funktion verwendet werden, um jeder Farbe Transparenz hinzuzufügen, auch wenn die Farbe bereits nicht opak ist (mit einem Alpha-Kanal-Wert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig opak zu machen. Dafür verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines Farbkanals ändern, einschließlich der Erhöhung eines Farbkanals auf Alfa-Basis, um die Farbe vollständig opak zu rendern.

### Verwendung der Farbeninterpolation in `color-mix()`

Dieses Beispiel demonstriert die Methoden der Farbeninterpolation, die für die Funktion `color-mix()` verfügbar sind. Bei der Verwendung von Hue [Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Hue-Wert zwischen den Hue-Werten der beiden gemischten Farben. Der Wert wird unterschiedlich sein, abhängig von der Richtung um den Farbkreis.

Für weitere Informationen siehe {{cssxref("&lt;hue-interpolation-method&gt;")}}.

```html hidden
<p>longer</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>shorter</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>increasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>decreasing</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
```

#### CSS

Die Interpolationsmethode `shorter hue` nimmt den kürzeren Weg um den Farbkreis, während die Methode `longer hue` den längeren Weg nimmt. Mit `increasing hue` beginnt der Verlauf mit steigenden Werten. Mit `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Serie von `lch()` Intermediärfarben zu erstellen, die sich unterscheiden, je nachdem welcher Weg um den Farbkreis genommen wird. Die gemischten Farben sind `red`, `blue` und `yellow` mit LCH-Hue-Werten von etwa 41deg, 301deg und 100deg.

Um Code-Redundanz zu verringern, haben wir [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet, wobei wir verschiedene Werte auf jedes {{htmlelement("ul")}} setzen.

```css hidden
body {
  font-family: monospace;
}
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  padding: 10px;
  margin: 0;
}

li {
  padding: 10px;
  flex: 1;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
ul:nth-of-type(1) {
  --distance: longer; /* 52 degree hue increments */
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(2) {
  /* 20 degree hue decrements */
  --distance: shorter;
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(3) {
  /* 40 degree hue increments */
  --distance: increasing;
  --base: yellow;
  --mixin: blue;
}
ul:nth-of-type(4) {
  /* 32 degree hue decrements */
  --distance: decreasing;
  --base: yellow;
  --mixin: blue;
}

li:nth-child(1) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 100%,
    var(--mixin)
  );
}

li:nth-child(2) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 80%,
    var(--mixin)
  );
}

li:nth-child(3) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 60%,
    var(--mixin)
  );
}

li:nth-child(4) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 40%,
    var(--mixin)
  );
}

li:nth-child(5) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 20%,
    var(--mixin)
  );
}

li:nth-child(6) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 0%,
    var(--mixin)
  );
}
```

#### Ergebnis

{{EmbedLiveSample("using_hue_interpolation_in_color_mix", "100%", 440)}}

Mit `longer hue` werden die Schritte zwischen den Farben immer gleich oder größer sein als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Hue-Werts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
