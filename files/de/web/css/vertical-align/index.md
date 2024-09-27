---
title: vertical-align
slug: Web/CSS/vertical-align
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

Die **`vertical-align`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die vertikale Ausrichtung einer Inline-, Inline-Block- oder Tabellenzellenbox fest.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

Die `vertical-align`-Eigenschaft kann in zwei Kontexten verwendet werden:

- Um das Feld eines Inline-Elementes innerhalb seines umgebenden Zeilenkastens vertikal auszurichten. Zum Beispiel könnte es verwendet werden, um [ein Bild innerhalb einer Textzeile vertikal zu positionieren](#vertikale_ausrichtung_in_einem_zeilenkasten).
- Um [den Inhalt einer Zelle in einer Tabelle](#vertikale_ausrichtung_in_einer_tabellenzelle) vertikal auszurichten.

Beachten Sie, dass `vertical-align` nur auf Inline-, Inline-Block- und Tabellenzellen-Elemente angewendet werden kann: Sie können es nicht verwenden, um [Block-Elemente](/de/docs/Glossary/Block-level_content) vertikal auszurichten.

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

#### Werte relativ zum Elternelement

Diese Werte richten das Element relativ zu seinem Elternelement vertikal aus:

- `baseline`
  - : Richtet die Basislinie des Elements an der Basislinie seines Elternelements aus. Die Basislinie einiger [Replaced Elemente](/de/docs/Web/CSS/Replaced_element), wie {{HTMLElement("textarea")}}, ist nicht durch die HTML-Spezifikation festgelegt, was bedeutet, dass sich das Verhalten dieses Schlüsselwortes je nach Browser unterscheiden kann.
- `sub`
  - : Richtet die Basislinie des Elements an der Basislinie des Hochstellers seines Elternelements aus.
- `super`
  - : Richtet die Basislinie des Elements an der Basislinie des Tiefstellers seines Elternelements aus.
- `text-top`
  - : Richtet den oberen Rand des Elements am oberen Rand der Schrift des Elternelements aus.
- `text-bottom`
  - : Richtet den unteren Rand des Elements am unteren Rand der Schrift des Elternelements aus.
- `middle`
  - : Richtet die Mitte des Elements an der Basislinie plus der halben x-Höhe des Elternelements aus.
- {{cssxref("&lt;length&gt;")}}
  - : Richtet die Basislinie des Elements auf die angegebene Länge oberhalb der Basislinie seines Elternelements aus. Ein negativer Wert ist zulässig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Richtet die Basislinie des Elements auf den angegebenen Prozentsatz oberhalb der Basislinie seines Elternelements aus, wobei der Wert ein Prozentsatz der {{Cssxref("line-height")}}-Eigenschaft ist. Ein negativer Wert ist zulässig.

#### Zeilen-relative Werte

Die folgenden Werte richten das Element relativ zur gesamten Zeile vertikal aus:

- `top`
  - : Richtet den oberen Rand des Elements und seiner Nachkommen am oberen Rand der gesamten Zeile aus.
- `bottom`
  - : Richtet den unteren Rand des Elements und seiner Nachkommen am unteren Rand der gesamten Zeile aus.

Für Elemente, die keine Basislinie haben, wird stattdessen der untere Randabstand verwendet.

### Werte für Tabellenzellen

- `baseline` (und `sub`, `super`, `text-top`, `text-bottom`, `<length>`, und `<percentage>`)
  - : Richtet die Basislinie der Zelle an der Basislinie aller anderen Zellen in der Zeile aus, die basislinienausgerichtet sind.
- `top`
  - : Richtet den oberen Auffüllrand der Zelle am oberen Rand der Zeile aus.
- `middle`
  - : Zentriert den Auffüllkasten der Zelle innerhalb der Zeile.
- `bottom`
  - : Richtet den unteren Auffüllrand der Zelle am unteren Rand der Zeile aus.

Negative Werte sind zulässig.

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

{{EmbedLiveSample("Simple_example")}}

### Vertikale Ausrichtung in einem Zeilenkasten

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

In diesem Beispiel haben wir eine Tabelle mit einer einzigen Zeile, die sechs Zellen enthält. Die Zeile setzt `vertical-align` auf `bottom` als Standardwert.

- Die ersten vier Zellen setzen ihre eigenen `vertical-align`-Werte, und diese überschreiben den Zeilenwert.
- Die fünfte Zelle setzt keinen `vertical-align`-Wert, daher erbt sie den Zeilenwert.

Die sechste Zelle dient nur dazu, sicherzustellen, dass die Zellen hoch genug sind, um die Wirkung zu sehen.

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

- [Typische Anwendungsfälle von Flexbox, Abschnitt "Center item"](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Verständnis von `vertical-align`, oder "Wie (Nicht) Inhalte vertikal zentrieren"](https://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: Alles, was Sie wissen müssen](https://christopheraue.net/design/vertical-align)
