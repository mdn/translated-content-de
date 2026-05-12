---
title: "`flex` CSS-Eigenschaft"
short-title: flex
slug: Web/CSS/Reference/Properties/flex
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

Die **`flex`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt fest, wie sich ein {{Glossary("flex_item", "Flex-Item")}} vergrößern oder verkleinern wird, um den verfügbaren Platz im Flex-Container auszufüllen.

{{InteractiveExample("CSS Demo: flex")}}

```css interactive-example-choice
flex: 1;
```

```css interactive-example-choice
flex: 2;
```

```css interactive-example-choice
flex: 1 30px;
```

```css interactive-example-choice
flex: 1 1 100px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Change me</div>
  <div>flex: 1</div>
  <div>flex: 1</div>
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

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für folgende CSS-Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## Syntax

```css
/* Keyword value */
flex: none; /* 0 0 auto */

/* One value, unitless number: flex-grow
flex-basis is then equal to 0%. */
flex: 2; /* 2 1 0% */

/* One value, width/height: flex-basis */
flex: auto; /* 1 1 auto */
flex: 10em; /* 1 1 10em */
flex: 30%;
flex: min-content;

/* Two values: flex-grow | flex-basis */
flex: 1 30px; /* 1 1 30px */

/* Two values: flex-grow | flex-shrink */
flex: 2 2; /* 2 2 0% */

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial; /* 0 1 auto */
flex: revert;
flex: revert-layer;
flex: unset;
```

Die `flex`-Eigenschaft kann mit einem, zwei oder drei Werten angegeben werden.

- **Ein-Wert-Syntax:** der Wert muss einer der folgenden sein:
  - ein gültiger Wert für {{cssxref("flex-grow")}}: dann wird die Shorthand in allen Browsern zu `flex: <flex-grow> 1 0%` erweitert. Die Spezifikation besagt jedoch, dass sie zu `flex: <flex-grow> 1 0` erweitert werden sollte.
  - ein gültiger Wert für {{cssxref("flex-basis")}}: dann wird die Shorthand zu `flex: 1 1 <flex-basis>` erweitert.
  - das Schlüsselwort `none` oder eines der globalen Schlüsselwörter.

- **Zwei-Wert-Syntax:**
  - Der erste Wert muss ein gültiger Wert für {{cssxref("flex-grow")}} sein.

  - Der zweite Wert muss einer der folgenden sein:
    - ein gültiger Wert für {{cssxref("flex-shrink")}}: dann wird die Shorthand in allen Browsern zu `flex: <flex-grow> <flex-shrink> 0%` erweitert.
    - ein gültiger Wert für {{cssxref("flex-basis")}}: dann wird die Shorthand zu `flex: <flex-grow> 1 <flex-basis>` erweitert.

- **Drei-Wert-Syntax:** die Werte müssen in der folgenden Reihenfolge sein:
  1. ein gültiger Wert für {{cssxref("flex-grow")}}.
  2. ein gültiger Wert für {{cssxref("flex-shrink")}}.
  3. ein gültiger Wert für {{cssxref("flex-basis")}}.

### Werte

- `<'flex-grow'>`
  - : Definiert das {{cssxref("flex-grow")}} des Flex-Items. Negative Werte gelten als ungültig. Standardwert ist `1`, falls weggelassen. (Initialwert ist `0`)
- `<'flex-shrink'>`
  - : Definiert das {{cssxref("flex-shrink")}} des Flex-Items. Negative Werte gelten als ungültig. Standardwert ist `1`, falls weggelassen. (Initialwert ist `1`)
- `<'flex-basis'>`
  - : Definiert das {{cssxref("flex-basis")}} des Flex-Items. Standardwert ist `0%`, falls weggelassen. Der Initialwert ist `auto`.
- `none`
  - : Das Element wird entsprechend seiner `width`- und `height`-Eigenschaften dimensioniert. Es ist vollständig unflexibel: es wächst oder schrumpft nicht im Verhältnis zum Flex-Container. Dies entspricht dem Setzen von `flex: 0 0 auto`.

Häufig gewünschte Flexbox-Effekte können mit folgenden `flex`-Werten erreicht werden:

- `initial`: Flex-Element wächst nicht, kann aber schrumpfen. Dieser Standardwert wird zu `flex: 0 1 auto` erweitert. Das Element wird in der Größe entsprechend seinen `width`- oder `height`-Eigenschaften festgelegt, je nach `flex-direction`. Wenn negativer verfügbarer Platz vorhanden ist, wird das Element auf seine Mindestgröße schrumpfen, um innerhalb des Containers zu passen, wird aber nicht wachsen, um positiven Platz im Flex-Container aufzunehmen.
- `auto`: Flex-Element kann wachsen und schrumpfen. Dieser Wert wird zu `flex: 1 1 auto` erweitert. Das Element wird in der Größe entsprechend seinen `width`- oder `height`-Eigenschaften festgelegt, abhängig von der `flex-direction`, wächst jedoch, um verfügbaren positiven Raum im Flex-Container aufzunehmen oder schrumpft auf seine Mindestgröße, um im Container im Falle von negativem Raum zu passen. Das Flex-Element ist vollständig flexibel.
- `none`: Das Flex-Element wächst nicht und schrumpft nicht. Dieser Wert wird zu `flex: 0 0 auto` erweitert. Das Element wird entsprechend seinen `width`- oder `height`-Eigenschaften festgelegt, abhängig von der Richtung des Flex-Containers. Das Flex-Element ist vollständig unflexibel.
- `flex: <number [1,∞]>`: Die Hauptgröße des Flex-Elements wird proportional zur festgelegten Zahl sein. Dieser Wert wird zu `flex: <number> 1 0` erweitert. Dies setzt das `flex-basis` auf Null und macht das Flex-Element flexibel. Das Element wird mindestens so breit oder hoch sein wie seine Mindestgröße, wobei der positive verfügbare Raum des Containers proportional auf der Grundlage der Wachstumsfaktoren dieses Elements und seiner benachbarten Flex-Elemente verteilt wird. Wenn alle Flex-Elemente dieses Muster verwenden, werden alle in einem Verhältnis zu ihren numerischen Werten dimensioniert.

  > [!WARNING]
  > Die Browser verwenden den `flex-basis`-Wert `0%`, wenn der `flex-basis` in einem `flex`-Wert nicht angegeben ist. Dies ist nicht dasselbe wie der `flex-basis`-Wert `0`, den die Spezifikation vorschreibt. Dies kann das Flex-Layout in einigen Fällen beeinflussen. Sehen Sie sich diesen Effekt im Beispiel [Flex-basis `0` versus `0%`](/de/docs/Web/CSS/Reference/Properties/flex-basis#flex_basis_0_vs_0) an.

## Beschreibung

Für die meisten Zwecke sollten Autoren `flex` auf einen der folgenden Werte setzen: `auto`, `initial`, `none` oder eine positive einheitslose Zahl. Um die Wirkung dieser Werte zu sehen, versuchen Sie, die Flex-Container unten zu ändern:

```html hidden
<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item initial">initial</div>
  <div class="item initial">initial</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item initial">initial</div>
  <div class="item none">none</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item four">4</div>
  <div class="item two">2</div>
  <div class="item one">1</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.flex-container {
  background-color: #f4f7f8;
  resize: horizontal;
  overflow: hidden;
  display: flex;
  margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1b5385;
  color: white;
  font-family: monospace;
  font-size: 13px;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

{{EmbedLiveSample("Description", 1200, 400)}}

Standardmäßig schrumpfen Flex-Elemente nicht unter ihre {{cssxref("min-content")}}-Größe. Um dies zu ändern, setzen Sie die {{cssxref("min-width")}} oder {{cssxref("min-height")}} des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex: auto einstellen

Dieses Beispiel zeigt, wie ein Flex-Element mit `flex: auto` wächst, um jeden verfügbaren Raum im Container aufzunehmen.

#### HTML

```html
<div id="flex-container">
  <div id="flex-auto">
    flex: auto (click to remove/add the `flex: initial` box)
  </div>
  <div id="default">flex: initial</div>
</div>
```

#### CSS

```css hidden
body * {
  padding: 1rem;
  user-select: none;
  box-sizing: border-box;
  font-family: "Consolas", "Arial", sans-serif;
}
```

```css
#flex-container {
  border: 2px dashed gray;
  display: flex;
}

#flex-auto {
  cursor: pointer;
  background-color: wheat;

  flex: auto;
}

#default {
  background-color: lightblue;
}
```

#### JavaScript

```js
const flexAutoItem = document.getElementById("flex-auto");
const defaultItem = document.getElementById("default");
flexAutoItem.addEventListener("click", () => {
  defaultItem.style.display =
    defaultItem.style.display === "none" ? "block" : "none";
});
```

#### Ergebnis

Der Flex-Container enthält zwei Flex-Elemente:

- Das `#flex-auto`-Element hat einen `flex`-Wert von `auto`. Der `auto`-Wert wird zu `1 1 auto` erweitert, d.h. das Element darf sich ausdehnen.
- Das `#default`-Element hat keinen `flex`-Wert gesetzt, daher wird es auf den `initial`-Wert standardmäßig gesetzt. Der `initial`-Wert wird zu `0 1 auto` erweitert, d.h. das Element darf sich nicht ausdehnen.

Das `#default`-Element nimmt so viel Platz ein, wie seine Breite erfordert, wächst jedoch nicht, um mehr Platz einzunehmen. Der gesamte verbleibende Raum wird vom `#flex-auto`-Element eingenommen.

Wenn Sie auf das `#flex-auto`-Element klicken, setzen wir die {{cssxref("display")}}-Eigenschaft des `#default`-Elements auf `none`, wodurch es aus dem Layout entfernt wird. Das `#flex-auto`-Element dehnt sich dann aus, um den gesamten verfügbaren Raum im Container einzunehmen. Wenn Sie erneut auf das `#flex-auto`-Element klicken, wird das `#default`-Element wieder in den Container eingefügt.

{{EmbedLiveSample('Setting_flex_auto','100%','150')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuerung der Verhältnisse von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
