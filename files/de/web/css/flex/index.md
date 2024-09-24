---
title: flex
slug: Web/CSS/flex
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{CSSRef}}

Die **`flex`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt fest, wie ein {{glossary("flex item")}} wachsen oder schrumpfen soll, um in den verfügbaren Raum seines Flex-Containers zu passen.

{{EmbedInteractiveExample("pages/css/flex.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## Syntax

```css
/* Schlüsselwortwert */
flex: none; /* 0 0 auto */

/* Ein Wert, zahlenlos: flex-grow
flex-basis ist dann gleich 0%. */
flex: 2; /* 2 1 0% */

/* Ein Wert, Breite/Höhe: flex-basis */
flex: auto; /* 1 1 auto */
flex: 10em; /* 1 1 10em */
flex: 30%;
flex: min-content;

/* Zwei Werte: flex-grow | flex-basis */
flex: 1 30px; /* 1 1 30px */

/* Zwei Werte: flex-grow | flex-shrink */
flex: 2 2; /* 2 2 0% */

/* Drei Werte: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Globale Werte */
flex: inherit;
flex: initial; /* 0 1 auto */
flex: revert;
flex: revert-layer;
flex: unset;
```

Die `flex`-Eigenschaft kann mit einem, zwei oder drei Werten angegeben werden.

- **Syntax mit einem Wert:** der Wert muss einer der folgenden sein:

  - ein gültiger Wert für {{cssxref("&lt;flex-grow&gt;")}}: dann dehnt die Kurzschreibweise in allen Browsern zu `flex: <flex-grow> 1 0%` aus. Die Spezifikation sagt jedoch aus, dass sie zu `flex: <flex-grow> 1 0` erweitern sollte.
  - ein gültiger Wert für {{cssxref("&lt;flex-basis&gt;")}}: dann dehnt die Kurzschreibweise zu `flex: 1 1 <flex-basis>` aus.
  - das Schlüsselwort `none` oder eines der globalen Schlüsselwörter.

- **Syntax mit zwei Werten:**

  - Der erste Wert muss ein gültiger Wert für {{cssxref("flex-grow")}} sein.

  - Der zweite Wert muss einer der folgenden sein:

    - ein gültiger Wert für {{cssxref("flex-shrink")}}: dann dehnt die Kurzschreibweise zu `flex: <flex-grow> <flex-shrink> 0%` aus.
    - ein gültiger Wert für {{cssxref("flex-basis")}}: dann dehnt die Kurzschreibweise zu `flex: <flex-grow> 1 <flex-basis>` aus.

- **Syntax mit drei Werten:** die Werte müssen in folgender Reihenfolge stehen:

  1. ein gültiger Wert für {{cssxref("flex-grow")}}.
  2. ein gültiger Wert für {{cssxref("flex-shrink")}}.
  3. ein gültiger Wert für {{cssxref("flex-basis")}}.

### Werte

- `<'flex-grow'>`
  - : Definiert das {{cssxref("flex-grow")}} des Flex-Elements. Negative Werte gelten als ungültig. Standardwert ist `1`, wenn weggelassen. (initial ist `0`)
- `<'flex-shrink'>`
  - : Definiert das {{cssxref("flex-shrink")}} des Flex-Elements. Negative Werte gelten als ungültig. Standardwert ist `1`, wenn weggelassen. (initial ist `1`)
- `<'flex-basis'>`
  - : Definiert das {{cssxref("flex-basis")}} des Flex-Elements. Standardwert ist `0%`, wenn weggelassen. Der Anfangswert ist `auto`.
- `none`
  - : Das Element wird gemäß seiner `width`- und `height`-Eigenschaften dimensioniert. Es ist vollständig unflexibel: Es schrumpft nicht und wächst nicht in Relation zum Flex-Container. Dies entspricht der Einstellung `flex: 0 0 auto`.

Häufig gewünschte Flexbox-Effekte können mit den folgenden `flex`-Werten erreicht werden:

- `initial`: Flex-Element wächst nicht, kann aber schrumpfen. Dieser Standardwert dehnt sich zu `flex: 0 1 auto` aus. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften dimensioniert, abhängig von der `flex-direction`. Falls negativer verfügbarer Raum vorhanden ist, schrumpft das Element auf seine minimale Größe, um innerhalb des Containers zu passen, wächst jedoch nicht, um positiven Raum im Flex-Container aufzunehmen.
- `auto`: Flex-Element kann wachsen und schrumpfen. Dieser Wert dehnt sich zu `flex: 1 1 auto` aus. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften dimensioniert, abhängig von der `flex-direction`, wächst jedoch, um verfügbaren positiven Raum im Flex-Container aufzunehmen oder schrumpft auf seine minimale Größe, um in den Container bei negativem Raum zu passen. Das Flex-Element ist vollständig flexibel.
- `none`: Das Flex-Element wächst nicht und schrumpft nicht. Dieser Wert dehnt sich zu `flex: 0 0 auto` aus. Das Element wird gemäß seinen `width`- oder `height`-Eigenschaften dimensioniert, abhängig von der Richtung des Flex-Containers. Das Flex-Element ist vollständig unflexibel.
- `flex: <number [1,∞]>`: Die Hauptgröße des Flex-Elements wird proportional zum eingestellten Wert sein. Dieser Wert dehnt sich zu `flex: <number> 1 0` aus. Dies setzt `flex-basis` auf null und macht das Flex-Element flexibel. Das Element wird mindestens so breit oder hoch wie seine minimale Größe sein, wobei der positive verfügbare Raum des Containers proportional basierend auf den Wachstumsfaktoren dieses und seiner Geschwister-Flex-Elemente verteilt wird. Wenn alle Flex-Elemente dieses Muster verwenden, werden alle proportional zu ihren numerischen Werten dimensioniert.

  > [!WARNING]
  > Die Browser verwenden den `flex-basis`-Wert `0%`, wenn `flex-basis` in einem `flex`-Wert nicht angegeben ist. Dies ist nicht dasselbe wie der `flex-basis`-Wert `0`, den die Spezifikation vorschreibt. Dies kann das Flex-Layout in einigen Fällen beeinflussen. Sehen Sie sich dieses Effekt im [Beispiel zu Flex-basis `0` versus `0%`](/de/docs/Web/CSS/flex-basis#flex_basis_0_vs_0) an.

## Beschreibung

In den meisten Fällen sollten Autoren `flex` auf einen der folgenden Werte setzen: `auto`, `initial`, `none` oder eine positive zahlenlose Zahl. Um die Wirkung dieser Werte zu sehen, versuchen Sie, die folgenden Flex-Container zu ändern:

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

### Einstellung von flex: auto

Dieses Beispiel zeigt, wie ein Flex-Element mit `flex: auto` wächst, um jeden freien Raum im Container aufzunehmen.

#### HTML

```html
<div id="flex-container">
  <div id="flex-auto">
    flex: auto (klicken, um das `flex: initial`-Element zu entfernen/hinzufügen)
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

- Das `#flex-auto`-Element hat einen `flex`-Wert von [`auto`](#auto). Der `auto`-Wert dehnt sich zu `1 1 auto` aus, d.h. das Element darf expandieren.
- Das `#default`-Element hat keinen gesetzten `flex`-Wert, daher wird es auf den [`initial`](#initial) Wert standardisiert. Der `initial`-Wert dehnt sich zu `0 1 auto` aus, d.h. das Element darf nicht expandieren.

Das `#default`-Element nimmt so viel Platz ein, wie seine Breite erfordert, wächst aber nicht, um mehr Platz einzunehmen. Der gesamte verbleibende Raum wird vom `#flex-auto`-Element eingenommen.

Wenn Sie auf das `#flex-auto`-Element klicken, setzen wir die {{cssxref("display")}}-Eigenschaft des `#default`-Elements auf `none`, wodurch es aus dem Layout entfernt wird. Das `#flex-auto`-Element dehnt sich dann aus, um den gesamten verfügbaren Raum im Container zu füllen. Wenn Sie erneut auf das `#flex-auto`-Element klicken, wird das `#default`-Element wieder in den Container hinzugefügt.

{{EmbedLiveSample('Setting_flex_auto','100%','150')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- Modul [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
