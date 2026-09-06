---
title: "`color-mix()` CSS-Funktion"
short-title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: b01888f5bfa93e23fdf398afc3073d61d6d3c832
---

Die **`color-mix()`** Funktionsnotation nimmt einen oder mehrere {{cssxref("&lt;color&gt;")}} Werte an und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum mit einer gegebenen Menge zurück.

## Syntax

```css
/* Polar color space */
color-mix(in hsl, hsl(200 50 80), coral)
color-mix(in hsl, hsl(200 50 80) 20%, coral 80%)

/* Rectangular color space */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* With hue interpolation method */
color-mix(in lch increasing hue, hsl(200deg 50% 80%), coral)
color-mix(in lch longer hue, hsl(200deg 50% 80%) 44%, coral 16%)

/* With a color argument list */
color-mix(in oklab, teal)
color-mix(in oklab, teal 20%, olive 30%, blue 50%)
color-mix(in oklab, teal, olive, blue, purple)
```

### Parameter

Die `color-mix( <color-interpolation-method>? , [ <color> && <percentage [0,100]>? ]#)` akzeptiert folgende Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}} {{optional_inline}}
  - : Gibt an, welche Interpolationsmethode zur Mischung der Farben verwendet werden soll. Es besteht aus dem `in` Schlüsselwort, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einer der im [formalen Syntax](#formale_syntax) aufgelisteten Farbräume, standardmäßig `oklab`), und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}, die standardmäßig auf `shorter hue` gesetzt ist.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine Farbe, die gemischt werden soll; kann jeder gültige `<color>` Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll; kann jeder `<percentage>` Wert zwischen `0%` und `100%` sein, einschließlich.

### Rückgabewert

Ein `<color>`; das Ergebnis der Mischung der Farben im angegebenen `<color-space>`, in den spezifizierten Mengen und Richtungen der Farbtoninterpolation.

## Beschreibung

Die `color-mix()` Funktion ermöglicht das Mischen eines oder mehrerer {{cssxref("&lt;color&gt;")}} Werte jeder Art, in einem bestimmten Verhältnis, in einem gegebenen Farbraum, unter Verwendung einer kürzeren oder längeren Farbtoninterpolationsmethode. Browser unterstützen eine Vielzahl von Farbräumen; die `color-mix()` Funktion ermöglicht es, eine breite Palette von Farben zu mischen, die nicht auf den sRGB Farbraum beschränkt sind.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Dieses Demo ermöglicht es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei optional der Prozentsatz jeder Farbe, der Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode festgelegt werden kann. Die Ausgangsfarben werden außen gezeigt und die gemischte Farbe in der Mitte. Sie können Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem erscheinenden Farbwähler auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Einen Farbraum auswählen

Die Auswahl des richtigen Farbraums ist wichtig für die Erzielung gewünschter Ergebnisse. Bei gleichen Farben zur Mischung können unterschiedliche Farbräume je nach Interpolationsanwendungsfall geeigneter sein.

- Wenn das Ergebnis vom physischen Mischen farbiger Lichter gewünscht ist, sind die CIE XYZ oder srgb-linear Farbräume geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben gleichmäßig wahrnehmbar verteilt sein müssen (wie in einem Verlauf), sind die Oklab (und ältere Lab) Farbräume geeignet, da sie so gestaltet sind, dass sie wahrnehmbar gleichmäßig sind.
- Wenn das Vermeiden von Vergrauung beim Mischen von Farben gewünscht ist, d.h. die Maximierung des Chroma über die gesamte Übergangszeit, sind die Oklch (und ältere LCH) Farbräume gut geeignet.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer bestimmten Software, die sRGB verwendet, nachbilden müssen. Der sRGB Farbraum ist weder linear in der Lichtintensität noch wahrnehmbar gleichmäßig und erzeugt schlechtere Ergebnisse wie zu dunkle oder gräuliche Mischungen.

### Farbinterpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode zur Mischung der Farben verwendet werden soll. Sie besteht aus dem `in` Schlüsselwort und dem Farbraum, in dem die Farben gemischt werden sollen.
Der Farbraum muss einer der verfügbaren Farbräume sein, die im [formalen Syntax](#formale_syntax) aufgelistet sind. Abhängig vom verwendeten Farbraum können Sie optional den Farbton entlang eines längeren oder kürzeren Pfades mischen.

Die [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) Kategorie umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die `<polar-color-space>` Kategorie umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch), und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Mit diesen können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} ergänzen. Dieser Wert ist standardmäßig auf `shorter hue` gesetzt, kann aber auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Standardfarbraum und Interpolationsmethode

Wenn Farben gemischt werden, ohne einen Farbraum oder eine Farbtoninterpolationsmethode anzugeben, wird der `oklab` Farbraum verwendet, wobei `shorter` als die Farbtoninterpolationsmethode verwendet wird.

