---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`order`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt die Reihenfolge fest, in der ein Element in einem Flex- oder Raster-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Quellcode-Reihenfolge sortiert. Elementen, die keinen expliziten `order`-Wert zugewiesen bekommen, wird der Standardwert `0` zugewiesen.

{{EmbedInteractiveExample("pages/css/order.html")}}

In der obigen Demo können Sie die Optionen auf der linken Seite auswählen, um den Wert der `order`-Eigenschaft des pinkfarbenen Kastens zu ändern. Die hellblauen Kästen wurden mit festen `order`-Werten versehen.

Beachten Sie die Auswirkung der Quellreihenfolge. Zum Beispiel, wenn `order: 2;` ausgewählt wird, wird der pinkfarbene Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Das liegt daran, dass der pinkfarbene Kasten im Quellcode vor den blauen Kästen erscheint.

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

Da `order` nur dazu bestimmt ist, die _visuelle Reihenfolge_ von Elementen zu beeinflussen und nicht deren logische oder Tab-Reihenfolge, darf `order` nicht auf nicht-visuellen Medien wie [Sprache](/de/docs/Web/CSS/@media#speech) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display)-Modul, wirkt sich diese Eigenschaft nur auf Raster- und Flex-Elemente aus. Wenn `order` auf einem Element gesetzt wird, dessen übergeordnete `{{cssxref("display")}}` Eigenschaft keinen Flex- oder Raster-Container erstellt, hat die `order`-Eigenschaft keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die ordinalen Gruppen, die vom Element verwendet werden sollen.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft schafft eine Trennung zwischen der visuellen Darstellung von Inhalten und der DOM-Reihenfolge. Dies wird sich nachteilig auf sehbehinderte Benutzer auswirken, die sich mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, werden Ihre Benutzer je nach Zugriffsart auf Ihre Inhalte unterschiedliche Erfahrungen machen.

- [Flexbox & die Trennung von Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) durch Tink (2016)
- [Die Quellreihenfolge zählt](https://adrianroselli.com/2015/09/source-order-matters.html) von Adrian Roselli (2015)
- [Verstehen der WCAG, Erklärung der Richtlinie 1.3](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verstehen des Erfolgskriteriums 1.3.2 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anordnung von Elementen in einem Flex-Container

In diesem Beispiel erstellen wir ein klassisches Layout mit zwei Seitenleisten.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltbereich hinzu. Der Hauptinhalt enthält einen Artikel und zwei Seitenleisten. Beachten Sie ihre Reihenfolge! Wir verwenden die `order`-Eigenschaft von CSS, um ihre visuelle Reihenfolge zu ändern.

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

Wir stylen den Hauptbereich mit Merkmalen des [flexiblen Box-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout)-Moduls; indem wir `{{cssxref("display")}}` auf `flex` setzen, wird das `{{htmlelement("main")}}`-Element zu einem Flex-Container. Standardmäßig erstellt dies Flex-Elemente von gleicher vertikaler Größe. Die Seitenleisten werden beide mit einer absoluten `{{cssxref("width")}}` versehen, während das `{{htmlelement("article")}}` den gesamten [positiven freien Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem Java-Class-Am "FL-200" via `{{cssxref("flex")}}`-Kurzschrift gesetztem `{{cssxref("flex-grow")}}`-Faktor ausfüllt.

Wir setzen dann unterschiedliche `order`-Eigenschaftswerte auf jedes der drei Kinder des Flex-Containers; dies bedeutet, dass das CSS die visuelle Reihenfolge dieser Komponente definiert und nicht die Reihenfolge, in der sie im HTML deklariert wird.

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

- [Grundlagen des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS-Rasterlayout und Zugänglichkeit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS display](/de/docs/Web/CSS/CSS_display)-Modul
