---
title: vertical-align
slug: Web/CSS/Reference/Properties/vertical-align
l10n:
  sourceCommit: 26e03490d14803dc2ae8b85ec5c0c2b26d6b50d1
---

Die **`vertical-align`** [CSS](/de/docs/Web/CSS) Kurzschreibweise setzt die vertikale Ausrichtung einer Inline-, Inline-Block- oder Tabellenzellen-Box.

## Bestimmende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("alignment-baseline")}}
- {{cssxref("baseline-source")}}
- {{cssxref("baseline-shift")}}

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

- Um die Box eines Inline-Elements innerhalb seiner umgebenden Linienbox vertikal auszurichten. Zum Beispiel könnte sie verwendet werden, um [ein Bild in einer Textzeile vertikal zu positionieren](#vertikale_ausrichtung_in_einer_linienbox).
- Um [den Inhalt einer Zelle in einer Tabelle](#vertikale_ausrichtung_in_einer_tabellenzelle) vertikal auszurichten.

Verwenden Sie diese Kurzschreibweise (`vertical-align`) anstelle der entsprechenden Langschreibweise, es sei denn, Sie müssen sie unabhängig kaskadieren oder (bei SVG-Elementen) ältere SVG-Implementierungen unterstützen.

Beachten Sie, dass `vertical-align` nur für Inline-, Inline-Block- und Tabellenzellen-Elemente gilt: Sie können es nicht verwenden, um {{Glossary("Block-level_content", "Block-Level-Elemente")}} vertikal auszurichten.

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
  - : Richtet die Grundlinie des Elements an der Grundlinie seines Elternteils aus. Die Grundlinie einiger {{Glossary("replaced_elements", "ersetzter Elemente")}}, wie {{HTMLElement("textarea")}}, ist in der HTML-Spezifikation nicht festgelegt, was bedeutet, dass ihr Verhalten mit diesem Schlüsselwort zwischen verschiedenen Browsern variieren kann.
- `sub`
  - : Richtet die Grundlinie des Elements an der Tiefstelllinien-Basislinie seines Elternteils aus.
- `super`
  - : Richtet die Grundlinie des Elements an der Hochstelllinien-Basislinie seines Elternteils aus.
- `text-top`
  - : Richtet die Oberkante des Elements an der Oberkante des Schrift des Elternelements aus.
- `text-bottom`
  - : Richtet die Unterkante des Elements an der Unterkante des Schrift des Elternelements aus.
- `middle`
  - : Richtet die Mitte des Elements an der Grundlinie plus der halben x-Höhe des Elternteils aus.
- {{cssxref("&lt;length&gt;")}}
  - : Richtet die Grundlinie des Elements in der angegebenen Länge über der Grundlinie seines Elternelements aus. Ein negativer Wert ist erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Richtet die Grundlinie des Elements auf den angegebenen Prozentsatz über der Grundlinie seines Elternelements aus, wobei der Wert ein Prozentsatz der {{Cssxref("line-height")}}-Eigenschaft ist. Ein negativer Wert ist erlaubt.

#### Linien-relative Werte

Die folgenden Werte richten das Element relativ zur gesamten Zeile vertikal aus:

- `top`
  - : Richtet die Oberkante des Elements und seiner Nachkommen an der Oberkante der gesamten Zeile aus.
- `bottom`
  - : Richtet die Unterkante des Elements und seiner Nachkommen an der Unterkante der gesamten Zeile aus.

Für Elemente, die keine Grundlinie haben, wird stattdessen der untere Rand verwendet.

### Werte für Tabellenzellen

- `baseline` (und `sub`, `super`, `text-top`, `text-bottom`, `<length>`, und `<percentage>`)
  - : Richtet die Grundlinie der Zelle an der Grundlinie aller anderen Zellen in der Reihe aus, die grundlinienausgerichtet sind.
- `top`
  - : Richtet die obere Auffüllrandkante der Zelle an der Oberkante der Reihe aus.
- `middle`
  - : Zentriert die Auffüllbox der Zelle innerhalb der Reihe.
- `bottom`
  - : Richtet die untere Auffüllrandkante der Zelle an der Unterkante der Reihe aus.

Negative Werte sind erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

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

### Vertikale Ausrichtung in einer Linienbox

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

In diesem Beispiel haben wir eine Tabelle mit einer einzigen Zeile, die sechs Zellen enthält. Die Zeile setzt `vertical-align` als Standardwert auf `bottom`.

- Die ersten vier Zellen setzen ihre eigenen `vertical-align`-Werte, die den Wert der Zeile überschreiben.
- Die fünfte Zelle setzt keinen `vertical-align`-Wert, daher erbt sie den Wert der Zeile.

Die sechste Zelle wird nur verwendet, um sicherzustellen, dass die Zellen hoch genug sind, um die Wirkung zu sehen.

#### HTML

```html
<table>
  <tbody>
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
  </tbody>
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

- [Typische Anwendungsfälle von Flexbox, Abschnitt "Element zentrieren"](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](https://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: All You Need To Know](https://christopheraue.net/design/vertical-align)
