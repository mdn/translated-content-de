---
title: box-pack
slug: Web/CSS/box-pack
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modulentwurfs und wurde durch einen neueren Standard ersetzt. Weitere Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`-moz-box-pack`**- und **`-webkit-box-pack`**-Eigenschaften von [CSS](/de/docs/Web/CSS) legen fest, wie ein `-moz-box` oder `-webkit-box` seinen Inhalt in der Richtung seines Layouts packt. Der Effekt ist nur sichtbar, wenn im Box-Element zusätzlicher Platz vorhanden ist.

Die Ausrichtung des Layouts hängt von der Ausrichtung des Elements ab: horizontal oder vertikal.

## Syntax

```css
/* Schlüsselwortwerte */
box-pack: start;
box-pack: center;
box-pack: end;
box-pack: justify;

/* Globale Werte */
box-pack: inherit;
box-pack: initial;
box-pack: unset;
```

Die `box-pack`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Die Box packt den Inhalt am Anfang und lässt den zusätzlichen Platz am Ende.
- `center`
  - : Die Box packt den Inhalt in der Mitte und teilt den zusätzlichen Platz gleichmäßig zwischen Anfang und Ende auf.
- `end`
  - : Die Box packt den Inhalt am Ende und lässt den zusätzlichen Platz am Anfang.
- `justify`
  - : Der Raum wird gleichmäßig zwischen den einzelnen Kindern aufgeteilt, ohne dass zusätzlicher Raum vor dem ersten Kind oder nach dem letzten Kind platziert wird. Wenn es nur ein Kind gibt, wird der Wert wie `start` behandelt.

## Anmerkungen

Der Rand der Box, der als _Anfang_ für Packzwecke festgelegt ist, hängt von der Ausrichtung und Richtung der Box ab:

- Für horizontale Elemente ist der _Anfang_ der obere Rand.
- Für vertikale Elemente ist der _Anfang_ der linke Rand.

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th><strong>Normal</strong></th>
      <th><strong>Reverse</strong></th>
    </tr>
    <tr>
      <th><strong>Horizontal</strong></th>
      <td>left</td>
      <td>right</td>
    </tr>
    <tr>
      <th><strong>Vertical</strong></th>
      <td>top</td>
      <td>bottom</td>
    </tr>
  </tbody>
</table>

Der gegenüberliegende Rand des Anfangs ist das _Ende_.

Wenn die Packung über das `pack`-Attribut des Elements gesetzt wird, wird der Stil ignoriert.

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

  /* Diese Box höher machen als die Kinder,
     damit Platz für das box-pack vorhanden ist */
  height: 300px;
  /* Diese Box breit genug machen, um zu zeigen, dass der Inhalt
     horizontal zentriert ist */
  width: 300px;

  /* Kinder sollten vertikal ausgerichtet sein */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* Kinder horizontal in der Mitte dieser Box ausrichten */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* Kinder am unteren Rand dieser Box packen */
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.example p {
  /* Kinder schmaler machen als ihr Elternteil,
     damit Platz für das box-align vorhanden ist */
  width: 200px;
}
```

```html
<div class="example">
  <p>Ich werde der zweite von unten in div.example sein, horizontal zentriert.</p>
  <p>Ich werde am unteren Rand von div.example sein, horizontal zentriert.</p>
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
