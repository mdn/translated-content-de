---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Die **`color-mix()`** Funktionsnotation akzeptiert zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis des Mischens dieser in einem bestimmten Farbraum in einer bestimmten Menge zurück.

Die Auswahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Bei den gleichen zu mischenden Farben können, abhängig vom Anwendungsfall der Interpolation, unterschiedliche Farbräume geeigneter sein.

- Wenn das physische Mischen von zwei farbigen Lichtern gewünscht ist, ist der CIE XYZ oder srgb-linear Farbraum geeignet, da diese in der Lichtintensität linear sind.
- Wenn Farben gleichmäßig wahrgenommen werden sollen (wie in einem Gradienten), ist der Oklab Farbraum (und der ältere Lab) geeignet, da sie entworfen wurden, um wahrnehmungseinheitlich zu sein.
- Wenn eine Vermeidung des Grauerwerdens beim Mischen gewünscht ist, d.h. die Maximierung der Chroma über den Übergang, funktionieren OkLCh (und der ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software, die sRGB verwendet, nachbilden müssen. Der sRGB-Farbraum ist weder linear in der Lichtintensität noch wahrnehmungseinheitlich und liefert schlechtere Ergebnisse wie übermäßig dunkle oder gräuliche Mischungen.

## Syntax

```css
/* Polar color space */
color-mix(in hsl, hsl(200 50 80), coral 80%)

/* Rectangular color space */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* Custom color space */
color-mix(in --swop5c, red, blue)

/* With hue interpolation method */
color-mix(in lch longer hue, hsl(200deg 50% 80%), coral)
```

### Werte

Funktionsnotation: `color-mix(<color-interpolation-method>, <color>[<percentage>], <color>[<percentage>])`

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Farb-Raum")}} Namen. Die folgenden drei Typen sind verfügbar:
    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile) verweist auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile)

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der verfügbaren Farbräume sein, die im [formal_syntax](#formale_syntax) aufgeführt sind.

- `<color>`
  - : Ein {{CSSXref("&lt;color&gt;")}} Wert, der gemischt werden soll.

- `<percentage>` {{optional_inline}}
  - : Ein {{CSSXref("&lt;percentage&gt;")}} Wert zwischen `0%` und `100%`, der die Menge der entsprechenden zu mischenden Farbe angibt.

    Die beiden Farbprozentsätze (wir nennen sie `p1` und `p2`) werden wie folgt normalisiert:
    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann ist `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann ist `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann ist `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann ist `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ähnelt dem Mischen mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) mit Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farb-Mixer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mit der Funktion `color-mix()`. Die Quellfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte gezeigt. Sie können die Farben ändern, indem Sie darauf klicken und mit dem resultierenden Farbwähler eine neue Farbe auswählen. Außerdem können Sie den Prozentsatz jeder im Mix enthaltenen Farbe mit den Schiebereglern ändern und den Farbraum mit dem Dropdown-Menü auswählen.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel demonstriert das Mischen zweier Farben, Rot `#a71e14` in unterschiedlichen Prozentsätzen und Weiß, ohne Prozentsatzangabe. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto mehr Rot und weniger Weiß ist die Ausgabefarbe.

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

Die Funktion `color-mix()` wird verwendet, um zunehmende Prozentsätze von Rot hinzuzufügen, bis zu 100%. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht 100% ergeben. In diesem Beispiel, da nur eine Farbe einen Prozentsatz zugewiesen bekommt, wird der anderen Farbe implizit ein Prozentsatz zugewiesen, sodass die kombinierte Summe 100% beträgt. Im letzten {{htmlelement("li")}}, in dem keiner der Farben ein Prozentsatz zugewiesen ist, haben beide standardmäßig 50%.

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die Funktion `color-mix()` verwendet werden kann, um einer Farbe Transparenz hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von `red` hinzuzufügen, die mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` erklärt wird, die im {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, wodurch eine Ausgabefarbe entsteht, die halb so undurchsichtig ist wie die `--base` Farbe. Wir fügen einen gestreiften Hintergrund auf der {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um einer beliebigen Farbe Transparenz hinzuzufügen, auch wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alpha-Kanal Wert < 1). Die `color-mix()` Funktion kann jedoch nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich der Erhöhung des Alpha-Kanals einer Farbe, um die Farbe vollständig undurchsichtig darzustellen.

### Verwendung von Farbtoninterpolation in color-mix()

Dieses Beispiel zeigt die für die `color-mix()` Funktion verfügbaren Methoden der Farbtoninterpolation. Bei der Verwendung von Farbton-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden zu mischenden Farben. Der Wert wird unterschiedlich je nach gewählter Route um das Farbrad.

Für weitere Informationen, siehe {{cssxref("&lt;hue-interpolation-method&gt;")}}.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um das Farbrad, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Bei `increasing hue` beginnt die Route mit zunehmenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erstellen, die sich je nach gewählter Route um das Farbrad unterscheiden. Die gemischten Farben sind `red`, `blue` und `yellow` mit LCH Farbtonwerten von ungefähr 41deg, 301deg und 100deg.

Um Code-Redundanz zu reduzieren, verwenden wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode und setzen unterschiedliche Werte auf jede {{htmlelement("ul")}}.

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

Mit `longer hue` sind die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
