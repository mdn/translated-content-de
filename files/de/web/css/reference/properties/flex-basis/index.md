---
title: "`flex-basis` CSS property"
short-title: flex-basis
slug: Web/CSS/Reference/Properties/flex-basis
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`flex-basis`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Hauptgröße eines {{Glossary("flex_item", "Flex-Elements")}} fest. Sie bestimmt die Größe des Inhaltsbereichs, es sei denn, es ist anders mit {{Cssxref("box-sizing")}} festgelegt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` anstelle von `flex-basis` alleine zu verwenden. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}} und `flex-basis`, die dabei helfen, die häufig gewünschten Flex-Verhalten zu erreichen.

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

In diesem Beispiel sind die Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} bei allen drei Elementen auf `1` gesetzt, was anzeigt, dass das Flex-Element vom anfänglichen `flex-basis` aus wachsen und schrumpfen kann.

Die Demo ändert den `flex-basis` Wert, der auf das erste Flex-Element gesetzt ist, wodurch es wächst oder schrumpft, um den verfügbaren Raum zu füllen. Die anderen Flex-Elemente ändern ebenfalls ihre Größe; sie werden mindestens `min-content`-groß sein. Zum Beispiel, wenn das `flex-basis` des ersten Elements auf `200px` gesetzt wird, startet es bei `200px`, schrumpft dann aber, um den verfügbaren Raum auszufüllen.

Wenn `flex-basis` auf einen anderen Wert als `auto` gesetzt wird und es eine `width` (oder `height` im Fall von `flex-direction: column`) für dasselbe Flex-Element gibt, hat der `flex-basis` Wert Vorrang.

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

Die `flex-basis` Eigenschaft wird entweder als das Schlüsselwort `content` oder als ein `<'width'>` angegeben.

### Werte

- `content`
  - : Bedeutet automatische Größenbestimmung, basierend auf dem Inhalt des Flex-Elements.

- `<'width'>`
  - : Jede der folgenden Einheiten:
    - {{cssxref("&lt;length&gt;")}} setzt einen absoluten Wert.
    - {{cssxref("&lt;percentage&gt;")}} setzt einen Prozentsatz der Breite oder Höhe des Inhaltsbereichs des umschließenden Blocks. Prozentuale Werte von `flex-basis` werden gegen den Flex-Container aufgelöst. Wenn die Größe des Flex-Containers unbestimmt ist, wird der verwendete Wert für `flex-basis` `content` sein.
    - `auto` verwendet den Wert von {{cssxref("width")}} im horizontalen Schreibmodus und den Wert von {{cssxref("height")}} im vertikalen Schreibmodus; wenn der entsprechende Wert ebenfalls `auto` ist, wird der `content` Wert stattdessen verwendet.
    - {{cssxref("max-content")}} setzt die intrinsische bevorzugte Breite.
    - {{cssxref("min-content")}} setzt die intrinsische Mindestbreite.
    - {{cssxref("fit-content")}} setzt die maximale mögliche Größe des Inhaltsbereichs eines umschließenden Blocks, begrenzt durch die `min-content` und `max-content` Werte, und basierend auf dem Inhalt des aktuellen Elements berechnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen der anfänglichen Größen von Flex-Elementen

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
  font-family: "Arial", sans-serif;
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
  color: #333333;
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

### `flex-basis` `0` vs `0%`

Dieses Beispiel zeigt den Unterschied zwischen einem `flex-basis` von `0` und einem `flex-basis` von `0%`, wenn `flex-direction` auf `column` gesetzt ist und die Flex-Container und Flex-Elemente keine festgelegte Höhe haben; während `0` eine absolute Länge ist, lösen sich prozentuale `flex-basis` Werte zu [`content`](#content) Werten auf.

#### HTML

Wir fügen zwei Flex-Container mit derselben Struktur ein, die ähnlich gestylt werden, außer für ihre `flex-basis` Werte. Jeder Container hat zwei Kinder: ein `<div>` Überschriftselement und ein `<section>`. Das `<section>`-Element hat ein `<div>` Kind für den Inhalt, das nicht als Flex-Element gesetzt wird, aber eine Höhe hat.

```html
<div class="container basis-0">
  <div>heading</div>
  <section>
    <div class="content">flex-basis: 0;</div>
  </section>
</div>
<div class="container basis-0-percent">
  <div>heading</div>
  <section>
    <div class="content">flex-basis: 0%;</div>
  </section>
</div>
```

#### CSS

Wir stylen die Container als inline Flex-Container, die nebeneinander erscheinen, um deren Vergleich zu erleichtern. Wir setzen die `flex-direction` auf `column`. Die Flex-Elemente des ersten Containers haben einen `flex-basis` Wert von `0`, während die Flex-Elemente des zweiten Containers einen `flex-basis` Wert von `0%` haben. Weder die Flex-Container noch ihre Flex-Elemente haben eine explizite Höhe; jedoch müssen die Höhen der `section` Elemente mindestens `200px` betragen, und ihre Kinder haben eine Höhe von `300px`.

```css
.container {
  width: 40vw;
  padding: 1rem;
  border: 1px dashed blue;

  display: inline-flex;
  flex-direction: column;
}

section {
  outline: 1px solid red;

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

Im ersten Container, mit `flex-basis: 0`, hat das `<section>` Element eine anfängliche Hauptgröße von null und wächst auf die `200px` Mindesthöhe. Im zweiten Container, mit `flex-basis: 0%`, hat das `<section>` Element eine anfängliche Hauptgröße von `300px`, da die Prozentwerte des `flex-basis` Wertes auf den [`content`](#content) Wert auflösen, weil der Flex-Container keine festgelegte Höhe hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- {{cssxref("inline-size")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
