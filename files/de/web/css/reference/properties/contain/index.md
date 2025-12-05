---
title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`contain`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, dass ein Element und seine Inhalte so weit wie möglich unabhängig vom Rest des Dokumentbaums sind. Die Isolierung ermöglicht das Abkapseln eines Abschnitts des DOMs, was Leistungsverbesserungen bietet, indem Berechnungen von Layout, Stil, Malen, Größe oder einer Kombination davon auf einen DOM-Teilbaum und nicht auf die gesamte Seite beschränkt werden. Die Isolierung kann auch verwendet werden, um CSS-Zähler und Anführungszeichen zu begrenzen.

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
- Eines oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einen der Kurzschriftwerte `strict` oder `content`

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass Isolierung angewendet wird.
- `strict`
  - : Alle Isolierungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Isolierungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größenisolation wird auf das Element sowohl in der Inline- als auch Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die untergeordneten Elemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größenisolation wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die untergeordneten Elemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Dies bedeutet, dass nichts außerhalb des Elements dessen internes Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und dessen Nachkommen beeinflussen können, entweichen die Effekte nicht aus dem umgebenden Element. Zähler und Anführungszeichen sind auf das Element und seine Inhalte begrenzt.
- `paint`
  - : Nachkommen des Elements werden außerhalb seiner Grenzen nicht angezeigt. Wenn das umgebende Feld nicht auf dem Bildschirm ist, muss der Browser seine enthaltenen Elemente nicht malen — diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig von diesem Feld eingeschlossen sind. Wenn ein Nachkomme die Grenzen des umgebenden Elements überschreitet, wird der Nachkomme auf die Begrenzung des umgebenden Elements abgeschnitten.

## Beschreibung

Es gibt vier Arten der CSS-Isolierung: Größe, Layout, Stil und Malen, die auf dem Container gesetzt sind. Die Eigenschaft ist eine durch Leerzeichen getrennte Liste von einem Teil der fünf Standardwerte oder einem der beiden Kurzschriftwerte. Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen. Der Hauptvorteil der Isolierung besteht darin, dass der Browser das DOM oder das Seitenlayout nicht so oft neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain` Eigenschaft ist auf Seiten mit Gruppen von Elementen hilfreich, die unabhängig sein sollen, da sie verhindert, dass die Interna der Elemente Effekte außerhalb ihrer Begrenzungsrahmen haben.

> [!NOTE]
> Die Verwendung von `layout`, `paint`, `strict` oder `content` Werten für diese Eigenschaft erzeugt:
>
> 1. Einen neuen [containing block](/de/docs/Web/CSS/Guides/Display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}} Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [stapelnden Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).
> 3. Einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mal-Isolierung

Das folgende Beispiel zeigt, wie Sie `contain: paint` verwenden, um zu verhindern, dass Nachkommen eines Elements außerhalb seiner Grenzen gemalt werden.

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

### Layout-Isolierung

Betrachten Sie das folgende Beispiel, das zeigt, wie Elemente sich mit und ohne Layout-Isolierung verhalten:

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

Die erste Karte hat Layout-Isolierung und ihr Layout ist vom Rest der Seite isoliert. Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns über eine erneute Layoutberechnung der anderen Elemente Sorgen machen zu müssen. Wenn Floats die Kartenränder überlappen, werden Elemente auf dem Rest der Seite nicht beeinflusst. Wenn der Browser den Teilbaum des enthaltenen Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden. Zusätzlich verwendet das feststehende Feld die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben keine Isolierung. Der Layout-Kontext für das feste Feld in der zweiten Karte ist das Root-Element, sodass das feste Feld in der oberen rechten Ecke der Seite positioniert ist. Ein Float überlappt die Grenzen der zweiten Karte, was dazu führt, dass die dritte Karte eine unerwartete Layout-Verschiebung hat, die in der Positionierung des `<h2>` Elements sichtbar ist. Bei Neuberechnung ist sie nicht auf einen Container beschränkt. Dies beeinträchtigt die Leistung und stört das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Isolierung

Stil-Isolierung begrenzt [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) und [Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes) auf das enthaltene Element. Für CSS-Zähler werden die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element beschränkt, als ob das Element an der Wurzel des Dokuments steht.

#### Isolierung und Zähler

Das folgende Beispiel betrachtet, wie Zähler funktionieren, wenn Stil-Isolierung angewendet wird:

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

Ohne Isolierung würde der Zähler für jedes Listenelement von 1 bis 5 inkrementiert. Stil-Isolierung bewirkt, dass die Eigenschaft {{cssxref("counter-increment")}} auf den Teilbaum des Elements begrenzt ist und der Zähler wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Isolierung und Anführungszeichen

CSS Anführungszeichen sind ähnlich betroffen, da die {{cssxref("content")}} Werte in Bezug auf Anführungszeichen auf das Element beschränkt sind:

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

Aufgrund der Isolierung ignoriert das erste schließende Anführungszeichen den inneren span und verwendet stattdessen das schließende Anführungszeichen des äußeren span:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Isolierung](/de/docs/Web/CSS/Guides/Containment)
- [CSS Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
