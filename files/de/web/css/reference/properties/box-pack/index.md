---
title: box-pack
slug: Web/CSS/Reference/Properties/box-pack
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglich entworfenen CSS Flexiblen Kastenlayout-Moduls und wurde durch einen neueren Standard ersetzt. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`-moz-box-pack`** und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS)-Eigenschaften geben an, wie ein `-moz-box` oder `-webkit-box` seinen Inhalt in Richtung seines Layouts anordnet. Der Effekt ist nur sichtbar, wenn zusätzlicher Raum im Kasten vorhanden ist.

Die Richtung des Layouts hängt von der Ausrichtung des Elements ab: horizontal oder vertikal.

## Syntax

```css
/* Keyword values */
box-pack: start;
box-pack: center;
box-pack: end;
box-pack: justify;

/* Global values */
box-pack: inherit;
box-pack: initial;
box-pack: unset;
```

Die `box-pack`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `start`
  - : Der Kasten ordnet den Inhalt am Anfang an und lässt jeden zusätzlichen Raum am Ende.
- `center`
  - : Der Kasten ordnet den Inhalt in der Mitte an und teilt jeden zusätzlichen Raum gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Der Kasten ordnet den Inhalt am Ende an und lässt jeden zusätzlichen Raum am Anfang.
- `justify`
  - : Der Raum wird gleichmäßig zwischen jedem Kind verteilt, wobei kein zusätzlicher Raum vor dem ersten Kind oder nach dem letzten Kind platziert wird. Wenn es nur ein Kind gibt, wird der Wert behandelt, als wäre er `start`.

## Hinweise

Der Rand des Kastens, der für Packzwecke als _Anfang_ festgelegt ist, hängt von der Ausrichtung und Richtung des Kastens ab:

- Für horizontale Elemente ist der _Anfang_ der obere Rand.
- Für vertikale Elemente ist der _Anfang_ der linke Rand.

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th><strong>Normal</strong></th>
      <th><strong>Umgekehrt</strong></th>
    </tr>
    <tr>
      <th><strong>Horizontal</strong></th>
      <td>links</td>
      <td>rechts</td>
    </tr>
    <tr>
      <th><strong>Vertikal</strong></th>
      <td>oben</td>
      <td>unten</td>
    </tr>
  </tbody>
</table>

Der dem Anfang entgegenliegende Rand wird als _Ende_ bezeichnet.

Wenn das Packen durch das `pack`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-pack = start | center | end | justify`)}}

## Beispiele

### Beispiele für box-pack

```css
div.example {
  border-style: solid;

  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* Make this box taller than the children,
     so there is room for the box-pack */
  height: 300px;
  /* Make this box wide enough to show the contents
     are centered horizontally */
  width: 300px;

  /* Children should be oriented vertically */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* Align children to the horizontal center of this box */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* Pack children to the bottom of this box */
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.example p {
  /* Make children narrower than their parent,
     so there is room for the box-align */
  width: 200px;
}
```

```html
<div class="example">
  <p>I will be second from the bottom of div.example, centered horizontally.</p>
  <p>I will be on the bottom of div.example, centered horizontally.</p>
</div>
```

{{EmbedLiveSample('Examples', 310, 310)}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-align")}}
