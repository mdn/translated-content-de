---
title: Grid-Wrapper
slug: Web/CSS/How_to/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das Grid-Wrapper-Muster ist nützlich, um Grid-Inhalte innerhalb eines zentralen Wrappers auszurichten, während es gleichzeitig ermöglicht, dass Elemente ausbrechen und sich an den Rand des enthaltenen Elements oder der Seite ausrichten.

## Anforderungen

Elemente, die im Grid platziert werden, sollten sich an einem horizontal zentrierten Wrapper mit maximaler Breite oder den Außenkanten des Grids oder beidem ausrichten können.

## Rezept

Klicken Sie in den Code-Blöcken unten auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___grid-wrapper-example
<div class="grid">
  <div class="wrapper">
    <p>
      This item aligns to a central “wrapper” – columns that have a maximum
      width.
    </p>
  </div>
  <div class="full-width">
    <p>This item aligns to the edge of the grid container.</p>
  </div>
  <div class="left-edge">
    <p>
      This item aligns to the left edge of the grid container and the right edge
      of the wrapper.
    </p>
  </div>
  <div class="right-wrapper">
    <p>This item aligns to the right edge of the “wrapper” columns.</p>
  </div>
</div>
```

```css live-sample___grid-wrapper-example
body {
  font: 1.2em sans-serif;
}
.grid {
  display: grid;
  grid-template-columns: minmax(20px, 1fr) repeat(6, minmax(0, 60px)) minmax(
      20px,
      1fr
    );
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
}

.grid > * {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

.wrapper {
  grid-column: 2 / -2;
}

.left-edge {
  grid-column: 1 / -2;
}

.right-wrapper {
  grid-column: 4 / -2;
}
```

{{EmbedLiveSample("grid-wrapper-example", "", "550px")}}

## Getroffene Entscheidungen

Dieses Rezept verwendet die CSS-Grid-Funktion {{cssxref("minmax()")}}, um die Größen der Grid-Tracks in der {{cssxref("grid-template-columns")}}-Eigenschaft zu definieren. Für die mittleren Spalten mit einer maximalen Breite können wir einen Mindestwert von `0` oder größer und einen Maximalwert festlegen, der die maximale Größe angibt, zu der die Spalten-Tracks wachsen werden. Die Verwendung relativer oder absoluter {{cssxref("length")}}-Einheiten (Pixel, Ems, Rems) wird eine feste maximale Größe für den zentralen Wrapper schaffen, während bei der Verwendung von {{cssxref("percentage")}}-Werten oder [Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) der Wrapper in Reaktion auf seinen Kontext wächst oder schrumpft.

Die äußeren beiden Spalten haben eine Maximalgröße von `1fr`, was bedeutet, dass sie sich jeweils ausdehnen werden, um den verbleibenden verfügbaren Platz im Grid-Container auszufüllen.

## Nützliche Fallbacks oder alternative Methoden

Um das Grid horizontal auf der Seite zu zentrieren, können Sie eine `max-width` zusammen mit linken und rechten `auto` {{cssxref("margin")}}s setzen:

```css
.grid {
  max-width: 96vw; /* Limits the width to 96% of the width of the viewport */
  margin: 0 auto; /* horizontally centers the container */
}
```

## Barrierefreiheitsanliegen

Obwohl CSS Grid das Positionieren von Elementen an beliebigen (zumindest vernünftigen) Stellen ermöglicht, ist es wichtig sicherzustellen, dass Ihr zugrunde liegendes Markup einer logischen Reihenfolge folgt (siehe [CSS-Rasterlayout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility) für weitere Details).

## Siehe auch

- {{Cssxref("grid-template-columns")}}-Eigenschaft
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Grid: Mehr Flexibilität mit `minmax()`](https://css-irl.info/more-flexibility-with-minmax/) (2018)
- [Mit CSS-Grid ausbrechen](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/) (2017)
