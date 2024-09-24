---
title: enthalten
slug: Web/CSS/contain
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Die **`contain`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt an, dass ein Element und seine Inhalte so weit wie möglich unabhängig vom Rest des Dokumentenbaums sind.
Die Eindämmung ermöglicht das Isolieren eines Unterabschnitts des DOM, was Leistungsverbesserungen bietet, indem Berechnungen von Layout, Stil, Rendering, Größe oder einer beliebigen Kombination auf einen DOM-Teilbaum anstatt die gesamte Seite beschränkt werden. Die Eindämmung kann auch verwendet werden, um CSS-Zähler und -Anführungszeichen zu begrenzen.

{{EmbedInteractiveExample("pages/css/contain.html")}}

Es gibt vier Arten der CSS-Eindämmung: Größe, Layout, Stil und Rendering, die auf dem Container gesetzt werden.
Die Eigenschaft ist eine durch Leerzeichen getrennte Liste eines Untersets der fünf Standardwerte oder einer der beiden Kurzschreibwerte.
Änderungen an den enthaltenen Eigenschaften innerhalb des Containers werden außerhalb des enthaltenen Elements nicht auf den Rest der Seite übertragen.
Der Hauptvorteil der Eindämmung ist, dass der Browser das DOM oder das Seitenlayout seltener neu rendern muss, was zu kleinen Leistungsverbesserungen beim Rendern statischer Seiten und zu größeren Leistungsverbesserungen in dynamischeren Anwendungen führt.

Die Verwendung der `contain` Eigenschaft ist nützlich auf Seiten mit Elementgruppen, die unabhängig sein sollen, da es verhindern kann, dass die internen Elemente außerhalb ihres Begrenzungsrahmens Nebeneffekte verursachen.

> [!NOTE]
> Die Verwendung der Werte `layout`, `paint`, `strict` oder `content` für diese Eigenschaft erzeugt:
>
> 1. Einen neuen [enthältenden Block](/de/docs/Web/CSS/Containing_block) (für Nachkommen, deren {{cssxref("position")}} Eigenschaft `absolute` oder `fixed` ist).
> 2. Einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
> 3. Einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

## Syntax

```css
/* Schlüsselwortwerte */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: inline-size;
contain: layout;
contain: style;
contain: paint;

/* Mehrere Schlüsselwörter */
contain: size paint;
contain: size layout paint;
contain: inline-size layout;

/* Globale Werte */
contain: inherit;
contain: initial;
contain: revert;
contain: revert-layer;
contain: unset;
```

### Werte

Die `contain` Eigenschaft kann einen der folgenden Werte haben:

- Das Schlüsselwort `none` **oder**
- Eines oder mehrere der durch Leerzeichen getrennten Schlüsselwörter `size` (oder `inline-size`), `layout`, `style`, und `paint` in beliebiger Reihenfolge **oder**
- Einen der Kurzschreibwerte `strict` oder `content`

Die Schlüsselwörter haben folgende Bedeutungen:

- `none`
  - : Das Element wird normal gerendert, ohne dass Eindämmung angewendet wird.
- `strict`
  - : Alle Eindämmungsregeln werden auf das Element angewendet. Dies entspricht `contain: size layout paint style`.
- `content`
  - : Alle Eindämmungsregeln außer `size` werden auf das Element angewendet. Dies entspricht `contain: layout paint style`.
- `size`
  - : Größeneindämmung wird auf das Element in sowohl Inline- als auch Blockrichtungen angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `inline-size` kombiniert werden.
- `inline-size`
  - : Inline-Größeneindämmung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen. Dieser Wert kann nicht mit `size` kombiniert werden.
- `layout`
  - : Das interne Layout des Elements ist vom Rest der Seite isoliert. Das bedeutet, dass nichts außerhalb des Elements sein internes Layout beeinflusst und umgekehrt.
- `style`
  - : Für Eigenschaften, die mehr als nur ein Element und seine Nachkommen betreffen können, überschreiten die Effekte das enthaltende Element nicht. Zähler und Anführungszeichen sind auf das Element und seine Inhalte begrenzt.
- `paint`
  - : Nachkommen des Elements werden nicht außerhalb seiner Grenzen angezeigt. Wenn das enthaltende Feld außerhalb des Bildschirms ist, muss der Browser seine enthaltenen Elemente nicht rendern — diese müssen ebenfalls außerhalb des Bildschirms sein, da sie vollständig von diesem Feld enthalten sind. Wenn ein Nachkomme die Grenzen des enthaltenden Elements überschreitet, wird dieser Nachkomme auf den Randrahmen des enthaltenden Elements zugeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rendering-Eindämmung

