---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
l10n:
  sourceCommit: 898dd2394e7b70daa2c0c212282a64ccf5938341
---

{{CSSRef}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann innerhalb jedes Elements generiert werden und stellt dessen Scroll-Marker dar. Alle Elemente können ein `::scroll-marker` Pseudo-Element haben, das in der {{cssxref("::scroll-marker-group")}} des nächstgelegenen {{Glossary("scroll_container", "Scroll-Containers")}}-Vorfahren platziert wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}}-Element), dessen Scroll-Ziel das Ursprungselement des Markers ist — und scrollt den Scroll-Container zu diesem Element, wenn er aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element generiert, wenn die {{cssxref("content")}}-Eigenschaft des `::scroll-marker` auf einen Wert ungleich `none` gesetzt ist und ein Vorfahren-Scroll-Container mit einem {{cssxref("scroll-marker-group")}} Wert ungleich `none` existiert (was bedeutet, dass ein {{cssxref("::scroll-marker-group")}} Pseudo-Element generiert wird).

Das `::scroll-marker-group` Pseudo-Element des Scroll-Containers enthält automatisch alle `::scroll-marker` Pseudo-Elemente, die auf dem Scroll-Container oder seinen Nachkommen generiert werden. Dies ermöglicht es, sie als Gruppe zu positionieren und zu layouten und wird typischerweise verwendet, wenn ein CSS-Karussell erstellt wird, um einen Scroll-Positionsanzeiger zu schaffen. Die einzelnen Scroll-Marker können genutzt werden, um zu ihren zugeordneten Inhaltselementen zu navigieren.

In Bezug auf die Barrierefreiheit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit der <kbd>Tab</kbd>-Taste die Gruppe erreichen, verhält sie sich wie ein einzelnes Element (d. h., ein weiterer Druck auf die <kbd>Tab</kbd>-Taste überspringt die Gruppe zum nächsten Element), und Sie können mit den Pfeiltasten links und rechts (bzw. auf- und abwärts) zwischen den verschiedenen Scroll-Markern wechseln.

## Beispiele

Siehe [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellen von Karussell-Scroll-Markern

In diesem Beispiel demonstrieren wir, wie Scroll-Marker auf einem CSS-Karussell erstellt werden.

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

Wir wandeln unsere `<ul>` in einen Überlauf-Container mit Scroll-Snap um, indem wir die {{cssxref("display")}}-Eigenschaft auf `flex` setzen, und eine einzelne, nicht umwickelte Zeile von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Danach wandeln wir die `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um und sorgen dafür, dass die Elemente immer in Position einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scroll-Marker-Gruppe mit der Eigenschaft `scroll-marker-group`, die nach dem gesamten Inhalt platziert wird.

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

Als nächstes gestalten wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie auf `33%` der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}}-Wert `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das `::scroll-marker` Pseudo-Element, um einen quadratischen Marker für jedes Listenelement mit einer roten Umrandung zu erstellen:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Wir wenden auch Stilregeln auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in der Mitte der Zeile mit einem Abstand von `0.4em` zwischen ihnen anzuordnen:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich gestalten wir den Marker des gerade gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse anvisieren.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Benutzerdefinierte Nummerierung und Stil der Scroll-Marker

Dieses Beispiel ist dasselbe wie das vorherige, außer dass wir den Scroll-Markern einen anderen Stil gegeben haben und [CSS-Zähler](/de/docs/Web/CSS/CSS_lists) verwendet haben, um die Nummer, die auf jedem Marker angezeigt wird, zu inkrementieren. Die Unterschiede im CSS werden im nächsten Abschnitt erklärt.

### CSS

In diesem Beispiel geben wir mit der {{cssxref("counter-increment")}} Eigenschaft einen Namen für einen Zähler an, den wir bei jedem `<li>` inkrementieren möchten — `markers`:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Dann setzen wir die {{cssxref("content")}}-Eigenschaft des `::scroll-marker` Pseudo-Elements auf die {{cssxref("counter()")}}-Funktion, wobei wir den Zählernamen `markers` als Argument übergeben. Dies bewirkt das Einfügen einer Nummer in jeden Marker, die sich automatisch erhöht. Der Rest der Gestaltung ist rudimentär, aber zeigt, wie die Marker vollständig gestaltet werden können.

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

Für eine weitere interessante Anpassung fügen wir zwei Regeln ein, um den Marker des ersten und letzten Listenelements auszuwählen, indem wir {{cssxref(":first-child")}} und {{cssxref(":last-child")}} jeweils in die Selektorkette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um das Benutzererlebnis zu verbessern, setzen wir eine andere Farbe auf die Marker bei {{cssxref(":hover")}} und verwenden die `:target-current` Pseudo-Klasse, um eine andere {{cssxref("color")}} und {{cssxref("background-color")}} auf dem gerade gescrollten Element-Marker zu setzen, sodass Benutzer wissen, welches Element gerade angezeigt wird:

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Modul [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists)
- Modul [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow)
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
