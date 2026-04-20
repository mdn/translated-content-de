---
title: "`box-align` CSS property"
short-title: box-align
slug: Web/CSS/Reference/Properties/box-align
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Module-Entwurfs und wurde durch eine neuere Norm ersetzt.

Die **`box-align`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element seine Inhalte quer zur Anordnung in einer senkrechten Richtung ausrichtet. Die Wirkung der Eigenschaft ist nur sichtbar, wenn im Box-Modell zusätzlicher Platz vorhanden ist.

Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die Ausrichtungsrichtung hängt von der Orientierung des Elements ab: horizontal oder vertikal.

## Syntax

```css
/* Keyword values */
box-align: start;
box-align: center;
box-align: end;
box-align: baseline;
box-align: stretch;

/* Global values */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

Die `box-align` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `start`
  - : Die Box richtet die Inhalte am Anfang aus und lässt zusätzlichen Platz am Ende.
- `center`
  - : Die Box richtet die Inhalte in der Mitte aus und verteilt den zusätzlichen Platz gleichmäßig zwischen Anfang und Ende.
- `end`
  - : Die Box richtet die Inhalte am Ende aus und lässt zusätzlichen Platz am Anfang.
- `baseline`
  - : Die Box richtet die Baselines der Inhalte aus (Ausrichtung des Textes). Dies gilt nur, wenn die Orientierung der Box horizontal ist.
- `stretch`
  - : Die Box dehnt die Inhalte so, dass kein zusätzlicher Platz in der Box vorhanden ist.

## Hinweise

Die Kante der Box, die als _Anfang_ für Ausrichtungszwecke bezeichnet wird, hängt von der Orientierung der Box ab:

- Für horizontale Elemente ist der _Anfang_ die obere Kante.
- Für vertikale Elemente ist der _Anfang_ die linke Kante.

Die Kante gegenüber dem Anfang wird als _Ende_ bezeichnet.

Wenn die Ausrichtung über das `align` Attribut des Elements gesetzt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-align = start | center | end | baseline | stretch`)}}

## Beispiele

### Einstellung der Box-Ausrichtung

```html
<div class="example">
  <p>I will be second from the bottom of div.example, centered horizontally.</p>
  <p>I will be on the bottom of div.example, centered horizontally.</p>
</div>
```

```css
div.example {
  display: box; /* As specified */
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* Make this box taller than the children,
     so there is room for the box-pack */
  height: 400px;

  /* Make this box wider than the children
     so there is room for the box-align */
  width: 300px;

  /* Children should be oriented vertically */
  box-orient: vertical; /* As specified */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* Align children to the horizontal center of this box */
  box-align: center; /* As specified */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* Pack children to the bottom of this box */
  box-pack: end; /* As specified */
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.example > p {
  /* Make children narrower than their parent,
     so there is room for the box-align */
  width: 200px;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-items")}}, {{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-pack")}}
