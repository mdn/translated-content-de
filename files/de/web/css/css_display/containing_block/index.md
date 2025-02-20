---
title: Layout und der enthaltende Block
slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft durch seinen **enthaltenden Block** beeinflusst. Meistens ist der enthaltende Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächsten {{Glossary("Block-level_content", "Block-Level")}}-Vorfahrenelements, aber dies ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den enthaltenden Block eines Elements bestimmen.

Wenn ein User-Agent (wie Ihr Browser) ein Dokument layoutet, wird für jedes Element ein Rahmen erstellt. Jeder Rahmen ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllungsbereich
3. Rahmenbereich
4. Außenabstandbereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der enthaltende Block eines Elements immer der Inhaltsbereich seines übergeordneten Elements ist, aber das ist nicht unbedingt der Fall. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der enthaltende Block eines Elements ist.

## Auswirkungen des enthaltenden Blocks

Bevor Sie lernen, was den enthaltenden Block eines Elements bestimmt, ist es nützlich zu verstehen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft durch seinen enthaltenden Block beeinflusst. Prozentuale Werte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements (d. h., das {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt hat) angewendet werden, werden basierend auf dem enthaltenden Block des Elements berechnet.

## Bestimmung des enthaltenden Blocks

Der Prozess zur Identifizierung des enthaltenden Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der enthaltende Block durch den Rand des _Inhaltskastens_ des nächsten Vorfahrenelements gebildet, das entweder **ein Blockcontainer** (wie ein Inline-Block, Block oder Listenelement) ist oder **einen Formatierungskontext erstellt** (wie ein Tabellentainer, Flexcontainer, Gittercontainer oder der Blockcontainer selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der enthaltende Block durch den Rand des _Auffüllkastens_ des nächsten Vorfahrenelements gebildet, das einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der enthaltende Block durch den {{Glossary("viewport", "Viewport")}} (im Fall von kontinuierlichen Medien) oder durch den Seitenbereich (im Fall von paginierten Medien) festgelegt.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der enthaltende Block auch durch den Rand des _Auffüllkastens_ des nächsten Vorfahrenelements gebildet werden, das eine der folgenden Eigenschaften hat:

   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}} oder {{cssxref("perspective")}}-Wert ungleich `none`.
   - Einen {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z. B. `contain: paint;`).
   - Einen {{cssxref("container-type")}}-Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, deren ein nicht-initialer Wert einen enthaltenden Block bilden würde (z. B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der enthaltende Block, in dem sich das Stamm-Element ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **initialer enthaltender Block** bezeichnet wird. Es hat die Dimensionen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für paginierte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei der `perspective`- und `filter`-Eigenschaft, die zur Bildung des enthaltenden Blocks beitragen.

## Berechnung von Prozentwerten basierend auf dem enthaltenden Block

Wie oben erwähnt, hängt der berechnete Wert bestimmter Eigenschaften, wenn sie einen Prozentwert erhalten, vom enthaltenden Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}}-Eigenschaften berechnen Prozentwerte basierend auf der `Höhe` des enthaltenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} und {{cssxref("margin")}}-Eigenschaften berechnen Prozentwerte basierend auf der `Breite` des enthaltenden Blocks.

> [!NOTE]
> Ein **Blockcontainer** (wie ein Inline-Block, Block oder Listenelement) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Blockcontainer, wenn es Block-Level- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem Fall angepasst.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, sodass sein enthaltender Block {{HTMLElement("section")}} ist, da dies der nächste Vorfahre ist, der ein Blockcontainer ist (aufgrund von `display: block`).

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

In diesem Beispiel ist der enthaltende Block des Absatzes das {{HTMLElement("body")}}-Element, da `<section>` kein Blockcontainer ist (aufgrund von `display: inline`) und keinen Formatierungskontext etabliert.

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

In diesem Beispiel ist der enthaltende Block des Absatzes `<section>`, da dessen `position` auf `absolute` gesetzt ist. Die Prozentwerte des Absatzes werden durch die `padding` seines enthaltenden Blocks beeinflusst, allerdings wäre dies nicht der Fall, wenn der {{cssxref("box-sizing")}}-Wert des enthaltenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, sodass sein enthaltender Block der initiale enthaltende Block ist (auf Bildschirmen der Viewport). Daher ändern sich die Dimensionen des Absatzes basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, sodass sein enthaltender Block `<section>` ist, das der nächste Vorfahre mit einer {{cssxref("transform")}}-Eigenschaft ist, die nicht `none` ist.

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

- {{cssxref("all")}}-Eigenschaft
- {{cssxref("contain")}}-Eigenschaft
- {{cssxref("aspect-ratio")}}-Eigenschaft
- {{cssxref("box-sizing")}}-Eigenschaft
- {{cssxref("min-content")}} und {{cssxref("max-content")}} Größenwerte
- [Lernen: Größen in CSS festlegen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stapel-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Außenabstandskollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [genutzte](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
