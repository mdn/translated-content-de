---
title: flex-basis
slug: Web/CSS/flex-basis
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`flex-basis`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die initiale Hauptgröße eines {{Glossary("flex_item", "Flex-Items")}} fest. Sie legt die Größe des Inhaltsrahmens fest, es sei denn, sie wird anderweitig mit {{Cssxref("box-sizing")}} gesetzt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschrift mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-basis` alleine zu setzen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/flex#values) erweitern sich zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, und `flex-basis`, um die üblicherweise gewünschten Flex-Verhaltensweisen zu erreichen.

{{InteractiveExample("CSS Demo: flex-basis")}}

```css interactive-example-choice
flex-basis: auto;
```

```css interactive-example-choice
flex-basis: 0;
```

```css interactive-example-choice
flex-basis: 200px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
```

In diesem Beispiel sind die Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} bei allen drei Elementen auf `1` gesetzt, was bedeutet, dass das Flex-Item von der initialen `flex-basis` aus wachsen und schrumpfen kann.

Das Demo ändert den `flex-basis`-Wert des ersten Flex-Elements, wodurch es wächst oder schrumpft, um den verfügbaren Platz zu füllen. Die anderen Flex-Items werden ebenfalls die Größe ändern; sie werden mindestens `min-content` groß sein. Zum Beispiel, wenn die `flex-basis` des ersten Elements auf `200px` gesetzt ist, beginnt es bei `200px`, schrumpft dann jedoch, um den verfügbaren Platz auszufüllen.

Wenn `flex-basis` auf einen anderen Wert als `auto` gesetzt ist und eine `width` (oder `height` im Falle von `flex-direction: column`) für dasselbe Flex-Item gesetzt ist, hat der `flex-basis`-Wert Vorrang.

## Syntax

```css
/* Specify <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatically size based on the flex item's content */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

Die Eigenschaft `flex-basis` wird entweder als das Schlüsselwort `content` oder ein `<'width'>` angegeben.

### Werte

- `<'width'>`
  - : Jede der folgenden Einheiten:
    - {{cssxref("&lt;length&gt;")}} setzt einen absoluten Wert.
    - {{cssxref("&lt;percentage&gt;")}} setzt einen Prozentsatz der Breite oder Höhe des Inhaltsbereichs des umschließenden Blocks. Prozentwerte von `flex-basis` werden relativ zum Flex-Container aufgelöst. Wenn die Größe des Flex-Containers unbestimmt ist, wird der verwendete Wert für `flex-basis` auf `content` gesetzt.
    - `auto` verwendet den Wert von {{cssxref("width")}} im horizontalen Schreibmodus und den Wert von {{cssxref("height")}} im vertikalen Schreibmodus; wenn der entsprechende Wert ebenfalls `auto` ist, wird stattdessen der `content` Wert verwendet.
    - {{cssxref("max-content")}} setzt die intrinsische bevorzugte Breite.
    - {{cssxref("min-content")}} setzt die intrinsische Mindestbreite.
    - {{cssxref("fit-content")}} setzt die maximale mögliche Größe des Inhaltsbereichs eines umschließenden Blocks, begrenzt durch die Werte `min-content` und `max-content`, und basierend auf dem Inhalt des aktuellen Elements berechnet.

- `content`
  - : Zeigt eine automatische Größe an, basierend auf dem Inhalt des Flex-Items.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Initialgrößen von Flex-Items festlegen

#### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

#### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### Ergebnisse

{{EmbedLiveSample('Setting_flex_item_initial_sizes', '', '360')}}

### Flex-Basis `0` vs `0%`

Dieses Beispiel zeigt den Unterschied zwischen einer `flex-basis` von `0` und einer `flex-basis` von `0%`, wenn `flex-direction` auf `column` gesetzt ist und die Flex-Container und Flex-Items keine gesetzte Höhe haben; während `0` eine absolute Länge ist, werden Prozentwerte von `flex-basis` zu [`content`](#content) Werten aufgelöst.

#### HTML

Wir fügen zwei Flex-Container mit derselben Struktur ein, die ähnlich gestylt werden, außer für ihre `flex-basis` Werte. Die Container haben jeweils zwei Kinder: ein Überschriften-`<div>` und ein `<section>`. Das `<section>`-Element hat ein Inhalts-`<div>`-Kind, das nicht als Flex-Item gesetzt wird, aber eine Höhe erhält.

```html
<div class="container basis-0">
  <div>heading</div>
  <section>
    flex-basis: 0;
    <div class="content"></div>
  </section>
</div>
<div class="container basis-0-percent">
  <div>heading</div>
  <section>
    flex-basis: 0%;
    <div class="content"></div>
  </section>
</div>
```

#### CSS

Wir stylen die Container als Inline-Flex-Container, die nebeneinander erscheinen, um den Vergleich zu erleichtern. Wir setzen die `flex-direction` auf `column`. Die Flex-Items des ersten Containers haben einen `flex-basis`-Wert von `0`, während die des zweiten Containers einen `flex-basis`-Wert von `0%` haben. Weder die Flex-Container noch ihre Flex-Items haben eine ausdrücklich gesetzte Höhe, aber die Höhen der `section`-Elemente können `200px` nicht überschreiten und ihre Kinder haben eine Höhe von `300px`.

```css
.container {
  width: 40vw;
  padding: 1rem;
  border: 1px dashed blue;

  display: inline-flex;
  flex-direction: column;
}

section {
  border: 1px solid red;

  overflow: auto;
  min-height: 200px;
}

.content {
  background: wheat;
  height: 300px;
}

.container.basis-0 > * {
  flex-basis: 0;
}
.container.basis-0-percent > * {
  flex-basis: 0%;
}
```

#### Ergebnisse

{{EmbedLiveSample('flex_basis_0_vs_0', '100%', '400')}}

Im ersten Container, mit `flex-basis: 0`, hat das `<section>`-Element eine initiale Hauptgröße von null und wächst bis zur `200px` Höhe. Im zweiten Container, mit `flex-basis: 0%`, hat das `<section>`-Element eine initiale Hauptgröße von `300px`, da die Prozentwerte von `flex-basis`, wenn der Flex-Container keine gesetzte Höhe hat, auf den [`content`](#content) Wert aufgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschrift
- {{cssxref("inline-size")}}
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnisse von Flex-Items entlang der Hauptachse kontrollieren](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
