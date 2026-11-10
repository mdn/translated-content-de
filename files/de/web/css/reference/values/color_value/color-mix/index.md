---
title: CSS-Funktion `color-mix()`
short-title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die funktionale Notation **`color-mix()`** nimmt einen oder mehrere {{cssxref("&lt;color&gt;")}}-Werte entgegen und gibt das Ergebnis ihrer Mischung in einem angegebenen Farbraum und in angegebenen Anteilen zurück.

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
  - : Gibt die Interpolationsmethode für die Farbmischung an. Der Wert besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einem der in der [formalen Syntax](#formale_syntax) aufgeführten Farbräume; standardmäßig `oklab`) und optional einem {{CSSXref("&lt;hue-interpolation-method&gt;")}}, dessen Standardwert `shorter hue` ist.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine zu mischende Farbe; kann ein beliebiger gültiger `<color>`-Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der den Anteil der entsprechenden Farbe an der Mischung angibt; kann ein beliebiger `<percentage>`-Wert von `0%` bis einschließlich `100%` sein.

### Rückgabewert

Ein `<color>`-Wert: das Ergebnis der Farbmischung im angegebenen `<color-space>`, mit den angegebenen Anteilen und der angegebenen Farbtonrichtung.

## Beschreibung

Mit der Funktion `color-mix()` können Sie einen oder mehrere {{cssxref("&lt;color&gt;")}}-Werte beliebigen Typs in einem bestimmten Verhältnis und Farbraum mischen. Dabei kann für die Farbtoninterpolation ein kürzerer oder längerer Weg verwendet werden. Browser unterstützen zahlreiche Farbräume. Mit `color-mix()` lässt sich daher eine große Bandbreite von Farben mischen, ohne auf den sRGB-Farbraum beschränkt zu sein.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

In dieser Demo können Sie zwei Farben, `color-one` und `color-two`, auswählen und mischen. Optional können Sie den prozentualen Anteil jeder Farbe, den Farbraum für die Mischung und die Interpolationsmethode festlegen. Die Ausgangsfarben werden außen angezeigt, die gemischte Farbe in der Mitte. Um eine Farbe zu ändern, klicken Sie darauf und wählen Sie im daraufhin angezeigten Farbwähler eine neue Farbe aus. Mit den Schiebereglern ändern Sie die Prozentwerte der Farben. Den Farbraum ändern Sie über das Dropdown-Menü.

### Einen Farbraum auswählen

Die Wahl des richtigen Farbraums ist wichtig, um das gewünschte Ergebnis zu erzielen. Je nach Anwendungsfall der Interpolation können für dieselben Ausgangsfarben unterschiedliche Farbräume besser geeignet sein.

- Wenn das Ergebnis dem physikalischen Mischen farbigen Lichts entsprechen soll, eignen sich die Farbräume CIE XYZ oder srgb-linear, da sie linear zur Lichtintensität sind.
- Wenn Farben wahrnehmungsmäßig gleichmäßig verteilt sein sollen, etwa in einem Farbverlauf, eignen sich die Farbräume Oklab und das ältere Lab, da sie auf eine wahrnehmungsmäßig gleichmäßige Abstufung ausgelegt sind.
- Wenn beim Mischen ein Vergrauen vermieden und die Chroma während des gesamten Übergangs möglichst hoch gehalten werden soll, eignen sich die Farbräume Oklch und das ältere LCH.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer bestimmten Software nachbilden müssen, die sRGB verwendet. Der sRGB-Farbraum ist weder lichtlinear noch wahrnehmungsmäßig gleichmäßig und liefert schlechtere Ergebnisse, etwa zu dunkle oder gräuliche Mischungen.

### Farbinterpolationsmethode

{{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet wird. Der Wert besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen.
Der Farbraum muss einer der in der [formalen Syntax](#formale_syntax) aufgeführten verfügbaren Farbräume sein. Je nach verwendetem Farbraum können Sie optional festlegen, ob der Farbton über einen längeren oder kürzeren Weg interpoliert wird.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}} und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch) und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Bei diesen Farbräumen können Sie nach dem Namen des Farbraums optional ein {{CSSXref("&lt;hue-interpolation-method&gt;")}} angeben. Der Standardwert ist `shorter hue`; möglich sind auch `longer hue`, `increasing hue` und `decreasing hue`.

### Standardfarbraum und Standardinterpolationsmethode

Wenn Sie Farben mischen, ohne einen Farbraum anzugeben, wird der Farbraum `oklab` verwendet.

Die folgenden beiden Deklarationen sind gleichwertig:

```css
background-color: color-mix(red, blue);
background-color: color-mix(in oklab, red, blue);
```

Bei einem polaren Farbraum wie `oklch` ist die Standardmethode für die Farbtoninterpolation `shorter hue`. Die folgenden beiden Deklarationen sind gleichwertig:

```css
background-color: color-mix(in oklch, red, blue);
background-color: color-mix(in oklch shorter hue, red, blue);
```

### Prozentuale Farbanteile

Für jede Farbe kann ein `<percentage>`-Wert von `0%` bis `100%` angegeben werden, der ihren Anteil an der Mischung bestimmt. Wenn die Summe der angegebenen Prozentwerte nicht `100%` beträgt, werden die Anteile normalisiert.

Beim Mischen zweier Farben werden deren Prozentwerte – hier `p1` und `p2` genannt – wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` fehlen, gilt `p1 = p2 = 50%`.
- Wenn `p1` fehlt, gilt `p1 = 100% - p2`.
- Wenn `p2` fehlt, gilt `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%` gilt, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%` gilt, ergeben sich `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die normalisierten Werte sind.
  - Wenn `p1 + p2 < 100%` gilt, wird auf die resultierende Farbe ein Alpha-Multiplikator von `p1 + p2` angewendet. Das ähnelt einer Beimischung von [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) mit dem Anteil `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Zwei Farben mischen

Dieses Beispiel zeigt, wie die rote Farbe `#a71e14` mit unterschiedlichen Prozentwerten und Weiß ohne angegebenen Prozentwert gemischt wird. Je höher der Anteil von `#a71e14`, desto röter und weniger weiß ist die resultierende Farbe.

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

Die Funktion `color-mix()` wird verwendet, um einen zunehmenden Anteil von Rot bis hin zu 100 % beizumischen. Beim sechsten {{htmlelement("li")}} ist für keine der beiden Farben ein Prozentwert angegeben.

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

Die Anteile der beiden Farben in einer `color-mix()`-Funktion ergeben zusammen 100 %, auch wenn die festgelegten Werte in der Summe nicht 100 % betragen. Da in diesem Beispiel nur für eine Farbe ein Prozentwert angegeben ist, erhält die andere Farbe implizit einen Anteil, sodass die Summe 100 % beträgt. Beim letzten {{htmlelement("li")}}, bei dem für keine der beiden Farben ein Prozentwert angegeben ist, beträgt der Standardwert für beide 50 %.

### Eine Liste von Farben mischen

Dieses Beispiel zeigt, wie eine Liste von Farbargumenten an `color-mix()` übergeben wird. Die Funktion akzeptiert eine beliebige Anzahl von Farben, nicht nur zwei. Für jede Farbe kann optional ein Prozentwert angegeben werden.

#### HTML

```html
<ul>
  <li>1 color</li>
  <li>3 colors, with percentages</li>
  <li>4 colors, no percentages</li>
</ul>
```

#### CSS

Das erste {{htmlelement("li")}} mischt eine einzelne Farbe; das Ergebnis ist diese Farbe selbst. Das zweite mischt drei Farben, deren Anteile zusammen 100 % ergeben. Das dritte mischt vier Farben ohne Prozentangaben, sodass jede den gleichen Anteil erhält.

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

Dieses Beispiel zeigt, wie Sie mit der Funktion `color-mix()` einer Farbe Transparenz hinzufügen, indem Sie eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) mischen.

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

Mit der Funktion `color-mix()` werden zunehmende Anteile von `red` hinzugefügt. Die Farbe wird über die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) `--base` definiert, die auf {{cssxref(":root")}} festgelegt ist. Beim sechsten {{htmlelement("li")}} ist kein Prozentwert angegeben. Dadurch entsteht eine Farbe, die nur halb so deckend ist wie die Farbe `--base`. Der gestreifte Hintergrund des {{htmlelement("ul")}} macht die Transparenz sichtbar.

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

Auf diese Weise können Sie mit `color-mix()` jeder Farbe Transparenz hinzufügen, selbst wenn sie bereits teilweise transparent ist (also einen Alphakanalwert < 1 hat). Mit `color-mix()` lässt sich eine halbtransparente Farbe jedoch nicht vollständig deckend machen. Verwenden Sie dazu eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS-[Farbfunktion](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert jedes Farbkanals ändern – einschließlich des Alphakanals, um eine Farbe vollständig deckend darzustellen.

### Farbtoninterpolation in color-mix() verwenden

Dieses Beispiel zeigt die Farbtoninterpolationsmethoden der Funktion `color-mix()`. Bei der [Interpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) des Farbtons liegt der resultierende Farbton zwischen den Farbtonwerten der gemischten Farben. Welcher Wert entsteht, hängt davon ab, welcher Weg auf dem Farbkreis genommen wird.

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

Die Interpolationsmethode `shorter hue` nimmt den kürzeren Weg auf dem Farbkreis, während `longer hue` den längeren Weg nimmt. Bei `increasing hue` verläuft der Weg in Richtung zunehmender Werte, bei `decreasing hue` in Richtung abnehmender Werte. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Reihe von Zwischenfarben mit `lch()` zu erzeugen. Diese unterscheiden sich je nachdem, welcher Weg auf dem Farbkreis genommen wird. Zu den gemischten Farben gehören `red`, `blue` und `yellow` mit LCH-Farbtonwerten von ungefähr 41deg, 301deg beziehungsweise 100deg.

Um redundanten Code zu vermeiden, verwenden wir [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) für beide Farben und die Interpolationsmethode. Für jedes {{htmlelement("ul")}} werden unterschiedliche Werte festgelegt.

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

{{EmbedLiveSample("using_hue_interpolation_in_color-mix", "100%", 440)}}

Bei `longer hue` sind die Schritte zwischen den Farben stets gleich groß oder größer als bei `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbtonänderung wichtiger ist als der Abstand zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [Relative CSS-Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
