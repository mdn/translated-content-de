---
title: ::scroll-marker
slug: Web/CSS/Reference/Selectors/::scroll-marker
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kann in jedes Element eingefügt werden und repräsentiert dessen Scroll-Marker. Alle Elemente können ein `::scroll-marker`-Pseudoelement haben, das in die {{cssxref("::scroll-marker-group")}} des nächstgelegenen {{Glossary("scroll_container", "Scroll-Container")}} Vorfahren eingefügt wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}} Element), dessen Scroll-Ziel das ursprüngliche Element des Markers ist — und scrollt den Scroll-Container zu diesem Element, wenn er aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element erzeugt, wenn die `::scroll-marker`-{{cssxref("content")}}-Eigenschaft auf einen von `none` verschiedenen Wert gesetzt ist und es einen Vorfahren-Scroll-Container mit einem von `none` verschiedenen Wert der {{cssxref("scroll-marker-group")}}-Eigenschaft gibt (was bedeutet, dass ein {{cssxref("::scroll-marker-group")}}-Pseudoelement erzeugt wird).

Das `::scroll-marker-group`-Pseudoelement des Scroll-Containers enthält automatisch alle `::scroll-marker`-Pseudoelemente, die auf dem Scroll-Container oder seinen Nachfahren generiert werden. Dadurch können sie als Gruppe positioniert und angeordnet werden und wird typischerweise verwendet, um bei der Erstellung eines CSS-Karussells einen Scroll-Positionsanzeiger zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltselementen zu navigieren.

> [!NOTE]
> Alternativ kann ein Container für Scroll-Marker-Gruppen aus einem vorhandenen Elementcontainer mit {{cssxref("scroll-target-group")}} erstellt werden; alle enthaltenen {{htmlelement("a")}}-Elemente mit Fragmentidentifikatoren, die auf Abschnitte der Seite verlinken, verhalten sich automatisch wie Scroll-Marker.

Wenn ein Container für Scroll-Marker-Gruppen auf einem Scroll-Container mit der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Sie können mit der Tastatur zu ihm wechseln, dann zwischen den verschiedenen "Seiten" mit den Pfeilen nach links und rechts (oder nach oben und unten) navigieren, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Buttons wie erwartet ändert. Die Scroll-Marker können ebenfalls normal zwischenzeitlich angesteuert werden.

## Beispiele

Sehen Sie sich [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für andere Beispiele an, die das `::scroll-marker`-Pseudoelement verwenden.

### Scroll-Marker in einem Karussell erstellen

In diesem Beispiel demonstrieren wir, wie man Scroll-Marker in einem CSS-Karussell erstellt.

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

Wir verwandeln unsere `<ul>` in einen Scroll-Snapping-Overflow-Container, indem wir das {{cssxref("display")}} auf `flex` setzen, um eine einzelne, nicht-umhüllende Zeile von `<li>`-Elementen zu erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überfluten, der Inhalt horizontal scrollt. Dann verwandeln wir die `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass die Elemente immer an ihrem Platz einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

Wir erstellen einen Container für Scroll-Marker-Gruppen mit der `scroll-marker-group`-Eigenschaft, indem wir ihn nach dem gesamten Inhalt platzieren.

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

Als nächstes gestalten wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf `33%` der Breite des Containers festzulegen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements bei einem Scrollen des Inhalts an die linke Kante des Containers schnappt.

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

Wir verwenden dann das `::scroll-marker`-Pseudoelement, um einen quadratischen Marker für jedes Listenelement mit einem roten Rand zu erstellen:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Wir wenden auch Styles auf das {{cssxref("::scroll-marker-group")}}-Pseudoelement an, um die Scroll-Marker in der Mitte der Reihe mit einem Abstand von `0.4em` zwischen jedem zu positionieren:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}}-Pseudoklasse anvisieren.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Individuelle Nummerierung und Stile für Scroll-Marker

Dieses Beispiel ist das gleiche wie das vorherige, außer dass wir einige unterschiedliche Stile auf die Scroll-Marker angewendet und [CSS-Zähler](/de/docs/Web/CSS/CSS_lists) verwendet haben, um die Nummerierung auf jedem Marker zu erhöhen. Die CSS-Unterschiede werden im nächsten Abschnitt erläutert.

### CSS

In diesem Beispiel setzen wir einen Namen für einen Zähler, den wir bei jedem `<li>` erhöhen möchten — `markers` — mit der {{cssxref("counter-increment")}}-Eigenschaft:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Dann setzen wir die {{cssxref("content")}}-Eigenschaft des `::scroll-marker`-Pseudoelements auf die {{cssxref("counter()")}}-Funktion, indem wir der Funktion den `markers`-Zählernamen als Argument übergeben. Dies hat den Effekt, dass eine Nummer in jeden Marker eingefügt wird, die sich automatisch erhöht. Der Rest der Stile ist grundlegend, aber es veranschaulicht, wie die Marker vollständig gestylt werden können.

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

Für eine weitere interessante Anpassung fügen wir zwei Regeln hinzu, um den Marker des ersten und letzten Listenelements zu selektieren, indem wir {{cssxref(":first-child")}} und {{cssxref(":last-child")}} in die Selektorenkette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten Marker den Textinhalt "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um die Benutzererfahrung zu verbessern, setzen wir eine andere Farbe auf die Marker bei {{cssxref(":hover")}} und verwenden die `:target-current`-Pseudoklasse, um auf dem Marker des aktuell gescrollten Elements eine andere {{cssxref("color")}} und {{cssxref("background-color")}} festzulegen, damit die Benutzer wissen, welches Element gerade angezeigt wird:

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
- [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
