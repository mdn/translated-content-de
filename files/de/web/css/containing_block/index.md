---
title: Layout und der enthaltene Block
slug: Web/CSS/Containing_block
l10n:
  sourceCommit: 3ac20cbf482168cdcf092a2ca5a336c12e299db8
---

{{CSSRef}}

Die Größe und Position eines Elements werden häufig durch seinen **enthaltenen Block** beeinflusst. Meistens ist der enthaltene Block der [Inhaltsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) des nächstgelegenen [Block-Level-](/de/docs/Glossary/Block-level_content) Vorfahren eines Elements, aber das ist nicht immer der Fall. In diesem Artikel untersuchen wir die Faktoren, die den enthaltenen Block eines Elements bestimmen.

Wenn ein Benutzeragent (wie Ihr Browser) ein Dokument darstellt, wird für jedes Element ein Kasten generiert. Jeder Kasten ist in vier Bereiche unterteilt:

1. Inhaltsbereich
2. Polsterbereich
3. Randbereich
4. Außenabstandbereich

![Diagramm des Box-Modells](box-model.png)

Viele Entwickler glauben, dass der enthaltene Block eines Elements immer der Inhaltsbereich seines Elternteils ist, aber das stimmt nicht zwangsläufig. Lassen Sie uns die Faktoren untersuchen, die bestimmen, was der enthaltene Block eines Elements ist.

## Auswirkungen des enthaltenen Blocks

Bevor wir uns damit befassen, was den enthaltenen Block eines Elements bestimmt, ist es nützlich zu wissen, warum er überhaupt wichtig ist.

Die Größe und Position eines Elements werden häufig durch seinen enthaltenen Block beeinflusst. Prozentwerte, die auf die {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} und Verschiebungseigenschaften eines absolut positionierten Elements angewendet werden (d. h. bei dem {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist), werden aus dem enthaltenen Block des Elements berechnet.

## Den enthaltenen Block identifizieren

Der Prozess zur Identifizierung des enthaltenen Blocks hängt vollständig vom Wert der {{cssxref("position")}}-Eigenschaft des Elements ab:

1. Wenn die `position`-Eigenschaft **`static`**, **`relative`** oder **`sticky`** ist, wird der enthaltene Block durch den Rand der _Content-Box_ des nächstgelegenen Vorfahrenelements gebildet, das entweder **ein Block-Container** ist (wie ein Inline-Block, Block oder Listenelement) oder **einen Formatierungskontext etabliert** (wie ein Tabellencontainer, Flex-Container, Rastercontainer oder der Block-Container selbst).
2. Wenn die `position`-Eigenschaft **`absolute`** ist, wird der enthaltene Block durch den Rand der _Polster-Box_ des nächstgelegenen Vorfahrenelements gebildet, das einen `position`-Wert ungleich `static` (`fixed`, `absolute`, `relative` oder `sticky`) hat.
3. Wenn die `position`-Eigenschaft **`fixed`** ist, wird der enthaltene Block durch den {{glossary("viewport")}} (im Fall von kontinuierlichen Medien) oder den Seitenbereich (im Fall von paginierten Medien) gebildet.
4. Wenn die `position` das Attribut **`absolute`** oder **`fixed`** hat, kann der enthaltene Block auch durch den Rand der _Polster-Box_ des nächstgelegenen Vorfahrenelements gebildet werden, das eines der folgenden Merkmale aufweist:

   - Ein {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}} oder {{cssxref("perspective")}}-Wert, der nicht `none` ist.
   - Ein {{cssxref("contain")}}-Wert von `layout`, `paint`, `strict` oder `content` (z. B. `contain: paint;`).
   - Ein {{cssxref("container-type")}}-Wert, der nicht `normal` ist.
   - Ein {{cssxref("will-change")}}-Wert, der eine Eigenschaft enthält, für die ein nicht-Initialwert einen enthaltenen Block bilden würde (z. B. `filter` oder `transform`).
   - Ein {{cssxref("content-visibility")}}-Wert von `auto`.

