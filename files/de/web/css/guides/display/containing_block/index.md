---
title: Layout und der Containing-Block
slug: Web/CSS/Guides/Display/Containing_block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Größe und Position eines Elements werden oft von seinem **Containing-Block** beeinflusst. Meistens ist der Containing-Block der [Inhaltsbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des nächstgelegenen {{Glossary("Block-level_content", "Block-Level")}} Vorfahren eines Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den Containing-Block eines Elements bestimmen.

Wenn ein Benutzeragent (wie Ihr Browser) ein Dokument anordnet, wird für jedes Element ein Kasten erzeugt. Jeder Kasten ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Padding-Bereich
3. Randbereich
4. Margin-Bereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der Containing-Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das ist nicht unbedingt wahr. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der Containing-Block eines Elements ist.

## Auswirkungen des Containing-Blocks

Bevor Sie erfahren, was den Containing-Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft von seinem Containing-Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d.h. wenn seine {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist), werden vom Containing-Block des Elements berechnet.

## Identifizierung des Containing-Blocks

Der Prozess zur Identifizierung des Containing-Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der Containing-Block durch den Rand des _content box_ des nächstgelegenen Vorfahrenelements gebildet, das entweder **ein Block-Container** (wie ein Inline-Block, Block oder Listenelement) ist oder **einen Formatierungskontext bildet** (wie ein Tabellen-Container, Flex-Container, Raster-Container oder der Block-Container selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der Containing-Block durch den Rand des _padding box_ des nächstgelegenen Vorfahren gebildet, der einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der Containing-Block durch das {{Glossary("viewport", "Viewport")}} (im Fall von kontinuierlichen Medien) oder den Seitenbereich (im Fall von seitenbasierten Medien) gebildet.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der Containing-Block auch durch den Rand des _padding box_ des nächstgelegenen Vorfahrens gebildet werden, das eine der folgenden Eigenschaften hat:
   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}} oder {{cssxref("perspective")}} Wert, der nicht `none` ist.
   - Einen {{cssxref("contain")}} Wert von `layout`, `paint`, `strict` oder `content` (z.B. `contain: paint;`).
   - Einen {{cssxref("container-type")}} Wert, der nicht `normal` ist.
   - Einen {{cssxref("will-change")}} Wert, der eine Eigenschaft enthält, für die ein Nicht-Initialwert einen Containing-Block bilden würde (z.B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}} Wert von `auto`.

> [!NOTE]
> Der Containing-Block, in dem das Root-Element ({{HTMLElement("html")}}) residiert, ist ein Rechteck, das als **Initial Containing Block** bezeichnet wird. Es hat die Dimensionen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für seitenbasierte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen mit `perspective` und `filter`, die zur Bildung des Containing-Blocks beitragen.

## Berechnung von Prozentwerten aus dem Containing-Block

Wie oben erwähnt, hängt der berechnete Wert von bestimmten Eigenschaften, denen ein Prozentwert gegeben wird, vom Containing-Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}}, und {{cssxref("bottom")}} Eigenschaften berechnen Prozentwerte aus der `height` des Containing-Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, und {{cssxref("margin")}} Eigenschaften berechnen Prozentwerte aus der `width` des Containing-Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block oder Listenelement) enthält entweder nur Inline-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block- oder Inline-Boxen enthält.

## Einige Beispiele

Der HTML-Code für all unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem der folgenden Beispiele verändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, daher ist sein Containing-Block {{HTMLElement("section")}}, weil es der nächstgelegene Vorfahre ist, der ein Block-Container ist (wegen `display: block`).

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

In diesem Beispiel ist der Containing-Block des Absatzes das {{HTMLElement("body")}}-Element, weil `<section>` kein Block-Container ist (wegen `display: inline`) und keinen Formatierungskontext bildet.

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

In diesem Beispiel ist der Containing-Block des Absatzes `<section>`, weil dessen `position` `absolute` ist. Die Prozentwerte des Absatzes werden von dem `padding` seines Containing-Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der `box-sizing`-Wert des Containing-Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, daher ist sein Containing-Block der initiale Containing-Block (auf Bildschirmen das Viewport). Die Maße des Absatzes ändern sich daher basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, daher ist sein Containing-Block `<section>`, das der nächstgelegene Vorfahre mit einer {{cssxref("transform")}}-Eigenschaft ist, die nicht `none` ist.

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
- [Lernen: Elemente in CSS vergrößern](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Stapeln-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [genutzt](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
