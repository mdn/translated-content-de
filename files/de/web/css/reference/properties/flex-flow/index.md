---
title: "`flex-flow` CSS-Eigenschaft"
short-title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
l10n:
  sourceCommit: b5f3a5af4e7d3bc396ca5dbf159cadaa114f3fd9
---

Die **`flex-flow`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) spezifiziert die Richtung eines Flex-Containers sowie dessen Umbruchverhalten.

{{InteractiveExample("CSS Demo: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: row wrap balance;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```css interactive-example-choice
flex-flow: column balance wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
    <div>Item Seven</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 5px 10px;
}
```

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("flex-direction")}}
- {{cssxref("flex-wrap")}}

## Syntax

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;
flex-flow: wrap balance;
flex-flow: balance wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
flex-flow: row-reverse balance wrap

/* Global values */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### Werte

Sehen Sie {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} für Details zu den Werten.

## Beschreibung

Die `flex-flow` Kurzform-Eigenschaft spezifiziert die {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} Eigenschaften, die die Richtung eines Flex-Containers und dessen Umbruchverhalten definieren. Sie kann auch festlegen, dass Flex-Elemente ausgeglichen werden, wenn das Umbrechen erlaubt ist.

Zum Beispiel wird `column-reverse wrap` die Hauptachse in die Block-Richtung mit einem umgekehrten Hauptanfang und Hauptende setzen, wobei Flex-Elemente erlaubt werden, umzubrechen und bei Bedarf neue Zeilen zu erstellen.

```css
.container {
  flex-flow: column-reverse wrap;
}
```

Um die Flex-Elemente gleichmäßig über jede Flex-Linie zu verteilen, können Sie das `flex-wrap` Schlüsselwort [`balance`](/de/docs/Web/CSS/Reference/Properties/flex-wrap#balance) zusätzlich zu `wrap` einbeziehen:

```css
.container {
  flex-flow: column-reverse wrap balance;
}
```

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die Verwendung der `flex-flow` Kurzform auf einem Flex-Container, sodass die Elemente rückwärts über mehrere Zeilen verteilt werden.

#### HTML

Wir fügen eine Liste von Wörtern in alphabetischer Reihenfolge ein:

```html
<ul>
  <li>Alphabet</li>
  <li>Banana</li>
  <li>Crayons</li>
  <li>Dinosaurs</li>
  <li>Eggplant</li>
  <li>Foundation</li>
  <li>Ghosts</li>
  <li>Happy</li>
  <li>Igloo</li>
  <li>Janitors</li>
  <li>Kittens</li>
  <li>Lasso</li>
  <li>Magic 8-ball</li>
  <li>Nincompoop</li>
  <li>Orange</li>
  <li>Petunia</li>
  <li>Quality</li>
  <li>Rancid</li>
  <li>Shoelace</li>
  <li>Terydactyl</li>
  <li>Umbrella</li>
  <li>Valentine</li>
  <li>Westward</li>
  <li>Xylophone</li>
</ul>
```

#### CSS

Wir setzen das {{HTMLElement("ul")}} als Flex-Container mit der {{cssxref("display")}} Eigenschaft, definieren eine {{cssxref("width")}}, fügen einen {{cssxref("gap")}} hinzu, sodass etwas Platz zwischen den Flex-Elementen und Flex-Linien ist, und setzen dann `flex-flow`, um die Elemente in umgekehrter Reihenfolge umzubrechen. Zusätzliche CSS wurde zur Kürze verborgen.

```css
ul {
  display: flex;
  width: 31em;
  gap: 1em;

  flex-flow: row-reverse wrap-reverse;
}
```

```css hidden
ul {
  list-style: none;
  border: 1px solid;
  font-family: sans-serif;
}
li {
  font-size: 1.25rem;
  padding: 5px;
  border: 1px solid;
  background-color: lightpink;
}
li:nth-of-type(even) {
  background-color: lightgreen;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage","",310)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Anordnung von Flex-Items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
