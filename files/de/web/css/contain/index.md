---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`contain`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, dass ein Element und sein Inhalt so weit wie möglich unabhängig von der restlichen Dokumentenstruktur sind. Die Begrenzung ermöglicht es, einen Abschnitt des DOM zu isolieren, was Leistungsverbesserungen bietet, indem Berechnungen von Layout, Stil, Malen, Größe oder einer Kombination auf einen DOM-Teilbaum beschränkt werden, anstatt auf die gesamte Seite. Die Begrenzung kann auch verwendet werden, um CSS-Zähler und -Anführungen zu definieren.

{{InteractiveExample("CSS Demo: contain")}}

```css interactive-example-choice
contain: none;
```

```css interactive-example-choice
contain: size;
```

```css interactive-example-choice
contain: layout;
```

```css interactive-example-choice
contain: paint;
```

```css interactive-example-choice
contain: strict;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="card" id="example-element">
    <h2>Element with '<code>contain</code>'</h2>
    <p>
      The Goldfish is a species of domestic fish best known for its bright
      colors and patterns.
    </p>
    <div class="fixed"><p>Fixed right 4px</p></div>
  </div>
</section>
```

```css interactive-example
h2 {
  margin-top: 0;
}

#default-example {
  text-align: left;
  padding: 4px;
  font-size: 16px;
}

.card {
  text-align: left;
  border: 3px dotted;
  padding: 20px;
  margin: 10px;
  width: 85%;
  min-height: 150px;
}

.fixed {
  position: fixed;
  border: 3px dotted;
  right: 4px;
  padding: 4px;
  margin: 4px;
}
```

Es gibt vier Arten von CSS-Begrenzungen: Größe, Layout, Stil und Malen, die auf dem Behälter festgelegt werden. Die Eigenschaft ist eine durch Leerzeichen getrennte Liste eines Teilmengen der fünf Standardwerte oder einer der zwei Kurzwert-Eigenschaften. Änderungen an den begrenzten Eigenschaften innerhalb des Behälters werden nicht außerhalb des begrenzten Elements auf den Rest der Seite übertragen. Der Hauptvorteil der Begrenzung ist, dass der Browser das DOM oder die Seitenstruktur nicht so oft neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain` Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindern kann, dass die internen Elemente außerhalb ihres Begrenzungsrahmens Seiteneffekte haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erstellt:
>
> 1. Einen neuen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) (für die Nachfahren, deren {{cssxref("position")}} Eigenschaft `absolute` oder `fixed` ist).
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
- Eines oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einen der Kurzwert-Eigenschaften `strict` oder `content`

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass eine Begrenzung angewendet wird.
- `strict`
  - : Alle Begrenzungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Begrenzungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größenbegrenzung wird sowohl in der Inline- als auch in der Blockrichtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größenbegrenzung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements dessen internes Layout beeinflusst und umgekehrt.
- `style`
  - : Bei Eigenschaften, die mehr als nur ein Element und seine Nachfahren beeinflussen können, entweichen die Effekte nicht dem enthaltenen Element. Zähler und Anführungen sind auf das Element und dessen Inhalt beschränkt.
- `paint`
  - : Nachfahren des Elements werden nicht außerhalb seiner Grenzen angezeigt. Wenn der begrenzende Block unsichtbar ist, muss der Browser die enthaltenen Elemente nicht rendern — diese müssen ebenfalls unsichtbar sein, da sie vollständig von diesem Block eingeschlossen sind. Wenn ein Nachfolger die Grenzen des enthaltenden Elements überschreitet, wird dieser Nachfolger an der Border-Box des enthaltenden Elements abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Paint-Begrenzung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachfahren eines Elements außerhalb seiner Grenzen angezeigt werden.

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

### Layout-Begrenzung

Betrachten Sie das folgende Beispiel, das zeigt, wie Elemente mit und ohne Layout-Begrenzung funktionieren:

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

Die erste Karte hat eine Layout-Begrenzung, und ihr Layout ist vom Rest der Seite isoliert. Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns um die Neukalkulation des Layouts der anderen Elemente zu kümmern. Wenn Floats die Kartenbegrenzung überlappen, sind die anderen Elemente auf der Seite nicht betroffen. Wenn der Browser den Teilbaum des enthaltenden Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden. Darüber hinaus verwendet der feste Kasten die Karte als Layout-Behälter, um sich selbst zu positionieren.

Die zweite und dritte Karte haben keine Begrenzung. Der Layout-Kontext des festen Kastens in der zweiten Karte ist das Root-Element, sodass der Kasten in der oberen rechten Ecke der Seite positioniert ist. Ein Float überlappt die Begrenzungen der zweiten Karte, was dazu führt, dass die dritte Karte eine unerwartete Layout-Verschiebung hat, die in der Positionierung des `<h2>`-Elements sichtbar ist. Bei der Neukalkulation ist sie nicht auf einen Container beschränkt. Dies wirkt sich auf die Leistung aus und beeinträchtigt das Layout des restlichen Teils der Seite.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stilbegrenzung

Stilbegrenzung definiert den Bereich von [Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Anführungszeichen](/de/docs/Web/CSS/quotes) auf das enthaltene Element.
Für CSS-Zähler werden die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element beschränkt, als ob das Element am Root des Dokuments wäre.

#### Begrenzung und Zähler

Das folgende Beispiel zeigt, wie Zähler funktionieren, wenn die Stilbegrenzung angewendet wird:

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

Ohne Begrenzung würde der Zähler für jedes Listenelement von 1 bis 5 inkrementiert.
Die Stilbegrenzung bewirkt, dass die Eigenschaft {{cssxref("counter-increment")}} auf den Teilbaum des Elements beschränkt wird und der Zähler wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Begrenzung und Anführungszeichen

CSS-Anführungszeichen sind ähnlich betroffen, da die [`content`](/de/docs/Web/CSS/content) Werte im Zusammenhang mit Anführungszeichen auf das Element beschränkt sind:

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

Aufgrund der Begrenzung ignoriert das erste schließende Anführungszeichen das innere `span` und verwendet stattdessen das schließende Anführungszeichen des äußeren `span`:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Begrenzung](/de/docs/Web/CSS/CSS_containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
