---
title: Reihenfolge
slug: Web/CSS/order
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`order`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Reihenfolge fest, in der ein Element in einem Flex- oder Raster-Container angezeigt wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Quellcode-Reihenfolge sortiert. Elemente, denen kein expliziter `order`-Wert zugewiesen ist, erhalten den Standardwert `0`.

{{EmbedInteractiveExample("pages/css/order.html")}}

Wählen Sie im obigen Demo die Optionen auf der linken Seite aus, um den Wert der `order`-Eigenschaft des rosa Kastens zu ändern. Die hellblauen Kästchen haben feste `order`-Werte erhalten.

Beachten Sie die Auswirkung der Quellreihenfolge. Zum Beispiel, wenn `order: 2;` ausgewählt ist, wird der rosa Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Das liegt daran, dass der rosa Kasten vor den blauen Kästen im Quellcode erscheint.

## Syntax

```css
/* <integer> Werte */
order: 5;
order: -5;

/* Globale Werte */
order: inherit;
order: initial;
order: revert;
order: revert-layer;
order: unset;
```

Da `order` nur dazu gedacht ist, die _visuelle Reihenfolge_ von Elementen zu beeinflussen und nicht deren logische oder Tab-Reihenfolge, sollte `order` nicht in nicht-visuellen Medien wie [Sprache](/de/docs/Web/CSS/@media#speech) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display) Modul, beeinflusst diese Eigenschaft nur Raster- und Flexelemente. Wenn `order` bei einem Element gesetzt ist, dessen Eltern-Element die {{cssxref("display")}} Eigenschaft nicht so definiert, dass ein Flex- oder Raster-Container erstellt wird, hat die `order`-Eigenschaft keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die Ordnungsgruppe, die von dem Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft führt zu einer Diskrepanz zwischen der visuellen Darstellung von Inhalten und der DOM-Reihenfolge. Dies wirkt sich nachteilig auf Nutzer mit Sehbehinderungen aus, die mit Unterstützungstechnologien wie einem Bildschirmleser navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, werden Ihre Nutzer je nachdem, wie sie auf Ihre Inhalte zugreifen, unterschiedliche Erlebnisse haben.

- [Flexbox & die Trennung zwischen Keyboard-Navigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über Tink (2016)
- [Quellreihenfolge ist wichtig](https://adrianroselli.com/2015/09/source-order-matters.html) über Adrian Roselli (2015)
- [WCAG verstehen, Richtlinie 1.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.2 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Reihenfolge von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Zwei-Seitenleisten-Layout.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltbereich hinzu. Der Hauptinhaltbereich enthält einen Artikel und zwei Seitenleisten. Beachten Sie deren Reihenfolge! Wir werden die CSS `order`-Eigenschaft verwenden, um deren visuelle Reihenfolge zu ändern.

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

Wir gestalten den Hauptbereich unter Verwendung der [flexiblen Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul-Features; indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}} Element zu einem Flex-Container. Standardmäßig entstehen dadurch Flex-Elemente von gleicher vertikaler Größe. Beide Seitenleisten erhalten eine absolute {{cssxref("width")}}, während das {{htmlelement("article")}} den gesamten [positiven freien Platz](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem {{cssxref("flex-grow")}} Faktor, der über die {{cssxref("flex")}} Abkürzung gesetzt wird, nutzt.

Wir setzen dann verschiedene `order`-Eigenschaftswerte auf jedes der drei Kinder des Flex-Containers; das bedeutet, dass CSS die visuelle Reihenfolge dieser Komponente definiert, anstatt dass sie in der in HTML deklarierten Reihenfolge erscheint.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS Rasterlayout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/de/docs/Web/CSS/CSS_display) Modul
