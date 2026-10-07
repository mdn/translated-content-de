---
title: "`flex-grow` CSS property"
short-title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`flex-grow`** legt den Wachstumsfaktor eines Flex-Elements fest. Dieser bestimmt, wie viel des [**positiven freien Platzes**](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) im Flex-Container gegebenenfalls der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen wird.

Wenn die Hauptgröße des Flex-Containers größer ist als die Summe der Hauptgrößen seiner Flex-Elemente, kann dieser positive freie Platz unter den Flex-Elementen verteilt werden. Der Anteil eines Elements richtet sich nach dem Verhältnis seines Wachstumsfaktors zur Summe der Wachstumsfaktoren aller Flex-Elemente.

> [!NOTE]
> Es wird empfohlen, die Kurzschreibweise {{cssxref("flex")}} mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, statt `flex-grow` einzeln festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) werden zu zuverlässigen Kombinationen aus `flex-grow`, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}} erweitert, mit denen sich häufig gewünschte Flex-Verhaltensweisen erreichen lassen.

{{InteractiveExample("CSS Demo: flex-grow")}}

```css interactive-example-choice
flex-grow: 1;
```

```css interactive-example-choice
flex-grow: 2;
```

```css interactive-example-choice
flex-grow: 3;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">I grow</div>
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
  flex-basis: 0;
}
```

## Syntax

```css
/* <number> values */
flex-grow: 3;
flex-grow: 0.6;

/* Global values */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

### Werte

Diese Eigenschaft wird mit folgendem Wert angegeben:

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Der Standardwert ist 0; damit wächst das Flex-Element nicht.

## Beschreibung

Diese Eigenschaft legt fest, wie viel des verbleibenden Platzes im Flex-Container dem Element zugewiesen werden soll (der Wachstumsfaktor des Flex-Elements).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist je nach Wert von {{cssxref("flex-direction")}} entweder die Breite oder die Höhe des Elements.

Der verbleibende Platz, auch positiver freier Platz genannt, ergibt sich aus der Größe des Flex-Containers abzüglich der Summe der Größen aller Flex-Elemente. Wenn alle gleichgeordneten Elemente denselben Wachstumsfaktor haben, erhält jedes Element den gleichen Anteil am verbleibenden Platz. Üblicherweise wird `flex-grow: 1` festgelegt. Werden jedoch die Wachstumsfaktoren aller Flex-Elemente auf `88`, `100`, `1.2` oder einen anderen Wert größer als `0` gesetzt, ist das Ergebnis dasselbe: Der Wert beschreibt ein Verhältnis.

Unterscheiden sich die `flex-grow`-Werte, wird der positive freie Platz entsprechend dem Verhältnis der jeweiligen Wachstumsfaktoren verteilt. Dazu werden die `flex-grow`-Werte aller gleichgeordneten Flex-Elemente addiert. Der gegebenenfalls vorhandene positive freie Platz des Flex-Containers wird durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow`-Wert größer als `0` wächst um den so erhaltenen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Befinden sich beispielsweise vier `100px` große Flex-Elemente in einem `700px` großen Container und haben sie der Reihe nach die `flex-grow`-Werte `0`, `1`, `2` und `3`, beträgt ihre gesamte Hauptgröße `400px`. Es bleiben also `300px` positiver freier Platz zur Verteilung. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) beträgt sechs. Somit entspricht eine Einheit des Wachstumsfaktors `50px` (`300px / 6`). Jedes Flex-Element erhält `50px` freien Platz multipliziert mit seinem `flex-grow`-Wert – also jeweils `0`, `50px`, `100px` und `150px`. Die Größen der Flex-Elemente betragen danach `100px`, `150px`, `200px` beziehungsweise `250px`.

`flex-grow` wird im Allgemeinen zusammen mit den anderen Eigenschaften der Kurzschreibweise {{cssxref("flex")}}, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die Kurzschreibweise `flex` zu verwenden, damit alle Werte festgelegt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktoren für Flex-Elemente festlegen

In diesem Beispiel beträgt die Summe der sechs Wachstumsfaktoren acht. Eine Einheit des Wachstumsfaktors entspricht damit `12.5%` des verbleibenden Platzes.

#### HTML

```html
<h1>This is a <code>flex-grow</code> example</h1>
<p>
  A, B, C, and F have <code>flex-grow: 1</code> set. D and E have
  <code>flex-grow: 2</code> set.
</p>
<div id="content">
  <div class="box1">A</div>
  <div class="box2">B</div>
  <div class="box3">C</div>
  <div class="box4">D</div>
  <div class="box5">E</div>
  <div class="box6">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
}

div > div {
  border: 3px solid rgb(0 0 0 / 20%);
}

.box1,
.box2,
.box3,
.box6 {
  flex-grow: 1;
}

.box4,
.box5 {
  flex-grow: 2;
  border: 3px solid rgb(0 0 0 / 20%);
}

.box1 {
  background-color: red;
}
.box2 {
  background-color: lightblue;
}
.box3 {
  background-color: yellow;
}
.box4 {
  background-color: brown;
}
.box5 {
  background-color: lightgreen;
}
.box6 {
  background-color: brown;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting flex item grow factor')}}

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers angeordnet sind und die Summe ihrer Hauptgrößen kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Platz unter den sechs Flex-Elementen verteilt. `A`, `B`, `C` und `F` erhalten jeweils `12.5%` des verbleibenden Platzes, `D` und `E` jeweils `25%`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise {{cssxref("flex")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Größenverhältnisse von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [`flex-grow` ist seltsam. Oder doch nicht?](https://css-tricks.com/flex-grow-is-weird/) auf CSS-Tricks (2017)
