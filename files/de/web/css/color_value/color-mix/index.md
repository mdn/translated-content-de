---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 86c57320257b5462dd578259f9577459e90ffa23
---

{{CSSRef}}

Die **`color-mix()`** Funktionsnotation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis der Mischung dieser Werte in einem gegebenen Farbraum in einer bestimmten Menge zurück.

Die Wahl des richtigen Farbraums ist entscheidend für das gewünschte Ergebnis. Unterschiedliche Farbräume können, abhängig vom Anwendungsfall der Interpolation, geeigneter sein.

- Wenn das Ergebnis des physikalischen Mischens zweier farbiger Lichter gewünscht ist, ist der CIE XYZ oder srgb-linear Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben gleichmäßig verteilt dargestellt werden sollen (wie in einem Verlauf), ist der Oklab Farbraum (und der ältere Lab) geeignet, da sie so entworfen wurden, dass sie wahrnehmungsgleichmäßig sind.
- Wenn es darum geht, ein Ausgrauen bei der Farbmischung zu vermeiden, d.h. den Farbton während des Übergangs zu maximieren, funktionieren Oklch (und der ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn die Verhaltensweise eines bestimmten Geräts oder einer bestimmten Software, die sRGB verwendet, angepasst werden muss. Der sRGB Farbraum ist weder linear im Licht noch wahrnehmungsgleichmäßig und erzeugt schlechtere Ergebnisse, wie z.B. übermäßig dunkle oder gräuliche Mischungen.

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

Funktionsnotation: `color-mix(<color-interpolation-method>, <color>[<percentage>], <color>[<percentage>])`

- {{CSSXref("&lt;color-interpolation-method&gt;")}}

  - : Gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in`, gefolgt vom Namen eines {{Glossary("color_space", "Farbraums")}}. Die folgenden drei Typen sind verfügbar:

    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), der auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile) verweist

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der verfügbaren Farbräume sein, die unter [formal_syntax](#formale_syntax) aufgelistet sind.

- `<color>`

  - : Ein {{CSSXref("&lt;color&gt;")}} Wert zum Mischen.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}} Wert zwischen `0%` und `100%`, der die Menge der entsprechenden zu mischenden Farbe angibt.

    Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann gilt `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann gilt `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann gilt `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%` ist, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%` ist, dann gilt `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%` ist, wird dem resultierenden Farbton ein Alphamultiplikator von `p1 + p2` zugewendet. Dies ist ähnlich wie das Mischen mit [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit einem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farb-Mixer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, unter Verwendung der `color-mix()` Funktion. Die Ausgangsfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Sie können auch den Prozentsatz jeder in die Mischung einbezogenen Farbe mit Schiebereglern ändern und den Farbraum über das Dropdown-Menü ändern.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Mischen zweier Farben

Dieses Beispiel demonstriert das Mischen zweier Farben, Blau `#a71e14` in unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto mehr Blau und weniger Weiß zeigt die Ausgabefarbe.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von Blau hinzuzufügen, bis zu 100%. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, selbst wenn die vom Entwickler festgelegten Werte insgesamt nicht 100% betragen. In diesem Beispiel, da nur einer Farbe ein Prozentsatz zugewiesen wurde, erhält die andere Farbe implizit einen Prozentsatzwert, so dass die Gesamtsumme 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner der Farben ein Prozentsatz zugewiesen ist, erhalten beide standardmäßig 50%.

### Transparenz hinzufügen

Dieses Beispiel demonstriert die Verwendung der `color-mix()` Funktion, um einer Farbe Transparenz hinzuzufügen, indem jede Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von `red` hinzuzufügen, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` deklariert wird, die in {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was zu einer Ausgabefarbe führt, die halb so deckend ist wie die `--base` Farbe. Wir fügen einen gestreiften Hintergrund auf das {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die Funktion `color-mix()` verwendet werden, um jeder Farbe Transparenz hinzuzufügen, auch wenn die Farbe bereits nicht deckend ist (mit einem Alphakanalwert < 1). Jedoch kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig deckend zu machen. Verwenden Sie hierzu eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert jedes Farbkanals ändern, einschließlich der Erhöhung des Alphakanals einer Farbe, um die Farbe vollständig deckend zu machen.

### Verwendung der Farbtoninterpolation in `color-mix()`

Dieses Beispiel demonstriert die verfügbaren Farbtoninterpolationsmethoden der `color-mix()` Funktion. Bei der Verwendung der Farbton [Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der zwei gemischten Farben. Der Wert wird je nach Weg um das Farbrad unterschiedlich sein.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um das Farbrad, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt der Weg mit zunehmenden Werten. Mit `decreasing hue` verringert sich der Wert. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Reihe von `lch()` Zwischenfarben zu erzeugen, die sich basierend auf dem gewählten Weg um das Farbrad unterscheiden. Die gemischten Farben umfassen `rot`, `blau` und `gelb` mit LCH Farbtonwerten von ungefähr 41deg, 301deg und 100deg.

Um Code Redundanzen zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet, wobei unterschiedliche Werte auf jedes {{htmlelement("ul")}} gesetzt wurden.

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

Mit `longer hue` werden die In- oder Dekremente zwischen den Farben immer gleich oder größer sein als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue` wenn die Richtung der Änderung des Farbtonwertes wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative colors](/de/docs/Web/CSS/CSS_colors/Relative_colors)
