---
title: Grid-Wrapper
slug: Web/CSS/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Das Grid-Wrapper-Muster ist hilfreich, um Grid-Inhalte innerhalb eines zentralen Wrappers auszurichten, während es auch möglich ist, dass Elemente ausbrechen und sich an den Rand des umgebenden Elements oder der Seite ausrichten.

## Anforderungen

Elemente, die auf dem Grid platziert sind, sollten in der Lage sein, sich an einem horizontal zentrierten Wrapper mit maximaler Breite oder an den äußeren Rändern des Grids oder an beiden auszurichten.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/grid-wrapper.html", '100%', 1100)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/grid-wrapper--download.html)

## Getroffene Entscheidungen

Dieses Rezept verwendet die CSS-Grid-{{cssxref("minmax", "minmax()")}}-Funktion, um die Größen der Grid-Tracks in der {{cssxref("grid-template-columns")}}-Eigenschaft zu definieren. Für die zentralen Spalten mit einer maximalen Breite können wir einen minimalen Wert von `0` oder größer und einen maximalen Wert festlegen, der die maximale Größe angibt, bis zu der die Spaltentracks wachsen werden. Die Verwendung von [relativen](/de/docs/Web/CSS/length#relative_length_units_based_on_font) oder [absoluten](/de/docs/Web/CSS/length#absolute_length_units) {{cssxref("length")}}-Einheiten (Pixel, ems, rems) erzeugt eine feste Maximalgröße für den zentralen Wrapper, während die Verwendung von {{cssxref("percentage")}}-Werten oder [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) dafür sorgt, dass sich der Wrapper entsprechend seines Kontexts vergrößert oder verkleinert.

Die beiden äußeren Spalten haben eine maximale Größe von `1fr`, was bedeutet, dass sie sich jeweils ausdehnen, um den verbleibenden verfügbaren Platz im Grid-Container zu füllen.

## Nützliche Fallbacks oder alternative Methoden

Um den Grid horizontal auf der Seite zu zentrieren, können Sie eine `max-width` zusammen mit linken und rechten `auto`-{{cssxref("margin")}}s festlegen:

```css
.grid {
  max-width: 96vw; /* Limits the width to 96% of the width of the viewport */
  margin: 0 auto; /* horizontally centers the container */
}
```

## Barrierefreiheitsbelange

Obwohl CSS Grid das Positionieren von Elementen überall (innerhalb vernünftiger Grenzen) ermöglicht, ist es wichtig, sicherzustellen, dass Ihr zugrunde liegendes Markup einer logischen Reihenfolge folgt (siehe [CSS grid layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) für weitere Details).

## Siehe auch

- {{Cssxref("grid-template-columns")}}-Eigenschaft
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS Grid: Mehr Flexibilität mit `minmax()`](https://css-irl.info/more-flexibility-with-minmax/) (2018)
- [Ausbrechen mit CSS Grid](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/) (2017)
