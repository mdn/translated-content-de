---
title: Grid-Spuren
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Grid-Spur** ist der Raum zwischen zwei benachbarten {{Glossary("grid_lines", "Gitterlinien")}}. Sie werden im _expliziten Raster_ durch die Verwendung der Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} oder der Kurzform-Eigenschaften {{cssxref("grid")}} oder {{cssxref("grid-template")}} definiert. Spuren im _impliziten Raster_ entstehen, indem ein Gitterelement außerhalb der im expliziten Raster erstellten Spuren positioniert wird.

Das Bild unten zeigt die erste Spurreihen eines Rasters.

![Diagramm, das eine Grid-Spur zeigt.](1_grid_track.png)

## Spurgrößen im expliziten Raster

Beim Definieren von Grid-Spuren mit den Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} können Sie jede Längeneinheit verwenden, einschließlich der Flex-Einheit `fr`, die einen Anteil des verfügbaren Raums im Gittercontainer angibt.

## Beispiel

Das nachfolgende Beispiel zeigt ein Raster mit drei Spalten, von denen die erste 200 Pixel, die zweite 1fr und die dritte 3fr groß ist. Sobald die 200 Pixel vom verfügbaren Raum im Gittercontainer abgezogen wurden, wird der verbleibende Raum durch 4 geteilt. Eine Einheit wird der zweiten Spalte zugewiesen, drei Einheiten der dritten Spalte.

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

## Spurgrößen im impliziten Raster

Spuren, die im impliziten Raster erstellt werden, sind standardmäßig automatisch dimensioniert, jedoch können Sie mithilfe der Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} eine Größe für diese Spuren definieren.

## Siehe auch

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition von Grid-Spuren in der CSS Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
- Eigenschaftenreferenz
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
