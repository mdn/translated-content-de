---
title: "`contain` CSS property"
short-title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`contain`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, dass ein Element und sein Inhalt, soweit wie möglich, unabhängig vom Rest des Dokumentbaums sind.
Containment ermöglicht es, einen Abschnitt des DOM zu isolieren und bietet Leistungsverbesserungen durch die Begrenzung von Berechnungen für Layout, Stil, Malen, Größe oder eine beliebige Kombination auf einen DOM-Teilbaum statt auf die gesamte Seite. Containment kann auch verwendet werden, um CSS-Zähler und Zitate zu begrenzen.

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
- Eines oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einer der Kurzschriftwerte `strict` oder `content`

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird wie gewohnt gerendert, ohne angewendetes Containment.
- `strict`
  - : Alle Containment-Regeln werden auf das Element angewandt. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Containment-Regeln außer `size` werden auf das Element angewandt. Dies ist gleichbedeutend mit `contain: layout paint style`.
- `size`
  - : Größen-Containment wird auf das Element in sowohl Inline- als auch Block-Richtung angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größen-Containment wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das innere Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements das innere Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und seine Nachfahren beeinflussen können, verlassen die Effekte nicht das enthaltene Element. Zähler und Zitate sind auf das Element und seinen Inhalt begrenzt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Begrenzungen angezeigt. Wenn das umgebende Rechteck nicht auf dem Bildschirm sichtbar ist, muss der Browser seine enthaltenen Elemente nicht zeichnen — diese müssen ebenfalls offscreen sein, da sie vollständig von diesem Rechteck eingeschlossen sind. Wenn ein Nachkomme über die Begrenzungen des enthaltenen Elements hinausgeht, wird dieser Nachkomme auf die Begrenzungsbox des enthaltenen Elements zugeschnitten.

## Beschreibung

Es gibt vier Arten von CSS-Containment: Größe, Layout, Stil und Malen, die auf dem Container festgelegt werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste eines Subsets der fünf Standardwerte oder einer der beiden Kurzschriftwerte.
Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen.
Der Hauptvorteil von Containment besteht darin, dass der Browser das DOM oder das Seitenlayout nicht so häufig neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Das Verwenden der `contain`-Eigenschaft ist auf Seiten nützlich, die Gruppen von Elementen enthalten, die unabhängig sein sollen, da sie verhindern kann, dass die Interna eines Elements Seiteneffekte außerhalb seiner Begrenzungsbox haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erzeugt:
>
> 1. Einen neuen [Containment-Block](/de/docs/Web/CSS/Guides/Display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).
> 3. Einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mal-Containment

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachkommen eines Elements außerhalb seiner Begrenzungen gezeichnet werden.

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  margin: 10px;
  font-size: 20px;
}

.contain-paint {
  contain: paint;
}
```

```html
<div class="contain-paint">
  <p>This text will be clipped to the bounds of the box.</p>
</div>
<div>
  <p>This text will not be clipped to the bounds of the box.</p>
</div>
```

{{EmbedLiveSample("Paint_containment", "100%", 280)}}

### Layout-Containment

Betrachten Sie das folgende Beispiel, das zeigt, wie sich Elemente mit und ohne angewendetes Layout-Containment verhalten:

```html
<div class="card contain-layout">
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

.contain-layout {
  contain: layout;
}
```

Die erste Karte hat Layout-Containment angewandt, und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns um die Neuberechnung des Layouts der anderen Elemente zu kümmern.
Wenn Floats die Begrenzungen der Karte überlappen, werden die Elemente auf dem Rest der Seite nicht beeinflusst.
Wenn der Browser den Teilbaum des enthaltenen Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden.
Zusätzlich verwendet das feste Feld die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben kein Containment.
Der Layout-Kontext für das feste Feld auf der zweiten Karte ist das Root-Element, sodass das feste Feld in der oberen rechten Ecke der Seite positioniert ist.
Ein Float überlappt die Begrenzungen der zweiten Karte, was dazu führt, dass die dritte Karte eine unerwartete Layout-Verschiebung hat, die in der Positionierung des `<h2>`-Elements sichtbar ist.
Wenn eine Neuberechnung erfolgt, ist sie nicht auf einen Container beschränkt.
Dies wirkt sich auf die Leistung aus und beeinträchtigt das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Containment

Stil-Containment begrenzt [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) und [Zitate](/de/docs/Web/CSS/Reference/Properties/quotes) auf das enthaltene Element.
Für CSS-Zähler sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element begrenzt, als ob das Element an der Wurzel des Dokuments steht.

#### Containment und Zähler

Das folgende Beispiel gibt einen Einblick, wie Zähler funktionieren, wenn Stil-Containment angewandt wird:

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

Ohne Containment würde der Zähler von 1 bis 5 für jedes Listenelement erhöhen.
Stil-Containment bewirkt, dass die {{cssxref("counter-increment")}}-Eigenschaft auf den Teilbaum des Elements begrenzt wird, und der Zähler beginnt wieder bei 1:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Containment und Zitate

CSS-Zitate sind ähnlich betroffen, in der Weise, dass die {{cssxref("content")}}-Werte, die sich auf Zitate beziehen, auf das Element beschränkt sind:

```html
<!-- With style containment -->
<span class="open-quote">
  outer
  <span class="contain-style">
    <span class="open-quote">inner</span>
  </span>
</span>
<span class="close-quote">close</span>
<br />
<!-- Without containment -->
<span class="open-quote">
  outer
  <span>
    <span class="open-quote">inner</span>
  </span>
</span>
<span class="close-quote">close</span>
```

```css
body {
  quotes: "[" "]" "‹" "›";
}
.open-quote::before {
  content: open-quote;
}

.close-quote::after {
  content: close-quote;
}

.contain-style {
  contain: style;
}
```

Aufgrund des Containments ignoriert das erste schließende Zitat das innere Spann-Element und verwendet stattdessen das schließende Zitat des äußeren Spann-Elements:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Containment](/de/docs/Web/CSS/Guides/Containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
- CSS-{{cssxref("position")}}-Eigenschaft
