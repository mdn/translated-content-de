---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`order`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Reihenfolge fest, in der ein Element in einem Flex- oder Raster-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Quellcode-Reihenfolge sortiert. Elementen, denen kein expliziter `order`-Wert zugewiesen ist, wird der Standardwert `0` zugewiesen.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 0.5rem;
  padding: 0.5rem;
  flex: 1;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}

#example-element::after {
  content: attr(style);
  outline: 2px dashed;
  font-family: monospace;
}
```

Im obigen Demo können Sie die Optionen auf der linken Seite auswählen, um den Wert der `order`-Eigenschaft des pinken Kastens zu ändern. Die hellblauen Kästen haben feste `order`-Werte.

Beachten Sie die Auswirkungen der Quellreihenfolge. Wenn zum Beispiel `order: 2;` ausgewählt wird, wird der pinke Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Dies liegt daran, dass der pinke Kasten im Quellcode vor den blauen Kästen erscheint.

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

Da `order` nur die _visuelle Reihenfolge_ von Elementen und nicht ihre logische oder Tab-Reihenfolge beeinflussen soll, darf es nicht auf nicht-visuellen Medien wie [Sprache](/de/docs/Web/CSS/@media#speech) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display) Modul, wirkt sich diese Eigenschaft nur auf Grid- und Flex-Elemente aus. Wenn `order` auf ein Element gesetzt wird, dessen Elternelement die {{cssxref("display")}} Eigenschaft nicht einen Flex- oder Raster-Container erstellt, hat es keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die Ordinalgruppe, die von dem Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft führt zu einer Trennung zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge. Dies wirkt sich nachteilig auf sehbehinderte Benutzer aus, die mit Hilfe von unterstützenden Technologien wie einem Bildschirmleser navigieren. Wenn sich die visuelle Reihenfolge von der DOM-Reihenfolge unterscheidet, werden Ihre Benutzer je nach Zugang zu Ihrem Inhalt unterschiedliche Erfahrungen machen.

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über Tink (2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) über Adrian Roselli (2015)
- [Richtlinie 1.3 Erklärungen verstehen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.2 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ordnung von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Layout mit zwei Sidebars.

#### HTML

Wir inkludieren einen Header, einen Footer und einen Hauptinhalt-Bereich. Der Hauptinhalt enthält einen Artikel und zwei Sidebars. Beachten Sie ihre Reihenfolge! Wir verwenden die CSS-`order`-Eigenschaft, um ihre visuelle Reihenfolge zu ändern.

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

Wir gestalten den Hauptbereich mit Funktionen des [flexiblen Box-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) und setzen {{cssxref("display")}} auf `flex`, wodurch das {{htmlelement("main")}}-Element zu einem Flex-Container wird. Standardmäßig erstellt dies Flex-Elemente mit gleicher vertikaler Größe. Die Sidebars erhalten beide eine absolute {{cssxref("width")}}, während das {{htmlelement("article")}} allen [positiven freien Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem über den {{cssxref("flex")}} Shorthand gesetzten {{cssxref("flex-grow")}}-Faktor ausfüllt.

Wir setzen dann unterschiedliche `order`-Eigenschaftswerte auf jedes der drei Kinder des Flex-Containers; dies bedeutet, dass das CSS die visuelle Reihenfolge dieser Komponenten definiert, statt in der im HTML deklarierten Reihenfolge zu erscheinen.

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

Der `<article>` erscheint zuerst in der Quellreihenfolge, wird aber visuell in der Mitte gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS-Rasterlayout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/de/docs/Web/CSS/CSS_display) Modul
