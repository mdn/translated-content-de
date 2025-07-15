---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

Die **`contain`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, dass ein Element und sein Inhalt, soweit möglich, unabhängig vom Rest des Dokumentbaums sind. Die Kontainment-Funktion ermöglicht es, einen Abschnitt des DOM zu isolieren, was Leistungsverbesserungen bietet, indem Berechnungen von Layout, Stil, Malen, Größe oder einer beliebigen Kombination auf einen DOM-Teilbaum beschränkt werden, anstatt auf die gesamte Seite. Kontainment kann auch verwendet werden, um CSS-Zähler und Anführungszeichen zu begrenzen.

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

Es gibt vier Arten von CSS-Kontainment: Größe, Layout, Stil und Malen, die auf dem Container festgelegt werden. Die Eigenschaft ist eine durch Leerzeichen getrennte Liste eines Teilbereichs der fünf Standardwerte oder einer der beiden Kurzformwerte. Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen. Der Hauptvorteil von Kontainment besteht darin, dass der Browser das DOM oder das Seitenlayout nicht so oft neu rendern muss, was zu geringen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain`-Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindern kann, dass interne Elemente außerhalb ihrer Begrenzungsbox Nebenwirkungen haben.

> [!NOTE]
> Die Verwendung von `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erzeugt:
>
> 1. Einen neuen [Umgebungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).
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
- Eines oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style`, und `paint` in beliebiger Reihenfolge **oder**
- Einer der Kurzformwerte `strict` oder `content`

Die Schlüsselwörter haben die folgenden Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass ein Kontainment angewandt wird.
- `strict`
  - : Alle Kontainment-Regeln werden auf das Element angewandt. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Kontainment-Regeln außer `size` werden auf das Element angewandt. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größenkontainment wird auf das Element sowohl in der Inline- als auch in der Blockrichtung angewandt. Die Größe des Elements kann isoliert berechnet werden, wobei Kinder-Elemente ignoriert werden. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größenkontainment wird auf das Element angewandt. Die Inline-Größe des Elements kann isoliert berechnet werden, wobei Kinder-Elemente ignoriert werden. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements das interne Layout beeinflusst und umgekehrt.
- `style`
  - : Bei Eigenschaften, die mehr als nur ein Element und seine Nachkommen betreffen können, verlassen die Effekte das beinhaltende Element nicht. Zähler und Anführungszeichen sind auf das Element und seinen Inhalt begrenzt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Begrenzung dargestellt. Wenn das beinhaltende Feld außerhalb des Bildschirms ist, muss der Browser dessen Inhalte nicht malen – diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig durch dieses Feld enthalten sind. Wenn ein Nachkomme die Grenzen des beinhaltenden Elements überschreitet, wird dieser Nachkomme auf die Rahmen-Box des beinhaltenden Elements beschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mal-Kontainment

Das folgende Beispiel zeigt, wie `contain: paint` verwendet werden kann, um zu verhindern, dass Nachkommen eines Elements außerhalb seiner Grenzen dargestellt werden.

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

### Layout-Kontainment

Betrachten Sie das folgende Beispiel, das zeigt, wie sich Elemente mit und ohne angewandtes Layout-Kontainment verhalten:

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

Die erste Karte hat Layout-Kontainment angewandt, und ihr Layout ist vom Rest der Seite isoliert. Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns über das Neuberechnen des Layouts der anderen Elemente Sorgen machen zu müssen. Wenn Gleitobjekte die Grenzen der Karte überlappen, werden die Elemente auf dem Rest der Seite nicht beeinflusst. Wenn der Browser den beinhaltenden Elementbaum neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des beinhaltenden Elements muss neu berechnet werden. Zusätzlich verwendet die feste Box die Karte als Layout-Container, um sich zu positionieren.

Die zweite und dritte Karte haben kein Kontainment. Der Layout-Kontext für die feste Box in der zweiten Karte ist das Wurzelelement, daher wird die feste Box in der oberen rechten Ecke der Seite positioniert. Ein Gleitobjekt überlappt die Grenzen der zweiten Karte und verursacht, dass die dritte Karte eine unerwartete Layout-Verschiebung aufweist, die in der Positionierung des `<h2>`-Elements sichtbar ist. Wenn Neuberechnungen auftreten, sind sie nicht auf einen Container beschränkt. Dies beeinträchtigt die Leistung und stört das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Kontainment

Stil-Kontainment begrenzt [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Anführungszeichen](/de/docs/Web/CSS/quotes) auf das beinhaltende Element. Für CSS-Zähler sind die {{cssxref("counter-increment")}} und {{cssxref("counter-set")}}-Eigenschaften auf das Element begrenzt, als ob das Element an der Wurzel des Dokuments wäre.

#### Kontainment und Zähler

Das folgende Beispiel zeigt, wie Zähler funktionieren, wenn Stil-Kontainment angewandt wird:

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

Ohne Kontainment würde der Zähler von 1 bis 5 für jedes Listenelement hochzählen. Stil-Kontainment bewirkt, dass die {{cssxref("counter-increment")}}-Eigenschaft auf den Teilbaum des Elements beschränkt wird und der Zähler beginnt wieder bei 1:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Kontainment und Anführungszeichen

CSS-Anführungszeichen sind ähnlich betroffen, da die [`content`](/de/docs/Web/CSS/content)-Werte, die Anführungszeichen betreffen, auf das Element begrenzt sind:

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

Aufgrund des Kontainments ignoriert das erste schließende Anführungszeichen den inneren `span` und verwendet stattdessen das schließende Anführungszeichen des äußeren `span`:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Kontainment](/de/docs/Web/CSS/CSS_containment)
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}}-Eigenschaft
- CSS {{cssxref("position")}}-Eigenschaft
