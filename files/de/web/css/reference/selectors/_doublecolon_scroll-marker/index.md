---
title: ::scroll-marker
slug: Web/CSS/Reference/Selectors/::scroll-marker
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kann in jedem Element generiert werden und repräsentiert dessen Scroll-Marker. Alle Elemente können ein `::scroll-marker`-Pseudoelement haben, das in die {{cssxref("::scroll-marker-group")}} des nächsten {{Glossary("scroll_container", "Scroll-Containers")}} Vorfahren eingefügt wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}} Element), dessen Scroll-Ziel das Ursprungselement des Markers ist — und scrollt den Scroll-Container zu diesem Element, wenn er aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element generiert, wenn die `::scroll-marker`-{{cssxref("content")}}-Eigenschaft auf einen Wert ungleich `none` gesetzt wird und es einen Vorfahren-Scroll-Container mit einem Wert ungleich `none` der {{cssxref("scroll-marker-group")}}-Eigenschaft gibt (was bedeutet, dass ein {{cssxref("::scroll-marker-group")}}-Pseudoelement generiert wird).

Das `::scroll-marker-group`-Pseudoelement des Scroll-Containers enthält automatisch alle `::scroll-marker`-Pseudoelemente, die auf dem Scroll-Container oder seinen Nachkommen generiert werden. Dadurch können sie als Gruppe positioniert und gestaltet werden und werden typischerweise verwendet, um in einem CSS-Karussell einen Scroll-Positions-Indikator zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltsobjekten zu navigieren.

> [!NOTE]
> Alternativ kann ein Container für Scroll-Marker-Gruppen aus einem vorhandenen Element-Container mithilfe von {{cssxref("scroll-target-group")}} erstellt werden; alle enthaltenen {{htmlelement("a")}}-Elemente mit Fragment-Identifikatoren, die auf Abschnitte der Seite verlinken, verhalten sich automatisch wie Scroll-Marker.

Wenn auf einem Scroll-Container ein Container für Scroll-Marker-Gruppen mit der Eigenschaft `scroll-marker-group` erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Sie können mit der Tastatur <kbd>Tab</kbd> dazu wechseln und dann zwischen den verschiedenen "Seiten" mit den linken und rechten (oder oben und unten) Pfeiltasten wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Tasten wie erwartet ändert. Die Scroll-Marker können auch normal zwischen den einzelnen Elementen angesprungen werden.

## Beispiele

Andere Beispiele, die das `::scroll-marker`-Pseudoelement verwenden, finden Sie unter [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/Guides/Overflow/Carousels).

### Erstellen von Scroll-Marker für Karussell

In diesem Beispiel zeigen wir, wie man Scroll-Marker auf einem CSS-Karussell erstellt.

#### HTML

Wir haben eine einfache HTML-{{htmlelement("ul")}}-Liste mit mehreren {{htmlelement("li")}}-Listenelementen.

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

Wir konvertieren unser `<ul>` in einen Scroll-Snapping-Überlaufcontainer, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbruchende Zeile von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, wodurch sichergestellt wird, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

Wir erstellen einen Container für Scroll-Marker-Gruppen mit der Eigenschaft `scroll-marker-group` und platzieren ihn hinter allen Inhalten.

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

Anschließend gestalten wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf `33%` der Breite des Containers einzustellen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an die linke Kante des Containers schnappt, wenn der Inhalt gescrollt wird.

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

Dann verwenden wir das `::scroll-marker`-Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit einem roten Rand zu erstellen:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Wir wenden auch Stile auf das {{cssxref("::scroll-marker-group")}}-Pseudoelement an, um die Scroll-Marker in der Mitte der Zeile mit einem `0.4em`-Abstand zwischen jedem Marker anzuordnen:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen und richten uns an den Marker mit der {{cssxref(":target-current")}}-Pseudoklasse.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Benutzerdefinierte Scroll-Marker-Nummerierung und Stil

Dieses Beispiel ist dasselbe wie das vorherige, außer dass wir etwas andere Stile auf die Scroll-Marker angewendet haben und [CSS-Zähler](/de/docs/Web/CSS/Guides/Lists) verwendet haben, um die auf jedem Marker angezeigte Nummer zu inkrementieren. Die Unterschiede in der CSS werden im nächsten Abschnitt erklärt.

### CSS

In diesem Beispiel legen wir einen Namen eines Zählers fest, den wir bei jedem `<li>` inkrementieren möchten — `markers` — und verwenden dazu die {{cssxref("counter-increment")}}-Eigenschaft:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Dann setzen wir die `::scroll-marker`-Pseudoelement-{{cssxref("content")}}-Eigenschaft auf die {{cssxref("counter()")}}-Funktion und übergeben den `markers`-Zählername als Argument. Dies hat den Effekt, dass eine Nummer in jeden Marker eingefügt wird, die automatisch inkrementiert wird. Der Rest der Gestaltung ist rudimentär, zeigt jedoch, wie die Marker vollständig gestaltet werden können.

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

Für eine weitere interessante Anpassung fügen wir zwei Regeln hinzu, um den Marker des ersten und letzten Listenelements auszuwählen, indem wir {{cssxref(":first-child")}} und {{cssxref(":last-child")}} in die Selektorkette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten den Textinhalt "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um die Benutzererfahrung zu verbessern, setzen wir eine andere Farbe auf die Marker bei {{cssxref(":hover")}} und verwenden die `:target-current`-Pseudoklasse, um eine andere {{cssxref("color")}} und {{cssxref("background-color")}} auf den Marker des aktuell gescrollten Elements zu setzen, damit Benutzer wissen, welches Objekt gerade angezeigt wird:

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
