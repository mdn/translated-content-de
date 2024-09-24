---
title: Raster-Wrapper
slug: Web/CSS/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Das Raster-Wrapper-Muster ist nützlich, um Rasterinhalte innerhalb eines zentralen Wrappers auszurichten, während es gleichzeitig Elementen erlaubt, auszubrechen und sich an den Rand des enthaltenen Elements oder der Seite auszurichten.

## Anforderungen

Elemente, die auf dem Raster platziert werden, sollten in der Lage sein, sich entweder an einem horizontal zentrierten maximalen Breiten-Wrapper oder an den Außenkanten des Rasters oder an beiden auszurichten.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/grid-wrapper.html", '100%', 1100)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/grid-wrapper--download.html)

## Getroffene Entscheidungen

Dieses Rezept verwendet die CSS-Grid-{{cssxref("minmax", "minmax()")}}-Funktion, um die Größen der Rasterspuren in der {{cssxref("grid-template-columns")}}-Eigenschaft zu definieren. Für die zentralen Spalten mit einer maximalen Breite können wir einen Minimalwert von `0` oder größer und einen Maximalwert festlegen, der die maximale Größe angibt, die die Spuren der Spalten erreichen sollen. Die Verwendung von [relativen](/de/docs/Web/CSS/length#relative_length_units_based_on_font) oder [absoluten](/de/docs/Web/CSS/length#absolute_length_units) {{cssxref("length")}}-Einheiten (Pixel, ems, rems) wird eine feste maximale Größe für den zentralen Wrapper erstellen, während die Verwendung von {{cssxref("percentage")}}-Werten oder [Viewport-Einheiten](/de/docs/Web/CSS/length#relative_length_units_based_on_viewport) dazu führt, dass der Wrapper sich entsprechend seinem Kontext ausdehnt oder schrumpft.

Die äußeren beiden Spalten haben eine maximale Größe von `1fr`, was bedeutet, dass sie sich jeweils ausdehnen, um den verbleibenden verfügbaren Raum im Rastercontainer zu füllen.

## Nützliche Fallbacks oder alternative Methoden

Um das Raster horizontal auf der Seite zu zentrieren, können Sie eine `max-width` zusammen mit linken und rechten `auto`-{{cssxref("margin")}} setzen:

```css
.grid {
  max-width: 96vw; /* Begrenzt die Breite auf 96% der Breite des Viewports */
  margin: 0 auto; /* zentriert den Container horizontal */
}
```

## Barrierefreiheitsbedenken

Auch wenn CSS-Grid es ermöglicht, Elemente (in angemessenem Rahmen) überall zu positionieren, ist es wichtig sicherzustellen, dass Ihr zugrunde liegendes Markup einer logischen Reihenfolge folgt (siehe [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) für weitere Details).

## Siehe auch

- {{Cssxref("grid-template-columns")}}-Eigenschaft
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [Mehr Flexibilität mit `minmax()` im CSS-Grid](https://css-irl.info/more-flexibility-with-minmax/) (2018)
- [Ausbrechen mit CSS-Grid](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/) (2017)
