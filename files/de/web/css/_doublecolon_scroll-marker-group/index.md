---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt und enthält alle {{cssxref("::scroll-marker")}} Pseudo-Elemente, die auf Nachkommen des Scroll-Containers erzeugt werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das Pseudo-Element **`::scroll-marker-group`** eines Scroll-Containers repräsentiert eine **Scroll-Marker-Gruppe**. Dies ist ein Container, der automatisch alle auf ihm selbst oder seinen Nachkommen erzeugten {{cssxref("::scroll-marker")}} Pseudo-Elemente enthält. Dies ermöglicht, dass sie als Gruppe positioniert und layoutet werden, und wird typischerweise verwendet, um in einem CSS-Karussell einen Scroll-Positionsindikator bereitzustellen. Mit den einzelnen Scroll-Markern kann zu den zugehörigen Inhaltsobjekten navigiert werden.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}} Eigenschaft auf einen nicht-`none` Wert gesetzt haben, damit das `::scroll-marker-group` Pseudo-Element erzeugt wird. Der Wert von {{cssxref("scroll-marker-group")}} bestimmt, wo die Scroll-Marker-Gruppe in der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) – `before` setzt sie an den Anfang, während `after` sie ans Ende setzt.

Es ist eine gute Praxis, die visuelle Rendering-Position der Scroll-Marker-Gruppe mit der Tab-Reihenfolge abzustimmen. Wenn die Gruppe am Anfang des Inhalts positioniert wird, setzen Sie sie mit `before` an den Anfang der Tab-Reihenfolge. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie mit `after` ans Ende der Tab-Reihenfolge.

Aus Sicht der Barrierefreiheit wird die Scroll-Marker-Gruppe mit den Semantiken [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) gerendert. Wenn Sie mit der <kbd>Tab</kbd>-Taste zur Gruppe wechseln, verhält sie sich wie ein einzelnes Element (das heißt, ein weiterer Druck auf die <kbd>Tab</kbd>-Taste bewegt sich über die Gruppe hinaus zum nächsten Element), und Sie können zwischen den verschiedenen Scroll-Markern mit den Pfeiltasten links und rechts (oder oben und unten) wechseln.

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für andere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellung von Karussell-Scroll-Markern

Dieses Demo ist ein Karussell einzelner Seiten, wobei jedes Element die ganze Seite einnimmt. Wir haben Scroll-Marker eingefügt, um dem Benutzer zu ermöglichen, zu jeder Seite mit einem Klick auf einen Marker zu navigieren.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), bei der jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Zuerst konvertieren wir unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen, wodurch eine einzelne, nicht umbrechende Zeile von `<li>`-Elementen entsteht. Die Eigenschaft {{cssxref("overflow-x")}} wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Dann konvertieren wir das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, der sicherstellt, dass die Elemente immer an ihrem Platz einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie auf `100%` der Breite des Containers zu bringen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des linkesten sichtbaren Elements an der linken Kante des Containers festgesetzt wird, wenn der Inhalt gescrollt wird.

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

Als nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Tabulator- und Layout-Box-Reihenfolge platziert wird; das bedeutet, dass es nach den Scroll-Buttons kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste mit Flexbox layoutet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) in der Mitte der `::scroll-marker-group` zentriert werden mit einem Abstand zwischen jedem Element.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes werden die Scroll-Marker selbst gestylt. Das Aussehen jedes einzelnen wird festgelegt, indem {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} gesetzt werden, aber wir müssen auch einen nicht-`none` Wert für die {{cssxref("content")}}-Eigenschaft setzen, damit sie tatsächlich generiert werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Items layoutet werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um denjenigen Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, und anzuzeigen, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgemalter Kreis gestaltet ist.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung der Scroll-Marker-Gruppe mit Anker-Positionierung

Dieses Beispiel erweitert das vorherige und zeigt die Verwendung von [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), um die Scroll-Marker-Gruppe relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell unter Verwendung der CSS-Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Dann positionieren wir die Gruppe relativ zum Scroll-Container in der Blockrichtung, indem wir einen {{cssxref("top")}} Wert setzen, der eine {{cssxref("anchor()")}} Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, was die Gruppe in der Inline-Richtung in der Mitte des Scroll-Containers ausrichtet.

```css live-sample___carousel-example_final
ul {
  anchor-name: --my-carousel;
}

ul::scroll-marker-group {
  /* From the previous example */
  display: flex;
  gap: 20px;

  position: absolute;
  position-anchor: --my-carousel;
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
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
