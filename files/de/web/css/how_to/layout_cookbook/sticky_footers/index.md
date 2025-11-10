---
title: Sticky-Footer
slug: Web/CSS/How_to/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein Sticky-Footer-Muster ist eines, bei dem der Footer Ihrer Seite am unteren Rand des Viewports "haftet", wenn der Inhalt kürzer ist als die Höhe des Viewports. In diesem Rezept werden wir uns ein paar Techniken ansehen, um einen solchen zu erstellen.

## Anforderungen

Das Sticky-Footer-Muster muss die folgenden Anforderungen erfüllen:

- Der Footer haftet am unteren Rand des Viewports, wenn der Inhalt kurz ist.
- Wenn der Inhalt der Seite über den unteren Rand des Viewports hinausgeht, wird der Footer nach unten geschoben und sitzt immer unter dem Inhalt wie gewohnt.

## Das Rezept

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
> In diesem Beispiel und im folgenden verwenden wir einen Wrapper, der auf `min-height: 100%` gesetzt ist. Sie können dies auch für eine vollständige Seite erreichen, indem Sie eine {{cssxref("min-height")}} von `100vh` auf dem {{htmlelement("body")}} festlegen und diesen dann als Grid-Container verwenden.

## Getroffene Entscheidungen

Im obigen Beispiel erreichen wir den Sticky-Footer mit dem [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout). Der `.wrapper` hat eine Mindesthöhe von `100%`, was bedeutet, dass er so hoch ist wie der Container, in dem er sich befindet. Wir erstellen dann ein einspaltiges Grid-Layout mit drei Reihen, eine Reihe für jeden Teil unseres Layouts.

[Grid-Auto-Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement) wird unsere Elemente in der Reihenfolge des Quellcodes platzieren, sodass der Header in den ersten automatisch dimensionierten Track, der Hauptinhalt in den `1fr`-Track und der Footer in den letzten automatisch dimensionierten Track geht. Der `1fr`-Track nimmt den gesamten verfügbaren Platz ein und wächst daher, um die Lücke zu füllen.

## Alternative Methode

Sie können auch [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) verwenden, um einen Sticky-Footer zu erstellen.

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

Das Flexbox-Beispiel beginnt auf die gleiche Weise, aber wir verwenden `display:flex` anstelle von `display:grid` auf dem `.wrapper`; wir setzen auch {{cssxref("flex-direction")}} auf `column`. Dann setzen wir unseren Hauptinhalt auf [`flex-grow: 1`](/de/docs/Web/CSS/Reference/Properties/flex-grow) und die anderen beiden Elemente auf [`flex-shrink: 0`](/de/docs/Web/CSS/Reference/Properties/flex-shrink) — dies verhindert, dass sie kleiner schrumpfen, wenn der Inhalt den Hauptbereich füllt.

## Ressourcen auf MDN

- CSS-Eigenschaften: {{cssxref("display")}}, {{cssxref("min-height")}}, {{cssxref("grid-template-rows")}}, {{cssxref("flex-direction")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}
- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
