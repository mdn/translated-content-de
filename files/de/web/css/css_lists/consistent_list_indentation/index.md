---
title: Konsistente Listeneinrückung
slug: Web/CSS/CSS_lists/Consistent_list_indentation
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Eine der häufigsten Stiländerungen bei Listen ist eine Anpassung der Einrückungsdistanz – also, wie weit die Listenelemente nach rechts verschoben werden. Dieser Artikel hilft Ihnen, das Einrücken von Listenelementen zu verstehen und sicherzustellen, dass die Listenmarkierungen sichtbar sind.

Um zu verstehen, warum dies der Fall ist, und vor allem, wie man das Problem von Anfang an vermeidet, ist es notwendig, die Details der Listenkonstruktion zu untersuchen.

## Eine Liste Erstellen

### Das eigenständige Listenelement

Zunächst betrachten wir das reine Listenelement, das nicht in einer Liste von Elementen verschachtelt ist. Beim Verwenden des HTML-Elements {{htmlelement("li")}} setzt der Browser den {{cssxref("display")}}-Wert auf `list-item`. Ob nicht in einer Liste verschachtelte Listenelemente eine Markierung (auch als "Punkt" bekannt) erhalten, hängt vom Browser ab. Wir können diesen Punkt mit {{cssxref("list-style-type", "list-style-type: none")}} entfernen.

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
<p>Standardpunkte hängen vom Browser ab:</p>
<li>Ein Listenelement</li>
<li>Ein Listenelement</li>
<li>Ein Listenelement</li>
<p>Diese Listenelemente haben ihre Punkte entfernt:</p>
<li>Ein Listenelement</li>
<li>Ein Listenelement</li>
<li>Ein Listenelement</li>
```

{{EmbedLiveSample("Das eigenständige Listenelement", "100%", 200)}}

Der gepunktete rote Rahmen repräsentiert die äußeren Ränder der Inhaltsfläche jedes Listenelements. An diesem Punkt haben die Listenelemente weder Abstände noch Rahmen.

### In einer Liste verschachtelte Listenelemente

Nun umschließen wir diese in einem Elternelement; in diesem Fall umschließen wir sie in einer ungeordneten Liste (d. h. `<ul>`). Laut CSS-Box-Modell müssen die Boxen der Listenelemente innerhalb der Inhaltsfläche des Elternelements angezeigt werden.

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
  <li>Ein Listenelement</li>
  <li>Ein Listenelement</li>
  <li>Ein Listenelement</li>
</ul>
```

{{EmbedLiveSample("In einer Liste verschachtelte Listenelemente", "100%", 150)}}

Der gepunktete blaue Rahmen zeigt uns die Ränder des Inhaltsbereichs des `<ul>` Elements. Dieses Elternelement wird sowohl mit Abstand als auch mit Innenabstand geliefert. Browser setzen die folgenden Standardstile für ungeordnete Listen:

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

Nun bringen wir die Listenmarkierungen zurück. Da es sich um eine ungeordnete Liste handelt, erben die Listenelemente die Browserstile `list-style-type: disc;`, was gefüllte Kreis-"Punkte" sind, von ihrem `<ul>` Elternelement.

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
<p>Diese standardmäßig <code>list-style-position: outside</code>.</p>
<ul>
  <li>Ein Listenelement</li>
  <li>Ein Listenelement</li>
  <li>Ein Listenelement</li>
</ul>
<p>Diese haben <code>list-style-position: inside</code> gesetzt.</p>
<ul>
  <li>Ein Listenelement</li>
  <li>Ein Listenelement</li>
  <li>Ein Listenelement</li>
</ul>
```

{{EmbedLiveSample("Vererben von `list-style-type`", "100%", 220)}}

Visuell befinden sich die Markierungen _außerhalb_ des Inhaltsbereichs des `<ul>`, aber das ist hier nicht der wichtigste Teil. Entscheidend ist, dass die Markierungen außerhalb der "Hauptbox" der `<li>` Elemente platziert sind, nicht des `<ul>`. Sie sind wie Anhängsel an den Listenelementen, die außerhalb des Inhaltsbereichs des `<li>` hängen, aber immer noch am `<li>` befestigt sind.

Deshalb werden in jedem modernen Browser Markierungen außerhalb eines für ein `<li>`-Element gesetzten Rahmens platziert, wenn der Wert von {{cssxref("list-style-position")}} standardmäßig oder explizit auf `outside` gesetzt ist. Wenn wir ihn auf `inside` ändern, werden die Markierungen in den Inhalt des `<li>` gebracht, als ob sie ein Inline-Block wären, der ganz am Anfang des `<li>` platziert ist.

## Standard-Einrückung

Wie oben erwähnt, stellen alle Browser dem `<ul>` Elternelement sowohl Rand- als auch Innenabstand bereit. Während die CSS der Benutzeragenten etwas variieren, beinhalten sie alle:

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

Alle Browser setzen {{cssxref("padding-inline-start")}} standardmäßig auf 40 Pixel für das `<ul>`-Element. In von links nach rechts laufenden Sprachen wie Englisch ist dies die linke _Einrückung_. Jeder Innenabstand, der in den Autorenstilvorlagen (das ist Ihr Stylesheet) festgelegt ist, hat Vorrang.

Wenn Sie explizit sein möchten, setzen Sie Folgendes in Ihren Stylesheets, um sicherzustellen, dass, sofern nicht anders überschrieben, die Listenelemente im Hauptinhaltsbereich Ihres Dokuments, die sich im {{htmlelement("main")}}-Abschnitt befinden, korrekt eingerückt sind:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

Und verschachteln Sie Ihre `<li>` Elemente immer in einem `<ul>` oder `<ol>`.
