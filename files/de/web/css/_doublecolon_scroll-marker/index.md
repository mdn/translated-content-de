---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
l10n:
  sourceCommit: ad57cae3faaec374c3e712d6994e7fc3cb9318db
---

{{SeeCompatTable}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann in jedem Element erzeugt werden und repräsentiert dessen Scroll-Marker. Alle Elemente können ein `::scroll-marker` Pseudo-Element haben, das in die {{cssxref("::scroll-marker-group")}} des nächstgelegenen {{Glossary("scroll_container", "scroll container")}} Vorfahren gesetzt wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}} Element), dessen Scroll-Ziel das ursprüngliche Element des Markers ist — und scrollt den Scroll-Container zu diesem Element, wenn er aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird an einem Element erzeugt, wenn die {{cssxref("content")}} Eigenschaft des `::scroll-marker` auf einen Wert gesetzt ist, der nicht `none` ist, und es einen Vorfahren-Scroll-Container mit einem nicht `none` {{cssxref("scroll-marker-group")}} Eigenschaftswert gibt (was bedeutet, dass es ein {{cssxref("::scroll-marker-group")}} Pseudo-Element erzeugen wird).

Das `::scroll-marker-group` Pseudo-Element des Scroll-Containers enthält automatisch alle auf dem Scroll-Container oder seinen Nachkommen erzeugten `::scroll-marker` Pseudo-Elemente. Dies ermöglicht es, sie als Gruppe zu positionieren und zu gestalten und wird typischerweise verwendet, wenn ein CSS-Karussell erstellt wird, um einen Indikator für die Scroll-Position zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltselementen zu navigieren.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Elementcontainer mit {{cssxref("scroll-target-group")}} erstellt werden; alle enthaltenen {{htmlelement("a")}} Elemente mit Fragment-Identifikatoren, die auf Abschnitte der Seite verweisen, verhalten sich automatisch wie Scroll-Marker.

Wenn ein Scroll-Marker-Gruppencontainer in einem Scroll-Container mit der `scroll-marker-group` Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Sie können mit der Tastatur <kbd>Tab</kbd> darauf zugreifen und dann zwischen den verschiedenen "Seiten" mit den linken und rechten (oder aufwärts und abwärts) Pfeiltasten wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Schaltflächen wie erwartet ändert. Die Scroll-Marker können auch normal zwischennavigiert werden, wie erwartet.

## Beispiele

Weitere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden, finden Sie unter [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels).

### Erstellen von Karussell-Scroll-Markern

In diesem Beispiel zeigen wir, wie man Scroll-Marker auf einem CSS-Karussell erstellt.

#### HTML

Wir haben eine grundlegende HTML {{htmlelement("ul")}} Liste mit mehreren {{htmlelement("li")}} Listeneinträgen.

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

Wir verwandeln unser `<ul>` in einen Scroll-Snapping-Überlaufcontainer, indem wir {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbrechende Reihe von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir wandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll-snap container")}} um, indem wir sicherstellen, dass Elemente immer an Ort und Stelle einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Marker-Gruppencontainer mit der `scroll-marker-group` Eigenschaft und platzieren ihn nach dem gesamten Inhalt.

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

Als nächstes gestalten wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `33%` der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}} Wert `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhalts an die linke Kante des Containers einrastet.

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

Wir verwenden dann das `::scroll-marker` Pseudo-Element, um für jedes Listenelement einen quadratischen Marker mit einem roten Rand zu erstellen:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Wir wenden auch Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in der Mitte der Reihe mit einem Abstand von `0.4em` zwischen jedem anzuordnen:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich gestalten wir den Marker des aktuell gescrollten Elements unterschiedlich zu den anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse ansprechen.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Benutzerdefinierte Scroll-Marker-Nummerierung und Stil

Dieses Beispiel ist dasselbe wie das vorherige, außer dass wir einige unterschiedliche Stile auf die Scroll-Marker angewendet haben und [CSS-Zähler](/de/docs/Web/CSS/CSS_lists) verwendet haben, um die auf jedem Marker angezeigte Zahl zu inkrementieren. Die CSS-Unterschiede werden im nächsten Abschnitt erklärt.

### CSS

In diesem Beispiel setzen wir einen Namen eines Zählers, den wir auf jedem `<li>` inkrementieren möchten — `markers` — mit der {{cssxref("counter-increment")}} Eigenschaft:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Wir setzen dann die {{cssxref("content")}} Eigenschaft des `::scroll-marker` Pseudo-Elements auf die {{cssxref("counter()")}} Funktion und übergeben ihr den `markers` Zählernamen als Argument. Dies hat den Effekt, eine Zahl in jeden Marker einzufügen, die automatisch inkrementiert wird. Der Rest des Stils ist rudimentär, illustriert aber, wie die Marker vollständig gestylt werden können.

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

Um die Benutzererfahrung zu verbessern, setzen wir eine andere Farbe auf den Markern bei {{cssxref(":hover")}} und verwenden die `:target-current` Pseudoklasse, um eine andere {{cssxref("color")}} und {{cssxref("background-color")}} auf den Marker des aktuell gescrollten Elements zu setzen, damit die Benutzer wissen, welches Element momentan sichtbar ist:

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
