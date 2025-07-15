---
title: Grid-Wrapper
slug: Web/CSS/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das Grid-Wrapper-Muster ist nützlich, um Grid-Inhalte innerhalb eines zentralen Wrappers auszurichten, während es auch erlaubt, dass Elemente ausbrechen und sich am Rand des enthaltenden Elements oder der Seite ausrichten.

## Anforderungen

Elemente, die auf dem Grid platziert sind, sollten in der Lage sein, sich entweder an einem horizontal zentrierten Wrapper mit maximaler Breite, an den äußeren Rändern des Grids oder an beiden auszurichten.

## Rezept

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

## Gemachte Entscheidungen

Dieses Rezept verwendet die CSS-Grid-Funktion {{cssxref("minmax", "minmax()")}}, um die Rasterspurgrößen in der Eigenschaft {{cssxref("grid-template-columns")}} zu definieren. Für die zentralen Spalten mit einer maximalen Breite können wir einen Mindestwert von `0` oder mehr und einen Maximalwert festlegen, der die maximale Größe angibt, auf die die Spuren der Spalten wachsen werden. Die Verwendung von [relativen](/de/docs/Web/CSS/length#relative_length_units_based_on_font) oder [absoluten](/de/docs/Web/CSS/length#absolute_length_units) {{cssxref("length")}}-Einheiten (Pixel, Ems, Rems) erzeugt eine feste Maximalgröße für den zentralen Wrapper, während die Verwendung von {{cssxref("percentage")}}-Werten oder [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) dazu führt, dass der Wrapper im Hinblick auf seinen Kontext wächst oder schrumpft.

Die äußeren beiden Spalten haben eine Maximalgröße von `1fr`, was bedeutet, dass sie sich jeweils ausdehnen werden, um den verbleibenden verfügbaren Platz im Grid-Container auszufüllen.

## Nützliche Fallbacks oder alternative Methoden

Um das Grid horizontal auf der Seite zu zentrieren, können Sie eine `max-width` zusammen mit linken und rechten `auto`-{{cssxref("margin")}}s festlegen:

```css
.grid {
  max-width: 96vw; /* Limits the width to 96% of the width of the viewport */
  margin: 0 auto; /* horizontally centers the container */
}
```

## Barrierefreiheitsbedenken

Obwohl CSS Grid ermöglicht, Elemente überall (im Rahmen des Möglichen) zu positionieren, ist es wichtig, dass Ihr zugrunde liegendes Markup einer logischen Reihenfolge folgt (siehe [CSS Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) für mehr Details).

## Siehe auch

- {{Cssxref("grid-template-columns")}}-Eigenschaft
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS Grid: Mehr Flexibilität mit `minmax()`](https://css-irl.info/more-flexibility-with-minmax/) (2018)
- [Ausbrechen mit CSS Grid erklärt](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/) (2017)
