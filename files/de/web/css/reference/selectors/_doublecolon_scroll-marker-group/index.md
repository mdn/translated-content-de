---
title: "`::scroll-marker-group` CSS pseudo-element"
short-title: ::scroll-marker-group
slug: Web/CSS/Reference/Selectors/::scroll-marker-group
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert und enthält alle {{cssxref("::scroll-marker")}} Pseudo-Elemente, die auf Nachfahren des Scroll-Containers generiert werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudo-Element eines Scroll-Containers repräsentiert einen **Scroll-Marker-Gruppencontainer**. Dies ist ein Container, der automatisch alle {{cssxref("::scroll-marker")}} Pseudo-Elemente enthält, die auf ihm selbst oder seinen Nachfahren generiert wurden. Dadurch können sie als Gruppe positioniert und gestylt werden. Dieses Pseudo-Element wird typischerweise verwendet, wenn ein CSS-Karussell erstellt wird, um einen Scroll-Positionsindikator bereitzustellen. Die individuellen Scroll-Marker können verwendet werden, um zu ihren zugeordneten Inhaltsobjekten zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}}-Eigenschaft auf einen Wert ungleich `none` setzen, damit das `::scroll-marker-group` Pseudo-Element generiert wird. Der {{cssxref("scroll-marker-group")}}-Wert bestimmt, wo der Scroll-Marker-Gruppencontainer in der Tabulatorreihenfolge und der Layout-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` setzt ihn an den Anfang, während `after` ihn ans Ende setzt.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Element erstellt werden, das eine Reihe von {{htmlelement("a")}}-Elementen enthält, indem {{cssxref("scroll-target-group")}} verwendet wird.

Als Best Practice für Barrierefreiheit sollten Sie die visuelle Position des Scroll-Marker-Gruppencontainers mit der Tabulatorreihenfolge abgleichen. Wenn die Gruppe am Anfang des Inhalts positioniert wird, setzen Sie sie mit `before` an den Anfang der Tabulatorreihenfolge. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie mit `after` ans Ende der Tabulatorreihenfolge.

Wenn ein Scroll-Marker-Gruppencontainer auf einem Scroll-Container mit der `scroll-marker-group`-Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Sie können mit der Tastatur <kbd>Tab</kbd> darauf zugreifen und dann mit den Pfeiltasten links und rechts (oder oben und unten) zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Buttons wie erwartet ändert. Die Scroll-Marker können auch normal durchgetabt werden, wie erwartet.

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellen von Karussell-Scroll-Markern

Dieses Demo ist ein Karussell von einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben Scroll-Marker eingefügt, um es dem Benutzer zu ermöglichen, mit einem Klick auf einen Marker zu einer beliebigen Seite zu navigieren.

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

Wir konvertieren unser `<ul>` zuerst in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen, um eine einzelne, nicht umbruchende Reihe von `<li>`-Elementen zu erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass wenn die Elemente den Container auf der x-Achse überschreiten, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass die Elemente immer in Position einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `100%` der Breite des Containers ausfüllen zu lassen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers schnappt, wenn der Inhalt gescrollt wird.

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

Als nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Tabulator- und Layout-Box-Reihenfolge platziert wird; dies bedeutet, dass es nach den Scroll-Buttons kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group`-Pseudo-Element der Liste mit Flexbox layoutet, mit einem {{cssxref("justify-content")}}-Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) zentriert innerhalb der `::scroll-marker-group` mit einem Abstand zwischen jedem liegen.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes werden die Scroll-Marker selbst gestylt. Das Aussehen jedes einzelnen wird durch Festlegen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}}, und {{cssxref("border-radius")}} gehandhabt, aber wir müssen auch einen Wert ungleich `none` für die {{cssxref("content")}}-Eigenschaft setzen, damit sie tatsächlich generiert werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, da sie als Flex-Elemente layoutet werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, womit hervorgehoben wird, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als gefüllter Kreis gestylt wird.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Resultat

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung des Scroll-Marker-Gruppencontainers mit Anker-Positionierung

Dieses Beispiel erweitert das vorherige und demonstriert die Verwendung von [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), um den Scroll-Marker-Gruppencontainer relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell mit CSS-Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Wir positionieren dann die Gruppe relativ zum Scroll-Container in der Blockrichtung, indem wir einen {{cssxref("top")}}-Wert setzen, der eine {{cssxref("anchor()")}} Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}}-Wert von `anchor-center` hinzu, der die Gruppe in der Inline-Richtung im Mittelpunkt des Scroll-Containers ausrichtet.

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

#### Resultat

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
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
