---
title: box-pack
slug: Web/CSS/box-pack
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexbox-Layouts Modulentwurfs und wurde durch einen neueren Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`-moz-box-pack`** und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS) Eigenschaften geben an, wie ein `-moz-box` oder `-webkit-box` seine Inhalte in der Richtung seines Layouts packt. Der Effekt davon ist nur sichtbar, wenn im Kasten zusätzlicher Platz vorhanden ist.

Die Layoutrichtung hängt von der Ausrichtung des Elements ab: horizontal oder vertikal.

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
  - : Der Kasten packt Inhalte am Anfang und lässt zusätzlichen Raum am Ende.
- `center`
  - : Der Kasten packt Inhalte in der Mitte und teilt den zusätzlichen Raum gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Der Kasten packt Inhalte am Ende und lässt zusätzlichen Raum am Anfang.
- `justify`
  - : Der Raum wird gleichmäßig zwischen jedem Kind aufgeteilt, ohne dass zusätzlicher Raum vor dem ersten Kind oder nach dem letzten Kind platziert wird. Wenn es nur ein Kind gibt, wird der Wert behandelt, als wäre es `start`.

## Anmerkungen

Die Kante des Kastens, die für Packzwecke als _Anfang_ festgelegt ist, hängt von der Ausrichtung und Richtung des Kastens ab:

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

Die gegenüberliegende Kante zum Anfang wird als _Ende_ bezeichnet.

Wenn die Packung über das `pack`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

```plain
box-pack =
  start | center | end | justify
```

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

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-align")}}
