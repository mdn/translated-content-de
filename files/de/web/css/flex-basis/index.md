---
title: flex-basis
slug: Web/CSS/flex-basis
l10n:
  sourceCommit: c63daf697d8f22ba17d4633f018ad7dfa65e4770
---

{{CSSRef}}

Die **`flex-basis`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Hauptgröße eines [Flex-Elements](/de/docs/Glossary/flex_item) fest. Sie legt die Größe des Inhaltsbereichs fest, es sei denn, es wurde anderweitig mit {{Cssxref("box-sizing")}} festgelegt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise anstelle separater `flex-grow`, `flex-shrink` und `flex-basis` Deklarationen zu verwenden. Wir haben sie hier getrennt, da es in diesem Dokument um eine der Kurzformen geht: die `flex-basis` Eigenschaft.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

In diesem Beispiel sind die Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} auf allen drei Elementen auf `1` gesetzt, was anzeigt, dass das Flex-Element von der anfänglichen `flex-basis` aus wachsen und schrumpfen kann.

Die Demo ändert den `flex-basis`-Wert, der auf das erste Flex-Element gesetzt ist, wodurch es wächst oder schrumpft, um den verfügbaren Platz einzunehmen. Die anderen Flex-Elemente ändern ebenfalls ihre Größe; sie werden mindestens in `min-content`-Größe angezeigt. Zum Beispiel, wenn die `flex-basis` des ersten Elements auf `200px` gesetzt ist, startet es bei `200px`, schrumpft jedoch, um in den verfügbaren Raum zu passen.

Wenn `flex-basis` auf einen anderen Wert als `auto` gesetzt ist und eine `width` (oder `height` im Fall von `flex-direction: column`) für dasselbe Flex-Element gesetzt ist, hat der `flex-basis`-Wert Vorrang.

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

Die Eigenschaft `flex-basis` wird entweder als das Schlüsselwort `content` oder als `<'width'>` angegeben.

### Werte

- `<'width'>`

  - : Beliebige der folgenden Einheiten:
    - {{cssxref("&lt;length&gt;")}} legt einen absoluten Wert fest.
    - {{cssxref("&lt;percentage&gt;")}} legt einen Prozentsatz der Breite oder Höhe des Inhaltsbereichs des umgebenden Blocks fest. Prozentwerte von `flex-basis` werden im Verhältnis zum Flex-Container aufgelöst. Wenn die Größe des Flex-Containers undefiniert ist, wird der verwendete Wert für `flex-basis` auf `content` gesetzt.
    - `auto` verwendet den Wert der {{cssxref("width")}} im horizontalen Schreibmodus und den Wert der {{cssxref("height")}} im vertikalen Schreibmodus; wenn der entsprechende Wert ebenfalls `auto` ist, wird stattdessen der `content`-Wert verwendet.
    - {{cssxref("max-content")}} setzt die intrinsisch bevorzugte Breite.
    - {{cssxref("min-content")}} setzt die intrinsisch minimale Breite.
    - {{cssxref("fit-content")}} setzt die maximal mögliche Größe des Inhaltsbereichs eines umgebenden Blocks, begrenzt durch die `min-content`- und `max-content`-Werte, und basierend auf dem Inhalt des aktuellen Elements berechnet.

- `content`

  - : Zeigt an, dass die Größe automatisch festgelegt wird, basierend auf dem Inhalt des Flex-Elements.

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

Dieses Beispiel zeigt den Unterschied zwischen einer `flex-basis` von `0` und einer `flex-basis` von `0%`, wenn `flex-direction` auf `column` gesetzt ist und die Flex-Container und Flex-Elemente keine festgelegte Höhe haben; während `0` eine absolute Länge ist, werden Prozentsatzwerte von `flex-basis` zu [`content`](#content) Werten aufgelöst.

#### HTML

Wir schließen zwei Flex-Container mit derselben Struktur ein, die ähnlich gestylt werden, mit Ausnahme ihrer `flex-basis`-Werte. Die Container haben jeweils zwei Kinder: eine Überschrift `<div>` und ein `<section>`. Das `<section>`-Element hat ein Inhalts-`<div>`-Kind, das nicht als Flex-Element gesetzt wird, jedoch eine Höhe erhält.

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

Wir gestalten die Container als Inline-Flex-Container, die nebeneinander erscheinen sollen, um sie besser vergleichen zu können. Wir setzen die `flex-direction` auf die Spalte. Die Flex-Elemente des ersten Containers haben einen `flex-basis` Wert von `0` und die Flex-Elemente des zweiten Containers haben einen `flex-basis` Wert von `0%`. Weder die Flex-Container noch ihre Flex-Elemente haben eine explizit festgelegte Höhe, aber die Höhen der `section`-Elemente können `200px` nicht überschreiten, und ihre Kinder haben eine Höhe von `300px`.

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

Im ersten Container, mit `flex-basis: 0`, hat das `<section>` Element eine anfängliche Hauptgröße von null und wächst bis zur `200px` Höhenbegrenzung. Im zweiten Container, mit `flex-basis: 0%`, hat das `<section>`-Element eine anfängliche Hauptgröße von `300px`, da, da der Flex-Container keine festgelegte Höhe hat, die Prozentsatzwerte von `flex-basis` zum [`content`](#content) Wert aufgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- {{cssxref("inline-size")}}
- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
