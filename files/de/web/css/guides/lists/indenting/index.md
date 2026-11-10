---
title: Einheitliche Einrückung von Listen
short-title: Listen einrücken
slug: Web/CSS/Guides/Lists/Indenting
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Eine der häufigsten Stiländerungen an Listen betrifft die Einrückung – also wie weit die Listeneinträge nach rechts verschoben werden. Dieser Artikel hilft Ihnen, Listeneinträge so einzurücken, dass ihre Markierungen sichtbar bleiben.

Um zu verstehen, warum das wichtig ist und wie Sie Probleme dabei vermeiden, lohnt sich ein genauer Blick auf den Aufbau von Listen.

## Eine Liste erstellen

### Eigenständiger Listeneintrag

Betrachten wir zunächst einen einzelnen Listeneintrag, der nicht in eine Liste eingebettet ist. Wenn Sie das HTML-Element {{htmlelement("li")}} verwenden, setzt der Browser den Wert von {{cssxref("display")}} auf `list-item`. Ob Listeneinträge außerhalb einer Liste eine Markierung erhalten, hängt vom Browser ab. Mit {{cssxref("list-style-type", "list-style-type: none")}} können Sie diese Markierung entfernen.

```css
li {
  border: 1px dashed red;
}
li:nth-of-type(n + 4) {
  list-style-type: none;
}
```

```css hidden
li {
  width: 15em;
}
```

```html hidden
<p>Default bullets depend on the browser:</p>
<li>A list item</li>
<li>A list item</li>
<li>A list item</li>
<p>These list items have their bullets removed:</p>
<li>A list item</li>
<li>A list item</li>
<li>A list item</li>
```

{{EmbedLiveSample("stand-alone_list_item", "100%", 200)}}

Der gepunktete rote Rahmen zeigt die äußeren Ränder des Inhaltsbereichs jedes Listeneintrags. Bislang haben die Listeneinträge weder Innenabstände noch Rahmen.

### Verschachtelte Listeneinträge

Nun umschließen wir die Einträge mit einem übergeordneten Element, in diesem Fall einer ungeordneten Liste (`<ul>`). Nach dem CSS-Box-Modell müssen die Boxen der Listeneinträge innerhalb des Inhaltsbereichs des übergeordneten Elements dargestellt werden.

```css live-sample___nested-list-items
ul {
  border: 1px dashed blue;
}
li {
  border: 1px dashed red;
  list-style-type: none;
}
```

```css hidden live-sample___nested-list-items
body {
  width: 15em;
}
```

```html hidden live-sample___nested-list-items
<ul>
  <li>A list item</li>
  <li>A list item</li>
  <li>A list item</li>
</ul>
```

{{EmbedLiveSample("nested-list-items", "100%", 150)}}

Der gepunktete blaue Rahmen zeigt die Ränder des Inhaltsbereichs des `<ul>`-Elements. Dieses übergeordnete Element hat sowohl Außen- als auch Innenabstände. Browser legen für ungeordnete Listen standardmäßig folgende Stile fest:

```css
ul {
  /* user-agent styles */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
```

### Standardposition der Markierungen

Nun blenden wir die Markierungen der Listeneinträge wieder ein. Da es sich um eine ungeordnete Liste handelt, übernehmen die Listeneinträge von ihrem übergeordneten `<ul>`-Element den Browserstil `list-style-type: disc;`. Dadurch erhalten sie ausgefüllte kreisförmige Markierungen.

```css
li {
  border: 1px dashed red;
}
ul {
  border: 1px dotted blue;
}
ul:last-of-type {
  list-style-position: inside;
}
```

```css hidden
ul {
  width: 15em;
}
```

```html hidden
<p>These default to <code>list-style-position: outside</code>.</p>
<ul>
  <li>A list item</li>
  <li>A list item</li>
  <li>A list item</li>
</ul>
<p>These have <code>list-style-position: inside</code> set.</p>
<ul>
  <li>A list item</li>
  <li>A list item</li>
  <li>A list item</li>
</ul>
```

{{EmbedLiveSample("default_bullet_position", "100%", 220)}}

Optisch liegen die Markierungen _außerhalb_ des Inhaltsbereichs von `<ul>`. Entscheidend ist hier aber, dass sie außerhalb der „Hauptbox“ der `<li>`-Elemente liegen, nicht außerhalb der von `<ul>`. Sie sind gewissermaßen Anhänge der Listeneinträge: Sie befinden sich außerhalb des Inhaltsbereichs von `<li>`, gehören aber weiterhin zu diesem Element.

Deshalb erscheinen die Markierungen in jedem modernen Browser außerhalb eines Rahmens, der für ein `<li>`-Element festgelegt wurde, wenn {{cssxref("list-style-position")}} den Standardwert `outside` hat oder ausdrücklich darauf gesetzt ist. Ändern wir den Wert zu `inside`, werden die Markierungen innerhalb des Inhaltsbereichs von `<li>` platziert – als wären sie eine Inline-Box ganz am Anfang des `<li>`-Elements.

## Standardeinrückung

Wie oben erwähnt, geben alle Browser dem übergeordneten `<ul>`-Element sowohl Außen- als auch Innenabstände. Die CSS-Standardeinstellungen der Browser unterscheiden sich zwar etwas, enthalten aber alle Folgendes:

```css
ul,
ol {
  /* user-agent styles */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
ol {
  list-style-type: decimal;
}
li {
  display: list-item;
  text-align: match-parent;
}
::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
}
```

Alle Browser setzen {{cssxref("padding-inline-start")}} für das `<ul>`-Element standardmäßig auf 40 Pixel. In Sprachen mit Schreibrichtung von links nach rechts, etwa Englisch, ist dies der linke _Innenabstand_. Innenabstände, die in den Stylesheets der Website festgelegt werden, haben Vorrang.

Wenn Sie die Einrückung ausdrücklich festlegen möchten, fügen Sie Folgendes zu Ihren Stylesheets hinzu. So stellen Sie sicher, dass Listeneinträge im Hauptinhaltsbereich Ihres Dokuments innerhalb des Abschnitts {{htmlelement("main")}} korrekt eingerückt sind, sofern keine andere Regel Vorrang hat:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Verschachteln Sie Ihre `<li>`-Elemente außerdem immer in einem `<ul>`- oder `<ol>`-Element.
