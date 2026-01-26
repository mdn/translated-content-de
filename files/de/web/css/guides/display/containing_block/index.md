---
title: Layout und der umgebende Block
slug: Web/CSS/Guides/Display/Containing_block
l10n:
  sourceCommit: 96ee75d6fe54625d9f251a4580e3558cdbb35626
---

Die Größe und Position eines Elements werden häufig durch seinen **umgebenden Block** beeinflusst. Meistens ist der umgebende Block der [Inhaltsbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des nächsten [Block-Level]-Vorfahren-Elements (/de/docs/Glossary/Block-level_content), aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den umgebenden Block eines Elements bestimmen.

Wenn ein User Agent (wie Ihr Browser) ein Dokument darstellt, generiert er für jedes Element ein Box-Modell. Jede Box ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllbereich (Padding)
3. Randbereich (Border)
4. Außenabstand (Margin)

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der umgebende Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das ist nicht unbedingt der Fall. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was ein umgebender Block eines Elements ist.

## Auswirkungen des umgebenden Blocks

Bevor Sie lernen, was den umgebenden Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt eine Rolle spielt.

Die Größe und Position eines Elements werden häufig von seinem umgebenden Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d.h. wenn dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist), werden aus dem umgebenden Block des Elements berechnet.

## Identifizierung des umgebenden Blocks

Der Prozess zur Identifizierung des umgebenden Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der umgebende Block durch den Rand des _Inhaltsbereichs_ des nächsten Vorfahren-Elements gebildet, das entweder **ein Block-Container** (wie ein Inline-Block, Block oder Listen-Element) ist oder **einen Formatierungskontext schafft** (wie ein Tabellen-Container, Flex-Container, Grid-Container oder der Block-Container selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der umgebende Block durch den Rand des _Auffüllbereichs_ des nächsten Vorfahren-Elements gebildet, das einen `position`-Wert hat, der nicht `static` ist (`fixed`, `absolute`, `relative` oder `sticky`).
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der umgebende Block durch das {{Glossary("viewport", "Viewport")}} (im Fall von kontinuierlichen Medien) oder den Seitenbereich (im Fall von paginierten Medien) festgelegt.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der umgebende Block auch durch den Rand des _Auffüllbereichs_ des nächsten Vorfahren-Elements gebildet werden, das eines der folgenden Merkmale aufweist:
   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}}, {{cssxref("perspective")}}, {{cssxref("rotate")}}, {{cssxref("scale")}} oder {{cssxref("translate")}}-Wert, der nicht `none` ist.
   - Einen {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z. B. `contain: paint;`).
   - Einen {{cssxref("container-type")}}-Wert, der nicht `normal` ist.
   - Einen {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, für die ein Nicht-Initialwert einen umgebenden Block bilden würde (z. B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der umgebende Block, in dem sich das Hauptelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **initialer umgebender Block** bezeichnet wird. Es hat die Abmessungen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für paginierte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei `perspective` und `filter`, die zur Bildung des umgebenden Blocks beitragen.

## Berechnung von Prozentwerten aus dem umgebenden Block

Wie oben erwähnt, hängt der berechnete Wert davon ab, wenn bestimmten Eigenschaften ein Prozentwert zugewiesen wird, aus welchem umgebenden Block das Element stammt. Die Eigenschaften, die auf diese Weise arbeiten, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}}-Eigenschaften berechnen Prozentwerte aus der `height` des umgebenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} und {{cssxref("margin")}}-Eigenschaften berechnen Prozentwerte aus der `width` des umgebenden Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block oder Listen-Element) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jeder Instanz unten geändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, sodass sein umgebender Block {{HTMLElement("section")}} ist, da es der nächste Vorfahre ist, der ein Block-Container ist (aufgrund von `display: block`).

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

In diesem Beispiel ist der umgebende Block des Absatzes das {{HTMLElement("body")}}-Element, da `<section>` kein Block-Container ist (aufgrund von `display: inline`) und keinen Formatierungskontext schafft.

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

In diesem Beispiel ist der umgebende Block des Absatzes `<section>`, da dessen `position` `absolute` ist. Die Prozentwerte des Absatzes werden durch das `padding` seines umgebenden Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der {{cssxref("box-sizing")}}-Wert des umgebenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, sodass sein umgebender Block der initiale umgebende Block ist (auf Bildschirmen das Viewport). Daher ändern sich die Abmessungen des Absatzes basierend auf der Größe des Browser-Fensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, sodass sein umgebender Block `<section>` ist, welches der nächste Vorfahre mit einer {{cssxref("transform")}}-Eigenschaft ist, die nicht `none` ist.

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
- [Lernen: Elemente größenmäßig in CSS anpassen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Außenabstandskollaps](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächlich](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
