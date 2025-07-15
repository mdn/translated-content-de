---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann innerhalb jedes Elements generiert werden und stellt dessen Scroll-Marker dar. Alle Elemente können ein `::scroll-marker` Pseudo-Element haben, das in die {{cssxref("::scroll-marker-group")}} des nächsten {{Glossary("scroll_container", "Scroll-Containers")}} im Vorfahren platziert wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}}-Element), dessen Scroll-Ziel das Ursprungselement des Markers ist und scrollt den Scroll-Container zu diesem Element, wenn es aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element generiert, wenn die {{cssxref("content")}}-Eigenschaft des `::scroll-marker` auf einen anderen Wert als `none` gesetzt ist und es einen Vorfahren-Scroll-Container mit einem anderen Wert als `none` für die {{cssxref("scroll-marker-group")}}-Eigenschaft hat (was bedeutet, dass es ein {{cssxref("::scroll-marker-group")}} Pseudo-Element generieren wird).

Das `::scroll-marker-group` Pseudo-Element des Scroll-Containers enthält automatisch alle `::scroll-marker` Pseudo-Elemente, die auf dem Scroll-Container oder seinen Nachfahren generiert werden. Dies ermöglicht, dass sie als Gruppe positioniert und ausgestaltet werden können, und wird typischerweise bei der Erstellung eines CSS-Karussells verwendet, um einen Scroll-Positionsindikator zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltsitems zu navigieren.

In Bezug auf Barrierefreiheit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantiken gerendert. Wenn Sie zur Gruppe <kbd>Tab</kbd>, verhält sie sich wie ein Einzelitem (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste wird die Gruppe zum nächsten Item weiterführen), und Sie können mit den Pfeiltasten links und rechts (oder oben und unten) zwischen den verschiedenen Scroll-Markern wechseln.

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Beispiele mit dem `::scroll-marker` Pseudo-Element.

### Erstellung von Karussell-Scroll-Markern

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

Wir verwandeln unser `<ul>` in einen Scroll-Snapping-Überlauf-Container, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbruchende Zeile von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}}-Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass der Inhalt horizontal scrollt, wenn die Elemente ihren Container auf der x-Achse überlaufen. Wir verwandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scroll-Marker-Gruppe mit der `scroll-marker-group` Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt.

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

Als nächstes gestalten wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `33%` der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des linkesten sichtbaren Elements an die linke Kante des Containers schnallt, wenn der Inhalt gescrollt wird.

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

Schließlich gestalten wir den Marker des derzeit gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse ansprechen.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Benutzerdefinierte Scroll-Markierungsnummerierung und Stil

Dieses Beispiel ist dasselbe wie das vorherige, außer dass wir einige unterschiedliche Stile auf die Scroll-Marker angewendet und [CSS-Zähler](/de/docs/Web/CSS/CSS_lists) verwendet haben, um die auf jedem Marker gezeigte Nummer zu inkrementieren. Die CSS-Unterschiede werden im nächsten Abschnitt erklärt.

### CSS

In diesem Beispiel setzen wir einen Namen eines Zählers, den wir auf jedem `<li>` inkrementieren möchten — `markers` — mit der {{cssxref("counter-increment")}} Eigenschaft:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Dann setzen wir die {{cssxref("content")}} Eigenschaft des `::scroll-marker` Pseudo-Elements auf die {{cssxref("counter()")}} Funktion, indem wir den `markers` Zählernamen als Argument übergeben. Dies hat den Effekt, eine Nummer in jeden Marker einzufügen, die sich automatisch inkrementiert. Der Rest des Stils ist rudimentär, illustriert jedoch, wie die Marker vollständig gestaltet werden können.

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

Für eine weitere interessante Anpassung fügen wir zwei Regeln ein, um den Marker der ersten und letzten Listenelemente auszuwählen, indem wir {{cssxref(":first-child")}} und {{cssxref(":last-child")}} in die Selektorkette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten Marker den Textinhalt "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um die Benutzererfahrung zu verbessern, setzen wir eine andere Farbe auf die Marker bei {{cssxref(":hover")}} und verwenden die `:target-current` Pseudo-Klasse, um eine andere {{cssxref("color")}} und {{cssxref("background-color")}} auf dem Marker des aktuell gescrollten Elements festzulegen, damit Benutzer wissen, welches Element derzeit angezeigt wird:

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
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
