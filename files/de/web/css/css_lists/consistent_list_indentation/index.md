---
title: Konsistente Listeneinrückung
slug: Web/CSS/CSS_lists/Consistent_list_indentation
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Eine der häufigsten Stiländerungen an Listen besteht darin, den Abstand der Einrückung zu ändern – also, wie weit die Listenelemente nach rechts verschoben werden. Dieser Artikel hilft Ihnen zu verstehen, wie Sie Listenelemente einrücken, sodass die Listenelementmarkierungen sichtbar sind.

Um zu verstehen, warum das so ist und vor allem, wie man das Problem insgesamt vermeiden kann, ist es notwendig, die Details der Listenstruktur zu untersuchen.

## Eine Liste erstellen

### Das eigenständige Listenelement

Zuerst betrachten wir das reine Listenelement, das nicht in einer Liste von Elementen eingebettet ist. Beim Verwenden des HTML-Elements {{htmlelement("li")}} setzt der Browser den {{cssxref("display")}}-Wert auf `list-item`. Ob Listenelemente, die nicht in einer Liste eingebettet sind, eine Markierung (auch bekannt als "Bullet") erhalten, hängt vom Browser ab. Wir können dieses Bullet mit {{cssxref("list-style-type", "list-style-type: none")}} entfernen.

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

Dieser gepunktete rote Rand stellt die äußeren Kanten des Inhaltsbereichs jedes Listenelements dar. An diesem Punkt haben die Listenelemente weder Auffüllung noch Ränder.

### Listenelemente, die in einer Liste verschachtelt sind

Jetzt umschließen wir diese mit einem Elternelement; in diesem Fall umschließen wir sie mit einer ungeordneten Liste (z.B. `<ul>`). Laut dem CSS-Box-Modell müssen die Boxen der Listenelemente im Inhaltsbereich des Elternelements angezeigt werden.

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

Der gepunktete blaue Rand zeigt uns die Kanten des Inhaltsbereichs des `<ul>`-Elements. Dieses Elternelement kommt sowohl mit einem Rand als auch einer Auffüllung. Browser setzen folgende Standardstile bei ungeordneten Listen:

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

Jetzt fügen wir die Listenelementmarkierungen wieder hinzu. Da dies eine ungeordnete Liste ist, erben die Listenelemente die Browserstile `list-style-type: disc;`, welche gefüllte Kreis-"Bullets" sind, von ihrem `<ul>`-Elternteil.

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

Visuell sind die Markierungen _außerhalb_ des Inhaltsbereichs des `<ul>`, aber das ist hier nicht der wichtige Teil. Entscheidend ist, dass die Markierungen außerhalb der "Hauptbox" der `<li>`-Elemente platziert werden, nicht des `<ul>`. Sie sind sozusagen Anhängsel der Listenelemente, die außerhalb des Inhaltsbereichs des `<li>` hängen, aber immer noch mit dem `<li>` verbunden sind.

Deshalb werden in jedem modernen Browser Markierungen außerhalb eines für ein `<li>`-Element gesetzten Randes platziert, wenn der Wert von {{cssxref("list-style-position")}} standardmäßig auf `outside` oder explizit darauf gesetzt ist. Wenn wir es auf `inside` geändert haben, wurden die Markierungen in den Inhalt des `<li>` hineingebracht, als wären sie eine Inline-Box, die ganz am Anfang des `<li>` platziert wird.

## Standard-Einrückung

Wie oben erwähnt, bieten alle Browser dem `<ul>`-Elternteil sowohl einen Rand als auch eine Auffüllung. Während sich die CSS der Benutzeragenten etwas unterscheiden, beinhalten sie alle:

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

Alle Browser setzen {{cssxref("padding-inline-start")}} standardmäßig auf 40 Pixel für das `<ul>`-Element. In von links nach rechts verlaufenden Sprachen wie Englisch ist dies die linke _Auffüllung_. Jede im Autor-Stylesheet (das ist Ihr Stylesheet) festgelegte Auffüllung hat Vorrang.

Wenn Sie explizit sein möchten, setzen Sie das Folgende in Ihren Stylesheets, um sicherzustellen, dass die Listenelemente im Hauptinhaltsbereich Ihres Dokuments, enthalten im {{htmlelement("main")}}-Abschnitt, ordnungsgemäß eingerückt sind, es sei denn, es wird diesbezüglich etwas anderes überschrieben:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Und verschachteln Sie immer Ihre `<li>`-Elemente in einem `<ul>` oder `<ol>`.
