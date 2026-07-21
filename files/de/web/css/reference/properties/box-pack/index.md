---
title: "`box-pack` CSS property"
short-title: box-pack
slug: Web/CSS/Reference/Properties/box-pack
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexible-Box-Layout-Modul-Entwurfs und wurde durch einen neueren Standard ersetzt. Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`-moz-box-pack`** und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS) Eigenschaften bestimmen, wie ein `-moz-box` oder `-webkit-box` seine Inhalte in der Richtung seines Layouts packt. Der Effekt ist nur sichtbar, wenn im Kasten zusätzlicher Platz vorhanden ist.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `start`
  - : Der Kasten packt Inhalte am Anfang und lässt jeden zusätzlichen Platz am Ende.
- `center`
  - : Der Kasten packt Inhalte in der Mitte und teilt jeden zusätzlichen Platz gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Der Kasten packt Inhalte am Ende und lässt jeden zusätzlichen Platz am Anfang.
- `justify`
  - : Der Platz wird gleichmäßig zwischen jedem Kind aufgeteilt, ohne dass zusätzlicher Platz vor dem ersten Kind oder nach dem letzten Kind platziert wird. Wenn es nur ein Kind gibt, wird der Wert wie `start` behandelt.

## Anmerkungen

Der Rand des Kastens, der für Verpackungszwecke als _Anfang_ bezeichnet wird, hängt von der Ausrichtung und Richtung des Kastens ab:

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

Die dem Anfang gegenüberliegende Kante wird als das _Ende_ bezeichnet.

Wenn das Verpacken mit dem `pack`-Attribut des Elements eingestellt ist, wird der Stil ignoriert.

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
