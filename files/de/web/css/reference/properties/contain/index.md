---
title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`contain`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, dass ein Element und sein Inhalt so weit wie möglich unabhängig vom Rest des Dokumentbaums sind. Containment ermöglicht das Isolieren eines Abschnitts des DOM und bietet Leistungsverbesserungen, indem Berechnungen von Layout, Stil, Malen, Größe oder einer Kombination auf einen DOM-Teilbaum und nicht auf die gesamte Seite beschränkt werden. Containment kann auch verwendet werden, um CSS-Counter und Anführungszeichen zu begrenzen.

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

Die `contain` Eigenschaft kann einen der folgenden Werte haben:

- Das Schlüsselwort `none` **oder**
- Eines oder mehrere der durch ein Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einen der Kurzschriftwerte `strict` oder `content`

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass Containment angewendet wird.
- `strict`
  - : Alle Containment-Regeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Containment-Regeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Eine Größenbeschränkung wird auf das Element sowohl in Inline- als auch Blockrichtungen angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die untergeordneten Elemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Eine Inline-Größenbeschränkung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die untergeordneten Elemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements das interne Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und dessen Nachkommen beeinflussen können, entweichen die Effekte nicht dem enthaltenen Element. Zähler und Anführungszeichen sind auf das Element und seinen Inhalt beschränkt.
- `paint`
  - : Nachfahren des Elements werden außerhalb seiner Grenzen nicht angezeigt. Befindet sich das enthaltene Kästchen außerhalb des Bildschirms, muss der Browser seine enthaltenen Elemente nicht zeichnen - diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig durch dieses Kästchen eingeschlossen sind. Wenn ein Nachkomme die Grenzen des enthaltenen Elements überschreitet, wird dieser Nachkomme bis zur Grenze des enthaltenen Elements abgeschnitten.

## Beschreibung

Es gibt vier Arten von CSS-Containment: Größe, Layout, Stil und Malen, die auf den Container gesetzt werden. Die Eigenschaft ist eine durch Leerzeichen getrennte Liste einer Teilmenge der fünf Standardwerte oder einer der beiden Kurzschriftwerte. Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen. Der Hauptvorteil von Containment ist, dass der Browser nicht so oft den DOM oder das Seitenlayout neu rendern muss, was zu kleinen Leistungsverbesserungen bei der Darstellung statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain` Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindert, dass die internen Elemente Auswirkungen außerhalb ihrer Begrenzungsbox haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erstellt:
>
> 1. Einen neuen [umfassenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}} Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).
> 3. Einen neuen [Block-Formatting-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Malen-Containment

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass Nachkommen eines Elements außerhalb seiner Grenzen gezeichnet werden.

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

Betrachten Sie das folgende Beispiel, das zeigt, wie Elemente sich mit und ohne angewendetes Layout-Containment verhalten:

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

Die erste Karte hat Layout-Containment angewendet und ihr Layout ist vom Rest der Seite isoliert. Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns Sorgen über eine Neuberechnung des Layouts der anderen Elemente machen zu müssen. Wenn Floats die Grenzen der Karte überlappen, sind die restlichen Elemente der Seite nicht betroffen. Wenn der Browser den Teilbaum des enthaltenen Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden. Zusätzlich nutzt die feste Box die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben kein Containment. Der Layout-Kontext für die feste Box in der zweiten Karte ist das Wurzelelement, so dass die feste Box in der oberen rechten Ecke der Seite positioniert wird. Ein Float überlappt die Grenzen der zweiten Karte und verursacht eine unerwartete Layout-Verschiebung in der dritten Karte, die in der Positionierung des `<h2>` Elements sichtbar ist. Wenn eine Neuberechnung stattfindet, ist sie nicht auf den Container beschränkt. Dies beeinträchtigt die Leistung und stört das Layout der restlichen Seite.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Containment

Stil-Containment begrenzt [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) und [Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes) auf das enthaltene Element. Für CSS-Zähler sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element begrenzt, als ob das Element die Wurzel des Dokuments wäre.

#### Containment und Zähler

Das folgende Beispiel zeigt, wie Zähler funktionieren, wenn Stil-Containment angewendet wird:

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

Ohne Containment würde der Zähler für jedes Listenelement von 1 bis 5 inkrementieren. Stil-Containment bewirkt, dass die {{cssxref("counter-increment")}} Eigenschaft auf den Teilbaum des Elements begrenzt wird und der Zähler wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Containment und Anführungszeichen

CSS-Anführungszeichen sind ähnlich betroffen, da die [`content`](/de/docs/Web/CSS/Reference/Properties/content) Werte, die sich auf Anführungszeichen beziehen, auf das Element begrenzt sind:

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

Aufgrund des Containments ignoriert das erste schließende Anführungszeichen das innere Span und verwendet stattdessen das schließende Anführungszeichen des äußeren Span:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- [CSS Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
