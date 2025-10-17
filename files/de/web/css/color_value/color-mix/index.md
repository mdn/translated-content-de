---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}}-Werte und gibt das Ergebnis ihrer Mischung in einem bestimmten Farbraum in einer bestimmten Menge zurück.

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

Die `color-mix( <color-interpolation-method>, <color> [<percentage>], <color> [<percentage>] )` akzeptiert folgende Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt die Interpolationsmethode an, die zum Mischen der Farben verwendet werden soll. Es besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Farbraum")}} (eines der in der [formalen Syntax](#formale_syntax) aufgeführten Farbräume) und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine Farbe, die gemischt werden soll; kann ein gültiger `<color>`-Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die Menge der jeweiligen Farbe angibt, die gemischt werden soll; kann jeder `<percentage>`-Wert zwischen `0%` und `100%` sein, einschließlich.

### Rückgabewert

Ein `<color>`; das Ergebnis der Mischung der Farben im angegebenen `<color-space>` in den spezifizierten Mengen und Farbtonrichtung.

## Beschreibung

Die Funktion `color-mix()` ermöglicht das Mischen von zwei {{cssxref("&lt;color&gt;")}}-Werten jeglicher Art in einem bestimmten Verhältnis in einem bestimmten Farbraum, entweder mit einer kürzeren oder längeren Farbtoninterpolationsmethode. Browser unterstützen eine Vielzahl von Farbräumen; die Funktion `color-mix()` ermöglicht eine breite Palette an gemischten Farben, die nicht auf den sRGB-Farbraum beschränkt sind.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Dieses Demo ermöglicht es Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, wobei Sie optional den Prozentsatz jeder Farbe, den Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode einstellen können. Die Ausgangsfarben werden außen angezeigt, die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und unter Verwendung des resultierenden Farbwählers eine neue Farbe auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Auswahl eines Farbraums

Die Wahl des richtigen Farbraums ist wichtig, um gewünschte Ergebnisse zu erzielen. Bei gegebenen Farben zum Mischen können je nach Anwendungsfall verschiedene Farbräume geeigneter sein.

- Wenn das Ergebnis des physischen Mischens zweier farbiger Lichter gewünscht ist, ist der CIE XYZ oder srgb-linear Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben wahrnehmungsgerecht gleichmäßig verteilt sein sollen (zum Beispiel in einem Verlauf), sind die Farbräume Oklab (und der ältere Lab) geeignet, da sie als wahrnehmungsgerecht gleichmäßig konzipiert sind.
- Wenn ein Ausgrauen beim Farbenmischen vermieden werden soll, d.h. wenn die Chroma über den gesamten Übergang maximiert werden soll, funktionieren die Farbräume Oklch (und der ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software replizieren müssen, die sRGB verwendet. Der sRGB-Farbraum ist weder linear-lichtgerecht noch wahrnehmungsgerecht gleichmäßig und erzeugt schlechtere Ergebnisse, wie zu dunkle oder gräuliche Mischungen.

### Farbinterpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen. Der Farbraum muss einer der verfügbaren Farbräume sein, die in der [formalen Syntax](#formale_syntax) aufgeführt sind. Je nach verwendeten Farbraum können Sie optional den Farbton entlang eines längeren oder kürzeren Pfads mischen lassen.

Die Kategorie [`<rectangular-color-space>`](/de/docs/Web/CSS/color-interpolation-method#rectangular-color-space) umfasst {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die Kategorie `<polar-color-space>` umfasst [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch). Mit diesen können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} folgen. Dieser Wert ist standardmäßig auf `shorter hue` eingestellt, kann aber auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Farbprozentsätze

Jede der beiden Farben kann mit einem `<percentage>`-Wert zwischen `0%` und `100%` deklariert werden, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll. Die Prozentwerte werden normalisiert, wenn der Gesamtwert der deklarierten Prozentwerte nicht `100%` entspricht.

Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%` ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
  - Wenn `p1 + p2 < 100%`, dann wird ein Alphamultiplier von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen mit [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit Prozentwert `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Zwei Farben mischen

Dieses Beispiel zeigt das Mischen von zwei Farben, rot `#a71e14` in verschiedenen Prozentsätzen und weiß, ohne Prozentsatz angegeben. Je höher der Prozentsatz von `#a71e14` ist, desto mehr Rot und weniger Weiß ist die Ausgangsfarbe.

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

Die Funktion `color-mix()` wird verwendet, um steigende Prozentsätze von Rot bis zu 100% hinzuzufügen. Die 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% betragen. In diesem Beispiel, da nur eine Farbe einen Prozentsatz zugewiesen hat, wird der anderen Farbe implizit ein Prozentsatz zugewiesen, sodass das Gesamtvolumen gleich 100% ist. In der letzten {{htmlelement("li")}}, bei der keine Farbe einen Prozentsatz zugewiesen hat, sind beide standardmäßig auf 50% eingestellt.

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die Funktion `color-mix()` verwendet wird, um einer Farbe Transparenz hinzuzufügen, indem jede Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die Funktion `color-mix()` wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, deklariert durch eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*), die als `--base` auf dem {{cssxref(":root")}} definiert ist. Die 6. {{htmlelement("li")}} enthält keinen Prozentsatz, wodurch eine Ausgangsfarbe entsteht, die halb so undurchsichtig wie die `--base`-Farbe ist. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} ein, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die Funktion `color-mix()` verwendet werden, um jeder Farbe Transparenz hinzuzufügen, auch wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alphakanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Verwenden Sie dafür eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS- [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich des Erhöhens eines Alphakanals, um die Farbe vollständig undurchsichtig zu machen.

### Verwendung der Farbtoninterpolation in color-mix()

Dieses Beispiel zeigt die in der Funktion `color-mix()` verfügbaren Farbtoninterpolationsmethoden. Bei Verwendung der Farbton-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtönen der beiden gemischten Farben. Der Wert wird unterschiedlich sein, je nachdem, welche Route um den Farbkreis genommen wird.

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

Die Interpolationsmethode `shorter hue` nimmt den kürzeren Weg um den Farbkreis, während die Methode `longer hue` den längeren Weg nimmt. Mit `increasing hue` beginnt die Route mit ansteigenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Serie von `lch()`-Zwischenfarben zu erschaffen, die je nach Route um den Farbkreis variiert. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH-Farbtonwerten von etwa 41deg, 301deg und 100deg.

Um die Redundanz im Code zu verringern, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet, indem wir verschiedene Werte auf jedes {{htmlelement("ul")}} einstellen.

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

Mit `longer hue` sind die Zuwächse oder Abnahmen zwischen den Farben immer gleich oder größer als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtonwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
