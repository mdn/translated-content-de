---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 707a895d09555c873e5e7dbd28135381fde6d01e
---

{{CSSRef}}

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}}-Werte und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum mit einer angegebenen Menge zurück.

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

  - : Gibt an, welche Interpolationsmethode für die Farbmischung verwendet werden soll. Sie besteht aus dem Schlüsselwort `in` gefolgt von einem [Farbraum](/de/docs/Glossary/color_space)-Namen. Die folgenden drei Typen sind verfügbar:

    - `<rectangular-color-space>`: [`srgb`](/de/docs/Glossary/Color_space#srgb), [`srgb-linear`](/de/docs/Glossary/Color_space#srgb-linear), [`display-p3`](/de/docs/Glossary/Color_space#display-p3), [`a98-rgb`](/de/docs/Glossary/Color_space#a98-rgb), [`prophoto-rgb`](/de/docs/Glossary/Color_space#prophoto-rgb), [`rec2020`](/de/docs/Glossary/Color_space#rec2020), [`lab`](/de/docs/Glossary/Color_space#cielab_color_spaces), [`oklab`](/de/docs/Glossary/Color_space#oklab), [`xyz`](/de/docs/Glossary/Color_space#xyz_color_spaces), [`xyz-d50`](/de/docs/Glossary/Color_space#xyz), and [`xyz-d65`](/de/docs/Glossary/Color_space#xyz-d50).
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), and [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - custom-color-space: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), bezugnehmend auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile)

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, könnten benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der im [formal_syntax](#formale_syntax) aufgeführten verfügbaren Farbräume sein.

- `<color>`

  - : Ein zu mischender {{CSSXref("&lt;color&gt;")}}-Wert.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}}-Wert zwischen `0%` und `100%`, der die Menge der entsprechenden Farbe zur Mischung spezifiziert.

    Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann gilt `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann gilt `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann gilt `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann gilt `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Farbmischer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mit der Funktion `color-mix()`. Die Ausgangsfarben werden außen gezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und mit dem resultierenden Farbwähler eine neue Farbe auswählen. Sie können auch den Prozentsatz jeder Farbe, die in der Mischung enthalten ist, mit den Schiebereglern ändern sowie den Farbraum mit dem Dropdown-Menü.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel zeigt das Mischen von zwei Farben: Blau `#a71e14` in verschiedenen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz, mit dem `#a71e14` gemischt wird, desto mehr Blau und weniger Weiß ist die Ausgabefarbe.

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

Die `color-mix()`-Funktion wird verwendet, um zunehmende Prozentsätze von Blau hinzuzufügen, bis zu 100%. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der beiden Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte zusammen nicht 100% ergeben. In diesem Beispiel wird, da nur einer Farbe ein Prozentsatz zugeordnet wurde, der anderen Farbe implizit ein Prozentsatz zugewiesen, sodass der kombinierte Wert 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugewiesen ist, betragen beide standardmäßig 50%.

### Hinzufügen von Transparenz

Dieses Beispiel zeigt, wie die `color-mix()`-Funktion verwendet wird, um einer Farbe durch Mischen mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) Transparenz hinzuzufügen.

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

Die `color-mix()`-Funktion wird verwendet, um zunehmende Prozentsätze von `red` hinzuzufügen, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` angegeben ist, die in {{cssxref(":root")}} definiert ist. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz, wodurch eine Ausgabefarbe entsteht, die halb so deckend ist wie die `--base`-Farbe. Wir fügen einen gestreiften Hintergrund auf die {{htmlelement("ul")}} ein, um die Transparenz sichtbar zu machen.

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

So kann mit der `color-mix()`-Funktion jeder Farbe Transparenz hinzugefügt werden, selbst wenn die Farbe bereits nicht deckend ist (mit einem Alpha-Kanal-Wert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig deckend zu machen. Dafür verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS-[Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert jedes Farbkanals ändern, auch den Alpha-Kanal einer Farbe erhöhen, um sie vollständig deckend zu machen.

### Verwendung von Farbton-Interpolation in color-mix()

Dieses Beispiel zeigt die verfügbaren Methoden zur Farbtoninterpolation für die `color-mix()`-Funktion. Beim Verwenden von Farbton-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert unterscheidet sich je nachdem, welcher Weg um den Farbkreis genommen wird.

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

Die Interpolationsmethode `shorter hue` nimmt den kürzeren Weg um den Farbkreis, während die Methode `longer hue` den längeren Weg nimmt. Bei `increasing hue` beginnt die Route mit zunehmenden Werten. Bei `decreasing hue` nehmen die Werte ab. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Reihe von `lch()` Zwischenfarben zu erstellen, die sich unterscheiden, je nachdem, welcher Weg um den Farbkreis genommen wird. Zu den gemischten Farben gehören `red`, `blue` und `yellow` mit LCH-Farbtonwerten von ungefähr 41 Grad, 301 Grad und 100 Grad.

Um den Code-Redundanz zu reduzieren, haben wir [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet, indem wir unterschiedliche Werte für jedes {{htmlelement("ul")}} gesetzt haben.

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

Mit `longer hue` werden die Erhöhungen oder Verringerungen zwischen den Farben immer gleich oder größer sein als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtonwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
