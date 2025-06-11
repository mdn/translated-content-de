---
title: Konsistente Listen-Einrückung
short-title: Listen einrücken
slug: Web/CSS/CSS_lists/Consistent_list_indentation
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Eine der häufigsten Stiländerungen, die an Listen vorgenommen werden, ist eine Änderung der Einrückung — das heißt, wie weit die Listenelemente nach rechts verschoben werden. Dieser Artikel hilft Ihnen zu verstehen, wie Sie Listenelemente einrücken, damit die Listenelement-Markierungen sichtbar sind.

Um zu verstehen, warum dies der Fall ist und wichtiger noch, wie man das Problem vollständig vermeiden kann, ist es notwendig, die Details des Listenaufbaus zu untersuchen.

## Erstellen einer Liste

### Eigenständige Listenelemente

Zuerst betrachten wir das reine Listenelement, das nicht in einer Liste von Elementen verschachtelt ist. Wenn das HTML-{{htmlelement("li")}}-Element verwendet wird, stellt der Browser den {{cssxref("display")}}-Wert auf `list-item` ein. Ob Listenelemente, die nicht in einer Liste verschachtelt sind, eine Markierung (auch bekannt als "Punkt") erhalten, hängt vom Browser ab. Wir können diesen Punkt mit {{cssxref("list-style-type", "list-style-type: none")}} entfernen.

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

Die gepunktete rote Linie stellt die äußeren Ränder des Inhaltsbereichs jedes Listenelements dar. Zu diesem Zeitpunkt haben die Listenelemente weder Auffüllung noch Ränder.

### Verschachtelte Listenelemente

Nun wickeln wir diese in ein übergeordnetes Element ein; in diesem Fall wickeln wir sie in eine ungeordnete Liste (d.h. `<ul>`) ein. Gemäß dem CSS-Box-Modell müssen die Boxen der Listenelemente innerhalb des Inhaltsbereichs des übergeordneten Elements angezeigt werden.

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

Die gepunktete blaue Linie zeigt uns die Ränder des Inhaltsbereichs des `<ul>`-Elements. Dieses übergeordnete Element kommt mit sowohl Rand als auch Auffüllung. Browser setzen die folgenden Standardstile für ungeordnete Listen:

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

### Standardposition der Punkte

Nun setzen wir die Listenelement-Markierungen wieder ein. Da es sich um eine ungeordnete Liste handelt, übernehmen die Listenelemente `list-style-type: disc;` Browserstile, die gefüllte Kreis-"Punkte" sind, von ihrem `<ul>`-Elternteil.

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

Visuell befinden sich die Markierungen _außerhalb_ des Inhaltsbereichs des `<ul>`, aber das ist hier nicht das Wesentliche. Wichtig ist, dass die Markierungen außerhalb der „Hauptbox“ der `<li>`-Elemente platziert sind, nicht des `<ul>`. Sie sind wie Anhängsel der Listenelemente, die außerhalb des Inhaltsbereichs der `<li>` hängen, aber dennoch mit den `<li>` verbunden sind.

Deshalb werden in jedem modernen Browser die Markierungen außerhalb eines für ein `<li>`-Element festgelegten Randes platziert, wenn der Wert von {{cssxref("list-style-position")}} standardmäßig auf `outside` gesetzt ist oder explizit darauf gesetzt wird. Wenn wir es auf `inside` ändern, werden die Markierungen in den Inhalt des `<li>`s geholt, als wären sie eine Inline-Box, die am Anfang des `<li>` platziert ist.

## Standard-Einrückung

Wie oben erwähnt, bieten alle Browser dem `<ul>`-Elternteil sowohl Rand als auch Auffüllung. Während sich die CSS der Benutzeragenten etwas unterscheiden, beinhalten sie alle:

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

Alle Browser setzen {{cssxref("padding-inline-start")}} standardmäßig auf 40 Pixel für das `<ul>`-Element. In Sprachen, die von links nach rechts lesen, wie Englisch, ist dies die linke _Auffüllung_. Jede in den Autor-Stylesheets (das ist Ihr Stylesheet) festgelegte Auffüllung hat Vorrang.

Wenn Sie explizit sein möchten, setzen Sie das Folgende in Ihre Stylesheets, um sicherzustellen, dass, es sei denn, es wird anderweitig überschrieben, die Listenelemente im Hauptinhaltsbereich Ihres Dokuments, das sich im {{htmlelement("main")}}-Bereich befindet, richtig eingerückt sind:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Und verschachteln Sie Ihre `<li>`-Elemente immer in einem `<ul>` oder `<ol>`.
