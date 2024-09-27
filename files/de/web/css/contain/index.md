---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Die **`contain`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, dass ein Element und dessen Inhalt so weit wie möglich unabhängig vom Rest des Dokumentbaums sind.
Die Kapselung ermöglicht es, einen Abschnitt des DOM zu isolieren und bietet Leistungsverbesserungen, indem Berechnungen von Layout, Stil, Darstellung, Größe oder einer Kombination davon auf einen DOM-Teilbaum und nicht auf die gesamte Seite beschränkt werden. Die Kapselung kann auch verwendet werden, um CSS-Zähler und Zitate zu begrenzen.

{{EmbedInteractiveExample("pages/css/contain.html")}}

Es gibt vier Arten von CSS-Kapselung: Größe, Layout, Stil und Darstellung, die auf dem Container festgelegt werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste einer Teilmenge der fünf Standardwerte oder einer der beiden Kurzformwerte.
Änderungen an den eingeschlossenen Eigenschaften innerhalb des Containers werden nicht außerhalb des eingeschlossenen Elements auf den Rest der Seite übertragen.
Der Hauptvorteil der Kapselung besteht darin, dass der Browser das DOM oder das Seitenlayout nicht so oft neu rendern muss, was zu kleinen Leistungssteigerungen beim Rendern statischer Seiten und größeren Leistungssteigerungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain`-Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da sie verhindern kann, dass die internen Elemente außerhalb ihrer Begrenzungsbox Seiteneffekte haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft bewirkt:
>
> 1. Einen neuen [Containing block](/de/docs/Web/CSS/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stacking context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
> 3. Einen neuen [Block formatting context](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

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
- Einer der Kurzformwerte `strict` oder `content`

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass eine Kapselung angewendet wird.
- `strict`
  - : Alle Kapselungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Kapselungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Die Größenkapselung wird auf das Element in sowohl der Inline- als auch der Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Die Inline-Größenkapselung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements sein internes Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und dessen Nachkommen beeinflussen können, entweichen die Effekte nicht aus dem Kapselungselement. Zähler und Zitate sind auf das Element und seinen Inhalt begrenzt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Grenzen angezeigt. Wenn die Kapselungsbox außerhalb des Bildschirms ist, muss der Browser ihre eingeschlossenen Elemente nicht darstellen – diese müssen auch außerhalb des Bildschirms sein, da sie vollständig von dieser Box eingeschlossen sind. Wenn ein Nachkomme die Grenzen des kapselnden Elements überschreitet, wird dieser Nachkomme auf die Rahmenbox des kapselnden Elements zugeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Darstellungskapselung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass Nachkommen eines Elements außerhalb seiner Grenzen dargestellt werden.

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

### Layoutkapselung

Betrachten Sie das folgende Beispiel, das zeigt, wie sich Elemente mit und ohne angewandte Layoutkapselung verhalten:

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

Die erste Karte hat Layoutkapselung angewendet, und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns um die Neuberechnung des Layouts der anderen Elemente sorgen zu müssen.
Wenn Floats die Kartenbegrenzungen überlappen, werden Elemente auf der restlichen Seite nicht beeinflusst.
Wenn der Browser den Teilbaum des kapselnden Elements neu berechnet, wird nur das Element neu berechnet. Nichts außerhalb des eingeschlossenen Elements muss neu berechnet werden.
Zusätzlich verwendet das feste Feld die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben keine Kapselung.
Der Layout-Kontext für das feste Feld in der zweiten Karte ist das Wurzelelement, sodass das feste Feld in der oberen rechten Ecke der Seite positioniert wird.
Ein Float überlappt die Begrenzungen der zweiten Karte und führt dazu, dass die dritte Karte eine unerwartete Layoutverschiebung hat, die in der Positionierung des `<h2>`-Elements sichtbar ist.
Wenn eine Neuberechnung erfolgt, ist sie nicht auf einen Container beschränkt.
Dies beeinträchtigt die Leistung und stört das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stil-Kapselung

Stil-Kapselung begrenzt [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Zitate](/de/docs/Web/CSS/quotes) auf das eingeschlossene Element.
Für CSS-Zähler sind die {{cssxref("counter-increment")}}- und {{cssxref("counter-set")}}-Eigenschaften auf das Element begrenzt, als ob das Element die Wurzel des Dokuments wäre.

#### Kapselung und Zähler

Das folgende Beispiel zeigt, wie Zähler funktionieren, wenn Stil-Kapselung angewendet wird:

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

Ohne Kapselung würde der Zähler bei jedem Listenelement von 1 auf 5 inkrementieren.
Stil-Kapselung bewirkt, dass die {{cssxref("counter-increment")}}-Eigenschaft auf den Teilbaum des Elements begrenzt ist und der Zähler wieder bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Kapselung und Zitate

CSS-Zitate sind ähnlich betroffen, wobei die [`content`](/de/docs/Web/CSS/content)-Werte, die sich auf Zitate beziehen, auf das Element begrenzt sind:

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

Aufgrund der Kapselung ignoriert das erste schließende Zitat das innere span und verwendet stattdessen das schließende Zitat des äußeren span:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Kapselung](/de/docs/Web/CSS/CSS_containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}}-Eigenschaft
- CSS {{cssxref("position")}}-Eigenschaft
