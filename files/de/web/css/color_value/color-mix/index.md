---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 707a895d09555c873e5e7dbd28135381fde6d01e
---

{{CSSRef}}

Die **`color-mix()`** Funktionsnotation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte an und gibt das Ergebnis ihrer Mischung in einem bestimmten Farbmodus und mit einem bestimmten Anteil zurück.

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

  - : Spezifiziert, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in`, gefolgt von einem {{glossary("Farbmodus")}}-Namen. Die folgenden drei Typen sind verfügbar:

    - `<rectangular-color-space>`: [`srgb`](/de/docs/Glossary/Color_space#srgb), [`srgb-linear`](/de/docs/Glossary/Color_space#srgb-linear), [`display-p3`](/de/docs/Glossary/Color_space#display-p3), [`a98-rgb`](/de/docs/Glossary/Color_space#a98-rgb), [`prophoto-rgb`](/de/docs/Glossary/Color_space#prophoto-rgb), [`rec2020`](/de/docs/Glossary/Color_space#rec2020), [`lab`](/de/docs/Glossary/Color_space#cielab_color_spaces), [`oklab`](/de/docs/Glossary/Color_space#oklab), [`xyz`](/de/docs/Glossary/Color_space#xyz_color_spaces), [`xyz-d50`](/de/docs/Glossary/Color_space#xyz), und [`xyz-d65`](/de/docs/Glossary/Color_space#xyz-d50).
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - custom-color-space: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), bezugnehmend auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile)

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbmodi unterstützt werden. Derzeit muss der Farbmodus einer der verfügbaren aufgelisteten Farbmodi im [formal_syntax](#formale_syntax) sein.

- `<color>`

  - : Ein {{CSSXref("&lt;color&gt;")}} Wert, der gemischt werden soll.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}} Wert zwischen `0%` und `100%`, der angibt, wie viel der entsprechenden Farbe gemischt werden soll.

    Die beiden Farb-Prozentwerte (wir nennen sie `p1` und `p2`) sind wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann werden `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Farb-Mixer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mit der Funktion `color-mix()`. Die Ausgangsfarben sind außen angezeigt, die gemischte Farbe in der Mitte. Sie können die Farben ändern, indem Sie auf sie klicken und eine neue Farbe im Farbwahl-Tool auswählen. Sie können auch den Prozentsatz jeder Farbe im Mix mit den Schiebereglern ändern und den Farbmodus im Dropdown-Menü auswählen.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel zeigt das Mischen von zwei Farben, blau `#a71e14` mit verschiedenen Prozentwerten und weiß ohne Angabe eines Prozentsatzes. Je höher der Prozentsatz von `#a71e14` ist, desto blauer und weniger weiß ist die resultierende Farbe.

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

Die `color-mix()`-Funktion wird verwendet, um zunehmende Prozentwerte von Blau bis zu 100% hinzuzufügen. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der beiden Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% ergeben. In diesem Beispiel, da nur einer der Farben ein Prozentsatz zugewiesen ist, wird der anderen Farbe implizit ein Prozentwert gegeben, sodass die kombinierte Summe 100% ergibt. Im letzten {{htmlelement("li")}}, wo beiden Farben kein Prozentsatz zugewiesen ist, beide standardmäßig auf 50% gesetzt.

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

Die `color-mix()`-Funktion wird verwendet, um steigende Prozentwerte von `red` hinzuzufügen, welches unter Verwendung einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` auf dem {{cssxref(":root")}} deklariert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentwert, was eine Ausgabefarbe erzeugt, die halb so undurchsichtig ist wie die `--base`-Farbe. Wir fügen einen gestreiften Hintergrund zum {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()`-Funktion verwendet werden, um einer Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alphakanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS-[Farbfunktions](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich des Erhöhens des Alphakanals einer Farbe, um sie vollständig undurchsichtig zu machen.

### Verwendung der Farbtoninterpolation in color-mix()

Dieses Beispiel zeigt die Farbabstufungsinterpolationsmethoden, die für die `color-mix()`-Funktion verfügbar sind. Bei der Verwendung von Farbton-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert wird unterschiedlich sein, basierend darauf, welche Route um das Farbrad eingeschlagen wird.

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

Die `shorter hue` Interpolationsmethode nimmt die kürzere Route um das Farbrad, wohingegen die `longer hue` Interpolationsmethode die längere Route nimmt. Mit `increasing hue` beginnt die Route mit steigenden Werten. Mit `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erstellen, die sich anhand der um das Farbrad genommenen Route unterscheiden. Die gemischten Farben umfassen `red`, `blue`, und `yellow` mit LCH-Farbtonwerten von ungefähr 41 Grad, 301 Grad, und 100 Grad.

Um Redundanz im Code zu reduzieren, haben wir [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet, wobei verschiedene Werte für jede {{htmlelement("ul")}} festgelegt wurden.

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
  --distance: longer; /* 52 Grad Farbabstandszunahmen */
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(2) {
  /* 20 Grad Farbabstandsabnahmen */
  --distance: shorter;
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(3) {
  /* 40 Grad Farbabstandszunahmen */
  --distance: increasing;
  --base: yellow;
  --mixin: blue;
}
ul:nth-of-type(4) {
  /* 32 Grad Farbabstandsabnahmen */
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

Mit `longer hue` werden die Abstände oder Abnahmen zwischen Farben immer gleich oder größer sein als bei der Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtonwerts wichtiger ist als die Länge zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS Relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
