---
title: Layout und der enthaltende Block
slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft durch seinen **enthaltenden Block** beeinflusst. Am häufigsten ist der enthaltende Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächstgelegenen {{Glossary("Block-level_content", "Block-Level-")}} Vorfahren eines Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den enthaltenden Block eines Elements bestimmen.

Wenn ein Benutzeragent (wie Ihr Browser) ein Dokument layoutet, erzeugt er für jedes Element einen Rahmen. Jeder Rahmen ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllbereich
3. Randbereich
4. Außenabstandbereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der enthaltende Block eines Elements immer der Inhaltsbereich seines übergeordneten Elements ist, aber das stimmt nicht unbedingt. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der enthaltende Block eines Elements ist.

## Auswirkungen des enthaltenden Blocks

Bevor Sie lernen, was den enthaltenden Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft durch seinen enthaltenden Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Offset-Eigenschaften eines absolut positionierten Elements (d.h. dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist) angewendet werden, werden vom enthaltenden Block des Elements berechnet.

## Den enthaltenden Block identifizieren

Der Prozess zur Identifizierung des enthaltenden Blocks hängt vollständig vom Wert der {{cssxref("position")}} Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der enthaltende Block durch den Rand der _Inhaltsbox_ des nächstgelegenen Vorfahrenelements gebildet, das entweder **ein Blockcontainer** ist (wie ein Inline-Block-, Block- oder Listenelement) oder **einen Formatierungskontext etabliert** (wie ein Tabellencontainer, Flexcontainer, Gittercontainer oder den Blockcontainer selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der enthaltende Block durch den Rand der _Auffüllbox_ des nächstgelegenen Vorfahrenelements gebildet, das einen `position`-Wert ungleich `static` hat (`fixed`, `absolute`, `relative` oder `sticky`).
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der enthaltende Block durch den {{Glossary("viewport", "Viewport")}} (im Falle von kontinuierlichen Medien) oder den Seitenbereich (im Falle von Paginierungsmedien) bestimmt.
4. Wenn die `position`-Eigenschaft entweder **`absolute`** oder **`fixed`** ist, kann der enthaltende Block auch durch den Rand der _Auffüllbox_ des nächstgelegenen Vorfahrenelements gebildet werden, das eine der folgenden Bedingungen erfüllt:
   - Ein {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}} oder {{cssxref("perspective")}} Wert ungleich `none`.
   - Ein {{cssxref("contain")}} Wert von `layout`, `paint`, `strict` oder `content` (z.B. `contain: paint;`).
   - Ein {{cssxref("container-type")}} Wert ungleich `normal`.
   - Ein {{cssxref("will-change")}} Wert, der eine Eigenschaft enthält, für die ein nicht-initialer Wert einen enthaltenden Block bilden würde (z.B. `filter` oder `transform`).
   - Ein {{cssxref("content-visibility")}} Wert von `auto`.

> [!NOTE]
> Der enthaltende Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **anfänglicher enthaltender Block** bezeichnet wird. Es hat die Abmessungen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für Paginierungsmedien).

> [!NOTE]
> Es gibt Browserinkonsistenzen mit `perspective` und `filter`, die zur Bildung von enthaltenden Blöcken beitragen.

## Prozentwerte aus dem enthaltenden Block berechnen

Wie oben erwähnt, hängt der berechnete Wert von bestimmten Eigenschaften von dem enthaltenden Block des Elements ab, wenn ihnen ein Prozentwert zugewiesen wird. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Offset-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}} Eigenschaften berechnen Prozentwerte aus der `height` des enthaltenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} und {{cssxref("margin")}} Eigenschaften berechnen Prozentwerte aus der `width` des enthaltenden Blocks.

> [!NOTE]
> Ein **Blockcontainer** (wie ein Inline-Block-, Block- oder Listenelement) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Blockcontainer, wenn es Block-Level- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in den einzelnen Beispielen unten geändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, daher ist sein enthaltender Block {{HTMLElement("section")}}, da dies der nächstgelegene Vorfahre ist, der ein Blockcontainer ist (aufgrund von `display: block`).

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

In diesem Beispiel ist der enthaltende Block des Absatzes das {{HTMLElement("body")}} Element, da `<section>` kein Blockcontainer ist (aufgrund von `display: inline`) und keinen Formatierungskontext etabliert.

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

In diesem Beispiel ist der enthaltende Block des Absatzes `<section>`, da dessen `position` `absolute` ist. Die Prozentwerte des Absatzes werden von der `padding` seines enthaltenden Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der {{cssxref("box-sizing")}} Wert des enthaltenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, sodass sein enthaltender Block der anfängliche enthaltende Block ist (auf Bildschirmen der Viewport). Daher verändern sich die Abmessungen des Absatzes basierend auf der Größe des Browserfensters.

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
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- {{Glossary("Layout_mode", "Layoutmodi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stapelungskontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Außenabstand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [aktuelle](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