Die folgenden drei Deklarationen sind gleichwertig:

```css
background-color: color-mix(red, blue);
background-color: color-mix(in oklab, red, blue);
background-color: color-mix(in oklab shorter hue, red, blue);
```

### Farbprozentanteile

Jede Farbe kann mit einem `<percentage>` Wert zwischen `0%` und `100%` deklariert werden, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll. Die Prozentanteile werden normalisiert, wenn der Gesamtwert der deklarierten Prozentanteile nicht `100%` entspricht.

Wenn zwei Farben gemischt werden, werden die zwei Farbprozentanteile (wir nennen sie `p1` und `p2`) wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` ausgelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` ausgelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` ausgelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
  - Wenn `p1 + p2 < 100%`, wird ein Alphamultiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen von [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), mit einem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mischen von zwei Farben

Dieses Beispiel demonstriert das Mischen von zwei Farben, Rot `#a71e14` mit unterschiedlichen Prozentanteilen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentanteil von `#a71e14` gemischt wird, desto röter und weniger weiß ist die Ausgabefarbe.

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

Die `color-mix()` Funktion wird verwendet, um aufsteigende Prozentanteile von Rot bis zu 100% hinzuzufügen. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% ergeben. In diesem Beispiel, da nur eine Farbe einen Prozentsatz zugewiesen hat, erhält die andere Farbe implizit einen Prozentsatzwert, sodass die Gesamtmenge 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner der Farben ein Prozentsatz zugewiesen ist, beträgt der Standardwert für beide 50%.

### Mischen einer Liste von Farben

Dieses Beispiel demonstriert das Übergeben einer Farblistenargumente an `color-mix()`. Die Funktion akzeptiert eine beliebige Anzahl von Farben, nicht nur zwei, und jede von ihnen kann optional einen Prozentsatz erhalten.

#### HTML

```html
<ul>
  <li>1 color</li>
  <li>3 colors, with percentages</li>
  <li>4 colors, no percentages</li>
</ul>
```

#### CSS

Die erste {{htmlelement("li")}} mischt eine einzige Farbe, die sich zu dieser Farbe auflöst. Die zweite mischt drei Farben, deren Prozentwerte insgesamt 100% ergeben. Die dritte mischt vier Farben ohne Prozentsatz, sodass jede Farbe einen gleichen Anteil bekommt.

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
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in oklab, teal);
}

li:nth-child(2) {
  background-color: color-mix(in oklab, teal 20%, olive 30%, blue 50%);
}

li:nth-child(3) {
  background-color: color-mix(in oklab, teal, olive, blue, purple);
}
```

```css hidden
@supports not (color: color-mix(in oklab, red, white, blue)) {
  body::before {
    content: "Your browser doesn't support color lists in the color-mix() function.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("mixing_a_list_of_colors", "100%", 180)}}

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die `color-mix()` Funktion verwendet wird, um einer Farbe Transparenz hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) gemischt wird.

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

Die `color-mix()` Funktion wird verwendet, um aufsteigende Prozentanteile von `rot`, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` deklariert wurde, die auf dem {{cssxref(":root")}} definiert ist, hinzuzufügen. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, wodurch eine Ausgabefarbe entsteht, die halb so undurchsichtig wie die `--base` Farbe ist. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um jeder Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht-transparent ist (mit einem Alpha-Kanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Dazu verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS [Farb-Funktion](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert eines jeden Farbkanals ändern, einschließlich der Erhöhung des Alpha-Kanals einer Farbe, um die Farbe vollständig undurchsichtig zu machen.

### Verwenden der Farbtoninterpolation in color-mix()

Dieses Beispiel zeigt die in der `color-mix()` Funktion verfügbaren Farbtoninterpolationsmethoden. Bei der Verwendung der [Interpolations](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) von Farbtönen liegt der resultierende Farbton zwischen den Farbtonwerten der gemischten Farben. Der Wert variiert je nachdem, welcher Weg um den Farbkreis genommen wird.

Weitere Informationen finden Sie unter {{cssxref("&lt;hue-interpolation-method&gt;")}}.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um den Farbkreis, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt die Route mit zunehmenden Werten. Mit `decreasing hue` verringert sich der Wert. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erstellen, die sich basierend auf dem Weg um den Farbkreis unterscheiden. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH Farbwerten von ungefähr 41deg, 301deg und 100deg.

Um Code Redundanz zu reduzieren, verwendeten wir [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) sowohl für Farben als auch für die Interpolationsmethode, wobei verschiedene Werte auf jedes {{htmlelement("ul")}} gesetzt wurden.

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

Mit `longer hue` werden die Zunahmen oder Abnahmen zwischen den Farben immer gleich oder größer sein als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Veränderung des Farbtonwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [CSS relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
