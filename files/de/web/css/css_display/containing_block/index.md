---
title: Layout und der enthaltende Block
slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft durch seinen **enthaltenden Block** beeinflusst. Meistens ist der enthaltende Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächstgelegenen {{Glossary("Block-level_content", "Block-Levels")}} eines Vorfahren, aber dies ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den enthaltenden Block eines Elements bestimmen.

Wenn ein User-Agent (wie Ihr Browser) ein Dokument darstellt, wird für jedes Element ein Kasten erzeugt. Jeder Kasten ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllen-Bereich (Padding)
3. Randbereich (Border)
4. Außenabstand-Bereich (Margin)

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der enthaltende Block eines Elements immer der Inhaltsbereich seines Elternteils ist, doch das ist nicht unbedingt wahr. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der enthaltende Block eines Elements ist.

## Auswirkungen des enthaltenden Blocks

Bevor Sie lernen, was den enthaltenden Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt von Bedeutung ist.

Die Größe und Position eines Elements werden oft durch seinen enthaltenden Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und die Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d.h. ein Element, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist), berechnen sich aus dem enthaltenden Block des Elements.

## Bestimmung des enthaltenden Blocks

Der Prozess zur Bestimmung des enthaltenden Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der enthaltende Block durch die Kante der _Inhaltsbox_ des nächstgelegenen Vorfahrenelements gebildet, das entweder ein **Block-Container** ist (wie ein Inline-Block, Block oder Listenelement) oder **einen Formatierungskontext erstellt** (wie ein Tabellen-Container, Flex-Container, Grid-Container oder der Block-Container selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der enthaltende Block durch die Kante der _Auffüllungsbox_ des nächstgelegenen Vorfahrenelements gebildet, das einen `position`-Wert ungleich `static` hat (`fixed`, `absolute`, `relative` oder `sticky`).
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der enthaltende Block durch den {{Glossary("viewport", "Ansichtsfenster")}} (im Fall von kontinuierlichen Medien) oder den Seitenbereich (im Fall von paginierten Medien) gebildet.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der enthaltende Block auch durch die Kante der _Auffüllungsbox_ des nächstgelegenen Vorfahrenelements gebildet werden, das eines der folgenden Merkmale aufweist:
   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}}, oder {{cssxref("perspective")}}-Wert ungleich `none`.
   - Einen {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z.B. `contain: paint;`).
   - Einen {{cssxref("container-type")}}-Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, für die ein nicht-initialer Wert einen enthaltenden Block bilden würde (z.B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der enthaltende Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **anfänglicher enthaltender Block** bezeichnet wird. Es hat die Abmessungen des Ansichtsfensters (für kontinuierliche Medien) oder des Seitenbereichs (für paginierte Medien).

> [!NOTE]
> Es gibt Inkonsistenzen zwischen Browsern mit `perspective` und `filter`, die zur Bildung des enthaltenden Blocks beitragen.

## Berechnung von Prozentwerten aus dem enthaltenden Block

Wie oben erwähnt, hängt der berechnete Wert eines Prozentwerts bei bestimmten Eigenschaften vom enthaltenden Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}}, und {{cssxref("bottom")}}-Eigenschaften berechnen Prozentwerte aus der `Höhe` des enthaltenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, und {{cssxref("margin")}}-Eigenschaften berechnen Prozentwerte aus der `Breite` des enthaltenden Blocks.

> [!NOTE]
> Ein **Block-Container** (z.B. ein Inline-Block, Block oder Listenelement) enthält entweder nur Inline-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block- oder Inline-Boxen enthält.

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

In diesem Beispiel ist der Absatz statisch positioniert, daher ist sein enthaltender Block {{HTMLElement("section")}}, weil es der nächstgelegene Vorfahre ist, der ein Block-Container ist (wegen `display: block`).

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

In diesem Beispiel ist der enthaltende Block des Absatzes das {{HTMLElement("body")}}-Element, weil `<section>` kein Block-Container ist (wegen `display: inline`) und keinen Formatierungskontext erstellt.

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

In diesem Beispiel ist der enthaltende Block des Absatzes `<section>`, weil dessen `position` auf `absolute` gesetzt ist. Die Prozentwerte des Absatzes werden durch das `padding` seines enthaltenden Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der Wert für {{cssxref("box-sizing")}} des enthaltenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, daher ist sein enthaltender Block der anfängliche enthaltende Block (auf Bildschirmen das Ansichtsfenster). Daher ändern sich die Dimensionen des Absatzes basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, daher ist sein enthaltender Block `<section>`, welches der nächstgelegene Vorfahre mit einer {{cssxref("transform")}}-Eigenschaft ist, die nicht `none` ist.

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
- [Lernen: Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stapelkontekst](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Außenabstand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
