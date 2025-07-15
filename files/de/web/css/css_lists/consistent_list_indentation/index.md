---
title: Konsistente Listeneinrückung
short-title: Einrücken von Listen
slug: Web/CSS/CSS_lists/Consistent_list_indentation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Eine der häufigsten Stiländerungen bei Listen ist eine Änderung des Einrückungsabstands, das heißt, wie weit die Listenelemente nach rechts verschoben sind. Dieser Artikel hilft Ihnen zu verstehen, wie Listenelemente eingerückt werden, damit die Markierungen der Listenelemente sichtbar sind.

Um zu verstehen, warum das der Fall ist und, was noch wichtiger ist, wie man das Problem ganz vermeiden kann, muss man sich die Details des Listenaufbaus ansehen.

## Erstellen einer Liste

### Eigenständiges Listenelement

Zuerst betrachten wir das reine Listenelement, das nicht in einer Liste von Elementen verschachtelt ist. Beim Verwenden des HTML-{{htmlelement("li")}}-Elements setzt der Browser den {{cssxref("display")}}-Wert auf `list-item`. Ob Listenelemente, die nicht in einer Liste verschachtelt sind, eine Markierung (auch als "Aufzählungszeichen" bekannt) erhalten, hängt vom Browser ab. Wir können dieses Aufzählungszeichen mit {{cssxref("list-style-type", "list-style-type: none")}} entfernen.

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

{{EmbedLiveSample("Das eigenständige Listenelement", "100%", 200)}}

Diese gepunktete rote Umrandung stellt die äußeren Ränder des Inhaltsbereichs jedes Listenelements dar. Zu diesem Zeitpunkt haben die Listenelemente weder Padding noch Ränder.

### Verschachtelte Listenelemente

Nun umschließen wir diese in einem Elternelement; in diesem Fall umschließen wir sie in einer ungeordneten Liste (d.h. `<ul>`). Gemäß dem CSS-Boxmodell müssen die Boxen der Listenelemente im Inhaltsbereich des Elternelements angezeigt werden.

```css
ul {
  border: 1px dashed blue;
}
li {
  border: 1px dashed red;
  list-style-type: none;
}
```

```css hidden
body {
  width: 15em;
}
```

```html hidden
<ul>
  <li>A list item</li>
  <li>A list item</li>
  <li>A list item</li>
</ul>
```

{{EmbedLiveSample("Listenelemente, die in einer Liste verschachtelt sind", "100%", 150)}}

Die gepunktete blaue Umrandung zeigt uns die Ränder des Inhaltsbereichs des `<ul>`-Elements. Dieses Elternelement hat sowohl einen Rand als auch ein Padding. Browser setzen die folgenden Standardstile für ungeordnete Listen:

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

### Standard-Position der Aufzählungszeichen

Jetzt fügen wir die Markierungen der Listenelemente wieder hinzu. Da es sich um eine ungeordnete Liste handelt, erben die Listenelemente `list-style-type: disc;` Browser-Stile, bei denen es sich um gefüllte Kreis-"Aufzählungszeichen" handelt, von ihrem `<ul>`-Elternelement.

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

{{EmbedLiveSample("Erben von `list-style-type`", "100%", 220)}}

Optisch befinden sich die Markierungen _außerhalb_ des Inhaltsbereichs des `<ul>`, aber das ist hier nicht das Entscheidende. Wichtig ist, dass die Markierungen außerhalb der "Hauptbox" der `<li>`-Elemente platziert werden, nicht des `<ul>`. Sie sind eine Art Anhängsel der Listenelemente, die außerhalb des Inhaltsbereichs der `<li>` hängen, aber dennoch mit dem `<li>` verbunden sind.

Deshalb werden in jedem modernen Browser Markierungen außerhalb eines für ein `<li>`-Element festgelegten Rahmens platziert, wenn der Wert von {{cssxref("list-style-position")}} standardmäßig auf oder explizit auf `outside` gesetzt ist. Wenn wir es auf `inside` geändert haben, wurden die Markierungen in den Inhalt des `<li>` gebracht, als ob sie eine Inline-Box wären, die ganz am Anfang des `<li>` platziert ist.

## Standard-Einrückung

Wie oben erwähnt, bieten alle Browser dem `<ul>`-Elternelement sowohl Rand als auch Padding. Während sich die CSS der Benutzeragenten etwas unterscheiden, beinhalten sie alle:

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

Alle Browser setzen standardmäßig {{cssxref("padding-inline-start")}} auf 40 Pixel für das `<ul>`-Element. In von links nach rechts verlaufenden Sprachen, wie Englisch, ist dies das linke _padding_. Jegliches Padding, das in den Autorenstilblättern (also Ihrem Stylesheet) festgelegt ist, hat Vorrang.

Wenn Sie explizit sein möchten, setzen Sie Folgendes in Ihren Stilblättern, um sicherzustellen, dass die Listenelemente im Hauptinhalt Ihres Dokuments, das im {{htmlelement("main")}}-Abschnitt enthalten ist, ordnungsgemäß eingerückt sind, es sei denn, es wird anders überschrieben:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Und verschachteln Sie Ihre `<li>`-Elemente immer in einem `<ul>` oder `<ol>`.
