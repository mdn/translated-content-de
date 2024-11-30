---
title: Sticky Footers
slug: Web/CSS/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 969c3ca835e0a43a403ed61a3ea8245539fcc4dd
---

{{CSSRef}}

Ein Sticky-Footer-Pattern ist eines, bei dem der Footer Ihrer Seite am unteren Rand des Viewports "klebt", wenn der Inhalt kürzer ist als die Höhe des Viewports. In diesem Rezept werden wir uns einige Techniken ansehen, um einen solchen zu erstellen.

![Ein Sticky-Footer am unteren Rand eines Kastens](cookbook-footer.png)

## Anforderungen

Das Sticky-Footer-Pattern muss die folgenden Anforderungen erfüllen:

- Der Footer klebt am unteren Rand des Viewports, wenn der Inhalt kurz ist.
- Wenn der Seiteninhalt über den unteren Rand des Viewports hinausgeht, befindet sich der Footer wie gewohnt unter dem Inhalt.

## Das Rezept

Klicken Sie in den untenstehenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___sticky-footer-example
<div class="wrapper">
  <header class="page-header">This is the header</header>
  <main class="page-body">
    <p contenteditable>
      Main page content here, add more to this text if you want to see the
      footer push down.
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
  color: #fff;
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
> In diesem und dem folgenden Beispiel verwenden wir einen Wrapper mit `min-height: 100%`. Sie können dies auch für eine volle Seite erreichen, indem Sie eine {{cssxref("min-height")}} von `100vh` auf den {{htmlelement("body")}} setzen und ihn dann als Gittercontainer verwenden.

## Getroffene Entscheidungen

Im obigen Beispiel erreichen wir den Sticky-Footer mit CSS-Grid-Layout. Der `.wrapper` hat eine Mindesthöhe von `100%`, was bedeutet, dass er so hoch ist wie der Container, in dem er sich befindet. Wir erstellen dann ein einspaltiges Gitterlayout mit drei Reihen, eine Reihe für jeden Teil unseres Layouts.

Das Grid-Auto-Placement platziert unsere Elemente in der Reihenfolge des Quelltextes, sodass der Header in die erste autoskalierte Spur, der Hauptinhalt in die `1fr`-Spur und der Footer in die letzte autoskalierte Spur eingeht. Die `1fr`-Spur nimmt den gesamten verfügbaren Platz ein und wächst somit, um die Lücke zu füllen.

## Alternative Methode

Sie können auch Flexbox verwenden, um einen Sticky-Footer zu erstellen.

```html live-sample___sticky-footer-flexbox-example
<div class="wrapper">
  <header class="page-header">This is the header</header>
  <main class="page-body">
    <p contenteditable>
      Main page content here, add more to this text if you want to see the
      footer push down.
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
  color: #fff;
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

Das Flexbox-Beispiel beginnt auf die gleiche Weise, aber wir verwenden `display:flex` anstelle von `display:grid` auf dem `.wrapper`; wir setzen auch `flex-direction` auf `column`. Dann setzen wir unseren Hauptinhalt auf `flex-grow: 1` und die anderen beiden Elemente auf `flex-shrink: 0` — dies verhindert, dass sie kleiner werden, wenn der Inhalt den Hauptbereich füllt.

## Ressourcen auf MDN

- CSS-Eigenschaften: {{cssxref("display")}}, {{cssxref("min-height")}}, {{cssxref("grid-template-rows")}}, {{cssxref("flex-direction")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}
- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
