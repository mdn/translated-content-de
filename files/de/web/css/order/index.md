---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 7dda25db814fed5ae7498baaee80009b3569a8dc
---

{{CSSRef}}

Die **`order`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Reihenfolge fest, in der ein Element in einem Flex- oder Grid-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Reihenfolge im Quellcode sortiert. Elementen, die keinen expliziten `order`-Wert zugewiesen bekommen, wird der Standardwert von `0` zugewiesen.

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

In der obigen Demo können Sie die Optionen auf der linken Seite auswählen, um den Wert der `order`-Eigenschaft der rosa Box zu ändern. Die hellblauen Boxen haben feste `order`-Werte zugewiesen bekommen.

Beachten Sie die Auswirkung der Quellreihenfolge. Wenn zum Beispiel `order: 2;` ausgewählt wird, wird die rosa Box vor den beiden blauen Boxen mit `order: 2;` platziert. Das liegt daran, dass die rosa Box im Quellcode vor den blauen Boxen erscheint.

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

Da `order` nur die _visuelle Reihenfolge_ von Elementen und nicht deren logische oder Tab-Reihenfolge beeinflussen soll, sollte es nicht in nicht-visuellen Medien wie [Speech](https://www.w3.org/TR/css-speech-1/) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display)-Modul, betrifft diese Eigenschaft nur Grid- und Flex-Elemente. Wenn `order` auf ein Element gesetzt wird, dessen Elternelement keine Flex- oder Grid-Container durch die {{cssxref("display")}}-Eigenschaft erstellt, hat dies keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die ordinale Gruppe, die für das Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft führt zu einer Trennung zwischen der visuellen Darstellung von Inhalten und der DOM-Reihenfolge. Dies wirkt sich negativ auf Benutzer mit Sehbehinderungen aus, die mit Hilfe von Unterstützungstechnologien wie einem Screenreader navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, haben Ihre Benutzer unterschiedliche Erlebnisse, je nachdem, wie sie auf Ihre Inhalte zugreifen.

- [Flexbox & der Diskrepanz bei der Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) von Tink (2016)
- [Die Reihenfolge des Quellcodes spielt eine Rolle](https://adrianroselli.com/2015/09/source-order-matters.html) von Adrian Roselli (2015)
- [Erklärung der WCAG-Richtlinie 1.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Reihenfolge von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Layout mit zwei Seitenleisten.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltsbereich ein. Der Hauptinhalt enthält einen Artikel und zwei Seitenleisten. Beachten Sie deren Reihenfolge! Wir verwenden die CSS-`order`-Eigenschaft, um deren visuelle Reihenfolge zu ändern.

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

Wir gestalten den Hauptbereich mit den Funktionen des [flexiblen Box-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout); indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}}-Element zu einem Flex-Container. Standardmäßig erstellt dies Flex-Elemente von gleicher vertikaler Größe. Die Seitenleisten erhalten beide eine absolute {{cssxref("width")}}, während das {{htmlelement("article")}} den gesamten [positiven freien Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem {{cssxref("flex-grow")}}-Faktor verbraucht, der über die {{cssxref("flex")}}-Kurzschrift gesetzt wird.

Wir setzen dann verschiedene `order`-Werte für jedes der drei Kinder des Flex-Containers; das bedeutet, dass das CSS die visuelle Reihenfolge dieser Komponenten definiert, anstatt dass sie in der Reihenfolge erscheinen, in der sie im HTML deklariert wurden.

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

Das `<article>` erscheint zuerst in der Quellreihenfolge, wird aber visuell in der Mitte gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- {{Glossary("Reading_order", "Lesereihenfolge")}}
