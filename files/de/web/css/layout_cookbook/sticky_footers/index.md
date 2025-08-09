---
title: Sticky-Footer
slug: Web/CSS/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Ein Sticky-Footer-Muster ist eines, bei dem der Footer Ihrer Seite am unteren Rand des Ansichtsbereichs "haftet", wenn der Inhalt kürzer ist als die Höhe des Ansichtsbereichs. In diesem Rezept werden wir uns einige Techniken ansehen, um einen solchen zu erstellen.

## Anforderungen

Das Sticky-Footer-Muster muss die folgenden Anforderungen erfüllen:

- Der Footer haftet am unteren Rand des Ansichtsbereichs, wenn der Inhalt kurz ist.
- Wenn der Inhalt der Seite über den unteren Rand des Ansichtsbereichs hinausgeht, wird der Footer nach unten geschoben und sitzt immer wie gewohnt unter dem Inhalt.

## Das Rezept

Klicken Sie auf "Play" in den folgenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___sticky-footer-example
<div class="wrapper">
  <header class="page-header">This is the header</header>
  <main class="page-body">
    <p contenteditable>
      The footer sticks to the bottom even though this paragraph is short. Add
      content to this editable area to see the footer push down when needed to
      fit the content.
    </p>
  </main>
  <footer class="page-footer">Sticky footer</footer>
</div>
```

```css live-sample___sticky-footer-example
* {
  box-sizing: inherit;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  height: 100%;
  font: 1.2em sans-serif;
}

.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.page-header,
.page-footer {
  background-color: rgb(75 70 74);
  color: white;
  padding: 20px;
}

.page-body {
  padding: 20px;
}

.page-body p {
  border: 1px solid grey;
}
```

{{EmbedLiveSample("sticky-footer-example", "", "400px")}}

> [!NOTE]
> In diesem Beispiel und dem folgenden verwenden wir einen Wrapper, der auf `min-height: 100%` gesetzt ist. Sie können dies auch für eine volle Seite erreichen, indem Sie eine {{cssxref("min-height")}} von `100vh` auf dem {{htmlelement("body")}} setzen und diesen als Ihr Grid-Container verwenden.

## Getroffene Entscheidungen

Im obigen Beispiel erreichen wir den Sticky-Footer mit [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout). Der `.wrapper` hat eine Mindesthöhe von `100%`, was bedeutet, dass er so hoch ist wie der Container, in dem er sich befindet. Wir erstellen dann ein einspaltiges Grid-Layout mit drei Zeilen, eine Zeile für jeden Teil unseres Layouts.

[Grid-Auto-Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) platziert unsere Elemente in Quellreihenfolge, sodass der Header in die erste automatisch dimensionierte Spur geht, der Hauptinhalt in die `1fr` Spur und der Footer in die letzte automatisch dimensionierte Spur. Die `1fr` Spur nimmt den gesamten verfügbaren Platz ein und wächst somit, um die Lücke zu füllen.

## Alternative Methode

Sie können auch [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwenden, um einen Sticky-Footer zu erstellen.

```html live-sample___sticky-footer-flexbox-example
<div class="wrapper">
  <header class="page-header">This is the header</header>
  <main class="page-body">
    <p contenteditable>
      The footer sticks to the bottom even though this paragraph is short. Add
      content to this editable area to see the footer push down when needed to
      fit the content.
    </p>
  </main>
  <footer class="page-footer">Sticky footer</footer>
</div>
```

```css live-sample___sticky-footer-flexbox-example
* {
  box-sizing: border-box;
}

html,
body {
  box-sizing: border-box;
  height: 100%;
  padding: 0;
  margin: 0;
  font: 1.2em sans-serif;
}

.wrapper {
  box-sizing: border-box;
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

.page-header,
.page-footer {
  background-color: rgb(75 70 74);
  color: white;
  padding: 20px;

  flex-grow: 0;
  flex-shrink: 0;
}

.page-body {
  padding: 20px;

  flex-grow: 1;
}

.page-body p {
  border: 1px solid grey;
}
```

{{EmbedLiveSample("sticky-footer-flexbox-example", "", "400px")}}

Das Flexbox-Beispiel beginnt auf die gleiche Weise, aber wir verwenden `display:flex` anstelle von `display:grid` auf dem `.wrapper`; zudem setzen wir {{cssxref("flex-direction")}} auf `column`. Dann setzen wir unseren Hauptinhalt auf [`flex-grow: 1`](/de/docs/Web/CSS/flex-grow) und die beiden anderen Elemente auf [`flex-shrink: 0`](/de/docs/Web/CSS/flex-shrink) — dies verhindert, dass sie kleiner werden, wenn der Inhalt den Hauptbereich füllt.

## Ressourcen auf MDN

- CSS-Eigenschaften: {{cssxref("display")}}, {{cssxref("min-height")}}, {{cssxref("grid-template-rows")}}, {{cssxref("flex-direction")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}
- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