> [!NOTE]
> Der enthaltene Block, in dem sich das Wurzelelement ({{HTMLElement("html")}}) befindet, ist ein Rechteck, das als **anfänglicher enthaltener Block** bezeichnet wird. Es hat die Abmessungen des Viewports (für kontinuierliche Medien) oder des Seitenbereichs (für paginierte Medien).

> [!NOTE]
> Es gibt Browser-Inkonsistenzen mit `perspective` und `filter`, die zur Bildung des enthaltenen Blocks beitragen.

## Berechnung der Prozentwerte aus dem enthaltenen Block

Wie oben bereits erwähnt, sind die berechneten Werte, wenn bestimmten Eigenschaften ein Prozentwert zugewiesen wird, vom enthaltenen Block des Elements abhängig. Die Eigenschaften, die auf diese Weise funktionieren, sind **Box-Modell-Eigenschaften** und **Versatz-Eigenschaften**:

1. Die {{cssxref("height")}}, {{cssxref("top")}} und {{cssxref("bottom")}}-Eigenschaften berechnen Prozentwerte aus der `Höhe` des enthaltenen Blocks.
2. Die {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} und {{cssxref("margin")}}-Eigenschaften berechnen Prozentwerte aus der `Breite` des enthaltenen Blocks.

> [!NOTE]
> Ein **Block-Container** (wie ein Inline-Block, Block oder Listenelement) enthält entweder nur Inline-Level-Kästen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Kästen, die an einem Block-Formatierungskontext teilnehmen. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Kästen enthält.

## Einige Beispiele

Der HTML-Code für alle unsere Beispiele ist:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Nur das CSS wird in jedem unten stehenden Fall geändert.

### Beispiel 1

In diesem Beispiel ist der Absatz statisch positioniert, daher ist sein enthaltener Block {{HTMLElement("section")}}, da es der nächstgelegene Vorfahr ist, der ein Block-Container ist (aufgrund von `display: block`).

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

In diesem Beispiel ist der enthaltende Block des Absatzes das {{HTMLElement("body")}}-Element, weil `<section>` kein Block-Container ist (aufgrund von `display: inline`) und keinen Formatierungskontext etabliert.

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
  width: 50%; /* == halbe Breite des Body */
  height: 200px; /* Hinweis: ein Prozentsatz wäre 0 */
  background: cyan;
}
```

{{EmbedLiveSample('Example_2','100%','300')}}

### Beispiel 3

In diesem Beispiel ist der enthaltende Block des Absatzes `<section>`, da letzteres `position` auf `absolute` gesetzt ist. Die Prozentwerte des Absatzes werden durch das `padding` seines enthaltenen Blocks beeinflusst, obwohl dies nicht der Fall wäre, wenn der `box-sizing`-Wert des enthaltenen Blocks `border-box` wäre.

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

In diesem Beispiel hat der Absatz `position` auf `fixed`, sodass sein enthaltender Block der anfängliche enthaltende Block ist (auf Bildschirmen der Viewport). Daher ändern sich die Abmessungen des Absatzes basierend auf der Größe des Browserfensters.

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
  width: 50%; /* == (50vw - (Breite der vertikalen Bildlaufleiste)) */
  height: 50%; /* == (50vh - (Höhe der horizontalen Bildlaufleiste)) */
  margin: 5%; /* == (5vw - (Breite der vertikalen Bildlaufleiste)) */
  padding: 5%; /* == (5vw - (Breite der vertikalen Bildlaufleiste)) */
  background: cyan;
}
```

{{EmbedLiveSample('Example_4','100%','300')}}

### Beispiel 5

In diesem Beispiel hat der Absatz `position` auf `absolute`, sodass sein enthaltender Block `<section>` ist, welches der nächstgelegene Vorfahr mit einer {{cssxref("transform")}}-Eigenschaft ist, die nicht `none` ist.

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
- [Baustein: Größenanpassung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Außenabstand-Kollapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [genutzt](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- {{glossary("Intrinsic size")}}
