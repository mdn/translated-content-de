---
title: Layout und der enthaltende Block
slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft von seinem **enthaltenden Block** beeinflusst. Meistens ist der enthaltende Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächstgelegenen {{Glossary("Block-level_content", "Block-Level")}}-Vorfahr-Elements, aber dies ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den enthaltenden Block eines Elements bestimmen.

Wenn ein Benutzeragent (wie Ihr Browser) ein Dokument anordnet, wird für jedes Element ein Box-Modell erzeugt. Jede Box ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllbereich (Padding)
3. Randbereich (Border)
4. Außenabstand-Bereich (Margin)

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der enthaltende Block eines Elements immer der Inhaltsbereich seines Eltern-Elements ist, aber das muss nicht unbedingt wahr sein. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der enthaltende Block eines Elements ist.

## Auswirkungen des enthaltenden Blocks

Bevor man lernt, was den enthaltenden Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft von seinem enthaltenden Block beeinflusst. Prozentwerte, die auf die Eigenschaften {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, und Offset-Eigenschaften eines absolut positionierten Elements (d.h. eines Elements mit {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt) angewendet werden, werden aus dem enthaltenden Block des Elements berechnet.

## Identifizierung des enthaltenden Blocks

Der Prozess zur Identifizierung des enthaltenden Blocks hängt vollständig vom Wert der `{{cssxref("position")}}`-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der enthaltende Block durch den Rand des _Inhaltskastens_ des nächstgelegenen Vorfahren-Elements gebildet, das entweder **ein Block-Container** (wie ein Inline-Block, Block oder Listen-Element) oder **einen Formatkontext erstellt** (wie ein Tabellen-Container, Flex-Container, Grid-Container oder der Block-Container selbst) ist.
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der enthaltende Block durch den Rand des _Auffüllkastens_ des nächstgelegenen Vorfahren-Elements gebildet, das einen `position`-Wert außer `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der enthaltende Block durch das {{Glossary("viewport", "Viewport")}} (im Falle von kontinuierlichen Medien) oder den Seitenbereich (im Falle von paginierten Medien) festgelegt.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der enthaltende Block auch durch den Rand des _Auffüllkastens_ des nächstgelegenen Vorfahren-Elements gebildet werden, das eines der folgenden Merkmale hat:

   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}}, oder {{cssxref("perspective")}} Wert, der nicht `none` ist.
   - Einen {{cssxref("contain")}} Wert von `layout`, `paint`, `strict` oder `content` (z. B. `contain: paint;`).
   - Einen {{cssxref("container-type")}} Wert, der nicht `normal` ist.
   - Einen {{cssxref("will-change")}} Wert, der eine Eigenschaft enthält, für die ein nicht-initialer Wert einen enthaltenden Block bilden würde (z. B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}} Wert von `auto`.

> [!NOTE]
> Der enthaltende Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **ursprünglicher enthaltender Block** bezeichnet wird. Es hat die Abmessungen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für paginierte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei der Bildung von enthaltenden Blöcken mit `perspective` und `filter`.

## Berechnung von Prozentwerten aus dem enthaltenden Block

Wie oben erwähnt, hängt der berechnete Wert davon ab, wenn bestimmten Eigenschaften ein Prozentwert zugewiesen wird, von dem enthaltenden Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}}, und {{cssxref("bottom")}} Eigenschaften berechnen Prozentwerte aus der `height` des enthaltenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, und {{cssxref("margin")}} Eigenschaften berechnen Prozentwerte aus der `width` des enthaltenden Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block oder Listen-Element) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatkontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatkontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für all unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem der untenstehenden Fälle verändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, sodass sein enthaltender Block {{HTMLElement("section")}} ist, da es der nächste Vorfahre ist, der ein Block-Container ist (aufgrund von `display: block`).

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

In diesem Beispiel ist der enthaltende Block des Absatzes das {{HTMLElement("body")}} Element, da `<section>` kein Block-Container ist (wegen `display: inline`) und keinen Formatkontext erstellt.

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

In diesem Beispiel ist der enthaltende Block des Absatzes `<section>`, weil dessen `position` auf `absolute` gesetzt ist. Die Prozentwerte des Absatzes werden durch die `padding` seines enthaltenden Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der {{cssxref("box-sizing")}} Wert des enthaltenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, sodass sein enthaltender Block der ursprüngliche enthaltende Block ist (auf Bildschirmen das Viewport). Somit ändern sich die Abmessungen des Absatzes basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, sodass sein enthaltender Block `<section>` ist, das der nächste Vorfahre mit einer {{cssxref("transform")}} Eigenschaft ist, die nicht `none` ist.

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

- {{cssxref("all")}} Eigenschaft
- {{cssxref("contain")}} Eigenschaft
- {{cssxref("aspect-ratio")}} Eigenschaft
- {{cssxref("box-sizing")}} Eigenschaft
- {{cssxref("min-content")}} und {{cssxref("max-content")}} Größenwerte
- [Lernen: Größe von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Anfängliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [benutzte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- {{Glossary("Intrinsic_size", "Intrinsic-Größe")}}
