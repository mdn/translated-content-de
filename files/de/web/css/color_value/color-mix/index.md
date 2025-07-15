---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`color-mix()`** Funktionsnotation nimmt zwei {{cssxref("&lt;color&gt;")}} Werte und gibt das Ergebnis ihrer Mischung in einem gegebenen Farbraum mit einer angegebenen Menge zurück.

Die Wahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Je nach Interpolationsanwendung können verschiedene Farbräume geeigneter sein, selbst wenn dieselben Farben gemischt werden.

- Wenn das Ergebnis einer physikalischen Mischung von zwei farbigen Lichtern gewünscht ist, ist der CIE XYZ oder der srgb-linear Farbraum geeignet, da sie linear in Lichtintensität sind.
- Wenn Farben wahrgenommen gleichmäßig verteilt sein müssen (z.B. in einem Farbverlauf), sind die Oklab Farbräume (und die älteren Lab) geeignet, da sie darauf ausgelegt sind, wahrnehmungsgetreu uniform zu sein.
- Wenn eine Entgrauung beim Mischen von Farben vermieden werden soll, d.h. die Chroma während der gesamten Transition maximiert werden soll, funktionieren Oklch (und die älteren LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software nachahmen müssen, die sRGB verwendet. Der sRGB Farbraum ist weder linear in Licht noch wahrnehmungsgetreu uniform und erzeugt schlechtere Ergebnisse, wie z.B. übermäßig dunkle oder grauliche Mischungen.

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
  - : Gibt an, welche Interpolationsmethode verwendet werden soll, um die Farben zu mischen. Sie besteht aus dem Schlüsselwort `in` gefolgt von einem {{Glossary("color_space", "Farbraum")}} Namen. Die folgenden drei Typen sind verfügbar:
    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - benutzerdefinierter Farbraum: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile) in Bezug auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile)

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, könnten benutzerdefinierte Farbräume unterstützt werden. Derzeit muss der Farbraum einer der verfügbaren Farbräume sein, die im [formal_syntax](#formale_syntax) aufgelistet sind.

- `<color>`
  - : Ein {{CSSXref("&lt;color&gt;")}} Wert zum Mischen.

- `<percentage>` {{optional_inline}}
  - : Ein {{CSSXref("&lt;percentage&gt;")}} Wert zwischen `0%` und `100%`, der angibt, wie viel der entsprechenden Farbe gemischt werden soll.

    Die beiden Farbprozentsätze (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:
    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%`, wird ein Alphamultiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist ähnlich wie das Mischen mit [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit dem Prozentsatz `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farb-Mixer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mit der Funktion `color-mix()`. Die ursprünglichen Farben werden außen gezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und eine neue Farbe mit dem resultierenden Farbwähler auswählen. Sie können auch den Prozentsatz jeder Farbe im Mix mit den Schiebereglern ändern und den Farbraum über das Dropdown-Menü anpassen.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Zwei Farben mischen

Dieses Beispiel demonstriert das Mischen von zwei Farben, Rot `#a71e14` mit unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` gemischt wird, desto rötlicher und weniger weiß wird die Ausgabefarbe.

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von Rot hinzuzufügen, bis zu 100%. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()` Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht insgesamt 100% ergeben. In diesem Beispiel wird, da nur einer der Farben ein Prozentsatz zugewiesen ist, der anderen Farbe implizit ein prozentualer Wert zugewiesen, so dass die kombinierte Gesamtmenge 100% beträgt. Im letzten {{htmlelement("li")}}, bei dem keiner der Farben ein Prozentsatz zugewiesen ist, wird beiden standardmäßig 50% zugewiesen.

### Hinzufügen von Transparenz

Dieses Beispiel zeigt die Verwendung der `color-mix()` Funktion zum Hinzufügen von Transparenz zu einer Farbe durch das Mischen jeder beliebigen Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent).

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

Die `color-mix()` Funktion wird verwendet, um zunehmende Prozentsätze von `red` hinzuzufügen, die mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` deklariert wird, die auf der {{cssxref(":root")}} definiert ist. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz und erzeugt eine Ausgabefarbe, die halb so undurchsichtig ist wie die `--base` Farbe. Wir fügen einen gestreiften Hintergrund auf der {{htmlelement("ul")}} hinzu, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die `color-mix()` Funktion verwendet werden, um jeder Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht undurchsichtig ist (mit einem Alpha-Kanal-Wert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine halbtransparente Farbe vollständig undurchsichtig zu machen. Verwenden Sie dafür eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS [Farb Funktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert jedes Farbkanals ändern, einschließlich der Erhöhung eines Farb-Alpha-Kanals, um die Farbe vollständig undurchsichtig zu machen.

### Verwendung der Farbton-Interpolation in color-mix()

Dieses Beispiel zeigt die Methoden der Farbton-Interpolation, die der `color-mix()`-Funktion zur Verfügung stehen. Bei der Verwendung der Farbton-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert wird je nach Route um den Farbkreis unterschiedlich sein.

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

Die Interpolationsmethode `shorter hue` nimmt die kürzere Route um den Farbkreis, während die Methode `longer hue` den längeren Weg nimmt. Bei `increasing hue` beginnt die Route mit zunehmenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}} Werte, um eine Serie von `lch()` Zwischenfarben zu erzeugen, die sich basierend auf der eingeschlagenen Route um den Farbkreis unterscheiden. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH-Farbtonwerten von ungefähr 41deg, 301deg und 100deg.

Um den Code-Redundanz zu reduzieren, haben wir [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) für beide Farben und für die Interpolationsmethode verwendet und unterschiedliche Werte auf jedem {{htmlelement("ul")}} festgelegt.

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

Mit `longer hue` sind die Schrittweiten zwischen den Farben immer gleich oder größer als bei Verwendung von `shorter hue`. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Farbtonwertänderung wichtiger ist als der Abstand zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
