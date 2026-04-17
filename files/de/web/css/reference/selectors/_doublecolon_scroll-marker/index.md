---
title: "`::scroll-marker` CSS pseudo-element"
short-title: ::scroll-marker
slug: Web/CSS/Reference/Selectors/::scroll-marker
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{SeeCompatTable}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) kann in jedem Element erzeugt werden und repräsentiert dessen Scroll-Marker. Alle Elemente können ein `::scroll-marker`-Pseudoelement haben, das in die {{cssxref("::scroll-marker-group")}} des nächstliegenden {{Glossary("scroll_container", "Scroll-Containers")}}-Vorfahrs gesetzt wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}} Element), dessen Scroll-Ziel das Ursprungselement des Markers ist — und scrollt den Scroll-Container zu diesem Element, wenn es aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element erzeugt, wenn die {{cssxref("content")}}-Eigenschaft des `::scroll-marker`-Pseudoelements auf einen Wert ungleich `none` gesetzt wird und es in einem Scroll-Container-Vorfahren mit einem nicht-`none` {{cssxref("scroll-marker-group")}}-Eigenschaftswert vorhanden ist (was bedeutet, dass es ein {{cssxref("::scroll-marker-group")}}-Pseudoelement erzeugen wird).

Das `::scroll-marker-group`-Pseudoelement des Scroll-Containers enthält automatisch alle `::scroll-marker`-Pseudoelemente, die am Scroll-Container oder dessen Nachkommen erzeugt werden. Dies ermöglicht es, sie als Gruppe zu positionieren und zu layouten und wird typischerweise bei der Erstellung eines CSS-Karussells verwendet, um einen Scroll-Positionsindikator zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltselementen zu navigieren.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Elementcontainer unter Verwendung von {{cssxref("scroll-target-group")}} erstellt werden; alle enthaltenen {{htmlelement("a")}}-Elemente mit Fragment-IDs, die auf Abschnitte der Seite verlinken, verhalten sich automatisch wie Scroll-Marker.

Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container mit der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik dargestellt. Sie können mit der Tastatur mit <kbd>Tab</kbd> dorthin gelangen und dann zwischen den verschiedenen "Seiten" mit den Pfeiltasten links und rechts (oder oben und unten) wechseln, wodurch auch der Zustand der zugehörigen Scroll-Marker und -Schaltflächen wie erwartet geändert wird. Die Scroll-Marker können, wie erwartet, auch normal weitergetabt werden.

## Beispiele

Sehen Sie sich [Creating CSS carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Beispiele an, die das `::scroll-marker`-Pseudoelement verwenden.

### Erstellung von Karussell-Scroll-Markern

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

Wir wandeln unser `<ul>` in einen Überlaufcontainer mit Scroll-Snap, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht-umbruchende Zeile von `<li>`-Elementen erzeugen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Dann wandeln wir das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, wodurch sichergestellt wird, dass die Elemente immer an Ort und Stelle einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Marker-Gruppencontainer mit der `scroll-marker-group`-Eigenschaft, indem wir ihn hinter den gesamten Inhalt platzieren.

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

Als nächstes stylen wir die `<li>`-Elemente und verwenden die {{cssxref("flex")}}-Eigenschaft, um sie `33%` der Breite des Containers einzunehmen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Wir wenden auch Stile auf das {{cssxref("::scroll-marker-group")}}-Pseudoelement an, um die Scroll-Marker in der Mitte der Zeile mit einem Zwischenraum von `0.4em` zwischen jedem Marker zu positionieren:

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

### Benutzerdefinierte Scroll-Marker-Nummerierung und -Stil

Dieses Beispiel ist dasselbe wie das vorherige, außer dass wir einige unterschiedliche Stile auf die Scroll-Marker angewendet haben und [CSS-Zähler](/de/docs/Web/CSS/Guides/Lists) verwendet haben, um die auf jedem Marker angezeigte Zahl zu erhöhen. Die CSS-Unterschiede werden im nächsten Abschnitt erklärt.

### CSS

In diesem Beispiel setzen wir einen Namen für einen Zähler, den wir auf jedem `<li>` erhöhen wollen — `markers` — unter Verwendung der {{cssxref("counter-increment")}}-Eigenschaft:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Wir setzen dann die {{cssxref("content")}}-Eigenschaft des `::scroll-marker`-Pseudoelements auf die {{cssxref("counter()")}}-Funktion und übergeben dabei den `markers`-Zählernamen als Argument. Dies hat den Effekt, dass in jeden Marker eine Zahl eingefügt wird, die automatisch erhöht wird. Der Rest der Gestaltung ist rudimentär, aber es zeigt, wie die Marker vollständig gestylt werden können.

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

Für eine weitere interessante Anpassung fügen wir zwei Regeln hinzu, um den Marker für das erste und das letzte Listenelement auszuwählen, indem wir jeweils {{cssxref(":first-child")}} und {{cssxref(":last-child")}} in die Selektor-Kette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten Marker den Textinhalt "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um die Benutzererfahrung zu verbessern, setzen wir eine andere Farbe auf die Marker bei {{cssxref(":hover")}} und verwenden die `:target-current`-Pseudo-Klasse, um eine andere {{cssxref("color")}} und {{cssxref("background-color")}} auf dem aktuell gescrollten Element-Marker festzulegen, damit Benutzer wissen, welches Element gerade angezeigt wird:

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
- [Creating CSS carousels](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS lists and counters](/de/docs/Web/CSS/Guides/Lists) module
- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
