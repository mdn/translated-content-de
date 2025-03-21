---
title: Layout und der umgebende Block
slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die Größe und Position eines Elements werden häufig von seinem **umgebenden Block** beeinflusst. Meistens ist der umgebende Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächstgelegenen {{Glossary("Block-level_content", "Block-Level")}} Vorfahren eines Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den umgebenden Block eines Elements bestimmen.

Wenn ein Nutzeragent (wie beispielsweise Ihr Browser) ein Dokument layoutet, wird für jedes Element ein Box-Modell generiert. Jede Box ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllungsbereich (Padding)
3. Rahmenbereich (Border)
4. Randbereich (Margin)

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der umgebende Block eines Elements immer der Inhaltsbereich des übergeordneten Elements ist, aber das ist nicht unbedingt wahr. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der umgebende Block eines Elements ist.

## Auswirkungen des umgebenden Blocks

Bevor Sie lernen, was den umgebenden Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft von seinem umgebenden Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements angewendet werden (d.h. eines Elements, dessen {{cssxref("position")}} auf `absolute` oder `fixed` eingestellt ist), werden vom umgebenden Block des Elements berechnet.

## Identifikation des umgebenden Blocks

Der Prozess zur Identifikation des umgebenden Blocks hängt vollständig vom Wert der {{cssxref("position")}} Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`**, oder **`sticky`** ist, wird der umgebende Block durch die Kante des _Inhaltsbereichts_ des nächstgelegenen Vorfahrenelements gebildet, das entweder **ein Block-Container** (wie ein Inline-Block, Block- oder Listenelement) ist oder **einen Formatierungskontext erstellt** (wie ein Tabellencontainer, Flexcontainer, Gittercontainer oder der Blockcontainer selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der umgebende Block durch die Kante des _Auffüllungsbereichs_ des nächstgelegenen Vorfahrenelements gebildet, das einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der umgebende Block durch das {{Glossary("viewport", "Ansichtsfenster")}} (bei kontinuierlichen Medien) oder den Seitenbereich (bei paginierten Medien) erstellt.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der umgebende Block auch durch die Kante des _Auffüllungsbereichs_ des nächstgelegenen Vorfahrenelements gebildet werden, das einen der folgenden Werte hat:

   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}}, oder {{cssxref("perspective")}}-Wert ungleich `none`.
   - Einen {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z. B. `contain: paint;`).
   - Einen {{cssxref("container-type")}}-Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, für die ein Nicht-Initialwert einen umgebenden Block bilden würde (z. B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der umgebende Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **initialer umgebender Block** bezeichnet wird. Es hat die Abmessungen des Ansichtsfensters (für kontinuierliche Medien) oder des Seitenbereichs (für paginierte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei `perspective` und `filter`, die zur Bildung des umgebenden Blocks beitragen.

## Berechnung von Prozentwerten aus dem umgebenden Block

Wie oben erwähnt, hängt bei bestimmten Eigenschaften, die einen Prozentwert erhalten, der berechnete Wert vom umgebenden Block des Elements ab. Die Eigenschaften, die auf diese Weise arbeiten, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}}, und {{cssxref("bottom")}}-Eigenschaften berechnen Prozentwerte aus der `height` des umgebenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, und {{cssxref("margin")}}-Eigenschaften berechnen Prozentwerte aus der `width` des umgebenden Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block- oder Listenelement) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

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

In diesem Beispiel ist der Absatz statisch positioniert, daher ist sein umgebender Block das {{HTMLElement("section")}}, da es der nächstgelegene Vorfahre ist, der ein Block-Container (aufgrund von `display: block`) ist.

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

In diesem Beispiel ist der umgebende Block des Absatzes das {{HTMLElement("body")}}-Element, da `<section>` kein Block-Container ist (aufgrund von `display: inline`) und keinen Formatierungskontext erstellt.

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

In diesem Beispiel ist der umgebende Block des Absatzes `<section>`, weil dessen `position` auf `absolute` gesetzt ist. Die Prozentwerte des Absatzes werden vom `padding` seines umgebenden Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der {{cssxref("box-sizing")}}-Wert des umgebenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, sodass sein umgebender Block der initiale umgebende Block ist (auf Bildschirmen das Ansichtsfenster). Daher ändern sich die Abmessungen des Absatzes basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, sodass sein umgebender Block `<section>`, der nächstgelegene Vorfahre mit einer {{cssxref("transform")}}-Eigenschaft, die nicht `none` ist.

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
- [Lernen: Größe von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- {{Glossary("Layout_mode", "Layoutmodi")}}
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stapeln von Kontexten](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Zusammenfallen von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value) Werte
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
