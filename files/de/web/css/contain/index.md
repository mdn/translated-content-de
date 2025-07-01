---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{CSSRef}}

Die **`contain`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, dass ein Element und seine Inhalte, soweit möglich, unabhängig vom Rest des Dokumentenbaums sind.
Durch Containment kann ein Abschnitt des DOM isoliert werden, was Leistungsverbesserungen ermöglicht, indem Berechnungen von Layout, Stil, Malen, Größe oder einer beliebigen Kombination auf einen DOM-Teilbaum statt auf die gesamte Seite beschränkt werden. Containment kann auch verwendet werden, um CSS-Counter und Zitate abzugrenzen.

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

Es gibt vier Arten von CSS-Containment: Größe, Layout, Stil und Malen, die auf den Container eingestellt werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste eines Untersets der fünf Standardwerte oder einer der beiden Kurzschreibwerte.
Änderungen der enthaltenen Eigenschaften innerhalb des Containers werden nicht außerhalb des enthaltenen Elements auf den Rest der Seite übertragen.
Der Hauptvorteil des Containments besteht darin, dass der Browser das DOM oder das Seiten-Layout nicht so häufig neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendering statischer Seiten und größeren Leistungsverbesserungen bei dynamischeren Anwendungen führt.

Die Verwendung der `contain` Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig voneinander sein sollen, da sie verhindern kann, dass innere Elemente außerhalb ihrer Begrenzungsbox Seiteneffekte haben.

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
- Eines oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einen der Kurzschreibwerte `strict` oder `content`

Die Schlüsselwörter haben die folgenden Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass Containment angewendet wird.
- `strict`
  - : Alle Containment-Regeln werden auf das Element angewendet. Dies ist gleichbedeutend mit `contain: size layout paint style`.
- `content`
  - : Alle Containment-Regeln außer `size` werden auf das Element angewendet. Dies ist gleichbedeutend mit `contain: layout paint style`.
- `size`
  - : Größen-Containment wird in beiden Richtungen, inline und block, auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größen-Containment wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements sein internes Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und seine Nachkommen betreffen können, entweichen die Effekte nicht dem enthaltenen Element. Zähler und Zitate sind auf das Element und seine Inhalte beschränkt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Grenzen angezeigt. Wenn der Containing-Box außerhalb des Bildschirms ist, muss der Browser seine enthaltenen Elemente nicht malen – diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig von dieser Box enthalten sind. Wenn ein Nachkomme die Grenzen des enthaltenen Elements überschreitet, wird dieser Nachkomme auf die Border-Box des enthaltenen Elements zugeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Paint-Containment

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

### Layout-Containment

Betrachten Sie das folgende Beispiel, das zeigt, wie sich Elemente mit und ohne angewandtes Layout-Containment verhalten:

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

Die erste Karte hat Layout-Containment, und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns um eine Neuberechnung des Layouts der anderen Elemente zu sorgen.
Wenn Floats die Kartengrenzen überlappen, werden Elemente auf dem Rest der Seite nicht betroffen.
Wenn der Browser den Teilbaum des enthaltenen Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden.
Außerdem verwendet das feste Kästchen die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben kein Containment.
Der Layout-Kontext für das feste Kästchen in der zweiten Karte ist das Wurzelelement, sodass das feste Kästchen in der oberen rechten Ecke der Seite positioniert ist.
Ein Float überlappt die Grenzen der zweiten Karte, was dazu führt, dass die dritte Karte eine unerwartete Layout-Verschiebung aufweist, die in der Positionierung des `<h2>` Elements sichtbar ist.
Wenn eine Neuberechnung erfolgt, ist diese nicht auf einen Container beschränkt.
Dies beeinflusst die Leistung und stört das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Style-Containment

Style-Containment grenzt [Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Zitate](/de/docs/Web/CSS/quotes) auf das enthaltene Element ein.
Für CSS-Counter sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element beschränkt, als ob das Element die Wurzel des Dokuments wäre.

#### Containment und Counter

Das folgende Beispiel zeigt, wie Counter funktionieren, wenn Style-Containment angewendet wird:

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

Ohne Containment würde der Counter von 1 bis 5 für jedes Listenelement inkrementieren.
Das Style-Containment führt dazu, dass die {{cssxref("counter-increment")}} Eigenschaft auf den Teilbaum des Elements beschränkt ist und der Counter wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Containment und Zitate

CSS-Zitate sind ähnlich betroffen, da die [`content`](/de/docs/Web/CSS/content) Werte in Bezug auf Zitate auf das Element beschränkt sind:

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
.open-quote::before {
  content: open-quote;
}

.close-quote::after {
  content: close-quote;
}
```

Wegen des Containments ignoriert das erste Schlusszeichen das innere Span und verwendet stattdessen das Schlusszeichen des äußeren Spans:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Containment](/de/docs/Web/CSS/CSS_containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
