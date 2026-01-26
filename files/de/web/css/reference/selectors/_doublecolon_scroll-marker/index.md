---
title: ::scroll-marker
slug: Web/CSS/Reference/Selectors/::scroll-marker
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kann innerhalb beliebiger Elemente generiert werden und stellt dessen Scroll-Marker dar. Alle Elemente können ein `::scroll-marker`-Pseudoelement haben, das in die {{cssxref("::scroll-marker-group")}} des nächstgelegenen {{Glossary("scroll_container", "Scroll-Containers")}}-Vorfahren eingefügt wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}}-Element), dessen Scroll-Ziel das Ursprungselement des Markers ist und den Scroll-Container zu diesem Element scrollt, wenn er aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element generiert, wenn die {{cssxref("content")}}-Eigenschaft des `::scroll-marker` auf einen nicht `none`-Wert gesetzt ist und es einen Vorfahren-Scroll-Container mit einem nicht `none`-{{cssxref("scroll-marker-group")}}-Eigenschaftswert hat (was bedeutet, dass es ein {{cssxref("::scroll-marker-group")}}-Pseudoelement generieren wird).

Das `::scroll-marker-group`-Pseudoelement des Scroll-Containers enthält automatisch alle `::scroll-marker`-Pseudoelemente, die auf dem Scroll-Container oder seinen Nachkommen generiert werden. Dies ermöglicht es, sie als Gruppe zu positionieren und zu layouten, und wird typischerweise verwendet, um einen CSS-Karussell zu erstellen, um einen Scroll-Positionsanzeiger zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltsobjekten zu navigieren.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Elementcontainer erstellt werden, indem {{cssxref("scroll-target-group")}} verwendet wird; alle enthaltenen {{htmlelement("a")}}-Elemente mit Fragmentkennungen, die auf Abschnitte der Seite verlinken, verhalten sich automatisch wie Scroll-Marker.

Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container über die `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Sie können mit der Tastatur <kbd>Tab</kbd> zu ihm navigieren und dann mit den Pfeiltasten links und rechts (oder hoch und runter) zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Schaltflächen wie erwartet ändert. Die Scroll-Marker können auch normal durchgetabbt werden, wie erwartet.

## Beispiele

Weitere Beispiele, die das `::scroll-marker`-Pseudoelement verwenden, finden Sie unter [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels).

### Erstellen von Karussell-Scroll-Markern

In diesem Beispiel zeigen wir, wie Sie Scroll-Marker auf einem CSS-Karussell erstellen.

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

Wir konvertieren unser `<ul>` in einen Scroll-Snap-Overflow-Container, indem wir das {{cssxref("display")}} auf `flex` setzen, und eine einzelne, nicht umschließende Reihe von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass der Inhalt horizontal scrollt, wenn die Elemente ihren Container auf der x-Achse überlaufen. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} und stellen sicher, dass die Elemente immer in Position einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Marker-Gruppencontainer mit der `scroll-marker-group`-Eigenschaft und platzieren ihn nach dem gesamten Inhalt.

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

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf `33%` der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` führt dazu, dass die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers schnappt, wenn der Inhalt gescrollt wird.

```css live-sample___creating-scroll-markers live-sample___custom-numbering
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 33%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

Wir verwenden dann das `::scroll-marker`-Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit rotem Rand zu erstellen:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Wir wenden auch Stile auf das {{cssxref("::scroll-marker-group")}}-Pseudoelement an, um die Scroll-Marker in der Mitte der Reihe mit einem Abstand von `0.4em` zwischen jedem auszulegen:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Abschließend stylen wir den Marker des derzeit gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}}-Pseudoklasse ansprechen.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Benutzerdefinierte Scroll-Marker-Nummerierung und Stil

Dieses Beispiel ist das gleiche wie das vorherige, außer dass wir einige unterschiedliche Stile auf die Scroll-Marker angewendet haben und [CSS-Zähler](/de/docs/Web/CSS/Guides/Lists) verwendet haben, um die auf jedem Marker gezeigte Nummer zu inkrementieren. Die Unterschiede im CSS werden im nächsten Abschnitt erklärt.

### CSS

In diesem Beispiel setzen wir einen Namen eines Zählers, den wir auf jedem `<li>` inkrementieren möchten — `markers` — durch Verwenden der {{cssxref("counter-increment")}}-Eigenschaft:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Wir setzen dann die {{cssxref("content")}}-Eigenschaft des `::scroll-marker`-Pseudoelements auf die {{cssxref("counter()")}}-Funktion und übergeben den `markers`-Zählernamen als Argument. Dies hat den Effekt, dass eine Nummer in jeden Marker eingefügt wird, die sich automatisch erhöht. Der Rest der Formatierung ist rudimentär, veranschaulicht jedoch, wie die Marker vollständig gestylt werden können.

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
  background-color: #eeeeee;
}
```

Für eine weitere interessante Anpassung fügen wir zwei Regeln ein, um den Marker der ersten und letzten Listenelemente auszuwählen, indem wir {{cssxref(":first-child")}} und {{cssxref(":last-child")}} in die Selektorkette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten Marker den Textinhalt "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um die Benutzererfahrung zu verbessern, setzen wir eine andere Farbe auf den Markern bei {{cssxref(":hover")}} und verwenden die `:target-current`-Pseudoklasse, um auf dem Marker des gerade gescrollten Elements eine andere {{cssxref("color")}} und {{cssxref("background-color")}} zu setzen, damit Benutzer wissen, welches Element derzeit sichtbar ist:

```css live-sample___custom-numbering
::scroll-marker:hover {
  background-color: #ddcccc;
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
- {{cssxref("scroll-target-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- {{cssxref(":target-before")}}
- {{cssxref(":target-after")}}
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)-Modul
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
