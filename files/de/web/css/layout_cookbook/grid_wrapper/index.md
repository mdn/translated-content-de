---
title: Grid-Wrapper
slug: Web/CSS/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

Das Grid-Wrapper-Muster ist nützlich, um Grid-Inhalte innerhalb eines zentralen Wrappers auszurichten, während es auch ermöglicht wird, dass Elemente ausbrechen und sich an den Rand des enthaltenen Elements oder der Seite ausrichten.

## Anforderungen

Elemente, die auf das Grid gesetzt werden, sollten in der Lage sein, sich an einem horizontal zentrierten Wrapper mit maximaler Breite oder an den äußeren Rändern des Grids oder beiden auszurichten.

## Rezept

Klicken Sie auf "Abspielen" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Dieses Rezept verwendet die CSS-Grid-Funktion {{cssxref("minmax", "minmax()")}}, um die Grid-Track-Größen in der Eigenschaft {{cssxref("grid-template-columns")}} zu definieren. Für die zentralen Spalten mit einer maximalen Breite können wir einen Mindestwert von `0` oder höher setzen und einen Höchstwert, der die maximale Größe spezifiziert, auf die sich die Spalten-Track ausdehnen werden. Die Verwendung von [relativen](/de/docs/Web/CSS/length#relative_length_units_based_on_font) oder [absoluten](/de/docs/Web/CSS/length#absolute_length_units) {{cssxref("length")}} Einheiten (Pixel, ems, rems) wird eine feste maximale Größe für den zentralen Wrapper schaffen, während die Verwendung von {{cssxref("percentage")}}-Werten oder [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) den Wrapper ermöglichen wird zu wachsen oder zu schrumpfen, abhängig von seinem Kontext.

Die äußeren zwei Spalten haben eine maximale Größe von `1fr`, was bedeutet, dass sie sich jeweils ausdehnen werden, um den verbleibenden verfügbaren Platz im Grid-Container zu füllen.

## Nützliche Fallbacks oder alternative Methoden

Um das Grid horizontal auf der Seite zu zentrieren, können Sie eine `max-width` zusammen mit linken und rechten `auto` {{cssxref("margin")}}s setzen:

```css
.grid {
  max-width: 96vw; /* Limits the width to 96% of the width of the viewport */
  margin: 0 auto; /* horizontally centers the container */
}
```

## Barrierefreiheitsbedenken

Obwohl CSS-Grid ermöglicht, Elemente irgendwo (im vernünftigen Rahmen) zu positionieren, ist es wichtig, sicherzustellen, dass Ihr zugrunde liegendes Markup einer logischen Reihenfolge folgt (siehe [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) für mehr Details).

## Siehe auch

- {{Cssxref("grid-template-columns")}}-Eigenschaft
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [Mehr Flexibilität mit `minmax()`](https://css-irl.info/more-flexibility-with-minmax/) (2018)
- [Ausbrechen mit CSS-Grid](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/) (2017)
