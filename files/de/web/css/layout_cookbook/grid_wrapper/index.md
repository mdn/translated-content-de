---
title: Grid wrapper
slug: Web/CSS/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Das Grid-Wrapper-Muster ist nützlich, um Grid-Inhalte innerhalb eines zentralen Wrappers auszurichten, während es gleichzeitig ermöglicht, dass Elemente ausbrechen und sich an den Rand des enthaltenden Elements oder der Seite ausrichten.

## Anforderungen

Elemente, die im Grid platziert sind, sollten sich entweder an einem horizontal zentrierten `max-width` Wrapper, den äußeren Rändern des Grids oder beidem ausrichten können.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/grid-wrapper.html", '100%', 1100)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/grid-wrapper--download.html)

## Getroffene Entscheidungen

Dieses Rezept verwendet die CSS-Grid-Funktion {{cssxref("minmax", "minmax()")}}, um die Grid-Track-Größen in der Eigenschaft {{cssxref("grid-template-columns")}} zu definieren. Für die zentralen Spalten mit einer maximalen Breite können wir einen Mindestwert von `0` oder größer und einen Maximalwert festlegen, der die maximale Größe angibt, zu der die Spalten-Tracks wachsen werden. Die Verwendung von [relativen](/de/docs/Web/CSS/length#relative_length_units_based_on_font) oder [absoluten](/de/docs/Web/CSS/length#absolute_length_units) {{cssxref("length")}} Einheiten (Pixel, ems, rems) wird eine feste Maximalgröße für den zentralen Wrapper schaffen, während die Verwendung von {{cssxref("percentage")}} Werten oder [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) dazu führt, dass der Wrapper entsprechend seinem Kontext wächst oder schrumpft.

Die äußeren zwei Spalten haben eine maximale Größe von `1fr`, was bedeutet, dass sie jeweils expandieren, um den verbleibenden verfügbaren Raum im Grid-Container auszufüllen.

## Nützliche Fallbacks oder alternative Methoden

Um das Grid horizontal auf der Seite zu zentrieren, können Sie eine `max-width` zusammen mit linken und rechten `auto` {{cssxref("margin")}}s setzen:

```css
.grid {
  max-width: 96vw; /* Limits the width to 96% of the width of the viewport */
  margin: 0 auto; /* horizontally centers the container */
}
```

## Barrierefreiheitsbedenken

Obwohl CSS Grid das Positionieren von Elementen an nahezu jeder Stelle ermöglicht, ist es wichtig, dass Ihr zugrunde liegendes Markup einer logischen Reihenfolge folgt (siehe [CSS Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) für mehr Details).

## Siehe auch

- {{Cssxref("grid-template-columns")}} Eigenschaft
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Grid: Mehr Flexibilität mit `minmax()`](https://css-irl.info/more-flexibility-with-minmax/) (2018)
- [Ausbrechen mit CSS Grid](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/) (2017)
