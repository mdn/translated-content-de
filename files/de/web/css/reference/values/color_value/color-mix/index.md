---
title: "`color-mix()` CSS-Funktion"
short-title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`color-mix()`** Funktionsnotation nimmt einen oder mehrere {{cssxref("&lt;color&gt;")}}-Werte an und gibt das Ergebnis des Mischens in einem gegebenen Farbraum mit einem bestimmten Anteil zurück.

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

/* with more than two colors */
color-mix(in oklab, teal, olive, blue)
color-mix(in oklab, teal 20%, olive 30%, blue 50%)
```

### Parameter

Die `color-mix( <color-interpolation-method>? , [ <color> && <percentage [0,100]>? ]#)` akzeptiert die folgenden Parameter:

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Gibt an, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in`, gefolgt von einem {{Glossary("color_space", "Farbraum")}} (einem der im [formalen Syntax](#formale_syntax) aufgelisteten Farbräume) und optional einer {{CSSXref("&lt;hue-interpolation-method&gt;")}}.

- {{CSSXref("&lt;color&gt;")}}
  - : Eine zu mischende Farbe; kann jeder gültige `<color>`-Wert sein.

- {{CSSXref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Ein Prozentwert, der die zu mischende Menge der entsprechenden Farbe angibt; kann jeder `<percentage>`-Wert zwischen `0%` und `100%` sein, einschließlich.

### Rückgabewert

Ein `<color>`; das Ergebnis des Mischens der Farben im gegebenen `<color-space>`, in den angegebenen Mengen und in der angegebenen Farbrichtung.

## Beschreibung

Die `color-mix()`-Funktion ermöglicht das Mischen eines oder mehrerer {{cssxref("&lt;color&gt;")}}-Werte eines Typs in einem spezifischen Verhältnis in einem gegebenen Farbraum unter Verwendung einer kürzeren oder längeren Farbtoninterpolation. Browser unterstützen eine Vielzahl von Farbräumen; die `color-mix()`-Funktion ermöglicht das Mischen einer Vielzahl von Farben, die nicht auf den sRGB-Farbraum beschränkt sind.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

Dieses Demo erlaubt Ihnen, zwei Farben, `color-one` und `color-two`, auszuwählen und zu mischen, dabei können Sie optional den Prozentsatz jeder Farbe, den Farbraum, in dem die Farben gemischt werden, und die Interpolationsmethode einstellen. Die Ausgangsfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie auf sie klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Ändern Sie die Prozentwerte jeder Farbe mit den Schiebereglern. Ändern Sie den Farbraum über das Dropdown-Menü.

### Wahl eines Farbraums

Die Wahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Für dieselben Farben, die gemischt werden sollen, können je nach Interpolationsanwendungsfall unterschiedliche Farbräume geeigneter sein.

- Wenn das Ergebnis des physischen Mischens von farbigen Lichtern erwünscht ist, ist der CIE XYZ oder srgb-linear Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben visuell gleichmäßig verteilt werden sollen (z. B. in einem Farbverlauf), sind die Oklab (und älteren Lab)-Farbräume geeignet, da sie so gestaltet sind, dass sie visuell gleichmäßig sind.
- Wenn das Ausbleichen in der Farbmischung vermieden werden soll, d.h. Maximierung der Farbintensität während des Übergangs, sind die Oklch (und älteren LCH)-Farbräume gut geeignet.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software, die sRGB verwendet, nachahmen müssen. Der sRGB-Farbraum ist weder linear-light noch visuell gleichmäßig und führt zu schlechteren Ergebnissen wie übermäßig dunklen oder gräulich gemischten Farben.

### Farbinterpolationsmethode

Die {{CSSXref("&lt;color-interpolation-method&gt;")}} spezifiziert, welche Interpolationsmethode zum Mischen der Farben verwendet werden soll. Sie besteht aus dem Schlüsselwort `in` und dem Farbraum, in dem die Farben gemischt werden sollen.
Der Farbraum muss einer der verfügbaren Farbräume sein, die im [formalen Syntax](#formale_syntax) aufgelistet sind. Abhängig vom verwendeten Farbraum können Sie optional die Farbrichtung entlang eines längeren oder kürzeren Pfades angeben.

Die [`<rectangular-color-space>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) Kategorie beinhaltet {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.

Die `<polar-color-space>` Kategorie beinhaltet [`hsl`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/de/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/de/docs/Web/CSS/Reference/Values/color_value/lch), und [`oklch`](/de/docs/Web/CSS/Reference/Values/color_value/oklch). Mit diesen können Sie optional den Farbraumnamen mit einer {{CSSXref("&lt;hue-interpolation-method&gt;")}} fortsetzen. Dieser Wert ist standardmäßig `shorter hue`, kann jedoch auch auf `longer hue`, `increasing hue` oder `decreasing hue` gesetzt werden.

### Farbprozentwerte

Jede Farbe kann mit einem `<percentage>` Wert zwischen `0%` und `100%` deklariert werden, der die Menge der entsprechenden Farbe angibt, die gemischt werden soll. Die Prozentwerte werden normalisiert, wenn der Gesamtwert der deklarierten Prozentwerte nicht `100%` entspricht.

Wenn zwei Farben gemischt werden, werden die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) wie folgt normalisiert:

- Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
- Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
- Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
- Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
- Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsresultate sind.
  - Wenn `p1 + p2 < 100%`, wird ein Alpha-Multiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ähnelt dem Mischen mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), mit Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mischen zweier Farben

Dieses Beispiel zeigt das Mischen zweier Farben, Rot `#a71e14` bei unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto roter und weniger weiß ist die resultierende Farbe.

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

Die `color-mix()`-Funktion wird verwendet, um den Prozentsatz von Rot schrittweise bis zu 100% zu erhöhen. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, selbst wenn die vom Entwickler gesetzten Werte nicht 100% ergeben. In diesem Beispiel wird, da nur einer Farbe ein Prozentsatz zugewiesen ist, der anderen Farbe implizit ein Prozentsatz gegeben, so dass der kombinierte Gesamtwert 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner der Farben ein Prozentsatz zugewiesen ist, beträgt der Standardwert beider 50%.

### Hinzufügen von Transparenz

Dieses Beispiel demonstriert die Verwendung der `color-mix()`-Funktion, um einem Farbton Transparenz hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) gemischt wird.

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

Die `color-mix()`-Funktion wird verwendet, um den Prozentsatz von `red` schrittweise zu erhöhen, wobei `red` mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--base` auf dem {{cssxref(":root")}}-Element deklariert wird. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz, was eine resultierende Farbe erzeugt, die halb so undurchsichtig ist wie die `--base`-Farbe. Wir fügen einen gestreiften Hintergrund auf das {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()`-Funktion verwendet werden, um jeder Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alphakanalwert < 1). Die `color-mix()`-Funktion kann jedoch nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Verwenden Sie hierfür eine [relative Farbe](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) mit einer CSS [Farb-Funktion](/de/docs/Web/CSS/Guides/Colors#functions). Relative Farben können den Wert jedes Farbkanals ändern, einschließlich der Erhöhung des Alphakanals einer Farbe, um sie vollständig undurchsichtig zu machen.

### Verwendung der Farbtoninterpolation in color-mix()

Dieses Beispiel demonstriert die in der `color-mix()` Funktion verfügbaren Farbtoninterpolationsmethoden. Bei der Verwendung von Farbton-[Interpolation](/de/docs/Web/CSS/Reference/Values/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der zu mischenden Farben. Der Wert wird unterschiedlich sein, je nachdem welche Route um den Farbkreis gewählt wird.

Für weitere Informationen sehen Sie {{cssxref("&lt;hue-interpolation-method&gt;")}}.

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

Die `shorter hue` Interpolationsmethode nimmt die kürzere Route um den Farbkreis, während die `longer hue` Interpolationsmethode die längere Route nimmt. Mit `increasing hue` beginnt die Route mit steigenden Werten. Mit `decreasing hue` verringert sich der Wert. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Serie von `lch()` Zwischenfarben zu erzeugen, die sich basierend auf der um den Farbkreis genommenen Route unterscheiden. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH-Farbtonwerten von ungefähr 41 Grad, 301 Grad und 100 Grad.

Um den Codeaufwand zu reduzieren, verwendeten wir [CSS-benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) sowohl für die Farben als auch für die Interpolationsmethode und setzten unterschiedliche Werte für jedes {{htmlelement("ul")}}.

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

Mit `longer hue` sind die Inkremente oder Dekremente zwischen den Farben immer gleich groß oder größer als bei `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbtonwertänderung wichtiger ist als der Abstand zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [CSS relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
