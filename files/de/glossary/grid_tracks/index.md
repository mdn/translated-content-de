---
title: Grid-Spuren
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Eine **Grid-Spur** ist der Raum zwischen zwei benachbarten {{Glossary("grid_lines", "Gitterlinien")}}. Sie werden im _expliziten Gitter_ durch die Verwendung der Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} oder der Abkürzungen {{cssxref("grid")}} oder {{cssxref("grid-template")}} definiert. Spuren werden auch im _impliziten Gitter_ erstellt, indem ein Gitterelement außerhalb der im expliziten Gitter erstellten Spuren positioniert wird.

Das untenstehende Bild zeigt die erste Spur einer Zeile in einem Gitter.

![Diagramm, das eine Grid-Spur zeigt.](1_grid_track.png)

## Spurgrößen im expliziten Gitter

Beim Definieren von Grid-Spuren mit {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} können Sie jede Längeneinheit sowie die Flex-Einheit `fr` verwenden, die einen Teil des verfügbaren Raums im Gitter-Container angibt.

## Beispiel

Das folgende Beispiel zeigt ein Gitter mit drei Spuren, eine mit 200 Pixeln, die zweite mit 1fr und die dritte mit 3fr. Sobald die 200 Pixel vom im Gitter-Container verfügbaren Raum abgezogen wurden, wird der verbleibende Raum durch 4 geteilt. Ein Teil wird der Spalte 2 zugewiesen, 3 Teile der Spalte 3.

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

## Spurgrößen im impliziten Gitter

Im impliziten Gitter erstellte Spuren sind standardmäßig automatisch dimensioniert, jedoch können Sie eine Größe für diese Spuren mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

## Siehe auch

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Definition von Grid-Spuren in der CSS-Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
- Eigenschaftsreferenz
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
