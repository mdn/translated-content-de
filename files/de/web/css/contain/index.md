---
title: contain
slug: Web/CSS/contain
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`contain`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) gibt an, dass ein Element und dessen Inhalt so weit wie möglich unabhängig vom restlichen Dokumentenbaum sind.  
Eingrenzung ermöglicht die Isolierung eines Abschnitts des DOMs und bietet Leistungsverbesserungen, indem Berechnungen für Layout, Stil, Malen, Größe oder eine Kombination nur auf einen DOM-Teilbaum beschränkt werden, anstatt auf die gesamte Seite. Eingrenzung kann außerdem verwendet werden, um CSS-Zähler und Anführungszeichen zu begrenzen.

{{EmbedInteractiveExample("pages/css/contain.html")}}

Es gibt vier Arten der CSS-Eingrenzung: Größe, Layout, Stil und Malen, die auf dem Container festgelegt werden können. Die Eigenschaft ist eine durch Leerzeichen getrennte Liste einer Untermenge der fünf Standardwerte oder einer der zwei Kurzschreibweisen. Änderungen an den eingeschlossenen Eigenschaften innerhalb des Containers werden nicht außerhalb des eingeschlossenen Elements auf den Rest der Seite übertragen. Der Hauptvorteil der Eingrenzung besteht darin, dass der Browser den DOM oder das Seitenlayout weniger häufig neu rendern muss, was zu kleinen Leistungssteigerungen bei statischen Seiten und größeren Vorteilen in dynamischeren Anwendungen führt.

Die Verwendung der `contain`-Eigenschaft ist nützlich auf Seiten mit Gruppen von Elementen, die unabhängig sein sollen, da dies verhindert, dass interne Elemente Auswirkungen außerhalb ihrer Begrenzungsbox haben.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erstellt:
>
> 1. Einen neuen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) (für die Nachkommen, deren {{cssxref("position")}}-Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stacking Context (Stapelkontext)](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
> 3. Einen neuen [Block Formatting Context (Block-Formatierungs-Kontext)](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

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

Die `contain`-Eigenschaft kann die folgenden Werte haben:

- Das Schlüsselwort `none` **oder**
- Eines oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style` und `paint` in beliebiger Reihenfolge **oder**
- Einer der Kurzschreibwerte `strict` oder `content`

Die Schlüsselwörter haben die folgenden Bedeutungen:

- `none`
  - : Das Element wird normal dargestellt, ohne dass eine Eingrenzung erfolgt.
- `strict`
  - : Alle Eingrenzungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Eingrenzungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größeneingrenzung wird sowohl in Inline- als auch in Blockrichtung auf das Element angewandt. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größeneingrenzung wird auf das Element angewandt. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Dies bedeutet, dass nichts außerhalb des Elements sein internes Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur das Element und seine Nachkommen beeinflussen können, entweichen die Effekte nicht aus dem Eingrenzungselement. Zähler und Anführungszeichen sind auf das Element und seinen Inhalt beschränkt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb der Grenzen des Elements angezeigt. Befindet sich der begrenzende Kasten außerhalb des sichtbaren Bereichs, muss der Browser dessen enthaltene Elemente nicht rendern – diese befinden sich ebenfalls außerhalb des sichtbaren Bereichs, da sie vollständig durch diesen Kasten eingeschlossen werden. Überschreitet ein Nachkomme die Grenzen des eingeschlossenen Elements, wird dieser Nachkomme an den Rand der Begrenzungsbox des Elements abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Malereingrenzung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachkommen eines Elements außerhalb seiner Grenzen gezeichnet werden.

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

### Layouteingrenzung

Betrachten Sie folgendes Beispiel, das zeigt, wie sich Elemente mit und ohne Layouteingrenzung verhalten:

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

Die erste Karte hat Layouteingrenzung angewendet, und ihr Layout ist vom Rest der Seite isoliert.  
Wir können diese Karte an anderen Stellen der Seite wiederverwenden, ohne uns über Layout-Neuberechnungen anderer Elemente Sorgen machen zu müssen.  
Falls Floats die Kartengrenzen überlappen, werden Elemente im Rest der Seite nicht beeinflusst.  
Wenn der Browser das Subtree-Layout des eingeschlossenen Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des eingeschlossenen Elements muss neu berechnet werden.  
Darüber hinaus verwendet das feste Kästchen die Karte als Layout-Container, um sich zu positionieren.

Die zweite und dritte Karte haben keine Eingrenzung.  
Der Layoutkontext für das feste Kästchen in der zweiten Karte ist das Root-Element, daher wird das feste Kästchen in der oberen rechten Ecke der Seite positioniert.  
Ein Float überlappt die Grenzen der zweiten Karte, was dazu führt, dass die dritte Karte eine unerwartete Layoutverschiebung aufweist, die sich im Positionieren des `<h2>`-Elements zeigt.  
Wenn eine Neuberechnung erfolgt, ist diese nicht auf einen Container beschränkt.  
Dies beeinträchtigt die Leistung und stört das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stileingrenzung

Stileingrenzung begrenzt [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Anführungszeichen](/de/docs/Web/CSS/quotes) auf das eingeschlossene Element.  
Für CSS-Zähler werden die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} so eingeschränkt, als befände sich das Element an der Wurzel des Dokuments.

#### Eingrenzung und Zähler

Das folgende Beispiel zeigt, wie Zähler funktionieren, wenn Stileingrenzung angewendet wird:

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

Ohne Eingrenzung würde der Zähler für jedes Listenelement von 1 bis 5 hochzählen.  
Stileingrenzung bewirkt, dass die {{cssxref("counter-increment")}}-Eigenschaft auf den Teilbaum des Elements beschränkt wird und der Zähler erneut bei 1 beginnt:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Eingrenzung und Anführungszeichen

CSS-Anführungszeichen werden ähnlich beeinflusst, indem die [`content`](/de/docs/Web/CSS/content)-Werte in Bezug auf Anführungszeichen auf das Element begrenzt werden:

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

Aufgrund der Eingrenzung ignoriert das erste schließende Anführungszeichen das innere `<span>` und verwendet stattdessen das abschließende Anführungszeichen des äußeren `<span>`:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Eingrenzung](/de/docs/Web/CSS/CSS_containment)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
- CSS-{{cssxref("position")}}-Eigenschaft
