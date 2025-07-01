---
title: flex-basis
slug: Web/CSS/flex-basis
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`flex-basis`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Hauptgröße eines {{Glossary("flex_item", "Flex-Elements")}} fest. Sie legt die Größe des Inhaltsfelds fest, es sei denn, sie wird mit {{Cssxref("box-sizing")}} anders eingestellt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-basis` allein festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/flex#values) erweitern sich zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}} und `flex-basis`, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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

In diesem Beispiel sind die Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} auf allen drei Elementen auf `1` gesetzt, was anzeigt, dass das Flex-Element wachsen und schrumpfen kann, ausgehend von der anfänglichen `flex-basis`.

Das Demo ändert den `flex-basis`-Wert, der auf das erste Flex-Element gesetzt ist, wodurch es wächst oder schrumpft, um den verfügbaren Raum zu füllen. Die anderen Flex-Elemente werden ebenfalls die Größe ändern; sie werden mindestens `min-content`-groß sein. Zum Beispiel, wenn die `flex-basis` des ersten Elements auf `200px` gesetzt ist, beginnt es bei `200px`, schrumpft jedoch, um in den verfügbaren Raum zu passen.

Wenn `flex-basis` auf einen anderen Wert als `auto` gesetzt ist und es eine `width` (oder `height` im Fall von `flex-direction: column`) für dasselbe Flex-Element gibt, hat der `flex-basis`-Wert Vorrang.

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
    - {{cssxref("&lt;percentage&gt;")}} setzt einen Prozentsatz der Breite oder Höhe des Inhaltsbereichs des umgebenden Blocks. Prozentsatzwerte von `flex-basis` werden gegen den Flex-Container aufgelöst. Wenn die Größe des Flex-Containers unbestimmt ist, wird der verwendete Wert für `flex-basis` `content` sein.
    - `auto` verwendet den Wert von {{cssxref("width")}} im horizontalen Schreibmodus und den Wert von {{cssxref("height")}} im vertikalen Schreibmodus; wenn der entsprechende Wert ebenfalls `auto` ist, wird stattdessen der `content`-Wert verwendet.
    - {{cssxref("max-content")}} setzt die intrinsische bevorzugte Breite.
    - {{cssxref("min-content")}} setzt die intrinsische Mindestbreite.
    - {{cssxref("fit-content")}} legt die maximal mögliche Größe des Inhaltsbereichs eines umgebenden Blocks fest, begrenzt durch die `min-content`- und `max-content`-Werte, und berechnet basierend auf dem Inhalt des aktuellen Elements.

- `content`
  - : Gibt eine automatische Größenbestimmung an, basierend auf dem Inhalt des Flex-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anfangsgrößen von Flex-Elementen festlegen

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

Dieses Beispiel zeigt den Unterschied zwischen einer `flex-basis` von `0` und einer `flex-basis` von `0%`, wenn `flex-direction` auf `column` gesetzt ist und die Flex-Container und Flex-Elemente keine feste Höhe haben; während `0` eine absolute Länge ist, werden Prozentsatz-Flex-Basis-Werte auf [`content`](#content) Werte aufgelöst.

#### HTML

Wir fügen zwei Flex-Container mit der gleichen Struktur ein, die ähnlich gestylt werden, außer für ihre `flex-basis`-Werte. Jeder Container hat zwei Kinder: einen Überschrift `<div>` und ein `<section>`. Das `<section>`-Element hat ein Inhalts-`<div>`-Kind, das nicht als Flex-Element gesetzt wird, aber eine Höhe haben wird.

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

Wir gestalten die Container als Inline-Flex-Container, die nebeneinander erscheinen, um den Vergleich besser zu ermöglichen. Wir setzen `flex-direction` auf `column`. Die Flex-Elemente des ersten Containers haben einen `flex-basis`-Wert von `0`, während die Flex-Elemente des zweiten Containers einen `flex-basis`-Wert von `0%` haben. Weder die Flex-Container noch ihre Flex-Elemente haben explizit eine Höhe eingestellt, aber die Höhen der `section`-Elemente dürfen `200px` nicht überschreiten und ihre Kinder haben eine Höhe von `300px`.

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

Im ersten Container, mit `flex-basis: 0`, hat das `<section>`-Element eine anfängliche Hauptgröße von Null und wächst bis zum `200px` Höhenlimit. Im zweiten Container, mit `flex-basis: 0%`, hat das `<section>`-Element eine anfängliche Hauptgröße von `300px`, da die Prozent-Flex-Basis-Werte aufgrund der fehlenden festgelegten Höhe des Flex-Containers auf den [`content`](#content)-Wert aufgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- {{cssxref("inline-size")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
