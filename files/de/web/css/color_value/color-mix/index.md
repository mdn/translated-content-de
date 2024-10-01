---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: bc3edf4e334c7d804b513d086ba733e6e045c322
---

{{CSSRef}}

Die **`color-mix()`** Funktionalnotation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis des Mischens in einem gegebenen Farbraum mit einer gegebenen Menge zurück.

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

Funktionalnotation: `color-mix(<color-interpolation-method>, <color>[<percentage>], <color>[<percentage>])`

- {{CSSXref("&lt;color-interpolation-method&gt;")}}

  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Color Space")}} Namen. Die folgenden drei Typen sind verfügbar:

    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile) bezieht sich auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile)

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der verfügbaren Farbräume sein, die in der [formal_syntax](#formale_syntax) aufgeführt sind.

- `<color>`

  - : Ein {{CSSXref("&lt;color&gt;")}} Wert zum Mischen.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}} Wert zwischen `0%` und `100%`, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll.

    Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann gilt `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann gilt `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann gilt `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann gilt `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsresultate sind.
      - Wenn `p1 + p2 < 100%`, dann wird ein Alphamultiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ähnelt dem Mischen mit [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit dem Prozentsatz `pt = 100% - p1 - p2`.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Farbmischer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mittels der `color-mix()` Funktion. Die Ausgangsfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und eine neue Farbe über den eingeblendeten Farbwähler auswählen. Sie können auch den Prozentsatz jeder Farbe, die im Mix enthalten ist, mit den Schiebereglern ändern und den Farbraum über das Dropdown-Menü auswählen.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel zeigt das Mischen zweier Farben, Blau `#a71e14` in unterschiedlichen Prozentsätzen und Weiß ohne gegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14`, desto blauer und weniger weiß wird die Ausgabefarbe.

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

Die `color-mix()` Funktion wird verwendet, um steigende Blauanteile bis zu 100% hinzuzufügen. Das 6. {{htmlelement("li")}} schließt keinen Prozentsatz für eine der Farben ein.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, selbst wenn die vom Entwickler festgelegten Werte nicht 100% ergeben. In diesem Beispiel, da nur einer Farbe ein Prozentsatz zugewiesen wird, erhält die andere Farbe implizit einen Prozentsatz, damit die kombinierte Summe 100% entspricht. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugeordnet ist, werden beide auf 50% gesetzt.

### Transparenz hinzufügen

Dieses Beispiel zeigt, wie die `color-mix()` Funktion verwendet wird, um Transparenz zu einer Farbe hinzuzufügen, indem man eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) mischt.

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

Die `color-mix()` Funktion wird verwendet, um steigende Anteile von `red`, die über eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--base`, definiert auf dem {{cssxref(":root")}}, hinzuzufügen. Das 6. {{htmlelement("li")}} schließt keinen Prozentsatz ein und erzeugt eine Ausgabefarbe, die halb so opak ist wie die `--base` Farbe. Wir fügen einen gestreiften Hintergrund auf dem {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um Transparenz zu jeder Farbe hinzuzufügen, selbst wenn die Farbe bereits nicht vollständig opak ist (mit einem Alphakanalwert < 1). Jedoch kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig opak zu machen. Hierfür verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farbfunktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines jeden Farbspektrums ändern, einschließlich der Erhöhung eines Alphakanals, um die Farbe vollständig opak zu machen.

### Verwendung der Farbtoninterpolation in color-mix()

Dieses Beispiel zeigt die verfügbaren Farbtoninterpolationsmethoden der `color-mix()` Funktion. Bei Verwendung der Farbton [Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert unterscheidet sich je nachdem, welcher Weg um den Farbring genommen wird.

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

Die `shorter hue` Interpolationsmethode nimmt den kürzeren Weg um den Farbring, während die `longer hue` Interpolationsmethode den längeren Weg nimmt. Mit `increasing hue` beginnt der Weg mit steigenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Reihe von `lch()` Zwischenfarben zu erstellen, die je nach dem gewählten Weg um den Farbring variieren. Die gemischten Farben beinhalten `red`, `blue` und `yellow` mit LCH Farbtonwerten von ungefähr 41deg, 301deg und 100deg.

Um den Codeaufwand zu reduzieren, verwenden wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und die Interpolationsmethode, wobei wir unterschiedliche Werte auf jedem {{htmlelement("ul")}} setzen.

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

Mit `longer hue` werden die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer sein als bei `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbtonwertänderung wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
