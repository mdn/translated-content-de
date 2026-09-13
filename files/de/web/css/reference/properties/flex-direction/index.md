---
title: "`flex-direction` CSS property"
short-title: flex-direction
slug: Web/CSS/Reference/Properties/flex-direction
l10n:
  sourceCommit: c965bd5938085b2dab7d19734adbe3db0914ba5d
---

Die **`flex-direction`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Flex-Elemente im Flex-Container angeordnet sind, indem die Hauptachse und die Richtung (normal oder umgekehrt) definiert werden.

{{InteractiveExample("CSS Demo: flex-direction")}}

```css interactive-example-choice
flex-direction: row;
```

```css interactive-example-choice
flex-direction: row-reverse;
```

```css interactive-example-choice
flex-direction: column;
```

```css interactive-example-choice
flex-direction: column-reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## Syntax

```css
/* Keyword values */
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;

/* Global values */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `row`
  - : Legt fest, dass die Hauptachse des Flex-Containers dieselbe wie die Textrichtung ist. Dies ist der Standardwert.
- `row-reverse`
  - : Verhält sich wie `row`, gibt jedoch an, dass die Inhaltsrichtung invertiert ist, wobei das erste Element am rechtlichen Ende platziert wird.
- `column`
  - : Legt fest, dass die Hauptachse des Flex-Containers dieselbe wie die Blockachse ist.
- `column-reverse`
  - : Verhält sich wie `column`, gibt jedoch an, dass die Inhaltsrichtung invertiert ist, wobei das erste Element am Block-Ende platziert wird.

## Beschreibung

Die `flex-direction`-Eigenschaft ermöglicht es Ihnen, festzulegen, wie Flex-Elemente in einem Flex-Container angeordnet sind, indem Sie die Hauptachse des Containers und die Richtung der Flex-Elemente festlegen. Diese Eigenschaft ist nur auf Container-Elemente relevant, deren {{cssxref("display")}}-Eigenschaft auf `flex` oder `inline-flex` gesetzt ist. Die `flex-direction`-Eigenschaft sollte zusammen mit der {{CSSXRef("flex-wrap")}}-Eigenschaft mithilfe der {{CSSXRef("flex-flow")}}-Kurzschreibweise festgelegt werden.

Wenn auf einen Flex-Container angewendet, definiert die `flex-direction`-Eigenschaft, ob die Flex-Elemente in derselben Richtung oder senkrecht zur Textrichtung angeordnet sind und ob die Elemente normal oder umgekehrt angeordnet sind.

Der Standardwert ist `row`. Standardmäßig oder wenn `row` explizit festgelegt wird, wird die Hauptachse des Flex-Containers als dieselbe wie die Textrichtung definiert. Das erste Flex-Element in der DOM-Reihenfolge wird am Inline-Start und Blockstart platziert. Weitere Elemente werden am Ende des vorherigen Elements inline-end platziert. Zusätzliche Zeilen, falls der Container auf Wrap mit `flex-wrap: wrap` eingestellt ist, werden am Block-Ende hinzugefügt. Die **main-start**- und **main-end**-Punkte sind dieselben wie die Inhaltsrichtung, wobei main-start der Inline-Startkante und main-end der Inline-Endkante entsprechen, und cross-start und cross-end die Block-Start- und Block-Endkanten sind.

Der `row-reverse`-Wert wird verwendet, um die Inline-Richtung zu ändern, wobei er sich wie `row` verhält, jedoch umgekehrt. Das erste Element wird am Inline-Ende und Blockstart platziert, wobei weitere Flex-Elemente am Inline-Start des vorherigen Elements platziert werden, und zusätzliche Zeilen am Block-Ende hinzugefügt werden. Die main-start- und main-end-Punkte entsprechen dem Inline-Ende und Inline-Start des Schreibmodus, und cross-start und cross-end sind die Block-Start- und Block-Endkanten.

Wenn `flex-direction` auf `column` gesetzt ist, ist die Hauptachse die Blockachse. Wie bei `row` wird das erste Element am Inline-Start und Blockstart platziert, aber weitere Elemente werden am Block-Ende des vorherigen Elements platziert und nicht an der Inline-Kante. Wenn Wrap aktiviert ist, werden zusätzliche Spalten am Inline-Ende hinzugefügt. Die **main-start**- und **main-end**-Punkte basieren auf der Blockrichtung des Schreibmodus, wobei main-start der Blockstartkante und main-end der Block-Ende-Kante entspricht, und cross-start und cross-end die Inline-Start- und Inline-Endkanten sind.

Bei `column-reverse` ist die Hauptachse die Blockachse, wobei am Block-Ende begonnen wird. Das erste Element wird am Inline-Start und Block-Ende platziert, wobei nachfolgende Elemente am Blockstart des vorherigen Elements platziert werden. Wenn Wrap aktiviert ist, werden zusätzliche Spalten am Inline-Ende hinzugefügt. Die **main-start**- und **main-end**-Punkte basieren auf der Blockrichtung des Schreibmodus, wobei main-start der Block-Ende-Kante und main-end der Blockstartkante entspricht, und cross-start und cross-end die Inline-Start- und Inline-Endkanten sind.

Die Werte `row` und `row-reverse` werden von der Richtung des Flex-Containers beeinflusst. Wenn das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut auf `ltr` gesetzt ist, stellt `row` die horizontale Achse dar, die von links nach rechts orientiert ist, und `row-reverse` von rechts nach links; wenn das `dir`-Attribut `rtl` ist, stellt `row` die Achse dar, die von rechts nach links orientiert ist, und `row-reverse` von links nach rechts.

## Barrierefreiheit

Die Verwendung der `flex-direction`-Eigenschaft mit den Werten `row-reverse` oder `column-reverse` wird eine Diskrepanz zwischen der visuellen Darstellung des Inhalts und der DOM-Reihenfolge erzeugen. Dies wird die Erfahrung von Nutzern mit Sehbehinderungen negativ beeinflussen, die die Seite mit Unterstützungstechnologien wie einem Bildschirmleser navigieren. Wenn die visuelle (CSS) Ordnung wichtig ist, haben Bildschirmleser-Benutzer keinen Zugriff auf die korrekte Lesereihenfolge.

- [Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html) von Adrian Roselli (2015)
- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) von Léonie Watson (2016)
- [Understanding SC 1.3.2: Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) über WCAG 2.2 (2023)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehren von Flex-Container-Spalten und -Zeilen

#### HTML

```html
<h4>This is a Column-Reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample('Reversing_flex_container_columns_and_rows', '', '550')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-flow")}} Kurzform
- {{CSSXRef("flex-wrap")}}
- {{CSSXRef("gap")}}
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
