---
title: vertical-align
slug: Web/CSS/vertical-align
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`vertical-align`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt die vertikale Ausrichtung eines Inline-, Inline-Block- oder Tabellenzellen-Elements.

{{InteractiveExample("CSS Demo: vertical-align")}}

```css interactive-example-choice
vertical-align: baseline;
```

```css interactive-example-choice
vertical-align: top;
```

```css interactive-example-choice
vertical-align: middle;
```

```css interactive-example-choice
vertical-align: bottom;
```

```css interactive-example-choice
vertical-align: sub;
```

```css interactive-example-choice
vertical-align: text-top;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p>
    Align the star:
    <img id="example-element" src="/shared-assets/images/examples/star2.png" />
  </p>
</section>
```

```css interactive-example
#default-example > p {
  line-height: 3em;
  font-family: monospace;
  font-size: 1.2em;
  text-decoration: underline overline;
}
```

Die `vertical-align`-Eigenschaft kann in zwei Kontexten verwendet werden:

- Zur vertikalen Ausrichtung des Box-Inhalts eines Inline-Elements innerhalb seiner enthaltenden Zeilenbox. Zum Beispiel könnte sie verwendet werden, um [ein Bild in einer Textzeile vertikal zu positionieren](#vertikale_ausrichtung_in_einer_zeilenbox).
- Zur vertikalen Ausrichtung [des Inhalts einer Zelle in einer Tabelle](#vertikale_ausrichtung_in_einer_tabellenzelle).

Beachten Sie, dass `vertical-align` nur auf Inline-, Inline-Block- und Tabellenzellen-Elemente angewendet werden kann: Sie können es nicht verwenden, um {{Glossary("Block-level_content", "Block-Level-Elemente")}} vertikal auszurichten.

## Syntax

```css
/* Keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

Die `vertical-align`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte für Inline-Elemente

#### Eltern-relative Werte

Diese Werte richten das Element relativ zu seinem Elternelement vertikal aus:

- `baseline`
  - : Richtet die Basislinie des Elements mit der Basislinie seines Elternteils aus. Die Basislinie einiger {{Glossary("replaced_elements", "ersetzter Elemente")}}, wie beispielsweise {{HTMLElement("textarea")}}, wird nicht durch die HTML-Spezifikation definiert, was bedeutet, dass ihr Verhalten mit diesem Schlüsselwort zwischen Browsern variieren kann.
- `sub`
  - : Richtet die Basislinie des Elements mit der Tiefstellung-Basislinie seines Elternteils aus.
- `super`
  - : Richtet die Basislinie des Elements mit der Hochstellung-Basislinie seines Elternteils aus.
- `text-top`
  - : Richtet die Oberseite des Elements mit der Oberseite des Schriftbilds des Elternteils aus.
- `text-bottom`
  - : Richtet die Unterseite des Elements mit der Unterseite des Schriftbilds des Elternteils aus.
- `middle`
  - : Richtet die Mitte des Elements mit der Basislinie plus der halben x-Höhe des Elternteils aus.
- {{cssxref("&lt;length&gt;")}}
  - : Richtet die Basislinie des Elements auf die angegebene Länge über der Basislinie seines Elternteils aus. Ein negativer Wert ist zulässig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Richtet die Basislinie des Elements auf den angegebenen Prozentsatz über der Basislinie seines Elternteils aus, wobei der Wert ein Prozentsatz der {{Cssxref("line-height")}}-Eigenschaft ist. Ein negativer Wert ist zulässig.

#### Zeilen-relative Werte

Die folgenden Werte richten das Element relativ zur gesamten Zeile vertikal aus:

- `top`
  - : Richtet die Oberseite des Elements und seiner Nachfahren mit der Oberseite der gesamten Zeile aus.
- `bottom`
  - : Richtet die Unterseite des Elements und seiner Nachfahren mit der Unterseite der gesamten Zeile aus.

Für Elemente, die keine Basislinie haben, wird stattdessen die untere Randkante verwendet.

### Werte für Tabellzellen

- `baseline` (und `sub`, `super`, `text-top`, `text-bottom`, `<length>` und `<percentage>`)
  - : Richtet die Basislinie der Zelle mit der Basislinie aller anderen Zellen in der Zeile aus, die basislinien-ausgerichtet sind.
- `top`
  - : Richtet die obere Polsterkante der Zelle mit der Oberseite der Zeile aus.
- `middle`
  - : Zentriert die Polsterbox der Zelle innerhalb der Zeile.
- `bottom`
  - : Richtet die untere Polsterkante der Zelle mit der Unterseite der Zeile aus.

Negative Werte sind zulässig.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div>
  An <img src="frame_image.svg" alt="link" width="32" height="32" /> image with
  a default alignment.
</div>
<div>
  An
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-top alignment.
</div>
<div>
  An
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-bottom alignment.
</div>
<div>
  An
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a middle alignment.
</div>
```

#### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

### Vertikale Ausrichtung in einer Zeilenbox

#### HTML

```html-nolint
<p>
top:         <img style="vertical-align: top" src="star.png" alt="star"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="star"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="star"/>
super:       <img style="vertical-align: super" src="star.png" alt="star"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="star"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="star"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="star"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="star"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="star"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="star"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="star"/>
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### Ergebnis

{{EmbedLiveSample("Vertical_alignment_in_a_line_box", '100%', 160, "", "")}}

### Vertikale Ausrichtung in einer Tabellenzelle

In diesem Beispiel haben wir eine Tabelle mit einer einzelnen Zeile, die sechs Zellen enthält. Die Zeile setzt `vertical-align` auf den Standardwert `bottom`.

- Die ersten vier Zellen setzen jeweils ihre eigenen `vertical-align`-Werte, und diese überlagern den Wert der Zeile.
- Die fünfte Zelle setzt keinen `vertical-align`-Wert, sodass sie den Wert der Zeile erbt.

Die sechste Zelle wird nur verwendet, um sicherzustellen, dass die Zellen hoch genug sind, um die Wirkung zu sehen.

#### HTML

```html
<table>
  <tr class="bottom">
    <td class="baseline">baseline</td>
    <td class="top">top</td>
    <td class="middle">middle</td>
    <td>bottom</td>
    <td>Row's style</td>
    <td>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      pretium felis eu sem mattis vulputate.
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}

.bottom {
  vertical-align: bottom;
}

.baseline {
  vertical-align: baseline;
}

.top {
  vertical-align: top;
}

.middle {
  vertical-align: middle;
}
```

#### Ergebnis

{{EmbedLiveSample("Vertical_alignment_in_a_table_cell", '100%', 230, "", "")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Typische Anwendungsfälle von Flexbox, Abschnitt "Element zentrieren"](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Verstehen von `vertical-align` oder "Wie (Nicht) Inhalte vertikal zentrieren"](https://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: Alles, was Sie wissen müssen](https://christopheraue.net/design/vertical-align)
