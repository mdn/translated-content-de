---
title: Layout und der enthaltende Block
slug: Web/CSS/Containing_block
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die Größe und Position eines Elements werden oft von seinem **enthaltenden Block** beeinflusst. Meistens ist der enthaltende Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächsten {{Glossary("Block-level_content", "Block-Level")}}-Vorfahren-Elements, dies ist jedoch nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den enthaltenden Block eines Elements bestimmen.

Wenn ein Benutzeragent (wie Ihr Browser) ein Dokument anordnet, wird für jedes Element eine Box erzeugt. Jede Box ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Auffüllbereich
3. Randbereich
4. Außenabstandbereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der enthaltende Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das ist nicht unbedingt wahr. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der enthaltende Block eines Elements ist.

## Auswirkungen des enthaltenden Blocks

Bevor Sie lernen, was den enthaltenden Block eines Elements bestimmt, ist es nützlich, zu wissen, warum es überhaupt wichtig ist.

Die Größe und Position eines Elements werden oft von seinem enthaltenden Block beeinflusst. Prozentwerte, die auf die Eigenschaften {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und die Versatzeigenschaften eines absolut positionierten Elements angewendet werden (d. h. das `position` auf `absolute` oder `fixed` gesetzt hat), werden aus dem enthaltenden Block des Elements berechnet.

## Identifizierung des enthaltenden Blocks

Der Prozess zur Identifizierung des enthaltenden Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der enthaltende Block durch die Kante der _Inhaltsbox_ des nächsten Vorfahren-Elements gebildet, das entweder **ein Block-Container** ist (wie ein Inline-Block, Block oder Listenelement) oder **einen Formatierungskontext erstellt** (wie ein Tabellencontainer, Flexcontainer, Rastercontainer oder der Blockcontainer selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der enthaltende Block durch die Kante der _Auffüllbox_ des nächsten Vorfahren-Elements gebildet, das einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der enthaltende Block durch das {{Glossary("viewport", "viewport")}} (im Falle kontinuierlicher Medien) oder den Seitenbereich (im Falle von Seitenmedien) festgelegt.
4. Wenn die `position`-Eigenschaft **`absolute`** oder **`fixed`** ist, kann der enthaltende Block auch durch die Kante der _Auffüllbox_ des nächsten Vorfahren-Elements gebildet werden, das eine der folgenden Eigenschaften hat:

   - Einen {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}}, oder {{cssxref("perspective")}}-Wert ungleich `none`.
   - Einen {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z. B. `contain: paint;`).
   - Einen {{cssxref("container-type")}}-Wert ungleich `normal`.
   - Einen {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, für die ein Wert ungleich dem Anfangswert einen enthaltenden Block bilden würde (z. B. `filter` oder `transform`).
   - Einen {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der enthaltende Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **anfänglicher enthaltender Block** bezeichnet wird. Es hat die Abmessungen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für Seitenmedien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen bei `perspective` und `filter`, die zur Bildung des enthaltenden Blocks beitragen.

## Berechnung von Prozentwerten aus dem enthaltenden Block

Wie oben erwähnt, hängt der berechnete Wert, wenn bestimmten Eigenschaften ein Prozentwert gegeben wird, vom enthaltenden Block des Elements ab. Die Eigenschaften, die auf diese Weise funktionieren, sind **Eigenschaften des Box-Modells** und **Versatzeigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}}-Eigenschaften berechnen Prozentwerte aus der `height` des enthaltenden Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} und {{cssxref("margin")}}-Eigenschaften berechnen Prozentwerte aus der `width` des enthaltenden Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block oder Listenelement) enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem der untenstehenden Beispiele geändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, also ist sein enthaltender Block {{HTMLElement("section")}}, da dies der nächste Vorfahre ist, der ein Block-Container ist (aufgrund von `display: block`).

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

In diesem Beispiel ist der enthaltende Block des Absatzes das {{HTMLElement("body")}}-Element, weil `<section>` kein Block-Container ist (aufgrund von `display: inline`) und keinen Formatierungskontext erstellt.

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

In diesem Beispiel ist der enthaltende Block des Absatzes `<section>`, da letzterer `position` auf `absolute` gesetzt hat. Die Prozentwerte des Absatzes werden durch das `padding` seines enthaltenden Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der {{cssxref("box-sizing")}}-Wert des enthaltenden Blocks `border-box` wäre.

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

In diesem Beispiel ist die `position` des Absatzes `fixed`, also ist sein enthaltender Block der anfängliche enthaltende Block (bei Bildschirmen der Viewport). Somit ändern sich die Abmessungen des Absatzes basierend auf der Größe des Browserfensters.

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

In diesem Beispiel ist die `position` des Absatzes `absolute`, also ist sein enthaltender Block `<section>`, welches das nächste Vorfahren-Element mit einer `transform`-Eigenschaft ist, die nicht `none` ist.

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
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Außenabstand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [verwendet](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
