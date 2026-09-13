---
title: "`box-pack` CSS property"
short-title: box-pack
slug: Web/CSS/Reference/Properties/box-pack
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des flexiblen Box-Layout-Moduls von CSS, die durch einen neueren Standard ersetzt wurde. Siehe [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`-moz-box-pack`**- und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS) Eigenschaften geben an, wie eine `-moz-box` oder `-webkit-box` ihren Inhalt in Richtung ihres Layouts packt. Der Effekt dieser Eigenschaft ist nur zu sehen, wenn in der Box zusätzlicher Platz vorhanden ist.

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

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `start`
  - : Die Box packt den Inhalt am Anfang, sodass zusätzlicher Platz am Ende bleibt.
- `center`
  - : Die Box packt den Inhalt in der Mitte, wobei der zusätzliche Platz gleichmäßig zwischen Anfang und Ende verteilt wird.
- `end`
  - : Die Box packt den Inhalt am Ende, sodass zusätzlicher Platz am Anfang bleibt.
- `justify`
  - : Der Platz wird gleichmäßig zwischen den einzelnen Kindern aufgeteilt, ohne dass zusätzlicher Platz vor dem ersten oder nach dem letzten Kind platziert wird. Wenn es nur ein Kind gibt, wird der Wert so behandelt, als ob es `start` wäre.

## Hinweise

Der Rand der Box, der für Packzwecke als _Anfang_ bezeichnet wird, hängt von der Ausrichtung und Richtung der Box ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

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

Der gegenüberliegende Rand des Anfangs wird als _Ende_ bezeichnet.

Wenn das Packen mit dem `pack`-Attribut eines Elements gesetzt wird, wird der Stil ignoriert.

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
