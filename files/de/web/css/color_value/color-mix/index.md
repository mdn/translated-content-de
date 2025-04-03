---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}}-Werte und gibt das Ergebnis ihrer Mischung in einem angegebenen Farbraum mit einer bestimmten Menge zurück.

Die Wahl des richtigen Farbraums ist entscheidend, um die gewünschten Ergebnisse zu erzielen. Verschiedene Farbräume können je nach Anwendungsfall der Interpolation geeigneter sein, selbst wenn dieselben Farben gemischt werden.

- Wenn das Ergebnis des physischen Mischens zweier farbiger Lichter gewünscht wird, sind die Farbräume CIE XYZ oder srgb-linear geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben wahrnehmungsgleichmäßig verteilt werden müssen (wie in einem Verlauf), ist der Oklab-Farbraum (und der ältere Lab) geeignet, da sie darauf ausgelegt sind, wahrnehmungsgleichmäßig zu sein.
- Wenn das Ausgrauen beim Mischen von Farben vermieden werden soll, d.h. die Chroma während des gesamten Übergangs maximiert werden soll, arbeiten Oklch (und der ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer bestimmten Software nachbilden müssen, die sRGB verwendet. Der sRGB-Farbraum ist weder linear-leicht noch wahrnehmungsgleichmäßig und erzeugt schlechtere Ergebnisse wie z. B. zu dunkle oder gräuliche Mischungen.

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

  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}}-Namen. Die folgenden drei Typen stehen zur Verfügung:

    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile) bezieht sich auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile)

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der verfügbaren Farbräume sein, die in der [formal_syntax](#formale_syntax) aufgeführt sind.

- `<color>`

  - : Ein {{CSSXref("&lt;color&gt;")}}-Wert, der gemischt werden soll.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}}-Wert zwischen `0%` und `100%`, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll.

    Die zwei Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann gilt `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann gilt `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann gilt `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsresultate sind.
      - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen von [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit einem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farb-Mixer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, unter Verwendung der Funktion `color-mix()`. Die Ausgangsfarben werden außen gezeigt, die gemischte Farbe wird in der Mitte gezeigt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe im erscheinenden Farbwähler auswählen. Sie können auch den Prozentsatz jeder in die Mischung einbezogenen Farbe mithilfe der Schieberegler und den Farbraum mit dem Dropdown-Menü ändern.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel zeigt das Mischen zweier Farben, Blau `#a71e14` bei verschiedenen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto mehr Blau und weniger Weiß hat die Ausgabefarbe.

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

Die `color-mix()`-Funktion wird verwendet, um steigende Prozentsätze von Blau bis zu 100 % hinzuzufügen. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100 %, auch wenn die vom Entwickler festgelegten Werte nicht 100 % ergeben. In diesem Beispiel erhält, weil nur einer Farbe ein Prozentsatz zugewiesen ist, die andere Farbe implizit einen Prozentwert, sodass die Gesamtsumme 100 % ergibt. Im letzten {{htmlelement("li")}}, wo keiner der Farben ein Prozentsatz zugewiesen ist, wird beiden standardmäßig 50 % zugewiesen.

### Transparenz hinzufügen

Dieses Beispiel zeigt die Verwendung der `color-mix()`-Funktion, um einer Farbe Transparenz hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die `color-mix()`-Funktion wird verwendet, um steigende Prozentsätze von `red` hinzuzufügen, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) benannt `--base` auf dem {{cssxref(":root")}} definiert wird. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was eine Ausgabefarbe erzeugt, die halb so opak wie die `--base`-Farbe ist. Wir fügen einen gestreiften Hintergrund auf das {{htmlelement("ul")}} ein, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()`-Funktion verwendet werden, um einer beliebigen Farbe Transparenz hinzuzufügen, auch wenn die Farbe bereits nicht vollständig opak ist (mit einem Alphakanalwert < 1). `color-mix()` kann jedoch nicht verwendet werden, um eine halbtransparente Farbe vollständig opak zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines jeden Farbkanals ändern, einschließlich der Erhöhung des Alphakanals einer Farbe, um sie vollständig opak zu machen.

### Hue-Interpolation bei color-mix() verwenden

Dieses Beispiel demonstriert die bei der `color-mix()`-Funktion verfügbaren Hue-Interpolationsmethoden. Beim Verwenden von Hue-[Interpolationen](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Hue zwischen den Hue-Werten der beiden gemischten Farben. Der Wert wird unterschiedlich sein, je nachdem, welche Route um den Farbkreis genommen wird.

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

Die Methode der `shorter hue`-Interpolation nimmt die kürzere Route um den Farbkreis, während die Methode der `longer hue`-Interpolation die längere Route nimmt. Mit `increasing hue` beginnt die Route mit zunehmenden Werten; bei `decreasing hue` verringern sich die Werte. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Reihe von `lch()`-Zwischenfarben zu erstellen, die sich basierend auf der Route um den Farbkreis unterscheiden. Die gemischten Farben sind `red`, `blue` und `yellow` mit LCH-Hue-Werten von ungefähr 41deg, 301deg und 100deg, jeweils.

Um redundanten Code zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und die Interpolationsmethode verwendet und unterschiedliche Werte auf jede {{htmlelement("ul")}} gesetzt.

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

Mit `longer hue` werden die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer sein als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Hue-Werts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
