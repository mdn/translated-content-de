---
title: line-height
slug: Web/CSS/line-height
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`line-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe eines Linienkastens in horizontalen [Schreibmodi](/de/docs/Web/CSS/writing-mode#vertical-rl) fest. In vertikalen Schreibmodi bestimmt sie die Breite eines Linienkastens. Sie wird häufig verwendet, um den Abstand zwischen Textzeilen zu setzen. Bei Block-Level-Elementen in horizontalen Schreibmodi spezifiziert sie die bevorzugte Höhe von Linienkästen innerhalb des Elements, und bei nicht-[ersetzten](/de/docs/Web/CSS/Replaced_element) Inline-Elementen legt sie die Höhe fest, die zur Berechnung der Linienkastenhöhe verwendet wird.

{{EmbedInteractiveExample("pages/css/line-height.html")}}

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

Die `line-height` Eigenschaft wird wie folgt spezifiziert:

- ein `<number>`
- eine `<length>`
- ein `<percentage>`
- das Schlüsselwort `normal`.

### Werte

- `normal`
  - : Hängt vom Benutzeragenten ab. Desktop-Browser (einschließlich Firefox) verwenden einen Standardwert von ungefähr **`1.2`**, abhängig von der `font-family` des Elements.
- `<number>` (ohne Einheit)
  - : Der verwendete Wert ist dieser einheitslose {{cssxref("&lt;number&gt;")}}, multipliziert mit der eigenen Schriftgröße des Elements. Der berechnete Wert ist derselbe wie der angegebene `<number>`. In den meisten Fällen ist dies **die bevorzugte Methode**, um `line-height` festzulegen und unerwartete Ergebnisse durch Vererbung zu vermeiden.
- `<length>`
  - : Die angegebene {{cssxref("&lt;length&gt;")}} wird bei der Berechnung der Linienkastenhöhe verwendet. Werte, die in **em** Einheiten angegeben sind, können unerwartete Ergebnisse erzeugen (siehe untenstehendes Beispiel).
- `<percentage>`
  - : Relativ zur Schriftgröße des Elements selbst. Der berechnete Wert ist dieser {{cssxref("&lt;percentage&gt;")}}, multipliziert mit der berechneten Schriftgröße des Elements. **Prozent**-Werte können unerwartete Ergebnisse erzeugen (siehe zweites Beispiel unten).

## Zugänglichkeit

Verwenden Sie einen Mindestwert von `1.5` für `line-height` für Hauptabsatzinhalte. Dies wird Menschen mit Sehschwächen sowie Personen mit kognitiven Bedenken wie Legasthenie helfen. Wenn die Seite vergrößert wird, um die Textgröße zu erhöhen, stellt die Verwendung eines einheitslosen Wertes sicher, dass die Zeilenhöhe proportional skaliert wird.

[W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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
    10pt/1.2 Georgia,
    "Bitstream Charter",
    serif;
}
```

Es ist oft bequemer, `line-height` mit der {{cssxref("font")}} Kurznotation wie oben gezeigt festzulegen, aber dies erfordert, dass die `font-family` Eigenschaft auch angegeben wird.

### Bevorzugen Sie einheitslose Zahlen für line-height Werte

Dieses Beispiel zeigt, warum es besser ist {{cssxref("&lt;number&gt;")}} Werte anstelle von {{cssxref("&lt;length&gt;")}} Werten zu verwenden. Wir werden zwei {{HTMLElement("div")}} Elemente verwenden. Das erste Div, mit dem grünen Rahmen, verwendet einen einheitslosen `line-height` Wert. Das zweite Div, mit dem roten Rahmen, verwendet einen `line-height` Wert in `em`s definiert.

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

Die `line-height` Eigenschaft kann verwendet werden, um den Abstand zwischen vertikalen Zeilen in vertikalen Schreibmodi anzupassen.

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
