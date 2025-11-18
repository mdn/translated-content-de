---
title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`color-mix()`** funktionale Notation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis der Mischung in einem angegebenen Farbraum in einer bestimmten Menge zurück.

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
```

### Parameter

Der `color-mix( <color-interpolation-method>, <color> [<percentage>], <color> [<percentage>] )` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Es besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einer der in der [formalen Syntax](#formale_syntax) gelisteten Farbräume) und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine Farbe, die gemischt werden soll; kann jeden gültigen `<color>` Wert annehmen.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll; kann jeden `<percentage>` Wert zwischen `0%` und `100%`, einschließlich, annehmen.

### Rückgabewert

Ein `<color>`; das Ergebnis der Mischung der Farben in dem angegebenen `<color-space>` in der festgelegten Menge und Farbrichtung.

## Beschreibung

Die Funktion `color-mix()` ermöglicht das Mischen von zwei {{cssxref("&lt;color&gt;")}} Werten jeglichen Typs, in einem bestimmten Verhältnis, in einem gegebenen Farbraum, unter Verwendung entweder einer kürzeren oder längeren Farbtoninterpolationsmethode. Browser unterstützen eine Vielzahl von Farbräumen; die Funktion `color-mix()` ermöglicht eine breite Palette von Farben zu mischen, nicht nur beschränkt auf den sRGB-Farbraum.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Diese Demo ermöglicht es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei optional der Prozentsatz jeder Farbe, der Farbraum in dem die Farben gemischt werden, und die Interpolationsmethode eingestellt werden. Die Quellfarben werden außen angezeigt, und die gemischte Farbe erscheint in der Mitte. Sie können die Farben ändern, indem Sie auf sie klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Wahl eines Farbraums

Die Wahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Je nach Interpolationsverwendungsfall können für das Mischen der gleichen Farben unterschiedliche Farbräume geeigneter sein.

- Wenn das Ergebnis des physischen Mischens zweier farbiger Lichter gewünscht ist, ist der CIE XYZ- oder srgb-linear-Farbraum geeignet, da sie linear in Lichtintensität sind.
- Wenn Farben wahrnehmbar gleichmäßig verteilt sein müssen (wie bei einem Farbverlauf), sind die Oklab (und ältere Lab) Farbräume geeignet, da sie darauf ausgelegt sind, wahrnehmbar gleichmäßig zu sein.
- Wenn das Vergrauen beim Mischen von Farben vermieden werden soll, d.h. die Chroma über den gesamten Verlauf maximiert werden soll, arbeiten die Oklch (und ältere LCH) Farbräume gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software nachahmen müssen, die sRGB verwendet. Der sRGB-Farbraum ist weder linear-leicht noch wahrnehmbar gleichmäßig und liefert schlechtere Ergebnisse, wie zu dunkle oder graue Mischungen.

### Farbton-Interpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen. Der Farbraum muss einer der in der [formalen Syntax](#formale_syntax) verfügbaren sein. Abhängig vom verwendeten Farbraum können Sie optional die Farbrichtung entlang eines längeren oder kürzeren Pfades anweisen.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch), und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Mit diesen können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} folgen. Dieser Wert ist standardmäßig `shorter hue`, kann aber auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Farbprozentsätze

Jede der beiden Farben kann mit einem `<percentage>` Wert zwischen `0%` und `100%` deklariert werden, der die Menge der entsprechenden Farbe angibt. Die Prozentsätze werden normalisiert, wenn der Gesamtwert der deklarierten Prozentsätze nicht `100%` beträgt.

Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
  - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), mit dem Prozent `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mischen zweier Farben

Dieses Beispiel zeigt das Mischen von zwei Farben, rot `#a71e14` bei verschiedenen Prozentsätzen und weiß ohne Prozentangabe. Je höher der Prozentsatz von `#a71e14` ist, desto mehr Rot und weniger Weiß hat die Ausgabefarbe.

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

Die `color-mix()` Funktion wird verwendet, um steigende Prozentsätze von Rot hinzuzufügen, bis zu 100%. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der beiden Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, selbst wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% betragen. In diesem Beispiel, da nur eine Farbe einen zugewiesenen Prozentanteil hat, erhält die andere implizit einen Prozentwert, so dass die Gesamtsumme 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugewiesen ist, beträgt der Standardwert beider 50%.

### Hinzufügen von Transparenz

Dieses Beispiel zeigt die Verwendung der `color-mix()` Funktion, um einer Farbe Transparenz hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) gemischt wird.

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

Die `color-mix()` Funktion wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` deklariert wird, die auf dem {{cssxref(":root")}} definiert ist. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was eine Farbe erzeugt, die halb so opak ist wie die `--base` Farbe. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um einer beliebigen Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alphakanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig opak zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS-[Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich Erhöhung des Alphakanals einer Farbe, um die Farbe vollständig opak zu machen.

### Verwendung der Farbtoninterpolation in color-mix()

Dieses Beispiel zeigt die in der Funktion `color-mix()` verfügbaren Farbtoninterpolationsmethoden. Bei der Verwendung der Farbton-[Interpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtönen der beiden gemischten Farben. Der Wert wird unterschiedlich sein, je nachdem, welchen Weg er entlang des Farbkreises nimmt.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um den Farbkreis, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt der Weg mit zunehmenden Werten. Mit `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erstellen, die sich je nach Weg, den sie um den Farbkreis nehmen, unterscheiden. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH Farbtonwerten von ungefähr 41deg, 301deg und 100deg.

Um Redundanz im Code zu reduzieren, verwendeten wir [CSS-benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) für beide Farben und für die Interpolationsmethode, wobei unterschiedliche Werte auf jedem {{htmlelement("ul")}} gesetzt wurden.

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

Mit `longer hue` werden die Erhöhungen oder Verringerungen zwischen Farben immer gleich oder größer sein als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtonwerts wichtiger ist als der Abstand zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
