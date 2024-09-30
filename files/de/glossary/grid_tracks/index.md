---
title: Grid Tracks
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Ein **Grid Track** ist der Raum zwischen zwei benachbarten [Grid Lines](/de/docs/Glossary/grid_lines). Diese werden im _expliziten Grid_ durch die Verwendung der {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} Eigenschaften oder der Kurzformen {{cssxref("grid")}} oder {{cssxref("grid-template")}} definiert. Tracks werden auch im _impliziten Grid_ erstellt, indem ein Grid-Item außerhalb der im expliziten Grid erstellten Tracks positioniert wird.

Das folgende Bild zeigt den ersten Zeilen-Track auf einem Grid.

![Diagramm zeigt einen Grid Track.](1_grid_track.png)

## Track-Sizing im expliziten Grid

Beim Definieren von Grid Tracks mit {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} können Sie jede beliebige Längeneinheit verwenden sowie die Flex-Einheit `fr`, die einen Anteil des verfügbaren Platzes im Grid-Container angibt.

## Beispiel

Das untenstehende Beispiel demonstriert ein Grid mit drei Spaltentracks, einer mit 200 Pixeln, der zweite mit 1fr, der dritte mit 3fr. Nachdem die 200 Pixel vom verfügbaren Raum im Grid-Container abgezogen wurden, wird der verbleibende Raum durch 4 geteilt. Ein Teil wird Spalte 2 zugewiesen, 3 Teile der Spalte 3.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr 3fr;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Example', '500', '230') }}

## Track-Sizing im impliziten Grid

Die im impliziten Grid erstellten Tracks werden standardmäßig automatisch dimensioniert, jedoch können Sie eine Größe für diese Tracks mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

## Siehe auch

- [Grundlagen des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition von Grid-Tracks in der CSS-Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
- Eigenschaftsreferenz

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
