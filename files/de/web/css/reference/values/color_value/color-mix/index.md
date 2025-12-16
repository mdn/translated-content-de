---
title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`color-mix()`** Funktionalnotation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und liefert das Ergebnis des Mischens dieser in einem bestimmten Farbraum mit einer bestimmten Menge zurück.

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

Die `color-mix( <color-interpolation-method>, <color> [<percentage>], <color> [<percentage>] )` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einer der Farbräume, die in der [formalen Syntax](#formale_syntax) aufgelistet sind), und optional einem {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine Farbe zum Mischen; kann jeder gültige `<color>` Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein prozentualer Wert, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll; kann jeder `<percentage>` Wert zwischen `0%` und `100%` sein, einschließlich.

### Rückgabewert

Ein `<color>`; das Ergebnis des Mischens der Farben im angegebenen `<color-space>`, in den angegebenen Mengen und der spezifizierten Farbtonrichtung.

## Beschreibung

Die `color-mix()` Funktion ermöglicht das Mischen von zwei {{cssxref("&lt;color&gt;")}} Werten jeglichen Typs, in einem bestimmten Verhältnis, in einem angegebenen Farbraum, unter Verwendung einer kürzeren oder längeren Farbtoninterpolationsmethode. Browser unterstützen eine Fülle von Farbräumen; die `color-mix()` Funktion ermöglicht es, eine breite Palette von Farben zu mischen, nicht nur auf den sRGB Farbraum beschränkt.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Dieses Demo erlaubt es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei optional der Prozentanteil jeder Farbe, der Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode eingestellt werden können. Die Quellfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem resultierenden Farbwähler wählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Einen Farbraum auswählen

Die Auswahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Je nach Anwendungsfall der Interpolation können verschiedene Farbräume besser geeignet sein, selbst wenn die gleichen Farben gemischt werden sollen.

- Wenn das Ergebnis des physischen Mischens zweier farbiger Lichter gewünscht wird, ist der CIE XYZ oder srgb-linear Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben perzeptuell gleichmäßig verteilt sein müssen (wie in einem Verlauf), sind die Oklab (und ältere Lab) Farbräume geeignet, da sie darauf ausgelegt sind, perzeptuell einheitlich zu sein.
- Wenn beim Mischen von Farben ein Ausgrauen vermieden werden soll, d.h. die Chroma über den Übergang maximal gehalten werden soll, funktionieren die Oklch (und älteren LCH) Farbräume gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer bestimmten Software nachahmen müssen, die sRGB verwendet. Der sRGB Farbraum ist weder linear-licht noch perzeptuell einheitlich und liefert schlechtere Ergebnisse wie zu dunkle oder gräuliche Mischungen.

### Farbinterpolationsmethode

Der {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet werden sollte. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen.
Der Farbraum muss einer der in der [formalen Syntax](#formale_syntax) aufgelisteten verfügbaren Farbräume sein. Abhängig vom verwendeten Farbraum können Sie optional festlegen, dass der Farbton entlang eines längeren oder kürzeren Pfades gemischt wird.

Die [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) Kategorie umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die `<polar-color-space>` Kategorie umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch), und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Bei diesen können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} ergänzen. Dieser Wert wird standardmäßig auf `shorter hue` gesetzt, kann jedoch auch auf `longer hue`, `increasing hue`, oder `decreasing hue` gesetzt werden.

### Farbprozentwerte

Jede der beiden Farben kann mit einem `<percentage>` Wert zwischen `0%` und `100%` angegeben werden, der die Mischung der entsprechenden Farbe festlegt. Die Prozentwerte werden normalisiert, wenn der Gesamtwert der angegebenen Prozentsätze nicht `100%` entspricht.

Die beiden Farbprozentsätze (wir nennen sie `p1` und `p2`) werden wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` ausgelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` ausgelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` ausgelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
  - Wenn `p1 + p2 < 100%`, wird dem resultierenden Farbwert ein Alphamultiplikator von `p1 + p2` angewendet. Dies ist vergleichbar mit dem Mischen in [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), mit Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Zwei Farben mischen

Dieses Beispiel demonstriert das Mischen von zwei Farben, rot `#a71e14` mit verschiedenen Prozentsätzen und Weiß ohne angegebenem Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto roter und weniger weiß ist die resultierende Farbe.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von Rot bis zu 100% hinzuzufügen. Das 6. {{htmlelement("li")}} beinhaltet keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, selbst wenn die vom Entwickler festgelegten Werte nicht 100% ergeben. In diesem Beispiel, da nur eine Farbe einem Prozentsatz zugewiesen ist, wird der anderen Farbe implizit ein Prozentsatz zugewiesen, sodass der kombinierte Gesamtwert 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugewiesen ist, haben beide standardmäßig 50%.

### Transparenz hinzufügen

Dieses Beispiel demonstriert die Verwendung der `color-mix()` Funktion, um einer Farbe durch Mischen mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) Transparenz hinzuzufügen.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von `red` hinzuzufügen, das unter Verwendung einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` deklariert wird, die auf dem {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was eine Ausgabe ergibt, die halb so opak wie die `--base` Farbe ist. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um jeder Farbe Transparenz hinzuzufügen, auch wenn die Farbe bereits nicht deckend ist (mit einem Alphakanalwert < 1). Jedoch kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig deckend zu machen. Dafür verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS [Farb-Funktion](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich der Erhöhung des Alpha-Kanals einer Farbe, um sie vollständig deckend zu machen.

### Verwendung der Farbtoninterpolation in `color-mix()`

Dieses Beispiel zeigt die in der `color-mix()` Funktion verfügbaren Farbtoninterpolationsmethoden. Bei der Verwendung von Farbton [Interpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden zu mischenden Farben. Der Wert wird je nach gewähltem Weg um den Farbkreis unterschiedlich sein.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um den Farbkreis, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt die Route mit zunehmenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Reihe von `lch()` Zwischenfarben zu erstellen, die sich je nach gewähltem Weg um den Farbkreis unterscheiden. Die gemischten Farben umfassen `red`, `blue`, und `yellow` mit LCH Farbwerten von ungefähr 41deg, 301deg, und 100deg, jeweils.

Um Redundanz im Code zu reduzieren, verwenden wir [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) für beide Farben und die Interpolationsmethode und setzen unterschiedliche Werte für jedes {{htmlelement("ul")}}.

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

Mit `longer hue` werden die Zuwächse oder Abnahmen zwischen den Farben immer gleich oder größer sein als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtonwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [CSS relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
