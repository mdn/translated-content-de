---
title: CSS-Eigenschaft `flex-flow`
short-title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`flex-flow`** legt die Richtung eines Flex-Containers sowie sein Umbruchverhalten fest.

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

## Bestandteileigenschaften

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

Diese Eigenschaft wird als durch Leerzeichen getrennte Liste von Schlüsselwörtern der folgenden Typen angegeben:

- {{cssxref("flex-direction")}}
  - : Ein Schlüsselwort, das die Hauptachse und Richtung festlegt, in der Flex-Elemente im Flex-Container platziert werden.
- {{cssxref("flex-wrap")}}
  - : Ein oder zwei Schlüsselwörter, die festlegen, ob Flex-Elemente in mehrere Zeilen umbrochen werden können, und, falls Umbruch erlaubt ist, die Richtung bestimmen, in der die Zeilen gestapelt werden, sowie, ob sie ausgeglichen werden.

## Beschreibung

Die Kurzform-Eigenschaft `flex-flow` legt die Eigenschaften {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} fest und definiert damit die Richtung eines Flex-Containers und sein Umbruchverhalten. Sie kann außerdem festlegen, dass Flex-Elemente ausgeglichen werden, wenn ein Umbruch erlaubt ist.

Beispielsweise legt `column-reverse wrap` die Hauptachse auf die Blockrichtung mit umgekehrtem Hauptanfang und Hauptende fest, wobei Flex-Elemente umbrochen werden dürfen und bei Bedarf neue Zeilen erstellt werden.

```css
.container {
  flex-flow: column-reverse wrap;
}
```

Um die Flex-Elemente gleichmäßig über jede Flex-Zeile zu verteilen, können Sie zusätzlich zu `wrap` das Schlüsselwort [`balance`](/de/docs/Web/CSS/Reference/Properties/flex-wrap#balance) für `flex-wrap` einschließen:

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

### Grundlegende Verwendung

Dieses Beispiel demonstriert die Verwendung der Kurzform `flex-flow` für einen Flex-Container, sodass die Elemente in umgekehrter Reihenfolge über mehrere Zeilen angeordnet werden.

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

Wir legen {{HTMLElement("ul")}} mit der Eigenschaft {{cssxref("display")}} als Flex-Container fest, definieren eine {{cssxref("width")}}, fügen ein {{cssxref("gap")}} hinzu, damit zwischen Flex-Elementen und Flex-Zeilen etwas Platz ist, und setzen dann `flex-flow`, um die Elemente in umgekehrter Reihenfolge umzubrechen. Zusätzliche CSS-Regeln wurden der Kürze halber ausgeblendet.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
