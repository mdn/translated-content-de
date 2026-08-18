---
title: "`contain` CSS property"
short-title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: 65ecf8a285c4139f902eae63ececc6796eb98eaa
---

Die **`contain`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, dass ein Element und sein Inhalt, soweit möglich, unabhängig vom Rest des Dokumentbaums sind. Die Einschließung ermöglicht es, einen Abschnitt des DOM zu isolieren, was Leistungsvorteile bietet, indem Berechnungen von Layout, Stil, Malen, Größe oder jede Kombination auf einen DOM-Teilbaum beschränkt werden, anstatt auf die gesamte Seite. Einschließung kann auch verwendet werden, um CSS-Zähler und Zitate zu begrenzen.

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
- Ein oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einer der Kurzwerte `strict` oder `content`

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass Einschließung angewendet wird.
- `strict`
  - : Allen Einschließungsregeln wird auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Einschließungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größenbeschränkung wird auf das Element sowohl in Inline- als auch in Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größenbeschränkung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements sein internes Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur das Element und seine Nachkommen betreffen können, beschränken sich die Effekte auf das enthaltende Element. Zähler und Zitate sind auf das Element und seinen Inhalt begrenzt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Grenzen angezeigt. Wenn das enthaltende Feld außerhalb des Bildschirms ist, muss der Browser seine enthaltenen Elemente nicht zeichnen, da sie vollständig durch dieses Feld enthalten sind. Wenn ein Nachkomme die Grenzen des enthaltenen Elements überschreitet, wird dieser Nachkomme an der Überlauf-Klipprand des enthaltenen Elements abgeschnitten. Standardmäßig entspricht diese Kante der Padding-Box für nicht ersetzte Elemente.

## Beschreibung

Es gibt vier Typen von CSS-Einschließung: Größe, Layout, Stil und Malen, die am Container gesetzt werden. Die Eigenschaft ist eine durch Leerzeichen getrennte Liste von Teilmengen der fünf Standardwerte oder einer der beiden Kurzwerte. Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen. Der Hauptvorteil der Einschließung besteht darin, dass der Browser das DOM oder das Seitenlayout nicht so häufig neu rendern muss, was zu kleinen Leistungsvorteilen beim Rendern von statischen Seiten und zu größeren Leistungsvorteilen in dynamischeren Anwendungen führt.

Die Verwendung der `contain`-Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindert, dass interne Elemente Seiteneffekte außerhalb ihrer Begrenzungsbox haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erzeugt:
>
> 1. Einen neuen [Enthalten Block](/de/docs/Web/CSS/Guides/Display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).
> 3. Einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Malen-Einschließung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachkommen eines Elements außerhalb seiner Grenzen gezeichnet werden.

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

### Layout-Einschließung

Betrachten Sie das folgende Beispiel, das zeigt, wie sich Elemente mit und ohne angewandte Layout-Einschließung verhalten:

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

Die erste Karte hat Layout-Einschließung angewendet, und ihr Layout ist vom Rest der Seite isoliert. Diese Karte kann an anderen Stellen auf der Seite wiederverwendet werden, ohne dass das Layout der anderen Elemente neu berechnet werden muss. Wenn Floats die Grenzen der Karte überlappen, sind die anderen Elemente der Seite nicht betroffen. Wenn der Browser den Teilbaum des enthaltenen Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden. Darüber hinaus verwendet das fixierte Box die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben keine Einschließung. Der Layout-Kontext für das fixierte Box in der zweiten Karte ist das Root-Element, sodass das fixierte Box oben rechts auf der Seite positioniert wird. Ein Float überlappt die Bounding-Box und verursacht, dass die dritte Karte eine unerwartete Layoutverschiebung hat, die in der Positionierung des `<h2>`-Elements sichtbar ist. Wenn eine Neuberechnung stattfindet, ist sie nicht auf einen Container beschränkt. Dies beeinträchtigt die Leistung und stört das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Einschließung

Die Stil-Einschließung begrenzt [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) und [Zitate](/de/docs/Web/CSS/Reference/Properties/quotes) auf das enthaltene Element. Für CSS-Zähler sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element begrenzt, als ob das Element an der Wurzel des Dokuments wäre.

#### Einschließung und Zähler

Das folgende Beispiel betrachtet, wie Zähler funktionieren, wenn Stil-Einschließung angewandt wird:

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

Ohne Einschließung würde der Zähler für jedes Listenelement von 1 auf 5 inkrementiert. Stil-Einschließung bewirkt, dass die Eigenschaft {{cssxref("counter-increment")}} auf den Teilbaum des Elements begrenzt wird und der Zähler beginnt wieder bei 1:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Einschließung und Zitate

CSS-Zitate sind ähnlich betroffen, sodass die {{cssxref("content")}}-Werte in Bezug auf Zitate auf das Element begrenzt sind:

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

Aufgrund der Einschließung ignoriert das erste schließende Zitat das innere Span und verwendet stattdessen das schließende Zitat des äußeren Spans:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Einschließung](/de/docs/Web/CSS/Guides/Containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
