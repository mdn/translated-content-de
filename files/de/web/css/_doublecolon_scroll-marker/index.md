---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Das **`::scroll-marker`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) kann innerhalb jedes Elements erzeugt werden und repräsentiert dessen Scroll-Marker. Alle Elemente können ein `::scroll-marker` Pseudo-Element haben, das in die {{cssxref("::scroll-marker-group")}} des nächsten Vorfahren {{Glossary("scroll_container", "Scroll-Containers")}} platziert wird. Ein Scroll-Marker verhält sich wie ein Anker ({{htmlelement("a")}}-Element), dessen Scroll-Ziel das ursprüngliche Element des Markers ist – und scrollt den Scroll-Container zu diesem Element, wenn es aktiviert wird.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Beschreibung

Ein `::scroll-marker` wird auf einem Element erzeugt, wenn die {{cssxref("content")}} Eigenschaft des `::scroll-marker` auf einen Wert ungleich `none` gesetzt ist und ein Vorfahren-Scroll-Container mit einem `::scroll-marker-group`-Eigenschaftswert ungleich `none` vorhanden ist (was bedeutet, dass es ein {{cssxref("::scroll-marker-group")}} Pseudo-Element erzeugen wird).

Das `::scroll-marker-group` Pseudo-Element des Scroll-Containers enthält automatisch alle `::scroll-marker` Pseudo-Elemente des Scroll-Containers oder seiner Nachkommen. Dadurch können sie gruppiert positioniert und layoutet werden und werden typischerweise verwendet, um bei der Erstellung eines CSS-Karussells einen Scroll-Positions-Indikator zu erstellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhalts-Elementen zu navigieren.

In Bezug auf Barrierefreiheit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit <kbd>Tab</kbd> zur Gruppe navigieren, verhält sie sich wie ein einzelnes Element (das heißt, ein weiterer Druck auf die <kbd>Tab</kbd>-Taste bewegt sich an der Gruppe vorbei zum nächsten Element), und Sie können zwischen den verschiedenen Scroll-Markers mit den Pfeiltasten links und rechts (oder oben und unten) wechseln.

## Beispiele

Sehen Sie [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellen von Karussell-Scroll-Markern

In diesem Beispiel zeigen wir, wie Scroll-Marker auf einem CSS-Karussell erstellt werden.

#### HTML

Wir haben eine einfache HTML {{htmlelement("ul")}} Liste mit mehreren {{htmlelement("li")}} Listenelementen.

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

Wir wandeln unser `<ul>` in eine Scroll-Snapping-Overflow-Container um, indem wir {{cssxref("display")}} auf `flex` setzen, wodurch eine einzige, nicht umbrochene Zeile von `<li>`-Elementen erstellt wird. Die Eigenschaft {{cssxref("overflow-x")}} ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollen wird. Wir wandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, um sicherzustellen, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scroll-Marker-Gruppe mit der Eigenschaft `scroll-marker-group`, wobei die Gruppe nach dem gesamten Inhalt platziert wird.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie auf `33%` der Containerbreite einzustellen. Der {{cssxref("scroll-snap-align")}} Wert `start` sorgt dafür, dass die linke Seite des am weitesten links gelegenen sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das `::scroll-marker` Pseudo-Element, um für jedes Listenelement einen quadratischen Marker mit rotem Rand zu erstellen:

```css live-sample___creating-scroll-markers
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Wir wenden auch Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in der Mitte der Zeile mit einem Abstand von `0.4em` zwischen jedem anzuordnen:

```css live-sample___creating-scroll-markers live-sample___custom-numbering
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Schließlich stylen wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse anvisieren.

```css live-sample___creating-scroll-markers
::scroll-marker:target-current {
  background: red;
}
```

#### Ergebnis

{{EmbedLiveSample("creating-scroll-markers", '', '200')}}

### Anpassung der Scroll-Markernummerierung und -stil

Dieses Beispiel ist das gleiche wie das vorherige, mit dem Unterschied, dass wir einige andere Stile auf die Scroll-Marker angewendet und [CSS-Zähler](/de/docs/Web/CSS/CSS_lists) verwendet haben, um die auf jedem Marker angezeigte Zahl zu inkrementieren. Die Unterschiede im CSS werden im nächsten Abschnitt erklärt.

### CSS

In diesem Beispiel setzen wir einen Namen eines Zählers, den wir bei jedem `<li>` inkrementieren wollen — `markers` — durch die Eigenschaft {{cssxref("counter-increment")}}:

```css live-sample___custom-numbering
li {
  counter-increment: markers;
}
```

Wir setzen dann die {{cssxref("content")}} Eigenschaft des `::scroll-marker` Pseudo-Elements auf die {{cssxref("counter()")}} Funktion, indem wir den `markers` Zählernamen als Argument übergeben. Dadurch wird eine Zahl in jeden Marker eingefügt, die sich automatisch erhöht. Der Rest des Stylings ist rudimentär, aber es verdeutlicht, wie die Marker vollständig gestylt werden können.

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

Für eine weitere interessante Anpassung fügen wir zwei Regeln ein, um den Marker des ersten und letzten Listenelements zu selektieren, indem wir {{cssxref(":first-child")}} und {{cssxref(":last-child")}} in die Selektorkette einfügen. Wir geben dem ersten Marker den Textinhalt "First" und dem letzten Marker den Textinhalt "Last".

```css live-sample___custom-numbering
li:first-child::scroll-marker {
  content: "First";
}

li:last-child::scroll-marker {
  content: "Last";
}
```

Um die Benutzererfahrung zu verbessern, setzen wir eine andere Farbe auf die Marker bei {{cssxref(":hover")}} und verwenden die `:target-current` Pseudo-Klasse, um eine andere {{cssxref("color")}} und {{cssxref("background-color")}} auf den Marker des aktuell gescrollten Elements zu setzen, sodass Benutzer wissen, welches Element gerade sichtbar ist:

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
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) via chrome.dev (2025)
