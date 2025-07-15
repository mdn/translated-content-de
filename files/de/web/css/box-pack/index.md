---
title: box-pack
slug: Web/CSS/box-pack
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout-Moduls und wurde durch einen neueren Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`-moz-box-pack`** und **`-webkit-box-pack`** [CSS](/de/docs/Web/CSS) Eigenschaften spezifizieren, wie eine `-moz-box` oder `-webkit-box` ihre Inhalte in der Richtung ihres Layouts platziert. Dieser Effekt ist nur sichtbar, wenn im Boxmodell Platz übrig bleibt.

Die Layout-Richtung hängt von der Orientierung des Elements ab: horizontal oder vertikal.

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

Die `box-pack` Eigenschaft wird als eines der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `start`
  - : Die Box platziert Inhalte am Anfang, wobei etwaiger zusätzlicher Platz am Ende verbleibt.
- `center`
  - : Die Box platziert Inhalte in der Mitte und teilt den zusätzlichen Platz gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Die Box platziert Inhalte am Ende, wobei etwaiger zusätzlicher Platz am Anfang verbleibt.
- `justify`
  - : Der Platz wird gleichmäßig zwischen jedem Kind aufgeteilt. Kein zusätzlicher Platz wird vor dem ersten oder nach dem letzten Kind eingefügt. Gibt es nur ein Kind, wird der Wert wie `start` behandelt.

## Hinweise

Das Kanten der Box, bezeichnet als _Anfang_ für die Pack-Zwecke, hängt von der Orientierung und Richtung der Box ab:

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

Die Kante gegenüber dem Anfang wird als _Ende_ bezeichnet.

Wenn das Packen mit dem `pack` Attribut des Elements eingestellt ist, wird der Stil ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-pack = start | center | end | justify`)}}

## Beispiele

### Beispiele von box-pack

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-align")}}
