---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die funktionale Notation **`color-mix()`** nimmt zwei {{cssxref("&lt;color&gt;")}}-Werte und gibt das Ergebnis der Mischung dieser beiden Farben in einem bestimmten Farbraum und in einer bestimmten Menge zurück.

Die Auswahl des richtigen Farbraums ist wichtig, um die gewünschten Ergebnisse zu erzielen. Abhängig vom Einsatz der Interpolation können bei denselben zu mischenden Farben unterschiedliche Farbräume geeigneter sein.

- Wenn das Ergebnis eines physikalischen Mischens von zwei farbigen Lichtern gewünscht ist, ist der CIE XYZ- oder srgb-linear-Farbraum geeignet, da sie linear in der Lichtintensität sind.
- Wenn Farben gleichmäßig wahrnehmbar verteilt sein sollen (z. B. in einem Farbverlauf), ist der Oklab-Farbraum (und der ältere Lab) geeignet, da sie so konzipiert sind, dass sie wahrnehmbar gleichmäßig sind.
- Wenn ein Ausgrauen bei der Farbmischung vermieden werden soll, das heißt, wenn das Maximieren der Chroma während des gesamten Übergangs gewünscht ist, funktionieren Oklch (und das ältere LCH) gut.
- Verwenden Sie sRGB nur, wenn Sie das Verhalten eines bestimmten Geräts oder einer Software, die sRGB verwendet, nachbilden müssen. Der sRGB-Farbraum ist weder linear im Licht noch wahrnehmbar gleichmäßig und erzeugt schlechtere Ergebnisse wie übermäßig dunkle oder graue Mischung.

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

  - : Gibt an, welche Interpolationsmethode zur Mischung der Farben verwendet werden soll. Sie besteht aus dem `in`-Schlüsselwort gefolgt von einem {{Glossary("color_space", "Farbraumnamen")}}. Die folgenden drei Typen sind verfügbar:

    - `<rectangular-color-space>`: {{Glossary("Color_space#srgb", "`srgb`")}}, {{Glossary("Color_space#srgb-linear", "`srgb-linear`")}}, {{Glossary("Color_space#display-p3", "`display-p3`")}}, {{Glossary("Color_space#a98-rgb", "`a98-rgb`")}}, {{Glossary("Color_space#prophoto-rgb", "`prophoto-rgb`")}}, {{Glossary("Color_space#rec2020", "`rec2020`")}}, {{Glossary("Color_space#cielab_color_spaces", "`lab`")}}, {{Glossary("Color_space#oklab", "`oklab`")}}, {{Glossary("Color_space#xyz_color_spaces", "`xyz`")}}, {{Glossary("Color_space#xyz", "`xyz-d50`")}}, und {{Glossary("Color_space#xyz-d50", "`xyz-d65`")}}.
    - `<polar-color-space>`: [`hsl`](/de/docs/Web/CSS/color_value/hsl), [`hwb`](/de/docs/Web/CSS/color_value/hwb), [`lch`](/de/docs/Web/CSS/color_value/lch), und [`oklch`](/de/docs/Web/CSS/color_value/oklch).
    - custom-color-space: [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident#using_with_color-profile), das sich auf ein benutzerdefiniertes [@color profile](/de/docs/Web/CSS/@color-profile) bezieht.

    > [!NOTE]
    > Wenn Browser {{cssxref("@color-profile")}} unterstützen, können benutzerdefinierte Farbräume unterstützt werden. Der Farbraum muss derzeit einer der verfügbaren Farbräume sein, die im [formal_syntax](#formale_syntax) aufgeführt sind.

- `<color>`

  - : Ein {{CSSXref("&lt;color&gt;")}}-Wert, der gemischt werden soll.

- `<percentage>` {{optional_inline}}

  - : Ein {{CSSXref("&lt;percentage&gt;")}}-Wert zwischen `0%` und `100%`, der angibt, wie viel von der entsprechenden Farbe gemischt werden soll.

    Die beiden Farbanteile (wir bezeichnen sie als `p1` und `p2`) werden wie folgt normalisiert:

    - Wenn sowohl `p1` als auch `p2` weggelassen werden, dann `p1 = p2 = 50%`.
    - Wenn `p1` weggelassen wird, dann `p1 = 100% - p2`.
    - Wenn `p2` weggelassen wird, dann `p2 = 100% - p1`.
    - Wenn `p1 = p2 = 0%`, ist die Funktion ungültig.
    - Wenn `p1 + p2 ≠ 100%`, dann `p1' = p1 / (p1 + p2)` und `p2' = p2 / (p1 + p2)`, wobei `p1'` und `p2'` die Normalisierungsergebnisse sind.
      - Wenn `p1 + p2 < 100%`, wird ein Alphamultiplikator von `p1 + p2` auf die resultierende Farbe angewendet. Dies ist vergleichbar mit dem Mischen von [`transparent`](/de/docs/Web/CSS/named-color#transparent), mit dem Anteil `pt = 100% - p1 - p2`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farbmischer

Das folgende Live-Demo mischt zwei Farben, `color-one` und `color-two`, mit der Funktion `color-mix()`. Die Ausgangsfarben werden außen angezeigt, und die gemischte Farbe wird in der Mitte angezeigt. Sie können die Farben ändern, indem Sie darauf klicken und im erscheinenden Farbwähler eine neue Farbe auswählen. Sie können auch den Prozentsatz jeder Farbe, die in der Mischung enthalten ist, mit den Schiebereglern ändern und den Farbraum über das Dropdown-Menü auswählen.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Mischen von zwei Farben

Dieses Beispiel zeigt, wie zwei Farben gemischt werden: Rot `#a71e14` mit unterschiedlichen Prozentsätzen und Weiß ohne angegebenen Prozentsatz. Je höher der Prozentsatz von `#a71e14` in der Mischung ist, desto röter und weniger weiß wird die Ausgabefarbe.

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

Die Funktion `color-mix()` wird verwendet, um zunehmende Anteile von Rot bis zu 100% hinzuzufügen. Das 6. {{htmlelement("li")}} enthält keinen Prozentsatz für eine der beiden Farben.

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

Der Gesamtwert beider Farben in einer `color-mix()`-Funktion beträgt 100%, auch wenn die vom Entwickler festgelegten Werte nicht das Gesamt von 100% erreichen. In diesem Beispiel wird, da nur einer Farbe ein Prozentsatz zugewiesen ist, der anderen Farbe automatisch ein Prozentsatz zugeteilt, sodass die gesamte Summe 100% ergibt. Im letzten {{htmlelement("li")}}, wo keiner Farbe ein Prozentsatz zugewiesen ist, wird für beide standardmäßig 50% angenommen.

### Hinzufügen von Transparenz

Dieses Beispiel zeigt, wie die Funktion `color-mix()` verwendet wird, um einer Farbe Transparenz hinzuzufügen, indem eine beliebige Farbe mit [`transparent`](/de/docs/Web/CSS/named-color#transparent) gemischt wird.

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

Die Funktion `color-mix()` wird verwendet, um zunehmende Anteile von `red` hinzuzufügen, das mit einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) namens `--base` deklariert ist, die auf {{cssxref(":root")}} definiert ist. Der 6. {{htmlelement("li")}} enthält keinen Prozentsatz und erzeugt eine Ausgabefarbe, die halb so undurchsichtig ist wie die `--base`-Farbe. Wir fügen einen gestreiften Hintergrund auf die {{htmlelement("ul")}} ein, um die Transparenz sichtbar zu machen.

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

Auf diese Weise kann die Funktion `color-mix()` verwendet werden, um jeder Farbe Transparenz hinzuzufügen, selbst wenn die Farbe bereits nicht vollständig deckend ist (mit einem Alphakanalwert < 1). Allerdings kann `color-mix()` nicht verwendet werden, um eine semitransparente Farbe vollständig deckend zu machen. Dafür verwenden Sie eine [relative Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) mit einer CSS-[Farb-Funktion](/de/docs/Web/CSS/CSS_colors#functions). Relative Farben können den Wert eines beliebigen Farbkanals ändern, einschließlich der Erhöhung des Alphakanals einer Farbe, um diese vollständig deckend darzustellen.

### Verwendung von Hue-Interpolation in color-mix()

Dieses Beispiel zeigt die Hue-Interpolationsmethoden der Funktion `color-mix()` auf. Bei Verwendung der Hue-[Interpolation](/de/docs/Web/CSS/color_value#interpolation) liegt der resultierende Farbton zwischen den Farbtonwerten der beiden gemischten Farben. Der Wert unterscheidet sich je nach dem gewählten Weg um den Farbkreis.

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

Die Interpolationsmethode `shorter hue` nimmt den kürzeren Weg um den Farbkreis, während die Methode `longer hue` den längeren Weg nimmt. Mit `increasing hue` beginnt der Weg mit zunehmenden Werten. Bei `decreasing hue` nimmt der Wert ab. Wir mischen zwei {{cssxref("named-color")}}-Werte, um eine Serie von `lch()` Zwischenfarben zu erzeugen, die sich basierend auf der gewählten Route um den Farbkreis unterscheiden. Die gemischten Farben umfassen `red`, `blue` und `yellow` mit LCH-Farbtonwerten von ungefähr 41 Grad, 301 Grad und 100 Grad.

Um Code-Redundanz zu reduzieren, haben wir [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) sowohl für die Farben als auch für die Interpolationsmethode verwendet, wobei unterschiedliche Werte auf jede {{htmlelement("ul")}} gesetzt wurden.

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

Mit `longer hue` werden die Inkremente oder Dekremente zwischen den Farben immer gleich oder größer als bei der Verwendung von `shorter hue` sein. Verwenden Sie `increasing hue` oder `decreasing hue`, wenn die Richtung der Änderung des Farbtonwerts wichtiger ist als der Abstand zwischen den Werten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative colors](/de/docs/Web/CSS/CSS_colors/Relative_colors)
