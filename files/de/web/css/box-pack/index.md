---
title: box-pack
slug: Web/CSS/box-pack
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls und wurde durch einen neueren Standard ersetzt. Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`-moz-box-pack`** und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS) Eigenschaften geben an, wie eine `-moz-box` oder `-webkit-box` ihre Inhalte in der Richtung ihres Layouts packt. Der Effekt ist nur sichtbar, wenn zusätzlicher Platz in der Box vorhanden ist.

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

Die `box-pack`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Die Box packt Inhalte am Anfang und lässt zusätzlichen Platz am Ende.
- `center`
  - : Die Box packt Inhalte in der Mitte und teilt den zusätzlichen Platz gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Die Box packt Inhalte am Ende und lässt zusätzlichen Platz am Anfang.
- `justify`
  - : Der Raum wird gleichmäßig zwischen den einzelnen Kindern verteilt, wobei kein zusätzlicher Raum vor dem ersten Kind oder nach dem letzten Kind platziert wird. Wenn es nur ein Kind gibt, wird der Wert behandelt, als wäre es `start`.

## Anmerkungen

Der Rand der Box, der für Packzwecke als _start_ bezeichnet wird, hängt von der Ausrichtung und Richtung der Box ab:

- Für horizontale Elemente ist der _start_ der obere Rand.
- Für vertikale Elemente ist der _start_ der linke Rand.

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

Der dem Start gegenüberliegende Rand wird als _end_ bezeichnet.

Wenn das Packen über das `pack`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

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
