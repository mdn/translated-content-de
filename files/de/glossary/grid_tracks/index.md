---
title: Grid-Strecken
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

Eine **Grid-Strecke** ist der Raum zwischen zwei benachbarten {{Glossary("grid_lines", "Grid-Linien")}}. Sie werden im _expliziten Grid_ durch die Verwendung der Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} oder die Kurzschreibweisen {{cssxref("grid")}} oder {{cssxref("grid-template")}} definiert. Strecken werden auch im _impliziten Grid_ erstellt, indem ein Grid-Element außerhalb der im expliziten Grid erstellten Strecken positioniert wird.

Das folgende Bild zeigt die erste Reihenstrecke in einem Grid.

![Diagramm, das eine Grid-Strecke zeigt.](1_grid_track.png)

## Strecken-Größenbestimmung im expliziten Grid

Beim Definieren von Grid-Strecken mit {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} können Sie jede Längeneinheit verwenden und auch die Flex-Einheit `fr`, die einen Teil des verfügbaren Raums im Grid-Container angibt.

## Beispiel

Das folgende Beispiel demonstriert ein Grid mit drei Spaltenstrecken: eine von 200 Pixel, die zweite von 1fr, die dritte von 3fr. Nachdem die 200 Pixel vom im Grid-Container verfügbaren Raum abgezogen wurden, wird der verbleibende Raum durch 4 geteilt. Ein Teil wird der Spalte 2 zugewiesen, 3 Teile der Spalte 3.

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

## Strecken-Größenbestimmung im impliziten Grid

Strecken, die im impliziten Grid erstellt werden, sind standardmäßig automatisch dimensioniert, jedoch können Sie eine Größe für diese Strecken mithilfe der Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

## Siehe auch

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition von Grid-Strecken in der CSS Grid Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
- Eigenschaftsreferenz
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
