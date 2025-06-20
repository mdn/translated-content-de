---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt und enthält alle {{cssxref("::scroll-marker")}}-Pseudoelemente, die an Nachkommen des Scroll-Containers generiert werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`**-Pseudoelement eines Scroll-Containers repräsentiert eine **Scroll-Marker-Gruppe**. Dies ist ein Container, der automatisch alle {{cssxref("::scroll-marker")}}-Pseudoelemente enthält, die an sich selbst oder seinen Nachkommen generiert werden. Dies ermöglicht es, sie als Gruppe zu positionieren und zu layouten und wird typischerweise verwendet, um ein CSS-Karussell zu erstellen, das einen Scrollpositionsindikator bietet. Die einzelnen Scroll-Marker können verwendet werden, um zu den zugehörigen Inhaltselementen zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}}-Eigenschaft auf einen Wert ungleich `none` setzen, damit das `::scroll-marker-group`-Pseudoelement generiert wird. Der Wert von {{cssxref("scroll-marker-group")}} bestimmt, wo die Scroll-Marker-Gruppe in der Tab- und Layoutboxreihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, während `after` sie am Ende platziert.

Es ist eine bewährte Praxis, die visuelle Position der Scroll-Marker-Gruppe mit der Tab-Reihenfolge abzugleichen. Wenn Sie die Gruppe am Anfang des Inhalts positionieren, setzen Sie sie mit `before` an den Anfang der Tab-Reihenfolge. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie mit `after` an das Ende der Tab-Reihenfolge.

Im Hinblick auf die Barrierefreiheit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik gerendert. Wenn Sie mit <kbd>Tab</kbd> zur Gruppe wechseln, verhält sie sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste wird die Gruppe überspringen und zum nächsten Element wechseln), und Sie können mit den Pfeiltasten links und rechts (oder auf und ab) zwischen den verschiedenen Scroll-Markern navigieren.

## Beispiele

Sehen Sie [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Beispiele, die das `::scroll-marker`-Pseudoelement verwenden.

### Erstellen von Karussell-Scroll-Markern

Dieses Demo ist ein Karussell aus einzelnen Seiten, wobei jedes Element die volle Seite einnimmt. Wir haben Scroll-Marker hinzugefügt, um dem Benutzer zu ermöglichen, mit einem Klick auf einen Marker zu einer beliebigen Seite zu navigieren.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) ein Beispielinhalt enthält:

```html live-sample___carousel-example live-sample___carousel-example_final
<ul>
  <li>
    <h2>Page 1</h2>
  </li>
  <li>
    <h2>Page 2</h2>
  </li>
  <li>
    <h2>Page 3</h2>
  </li>
  <li>
    <h2>Page 4</h2>
  </li>
</ul>
```

#### CSS

Zuerst verwandeln wir unser `<ul>` in ein Karussell, indem wir {{cssxref("display")}} auf `flex` setzen, wodurch eine einzelne, nicht umgebrochene Zeile von `<li>`-Elementen erstellt wird. Die Eigenschaft {{cssxref("overflow-x")}} ist auf `auto` gesetzt, was bedeutet, dass sich der Inhalt horizontal scrollt, wenn die Elemente ihren Container auf der x-Achse überlaufen. Wir verwandeln das `<ul>` dann in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

```css hidden live-sample___carousel-example live-sample___carousel-example_final
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

Als nächstes gestalten wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie `100%` der Breite des Containers ausfüllen zu lassen. Der {{cssxref("scroll-snap-align")}}-Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

```css live-sample___carousel-example live-sample___carousel-example_final
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 100%;
  height: 200px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

Als nächstes wird die {{cssxref("scroll-marker-group")}}-Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group`-Pseudoelement nach dem DOM-Inhalt der Liste in der Tab- und Layoutbox-Reihenfolge platziert wird; das bedeutet, dass es nach den Scroll-Schaltflächen erscheint:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group`-Pseudoelement der Liste mit Flexbox ausgelegt, unter Verwendung eines {{cssxref("justify-content")}}-Werts von `center` und eines {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}}-Pseudoelemente) mit einem Abstand dazwischen zentriert in der `::scroll-marker-group` sind.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes werden die Scroll-Marker selbst gestylt. Das Aussehen eines jeden wird durch das Setzen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} erreicht, aber wir müssen auch einen Wert ungleich `none` für die {{cssxref("content")}}-Eigenschaft setzen, damit sie tatsächlich generiert werden.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker {
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  content: "";
}
```

> [!NOTE]
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Elemente angeordnet werden.

Schließlich wird die {{cssxref(":target-current")}}-Pseudoklasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren „Seite“ entspricht, um hervorzuheben, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als gefüllter Kreis dargestellt wird.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung der Scroll-Marker-Gruppe mit Ankerpositionierung

Dieses Beispiel erweitert das vorherige und zeigt die Verwendung der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), um die Scroll-Marker-Gruppe relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group`-Pseudoelement der Liste wird relativ zum Karussell unter Verwendung der CSS-Ankerpositionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Anschließend positionieren wir die Gruppe relativ zum Scroll-Container in der Blockrichtung durch Setzen eines {{cssxref("top")}}-Wertes, der eine {{cssxref("anchor()")}}-Funktion umfasst. Wir fügen auch einen {{cssxref("justify-self")}}-Wert von `anchor-center` hinzu, der die Gruppe im Inline-Richtung zentriert zum Scroll-Container ausrichtet.

```css live-sample___carousel-example_final
ul {
  anchor-name: --myCarousel;
}

ul::scroll-marker-group {
  /* From the previous example */
  display: flex;
  gap: 20px;

  position: absolute;
  position-anchor: --myCarousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example_final", "100%", "260px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
