---
title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis ihrer Mischung in einem bestimmten Farbraum mit einer angegebenen Menge zurück.

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
  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Es besteht aus dem `in`-Schlüsselwort, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einer der Farbräume, die im [formalen Syntax](#formale_syntax) aufgelistet sind), und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine zu mischende Farbe; kann jeder gültige `<color>` Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll; kann jeder `<percentage>` Wert zwischen `0%` und `100%` sein.

### Rückgabewert

Ein `<color>`; das Ergebnis der Mischung der Farben im angegebenen `<color-space>` in den spezifizierten Mengen und der Hue-Richtung.

## Beschreibung

Die `color-mix()`-Funktion ermöglicht das Mischen von zwei {{cssxref("&lt;color&gt;")}} Werten jeglichen Typs, in einem bestimmten Verhältnis, in einem angegebenen Farbraum unter Verwendung einer kürzeren oder längeren Hue-Interpolationsmethode. Browser unterstützen eine Vielzahl von Farbräumen; die `color-mix()`-Funktion ermöglicht eine breite Palette von Farben zu mischen, die nicht auf den sRGB-Farbraum beschränkt sind.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Dieses Demo ermöglicht Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei Sie optional den Prozentsatz jeder Farbe, den Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode einstellen können. Die Quellfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Auswahl eines Farbraums

Die Wahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Je nach Interpolationsanwendungsfall können unterschiedliche Farbräume passender sein, selbst bei denselben zu mischenden Farben.

- Wenn das Ergebnis des physikalischen Mischens von zwei farbigen Lichtern gewünscht ist, ist der CIE XYZ oder srgb-linear Farbraum geeignet, weil sie linear in der Lichtintensität sind.
- Wenn Farben gleichmäßig wahrnehmbar verteilt sein müssen (z.B. in einem Verlauf), sind die Oklab (und älteren Lab) Farbräume geeignet, da sie so gestaltet sind, dass sie wahrnehmbar gleichmäßig sind.
- Wenn das Vermeiden eines Grauwerdens beim Mischen von Farben gewünscht ist, d.h. das Maximalisieren der Chroma während des Übergangs, sind die Oklch (und älteren LCH) Farbräume geeignet.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer bestimmten Software, die sRGB verwendet, nachahmen müssen. Der sRGB Farbraum ist weder linear-lichtmäßig noch wahrnehmungsgleichmäßig und erzeugt schlechtere Ergebnisse wie übermäßig dunkle oder gräuliche Mischungen.

### Farbinterpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen. Der Farbraum muss einer der verfügbaren Farbräume sein, die im [formalen Syntax](#formale_syntax) aufgelistet sind. Abhängig vom verwendeten Farbraum können Sie die Hue optional entlang eines längeren oder kürzeren Pfades mischen.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch), und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Bei diesen können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} ergänzen. Dieser Wert ist standardmäßig `shorter hue`, kann jedoch auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Farbprozentsätze

Jede der beiden Farben kann mit einem `<percentage>` Wert zwischen `0%` und `100%` deklariert werden, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll. Die Prozentsätze werden normalisiert, falls der Gesamtwert der angegebenen Prozentsätze nicht `100%` entspricht.

Die beiden Farbprozentsätze (wir nennen sie `p1` und `p2`) werden wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
 - Wenn `p1 + p2 < 100%`, dann wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich dem Mischen von [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), mit Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Zwei Farben mischen

Dieses Beispiel zeigt, wie man zwei Farben, Rot `#a71e14` mit unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz mischt. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto roter und weniger weiß ist die Ausgangsfarbe.

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

Die `color-mix()`-Funktion wird verwendet, um steigende Prozentsätze von Rot bis zu 100% hinzuzufügen. Der 6. {{htmlelement("li")}} schließt keinen Prozentsatz für beide Farben ein.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% ergeben. In diesem Beispiel, da nur einer Farbe ein Prozentsatz zugewiesen wird, erhält die andere Farbe implizit einen Prozentsatz, sodass die kombinierte Summe gleich 100% ist. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugewiesen wird, beträgt die Standardeinstellung für beide 50%.

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die `color-mix()`-Funktion verwendet wird, um einer Farbe durch Mischen mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) Transparenz hinzuzufügen.

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

Die `color-mix()`-Funktion wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, die mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` deklariert wird, die auf {{cssxref(":root")}} definiert ist. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was zu einer Ausgangsfarbe führt, die halb so undurchsichtig wie die `--base` Farbe ist. Wir fügen einen gestreiften Hintergrund auf das {{htmlelement("ul")}} ein, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()`-Funktion verwendet werden, um einer beliebigen Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht durchscheinend ist (mit einem Alphakanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Dazu verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich der Erhöhung des Alphakanals einer Farbe, um sie vollständig undurchsichtig zu machen.

### Verwendung von Hue-Interpolation in color-mix()

Dieses Beispiel zeigt die Hue-Interpolationsmethoden, die für die `color-mix()`-Funktion verfügbar sind. Bei Verwendung von Hue [Interpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) liegt der resultierende Hue zwischen den Hue-Werten der beiden gemischten Farben. Der Wert wird unterschiedlich sein, abhängig von der gewählten Route um das Farbrad.

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

Die `shorter hue` Interpolationsmethode nimmt die kürzere Route um das Farbrad, während die `longer hue` Interpolationsmethode die längere Route wählt. Bei `increasing hue` beginnt die Route mit steigenden Werten. Bei `decreasing hue` verringert sich der Wert. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Reihe von `lch()` Zwischenfarben zu erzeugen, die sich unterscheiden, basierend auf der genommenen Route um das Farbrad. Die gemischten Farben umfassen `red`, `blue`, und `yellow` mit LCH Hue-Werten von ungefähr 41deg, 301deg, und 100deg.

Um Redundanzen im Code zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) für beide Farben und für die Interpolationsmethode verwendet und sie auf jedem {{htmlelement("ul")}} unterschiedliche Werte gesetzt.

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

Mit `longer hue` sind die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Hue-Wertänderung wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
