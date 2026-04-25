---
title: "`box-pack` CSS property"
short-title: box-pack
slug: Web/CSS/Reference/Properties/box-pack
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexiblen Box Layout Moduls und wurde durch einen neueren Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`-moz-box-pack`** und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS) Eigenschaften legen fest, wie ein `-moz-box` oder `-webkit-box` seine Inhalte in der Richtung seines Layouts anordnet. Die Wirkung ist nur sichtbar, wenn zusätzlicher Platz in der Box vorhanden ist.

Die Richtung des Layouts hängt von der Orientierung des Elements ab: horizontal oder vertikal.

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

Die `box-pack`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Die Box packt Inhalte am Anfang und lässt zusätzlichen Raum am Ende frei.
- `center`
  - : Die Box packt Inhalte in der Mitte und teilt den zusätzlichen Raum gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Die Box packt Inhalte am Ende und lässt zusätzlichen Raum am Anfang frei.
- `justify`
  - : Der Raum wird gleichmäßig zwischen den einzelnen Kindern aufgeteilt, ohne dass zusätzlicher Raum vor dem ersten Kind oder nach dem letzten Kind verbleibt. Wenn es nur ein Kind gibt, wird der Wert behandelt, als wäre er `start`.

## Hinweise

Der Rand der Box, der für Packzwecke als _Anfang_ bezeichnet wird, hängt von der Orientierung und der Richtung der Box ab:

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

Der Rand gegenüber dem Anfang wird als _Ende_ bezeichnet.

Wenn die Packung mit dem `pack` Attribut des Elements gesetzt wird, wird der Stil ignoriert.

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

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-align")}}
