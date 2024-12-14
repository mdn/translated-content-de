---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}}-Werte und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum mit einer gegebenen Menge zurück.

## Syntax

```css
/* color-mix(in <polar-color-space>, <color>, <color> <percentage>) */
color-mix(in hsl, hsl(200 50 80), coral 80%)
/* color-mix(in <polar-color-space> <hue-interpolation-method>, <color>, <color>) */
color-mix(in lch longer hue, hsl(200deg 50% 80%), coral)

/* color-mix(in <rectangular-color-space>, <color>, <color>) */
color-mix(in srgb, plum, #f00)
/* color-mix(in <rectangular-color-space>, <color> <percentage>, <color> <percentage> */
color-mix(in lab, plum 60%, #f00 50%)

/* color-mix(in <custom-color-space>, <color>, <color>) */
color-mix(in --swop5c, red, blue)
```

### Werte

Funktionale Notation: `color-mix(<color-interpolation-method>, <color>[<percentage>], <color>[<percentage>])`

- {{CSSXref("&lt;color-interpolation-method&gt;")}}

  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Farbraum")}}-Namen. Die folgenden drei Typen sind verfügbar:

    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), der sich auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile) bezieht.

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der im [formalen Syntax](#formale_syntax) aufgelisteten zugänglichen Farbräume sein.

- `<color>`

  - : Ein {{CSSXref("&lt;color&gt;")}}-Wert zum Mischen.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}}-Wert zwischen `0%` und `100%`, der die Menge der entsprechenden zu mischenden Farbe angibt.

    Die zwei Farbprozentsätze (wir nennen sie `p1` und `p2`) werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%`, dann wird ein Alphamultiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen von [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit dem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farb-Mischer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mithilfe der Funktion `color-mix()`. Die Ausgangsfarben werden außen dargestellt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Sie können auch den Prozentsatz jeder Farbe im Mix mit den Schiebereglern ändern und den Farbraum im Dropdown-Menü auswählen.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Mischen zweier Farben

Dieses Beispiel zeigt das Mischen zweier Farben, Blau `#a71e14` in unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto mehr Blau und weniger Weiß wird in der Ausgabefarbe sein.

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

Die Funktion `color-mix()` wird verwendet, um zunehmende Prozentsätze von Blau bis zu 100% hinzuzufügen. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der beiden Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% ergeben. In diesem Beispiel, da nur einer Farbe ein Prozentsatz zugeordnet ist, erhält die andere Farbe implizit einen Prozentsatzwert, damit die kombinierte Gesamtsumme 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner der Farben ein Prozentsatz zugewiesen ist, nehmen beide standardmäßig 50% an.

### Hinzufügen von Transparenz

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

Die Funktion `color-mix()` wird verwendet, um zunehmende Prozentsätze von `red` hinzuzufügen, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` deklariert und im {{cssxref(":root")}} definiert wird. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz und erzeugt eine Ausgabefarbe, die halb so opak wie die `--base`-Farbe ist. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die Funktion `color-mix()` verwendet werden, um jeder Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht opak ist (mit einem Alpha-Kanal-Wert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig opak zu machen. Dafür verwenden Sie eine [relative Color](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS-[Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines jeden Farbkanals ändern, einschließlich der Erhöhung eines Alpha-Kanal einer Farbe, um die Farbe vollständig opak zu machen.

### Verwenden der Farbton-Interpolation in color-mix()

Dieses Beispiel zeigt die verfügbaren Farbton-Interpolationsmethoden für die Funktion `color-mix()`. Bei Verwendung der Farbton-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert wird sich unterscheiden, je nachdem welche Route um den Farbkreis genommen wird.

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

Die `shorter hue` Interpolationsmethode nimmt die kürzere Route um den Farbkreis, während die `longer hue` Interpolationsmethode die längere Route nimmt. Bei `increasing hue` beginnt die Route mit zunehmenden Werten. Bei `decreasing hue` verringert sich der Wert. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Serie von `lch()` Zwischentönen zu erzeugen, die sich je nach Route um den Farbkreis unterscheiden. Die gemischten Farben umfassen `red`, `blue`, und `yellow` mit LCH-Farbtonwerten von ungefähr 41deg, 301deg und 100deg.

Um redundanten Code zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet und unterschiedliche Werte auf jedem {{htmlelement("ul")}} eingestellt.

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

Mit `longer hue` werden die Zuwächse oder Verringerungen zwischen den Farben immer gleich oder größer sein als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbtonwertänderung wichtiger als die Länge zwischen den Werten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
