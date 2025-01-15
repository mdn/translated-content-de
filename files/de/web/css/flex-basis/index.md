---
title: flex-basis
slug: Web/CSS/flex-basis
l10n:
  sourceCommit: e03cb03f8e0529e5052b953b4e66bad17f9f8320
---

{{CSSRef}}

Die **`flex-basis`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Hauptgröße eines {{Glossary("flex_item", "Flex-Elements")}} fest. Sie setzt die Größe des Inhaltsbereichs, es sei denn, es wird mit {{Cssxref("box-sizing")}} anders festgelegt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise anstelle separater `flex-grow`, `flex-shrink` und `flex-basis` Deklarationen zu verwenden. Wir haben sie hier getrennt aufgeführt, da es in diesem Dokument um eine der Komponenten der Kurzschreibweise geht: die `flex-basis` Eigenschaft.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

In diesem Beispiel sind die Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} bei allen drei Elementen auf `1` gesetzt, was bedeutet, dass das Flex-Element von der anfänglichen `flex-basis` aus wachsen und schrumpfen kann.

Die Demo ändert den `flex-basis` Wert, der für das erste Flex-Element festgelegt ist, wodurch es wächst oder schrumpft, um den verfügbaren Raum zu füllen. Die anderen Flex-Elemente ändern ebenfalls ihre Größe; sie sind mindestens `min-content` groß. Zum Beispiel, wenn die `flex-basis` des ersten Elements auf `200px` gesetzt ist, beginnt es bei `200px`, schrumpft dann aber, um in den verfügbaren Raum zu passen.

Wenn `flex-basis` auf einen anderen Wert als `auto` gesetzt ist und für dasselbe Flex-Element eine `width` (oder `height` im Falle von `flex-direction: column`) festgelegt ist, hat der `flex-basis` Wert Vorrang.

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

Die `flex-basis` Eigenschaft wird entweder als Schlüsselwort `content` oder als `<'width'>` angegeben.

### Werte

- `<'width'>`

  - : Jede der folgenden Einheiten:
    - {{cssxref("&lt;length&gt;")}} setzt einen absoluten Wert.
    - {{cssxref("&lt;percentage&gt;")}} setzt einen Prozentsatz der Breite oder Höhe des Inhaltsbereichs des enthaltenen Blocks. Prozentwerte von `flex-basis` werden gegen den Flex-Container aufgelöst. Wenn die Größe des Flex-Containers unbestimmt ist, wird der verwendete Wert für `flex-basis` zu `content`.
    - `auto` verwendet den Wert von {{cssxref("width")}} im horizontalen Schreibmodus und den Wert von {{cssxref("height")}} im vertikalen Schreibmodus; wenn der entsprechende Wert ebenfalls `auto` ist, wird stattdessen der `content` Wert verwendet.
    - {{cssxref("max-content")}} setzt die intrinsisch bevorzugte Breite.
    - {{cssxref("min-content")}} setzt die intrinsische Mindestbreite.
    - {{cssxref("fit-content")}} setzt die maximal mögliche Größe des Inhaltsbereichs eines enthaltenen Blocks, begrenzt durch die Werte `min-content` und `max-content` und basierend auf dem Inhalt des aktuellen Elements berechnet.

- `content`

  - : Gibt eine automatische Größenanpassung basierend auf dem Inhalt des Flex-Elements an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der anfänglichen Größen von Flex-Elementen

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

Dieses Beispiel zeigt den Unterschied zwischen einer `flex-basis` von `0` im Vergleich zu einer `flex-basis` von `0%`, wenn `flex-direction` auf `column` gesetzt ist und die Flex-Container und Flex-Elemente keine festgelegte Höhe haben; während `0` eine absolute Länge ist, lösen sich Prozentwerte von `flex-basis` zu [`content`](#content) Werten auf.

#### HTML

Wir beinhalten zwei gleich strukturierte Flex-Container, die ähnlich gestylt werden, außer für ihre `flex-basis` Werte. Die Container haben jeweils zwei Kinder: ein `<div>` Überschriftselement und ein `<section>`. Das `<section>` Element hat ein Inhalt `<div>` Kind, das nicht als Flex-Element festgelegt wird, aber eine Höhe erhalten wird.

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

Wir stylen die Container als Inline-Flex-Container, die nebeneinander erscheinen, um sie besser vergleichen zu können. Wir setzen die `flex-direction` auf `column`. Die Flex-Elemente des ersten Containers haben einen `flex-basis` Wert von `0`, während die Flex-Elemente des zweiten Containers einen `flex-basis` Wert von `0%` haben. Weder die Flex-Container noch ihre Flex-Elemente haben eine explizit festgelegte Höhe, aber die Höhen der `section` Elemente dürfen nicht `200px` überschreiten und ihre Kinder haben eine Höhe von `300px`.

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

Im ersten Container, mit `flex-basis: 0`, hat das `<section>` Element eine anfängliche Hauptgröße von null und wächst bis zur `200px` Höhenbegrenzung. Im zweiten Container, mit `flex-basis: 0%`, hat das `<section>` Element eine anfängliche Hauptgröße von `300px`, da, wenn der Flex-Container keine festgelegte Höhe hat, die Prozentsätze der `flex-basis` Werte zum [`content`](#content) Wert aufgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- {{cssxref("inline-size")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Boxenlayout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
