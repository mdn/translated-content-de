---
title: Gitter-Spuren
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Eine **Gitter-Spur** ist der Raum zwischen zwei benachbarten {{glossary("grid lines")}}. Sie werden im _expliziten Gitter_ durch die Verwendung der {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} Eigenschaften oder der Kurzschreibweise {{cssxref("grid")}} oder {{cssxref("grid-template")}} Eigenschaften definiert. Spuren werden auch im _impliziten Gitter_ erstellt, indem ein Gitter-Element außerhalb der im expliziten Gitter erstellten Spuren positioniert wird.

Das Bild unten zeigt die erste Zeilenspur in einem Gitter.

![Diagram showing a grid track.](1_grid_track.png)

## Spurgrößen im expliziten Gitter

Beim Definieren von Gitterspuren mit {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} können Sie jede Längeneinheit verwenden und auch die Flex-Einheit `fr`, die einen Teil des verfügbaren Raums im Gitter-Container angibt.

## Beispiel

Das folgende Beispiel demonstriert ein Gitter mit drei Spuren für Spalten: eine von 200 Pixeln, die zweite von 1fr, die dritte von 3fr. Nachdem die 200 Pixel vom im Gitter-Container verfügbaren Platz abgezogen wurden, wird der verbleibende Platz durch 4 geteilt. Ein Teil wird Spalte 2 zugewiesen, 3 Teile Spalte 3.

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

Spuren, die im impliziten Gitter erstellt werden, sind standardmäßig automatisch dimensioniert, jedoch können Sie eine Größe für diese Spuren mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

## Siehe auch

- [Grundkonzepte des Gitter-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition von Gitter-Spuren in der CSS-Gitter-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
- Eigenschaftsreferenz

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
