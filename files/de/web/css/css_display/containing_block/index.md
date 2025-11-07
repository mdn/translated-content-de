---
title: Layout und das enthaltende Block
slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Größe und Position eines Elements werden häufig von seinem **enthaltenden Block** beeinflusst. Meistens ist der enthaltende Block der [Inhaltsbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des nächstgelegenen {{Glossary("Block-level_content", "Block-Level-")}} Vorfahren des Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den enthaltenden Block eines Elements bestimmen.

Wenn ein User Agent (wie Ihr Browser) ein Dokument darstellt, wird für jedes Element eine Box generiert. Jede Box ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllungsbereich
3. Rahmenbereich
4. Randbereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der enthaltende Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das ist nicht unbedingt wahr. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der enthaltende Block eines Elements ist.

## Auswirkungen des enthaltenden Blocks

Bevor Sie lernen, was den enthaltenden Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden häufig von seinem enthaltenden Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d.h. welches seine {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt hat), werden aus dem enthaltenden Block des Elements berechnet.

## Identifikation des enthaltenden Blocks

Der Prozess zur Identifizierung des enthaltenden Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Falls die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der enthaltende Block durch die Kante des _Inhaltsfelds_ des nächstgelegenen Vorfahrenelements gebildet, das entweder **ein Block-Container** (wie ein Inline-Block, Block oder Listenelement) ist oder **einen Formatkontext erstellt** (wie ein Tabellencontainer, Flex-Container, Grid-Container oder der Block-Container selbst).
2. Falls die `position`-Eigenschaft **`absolute`** ist, wird der enthaltende Block durch die Kante des _Auffüllungsfelds_ des nächstgelegenen Vorfahrenelements gebildet, das einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Falls die `position`-Eigenschaft **`fixed`** ist, wird der enthaltende Block durch das {{Glossary("viewport", "Viewport")}} (im Fall von kontinuierlichen Medien) oder den Seitenbereich (im Fall von Seitenträgermedien) festgelegt.
4. Falls die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der enthaltende Block auch durch die Kante des _Auffüllungsfelds_ des nächstgelegenen Vorfahrenelements gebildet werden, das eines der folgenden aufweist:
   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}} oder {{cssxref("perspective")}} Wert ungleich `none`.
   - Einen {{cssxref("contain")}} Wert von `layout`, `paint`, `strict` oder `content` (z.B. `contain: paint;`).
   - Einen {{cssxref("container-type")}} Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}} Wert, der eine Eigenschaft enthält, für die ein nicht-initialer Wert einen enthaltenden Block bilden würde (z.B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}} Wert von `auto`.

> [!NOTE]
> Der enthaltende Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **anfänglicher enthaltender Block** bezeichnet wird. Es hat die Dimensionen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für Seitenträgermedien).

> [!NOTE]
> Es gibt Browser-Unterschiede mit `perspective` und `filter`, die zur Bildung des enthaltenden Blocks beitragen.

## Berechnung von Prozentwerten aus dem enthaltenden Block

Wie oben erwähnt, hängt der berechnete Wert bestimmter Eigenschaften, die einen Prozentwert erhalten, von dem enthaltenden Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}} Eigenschaften berechnen Prozentwerte aus der `height` des enthaltenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, und {{cssxref("margin")}} Eigenschaften berechnen Prozentwerte aus der `width` des enthaltenden Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block oder Listenelement) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatkontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatkontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem der folgenden Fälle geändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, sodass sein enthaltender Block {{HTMLElement("section")}} ist, da er der nächstgelegene Vorfahre ist, der ein Block-Container (aufgrund von `display: block`) ist.

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

In diesem Beispiel ist der enthaltende Block des Absatzes das {{HTMLElement("body")}} Element, weil `<section>` kein Block-Container (aufgrund von `display: inline`) ist und keinen Formatkontext erstellt.

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

In diesem Beispiel ist der enthaltende Block des Absatzes `<section>`, weil dessen `position` `absolute` ist. Die Prozentwerte des Absatzes werden durch das `padding` seines enthaltenden Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der {{cssxref("box-sizing")}} Wert des enthaltenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, sodass sein enthaltender Block der anfängliche enthaltende Block ist (auf Bildschirmen das Viewport). Daher ändern sich die Abmessungen des Absatzes basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, sodass sein enthaltender Block `<section>` ist, welches der nächstgelegene Vorfahre mit einer {{cssxref("transform")}} Eigenschaft ist, die nicht `none` ist.

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
- [Lernen: Größenänderung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Randzusammenführung](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [genutzte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
