---
title: "`flex-flow` CSS-Eigenschaft"
short-title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

Die **`flex-flow`**-[CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) spezifiziert die Richtung eines Flex-Containers sowie das Verhalten beim Umbruch.

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

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Details zu den Werten finden Sie unter {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von column-reverse und wrap

In diesem Beispiel ist die Hauptachse die Blockrichtung mit einem umgekehrten Hauptanfang und Hauptende. Die Flex-Elemente dürfen umgebrochen werden und bei Bedarf neue Linien erzeugen.

```css
.container {
  flex-flow: column-reverse wrap;
}
```

Um die Flex-Elemente gleichmäßig über jede Flex-Linie zu verteilen, können Sie das `flex-wrap`-Schlüsselwort [`balance`](/de/docs/Web/CSS/Reference/Properties/flex-wrap#balance) zusätzlich zu `wrap` einfügen:

```css
.container {
  flex-flow: column-reverse wrap balance;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
