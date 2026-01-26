---
title: ::scroll-marker-group
slug: Web/CSS/Reference/Selectors/::scroll-marker-group
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert und enthält alle {{cssxref("::scroll-marker")}} Pseudo-Elemente, die bei Nachkommen des Scroll-Containers generiert werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudo-Element eines Scroll-Containers repräsentiert einen **Scroll-Marker-Gruppencontainer**. Dies ist ein Container, der automatisch alle auf sich selbst oder seinen Nachkommen generierten {{cssxref("::scroll-marker")}} Pseudo-Elemente enthält. Dadurch können sie als Gruppe positioniert und gestaltet werden. Dieses Pseudo-Element wird typischerweise verwendet, um bei der Erstellung eines CSS-Karussells einen Scroll-Positionsindikator bereitzustellen. Die einzelnen Scroll-Markierungen können verwendet werden, um zu ihren zugehörigen Inhaltsobjekten zu navigieren.

Der Scroll-Container muss die {{cssxref("scroll-marker-group")}}-Eigenschaft auf einen Wert ungleich `none` gesetzt haben, damit das `::scroll-marker-group` Pseudo-Element generiert wird. Der {{cssxref("scroll-marker-group")}}-Wert bestimmt, wo der Scroll-Marker-Gruppencontainer in der Tab-Reihenfolge und in der Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert ihn am Anfang, während `after` ihn am Ende platziert.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Element erstellt werden, das eine Gruppe von {{htmlelement("a")}}-Elementen enthält, unter Verwendung von {{cssxref("scroll-target-group")}}.

Als bewährte Methode für die Barrierefreiheit sollte die visuelle Position des Scroll-Marker-Gruppencontainers mit der Tab-Reihenfolge übereinstimmen. Wenn die Gruppe am Anfang des Inhalts positioniert wird, setzen Sie sie mit `before` am Anfang der Tab-Reihenfolge. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie mit `after` am Ende der Tab-Reihenfolge.

Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container mit der `scroll-marker-group` Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Sie können mit der Tastatur zu ihm <kbd>Tab</kbd> wechseln und dann mit den Links- und Rechts- (oder Auf- und Ab-) Pfeiltasten zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Markierungen und Scroll-Tasten wie erwartet ändert. Die Scroll-Markierungen können auch wie erwartet normal über die Tab-Taste durchlaufen werden.

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellung von Karussell-Scroll-Markierungen

Diese Demo zeigt ein Karussell mit einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben Scroll-Markierungen hinzugefügt, um den Benutzer zu ermöglichen, mit einem Klick auf eine Markierung zu einer beliebigen Seite zu navigieren.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) , wobei jeder [Listeneintrag](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Wir wandeln zuerst unsere `<ul>` in ein Karussell um, indem wir den {{cssxref("display")}} auf `flex` setzen, wodurch eine einzelne, nicht umschließende Zeile von `<li>`-Elementen entsteht. Die {{cssxref("overflow-x")}}-Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass der Inhalt horizontal scrollt, wenn die Elemente an der x-Achse ihren Container überlaufen. Dann wandeln wir die `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, der sicherstellt, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}}-Eigenschaft verwenden, um sie `100%` der Breite des Containers ausfüllen zu lassen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhalts an die linke Kante des Containers anrastet.

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

Der nächsten Schritt besteht darin, die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` zu setzen, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Tab-Reihenfolge und der Layout-Box-Reihenfolge platziert wird; das bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Anschließend wird das `::scroll-marker-group` Pseudo-Element der Liste mit Flexbox ausgelegt, wobei ein {{cssxref("justify-content")}} Wert von `center` und ein {{cssxref("gap")}} von `20px` verwendet wird, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) in der Mitte des `::scroll-marker-group` mit einem Abstand zwischen jedem positioniert sind.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Die Scroll-Markierungen selbst werden danach gestylt. Das Aussehen jeder Markierung wird durch die Einstellungen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} gehandhabt, aber wir müssen auch einen Wert ungleich `none` für die {{cssxref("content")}} Eigenschaft setzen, damit sie tatsächlich generiert werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, da sie als Flexitems ausgelegt werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudoklasse verwendet, um die Scroll-Markierung auszuwählen, die der aktuell sichtbaren "Seite" entspricht und zeigt, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt wird.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionieren des Scroll-Marker-Gruppencontainers mit Anker-Positionierung

Dieses Beispiel erweitert das vorhergehende und zeigt die Verwendung der [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), um den Scroll-Marker-Gruppencontainer relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell unter Verwendung der CSS Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} der `<ul>` übereinstimmt. Wir positionieren dann die Gruppe relativ zum Scroll-Container in Blockrichtung, indem wir einen {{cssxref("top")}} Wert setzen, der eine {{cssxref("anchor()")}} Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe im Inline-Richtung im Zentrum des Scroll-Containers ausrichtet.

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
- {{cssxref(":target-before")}}
- {{cssxref(":target-after")}}
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
