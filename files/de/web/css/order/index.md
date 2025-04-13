---
title: order
slug: Web/CSS/order
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{CSSRef}}

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

Im obigen Demo können Sie die Optionen auf der linken Seite auswählen, um den `order`-Wert der pinkfarbenen Box zu ändern. Die hellblauen Boxen haben feste `order`-Werte erhalten.

Berücksichtigen Sie den Effekt der Quellreihenfolge. Zum Beispiel, wenn `order: 2;` ausgewählt wird, wird die pinkfarbene Box vor den beiden blauen Boxen mit `order: 2;` platziert. Dies liegt daran, dass die pinkfarbene Box im Quellcode vor den blauen Boxen erscheint.

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

Da `order` nur die _visuelle Reihenfolge_ von Elementen und nicht deren logische oder Tab-Reihenfolge beeinflussen soll, darf es nicht auf nicht-visuellen Medien wie [Sprache](https://www.w3.org/TR/css-speech-1/) verwendet werden.

Definiert im [CSS display](/de/docs/Web/CSS/CSS_display)-Modul wirkt sich diese Eigenschaft nur auf Grid- und Flex-Elemente aus. Wenn `order` auf ein Element gesetzt ist, dessen übergeordnete {{cssxref("display")}}-Eigenschaft keinen Flex- oder Grid-Container erstellt, hat dies keine Wirkung.

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die Ordnungsgruppe, die vom Element verwendet werden soll.

## Barrierefreiheit

Die Verwendung der `order`-Eigenschaft führt zu einer Trennung zwischen der visuellen Darstellung von Inhalten und der DOM-Reihenfolge. Dies beeinträchtigt Benutzer mit eingeschränktem Sehvermögen, die mit Hilfe von unterstützender Technologie wie einem Screen Reader navigieren. Wenn die visuelle Reihenfolge von der DOM-Reihenfolge abweicht, werden Ihre Benutzer unterschiedliche Erlebnisse haben, je nachdem, wie sie auf Ihre Inhalte zugreifen.

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via Tink (2016)
- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) via Adrian Roselli (2015)
- [Erklärung zu WCAG, Richtlinie 1.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erklärung zum Erfolgskriterium 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Elemente in einem Flex-Container anordnen

In diesem Beispiel erstellen wir ein klassisches Zwei-Sidebar-Layout.

#### HTML

Wir fügen eine Kopfzeile, eine Fußzeile und einen Hauptinhaltsbereich ein. Der Hauptinhalt enthält einen Artikel und zwei Sidebars. Beachten Sie deren Reihenfolge! Wir verwenden die CSS-`order`-Eigenschaft, um deren visuelle Reihenfolge zu ändern.

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

Wir stylen den Hauptbereich mit den Funktionen des [flexiblen Box-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout)-Moduls; durch das Setzen von {{cssxref("display")}} auf `flex` wird das {{htmlelement("main")}}-Element zu einem Flex-Container. Standardmäßig erzeugt dies Flex-Elemente von gleicher vertikaler Größe. Den Sidebars wird eine absolute {{cssxref("width")}} zugewiesen, während der {{htmlelement("article")}} mit einem {{cssxref("flex-grow")}}-Faktor, der über die {{cssxref("flex")}}-Kurzform festgelegt wird, den gesamten [positiven freien Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) einnimmt.

Wir setzen dann unterschiedliche `order`-Werte für jedes der drei Kinder des Flex-Containers; dies bedeutet, dass das CSS die visuelle Reihenfolge dieser Komponente definiert, anstatt dass sie in der im HTML deklarierten Reihenfolge erscheint.

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

Der `<article>` erscheint zuerst in der Quellreihenfolge, wird jedoch visuell in der Mitte dargestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Flex-Elemente anordnen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [CSS Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
