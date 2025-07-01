---
title: flex
slug: Web/CSS/flex
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`flex`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt fest, wie ein {{Glossary("flex_item", "Flex-Element")}} wachsen oder schrumpfen soll, um in den verfügbaren Platz seines Flex-Containers zu passen.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

- **Ein-Wert-Syntax:** Der Wert muss einer der folgenden sein:
  - ein gültiger Wert für {{cssxref("&lt;flex-grow&gt;")}}: dann wird in allen Browsern die Kurzschreibweise zu `flex: <flex-grow> 1 0%` expandiert. Die Spezifikation sagt jedoch, dass es zu `flex: <flex-grow> 1 0` expandiert werden sollte.
  - ein gültiger Wert für {{cssxref("&lt;flex-basis&gt;")}}: dann expandiert die Kurzschreibweise zu `flex: 1 1 <flex-basis>`.
  - das Schlüsselwort `none` oder eines der globalen Schlüsselwörter.

- **Zwei-Wert-Syntax:**
  - Der erste Wert muss ein gültiger Wert für {{cssxref("flex-grow")}} sein.

  - Der zweite Wert muss einer der folgenden sein:
    - ein gültiger Wert für {{cssxref("flex-shrink")}}: dann wird die Kurzschreibweise in allen Browsern zu `flex: <flex-grow> <flex-shrink> 0%` expandiert.
    - ein gültiger Wert für {{cssxref("flex-basis")}}: dann expandiert die Kurzschreibweise zu `flex: <flex-grow> 1 <flex-basis>`.

- **Drei-Wert-Syntax:** Die Werte müssen in der folgenden Reihenfolge angegeben werden:
  1. ein gültiger Wert für {{cssxref("flex-grow")}}.
  2. ein gültiger Wert für {{cssxref("flex-shrink")}}.
  3. ein gültiger Wert für {{cssxref("flex-basis")}}.

### Werte

- `<'flex-grow'>`
  - : Definiert das {{cssxref("flex-grow")}} des Flex-Elements. Negative Werte werden als ungültig betrachtet. Standardmäßig auf `1`, wenn weggelassen. (Initialwert ist `0`)
- `<'flex-shrink'>`
  - : Definiert das {{cssxref("flex-shrink")}} des Flex-Elements. Negative Werte werden als ungültig betrachtet. Standardmäßig auf `1`, wenn weggelassen. (Initialwert ist `1`)
- `<'flex-basis'>`
  - : Definiert das {{cssxref("flex-basis")}} des Flex-Elements. Standardmäßig auf `0%`, wenn weggelassen. Der Anfangswert ist `auto`.
- `none`
  - : Das Element wird gemäß seiner `width`- und `height`-Eigenschaften bemessen. Es ist komplett unflexibel: Es schrumpft nicht und wächst nicht in Bezug auf den Flex-Container. Dies entspricht der Einstellung `flex: 0 0 auto`.

Gewünschte Flexbox-Effekte können mit den folgenden `flex`-Werten erreicht werden:

- `initial`: Flex-Element wächst nicht, kann aber schrumpfen. Dieser Standardwert expandiert zu `flex: 0 1 auto`. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften bemessen, abhängig von der `flex-direction`. Wenn negativer verfügbarer Platz vorhanden ist, schrumpft das Element auf seine Mindestgröße, um in den Container zu passen, wächst jedoch nicht, um positiven verfügbaren Platz im Flex-Container zu absorbieren.
- `auto`: Flex-Element kann wachsen und schrumpfen. Dieser Wert expandiert zu `flex: 1 1 auto`. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften bemessen, abhängig von der `flex-direction`, wächst jedoch, um verfügbaren positiven Platz im Flex-Container zu absorbieren oder schrumpft auf seine Mindestgröße, um fit in den Container zu treten, falls negativer Platz vorhanden ist. Das Flex-Element ist vollständig flexibel.
- `none`: Das Flex-Element wächst nicht und schrumpft nicht. Dieser Wert expandiert zu `flex: 0 0 auto`. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften bemessen, abhängig von der Richtung des Flex-Containers. Das Flex-Element ist vollständig unflexibel.
- `flex: <number [1,∞]>`: Die Hauptgröße des Flex-Elements wird proportional zu der eingestellten Nummer sein. Dieser Wert expandiert zu `flex: <number> 1 0`. Dies stellt den `flex-basis` auf null und macht das Flex-Element flexibel. Das Element wird mindestens so breit oder hoch wie seine Mindestgröße sein, wobei der positive verfügbare Raum des Containers proportional basierend auf den Wachstumsfaktoren dieses Elements und seiner geschwister Flex-Elemente verteilt wird. Wenn alle Flex-Elemente dieses Muster verwenden, werden alle proportional zu ihren numerischen Werten bemessen.

  > [!WARNING]
  > Die Browser verwenden den `flex-basis`-Wert `0%`, wenn der `flex-basis` in einem `flex`-Wert nicht angegeben ist. Dies ist nicht dasselbe wie der `flex-basis`-Wert `0`, was die Spezifikation besagt. Dies kann in einigen Fällen das Flex-Layout beeinflussen. Siehe dieses Effektbeispiel in dem [Flex-basis `0` versus `0%`](/de/docs/Web/CSS/flex-basis#flex_basis_0_vs_0) Beispiel.

## Beschreibung

Für die meisten Zwecke sollten Autoren `flex` auf einen der folgenden Werte setzen: `auto`, `initial`, `none` oder eine positive, einheitenlose Zahl. Um die Wirkung dieser Werte zu sehen, versuchen Sie, die Flex-Container unten zu ändern:

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

### Festlegen von flex: auto

Dieses Beispiel zeigt, wie ein Flex-Element mit `flex: auto` wächst, um jeden freien Platz im Container zu absorbieren.

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
  font-family: Consolas, Arial, sans-serif;
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

- Das `#flex-auto`-Element hat einen `flex`-Wert von `auto`. Der `auto`-Wert expandiert zu `1 1 auto`, d.h. das Element darf expandieren.
- Das `#default`-Element hat keinen `flex`-Wert gesetzt, sodass es auf den `initial`-Wert standardisiert. Der `initial`-Wert expandiert zu `0 1 auto`, d.h. das Element darf nicht expandieren.

Das `#default`-Element nimmt so viel Platz ein, wie seine Breite erfordert, wächst jedoch nicht, um mehr Platz zu beanspruchen. Der gesamte verbleibende Platz wird vom `#flex-auto`-Element eingenommen.

Wenn Sie auf das `#flex-auto`-Element klicken, setzen wir die {{cssxref("display")}}-Eigenschaft des `#default`-Elements auf `none` und entfernen es damit aus dem Layout. Das `#flex-auto`-Element dehnt sich dann aus, um den gesamten verfügbaren Platz im Container einzunehmen. Wenn Sie erneut auf das `#flex-auto`-Element klicken, wird das `#default`-Element wieder zum Container hinzugefügt.

{{EmbedLiveSample('Setting_flex_auto','100%','150')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
