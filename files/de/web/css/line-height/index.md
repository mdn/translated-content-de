---
title: line-height
slug: Web/CSS/line-height
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Die **`line-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe einer Linienbox in horizontalen [Schreibmodi](/de/docs/Web/CSS/writing-mode#vertical-rl) fest. In vertikalen Schreibmodi legt sie die Breite einer Linienbox fest. Sie wird häufig verwendet, um den Abstand zwischen Textzeilen zu setzen. Bei Block-Elementen in horizontalen Schreibmodi gibt sie die bevorzugte Höhe der Linienboxen innerhalb des Elements an, und bei nicht-{{Glossary("Replaced_elements", "ersetzten")}} Inline-Elementen gibt sie die Höhe an, die zur Berechnung der Linienbox-Höhe verwendet wird.

{{InteractiveExample("CSS Demo: line-height")}}

```css interactive-example-choice
line-height: normal;
```

```css interactive-example-choice
line-height: 2.5;
```

```css interactive-example-choice
line-height: 3em;
```

```css interactive-example-choice
line-height: 150%;
```

```css interactive-example-choice
line-height: 32px;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    Far out in the uncharted backwaters of the unfashionable end of the western
    spiral arm of the Galaxy lies a small unregarded yellow sun.
  </div>
</section>
```

```css interactive-example
#example-element {
  font-family: Georgia, sans-serif;
  max-width: 200px;
}
```

## Syntax

```css
/* Keyword value */
line-height: normal;

/* Unitless values: use this number multiplied
by the element's font size */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: revert;
line-height: revert-layer;
line-height: unset;
```

Die `line-height` Eigenschaft wird als einer der folgenden Werte angegeben:

- eine `<number>`
- eine `<length>`
- ein `<percentage>`
- das Schlüsselwort `normal`.

### Werte

- `normal`
  - : Hängt vom Benutzeragenten ab. Desktop-Browser (einschließlich Firefox) verwenden einen Standardwert von ungefähr **`1.2`**, abhängig von der `font-family` des Elements.
- `<number>` (einheitslos)
  - : Der verwendete Wert ist dieser einheitslose {{cssxref("&lt;number&gt;")}} multipliziert mit der eigenen Schriftgröße des Elements. Der berechnete Wert ist derselbe wie der angegebene `<number>`. In den meisten Fällen **ist dies die bevorzugte Methode**, um `line-height` festzulegen und unerwartete Ergebnisse aufgrund von Vererbung zu vermeiden.
- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird in die Berechnung der Linienbox-Höhe einbezogen. Werte in **em**-Einheiten können unerwartete Ergebnisse liefern (siehe untenstehendes Beispiel).
- `<percentage>`
  - : Relativ zur Schriftgröße des Elements selbst. Der berechnete Wert ist dieser {{cssxref("&lt;percentage&gt;")}} multipliziert mit der berechneten Schriftgröße des Elements. **Prozentualer** Werte können unerwartete Ergebnisse liefern (siehe das zweite Beispiel unten).

## Barrierefreiheit

Verwenden Sie einen Mindestwert von `1.5` für `line-height` für Hauptabsatzinhalte. Dies hilft Menschen mit niedrigem Sehvermögen sowie Menschen mit kognitiven Bedenken wie Legasthenie. Wenn die Seite vergrößert wird, um die Textgröße zu erhöhen, stellt die Verwendung eines einheitslosen Wertes sicher, dass die Zeilenhöhe proportional skaliert wird.

[W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

```css
/* All rules below have the same resultant line height */

/* number/unitless */
div {
  line-height: 1.2;
  font-size: 10pt;
}

/* length */
div {
  line-height: 1.2em;
  font-size: 10pt;
}

/* percentage */
div {
  line-height: 120%;
  font-size: 10pt;
}

/* font shorthand */
div {
  font:
    10pt/1.2 Georgia,
    "Bitstream Charter",
    serif;
}
```

Es ist oft praktischer, `line-height` bei Verwendung der {{cssxref("font")}} Kurzform wie oben gezeigt festzulegen, aber dies erfordert, dass die `font-family`-Eigenschaft ebenfalls angegeben wird.

### Bevorzugung einheitlicher Zahlen für line-height-Werte

Dieses Beispiel zeigt, warum es besser ist, {{cssxref("&lt;number&gt;")}}-Werte anstelle von {{cssxref("&lt;length&gt;")}}-Werten zu verwenden. Wir werden zwei {{HTMLElement("div")}}-Elemente verwenden. Das erste Div, mit dem grünen Rand, nutzt einen einheitslosen `line-height`-Wert. Das zweite Div, mit dem roten Rand, verwendet einen `line-height`-Wert, der in `em`s definiert ist.

#### HTML

```html
<div class="box green">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  Length and percentage line-heights have poor inheritance behavior.
</div>

<div class="box red">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  Length and percentage line-heights have poor inheritance behavior
</div>

<!-- The first <h1> line-height is calculated from its own font-size   (30px × 1.1) = 33px -->
<!-- The second <h1> line-height results from the red div's font-size  (15px × 1.1) = 16.5px, probably not what you want -->
```

#### CSS

```css
.green {
  line-height: 1.1;
  border: solid limegreen;
}

.red {
  line-height: 1.1em;
  border: solid red;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}
```

#### Ergebnis

{{EmbedLiveSample('Prefer_unitless_numbers_for_line-height_values', 600, 200)}}

### Abstand zwischen Linien in vertikalen Schreibmodi

Die `line-height` Eigenschaft kann verwendet werden, um den Abstand zwischen vertikalen Linien in vertikalen Schreibmodi anzupassen.

```html hidden
<div class="haiku">
  古池や蛙飛び込む水の音<br />
  ふるいけやかわずとびこむみずのおと<br />
  富士の風や扇にのせて江戸土産<br />
  ふじのかぜやおうぎにのせてえどみやげ<br />
</div>

<div class="haiku wide">
  古池や蛙飛び込む水の音<br />
  ふるいけやかわずとびこむみずのおと<br />
  富士の風や扇にのせて江戸土産<br />
  ふじのかぜやおうぎにのせてえどみやげ<br />
</div>
```

```css
.haiku {
  border: 1px solid;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: wheat;

  writing-mode: vertical-rl;
}

.wide {
  line-height: 2;
}
```

#### Ergebnis

{{EmbedLiveSample('Space between lines in vertical writing modes', '100%', 650)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("font")}}, {{Cssxref("font-size")}}
- {{Glossary("Leading", "Durchschuss")}}
