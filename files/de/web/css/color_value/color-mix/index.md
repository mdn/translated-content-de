---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 4039007981b4b213d0d3aa953ca030304607dda4
---

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum nach einer bestimmten Menge zurück.

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

Das `color-mix( <color-interpolation-method>, <color> [<percentage>], <color> [<percentage>] )` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode zur Mischung der Farben verwendet werden soll. Es besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einer der Farbräume, die in der [formalen Syntax](#formale_syntax) aufgeführt sind), und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine Farbe, die gemischt werden soll; kann jeder gültige `<color>` Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll; kann ein `<percentage>` Wert zwischen `0%` und `100%` sein, einschließlich.

### Rückgabewert

Ein `<color>`; das Ergebnis der Mischung der Farben im gegebenen `<color-space>` in den angegebenen Mengen und der Farbtonrichtung.

## Beschreibung

Die Funktion `color-mix()` ermöglicht die Mischung von zwei {{cssxref("&lt;color&gt;")}} Werten jeglichen Typs, in einem bestimmten Verhältnis, in einem gegebenen Farbraum, unter Verwendung einer kürzeren oder längeren Farbtoninterpolationsmethode. Browser unterstützen eine Vielzahl von Farbräumen; die Funktion `color-mix()` ermöglicht eine breite Palette von Farben zu mischen, nicht nur beschränkt auf den sRGB Farbraum.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Diese Demo ermöglicht es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und sie zu mischen, wobei optional der Prozentsatz jeder Farbe, der Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode eingestellt werden können. Die Quellfarben werden außen gezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Auswahl eines Farbraums

Die Auswahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Gegeben dieselben Farben zu mischen, können unterschiedliche Farbräume je nach Interpolationsanwendungsfall geeigneter sein.

- Wenn das physische Mischen von zwei farbigen Lichtern gewünscht ist, ist der CIE XYZ oder srgb-linear Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben wahrnehmungsgemäß gleichmäßig verteilt werden müssen (wie in einem Gradienten), sind die Farbräume Oklab (und ältere Lab) geeignet, da sie so konzipiert sind, wahrnehmungsgemäß gleichmäßig zu sein.
- Wenn das Ergrauen bei der Farbmischung vermieden werden soll, d.h. die Chroma während des Übergangs maximiert wird, funktionieren die Farbräume Oklch (und ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Gerätes oder Software nachahmen müssen, das sRGB verwendet. Der sRGB Farbraum ist weder linear in der Lichtintensität noch wahrnehmungsgemäß gleichmäßig und erzeugt schlechtere Ergebnisse wie z. B. zu dunkle oder graue Mischungen.

### Farbinterpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode zur Mischung der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen. Der Farbraum muss einer der verfügbaren Farbräume sein, die in der [formalen Syntax](#formale_syntax) aufgelistet sind. Je nach verwendetem Farbraum können Sie optional angeben, dass der Farbton entlang eines längeren oder kürzeren Pfades gemischt werden soll.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch). Mit diesen können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} folgen. Dieser Wert standardmäßig auf `shorter hue`, kann jedoch auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Farbprozentsätze

Jede der beiden Farben kann mit einem `<percentage>` angegeben werden, das zwischen `0%` und `100%` liegt und die Menge der entsprechenden Farbe angibt, die gemischt werden soll. Die Prozentsätze werden normalisiert, wenn der Gesamtwert der angegebenen Prozentsätze nicht `100%` beträgt.

Die zwei Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
  - Wenn `p1 + p2 < 100%`, wird ein Alphamultiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen in [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit dem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mischen zweier Farben

Dieses Beispiel zeigt das Mischen von zwei Farben, Rot `#a71e14` in verschiedenen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto röter und weniger weiß ist die Ausgabefarbe.

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

Die Funktion `color-mix()` wird verwendet, um steigende Prozentsätze von Rot hinzuzufügen, bis zu 100%. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für beide Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion ist 100%, auch wenn die vom Entwickler gesetzten Werte nicht insgesamt 100% ausmachen. In diesem Beispiel, da nur eine Farbe einen Prozentsatz zugewiesen hat, wird der anderen Farbe implizit ein Prozentsatz zugewiesen, sodass die kombinierte Gesamtsumme 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner der Farben ein Prozentsatz zugewiesen ist, wird für beide standardmäßig 50% angenommen.

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die Funktion `color-mix()` verwendet werden kann, um einer Farbe Transparenz hinzuzufügen, indem jede Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die Funktion `color-mix()` wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, welches mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` deklariert wurde, die im {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was eine Ausgabefarbe erzeugt, die halb so opak ist wie die `--base` Farbe. Wir fügen einen gestreiften Hintergrund auf das {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die Funktion `color-mix()` verwendet werden, um Transparenz zu jeder Farbe hinzuzufügen, auch wenn die Farbe bereits nicht opak ist (mit einem Alpha-Kanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbdurchsichtige Farbe vollständig opak zu machen. Dazu verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farbfunktions](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines jeden Farbkanals verändern, einschließlich der Erhöhung eines Alpha-Kanals, um die Farbe vollständig opak zu machen.

### Verwendung der Farbtoninterpolation in color-mix()

Dieses Beispiel zeigt die Methoden zur Farbtoninterpolation, die der Funktion `color-mix()` zur Verfügung stehen. Bei der Verwendung von Farbton [Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert wird verschieden sein, je nachdem, welche Route um den Farbkreis genommen wird.

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

Die `shorter hue` Interpolationsmethode nimmt die kürzere Route um den Farbkreis, während die `longer hue` Interpolationsmethode die längere Route geht. Mit `increasing hue` beginnt die Route mit steigenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erstellen, die je nach genommenem Weg um den Farbkreis unterschiedlich sind. Die gemischten Farben beinhalten `red`, `blue`, und `yellow` mit LCH Farbtonwerten von ungefähr 41deg, 301deg, und 100deg.

Um Redundanz im Code zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet, wobei unterschiedliche Werte auf jedem {{htmlelement("ul")}} gesetzt werden.

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

Mit `longer hue` werden die Inkrementen oder Dekrementen zwischen den Farben immer gleich oder größer sein als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbwertänderung wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relativ Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
