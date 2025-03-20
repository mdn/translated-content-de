---
title: Layout und der umgebende Block
slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft von seinem **umgebenden Block** beeinflusst. Meistens ist der umgebende Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächstgelegenen {{Glossary("Block-level_content", "Block-Level")}} Vorfahren eines Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den umgebenden Block eines Elements bestimmen.

Wenn ein Benutzeragent (wie Ihr Browser) ein Dokument layoutet, erzeugt er für jedes Element eine Box. Jede Box ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Polsterbereich
3. Randbereich
4. Außenabstandbereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der umgebende Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das ist nicht unbedingt wahr. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der umgebende Block eines Elements ist.

## Auswirkungen des umgebenden Blocks

Bevor Sie lernen, was den umgebenden Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft von seinem umgebenden Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d.h. mit {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt), werden vom umgebenden Block des Elements aus berechnet.

## Identifizierung des umgebenden Blocks

Der Prozess zur Identifizierung des umgebenden Blocks hängt vollständig vom Wert der {{cssxref("position")}} Eigenschaft des Elements ab:

1. Wenn die `position` Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der umgebende Block durch den Rand des _Inhaltsbereichs_ des nächstgelegenen Vorfahren gebildet, der entweder **ein Blockcontainer** (wie ein Inline-Block, ein Block oder ein Listenelement) ist oder **einen Formatierungskontext etabliert** (wie ein Tabellencontainer, ein Flex-Container, ein Grid-Container oder der Blockcontainer selbst).
2. Wenn die `position` Eigenschaft **`absolute`** ist, wird der umgebende Block durch den Rand des _Polsterbereichs_ des nächstgelegenen Vorfahren gebildet, der einen `position` Wert ungleich `static` hat (`fixed`, `absolute`, `relative` oder `sticky`).
3. Wenn die `position` Eigenschaft **`fixed`** ist, wird der umgebende Block durch das {{Glossary("viewport", "Viewport")}} (im Fall von kontinuierlichen Medien) oder den Seitenbereich (im Fall von seitenbasierten Medien) festgelegt.
4. Wenn die `position` Eigenschaft **`absolute`** oder **`fixed`** ist, kann der umgebende Block auch durch den Rand des _Polsterbereichs_ des nächstgelegenen Vorfahren gebildet werden, der eine der folgenden Eigenschaften hat:

   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}}, oder {{cssxref("perspective")}} Wert ungleich `none`.
   - Einen {{cssxref("contain")}} Wert von `layout`, `paint`, `strict` oder `content` (z.B. `contain: paint;`).
   - Einen {{cssxref("container-type")}} Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}} Wert, der eine Eigenschaft enthält, für die ein nicht-Initialwert einen umgebenden Block bilden würde (z.B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}} Wert von `auto`.

> [!NOTE]
> Der umgebende Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **anfänglicher umgebender Block** bezeichnet wird. Er hat die Abmessungen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für seitenbasierte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei `perspective` und `filter`, die zur Bildung eines umgebenden Blocks beitragen.

## Berechnung von Prozentwerten aus dem umgebenden Block

Wie oben erwähnt, hängt der berechnete Wert bestimmter Eigenschaften, denen ein Prozentwert zugeordnet wird, vom umgebenden Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Boxmodell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}} Eigenschaften berechnen Prozentwerte aus der `height` des umgebenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, und {{cssxref("margin")}} Eigenschaften berechnen Prozentwerte aus der `width` des umgebenden Blocks.

> [!NOTE]
> Ein **Blockcontainer** (wie ein Inline-Block, ein Block oder ein Listenelement) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Blockcontainer, wenn es Block-Level- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jeder unten stehenden Instanz verändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, sodass sein umgebender Block {{HTMLElement("section")}} ist, da es der nächstgelegene Vorfahre ist, der ein Blockcontainer ist (aufgrund von `display: block`).

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

{{EmbedLiveSample('Beispiel_1','100%','300')}}

### Beispiel 2

In diesem Beispiel ist der umgebende Block des Absatzes das {{HTMLElement("body")}} Element, weil `<section>` kein Blockcontainer ist (aufgrund von `display: inline`) und keinen Formatierungskontext etabliert.

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

{{EmbedLiveSample('Beispiel_2','100%','300')}}

### Beispiel 3

In diesem Beispiel ist der umgebende Block des Absatzes `<section>`, weil die `position` des letzteren `absolute` ist. Die Prozentwerte des Absatzes werden durch das `padding` seines umgebenden Blocks beeinflusst, obwohl dies bei einem `box-sizing` Wert des umgebenden Blocks von `border-box` nicht der Fall wäre.

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

{{EmbedLiveSample('Beispiel_3','100%','300')}}

### Beispiel 4

In diesem Beispiel ist die `position` des Absatzes `fixed`, sodass sein umgebender Block der anfängliche umgebende Block ist (auf Bildschirmen der Viewport). Somit ändern sich die Dimensionen des Absatzes basierend auf der Größe des Browserfensters.

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

{{EmbedLiveSample('Beispiel_4','100%','300')}}

### Beispiel 5

In diesem Beispiel ist die `position` des Absatzes `absolute`, sodass sein umgebender Block `<section>` ist, welches der nächstgelegene Vorfahre mit einer {{cssxref("transform")}} Eigenschaft ungleich `none` ist.

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

{{EmbedLiveSample('Beispiel_5','100%','300')}}

## Siehe auch

- {{cssxref("all")}} Eigenschaft
- {{cssxref("contain")}} Eigenschaft
- {{cssxref("aspect-ratio")}} Eigenschaft
- {{cssxref("box-sizing")}} Eigenschaft
- {{cssxref("min-content")}} und {{cssxref("max-content")}} Größenwerte
- [Lernen: Größenanpassung von Objekten in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
- {{Glossary("Layout_mode", "Layoutmodi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Außenabstand Kollision](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [genutzte](/de/docs/Web/CSS/CSS_cascade/used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
