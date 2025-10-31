---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`color-mix()`** Funktionalnotation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis ihrer Mischung in einem bestimmten Farbraum in einer angegebenen Menge zurück.

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

Die Funktion `color-mix( <color-interpolation-method>, <color> [<percentage>], <color> [<percentage>] )` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welches Interpolationsverfahren zur Mischung der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einer der Farbräume, die in der [formalen Syntax](#formale_syntax) aufgelistet sind), und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine zu mischende Farbe; kann jeder gültige `<color>`-Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die Menge der entsprechenden zu mischenden Farbe angibt; kann ein beliebiger `<percentage>`-Wert zwischen `0%` und `100%` sein.

### Rückgabewert

Ein `<color>`; das Ergebnis der Mischung der Farben im angegebenen `<color-space>`, in den spezifizierten Mengen und der Hue-Richtung.

## Beschreibung

Die Funktion `color-mix()` ermöglicht es, zwei {{cssxref("&lt;color&gt;")}} Werte beliebigen Typs in einem bestimmten Verhältnis in einem bestimmten Farbraum mit einer kürzeren oder längeren Huebzwischungsmethode zu mischen. Browser unterstützen eine Vielzahl von Farbräumen; die Funktion `color-mix()` ermöglicht eine breite Palette von Farben zu mischen, die nicht auf den sRGB-Farbraum beschränkt sind.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Dieses Demo ermöglicht es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei Sie optional den Prozentsatz jeder Farbe, den Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode einstellen können. Die Ausgangsfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und mit dem resultierenden Farbauswahlwerkzeug eine neue Farbe wählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Auswahl eines Farbraums

Die Wahl des richtigen Farbraums ist wichtig, um gewünschte Ergebnisse zu erzielen. Bei den gleichen zu mischenden Farben können unterschiedliche Farbräume je nach Anwendungsfall der Interpolation mehr geeignet sein.

- Wenn das Ergebnis einer physikalischen Mischung von zwei farbigen Lichtern gewünscht ist, sind die Farbräume CIE XYZ oder srgb-linear geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben wahrnehmungsgleichmäßig verteilt sein müssen (wie in einem Verlauf), sind die Farbräume Oklab (und ältere Lab) geeignet, da sie so konzipiert sind, dass sie wahrnehmungsuniform sind.
- Wenn das Ausbleichen (Graying-out) bei der Farbmischung vermieden werden soll, d.h. die Chroma im gesamten Übergang maximiert werden soll, funktionieren die Farbräume Oklch (und ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software nachbilden müssen, die sRGB verwendet. Der sRGB-Farbraum ist weder Licht-linear noch wahrnehmungsuniform und führt zu schwächeren Ergebnissen wie übermäßig dunklen oder gräulichen Mischungen.

### Farbliche Interpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen.
Der Farbraum muss einer der verfügbaren Farbräume sein, die in der [formalen Syntax](#formale_syntax) aufgelistet sind. Je nach verwendetem Farbraum kann optional die Hue entlang eines kürzeren oder längeren Pfades gemischt werden.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch). Damit können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} ergänzen. Dieser Wert standardmäßig `shorter hue`, kann aber auch auf `longer hue`, `increasing hue`, oder `decreasing hue` gesetzt werden.

### Farbprozentsätze

Jede der beiden Farben kann mit einem `<percentage>`-Wert zwischen `0%` und `100%` deklariert werden, der die Menge der entsprechenden zu mischenden Farbe angibt. Die Prozentsätze werden normalisiert, wenn der Gesamtwert der deklarierten Prozentsätze nicht `100%` ergibt.

Die beiden Farbprozentsätze (wir nennen sie `p1` und `p2`) werden wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
  - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen von [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit der Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mischen von zwei Farben

Dieses Beispiel zeigt das Mischen von zwei Farben, Rot `#a71e14` in unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14`, desto roter und weniger weiß ist die Ausgabefarbe.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, auch wenn die vom Entwickler gesetzten Werte nicht 100% ausmachen. In diesem Beispiel, da nur einer Farbe ein Prozentsatz zugewiesen ist, erhält die andere Farbe implizit einen Prozentwert, sodass die Gesamtsumme 100% beträgt. Im letzten {{htmlelement("li")}}, wo keiner der Farben ein Prozentsatz zugewiesen ist, beträgt er für beide standardmäßig 50%.

### Hinzufügen von Transparenz

Dieses Beispiel zeigt, wie die Funktion `color-mix()` verwendet werden kann, um Transparenz zu einer Farbe hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die Funktion `color-mix()` wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, die mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` deklariert sind, die auf dem {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} gibt keinen Prozentsatz an, was eine Ausgabefarbe erzeugt, die halb so undurchsichtig ist wie die `--base`-Farbe. Wir haben einen gestreiften Hintergrund auf die {{htmlelement("ul")}} angewendet, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die Funktion `color-mix()` verwendet werden, um einer beliebigen Farbe Transparenz hinzuzufügen, auch wenn die Farbe bereits nicht deckend ist (mit einem Alphakanalwert < 1). `color-mix()` kann jedoch nicht verwendet werden, um eine halbtransparente Farbe vollständig deckend zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich der Erhöhung des Alphakanals einer Farbe, um die Farbe vollständig undurchsichtig zu machen.

### Verwendung von Hue-Interpolation in color-mix()

Dieses Beispiel zeigt die verfügbaren Hue-Interpolationsmethoden für die Funktion `color-mix()`. Bei Verwendung der Hue-Interpolation liegt der resultierende Farbton zwischen den Farbtönen der beiden gemischten Farben. Der Wert kann je nach eingeschlagenem Weg um das Farb

rad unterschiedlich ausfallen.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um das Farbrad, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt die Route mit steigenden Werten. Bei `decreasing hue` sinkt der Wert. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Reihe von `lch()` Zwischenfarben zu erstellen, die sich abhängig vom gewählten Weg um das Farbrad unterscheiden. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH-Hue-Werten von ungefähr 41deg, 301deg und 100deg.

Um redundanten Code zu reduzieren, wurden [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) für beide Farben und die Interpolationsmethode verwendet, wobei unterschiedliche Werte für jedes {{htmlelement("ul")}} gesetzt wurden.

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

Bei `longer hue` sind die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtons wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
