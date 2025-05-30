---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: df5d7dd8462b6968523e89428c110652c4432d4e
---

{{CSSRef}}

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}} Werte an und gibt das Ergebnis ihrer Mischung in einem bestimmten Farbraum mit einem bestimmten Anteil zurück.

Die Wahl des richtigen Farbraums ist entscheidend, um die gewünschten Ergebnisse zu erzielen. Je nach Interpolationsfall können unterschiedliche Farbräume bei den gleichen Mischfarben besser geeignet sein.

- Wenn das Ergebnis des physischen Mischens von zwei farbigen Lichtern gewünscht ist, sind der CIE XYZ oder der srgb-lineare Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben perzeptuell gleichmäßig verteilt werden müssen (wie bei einem Verlauf), sind der Oklab-Farbraum (und der ältere Lab) geeignet, da sie so gestaltet sind, dass sie perzeptuell gleichmäßig sind.
- Wenn man beim Mischen von Farben eine Vergrauung vermeiden möchte, d.h. die Chroma während der gesamten Übergänge maximieren möchte, sind Oklch (und der ältere LCH) gut geeignet.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software, die sRGB verwendet, nachahmen müssen. Der sRGB-Farbraum ist weder linear im Licht noch perzeptuell gleichmäßig und erzeugt schlechtere Ergebnisse wie zu dunkle oder gräuliche Mischungen.

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

  - : Gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraumnamen")}}. Die folgenden drei Typen sind verfügbar:

    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile) bezogen auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile)

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der im [formal_syntax](#formale_syntax) aufgeführten verfügbaren Farbräume sein.

- `<color>`

  - : Ein {{CSSXref("&lt;color&gt;")}} Wert zum Mischen.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}} Wert zwischen `0%` und `100%`, der den Anteil der entsprechenden Farbe zum Mischen angibt.

    Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen in [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit dem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farbenmischer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mit der Funktion `color-mix()`. Die Quellfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Sie können auch den Prozentsatz der im Mix enthaltenen Farben mithilfe der Schieberegler ändern und den Farbraum über das Dropdown-Menü ändern.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel zeigt das Mischen zweier Farben, Rot `#a71e14` in unterschiedlichen Prozentsätzen und Weiß ohne Angabe eines Prozentsatzes. Je höher der Anteil von `#a71e14` gemischt wird, desto mehr Rot und weniger Weiß hat die Ausgabefarbe.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Anteile von Rot zu erhöhen, bis zu 100%. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der beiden Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, selbst wenn die vom Entwickler festgelegten Werte nicht 100% ergeben. In diesem Beispiel, da nur einer Farbe ein Prozentsatz zugewiesen ist, erhält die andere Farbe implizit einen prozentualen Wert, sodass die Gesamtmenge 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugewiesen ist, sind beide standardmäßig 50%.

### Transparenz hinzufügen

Dieses Beispiel zeigt die Verwendung der `color-mix()` Funktion, um Transparenz zu einer Farbe hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die `color-mix()` Funktion wird verwendet, um steigende Anteile von `red` hinzuzufügen, die mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` deklariert ist, die auf dem {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, wodurch eine Ausgabefarbe erzeugt wird, die halb so undurchsichtig ist wie die `--base` Farbe. Wir fügen einen gestreiften Hintergrund zum {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um Transparenz zu jeder Farbe hinzuzufügen, selbst wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alpha-Kanal-Wert < 1). Jedoch kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Dazu verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich der Erhöhung eines Alphakanals, um die Farbe vollständig undurchsichtig zu machen.

### Verwendung der Farbton-Interpolation in color-mix()

Dieses Beispiel zeigt die in der Funktion `color-mix()` verfügbaren Farbton-Interpolationsmethoden. Bei der Verwendung der Farbton-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert wird unterschiedlich sein, je nachdem, welcher Weg auf dem Farbkreis genommen wird.

Weitere Informationen siehe {{cssxref("&lt;hue-interpolation-method&gt;")}}.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um den Farbkreis, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt die Route mit steigenden Werten. Mit `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erstellen, die sich basierend auf dem gewählten Weg um den Farbkreis unterscheiden. Die gemischten Farben umfassen `rot`, `blau` und `gelb` mit LCH-Farbtonwerten von ungefähr 41grad, 301grad, und 100grad.

Um Redundanz im Code zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) sowohl für Farben als auch für die Interpolationsmethode verwendet und unterschiedliche Werte auf jedem {{htmlelement("ul")}} gesetzt.

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

Mit `longer hue` sind die Inkrement- oder Dekrementwerte zwischen den Farben immer gleich oder größer als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtonwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
