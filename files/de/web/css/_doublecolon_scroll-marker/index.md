---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{CSSRef}}{{SeeCompatTable}}

Der **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann innerhalb eines beliebigen Elements generiert werden und stellt dessen Scroll-Marker dar. Alle Elemente können ein `::scroll-marker`-Pseudo-Element haben, das in die {{cssxref("::scroll-marker-group")}} des nächsten {{Glossary("scroll_container", "Scroll-Containers")}}-Vorfahren platziert wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}} Element), dessen Scroll-Ziel das ursprüngliche Element des Markers ist, und scrollt den Scroll-Container bei Aktivierung zu diesem Element.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element generiert, wenn die `::scroll-marker`-{{cssxref("content")}}-Eigenschaft auf einen Wert ungleich `none` gesetzt ist und es einen Vorfahren-Scroll-Container mit einem Wert ungleich `none` für die {{cssxref("scroll-marker-group")}}-Eigenschaft hat (was bedeutet, dass ein {{cssxref("::scroll-marker-group")}}-Pseudo-Element generiert wird).

Das `::scroll-marker-group`-Pseudo-Element des Scroll-Containers enthält automatisch alle `::scroll-marker`-Pseudo-Elemente, die auf dem Scroll-Container oder seinen Nachkommen generiert werden. Dies ermöglicht, sie als Gruppe zu positionieren und anzuordnen und wird typischerweise verwendet, um einen Scoll-Positionsanzeiger in einem CSS-Karussell zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltsobjekten zu navigieren.

In Bezug auf Barrierefreiheit werden die Scroll-Marker-Gruppe und die darin enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Wenn Sie zur Gruppe <kbd>Tab</kbd> drücken, verhält es sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste geht an das nächste Element vorbei), und Sie können mit den linken und rechten (oder oberen und unteren) Pfeiltasten zwischen den verschiedenen Scroll-Markern wechseln.

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Beispiele, die das `::scroll-marker`-Pseudo-Element verwenden.

### Erstellen von Karussell-Scroll-Markern

In diesem Beispiel demonstrieren wir, wie man Scroll-Marker auf einem CSS-Karussell erstellt.

#### HTML

Wir haben eine grundlegende HTML-{{htmlelement("ul")}}-Liste mit mehreren {{htmlelement("li")}}-Listenelementen.

```html live-sample___creating-scroll-markers live-sample___custom-numbering
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
</ul>
```

#### CSS

Wir konvertieren unser `<ul>` in einen Scroll-Snapping-Overflow-Container, indem wir das {{cssxref("display")}} auf `flex` setzen, wodurch eine einzige, nicht umgebrochene Reihe von `<li>`-Elementen erstellt wird. Die {{cssxref("overflow-x")}}-Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll-snap container")}}, um sicherzustellen, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scroll-Marker-Gruppe mit der `scroll-marker-group`-Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt.

```css live-sample___creating-scroll-markers live-sample___custom-numbering
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-marker-group: after;
}
```

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf `33%` der Containerbreite zu setzen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an die linke Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

```css live-sample___creating-scroll-markers live-sample___custom-numbering
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 33%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

Wir verwenden dann das `::scroll-marker`-Pseudo-Element, um einen quadratischen Marker für jedes Listenelement mit einem roten Rand zu erstellen:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Wir wenden auch Stile auf das {{cssxref("::scroll-marker-group")}}-Pseudo-Element an, um die Scroll-Marker in der Mitte der Reihe mit einem `0,4em`-Abstand zwischen jedem anzuordnen:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich stylen wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}}-Pseudo-Klasse ansprechen.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Benutzerdefinierte Nummerierung und Stil der Scroll-Marker

Dieses Beispiel ist das gleiche wie das vorherige, außer dass wir einige unterschiedliche Stile auf die Scroll-Marker angewendet haben und [CSS-Counter](/de/docs/Web/CSS/CSS_lists) verwendet haben, um die auf jedem Marker angezeigte Nummer zu erhöhen. Die CSS-Unterschiede werden im nächsten Abschnitt erläutert.

### CSS

In diesem Beispiel setzen wir mithilfe der {{cssxref("counter-increment")}}-Eigenschaft einen Namen für einen Zähler fest, den wir auf jedem `<li>` erhöhen möchten — `markers`:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Wir setzen dann die `::scroll-marker`-Pseudo-Element-{{cssxref("content")}}-Eigenschaft auf die {{cssxref("counter()")}}-Funktion, indem wir der Funktion den `markers`-Zählername als Argument übergeben. Dies hat den Effekt, dass eine Zahl in jeden Marker eingefügt wird, die sich automatisch erhöht. Der Rest der Gestaltung ist einfach, aber es veranschaulicht, wie die Marker vollständig gestaltet werden können.

```css live-sample___custom-numbering
li::scroll-marker {
  content: counter(markers);
  font-family: sans-serif;
  width: fit-content;
  height: 1em;
  padding: 5px;
  color: black;
  text-decoration: none;
  border: 2px solid rgb(0 0 0 / 0.15);
  border-radius: 0.5em;
  background-color: #eee;
}
```

Für eine weitere interessante Anpassung fügen wir zwei Regeln ein, um den Marker der ersten und letzten Listenelemente auszuwählen, indem wir {{cssxref(":first-child")}} und {{cssxref(":last-child")}} jeweils in die Selektorenkette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten Marker den Textinhalt "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um die Benutzererfahrung zu verbessern, setzen wir beim Überfahren der Marker mit der Maus eine andere Farbe und verwenden die `:target-current`-Pseudo-Klasse, um eine andere {{cssxref("color")}} und {{cssxref("background-color")}} auf dem gerade gescrollten Element-Marker zu setzen, damit Benutzer wissen, welches Element gerade angezeigt wird:

```css live-sample___custom-numbering
::scroll-marker:hover {
  background-color: #dcc;
}

::scroll-marker:target-current {
  background-color: purple;
  color: white;
}
```

#### Ergebnis

{{EmbedLiveSample("custom-numbering", '', '220')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Karussell-Galerie](https://chrome.dev/carousel/) via chrome.dev (2025)
