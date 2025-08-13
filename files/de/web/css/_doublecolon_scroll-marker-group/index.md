---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt und enthält alle {{cssxref("::scroll-marker")}} Pseudo-Elemente, die an Nachfahren des Scroll-Containers erzeugt werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudo-Element eines Scroll-Containers repräsentiert eine **Scroll-Marker-Gruppe**. Dies ist ein Container, der automatisch alle {{cssxref("::scroll-marker")}} Pseudo-Elemente enthält, die auf sich selbst oder seinen Nachfahren erzeugt werden. Dies ermöglicht es, sie als Gruppe zu positionieren und anzuordnen und wird typischerweise verwendet, um in einem CSS-Karussell einen Scrollpositionsindikator bereitzustellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltselementen zu navigieren.

Der Scroll-Container muss die {{cssxref("scroll-marker-group")}} Eigenschaft auf einen Wert ungleich `none` gesetzt haben, damit das `::scroll-marker-group` Pseudo-Element erzeugt wird. Der {{cssxref("scroll-marker-group")}} Wert bestimmt, wo die Scroll-Marker-Gruppe in der Tab-Reihenfolge und Layout-Box-Reihenfolge (aber nicht in der DOM-Struktur) des Karussells erscheint — `before` platziert sie am Anfang, während `after` sie am Ende platziert.

Es ist eine bewährte Praxis, die visuelle Darstellungsposition der Scroll-Marker-Gruppe mit der Tab-Reihenfolge abzugleichen. Wenn die Gruppe am Anfang des Inhalts positioniert wird, setzen Sie sie mit `before` an den Anfang der Tab-Reihenfolge. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie mit `after` an das Ende der Tab-Reihenfolge.

In Bezug auf Barrierefreiheit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit der <kbd>Tab</kbd>-Taste zur Gruppe navigieren, verhält sie sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste bewegt sich über die Gruppe zum nächsten Element), und Sie können mit den Pfeil-Tasten nach links und rechts (oder nach oben und unten) zwischen den verschiedenen Scroll-Markern wechseln.

## Beispiele

Siehe [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für andere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellen von Karussell-Scroll-Markern

Dieses Demo zeigt ein Karussell mit einzelnen Seiten, wobei jedes Element die ganze Seite einnimmt. Wir haben Scroll-Marker hinzugefügt, um dem Benutzer zu ermöglichen, mit einem Klick auf einen Marker zu einer beliebigen Seite zu navigieren.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Zuerst wandeln wir unser `<ul>` in ein Karussell um, indem wir die {{cssxref("display")}} Eigenschaft auf `flex` setzen, was eine einzige, nicht überlappende Zeile von `<li>` Elementen erstellt. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überschreiten, der Inhalt horizontal scrollt. Wir wandeln das `<ul>` dann in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um und stellen sicher, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>` Elemente und verwenden die {{cssxref("flex")}} Eigenschaft, um sie `100%` der Breite des Containers einzunehmen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhalts an die linke Kante des Containers einrastet.

```css live-sample___carousel-example live-sample___carousel-example_final
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 100%;
  height: 200px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

Anschließend wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Tab-Reihenfolge und Layout-Box-Reihenfolge positioniert wird; das bedeutet, dass es nach den Scroll-Tasten kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste mithilfe des Flexbox-Layouts positioniert, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) zentriert innerhalb der `::scroll-marker-group` mit einem Abstand zwischen jedem einzelnen positioniert sind.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Darüber hinaus werden die Scroll-Marker selbst gestylt. Das Aussehen jedes einzelnen wird durch die Einstellungen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} gesteuert, aber wir müssen auch einen Wert ungleich `none` für die {{cssxref("content")}} Eigenschaft festlegen, damit sie tatsächlich generiert werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Elemente angeordnet sind.

Abschließend wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, und anzuzeigen, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass es als ausgefüllter Kreis erscheint.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung der Scroll-Marker-Gruppe mit Anker-Positionierung

Dieses Beispiel erweitert das vorherige und zeigt die Verwendung der [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), um die Scroll-Marker-Gruppe relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell mit CSS Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Wir positionieren die Gruppe dann relativ zum Scroll-Container in der Blockrichtung, indem wir einen {{cssxref("top")}} Wert setzen, der eine {{cssxref("anchor()")}} Funktion enthält. Zudem fügen wir einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe in der Inline-Richtung im Zentrum des Scroll-Containers ausrichtet.

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Karussell Galerie](https://chrome.dev/carousel/) via chrome.dev (2025)
