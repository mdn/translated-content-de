---
title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`contain`**- [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, dass ein Element und dessen Inhalt so weit wie möglich unabhängig vom Rest des Dokumentbaums sind.
Die Enthaltung ermöglicht die Isolierung eines Abschnitts des DOM und bietet Leistungsverbesserungen, indem Berechnungen von Layout, Stil, Malen, Größe oder einer Kombination auf einen DOM-Teilbaum anstatt auf die gesamte Seite beschränkt werden. Enthaltung kann auch verwendet werden, um CSS-Zähler und Anführungszeichen zu begrenzen.

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

Es gibt vier Arten von CSS-Enthaltung: Größe, Layout, Stil und Malen, die auf den Container angewendet werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste einer Teilmenge der fünf Standardwerte oder einer der beiden Kurzformwerte.
Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht aus dem enthaltenen Element auf den Rest der Seite übertragen.
Der Hauptvorteil der Enthaltung besteht darin, dass der Browser den DOM oder das Seitenlayout nicht so häufig neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain`-Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindern kann, dass die Interna eines Elements außerhalb seines Begrenzungsrahmens Seiteneffekte haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erstellt:
>
> 1. Einen neuen [umfassenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).
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

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass Enthaltung angewendet wird.
- `strict`
  - : Alle Enthaltungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Enthaltungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größenenthaltung wird sowohl in der Inline- als auch in der Blockrichtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, unter Ignorierung der Kindelemente. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größenenthältung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, unter Ignorierung der Kindelemente. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements sein internes Layout beeinflusst, und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und dessen Nachkommen betreffen können, entweichen die Effekte nicht dem enthaltenden Element. Zähler und Anführungszeichen werden auf das Element und seinen Inhalt beschränkt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Grenzen angezeigt. Wenn das enthaltende Feld außerhalb des Bildschirms ist, muss der Browser seine enthaltenen Elemente nicht malen – diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig von diesem Feld umschlossen sind. Wenn ein Nachkomme die Grenzen des enthaltenden Elements überschreitet, wird dieser Nachkomme an das Randfeld des enthaltenden Elements abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Malenthaltung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachkommen eines Elements außerhalb seiner Grenzen gemalt werden.

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

### Layout-Enthaltung

Betrachten Sie das untenstehende Beispiel, das zeigt, wie sich Elemente mit und ohne angewendete Layout-Enthaltung verhalten:

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

Die erste Karte hat eine Layout-Enthaltung angewendet, und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns um die Neuberechnung des Layouts der anderen Elemente zu kümmern.
Wenn überlagernde Elemente die Kartenbegrenzungen überschreiten, werden die Elemente auf dem Rest der Seite nicht beeinflusst.
Wenn der Browser den Teilbaum des enthaltenden Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden.
Darüber hinaus verwendet die fixierte Box die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben keine Enthaltung.
Der Layout-Kontext für die fixierte Box in der zweiten Karte ist das Wurzelelement, sodass die fixierte Box in der oberen rechten Ecke der Seite positioniert ist.
Ein Gedankenüberfluss überschreitet die Begrenzungen der zweiten Karte und führt zu einem unerwarteten Layout-Verschiebungen der dritten Karte, das in der Positionierung des `<h2>`-Elements sichtbar ist.
Wenn eine Neuberechnung erfolgt, ist sie nicht auf einen Container beschränkt.
Dies wirkt sich auf die Leistung aus und beeinträchtigt das Layout des restlichen Bildschirms.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Enthaltung

Stil-Enthaltung beschränkt [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes) auf das enthaltende Element.
Für CSS-Zähler werden die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element beschränkt, als ob das Element an der Wurzel des Dokuments steht.

#### Enthaltung und Zähler

Das folgende Beispiel zeigt, wie Zähler arbeiten, wenn Stil-Enthaltung angewendet wird:

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

Ohne Enthaltung würde der Zähler für jedes Listenelement von 1 bis 5 hochzählen.
Stil-Enthaltung bewirkt, dass die {{cssxref("counter-increment")}}-Eigenschaft auf den Unterbaum des Elements beschränkt wird und der Zähler beginnt erneut bei 1:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Enthaltung und Anführungszeichen

CSS-Anführungszeichen sind ähnlich betroffen, da die [`content`](/de/docs/Web/CSS/Reference/Properties/content) Werte in Bezug auf Anführungszeichen auf das Element beschränkt sind:

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

Wegen der Enthaltung ignoriert das erste schließende Anführungszeichen das innere Span und verwendet stattdessen das schließende Anführungszeichen des äußeren Span:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Enthaltung](/de/docs/Web/CSS/CSS_containment)
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
