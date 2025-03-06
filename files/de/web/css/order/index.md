---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`order`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Reihenfolge fest, in der ein Element in einem Flex- oder Raster-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann in der Reihenfolge ihres Quellcodes sortiert. Elementen, denen kein expliziter `order`-Wert zugewiesen ist, wird der Standardwert `0` zugewiesen.

{{EmbedInteractiveExample("pages/css/order.html")}}

Im obigen Demo wählen Sie die Optionen auf der linken Seite, um den Wert der `order`-Eigenschaft des rosa Kastens zu ändern. Die hellblauen Kästen haben feste `order`-Werte erhalten.

Beachten Sie die Auswirkungen der Quellreihenfolge. Wenn zum Beispiel `order: 2;` ausgewählt ist, wird der rosa Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Dies liegt daran, dass der rosa Kasten im Quellcode vor den blauen Kästen erscheint.

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

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display)-Modul, wirkt sich diese Eigenschaft nur auf Raster- und Flex-Elemente aus. Wenn `order` auf ein Element gesetzt wird, dessen übergeordnete {{cssxref("display")}}-Eigenschaft keinen Flex- oder Raster-Container erzeugt, hat es keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die Ordnungsgruppe, die vom Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft erzeugt eine Trennung zwischen der visuellen Präsentation des Inhalts und der DOM-Reihenfolge. Dies wirkt sich nachteilig auf sehbehinderte Benutzer aus, die mit Hilfe von unterstützender Technologie wie einem Bildschirmlesegerät navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, werden Ihre Benutzer je nach Zugang zu Ihren Inhalten unterschiedliche Erfahrungen machen.

- [Flexbox & die Trennung der Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via Tink (2016)
- [Die Quellreihenfolge zählt](https://adrianroselli.com/2015/09/source-order-matters.html) via Adrian Roselli (2015)
- [Verstehen der WCAG, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verstehen des Erfolgskriteriums 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Reihenfolge von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Layout mit zwei Seitenleisten.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltsbereich hinzu. Der Hauptinhalt umfasst einen Artikel und zwei Seitenleisten. Beachten Sie deren Reihenfolge! Wir werden die CSS-`order`-Eigenschaft verwenden, um ihre visuelle Reihenfolge zu ändern.

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

Wir gestalten das Hauptfeld mit Merkmalen des [flexiblen Box-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout); indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}}-Element zum Flex-Container. Standardmäßig werden dadurch Flex-Elemente von gleicher vertikaler Größe erstellt. Die Seitenleisten erhalten beide eine absolute {{cssxref("width")}}, während der {{htmlelement("article")}} den gesamten [positiven freien Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem über die {{cssxref("flex")}}-Kurzschrift gesetzten {{cssxref("flex-grow")}}-Faktor verbrauchen wird.

Wir setzen dann verschiedene `order`-Werte auf jedes der drei Unterelemente des Flex-Containers; das bedeutet, dass das CSS die visuelle Reihenfolge dieses Components definiert, anstatt dass es in der im HTML deklarierten Reihenfolge erscheint.

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

Das `<article>` erscheint zuerst in der Quellreihenfolge, wird jedoch visuell in der Mitte dargestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS-Rasterlayout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/de/docs/Web/CSS/CSS_display)-Modul
