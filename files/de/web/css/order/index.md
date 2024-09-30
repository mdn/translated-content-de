---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`order`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Reihenfolge fest, in der ein Element in einem Flex- oder Grid-Container angeordnet wird. Elemente in einem Container werden nach aufsteigendem `order`-Wert und dann nach ihrer Quellcode-Reihenfolge sortiert. Elemente, denen kein expliziter `order`-Wert zugewiesen wird, erhalten den Standardwert `0`.

{{EmbedInteractiveExample("pages/css/order.html")}}

In der obigen Demo wählen Sie die Optionen auf der linken Seite, um den `order`-Wert des pinkfarbenen Kastens zu ändern. Die hellblauen Kästen haben feste `order`-Werte erhalten.

Beachten Sie den Effekt der Quellreihenfolge. Wenn zum Beispiel `order: 2;` ausgewählt ist, wird der pinkfarbene Kasten vor den beiden blauen Kästen mit `order: 2;` platziert. Dies liegt daran, dass der pinkfarbene Kasten im Quellcode vor den blauen Kästen erscheint.

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

Da `order` nur die _visuelle Reihenfolge_ von Elementen und nicht deren logische oder Tab-Reihenfolge beeinflussen soll, darf `order` nicht auf nicht-visuellen Medien wie [speech](/de/docs/Web/CSS/@media#speech) verwendet werden.

In dem [CSS display](/de/docs/Web/CSS/CSS_display)-Modul definiert, wirkt sich diese Eigenschaft nur auf Grid- und Flex-Elemente aus. Wenn `order` auf ein Element angewendet wird, dessen Elternelement die {{cssxref("display")}}-Eigenschaft nicht mit einem Flex- oder Grid-Container erstellt, hat die `order`-Eigenschaft keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die zu verwendende Ordnungsgruppe des Elements.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft führt zu einer Diskrepanz zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge. Dies wirkt sich nachteilig auf Benutzer mit Sehbehinderungen aus, die mithilfe von unterstützenden Technologien wie einem Screenreader navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, werden Ihre Benutzer unterschiedliche Erfahrungen machen, je nachdem, wie sie auf Ihren Inhalt zugreifen.

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via Tink (2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) via Adrian Roselli (2015)
- [Understanding WCAG, Guideline 1.3 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Elemente in einem Flex-Container anordnen

In diesem Beispiel erstellen wir ein klassisches Layout mit zwei Seitenleisten.

#### HTML

Wir fügen einen Header, einen Footer und einen Hauptinhaltbereich hinzu. Der Hauptinhalt enthält einen Artikel und zwei Seitenleisten. Beachten Sie ihre Reihenfolge! Wir verwenden die CSS-`order`-Eigenschaft, um ihre visuelle Reihenfolge zu ändern.

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

Wir gestalten den Hauptbereich mit den Funktionen des [flexiblen Box-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout); indem wir {{cssxref("display")}} auf `flex` setzen, wird das {{htmlelement("main")}}-Element zu einem Flex-Container. Standardmäßig erzeugt dies Flex-Elemente gleicher vertikaler Größe. Die Seitenleisten erhalten beide eine absolute {{cssxref("width")}}, während das {{htmlelement("article")}} den gesamten [positiven Freiraum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) mit einem via {{cssxref("flex")}} Kurzschreibweise gesetzten {{cssxref("flex-grow")}}-Faktor ausfüllt.

Wir setzen dann unterschiedliche `order`-Eigenschaftswerte für jedes der drei Kinder des Flex-Containers fest; dies bedeutet, dass das CSS die visuelle Reihenfolge dieses Komponenten definiert, anstatt dass sie in der Reihenfolge erscheint, die im HTML deklariert ist.

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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
