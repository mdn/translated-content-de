---
title: flex
slug: Web/CSS/flex
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{CSSRef}}

Die **`flex`**-[CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt fest, wie ein [Flex-Element](/de/docs/Glossary/flex_item) wachsen oder schrumpfen soll, um den verfügbaren Platz in seinem Flex-Container zu nutzen.

{{EmbedInteractiveExample("pages/css/flex.html")}}

## Bestimmende Eigenschaften

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

- **Ein-Wert-Syntax:** der Wert muss einer der folgenden sein:

  - ein gültiger Wert für {{cssxref("&lt;flex-grow&gt;")}}: dann erweitert sich die Kurzschreibweise in allen Browsern zu `flex: <flex-grow> 1 0%`. In der Spezifikation wird jedoch angegeben, dass sie sich zu `flex: <flex-grow> 1 0` erweitern sollte.
  - ein gültiger Wert für {{cssxref("&lt;flex-basis&gt;")}}: dann erweitert sich die Kurzschreibweise zu `flex: 1 1 <flex-basis>`.
  - das Schlüsselwort `none` oder eines der globalen Schlüsselwörter.

- **Zwei-Wert-Syntax:**

  - Der erste Wert muss ein gültiger Wert für {{cssxref("flex-grow")}} sein.

  - Der zweite Wert muss einer der folgenden sein:

    - ein gültiger Wert für {{cssxref("flex-shrink")}}: dann erweitert sich die Kurzschreibweise in allen Browsern zu `flex: <flex-grow> <flex-shrink> 0%`.
    - ein gültiger Wert für {{cssxref("flex-basis")}}: dann erweitert sich die Kurzschreibweise zu `flex: <flex-grow> 1 <flex-basis>`.

- **Drei-Wert-Syntax:** die Werte müssen in der folgenden Reihenfolge angegeben werden:

  1. ein gültiger Wert für {{cssxref("flex-grow")}}.
  2. ein gültiger Wert für {{cssxref("flex-shrink")}}.
  3. ein gültiger Wert für {{cssxref("flex-basis")}}.

### Werte

- `<'flex-grow'>`
  - : Definiert das {{cssxref("flex-grow")}} des Flex-Elements. Negative Werte sind ungültig. Standardwert ist `1`, wenn weggelassen. (initial ist `0`)
- `<'flex-shrink'>`
  - : Definiert das {{cssxref("flex-shrink")}} des Flex-Elements. Negative Werte sind ungültig. Standardwert ist `1`, wenn weggelassen. (initial ist `1`)
- `<'flex-basis'>`
  - : Definiert das {{cssxref("flex-basis")}} des Flex-Elements. Standardwert ist `0%`, wenn weggelassen. Der Initialwert ist `auto`.
- `none`
  - : Das Element wird entsprechend seinen `width`- und `height`-Eigenschaften dimensioniert. Es ist vollständig unflexibel: es schrumpft oder wächst nicht in Bezug auf den Flex-Container. Dies entspricht dem Setzen von `flex: 0 0 auto`.

Gewünschte Flexbox-Effekte können mit den folgenden `flex`-Werten erreicht werden:

- `initial`: Das Flex-Element wächst nicht, kann aber schrumpfen. Dieser Standardwert erweitert sich zu `flex: 0 1 auto`. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften dimensioniert, abhängig von der `flex-direction`. Wenn negativer freier Platz vorhanden ist, schrumpft das Element auf seine Mindestgröße, um innerhalb des Containers zu passen, wächst jedoch nicht, um positiven Platz im Flex-Container zu nutzen.
- `auto`: Das Flex-Element kann wachsen und schrumpfen. Dieser Wert erweitert sich zu `flex: 1 1 auto`. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften dimensioniert, abhängig von der `flex-direction`, wächst jedoch, um verfügbaren positiven Platz im Flex-Container zu nutzen oder schrumpft auf seine Mindestgröße, um in den Container zu passen, wenn negativer Raum vorhanden ist. Das Flex-Element ist vollständig flexibel.
- `none`: Das Flex-Element wächst weder noch schrumpft es. Dieser Wert erweitert sich zu `flex: 0 0 auto`. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften dimensioniert, abhängig von der Richtung des Flex-Containers. Das Flex-Element ist vollständig unflexibel.
- `flex: <number [1,∞]>`: Die Hauptgröße des Flex-Elements wird proportional zu der festgelegten Zahl sein. Dieser Wert erweitert sich zu `flex: <number> 1 0`. Dies setzt `flex-basis` auf null und macht das Flex-Element flexibel. Das Element wird mindestens so breit oder hoch sein wie seine Mindestgröße, wobei der positive verfügbare Raum des Containers proportional auf der Grundlage der Wachstumsfaktoren dieses Elements und seiner Schwester-Flex-Elemente verteilt wird. Wenn alle Flex-Elemente dieses Muster verwenden, werden alle proportional zu ihren Zahlenwerten dimensioniert.

  > [!WARNING]
  > Die Browser verwenden den `flex-basis`-Wert `0%`, wenn `flex-basis` nicht in einem `flex`-Wert angegeben ist. Dies ist nicht dasselbe wie der `flex-basis`-Wert `0`, den die Spezifikation vorgibt. Dies kann in einigen Fällen das Flex-Layout beeinflussen. Sehen Sie sich dieses Phänomen im Beispiel [Flex-basis `0` versus `0%`](/de/docs/Web/CSS/flex-basis#flex_basis_0_vs_0) an.

## Beschreibung

Für die meisten Zwecke sollten Autoren `flex` auf einen der folgenden Werte setzen: `auto`, `initial`, `none` oder eine positive einheitenlose Zahl. Um die Auswirkung dieser Werte zu sehen, versuchen Sie, die Flex-Container unten zu vergrößern oder zu verkleinern:

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

Standardmäßig schrumpfen Flex-Elemente nicht unter ihre {{cssxref("min-content")}}-Größe. Um dies zu ändern, setzen Sie die {{cssxref("min-width")}}- oder {{cssxref("min-height")}}-Eigenschaft des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung `flex: auto`

Dieses Beispiel zeigt, wie ein Flex-Element mit `flex: auto` wächst, um freien Raum im Container zu absorbieren.

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
  text-select: none;
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

- Das `#flex-auto`-Element hat einen `flex`-Wert von [`auto`](#auto). Der `auto`-Wert erweitert sich zu `1 1 auto`, d.h. das Element darf sich ausdehnen.
- Das `#default`-Element hat keinen `flex`-Wert gesetzt, daher verwendet es den Standardwert [`initial`](#initial). Der `initial`-Wert erweitert sich zu `0 1 auto`, d.h. das Element darf sich nicht ausdehnen.

Das `#default`-Element nimmt so viel Platz ein, wie seine Breite erfordert, dehnt sich jedoch nicht aus, um mehr Platz einzunehmen. Der gesamte verbleibende Platz wird vom `#flex-auto`-Element eingenommen.

Wenn Sie auf das `#flex-auto`-Element klicken, setzen wir die {{cssxref("display")}}-Eigenschaft des `#default`-Elements auf `none` und entfernen es aus dem Layout. Das `#flex-auto`-Element dehnt sich dann aus, um den gesamten verfügbaren Platz im Container einzunehmen. Wenn Sie erneut auf das `#flex-auto`-Element klicken, wird das `#default`-Element wieder in den Container eingefügt.

{{EmbedLiveSample('Setting_flex_auto','100%','150')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
