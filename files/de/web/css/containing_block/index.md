---
title: Layout und der Containing Block
slug: Web/CSS/Containing_block
l10n:
  sourceCommit: 3ac20cbf482168cdcf092a2ca5a336c12e299db8
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft von seinem **Containing Block** beeinflusst. Meistens ist der Containing Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächsten [Block-Level](/de/docs/Glossary/Block-level_content)-Vorfahren des Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den Containing Block eines Elements bestimmen.

Wenn ein Benutzeragent (wie Ihr Browser) ein Dokument layoutet, erzeugt er für jedes Element eine Box. Jede Box ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Innenabstandbereich
3. Rahmenbereich
4. Außenabstandbereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der Containing Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das ist nicht unbedingt wahr. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der Containing Block eines Elements ist.

## Auswirkungen des Containing Block

Bevor Sie lernen, was den Containing Block eines Elements bestimmt, ist es nützlich zu wissen, warum es überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft von seinem Containing Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und die Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d.h. solche, die {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt haben), werden aus dem Containing Block des Elements berechnet.

## Ermitteln des Containing Block

Der Prozess zur Ermittlung des Containing Block hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der Containing Block durch den Rand der _Inhaltsbox_ des nächsten Vorfahren-Elements gebildet, das entweder ein **Block-Container** (wie ein Inline-Block, Block oder Listenpunkt-Element) ist oder einen **Formatierungskontext** schafft (wie ein Tabellen-Container, Flex-Container, Grid-Container oder der Block-Container selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der Containing Block durch den Rand der _Innenabstandbox_ des nächsten Vorfahren-Elements gebildet, das einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der Containing Block durch das [Viewport](/de/docs/Glossary/viewport) (bei kontinuierlichen Medien) oder den Seitenbereich (bei abgegrenzten Medien) bestimmt.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der Containing Block auch durch den Rand der _Innenabstandbox_ des nächsten Vorfahren-Elements gebildet werden, das eine der folgenden Eigenschaften hat:

   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}} oder {{cssxref("perspective")}}-Wert ungleich `none`.
   - Einen {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z.B. `contain: paint;`).
   - Einen {{cssxref("container-type")}}-Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, für die ein nicht-initialer Wert einen Containing Block bilden würde (z.B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der Containing Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **initialer Containing Block** bezeichnet wird. Es hat die Dimensionen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für abgegrenzte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei der Bildung von Containing Blocks durch `perspective` und `filter`.

## Berechnung von Prozentwerten aus dem Containing Block

Wie oben erwähnt, hängen bei bestimmten Eigenschaften die berechneten Werte von dem Containing Block des Elements ab, wenn ihnen ein Prozentwert zugeordnet wird. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}}-Eigenschaften berechnen Prozentwerte aus der `height` des Containing Block.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} und {{cssxref("margin")}}-Eigenschaften berechnen Prozentwerte aus der `width` des Containing Block.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block- oder Listenpunkt-Element) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem der folgenden Beispiele verändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, daher ist sein Containing Block {{HTMLElement("section")}}, da es der nächste Vorfahre ist, der ein Block-Container ist (aufgrund von `display: block`).

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  margin: 5%; /* == 400px * .05 = 20px */
  padding: 5%; /* == 400px * .05 = 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_1','100%','300')}}

### Beispiel 2

In diesem Beispiel ist der Containing Block des Absatzes das {{HTMLElement("body")}}-Element, da `<section>` kein Block-Container ist (aufgrund von `display: inline`) und keinen Formatierungskontext schafft.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%; /* == half the body's width */
  height: 200px; /* Note: a percentage would be 0 */
  background: cyan;
}
```

{{EmbedLiveSample('Example_2','100%','300')}}

### Beispiel 3

In diesem Beispiel ist der Containing Block des Absatzes `<section>`, da dessen `position` `absolute` ist. Die Prozentwerte des Absatzes werden durch den `padding` seines Containing Block beeinflusst, obwohl dies nicht der Fall wäre, wenn der {{cssxref("box-sizing")}}-Wert des Containing Block `border-box` wäre.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_3','100%','300')}}

### Beispiel 4

In diesem Beispiel ist die `position` des Absatzes `fixed`, daher ist sein Containing Block der initiale Containing Block (auf Bildschirmen das Viewport). Folglich ändern sich die Dimensionen des Absatzes basierend auf der Größe des Browserfensters.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%; /* == (50vw - (width of vertical scrollbar)) */
  height: 50%; /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%; /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%; /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
```

{{EmbedLiveSample('Example_4','100%','300')}}

### Beispiel 5

In diesem Beispiel ist die `position` des Absatzes `absolute`, daher ist sein Containing Block `<section>`, welches der nächste Vorfahre mit einer {{cssxref("transform")}}-Eigenschaft ist, die nicht `none` ist.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  height: 25%; /* == 40px */
  margin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_5','100%','300')}}

## Siehe auch

- {{cssxref("all")}} property
- {{cssxref("contain")}} property
- {{cssxref("aspect-ratio")}} property
- {{cssxref("box-sizing")}} property
- {{cssxref("min-content")}} und {{cssxref("max-content")}} Größenwerte
- [Baustein: Elemente in CSS dimensionieren](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Außenabstand-Zusammenführung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [Intrinsische Größe](/de/docs/Glossary/Intrinsic_size)
