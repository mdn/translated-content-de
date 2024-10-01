---
title: Layout und der Containing Block
slug: Web/CSS/Containing_block
l10n:
  sourceCommit: 3ac20cbf482168cdcf092a2ca5a336c12e299db8
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft von seinem **Containing Block** beeinflusst. Meistens ist der Containing Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächsten {{Glossary("Block-level_content", "Block-Level")}}-Vorfahren des Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den Containing Block eines Elements bestimmen.

Wenn ein User-Agent (wie Ihr Browser) ein Dokument layoutet, generiert er für jedes Element einen Kasten. Jeder Kasten ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllbereich
3. Randbereich
4. Außenabstand

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der Containing Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das stimmt nicht unbedingt. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der Containing Block eines Elements ist.

## Auswirkungen des Containing Blocks

Bevor Sie erfahren, was den Containing Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft von seinem Containing Block beeinflusst. Prozentwerte, die auf die Eigenschaften {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d. h. dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist), werden basierend auf dem Containing Block des Elements berechnet.

## Ermittlung des Containing Blocks

Der Prozess zur Ermittlung des Containing Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der Containing Block durch den Rand des _Inhaltskastens_ des nächstgelegenen Vorfahrens gebildet, das entweder **ein Block-Container** (wie ein Inline-Block, Block oder Listenelement) ist oder **einen Formatierungskontext etabliert** (wie ein Tabellen-Container, Flex-Container, Grid-Container oder der Block-Container selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der Containing Block durch den Rand des _Auffüllkastens_ des nächstgelegenen Vorfahren gebildet, der einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der Containing Block durch den {{Glossary("viewport", "Viewport")}} (bei kontinuierlichen Medien) oder den Bereich der Seite (bei paginierten Medien) etabliert.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der Containing Block auch durch den Rand des _Auffüllkastens_ des nächstgelegenen Vorfahren gebildet werden, der eines der folgenden Merkmale aufweist:

   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}} oder {{cssxref("perspective")}}-Wert ungleich `none`.
   - Einen {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z. B. `contain: paint;`).
   - Einen {{cssxref("container-type")}}-Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, für die ein Nicht-Initialwert einen Containing Block bilden würde (z. B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der Containing Block, in dem das Wurzelelement ({{HTMLElement("html")}}) liegt, ist ein Rechteck namens **initialer Containing Block**. Es hat die Abmessungen des Viewport (bei kontinuierlichen Medien) oder des Seitenbereichs (bei paginierten Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei der Bildung des Containing Blocks mit `perspective` und `filter`.

## Berechnung von Prozentwerten aus dem Containing Block

Wie oben erwähnt, hängt der berechnete Wert bei bestimmten Eigenschaften, die einen Prozentwert haben, vom Containing Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die Eigenschaften {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}} berechnen Prozentwerte aus der `height` des Containing Blocks.
2. Die Eigenschaften {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} und {{cssxref("margin")}} berechnen Prozentwerte aus der `width` des Containing Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block oder Listenelement) enthält entweder nur Inline-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block- oder Inline-Ebenen-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem der folgenden Fälle verändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, daher ist sein Containing Block {{HTMLElement("section")}}, da er der nächste Vorfahre ist, der ein Block-Container ist (aufgrund von `display: block`).

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

In diesem Beispiel ist der Containing Block des Absatzes das {{HTMLElement("body")}}-Element, weil `<section>` kein Block-Container ist (aufgrund von `display: inline`) und keinen Formatierungskontext etabliert.

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

In diesem Beispiel ist der Containing Block des Absatzes `<section>`, da dessen `position` `absolute` ist. Die Prozentwerte des Absatzes werden durch das `padding` seines Containing Blocks beeinflusst, obwohl dies bei einem {{cssxref("box-sizing")}}-Wert `border-box` nicht der Fall wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, daher ist sein Containing Block der initiale Containing Block (auf Bildschirmen der Viewport). Somit ändern sich die Dimensionen des Absatzes basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, also ist sein Containing Block `<section>`, welches der nächstgelegene Vorfahre mit einer {{cssxref("transform")}}-Eigenschaft ist, die nicht `none` ist.

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
- {{cssxref("min-content")}} und {{cssxref("max-content")}}-Größenwerte
- [Baustein: Größen von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stapelformatierungskontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
