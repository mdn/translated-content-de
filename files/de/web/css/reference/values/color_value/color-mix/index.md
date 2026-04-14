---
title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: b272f3e0aef3030a1370f1466fa59ee97243de7a
---

Die **`color-mix()`** Funktionsnotation nimmt einen oder mehrere {{cssxref("&lt;color&gt;")}} Werte und liefert das Ergebnis ihrer Mischung in einem gegebenen Farbmodell in einem bestimmten Verhältnis zurück.

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

/* with more than two colors */
color-mix(in oklab, teal, olive, blue)
color-mix(in oklab, teal 20%, olive 30%, blue 50%)
```

### Parameter

Der `color-mix( <color-interpolation-method>? , [ <color> && <percentage [0,100]>? ]#)` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Es besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Farbmodell")}} (eines der Farbmodelle, die in der [formalen Syntax](#formale_syntax) aufgeführt sind), und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine zu mischende Farbe; kann jeder gültige `<color>` Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der den Anteil der entsprechenden Farbe angibt, der zu mischen ist; kann jeder `<percentage>` Wert zwischen `0%` und `100%` sein, inklusive.

### Rückgabewert

Ein `<color>`; das Ergebnis der Mischung der Farben im gegebenen `<color-space>`, in den spezifizierten Anteilen und der Richtung des Farbtons.

## Beschreibung

Die `color-mix()` Funktion ermöglicht die Mischung von einem oder mehreren {{cssxref("&lt;color&gt;")}} Werten beliebigen Typs, in einem bestimmten Verhältnis, in einem gegebenen Farbmodell, unter Verwendung einer kürzeren oder längeren Farbton-Interpolationsmethode. Browser unterstützen eine Vielzahl von Farbmodellen; die `color-mix()` Funktion ermöglicht es, eine große Bandbreite an Farben zu mischen, nicht nur auf den sRGB Farbraum beschränkt.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Diese Demo ermöglicht es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei optional der prozentuale Anteil jeder Farbe, der Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode festgelegt werden können. Die Ausgangsfarben werden außen gezeigt, die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und mit dem resultierenden Farbwähler eine neue Farbe auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Farbraum wählen

Die Wahl des richtigen Farbraums ist wichtig für die Erzielung gewünschter Ergebnisse. Bei denselben zu mischenden Farben können je nach Interpolationsverwendung unterschiedliche Farbräume geeigneter sein.

- Wenn das physische Mischen farbiger Lichter das Ziel ist, sind der CIE XYZ oder der srgb-linear Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben wahrnehmbar gleichmäßig verteilt sein müssen (wie in einem Farbverlauf), sind die Oklab (und älteren Lab) Farbräume geeignet, da sie so gestaltet sind, dass sie wahrnehmbar gleichmäßig sind.
- Wenn das Ausbleichen bei der Farbmischung vermieden werden soll, das heißt, die Chroma in der gesamten Übergangsphase zu maximieren, funktionieren die Oklch (und älteren LCH) Farbräume gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software, die sRGB verwendet, abgleichen müssen. Der sRGB Farbraum ist weder linear in Bezug auf Licht noch wahrnehmbar gleichmässig und ergibt schlechtere Ergebnisse, wie z.B. zu dunkle oder gräuliche Mischungen.

### Farbton-Interpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen. Der Farbraum muss einer der verfügbaren Farbräume sein, die in der [formalen Syntax](#formale_syntax) aufgeführt sind. Je nach verwendetem Farbraum können Sie optional den Farbton auf einem längeren oder kürzeren Weg mischen.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die `<polar-color-space>` Kategorie umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch), und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Mit diesen können Sie optional den Namen des Farbraums mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} fortsetzen. Dieser Wert ist standardmäßig `shorter hue`, kann aber auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Farbprozentwerte

Jede Farbe kann mit einem `<percentage>` Wert zwischen `0%` und `100%` deklariert werden, der den Anteil der entsprechenden Farbe angibt, der gemischt werden soll. Die Prozentwerte werden normalisiert, wenn der Gesamtwert der deklarierten Prozentwerte nicht `100%` entspricht.

Wenn zwei Farben gemischt werden, werden die zwei Farbprozentsätze (wir nennen sie `p1` und `p2`) wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
  - Wenn `p1 + p2 < 100%`, dann wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ähnelt dem Mischen mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), mit dem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Zwei Farben mischen

Dieses Beispiel zeigt das Mischen von zwei Farben, rot `#a71e14` in unterschiedlichen Prozentsätzen und weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto röter und weniger weiß ist die Ausgabefarbe.

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

Die `color-mix()` Funktion wird verwendet, um steigende Prozentsätze von Rot hinzuzufügen, bis zu 100%. Die 6. {{htmlelement("li")}} enthält weder für die eine noch die andere Farbe einen Prozentsatz.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% betragen. In diesem Beispiel, da nur einer Farbe ein Prozentsatz zugewiesen wurde, erhält die andere Farbe implizit einen Prozentsatz, sodass die kombinierte Summe 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugewiesen wird, erhalten beide standardmäßig 50%.

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die `color-mix()` Funktion verwendet wird, um einer Farbe Transparenz hinzuzufügen, indem sie mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) gemischt wird.

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

Die `color-mix()` Funktion wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, das über eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) mit dem Namen `--base` deklariert wird, die auf dem {{cssxref(":root")}} definiert ist. Die 6. {{htmlelement("li")}} enthält keinen Prozentsatz, wodurch eine Ausgabefarbe entsteht, die halb so opak wie die `--base` Farbe ist. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um jeder Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht opak ist (mit einem Alpha-Kanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig opak zu machen. Verwenden Sie dafür eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS [Farb-Funktion](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert jedes Farbkanals ändern, einschließlich der Erhöhung eines Alpha-Kanals, um die Farbe vollständig opak darzustellen.

### Verwendung von Farbton-Interpolation in color-mix()

Dieses Beispiel zeigt die in der `color-mix()` Funktion verfügbaren Farbton-Interpolationsmethoden. Wenn die Farbton [Interpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) verwendet wird, liegt der resultierende Farbton zwischen den Farbtonwerten der gemischten Farben. Der Wert wird unterschiedlich sein, abhängig von der Route, die um den Farbkreis genommen wird.

Weitere Informationen finden Sie in {{cssxref("&lt;hue-interpolation-method&gt;")}}.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um den Farbkreis herum, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt die Route mit zunehmenden Werten. Bei `decreasing hue` verringert sich der Wert. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erstellen, die sich abhängig von der Route, die um den Farbkreis genommen wird, unterscheiden. Die gemischten Farben umfassen `red`, `blue`, und `yellow` mit LCH Farbwerten von ungefähr 41deg, 301deg, und 100deg, jeweils.

Um Redundanz im Code zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) sowohl für die Farben als auch für die Interpolationsmethode verwendet, indem wir verschiedene Werte auf jedem {{htmlelement("ul")}} gesetzt haben.

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

Mit `longer hue` sind die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtungsänderung des Farbtonwertes wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [CSS relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
