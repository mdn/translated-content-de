---
title: CSS-Funktion `color-mix()`
short-title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Die funktionale Notation **`color-mix()`** nimmt einen oder mehrere {{cssxref("&lt;color&gt;")}}-Werte entgegen und gibt das Ergebnis ihrer Mischung in einem angegebenen Farbraum und in einem angegebenen Verhältnis zurück.

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

`color-mix( <color-interpolation-method>? , [ <color> && <percentage [0,100]>? ]#)` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}} {{optional_inline}}
  - : Gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Der Wert besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einem der in der [formalen Syntax](#formale_syntax) aufgeführten Farbräume; standardmäßig `oklab`) und optional einem {{CSSXref("&lt;hue-interpolation-method&gt;")}}, dessen Standardwert `shorter hue` ist.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine zu mischende Farbe; jeder gültige `<color>`-Wert ist möglich.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der den Anteil der entsprechenden Farbe an der Mischung angibt; jeder `<percentage>`-Wert zwischen `0%` und `100%` einschließlich ist möglich.

### Rückgabewert

Ein `<color>`-Wert: das Ergebnis der Farbmischung im angegebenen `<color-space>`, mit den angegebenen Anteilen und in der angegebenen Farbtonrichtung.

## Beschreibung

Mit der Funktion `color-mix()` lassen sich ein oder mehrere {{cssxref("&lt;color&gt;")}}-Werte beliebigen Typs in einem bestimmten Verhältnis und Farbraum mischen. Dabei kann der Farbton über den kürzeren oder längeren Weg interpoliert werden. Browser unterstützen zahlreiche Farbräume. Mit `color-mix()` können daher viele Farben gemischt werden, ohne auf den sRGB-Farbraum beschränkt zu sein.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

In dieser Demo können Sie zwei Farben, `color-one` und `color-two`, auswählen und mischen. Optional können Sie den Anteil jeder Farbe, den Farbraum der Mischung und die Interpolationsmethode festlegen. Die Ausgangsfarben werden außen angezeigt, die gemischte Farbe in der Mitte. Um eine Farbe zu ändern, klicken Sie darauf und wählen Sie im daraufhin angezeigten Farbwähler eine neue Farbe aus. Die Anteile der Farben ändern Sie mit den Schiebereglern, den Farbraum über das Dropdown-Menü.

### Einen Farbraum auswählen

Die Wahl des richtigen Farbraums ist wichtig, um das gewünschte Ergebnis zu erzielen. Je nach Anwendungsfall der Interpolation können sich für dieselben zu mischenden Farben unterschiedliche Farbräume eignen.

- Wenn das Ergebnis dem physikalischen Mischen farbiger Lichtquellen entsprechen soll, eignen sich die Farbräume CIE XYZ oder srgb-linear, da sie linear zur Lichtintensität sind.
- Wenn Farben visuell gleichmäßig verteilt sein sollen, etwa in einem Farbverlauf, eignen sich Oklab und der ältere Lab-Farbraum, da sie auf eine wahrnehmungsbezogene Gleichmäßigkeit ausgelegt sind.
- Wenn beim Mischen ein Vergrauen vermieden und die Farbsättigung über den gesamten Übergang möglichst hoch gehalten werden soll, eignen sich Oklch und der ältere LCH-Farbraum.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer bestimmten Software nachbilden müssen, die sRGB verwendet. Der sRGB-Farbraum ist weder linear zur Lichtintensität noch wahrnehmungsbezogen gleichmäßig und führt zu weniger guten Ergebnissen, beispielsweise zu übermäßig dunklen oder gräulichen Mischungen.

### Farbinterpolationsmethode

{{CSSXref("&lt;color-interpolation-method&gt;")}} legt fest, welche Interpolationsmethode zum Mischen der Farben verwendet wird. Der Wert besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen.
Der Farbraum muss einer der in der [formalen Syntax](#formale_syntax) aufgeführten Farbräume sein. Je nach verwendetem Farbraum können Sie außerdem festlegen, ob der Farbton über den längeren oder kürzeren Weg interpoliert wird.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}} und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Bei diesen Farbräumen können Sie auf den Namen des Farbraums optional einen {{CSSXref("&lt;hue-interpolation-method&gt;")}}-Wert folgen lassen. Dessen Standardwert ist `shorter hue`; er kann auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Standardfarbraum und Standard-Interpolationsmethode

Wenn beim Mischen von Farben kein Farbraum angegeben wird, kommt der Farbraum `oklab` zum Einsatz.

Die folgenden beiden Deklarationen sind gleichwertig:

```css
background-color: color-mix(red, blue);
background-color: color-mix(in oklab, red, blue);
```

Bei Verwendung eines polaren Farbraums wie `oklch` ist `shorter hue` die Standardmethode für die Farbtoninterpolation. Die folgenden beiden Deklarationen sind gleichwertig:

```css
background-color: color-mix(in oklch, red, blue);
background-color: color-mix(in oklch shorter hue, red, blue);
```

### Farbanteile

Für jede Farbe kann ein `<percentage>`-Wert zwischen `0%` und `100%` angegeben werden, der ihren Anteil an der Mischung festlegt. Wenn die Summe der angegebenen Prozentwerte nicht `100%` beträgt, werden die Anteile normalisiert.

Beim Mischen von zwei Farben werden die beiden Farbanteile (im Folgenden `p1` und `p2`) wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` fehlen, gilt `p1 = p2 = 50%`.
- Wenn `p1` fehlt, gilt `p1 = 100% - p2`.
- Wenn `p2` fehlt, gilt `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%` gilt, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%` gilt, werden `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)` berechnet. Dabei sind `p1'` und `p2'` die normalisierten Werte.
  - Wenn `p1 + p2 < 100%` gilt, wird auf die resultierende Farbe ein Alpha-Multiplikator von `p1 + p2` angewendet. Dies entspricht in etwa dem Beimischen von [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) mit dem Anteil `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Zwei Farben mischen

Dieses Beispiel zeigt, wie zwei Farben gemischt werden: Rot `#a71e14` mit unterschiedlichen Anteilen und Weiß ohne angegebenen Anteil. Je höher der Anteil von `#a71e14` ist, desto röter und weniger weiß ist die resultierende Farbe.

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

Mit der Funktion `color-mix()` werden steigende Rotanteile bis zu 100 % hinzugefügt. Beim sechsten {{htmlelement("li")}} ist für keine der beiden Farben ein Anteil angegeben.

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

Die Anteile der beiden Farben in einer `color-mix()`-Funktion ergeben zusammen 100 %, auch wenn die vom Entwickler angegebenen Werte nicht 100 % ergeben. Da in diesem Beispiel nur für eine Farbe ein Anteil angegeben ist, erhält die andere Farbe automatisch einen Anteil, sodass die Summe 100 % beträgt. Beim letzten {{htmlelement("li")}}, für das bei keiner Farbe ein Anteil angegeben ist, beträgt der Standardwert für beide 50 %.

### Eine Liste von Farben mischen

Dieses Beispiel zeigt, wie eine Liste von Farbar­gumenten an `color-mix()` übergeben wird. Die Funktion akzeptiert beliebig viele Farben, nicht nur zwei. Für jede Farbe kann optional ein Anteil angegeben werden.

#### HTML

```html
<ul>
  <li>1 color</li>
  <li>3 colors, with percentages</li>
  <li>4 colors, no percentages</li>
</ul>
```

#### CSS

Das erste {{htmlelement("li")}} mischt nur eine Farbe; das Ergebnis ist diese Farbe. Das zweite mischt drei Farben, deren Anteile zusammen 100 % ergeben. Das dritte mischt vier Farben ohne angegebene Anteile, sodass jede Farbe den gleichen Anteil erhält.

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

Dieses Beispiel zeigt, wie mit der Funktion `color-mix()` Transparenz zu einer Farbe hinzugefügt wird, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) gemischt wird.

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

Mit der Funktion `color-mix()` werden steigende Anteile von `red` hinzugefügt. Die Farbe wird über eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` deklariert, die auf {{cssxref(":root")}} definiert ist. Beim sechsten {{htmlelement("li")}} ist kein Anteil angegeben; die resultierende Farbe ist daher halb so deckend wie die Farbe `--base`. Damit die Transparenz sichtbar wird, erhält das {{htmlelement("ul")}} einen gestreiften Hintergrund.

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

Auf diese Weise lässt sich mit `color-mix()` jeder Farbe Transparenz hinzufügen, auch wenn sie bereits nicht vollständig deckend ist (also einen Alphakanalwert < 1 hat). Mit `color-mix()` lässt sich eine halbtransparente Farbe jedoch nicht vollständig deckend machen. Verwenden Sie dafür eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS-[Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert jedes Farbkanals ändern. Dazu gehört auch das Erhöhen des Alphakanalwerts, um eine Farbe vollständig deckend darzustellen.

### Farbtoninterpolation in color-mix() verwenden

Dieses Beispiel zeigt die für `color-mix()` verfügbaren Methoden zur Farbtoninterpolation. Bei der [Interpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) des Farbtons liegt der resultierende Farbton zwischen den Farbtonwerten der gemischten Farben. Welcher Wert entsteht, hängt vom gewählten Weg auf dem Farbkreis ab.

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

Die Interpolationsmethode `shorter hue` nimmt den kürzeren Weg auf dem Farbkreis, während `longer hue` den längeren Weg nimmt. Bei `increasing hue` verläuft der Weg in Richtung steigender Werte, bei `decreasing hue` in Richtung fallender Werte. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Reihe von Zwischenfarben mit `lch()` zu erzeugen, die sich je nach gewähltem Weg auf dem Farbkreis unterscheiden. Zu den gemischten Farben gehören `red`, `blue` und `yellow` mit LCH-Farbtonwerten von ungefähr 41deg, 301deg beziehungsweise 100deg.

Um Wiederholungen im Code zu vermeiden, verwenden wir [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) für beide Farben und die Interpolationsmethode und legen für jedes {{htmlelement("ul")}} unterschiedliche Werte fest.

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

Bei `longer hue` sind die Schritte zwischen den Farben immer gleich groß oder größer als bei `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbtonänderung wichtiger ist als der Abstand zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [Relative Farben in CSS](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
