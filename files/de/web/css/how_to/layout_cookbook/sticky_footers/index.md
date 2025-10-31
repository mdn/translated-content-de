---
title: Sticky-Footer
slug: Web/CSS/How_to/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Ein Sticky-Footer-Muster ist eines, bei dem der Footer Ihrer Seite am unteren Rand des Viewports "haftet", wenn der Inhalt kürzer als die Höhe des Viewports ist. In diesem Rezept schauen wir uns ein paar Techniken an, um einen Sticky-Footer zu erstellen.

## Anforderungen

Das Sticky-Footer-Muster muss folgende Anforderungen erfüllen:

- Der Footer haftet am unteren Rand des Viewports, wenn der Inhalt kurz ist.
- Wenn der Inhalt der Seite über den unteren Rand des Viewports hinausgeht, wird der Footer nach unten gedrückt und sitzt immer unter dem Inhalt wie gewohnt.

## Das Rezept

Klicken Sie auf "Abspielen" in den untenstehenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
> In diesem Beispiel und im folgenden verwenden wir einen Wrapper, der auf `min-height: 100%` gesetzt ist. Sie können dies auch für eine vollständige Seite erreichen, indem Sie {{cssxref("min-height")}} von `100vh` auf den {{htmlelement("body")}} setzen und es dann als Ihren Grid-Container nutzen.

## Getroffene Entscheidungen

Im obigen Beispiel erreichen wir den Sticky-Footer mittels [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout). Der `.wrapper` hat eine Mindesthöhe von `100%`, was bedeutet, dass er so hoch ist wie der Container, in dem er sich befindet. Wir erstellen dann ein Einzelspalten-Grid-Layout mit drei Reihen, eine Reihe für jeden Teil unseres Layouts.

[Grid-Autoplatzierung](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) wird unsere Elemente in Quellreihenfolge platzieren, und so geht der Header in die erste automatisch skalierte Spur, der Hauptinhalt in die `1fr`-Spur und der Footer in die letzte automatisch skalierte Spur. Die `1fr`-Spur wird den gesamten verfügbaren Platz einnehmen und füllt somit die Lücke aus.

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

Das Flexbox-Beispiel beginnt auf die gleiche Weise, jedoch verwenden wir `display:flex` anstelle von `display:grid` auf dem `.wrapper`; außerdem setzen wir {{cssxref("flex-direction")}} auf `column`. Dann setzen wir unseren Hauptinhalt auf [`flex-grow: 1`](/de/docs/Web/CSS/Reference/Properties/flex-grow) und die anderen beiden Elemente auf [`flex-shrink: 0`](/de/docs/Web/CSS/Reference/Properties/flex-shrink) — dies verhindert, dass sie kleiner werden, wenn der Hauptbereich mit Inhalt gefüllt wird.

## Ressourcen auf MDN

- CSS-Eigenschaften: {{cssxref("display")}}, {{cssxref("min-height")}}, {{cssxref("grid-template-rows")}}, {{cssxref("flex-direction")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}
- [Grundkonzepte des Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
