---
title: CSS-Eigenschaft `flex`
short-title: flex
slug: Web/CSS/Reference/Properties/flex
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`flex`** legt fest, wie ein {{Glossary("flex_item", "Flex-Element")}} wächst oder schrumpft, um den in seinem Flex-Container verfügbaren Platz auszufüllen.

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

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## Syntax

```css
/* Keyword values */
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

Die Eigenschaft `flex` kann mit einem, zwei oder drei Werten angegeben werden.

- **Syntax mit einem Wert:** Der Wert muss einer der folgenden sein:
  - ein gültiger Wert für {{cssxref("flex-grow")}}: Dann wird die Kurzform zu `flex: <flex-grow> 1 0%` erweitert.
  - ein gültiger Wert für {{cssxref("flex-basis")}}: Dann wird die Kurzform zu `flex: 1 1 <flex-basis>` erweitert.
  - das Schlüsselwort `none` oder eines der globalen Schlüsselwörter.

- **Syntax mit zwei Werten:**
  - Der erste Wert muss ein gültiger Wert für {{cssxref("flex-grow")}} sein.

  - Der zweite Wert muss einer der folgenden sein:
    - ein gültiger Wert für {{cssxref("flex-shrink")}}: Dann wird die Kurzform zu `flex: <flex-grow> <flex-shrink> 0%` erweitert.
    - ein gültiger Wert für {{cssxref("flex-basis")}}: Dann wird die Kurzform zu `flex: <flex-grow> 1 <flex-basis>` erweitert.

- **Syntax mit drei Werten:** Die Werte müssen in der folgenden Reihenfolge angegeben werden:
  1. ein gültiger Wert für {{cssxref("flex-grow")}}.
  2. ein gültiger Wert für {{cssxref("flex-shrink")}}.
  3. ein gültiger Wert für {{cssxref("flex-basis")}}.

### Werte

- `<'flex-grow'>`
  - : Definiert {{cssxref("flex-grow")}} des Flex-Elements. Negative Werte werden als ungültig betrachtet. Wenn der Wert weggelassen wird, ist der Standardwert `1`. (Der Anfangswert ist `0`.)
- `<'flex-shrink'>`
  - : Definiert {{cssxref("flex-shrink")}} des Flex-Elements. Negative Werte werden als ungültig betrachtet. Wenn der Wert weggelassen wird, ist der Standardwert `1`. (Der Anfangswert ist `1`.)
- `<'flex-basis'>`
  - : Definiert {{cssxref("flex-basis")}} des Flex-Elements. Wenn der Wert weggelassen wird, ist der Standardwert `0%`. Der Anfangswert ist `auto`.
- `none`
  - : Die Größe des Elements wird anhand seiner Eigenschaften `width` und `height` bestimmt. Es ist vollständig unflexibel: Es schrumpft oder wächst weder im Verhältnis zum Flex-Container. Dies entspricht dem Setzen von `flex: 0 0 auto`.

Häufig gewünschte Flexbox-Effekte können mit den folgenden `flex`-Werten erzielt werden:

- `initial`: Das Flex-Element wächst nicht, kann aber schrumpfen. Dieser Standardwert wird zu `flex: 0 1 auto` erweitert. Die Größe des Elements wird abhängig von `flex-direction` anhand seiner Eigenschaften `width` oder `height` bestimmt. Wenn negativer verfügbarer Platz vorhanden ist, schrumpft das Element auf seine Mindestgröße, um in den Container zu passen, wächst aber nicht, um verfügbaren positiven Platz im Flex-Container aufzunehmen.
- `auto`: Das Flex-Element kann wachsen und schrumpfen. Dieser Wert wird zu `flex: 1 1 auto` erweitert. Die Größe des Elements wird abhängig von `flex-direction` anhand seiner Eigenschaften `width` oder `height` bestimmt, es wächst jedoch, um verfügbaren positiven Platz im Flex-Container aufzunehmen, oder schrumpft bei negativem Platz auf seine Mindestgröße, um in den Container zu passen. Das Flex-Element ist vollständig flexibel.
- `none`: Das Flex-Element wächst und schrumpft weder. Dieser Wert wird zu `flex: 0 0 auto` erweitert. Die Größe des Elements wird abhängig von der Richtung des Flex-Containers anhand seiner Eigenschaften `width` oder `height` bestimmt. Das Flex-Element ist vollständig unflexibel.
- `flex: <number [1,∞]>`: Die Hauptgröße des Flex-Elements ist proportional zur festgelegten Zahl. Dieser Wert wird zu `flex: <number> 1 0%` erweitert. Dadurch wird `flex-basis` auf `0%` gesetzt und das Flex-Element flexibel gemacht. Das Element ist mindestens so breit oder hoch wie seine Mindestgröße, wobei der positive verfügbare Platz des Containers proportional anhand der Wachstumsfaktoren dieses Elements und seiner benachbarten Flex-Elemente verteilt wird. Wenn alle Flex-Elemente dieses Muster verwenden, werden alle proportional zu ihren numerischen Werten dimensioniert.

## Beschreibung

Für die meisten Zwecke sollten Autoren `flex` auf einen der folgenden Werte setzen: `auto`, `initial`, `none` oder eine positive einheitenlose Zahl. Um die Wirkung dieser Werte zu sehen, versuchen Sie, die Größe der folgenden Flex-Container zu ändern:

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

Standardmäßig schrumpfen Flex-Elemente nicht unter ihre {{cssxref("min-content")}}-Größe. Um dies zu ändern, setzen Sie {{cssxref("min-width")}} oder {{cssxref("min-height")}} des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von flex: auto

Dieses Beispiel zeigt, wie ein Flex-Element mit `flex: auto` wächst, um den gesamten freien Platz im Container aufzunehmen.

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

- Das Element `#flex-auto` hat den Wert `auto` für `flex`. Der Wert `auto` wird zu `1 1 auto` erweitert, das heißt, das Element darf sich ausdehnen.
- Für das Element `#default` ist kein `flex`-Wert festgelegt, daher wird standardmäßig der Wert `initial` verwendet. Der Wert `initial` wird zu `0 1 auto` erweitert, das heißt, das Element darf sich nicht ausdehnen.

Das Element `#default` nimmt so viel Platz ein, wie seine Breite benötigt, dehnt sich jedoch nicht aus, um weiteren Platz einzunehmen. Der gesamte verbleibende Platz wird vom Element `#flex-auto` eingenommen.

Wenn Sie auf das Element `#flex-auto` klicken, setzen wir die {{cssxref("display")}}-Eigenschaft des Elements `#default` auf `none`, wodurch es aus dem Layout entfernt wird. Das Element `#flex-auto` dehnt sich dann aus, um den gesamten verfügbaren Platz im Container einzunehmen. Wenn Sie erneut auf das Element `#flex-auto` klicken, wird das Element `#default` wieder zum Container hinzugefügt.

{{EmbedLiveSample('Setting_flex_auto','100%','150')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Verhältnisse von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
