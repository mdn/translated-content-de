---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 4630ec673ad963bfa36a02a2c5d3f1d21c27a5d0
---

{{CSSRef}}

Die **`order`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Reihenfolge fest, in der ein Element in einem Flex- oder Grid-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Reihenfolge im Quelltext sortiert. Elementen ohne expliziten `order`-Wert wird der Standardwert von `0` zugewiesen.

{{EmbedInteractiveExample("pages/css/order.html")}}

In der obigen Demo können Sie die Optionen auf der linken Seite auswählen, um den Wert der `order`-Eigenschaft des pinkfarbenen Kastens zu ändern. Den hellblauen Kästen wurden feste `order`-Werte zugewiesen.

Beachten Sie den Effekt der Quellreihenfolge. Wenn beispielsweise `order: 2;` ausgewählt ist, wird der pinkfarbene Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Dies liegt daran, dass der pinkfarbene Kasten im Quellcode vor den blauen Kästen erscheint.

## Syntax

```css
/* <integer> values */
order: 5;
order: -5;

/* Global values */
order: inherit;
order: initial;
order: revert;
order: revert-layer;
order: unset;
```

Da `order` nur die _visuelle Reihenfolge_ der Elemente und nicht deren logische oder Tab-Reihenfolge beeinflussen soll, darf es nicht in nicht-visuellen Medien wie [Speech](/de/docs/Web/CSS/@media#speech) verwendet werden.

Diese Eigenschaft, die im [CSS display](/de/docs/Web/CSS/CSS_display)-Modul definiert ist, wirkt sich nur auf Grid- und Flex-Elemente aus. Wenn `order` auf ein Element gesetzt ist, dessen übergeordnetes Element keine Flex- oder Grid-Container durch die {{cssxref("display")}}-Eigenschaft erstellt, hat es keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die Ordnungsgruppe, die vom Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft führt zu einer Trennung zwischen der visuellen Darstellung der Inhalte und der Reihenfolge im DOM. Dies wirkt sich nachteilig auf Nutzer mit Sehbehinderungen aus, die mit Unterstützungstechnologien wie einem Screenreader navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, werden Ihre Nutzer je nach Zugangsweise zu Ihren Inhalten unterschiedliche Erfahrungen machen.

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) von Tink (2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) von Adrian Roselli (2015)
- [Verstehen von WCAG, Erklärung der Richtlinie 1.3](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verstehen des Erfolgskriteriums 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anordnung von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Zwei-Seitenleisten-Layout.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltsbereich hinzu. Der Hauptinhalt enthält einen Artikel und zwei Seitenleisten. Beachten Sie deren Reihenfolge! Wir verwenden die CSS `order`-Eigenschaft, um deren visuelle Reihenfolge zu ändern.

```html
<header>Header</header>
<main>
  <article>Article</article>
  <nav>Nav</nav>
  <aside>Aside</aside>
</main>
<footer>Footer</footer>
```

#### CSS

Wir gestalten den Hauptbereich mit Funktionen des [Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout); indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}}-Element zu einem Flex-Container. Standardmäßig erzeugt dies Flex-Elemente gleicher vertikaler Größe. Die Seitenleisten erhalten beide eine absolute {{cssxref("width")}}, während das {{htmlelement("article")}} den gesamten [positiven freien Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem {{cssxref("flex-grow")}}-Faktor durch die {{cssxref("flex")}}-Kurzschreibweise ausfüllt.

Wir setzen dann unterschiedliche `order`-Eigenschaftswerte auf jedes der drei Kinder des Flex-Containers, wodurch die CSS die visuelle Reihenfolge dieser Komponenten definiert, anstatt sie in der im HTML deklarierten Reihenfolge zu erscheinen.

```css
main {
  display: flex;
  text-align: center;
}
main > article {
  flex: 1;
  order: 2;
}
main > nav {
  width: 200px;
  order: 1;
}
main > aside {
  width: 200px;
  order: 3;
}
```

#### Ergebnis

{{ EmbedLiveSample('Ordering_items_in_a_flex_container') }}

Der `<article>` erscheint zuerst in der Quellreihenfolge, wird jedoch visuell in der Mitte gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/de/docs/Web/CSS/CSS_display) Modul
