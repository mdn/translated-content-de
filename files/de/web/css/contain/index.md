---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Die **`contain`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, dass ein Element und dessen Inhalte so weit wie möglich unabhängig vom Rest des Dokumentbaums sind. Einschließung ermöglicht es, einen Abschnitt des DOM zu isolieren, was Leistungsverbesserungen durch Begrenzung der Berechnungen von Layout, Stil, Darstellung, Größe oder einer Kombination davon auf einen DOM-Teilbaum anstelle der gesamten Seite bietet. Einschließung kann auch verwendet werden, um CSS-Zähler und Zitate zu begrenzen.

{{EmbedInteractiveExample("pages/css/contain.html")}}

Es gibt vier Arten der CSS-Einschließung: Größe, Layout, Stil und Darstellung, die auf dem Container festgelegt werden. Die Eigenschaft ist eine durch Leerzeichen getrennte Liste von einem Teil der fünf Standardwerte oder einem der beiden Kurzformwerte. Änderungen an den eingeschlossenen Eigenschaften innerhalb des Containers werden nicht außerhalb des eingeschlossenen Elements auf den Rest der Seite übertragen. Der Hauptvorteil der Einschließung besteht darin, dass der Browser das DOM oder das Layout der Seite nicht so oft neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain`-Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindern kann, dass die Interna der Elemente außerhalb ihres Begrenzungsrahmens Auswirkungen haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erstellt:
>
> 1. Einen neuen [einschließenden Block](/de/docs/Web/CSS/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stapelhintergrund](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
> 3. Einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

## Syntax

```css
/* Keyword values */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: inline-size;
contain: layout;
contain: style;
contain: paint;

/* Multiple keywords */
contain: size paint;
contain: size layout paint;
contain: inline-size layout;

/* Global values */
contain: inherit;
contain: initial;
contain: revert;
contain: revert-layer;
contain: unset;
```

### Werte

Die `contain`-Eigenschaft kann einen der folgenden Werte haben:

- Das Schlüsselwort `none` **oder**
- Eins oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einen der Kurzformwerte `strict` oder `content`

Die Schlüsselwörter haben die folgenden Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass eine Einschließung angewendet wird.
- `strict`
  - : Alle Einschließungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Einschließungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größeneinschließung wird auf das Element sowohl in Inline- als auch in Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu beachten. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größeneinschließung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu beachten. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, nichts außerhalb des Elements beeinflusst dessen internes Layout und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und dessen Nachkommen beeinflussen können, verlassen die Effekte nicht das einschließende Element. Zähler und Zitate sind auf das Element und seine Inhalte begrenzt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Begrenzungen angezeigt. Wenn das einschließende Feld außerhalb des Bildschirms ist, muss der Browser seine eingeschlossenen Elemente nicht darstellen – diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig von diesem Feld eingeschlossen sind. Wenn ein Nachkomme die Begrenzungen des einschließenden Elements überläuft, wird dieser Nachkomme auf die Rahmenbox des einschließenden Elements beschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Darstellungseinschließung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass Nachkommen eines Elements außerhalb seiner Begrenzungen dargestellt werden.

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  margin: 10px;
  font-size: 20px;
}
```

```html
<div style="contain: paint">
  <p>This text will be clipped to the bounds of the box.</p>
</div>
<div>
  <p>This text will not be clipped to the bounds of the box.</p>
</div>
```

{{EmbedLiveSample("Paint_containment", "100%", 280)}}

### Layouteinschließung

Betrachten Sie das folgende Beispiel, das zeigt, wie sich Elemente mit und ohne angewendete Layouteinschließung verhalten:

```html
<div class="card" style="contain: layout;">
  <h2>Card 1</h2>
  <div class="fixed"><p>Fixed box 1</p></div>
  <div class="float"><p>Float box 1</p></div>
</div>
<div class="card">
  <h2>Card 2</h2>
  <div class="fixed"><p>Fixed box 2</p></div>
  <div class="float"><p>Float box 2</p></div>
</div>
<div class="card">
  <h2>Card 3</h2>
  <!-- ... -->
</div>
```

```css hidden
p {
  margin: 4px;
  padding: 4px;
}

h2 {
  margin-bottom: 4px;
  padding: 10px;
}

div {
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 gray;
  padding: 6px;
  margin: 6px;
}
```

```css
.card {
  width: 70%;
  height: 90px;
}

.fixed {
  position: fixed;
  right: 10px;
  top: 10px;
  background: coral;
}

.float {
  float: left;
  margin: 10px;
  background: aquamarine;
}
```

Die erste Karte hat eine Layouteinschließung, und ihr Layout ist vom Rest der Seite isoliert. Wir können diese Karte an anderen Stellen der Seite wiederverwenden, ohne uns Gedanken über eine Neuberechnung des Layouts der anderen Elemente machen zu müssen. Wenn sich Flächen über die Begrenzungen der Karte überlappen, sind Elemente auf dem Rest der Seite nicht betroffen. Wenn der Browser den Teildombaum des einschließenden Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des eingeschlossenen Elements muss neu berechnet werden. Zusätzlich verwendet die feste Box die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben keine Einschlüsse. Der Layoutkontext für die feste Box in der zweiten Karte ist das Wurzelelement, daher wird die feste Box in der rechten oberen Ecke der Seite positioniert. Eine Fläche überlappt die Begrenzungen der zweiten Karte, was dazu führt, dass sich das Layout der dritten Karte unerwartet verschiebt, was in der Positionierung des `<h2>`-Elements sichtbar ist. Wenn eine Neuberechnung erfolgt, ist sie nicht auf einen Container beschränkt. Dies wirkt sich auf die Leistung aus und beeinträchtigt das Layout des Restes der Seite.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stileinschließung

Stileinschließung begrenzt [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Zitate](/de/docs/Web/CSS/quotes) auf das eingeschlossene Element. Für CSS-Zähler sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element beschränkt, als ob das Element am Anfang des Dokuments steht.

#### Einhaltung und Zähler

Das folgende Beispiel zeigt, wie Zähler funktionieren, wenn Stileinschließung angewendet wird:

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
  <li class="container">Item C</li>
  <li>Item D</li>
  <li>Item E</li>
</ul>
```

```css
body {
  counter-reset: list-items;
}

li::before {
  counter-increment: list-items;
  content: counter(list-items) ": ";
}

.container {
  contain: style;
}
```

Ohne Einschließung würde der Zähler bei jedem Listenelement von 1 bis 5 inkrementieren. Die Stileinschließung bewirkt, dass die Eigenschaft {{cssxref("counter-increment")}} auf den Teilbaum des Elements beschränkt ist und der Zähler wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Einhaltung und Zitate

CSS-Zitate sind ähnlich betroffen, da die [`content`](/de/docs/Web/CSS/content)-Werte für Zitate auf das Element begrenzt sind:

```html
<!-- With style containment -->
<span class="open-quote">
  outer
  <span style="contain: style;">
    <span class="open-quote"> inner </span>
  </span>
</span>
<span class="close-quote"> close </span>
<br />
<!-- Without containment -->
<span class="open-quote">
  outer
  <span>
    <span class="open-quote"> inner </span>
  </span>
</span>
<span class="close-quote"> close </span>
```

```css
body {
  quotes: "[" "]" "‹" "›";
}
.open-quote:before {
  content: open-quote;
}

.close-quote:after {
  content: close-quote;
}
```

Aufgrund der Einschließung ignoriert das erste Schlusszeichen den inneren Span und verwendet stattdessen das Schlusszeichen des äußeren Spans:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS containment](/de/docs/Web/CSS/CSS_containment)
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
