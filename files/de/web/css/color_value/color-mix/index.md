---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`color-mix()`** Funktionsnotation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum um einen bestimmten Betrag zurück.

Das richtige Farbraum zu wählen ist wichtig, um die gewünschten Ergebnisse zu erzielen. Je nach Anwendungsfall für die Interpolation können unterschiedliche Farbräume geeigneter sein, selbst wenn die gleichen Farben gemischt werden sollen.

- Wenn das Ergebnis der physischen Mischung von zwei farbigen Lichtern gewünscht ist, eignet sich der CIE XYZ oder srgb-linear Farbraum, da diese linear in der Lichtintensität sind.
- Falls Farben gleichmäßig wahrnehmbar verteilt sein sollen (zum Beispiel in einem Farbverlauf), ist der Oklab Farbraum (und der ältere Lab) geeignet, weil sie darauf ausgelegt sind, wahrnehmbar gleichmäßig zu sein.
- Wenn das Vermeiden von Verblassung in der Farbmischung gewünscht ist, das heißt die Maximierung der Chroma über den gesamten Übergang, eignen sich Oklch (und das ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines spezifischen Geräts oder einer Software, die sRGB verwendet, nachahmen müssen. Der sRGB Farbraum ist weder linear im Licht noch wahrnehmbar gleichmäßig und führt zu schlechteren Ergebnissen wie übermäßig dunklen oder gräulichen Mischungen.

## Syntax

```css
/* color-mix(in <polar-color-space>, <color>, <color> <percentage>) */
color-mix(in hsl, hsl(200 50 80), coral 80%)
/* color-mix(in <polar-color-space> <hue-interpolation-method>, <color>, <color>) */
color-mix(in lch longer hue, hsl(200deg 50% 80%), coral)

/* color-mix(in <rectangular-color-space>, <color>, <color>) */
color-mix(in srgb, plum, #123456)
/* color-mix(in <rectangular-color-space>, <color> <percentage>, <color> <percentage> */
color-mix(in lab, plum 60%, #123456 50%)

/* color-mix(in <custom-color-space>, <color>, <color>) */
color-mix(in --swop5c, red, blue)
```

### Werte

Funktionsnotation: `color-mix(<color-interpolation-method>, <color>[<percentage>], <color>[<percentage>])`

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode zur Mischung der Farben verwendet werden soll. Sie besteht aus dem `in` Schlüsselwort gefolgt von einem {{Glossary("color_space", "Farbraum")}}-Namen. Die folgenden drei Typen sind verfügbar:
    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), das auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile) verweist.

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Der Farbraum muss derzeit einer der im [formal_syntax](#formale_syntax) aufgelisteten verfügbaren Farbräume sein.

- `<color>`
  - : Ein {{CSSXref("&lt;color&gt;")}} Wert, der gemischt werden soll.

- `<percentage>` {{optional_inline}}
  - : Ein {{CSSXref("&lt;percentage&gt;")}} Wert zwischen `0%` und `100%`, der angibt, wie viel von der entsprechenden Farbe gemischt werden soll.

    Die zwei Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:
    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich, als würde man mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) mischen, mit dem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farb-Mixer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, unter Verwendung der Funktion `color-mix()`. Die Quellfarben werden an der Außenseite gezeigt, und die gemischte Farbe wird in der Mitte gezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und mit dem sich öffnenden Farbpicker eine neue Farbe auswählen. Sie können auch den Prozentsatz jeder Farbe, die in die Mischung einfließt, mit den Schiebereglern ändern und den Farbraum mit dem Dropdown-Menü einstellen.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel zeigt die Mischung von zwei Farben, rot `#a71e14` in verschiedenen Prozentsätzen und weiß ohne Prozentsatz. Je höher der Prozentsatz von `#a71e14` in die Mischung einfließt, desto mehr rot und desto weniger weiß ist die resultierende Farbe.

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

Die `color-mix()` Funktion wird verwendet, um steigende Prozentsätze von rot hinzuzufügen, bis zu 100%. Das 6te {{htmlelement("li")}} enthält keinen Prozentsatz für irgendeine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, selbst wenn die vom Entwickler gesetzten Werte nicht insgesamt 100% ergeben. In diesem Beispiel wird, da nur einer Farbe ein Prozentsatz zugewiesen ist, der anderen Farbe implizit ein Prozentsatzwert zugewiesen, sodass die kombinierte Summe 100% ergibt. Im letzten {{htmlelement("li")}}, in dem keiner der Farben ein Prozentsatz zugewiesen ist, wird bei beiden der Standardwert 50% angenommen.

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die `color-mix()` Funktion verwendet wird, um eine Farbe durch Mischung mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) zu einem beliebigen Farbanteil transparent zu machen.

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

Die `color-mix()` Funktion wird verwendet, um steigende Prozentsätze von `rot` hinzuzufügen, das durch eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` auf dem {{cssxref(":root")}} definiert ist. Das 6te {{htmlelement("li")}} enthält keinen Prozentsatz, was eine Ausgabe-Farbe erzeugt, die halb so opak ist wie die `--base` Farbe. Wir haben einen gestreiften Hintergrund auf das {{htmlelement("ul")}} gesetzt, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um jeder Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht opak ist (mit einem Alpha-Kanal-Wert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig opak zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert jedes Farbkanals ändern, einschließlich der Erhöhung des Alpha-Kanals einer Farbe, um die Farbe vollständig opak zu machen.

### Verwenden der Hue-Interpolation in color-mix()

Dieses Beispiel zeigt die Hue-Interpolationsmethoden, die der `color-mix()` Funktion zur Verfügung stehen. Bei der Verwendung von Hue [Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der zwei gemischten Farben. Der Wert wird unterschiedlich sein, je nach dem, welche Route um das Farbrad genommen wird.

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

Die `shorter hue` Interpolationsmethode nimmt die kürzere Route um das Farbrad, während die `longer hue` Interpolationsmethode die längere Route nimmt. Mit `increasing hue` beginnt die Route mit steigenden Werten. Mit `decreasing hue` sinkt der Wert. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erzeugen, die sich je nach gewählter Route um das Farbrad unterscheiden. Zu den gemischten Farben gehören `rot`, `blau`, und `gelb` mit LCH Farbtonwerten von ungefähr 41deg, 301deg, und 100deg.

Um Code-Redundanz zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) sowohl für die Farben als auch für die Interpolationsmethode verwendet und unterschiedliche Werte auf jedem {{htmlelement("ul")}} gesetzt.

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

Mit `longer hue` werden die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer sein als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbwertänderung wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