Das folgende Beispiel zeigt, wie `contain: paint` verwendet wird, um zu verhindern, dass die Nachkommen eines Elements außerhalb seiner Grenzen gerendert werden.

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
  <p>Dieser Text wird auf die Grenzen des Kastens beschnitten.</p>
</div>
<div>
  <p>Dieser Text wird nicht auf die Grenzen des Kastens beschnitten.</p>
</div>
```

{{EmbedLiveSample("Paint_containment", "100%", 280)}}

### Layouteindämmung

Betrachten Sie das folgende Beispiel, das zeigt, wie Elemente sich mit und ohne angewendeter Layouteindämmung verhalten:

```html
<div class="card" style="contain: layout;">
  <h2>Karte 1</h2>
  <div class="fixed"><p>Fester Kasten 1</p></div>
  <div class="float"><p>Schwebender Kasten 1</p></div>
</div>
<div class="card">
  <h2>Karte 2</h2>
  <div class="fixed"><p>Fester Kasten 2</p></div>
  <div class="float"><p>Schwebender Kasten 2</p></div>
</div>
<div class="card">
  <h2>Karte 3</h2>
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

Die erste Karte hat Layouteindämmung angewendet, und ihr Layout ist vom Rest der Seite isoliert.
Wir können diese Karte an anderen Stellen auf der Seite wiederverwenden, ohne uns um Layout-Neuberechnungen der anderen Elemente sorgen zu müssen.
Wenn schwebende Elemente die Grenzen der Karte überschreiten, sind die Elemente auf dem Rest der Seite nicht betroffen.
Wenn der Browser den Teilbaum des enthaltenen Elements neu berechnet, wird nur dieses Element neu berechnet. Nichts außerhalb des enthaltenen Elements muss neu berechnet werden.
Zusätzlich verwendet der feste Kasten die Karte als Layout-Container, um sich selbst zu positionieren.

Die zweite und dritte Karte haben keine Eindämmung.
Der Layout-Kontext für den festen Kasten in der zweiten Karte ist das Root-Element, sodass der feste Kasten in der oberen rechten Ecke der Seite positioniert ist.
Ein schwebendes Element überlappt die Grenzen der zweiten Karte und verursacht, dass die dritte Karte eine unerwartete Layout-Verschiebung aufweist, die in der Positionierung des `<h2>` Elements sichtbar ist.
Wenn die Neuberechnung erfolgt, ist sie nicht auf einen Container beschränkt.
Dies beeinträchtigt die Leistung und stört das restliche Seitenlayout.

{{EmbedLiveSample("Layout_containment", "100%", 350)}}

### Stileindämmung

Stileindämmung begrenzt [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und [Anführungszeichen](/de/docs/Web/CSS/quotes) auf das enthaltene Element.
Für CSS-Zähler sind die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} auf das Element begrenzt, als ob das Element die Wurzel des Dokuments wäre.

#### Eindämmung und Zähler

Das untenstehende Beispiel zeigt, wie Zähler arbeiten, wenn Stileindämmung angewendet wird:

```html
<ul>
  <li>Element A</li>
  <li>Element B</li>
  <li class="container">Element C</li>
  <li>Element D</li>
  <li>Element E</li>
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

Ohne Eindämmung würde der Zähler für jedes Listenelement von 1 bis 5 inkrementiert.
Stileindämmung bewirkt, dass die {{cssxref("counter-increment")}} Eigenschaft auf den Teilbaum des Elements begrenzt ist und der Zähler beginnt wieder bei 1:

{{EmbedLiveSample('Containment_and_counters', '100%', 140)}}

#### Eindämmung und Anführungszeichen

CSS-Anführungszeichen sind ebenfalls betroffen, indem die [`content`](/de/docs/Web/CSS/content) Werte, die sich auf Anführungszeichen beziehen, auf das Element begrenzt sind:

```html
<!-- Mit Stileindämmung -->
<span class="open-quote">
  outer
  <span style="contain: style;">
    <span class="open-quote"> inner </span>
  </span>
</span>
<span class="close-quote"> close </span>
<br />
<!-- Ohne Eindämmung -->
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

Aufgrund der Eindämmung ignoriert das erste schließende Anführungszeichen den inneren Span und verwendet stattdessen das schließende Anführungszeichen des äußeren Span:

{{EmbedLiveSample('Containment_and_quotes', '100%', 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment)
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- CSS {{cssxref("content-visibility")}} Eigenschaft
- CSS {{cssxref("position")}} Eigenschaft
