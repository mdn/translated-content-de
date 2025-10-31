---
title: order
slug: Web/CSS/Reference/Properties/order
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`order`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Reihenfolge fest, in der ein Element in einem Flex- oder Grid-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und anschließend nach ihrer Quellcode-Reihenfolge sortiert. Elementen ohne expliziten `order`-Wert wird der Standardwert `0` zugewiesen.

{{InteractiveExample("CSS Demo: order")}}

```css interactive-example-choice
order: 0;
```

```css interactive-example-choice
order: 3;
```

```css interactive-example-choice
order: -1;
```

```css interactive-example-choice
order: 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Box 1:</div>
  <div style="order: 1">Box 2: <code>order: 1;</code></div>
  <div style="order: 2">Box 3: <code>order: 2;</code></div>
  <div style="order: 2">Box 4: <code>order: 2;</code></div>
  <div style="order: 3">Box 5: <code>order: 3;</code></div>
</section>
```

```css interactive-example
.default-example {
  max-height: 300px;
  display: flex;
  flex-flow: column;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 0.5rem;
  padding: 0.5rem;
  flex: 1;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}

#example-element::after {
  content: attr(style);
  outline: 2px dashed;
  font-family: monospace;
}
```

Im obigen Demo-Beispiel wählen Sie die Optionen auf der linken Seite aus, um den Wert der `order`-Eigenschaft des pinken Kastens zu ändern. Den hellblauen Kästen wurden feste `order`-Werte zugewiesen.

Bedenken Sie den Effekt der Quellreihenfolge. Zum Beispiel, wenn `order: 2;` ausgewählt ist, wird der pinke Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Dies liegt daran, dass der pinke Kasten im Quellcode vor den blauen Kästen erscheint.

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

Da `order` nur dazu bestimmt ist, die _visuelle Reihenfolge_ der Elemente und nicht deren logische oder Tab-Reihenfolge zu beeinflussen, sollte es nicht in nicht-visuellen Medien wie [Sprache](https://drafts.csswg.org/css-speech/) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display)-Modul, beeinflusst diese Eigenschaft nur Grid- und Flex-Elemente. Wenn `order` auf ein Element gesetzt wird, dessen Eltern-{{cssxref("display")}}-Eigenschaft keinen Flex- oder Grid-Container erstellt, hat es keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Stellt die Ordinalgruppe dar, die vom Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft führt zu einer Trennung zwischen der visuellen Darstellung von Inhalten und der DOM-Reihenfolge. Dies wirkt sich nachteilig auf sehbehinderte Benutzer aus, die mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, werden Ihre Benutzer je nach Zugriffsart unterschiedliche Inhalte erleben.

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über Tink (2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) über Adrian Roselli (2015)
- [Verständnis der WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Elemente in einem Flex-Container anordnen

In diesem Beispiel erstellen wir ein klassisches Layout mit zwei Seitenleisten.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltsbereich hinzu. Der Hauptinhalt enthält einen Artikel und zwei Seitenleisten. Beachten Sie deren Reihenfolge! Wir verwenden die CSS-`order`-Eigenschaft, um ihre visuelle Reihenfolge zu ändern.

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

Wir gestalten den Hauptbereich mit der [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modulfunktion; indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}}-Element zu einem Flex-Container. Standardmäßig werden dadurch Flex-Elemente mit gleicher vertikaler Größe erstellt. Den Seitenleisten wird eine absolute {{cssxref("width")}} zugewiesen, während der {{htmlelement("article")}} den gesamten [positiven freien Platz](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem {{cssxref("flex-grow")}}-Faktor über die {{cssxref("flex")}}-Kurzform einnimmt.

Wir setzen dann unterschiedliche `order`-Eigenschaftswerte auf jedes der drei Kinder des Flex-Containers; das bedeutet, dass das CSS die visuelle Reihenfolge dieser Komponente definiert, anstatt dass sie in der im HTML deklarierten Reihenfolge erscheint.

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

Das `<article>` erscheint zuerst in der Quellreihenfolge, wird jedoch visuell in der Mitte gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Flex-Elemente anordnen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/de/docs/Web/CSS/CSS_display) Modul
- {{Glossary("Reading_order", "Lesereihenfolge")}}
