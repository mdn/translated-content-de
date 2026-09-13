---
title: "`contain` CSS property"
short-title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: 316367d0a304cf967691602672795825c05f835a
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`contain`** gibt an, dass ein Element und seine Inhalte möglichst unabhängig vom Rest des Dokumentbaums sind.
Containment ermöglicht das Isolieren eines Unterabschnitts des DOM und bietet Leistungsvorteile, indem Berechnungen für Layout, Stil, Painting, Größe oder eine beliebige Kombination davon auf einen DOM-Teilbaum statt auf die gesamte Seite beschränkt werden. Containment kann auch verwendet werden, um CSS-Zähler und Anführungszeichen zu begrenzen.

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

Diese Eigenschaft wird als einzelner Wert (`none`, `strict` oder `content`) oder als durch Leerzeichen getrennte Liste eines oder mehrerer der Werte `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge angegeben:

- `none`
  - : Das Element wird normal gerendert, ohne angewendetes Containment.
- `strict`
  - : Alle Containment-Regeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Containment-Regeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größen-Containment wird auf das Element sowohl in Inline- als auch in Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, wobei die Kindelemente ignoriert werden. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größen-Containment wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, wobei die Kindelemente ignoriert werden. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements wird vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements sein internes Layout beeinflusst und umgekehrt.
- `style`
  - : Bei Eigenschaften, die mehr als nur ein Element und seine Nachfahren beeinflussen können, treten die Auswirkungen nicht aus dem enthaltenden Element heraus. Zähler und Anführungszeichen werden auf das Element und seine Inhalte begrenzt.
- `paint`
  - : Nachfahren des Elements werden nicht außerhalb seiner Begrenzungen angezeigt. Wenn sich die enthaltende Box außerhalb des Bildschirms befindet, muss der Browser ihre enthaltenen Elemente nicht painten — diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig von dieser Box enthalten werden. Wenn ein Nachfahre die Begrenzungen des enthaltenden Elements überläuft, wird dieser Nachfahre an der Overflow-Clip-Kante des enthaltenden Elements abgeschnitten. Standardmäßig entspricht diese Kante bei nicht ersetzten Elementen der Padding-Box.

## Beschreibung

Es gibt vier Arten von CSS-Containment: Größe, Layout, Stil und Painting, die auf dem Container festgelegt werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste einer Teilmenge der fünf Standardwerte oder einer der beiden Kurzformwerte.
Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen.
Der Hauptvorteil von Containment besteht darin, dass der Browser das DOM oder das Seitenlayout nicht so häufig neu rendern muss, was zu kleinen Leistungsvorteilen beim Rendern statischer Seiten und zu größeren Leistungsvorteilen in dynamischeren Anwendungen führt.

Die Verwendung der Eigenschaft `contain` ist auf Seiten mit Gruppen von Elementen nützlich, die unabhängig sein sollen, da sie verhindern kann, dass Elementinterna Nebenwirkungen außerhalb ihrer Bounding-Box haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erzeugt:
>
> 1. Einen neuen [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) (für die Nachfahren, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).
> 3. Einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Paint-Containment

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachfahren eines Elements außerhalb seiner Begrenzungen painten.

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
  height: 40px;
  margin: 10px;
  background: aquamarine;
}

.contain-layout {
  contain: layout;
}
```

Auf die erste Karte wird Layout-Containment angewendet, und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns um die Neuberechnung des Layouts der anderen Elemente sorgen zu müssen.
Wenn Floats die Begrenzungen der Karte überlappen, werden Elemente auf dem Rest der Seite nicht beeinflusst.
Wenn der Browser den Teilbaum des enthaltenden Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden.
Zusätzlich verwendet die fixe Box die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben kein Containment.
Der Layout-Kontext für die fixe Box in der zweiten Karte ist das Wurzelelement, daher wird die fixe Box in der oberen rechten Ecke der Seite positioniert.
Ein Float überlappt die Begrenzungen der zweiten Karte, wodurch die dritte Karte eine unerwartete Layout-Verschiebung aufweist, die an der Positionierung des Elements `<h2>` sichtbar ist.
Wenn eine Neuberechnung erfolgt, ist sie nicht auf einen Container beschränkt.
Dies beeinträchtigt die Leistung und stört das Layout des Rests der Seite.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Containment

Stil-Containment begrenzt [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) und [Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes) auf das enthaltene Element.
Bei CSS-Zählern werden die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element begrenzt, als befände sich das Element an der Wurzel des Dokuments.

#### Containment und Zähler

Das folgende Beispiel betrachtet, wie Zähler funktionieren, wenn Stil-Containment angewendet wird:

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

Ohne Containment würde der Zähler für jedes Listenelement von 1 bis 5 erhöht werden.
Stil-Containment bewirkt, dass die Eigenschaft {{cssxref("counter-increment")}} auf den Teilbaum des Elements begrenzt wird und der Zähler wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Containment und Anführungszeichen

CSS-Anführungszeichen werden ähnlich beeinflusst, da die auf Anführungszeichen bezogenen {{cssxref("content")}}-Werte auf das Element begrenzt werden:

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

Aufgrund von Containment ignoriert das erste schließende Anführungszeichen das innere Span und verwendet stattdessen das schließende Anführungszeichen des äußeren Span:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Containment](/de/docs/Web/CSS/Guides/Containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- CSS-Eigenschaft {{cssxref("content-visibility")}}
- CSS-Eigenschaft {{cssxref("position")}}
