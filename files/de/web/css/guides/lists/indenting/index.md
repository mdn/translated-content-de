---
title: Konsistente Listeneinrückung
short-title: Einrückung von Listen
slug: Web/CSS/Guides/Lists/Indenting
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Eine der häufigsten Stiländerungen, die bei Listen vorgenommen werden, ist eine Änderung des Einrückungsabstands - das heißt, wie weit die Listenelemente nach rechts verschoben werden. Dieser Artikel hilft Ihnen dabei, das Einrücken von Listenelementen so zu verstehen, dass die Listenelementmarkierungen sichtbar bleiben.

Um zu verstehen, warum dies der Fall ist, und vor allem, wie man das Problem insgesamt vermeiden kann, ist es notwendig, die Details des Listenaufbaus zu untersuchen.

## Erstellen einer Liste

### Eigenständiges Listenelement

Zuerst betrachten wir das reine Listenelement, das nicht in einer Liste von Elementen verschachtelt ist. Wenn Sie das HTML-{{htmlelement("li")}}-Element verwenden, setzt der Browser den {{cssxref("display")}}-Wert auf `list-item`. Ob Listenelemente, die nicht in einer Liste verschachtelt sind, eine Markierung (auch bekannt als "Bullet") erhalten, hängt vom Browser ab. Wir können diese Markierung mit {{cssxref("list-style-type", "list-style-type: none")}} entfernen.

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

Der gepunktete rote Rand stellt die äußeren Kanten des Inhaltsbereichs jedes Listenelements dar. An diesem Punkt haben die Listenelemente weder Innenabstand noch Rahmen.

### Verschachtelte Listenelemente

Nun umhüllen wir diese in einem Elternelement; in diesem Fall umhüllen wir sie in einer ungeordneten Liste (z. B. `<ul>`). Laut dem CSS-Boxmodell müssen die Boxen der Listenelemente innerhalb des Inhaltsbereichs des Elternelements angezeigt werden.

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

{{EmbedLiveSample("In einer Liste verschachtelte Listenelemente", "100%", 150)}}

Der gepunktete blaue Rand zeigt uns die Kanten des Inhaltsbereichs des `<ul>`-Elements. Diese Eltern kommen sowohl mit Rand als auch mit Innenabstand. Browser setzen die folgenden Standardstile für ungeordnete Listen:

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

### Standardposition der Bulletpoints

Nun fügen wir die Listenelementmarkierungen wieder ein. Da dies eine ungeordnete Liste ist, erben die Listenelemente `list-style-type: disc;` Browser-Stile, die gefüllte Kreis-"Bullets" sind, von ihrem `<ul>`-Elternelement.

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

Visuell befinden sich die Markierungen _außerhalb_ des Inhaltsbereichs des `<ul>`, aber das ist hier nicht das Wichtige. Wichtiger ist, dass die Markierungen außerhalb der "Hauptbox" der `<li>`-Elemente platziert werden, nicht des `<ul>`. Sie sind so etwas wie Anhängsel zu den Listenelementen, die außerhalb des Inhaltsbereichs des `<li>` hängen, aber immer noch an das `<li>` angehängt sind.

Deshalb werden in jedem modernen Browser Markierungen außerhalb jedes für ein `<li>`-Element festgelegten Rahmens platziert, wenn der Wert von {{cssxref("list-style-position")}} standardmäßig auf `outside` gesetzt ist oder explizit darauf eingestellt wird. Wenn wir es auf `inside` änderten, wurden die Markierungen innerhalb des `<li>`-Inhalts eingebracht, als wären sie eine Inline-Box, die am Anfang des `<li>` platziert ist.

## Standard-Einrückung

Wie oben erwähnt, bieten alle Browser dem `<ul>`-Eltern sowohl Rand als auch Innenabstand. Während sich die CSS der Benutzeragenten etwas unterscheiden, enthalten sie alle:

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

Alle Browser setzen standardmäßig {{cssxref("padding-inline-start")}} auf 40 Pixel für das `<ul>`-Element. In von links nach rechts laufenden Sprachen wie Englisch ist dies der linke _Innenabstand_. Jeder in den Autorenstilen festgelegte Innenabstand (also Ihr Stylesheet) hat Vorrang.

Wenn Sie explizit sein möchten, setzen Sie Folgendes in Ihren Stylesheets, um sicherzustellen, dass, sofern nicht anders überschrieben, die Listenelemente im Hauptinhaltsbereich Ihres Dokuments, der im {{htmlelement("main")}}-Abschnitt enthalten ist, ordnungsgemäß eingerückt sind:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Und schachteln Sie Ihre `<li>`-Elemente immer in einem `<ul>` oder `<ol>`.
