---
title: "`color-mix()` CSS-Funktion"
short-title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: 138b6273756ffe17de769b760cd2dd23e1301c7d
---

Die **`color-mix()`** Funktionsnotation nimmt einen oder mehrere {{cssxref("&lt;color&gt;")}}-Werte und gibt das Ergebnis zurück, das durch Mischen dieser in einem bestimmten Farbraum in einer vorgegebenen Menge entsteht.

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

Die `color-mix( <color-interpolation-method>? , [ <color> && <percentage [0,100]>? ]#)` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}} {{optional_inline}}
  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einer der im [formalen Syntax](#formale_syntax) aufgelisteten Farbräume, standardmäßig `oklab`), und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}, die standardmäßig auf `shorter hue` gesetzt ist.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine zu mischende Farbe; kann jeder gültige `<color>`-Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll; kann jeder `<percentage>`-Wert zwischen `0%` und `100%` sein, einschließlich.

### Rückgabewert

Ein `<color>`; das Ergebnis des Mischens der Farben, in dem gegebenen `<color-space>`, in den angegebenen Mengen und der gewünschten Farbtonrichtung.

## Beschreibung

Die `color-mix()` Funktion ermöglicht das Mischen von einem oder mehreren {{cssxref("&lt;color&gt;")}}-Werten beliebigen Typs, in einem bestimmten Verhältnis, in einem gegebenen Farbraum, unter Verwendung entweder einer kürzeren oder längeren Farbton-Interpolationsmethode. Browser unterstützen eine Vielzahl von Farbräumen; die `color-mix()` Funktion ermöglicht das Mischen einer breiten Palette von Farben, nicht beschränkt auf den sRGB-Farbraum.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Dieses Demo erlaubt es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei optional jedes Farb-Prozentsatz, der Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode gesetzt werden können. Die Ausgangsfarben werden außen gezeigt, und die gemischte Farbe wird in der Mitte dargestellt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem erscheinenden Farbwähler auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Wahl eines Farbraums

Die Wahl des richtigen Farbraums ist wichtig, um gewünschte Ergebnisse zu erzielen. Je nach Interpolationsanwendungsfall können unterschiedliche Farbräume, bei denselben zu mischenden Farben, geeigneter sein.

- Wenn das Ergebnis des physischen Mischens von farbigen Lichtern gewünscht wird, ist der CIE XYZ- oder srgb-linearer Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben wahrnehmbar gleichmäßig verteilt sein müssen (wie in einem Farbverlauf), sind die Oklab- (und ältere Lab-) Farbräume geeignet, da sie so konzipiert sind, dass sie wahrnehmbar einheitlich sind.
- Wenn das Vermeiden des Verblassens beim Farbmischen erwünscht ist, d.h. Maximierung der Chroma während des Übergangs, funktionieren die Oklch- (und ältere LCH-) Farbräume gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software imitieren müssen, die sRGB verwendet. Der sRGB-Farbraum ist weder linear-leuchtend noch wahrnehmbar einheitlich und liefert schlechtere Ergebnisse wie übermäßig dunkle oder gräuliche Mischungen.

### Farbinterpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen. Der Farbraum muss einer der in der [formalen Syntax](#formale_syntax) aufgeführten Farbräume sein. Abhängig vom verwendeten Farbraum können Sie optional die Farbtönung entlang eines längeren oder kürzeren Pfades lenken.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch), und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Mit diesen können Sie optional dem Farbraumnamen eine {{CSSXref("&lt;hue-interpolation-method&gt;")}} folgen lassen. Dieser Wert ist standardmäßig auf `shorter hue` gesetzt, kann aber auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Farbprozentwerte

Jede Farbe kann mit einem `<percentage>`-Wert zwischen `0%` und `100%` deklariert werden, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll. Die Prozentsätze werden normalisiert, wenn der Gesamtwert der deklarierten Prozentsätze nicht `100%` entspricht.

Wenn zwei Farben gemischt werden, werden die beiden Farbprozentwerte (wir nennen sie `p1` und `p2`) wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsresultate sind.
  - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen von [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), mit einem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mischen von zwei Farben

Dieses Beispiel zeigt das Mischen von zwei Farben, Rot `#a71e14` mit unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto mehr Rot und weniger Weiß enthält die Ausgabe.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von Rot hinzuzufügen, bis zu 100%. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, selbst wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% ergeben. In diesem Beispiel, da nur eine Farbe einen Prozentsatz zugewiesen bekommen hat, wird der anderen Farbe implizit ein Prozentsatz zugewiesen, sodass die Kombination insgesamt 100% ergibt. Im letzten {{htmlelement("li")}}, wo keine der Farben einen Prozentsatz zugewiesen bekommt, werden beide standardmäßig auf 50% gesetzt.

Beim Mischen von Farben ohne einen Farbraum oder Farbton-Interpolationsmethode wird der `oklab` Farbraum verwendet, wobei `shorter` als die Farbton-Interpolationsmethode verwendet wird. Die drei folgenden Deklarationen sind gleichwertig:

```css
background-color: color-mix(red, blue);
background-color: color-mix(in oklab, red, blue);
background-color: color-mix(in oklab shorter hue, red, blue);
```

### Hinzufügen von Transparenz

Dieses Beispiel zeigt die Verwendung der `color-mix()` Funktion zum Hinzufügen von Transparenz zu einer Farbe, indem irgendeine Farbe mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) gemischt wird.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von `red` hinzuzufügen, die mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` deklariert ist, die auf dem {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was eine Ausgabefarbe erzeugt, die halb so undurchsichtig wie die `--base` Farbe ist. Wir fügen einen gestreiften Hintergrund auf der {{htmlelement("ul")}} ein, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um einer beliebigen Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alphakanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS [Farbfunktions](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert jedes Farbkanals ändern, einschließlich der Erhöhung eines Alphakanals einer Farbe, um die Farbe vollständig undurchsichtig darzustellen.

### Verwendung von Farbinterpolation in color-mix()

Dieses Beispiel zeigt die für die `color-mix()` Funktion verfügbaren Farbinterpolationsmethoden. Bei Verwendung von [Farbinterpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbwerten der zu mischen Farben. Der Wert unterscheidet sich je nachdem, welche Route um den Farbkreis genommen wird.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um den Farbkreis, während die `longer hue`-Interpolationsmethode den längeren Weg nimmt. Bei `increasing hue` beginnt die Route mit zunehmenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Reihe von `lch()` Zwischenfarben zu erstellen, die sich basierend auf der genommenen Route um den Farbkreis unterscheiden. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH-Farbtonwerten von ungefähr 41deg, 301deg und 100deg.

Um Redundanz im Code zu verringern, verwendeten wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) für beide Farben und die Interpolationsmethode, wobei auf jedem {{htmlelement("ul")}} verschiedene Werte gesetzt werden.

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

Mit `longer hue` werden die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer sein als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [CSS relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
