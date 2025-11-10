---
title: order
slug: Web/CSS/Reference/Properties/order
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`order`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Reihenfolge fest, in der ein Element in einem Flex- oder Grid-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Quellcode-Reihenfolge sortiert. Elementen, denen kein expliziter `order`-Wert zugewiesen wird, erhalten den Standardwert `0`.

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

In der obigen Demo wählen Sie die Optionen auf der linken Seite, um den Wert der `order`-Eigenschaft des rosa Kastens zu ändern. Den hellblauen Kästchen wurden feste `order`-Werte zugewiesen.

Beachten Sie die Wirkung der Quellreihenfolge. Zum Beispiel, wenn `order: 2;` ausgewählt ist, wird der rosa Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Das liegt daran, dass der rosa Kasten vor den blauen Kästen im Quellcode erscheint.

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

Da `order` nur die _visuelle Reihenfolge_ von Elementen und nicht deren logische oder Tab-Reihenfolge beeinflussen soll, darf sie nicht in nicht-visuellen Medien wie [Speech](https://drafts.csswg.org/css-speech/) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/Guides/Display)-Modul, beeinflusst diese Eigenschaft nur Grid- und Flex-Elemente. Wenn `order` auf ein Element eingestellt wird, dessen übergeordnete {{cssxref("display")}}-Eigenschaft keinen Flex- oder Grid-Container erstellt, hat das keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die Ordnungsgruppe, die vom Element verwendet werden soll.

## Barrierefreiheit

Durch die Verwendung der `order`-Eigenschaft entsteht ein Unterschied zwischen der visuellen Darstellung von Inhalten und der DOM-Reihenfolge. Dies wirkt sich nachteilig auf sehbehinderte Benutzer aus, die mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, haben Ihre Benutzer unterschiedliche Erfahrungen, je nachdem, wie sie auf Ihre Inhalte zugreifen.

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via Tink (2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) via Adrian Roselli (2015)
- [Understanding WCAG, Guideline 1.3 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anordnen von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Zwei-Sidebar-Layout.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltbereich ein. Der Hauptinhalt enthält einen Artikel und zwei Sidebars. Beachten Sie deren Reihenfolge! Wir verwenden die CSS `order`-Eigenschaft, um deren visuelle Reihenfolge zu ändern.

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

Wir gestalten den Hauptbereich mit den Eigenschaften des [flexiblen Box-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout); indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}}-Element zu einem Flex-Container. Dies erzeugt standardmäßig Flex-Elemente von gleicher vertikaler Größe. Den Sidebars wird eine absolute {{cssxref("width")}} zugewiesen, während das {{htmlelement("article")}} allen [positiven freien Raum](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#positive_and_negative_free_space) mit einem {{cssxref("flex-grow")}}-Faktor, der über die {{cssxref("flex")}}-Abkürzung gesetzt ist, einnimmt.

Wir setzen dann unterschiedliche `order`-Eigenschaftswerte auf jedes der drei Kinder des Flex-Containers; das bedeutet, dass das CSS die visuelle Reihenfolge dieser Komponenten definiert, anstatt sie in der im HTML angegebenen Reihenfolge erscheinen zu lassen.

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

Das `<article>` erscheint zuerst in der Quellreihenfolge, wird jedoch visuell in der Mitte angezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [CSS Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [CSS display](/de/docs/Web/CSS/Guides/Display)-Modul
- {{Glossary("Reading_order", "Lesereihenfolge")}}
