---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Die **`contain`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt an, dass ein Element und dessen Inhalt so weit wie möglich unabhängig vom Rest des Dokumentbaums sind.
Einschließung ermöglicht es, einen Abschnitt des DOM zu isolieren, wodurch Leistungsverbesserungen erzielt werden, indem Berechnungen von Layout, Stil, Malen, Größe oder einer Kombination auf einen DOM-Teilbaum beschränkt werden, anstatt auf die gesamte Seite. Einschließung kann auch verwendet werden, um CSS-Zähler und -Anführungszeichen zu beschränken.

{{EmbedInteractiveExample("pages/css/contain.html")}}

Es gibt vier Arten von CSS-Einschließung: Größe, Layout, Stil und Malen, die auf den Container angewendet werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste eines Teils der fünf Standardwerte oder eines der beiden Kurzformwerte.
Änderungen an den eingeschlossenen Eigenschaften innerhalb des Containers werden nicht außerhalb des eingeschlossenen Elements auf den Rest der Seite übertragen.
Der Hauptvorteil der Einschließung besteht darin, dass der Browser das DOM oder das Seitenlayout nicht so oft neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen bei dynamischeren Anwendungen führt.

Die Verwendung der `contain` Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindern kann, dass interne Elemente Auswirkungen außerhalb ihrer Begrenzungsbox haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erzeugt:
>
> 1. Einen neuen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}} Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).
> 3. Einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

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

Die `contain` Eigenschaft kann einen der folgenden Werte haben:

- Das Schlüsselwort `none` **oder**
- Ein oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einer der Kurzformwerte `strict` oder `content`

Die Schlüsselwörter haben die folgenden Bedeutungen:

- `none`
  - : Das Element wird wie gewohnt gerendert, ohne dass eine Einschließung angewendet wird.
- `strict`
  - : Alle Einschließungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Einschließungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größeneinschließung wird auf das Element sowohl in der Inline- als auch in der Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kinderelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größeneinschließung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kinderelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements dessen internes Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und dessen Nachkommen beeinflussen können, entweichen die Effekte nicht dem enthaltenden Element. Zähler und Anführungszeichen sind auf das Element und dessen Inhalt beschränkt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Grenzen angezeigt. Wenn das enthaltende Feld außerhalb des Bildschirms liegt, muss der Browser seine enthaltenen Elemente nicht zeichnen — diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig durch dieses Feld enthalten sind. Wenn ein Nachkomme die Grenzen des einschließenden Elements überschreitet, wird dieser Nachkomme an die Begrenzungsbox des enthaltenden Elements abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mal-Einschließung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass Nachkommen eines Elements außerhalb seiner Grenzen gemalt werden.

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

### Layout-Einschließung

Betrachten Sie das folgende Beispiel, das zeigt, wie sich Elemente bei und ohne angewandte Layout-Einschließung verhalten:

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

Die erste Karte hat eine Layout-Einschließung angewendet und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite erneut verwenden, ohne uns um die Neuberechnung des Layouts der anderen Elemente zu kümmern.
Wenn Gleitblöcke die Kartengrenzen überlappen, sind die Elemente auf dem Rest der Seite nicht betroffen.
Wenn der Browser den Teilbaum des enthaltenden Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden.
Zusätzlich verwendet das feste Feld die Karte als Layout-Container, um sich zu positionieren.

Die zweite und dritte Karte haben keine Einschließung.
Der Layoutkontext für das feste Feld in der zweiten Karte ist das Wurzelelement, sodass das feste Feld in der oberen rechten Ecke der Seite positioniert wird.
Ein Gleitblock überlappt die Grenzen der zweiten Karte und verursacht, dass die dritte Karte eine unerwartete Layout-Änderung aufweist, die in der Positionierung des `<h2>` Elements sichtbar wird.
Wenn eine Neuberechnung erfolgt, ist sie nicht auf einen Container beschränkt.
Dies wirkt sich auf die Leistung aus und stört das Layout des restlichen Seiteninhalts.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Einschließung

Stil-Einschließung begrenzt [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Anführungszeichen](/de/docs/Web/CSS/quotes) auf das eingeschlossene Element.
Für CSS-Zähler sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element beschränkt, als ob das Element die Wurzel des Dokuments wäre.

#### Einschließung und Zähler

Das folgende Beispiel zeigt, wie Zähler funktionieren, wenn Stil-Einschließung angewendet wird:

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

Ohne Einschließung würde der Zähler für jedes Listenelement von 1 bis 5 inkrementiert.
Die Stil-Einschließung bewirkt, dass die {{cssxref("counter-increment")}} Eigenschaft auf den Teilbaum des Elements beschränkt ist und der Zähler erneut bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Einschließung und Anführungszeichen

CSS-Anführungszeichen sind ähnlich betroffen, da die [`content`](/de/docs/Web/CSS/content) Werte, die sich auf Anführungszeichen beziehen, auf das Element beschränkt sind:

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

Aufgrund der Einschließung ignoriert das erste schließende Anführungszeichen das innere Span und verwendet stattdessen das schließende Anführungszeichen des äußeren Spans:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Einschließung](/de/docs/Web/CSS/CSS_containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
