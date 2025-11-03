---
title: ::scroll-marker-group
slug: Web/CSS/Reference/Selectors/::scroll-marker-group
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert und enthält alle {{cssxref("::scroll-marker")}} Pseudo-Elemente, die an Nachkommen des Scroll-Containers generiert werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudo-Element eines Scroll-Containers repräsentiert einen **Scroll-Marker-Gruppencontainer**. Dies ist ein Container, der automatisch alle an ihm selbst oder seinen Nachkommen generierten {{cssxref("::scroll-marker")}} Pseudo-Elemente enthält. Dadurch können sie als Gruppe positioniert und gestaltet werden. Dieses Pseudo-Element wird typischerweise verwendet, wenn ein CSS-Karussell erstellt wird, um einen Scroll-Positionsindikator bereitzustellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltsobjekten zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}} Eigenschaft auf einen anderen Wert als `none` setzen, damit das `::scroll-marker-group` Pseudo-Element generiert wird. Der {{cssxref("scroll-marker-group")}} Wert bestimmt, wo der Scroll-Marker-Gruppencontainer in der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` positioniert ihn am Anfang, während `after` ihn am Ende positioniert.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Element erstellt werden, das eine Menge von {{htmlelement("a")}} Elementen enthält, mithilfe von {{cssxref("scroll-target-group")}}.

Als Best Practice für die Barrierefreiheit sollten Sie die visuelle Rendering-Position des Scroll-Marker-Gruppencontainers mit der Tab-Reihenfolge abgleichen. Wenn Sie die Gruppe am Anfang des Inhalts positionieren, setzen Sie sie mit `before` an den Anfang der Tab-Reihenfolge. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie mit `after` an das Ende der Tab-Reihenfolge.

Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container mithilfe der `scroll-marker-group` Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantiken gerendert. Sie können mit der Tastatur mit <kbd>Tab</kbd> darauf zugreifen, dann mit den linken und rechten (oder oben und unten) Cursortasten zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Schaltflächen entsprechend ändert. Die Scroll-Marker können auch wie erwartet normal durch Tabulatoren bewegt werden.

## Beispiele

Siehe [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für andere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellen von Karussell-Scroll-Markern

Dieses Beispiel ist ein Karussell mit einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben Scroll-Marker eingebaut, um es dem Benutzer zu ermöglichen, mit einem Klick auf einen Marker zu einer beliebigen Seite zu navigieren.

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

Wir konvertieren zunächst unsere `<ul>` in ein Karussell, indem wir {{cssxref("display")}} auf `flex` setzen, was eine einzelne, nicht-umhüllende Zeile von `<li>` Elementen erstellt. Die Eigenschaft {{cssxref("overflow-x")}} wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Dann konvertieren wir die `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, der sicherstellt, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

```css hidden live-sample___carousel-example live-sample___carousel-example_final
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
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

Als Nächstes gestalten wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `100%` der Breite des Containers ausfüllen zu lassen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhalts an die linke Kante des Containers schnappen wird.

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

Anschließend wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Tab-Reihenfolge und der Layout-Box-Reihenfolge platziert wird; das bedeutet, es kommt nach den Scroll-Schaltflächen:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als Nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste mit Flexbox gestaltet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) im `::scroll-marker-group` zentriert sind mit einem Abstand zwischen jedem.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als Nächstes werden die Scroll-Marker selbst gestaltet. Das Aussehen jedes einzelnen wird durch das Setzen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} verwaltet, aber wir müssen auch einen anderen Wert als `none` für die {{cssxref("content")}} Eigenschaft setzen, damit sie tatsächlich erzeugt werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, da sie als Flex-Elemente angeordnet werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um denjenigen Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, was hervorhebt, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass es als ausgefüllter Kreis gestaltet ist.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung des Scroll-Marker-Gruppencontainers mit Ankerpositionierung

Dieses Beispiel erweitert das vorherige und demonstriert die Verwendung der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), um den Scroll-Marker-Gruppencontainer relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell mittels CSS-Ankerpositionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Dann positionieren wir die Gruppe relativ zum Scroll-Container in der Blockrichtung, indem wir einen {{cssxref("top")}} Wert festlegen, der eine {{cssxref("anchor()")}} Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, welcher die Gruppe im Inline-Richtung zum Zentrum des Scroll-Containers ausrichtet.

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
- {{cssxref("scroll-target-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Creating CSS carousels](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
