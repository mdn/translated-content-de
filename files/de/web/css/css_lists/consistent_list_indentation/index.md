---
title: Konsequente Listeneinrückung
slug: Web/CSS/CSS_lists/Consistent_list_indentation
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Eine der häufigsten Stiländerungen bei Listen ist eine Änderung des Einrückungsabstands, das heißt, wie weit die Listenelemente nach rechts verschoben werden. Dieser Artikel hilft Ihnen zu verstehen, wie Sie Listenelemente einrücken, sodass die Listenmarkierungen sichtbar sind.

Um zu verstehen, warum das so ist, und vor allem, wie man das Problem insgesamt vermeidet, ist es notwendig, die Details der Listenkonstruktion zu untersuchen.

## Eine Liste erstellen

### Das eigenständige Listenelement

Zuerst betrachten wir das reine Listenelement, das nicht in einer Liste von Elementen verschachtelt ist. Beim Verwenden des HTML-Elements `<li>` setzt der Browser den `display`-Wert auf `list-item`. Ob Listenelemente, die nicht in einer Liste verschachtelt sind, eine Markierung (auch als „Bullet“ bekannt) erhalten, hängt vom Browser ab. Wir können dieses Bullet mit `list-style-type: none` entfernen.

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

Die gestrichelte rote Umrandung stellt die äußeren Ränder des Inhaltsbereichs jedes Listenelements dar. An diesem Punkt haben die Listenelemente weder Padding noch Ränder.

### Listenelemente in einer Liste verschachtelt

Nun umschließen wir diese mit einem übergeordneten Element; in diesem Fall umschließen wir sie mit einer ungeordneten Liste (d.h. `<ul>`). Laut dem CSS-Boxmodell müssen die Boxen der Listenelemente im Inhaltsbereich des übergeordneten Elements angezeigt werden.

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

{{EmbedLiveSample("Listenelemente in einer Liste verschachtelt", "100%", 150)}}

Die gestrichelte blaue Umrandung zeigt uns die Ränder des Inhaltsbereichs des `<ul>`-Elements. Dieses übergeordnete Element kommt sowohl mit Rand als auch mit Auffüllung. Browser setzen die folgenden Standardstile für ungeordnete Listen:

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

### Standardposition der Bullets

Jetzt fügen wir die Listenmarkierungen wieder hinzu. Da es sich um eine ungeordnete Liste handelt, erben die Listenelemente die Browserstile `list-style-type: disc;`, welche gefüllte Kreis-"Bullets" sind, von ihrem `<ul>`-Übergeordneten.

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

{{EmbedLiveSample("Vererbung von `list-style-type`", "100%", 220)}}

Visuell befinden sich die Markierungen _außerhalb_ des Inhaltsbereichs des `<ul>`, aber das ist hier nicht der entscheidende Punkt. Wichtig ist, dass die Markierungen außerhalb der "Hauptbox" der `<li>`-Elemente platziert sind, nicht des `<ul>`. Sie sind gewissermaßen Anhängsel der Listenelemente, die außerhalb des Inhaltsbereichs des `<li>` hängen, aber dennoch mit dem `<li>` verbunden sind.

Deshalb werden in allen modernen Browsern Markierungen außerhalb jeder Grenze angezeigt, die für ein `<li>`-Element festgelegt ist, wenn der Wert von `list-style-position` standardmäßig oder explizit auf `outside` gesetzt ist. Als wir ihn auf `inside` änderten, wurden die Markierungen in den Inhalt des `<li>` hineingebracht, als wären sie eine Inline-Box, die ganz am Anfang des `<li>` platziert ist.

## Standardmäßige Einrückung

Wie oben erwähnt, bieten alle Browser der `<ul>`-Elternelement sowohl Rand als auch Auffüllung. Während sich die CSS der Benutzeragenten etwas unterscheiden, beinhalten sie alle:

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

Alle Browser setzen `padding-inline-start` standardmäßig auf 40 Pixel für das `<ul>`-Element. In links-nach-rechts-Sprachen, wie Englisch, ist dies das linke _Padding_. Jedes Padding, das in den Autoren-Stylesheets (das ist Ihr Stylesheet) festgelegt ist, hat Vorrang.

Wenn Sie deutlich werden möchten, setzen Sie das Folgende in Ihren Stylesheets, um sicherzustellen, dass, sofern nicht anderweitig überschrieben, die Listenelemente im Hauptinhaltsbereich Ihres Dokuments, das im `<main>`-Abschnitt enthalten ist, korrekt eingezogen sind:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Und verschachteln Sie immer Ihre `<li>`-Elemente in einem `<ul>` oder `<ol>`.
