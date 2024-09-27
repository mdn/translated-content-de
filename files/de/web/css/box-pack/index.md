---
title: box-pack
slug: Web/CSS/box-pack
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modul-Entwurfs und wurde durch einen neueren Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`-moz-box-pack`** und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS) Eigenschaften bestimmen, wie eine `-moz-box` oder `-webkit-box` ihre Inhalte in der Richtung ihres Layouts anordnet. Der Effekt ist nur sichtbar, wenn zusätzlicher Platz in der Box vorhanden ist.

Die Ausrichtungsrichtung hängt von der Orientierung des Elements ab: horizontal oder vertikal.

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
  - : Die Box ordnet Inhalte am Anfang an und lässt zusätzlichen Platz am Ende.
- `center`
  - : Die Box platziert Inhalte zentriert und teilt zusätzlichen Platz gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Die Box ordnet Inhalte am Ende an und lässt zusätzlichen Platz am Anfang.
- `justify`
  - : Der Platz wird gleichmäßig zwischen den einzelnen Kind-Elementen verteilt, ohne dass zusätzlicher Platz vor dem ersten oder nach dem letzten Kind-Element entsteht. Wenn es nur ein Kind-Element gibt, wird der Wert behandelt, als wäre es `start`.

## Anmerkungen

Die Kante der Box, die als _Anfang_ für die Anordnung dient, hängt von der Orientierung und Richtung der Box ab:

- Bei horizontalen Elementen ist der _Anfang_ die obere Kante.
- Bei vertikalen Elementen ist der _Anfang_ die linke Kante.

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

Wenn die Anordnung über das `pack`-Attribut des Elements festgelegt wird, dann wird der Stil ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-align")}}
