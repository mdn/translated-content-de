---
title: line-height
slug: Web/CSS/line-height
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Die **`line-height`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Höhe einer Zeilenbox in horizontalen [Schreibmodi](/de/docs/Web/CSS/writing-mode#vertical-rl) fest. In vertikalen Schreibmodi bestimmt sie die Breite einer Zeilenbox. Sie wird häufig verwendet, um den Abstand zwischen Textzeilen zu setzen. Bei Block-Elementen in horizontalen Schreibmodi gibt sie die bevorzugte Höhe der Zeilenboxen innerhalb des Elements an, und bei nicht-{{Glossary("Replaced_elements", "ersetzten")}} Inline-Elementen gibt sie die Höhe an, die zur Berechnung der Zeilenbox-Höhe verwendet wird.

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
  font-family: "Georgia", serif;
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

Die `line-height`-Eigenschaft kann auf folgende Weise angegeben werden:

- eine `<number>`
- eine `<length>`
- ein `<percentage>`
- das Schlüsselwort `normal`.

### Werte

- `normal`
  - : Hängt vom Benutzeragenten ab. Desktop-Browser (einschließlich Firefox) verwenden einen Standardwert von ungefähr **`1.2`**, abhängig von der `font-family` des Elements.
- `<number>` (ohne Einheit)
  - : Der verwendete Wert ist dieser einheitenlose {{cssxref("&lt;number&gt;")}} multipliziert mit der eigenen Schriftgröße des Elements. Der berechnete Wert ist der gleiche wie der angegebene `<number>`. In den meisten Fällen ist **dies die bevorzugte Methode**, um `line-height` zu setzen und unerwartete Ergebnisse aufgrund von Vererbung zu vermeiden.
- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird bei der Berechnung der Zeilenbox-Höhe verwendet. Angaben in **em**-Einheiten können unerwartete Ergebnisse erzeugen (siehe Beispiel unten).
- `<percentage>`
  - : Relativ zur Schriftgröße des Elements selbst. Der berechnete Wert ist dieses {{cssxref("&lt;percentage&gt;")}} multipliziert mit der berechneten Schriftgröße des Elements. **Prozentual** angegebene Werte können unerwartete Ergebnisse erzeugen (siehe zweites Beispiel unten).

## Barrierefreiheit

Verwenden Sie für den `line-height`-Wert bei Fließtexten einen Mindestwert von `1.5`. Dies wird Menschen mit Sehbeeinträchtigungen sowie Menschen mit kognitiven Anliegen wie Legasthenie helfen. Wenn die Seite vergrößert wird, um die Schriftgröße zu erhöhen, sorgt ein wertloser Wert dafür, dass die Zeilenhöhe proportional skaliert.

[W3C Understanding WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

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
    10pt/1.2 "Bitstream Charter",
    "Georgia",
    serif;
}
```

Es ist oft praktischer, die `line-height`-Eigenschaft mit der {{cssxref("font")}}-Kurzform zu setzen, wie oben gezeigt, allerdings muss dabei die `font-family`-Eigenschaft ebenfalls spezifiziert sein.

### Bevorzugen Sie wertlose Zahlen für line-height-Werte

Dieses Beispiel zeigt, warum es besser ist, {{cssxref("&lt;number&gt;")}}-Werte statt {{cssxref("&lt;length&gt;")}}-Werte zu verwenden. Wir verwenden zwei {{HTMLElement("div")}}-Elemente. Das erste Div mit dem grünen Rahmen verwendet einen wertlosen `line-height`-Wert. Das zweite Div mit dem roten Rahmen verwendet einen in `em` definierten `line-height`-Wert.

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

### Abstand zwischen Zeilen in vertikalen Schreibmodi

Die `line-height`-Eigenschaft kann verwendet werden, um den Abstand zwischen vertikalen Linien in vertikalen Schreibmodi anzupassen.

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
