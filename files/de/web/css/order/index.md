---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Die **`order`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Reihenfolge fest, in der ein Element in einem Flex- oder Grid-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Quellcode-Reihenfolge sortiert. Elementen, denen kein expliziter `order`-Wert zugewiesen wurde, wird der Standardwert `0` zugewiesen.

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

In der obigen Demo wählen Sie die Optionen auf der linken Seite, um den Wert der `order`-Eigenschaft des pinkfarbenen Kästchens zu ändern. Die hellblauen Kästchen haben feste `order`-Werte.

Beachten Sie den Effekt der Quellreihenfolge. Wenn zum Beispiel `order: 2;` ausgewählt wird, wird das pinkfarbene Kästchen vor den beiden blauen Kästchen mit `order: 2;` platziert. Dies liegt daran, dass das pinkfarbene Kästchen im Quellcode vor den blauen Kästchen erscheint.

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

Da `order` nur dazu gedacht ist, die _visuelle Reihenfolge_ von Elementen zu beeinflussen und nicht deren logische Reihenfolge oder Tab-Reihenfolge, darf es nicht in nicht-visuellen Medien wie [Sprache](https://drafts.csswg.org/css-speech/) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display) Modul, wirkt sich diese Eigenschaft nur auf Grid- und Flex-Elemente aus. Wenn `order` auf einem Element gesetzt ist, dessen Eltern-{{cssxref("display")}}-Eigenschaft keinen Flex- oder Grid-Container erstellt, hat es keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die Ordnungsgruppe, die vom Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft wird eine Trennung zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge erzeugen. Dies wird sich negativ auf sehbehinderte Benutzer auswirken, die mit Unterstützungstechnologien wie einem Bildschirmleser navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, haben Ihre Benutzer unterschiedliche Erfahrungen, je nachdem, wie sie auf Ihre Inhalte zugreifen.

- [Flexbox & die Tastaturnavigations-Trennung](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via Tink (2016)
- [Quellreihenfolge ist wichtig](https://adrianroselli.com/2015/09/source-order-matters.html) via Adrian Roselli (2015)
- [Verständnis der WCAG, Erklärung der Richtlinie 1.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anordnung von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Zwei-Seitenleisten-Layout.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltsbereich hinzu. Der Hauptinhalt umfasst einen Artikel und zwei Seitenleisten. Beachten Sie ihre Reihenfolge! Wir verwenden die CSS-`order`-Eigenschaft, um ihre visuelle Reihenfolge zu ändern.

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

Wir gestalten den Hauptbereich mit den Funktionen des [flexiblen Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Moduls; indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}} Element zu einem Flex-Container. Standardmäßig erstellt dies Flex-Elemente von gleicher vertikaler Größe. Die Seitenleisten erhalten beide eine absolute {{cssxref("width")}}, während das {{htmlelement("article")}} mit einem über das {{cssxref("flex")}}-Shorthand gesetzten {{cssxref("flex-grow")}}-Faktor den gesamten [positiven freien Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) beansprucht.

Dann setzen wir verschiedene `order`-Eigenschaftswerte für jedes der drei Kinder des Flex-Containers; dies bedeutet, dass das CSS die visuelle Reihenfolge dieses Bestandteils definiert, anstatt dass es in der im HTML deklarierten Reihenfolge erscheint.

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

Das `<article>` erscheint zuerst in der Quellreihenfolge, wird aber visuell in der Mitte dargestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS-Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/de/docs/Web/CSS/CSS_display) Modul
- {{Glossary("Reading_order", "Lesereihenfolge")}}
