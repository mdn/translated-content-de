---
title: line-height
slug: Web/CSS/line-height
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`line-height`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Höhe eines Zeilenblocks in horizontalen [Schreibmodi](/de/docs/Web/CSS/writing-mode#vertical-rl) fest. In vertikalen Schreibmodi legt sie die Breite eines Zeilenblocks fest. Sie wird häufig verwendet, um den Abstand zwischen Textzeilen einzustellen. Bei Block-Elementen in horizontalen Schreibmodi gibt sie die bevorzugte Höhe der Zeilenblöcke innerhalb des Elements an, und bei nicht-[ersetzten](/de/docs/Web/CSS/Replaced_element) Inline-Elementen gibt sie die Höhe an, die zur Berechnung der Zeilenblockhöhe verwendet wird.

{{EmbedInteractiveExample("pages/css/line-height.html")}}

## Syntax

```css
/* Schlüsselwortwert */
line-height: normal;

/* Werte ohne Einheit: verwenden Sie diese Zahl multipliziert
mit der Schriftgröße des Elements */
line-height: 3.5;

/* <length>-Werte */
line-height: 3em;

/* <percentage>-Werte */
line-height: 34%;

/* Globale Werte */
line-height: inherit;
line-height: initial;
line-height: revert;
line-height: revert-layer;
line-height: unset;
```

Die `line-height`-Eigenschaft wird wie folgt angegeben:

- ein `<number>`
- eine `<length>`
- ein `<percentage>`
- das Schlüsselwort `normal`.

### Werte

- `normal`
  - : Hängt vom Benutzeragent ab. Desktop-Browser (einschließlich Firefox) verwenden einen Standardwert von ungefähr **`1.2`**, abhängig von der `font-family` des Elements.
- `<number>` (ohne Einheit)
  - : Der verwendete Wert ist dieser einheitslose {{cssxref("&lt;number&gt;")}}, multipliziert mit der eigenen Schriftgröße des Elements. Der berechnete Wert ist derselbe wie die angegebene `<number>`. In den meisten Fällen **ist dies der bevorzugte Weg**, um `line-height` festzulegen und unerwartete Ergebnisse aufgrund von Vererbung zu vermeiden.
- `<length>`
  - : Der angegebene {{cssxref("&lt;length&gt;")}} wird zur Berechnung der Zeilenblockhöhe verwendet. Werte in **em**-Einheiten können unerwartete Ergebnisse erzeugen (siehe Beispiel unten).
- `<percentage>`
  - : Relativ zur Schriftgröße des Elements selbst. Der berechnete Wert ist dieser {{cssxref("&lt;percentage&gt;")}}, multipliziert mit der berechneten Schriftgröße des Elements. **Prozent**-Werte können unerwartete Ergebnisse erzeugen (siehe das zweite Beispiel unten).

## Barrierefreiheit

Verwenden Sie einen Mindestwert von `1.5` für `line-height` für Hauptabsatzinhalte. Dies hilft Personen mit Sehschwächen sowie Personen mit kognitiven Beeinträchtigungen wie Legasthenie. Wenn die Seite vergrößert wird, um die Schriftgröße zu erhöhen, stellt die Verwendung eines wertlosen Wertes sicher, dass die Zeilenhöhe proportional skaliert wird.

[W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```css
/* Alle untenstehenden Regeln haben dieselbe resultierende Zeilenhöhe */

/* Zahl/einheitslos */
div {
  line-height: 1.2;
  font-size: 10pt;
}

/* Länge */
div {
  line-height: 1.2em;
  font-size: 10pt;
}

/* Prozent */
div {
  line-height: 120%;
  font-size: 10pt;
}

/* Schrift-Verkürzung */
div {
  font:
    10pt/1.2 Georgia,
    "Bitstream Charter",
    serif;
}
```

Es ist oft praktischer, `line-height` mit Hilfe der {{cssxref("font")}}-Verkürzung wie oben gezeigt festzulegen, aber dies erfordert, dass die `font-family`-Eigenschaft ebenfalls angegeben wird.

### Bevorzugen Sie einheitslose Zahlenwerte für line-height

Dieses Beispiel zeigt, warum es besser ist, {{cssxref("&lt;number&gt;")}}-Werte anstelle von {{cssxref("&lt;length&gt;")}}-Werten zu verwenden. Wir werden zwei {{HTMLElement("div")}}-Elemente verwenden. Das erste div mit dem grünen Rand verwendet einen wertlosen `line-height`-Wert. Das zweite div mit dem roten Rand verwendet einen `line-height`-Wert, der in `em`s definiert ist.

#### HTML

```html
<div class="box green">
  <h1>Vermeiden Sie unerwartete Ergebnisse, indem Sie einheitslose line-height verwenden.</h1>
  Längen- und Prozentsatzzeilenhöhen haben ein schlechtes Vererbungsverhalten.
</div>

<div class="box red">
  <h1>Vermeiden Sie unerwartete Ergebnisse, indem Sie einheitslose line-height verwenden.</h1>
  Längen- und Prozentsatzzeilenhöhen haben ein schlechtes Vererbungsverhalten.
</div>

<!-- Die erste <h1>-Zeilenhöhe wird aus ihrer eigenen Schriftgröße berechnet (30px × 1.1) = 33px -->
<!-- Die zweite <h1>-Zeilenhöhe resultiert aus der Schriftgröße des roten div (15px × 1.1) = 16.5px, wahrscheinlich nicht das, was Sie wollen -->
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

Die `line-height`-Eigenschaft kann verwendet werden, um den Abstand zwischen vertikalen Linien in vertikalen Schreibmodi zu anzupassen.

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
