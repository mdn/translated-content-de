---
title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`contain`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, dass ein Element und dessen Inhalt, soweit wie möglich, unabhängig vom Rest des Dokumentbaums sind.
Containment ermöglicht es, einen Abschnitt des DOMs zu isolieren, um die Leistung zu verbessern, indem Berechnungen von Layout, Stil, Malen, Größe oder einer Kombination hiervon auf einen DOM-Teilbaum statt auf die gesamte Seite beschränkt werden. Containment kann auch verwendet werden, um CSS-Zähler und -Anführungszeichen zu begrenzen.

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

Es gibt vier Arten von CSS-Containment: Größe, Layout, Stil und Malen, die auf dem Container festgelegt werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste eines Subsets der fünf Standardwerte oder eines der beiden Abkürzungswerte.
Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen.
Der Hauptvorteil von Containment besteht darin, dass der Browser den DOM oder das Seitenlayout nicht so oft neu rendern muss, was zu kleinen Leistungsverbesserungen bei statischen Seiten und zu größeren Leistungsverbesserungen bei dynamischeren Anwendungen führt.

Die Verwendung der `contain`-Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindern kann, dass die internen Elemente außerhalb ihres Begrenzungsrahmens Nebeneffekte verursachen.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erstellt:
>
> 1. Einen neuen [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stapelausführungskontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).
> 3. Einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context).

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
- Einer der Abkürzungswerte `strict` oder `content`

Die Schlüsselwörter haben die folgenden Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne Anwendung von Containment.
- `strict`
  - : Alle Containment-Regeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Containment-Regeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größen-Containment wird auf das Element sowohl in der Inline- als auch in der Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größen-Containment wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements das interne Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und seine Nachkommen beeinflussen können, entweichen die Effekte nicht dem enthaltenden Element. Zähler und Anführungszeichen sind auf das Element und seinen Inhalt beschränkt.
- `paint`
  - : Nachfahren des Elements werden nicht außerhalb ihrer Grenzen angezeigt. Wenn das enthaltende Kästchen vom Bildschirm ist, muss der Browser seine enthaltenen Elemente nicht anzeigen — sie müssen auch vom Bildschirm sein, da sie vollständig von diesem Kasten enthalten sind. Wenn ein Nachfahre die Grenzen des enthaltenden Elements überschreitet, wird dieser Nachfahre auf die Begrenzungsbox des enthaltenden Elements abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Paint-Containment

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachkommen eines Elements außerhalb seiner Grenzen angezeigt werden.

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

Die erste Karte hat Layout-Containment angewendet, und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns Gedanken über eine Neuberechnung des Layouts anderer Elemente zu machen.
Wenn Gleitobjekte die Begrenzungsrahmen der Karte überlappen, sind die Elemente auf dem Rest der Seite nicht betroffen.
Wenn der Browser den Teilbaum des enthaltenden Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden.
Zusätzlich verwendet das Fix-Box-Element die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben kein Containment.
Der Layout-Kontext für das Fix-Box-Element in der zweiten Karte ist das Wurzelelement, sodass die Fix-Box in der oberen rechten Ecke der Seite positioniert ist.
Ein Gleitobjekt überlappt die Grenzen der zweiten Karte und verursacht bei der dritten Karte eine unerwartete Layout-Verschiebung, die in der Positionierung des `<h2>`-Elements sichtbar ist.
Wenn Neuberechnungen auftreten, sind diese nicht auf einen Container beschränkt.
Dies wirkt sich negativ auf die Leistung aus und stört das Layout der restlichen Seite.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Containment

Stil-Containment begrenzt [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) und [Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes) auf das enthaltende Element.
Für CSS-Zähler sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element beschränkt, als ob das Element an der Wurzel des Dokuments stünde.

#### Containment und Zähler

Das folgende Beispiel zeigt, wie Zähler arbeiten, wenn Stil-Containment angewendet wird:

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

Ohne Containment würde der Zähler für jedes Listenelement von 1 bis 5 inkrementiert werden.
Stil-Containment führt dazu, dass die Eigenschaft {{cssxref("counter-increment")}} auf den Teilbaum des Elements beschränkt wird und der Zähler wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Containment und Anführungszeichen

CSS-Anführungszeichen sind ähnlich betroffen, indem die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Werte in Bezug auf Anführungszeichen auf das Element beschränkt werden:

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

Aufgrund des Containments ignoriert das erste schließende Anführungszeichen den inneren Spann und verwendet stattdessen das schließende Anführungszeichen des äußeren Spanns:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
