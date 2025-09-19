---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: ad57cae3faaec374c3e712d6994e7fc3cb9318db
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

Das **`::scroll-marker-group`** Pseudo-Element eines Scroll-Containers repräsentiert einen **Scroll-Marker-Gruppencontainer**. Dies ist ein Container, der automatisch alle {{cssxref("::scroll-marker")}} Pseudo-Elemente enthält, die auf ihm selbst oder seinen Nachkommen erzeugt werden. Dadurch können sie als Gruppe positioniert und gestaltet werden. Dieses Pseudo-Element wird typischerweise verwendet, um eine CSS-Karussell zu erstellen, das einen Scroll-Positionsanzeiger bereitstellt. Die einzelnen Scroll-Marker können verwendet werden, um zu den zugehörigen Inhaltelementen zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}} Eigenschaft auf einen Wert ungleich `none` gesetzt haben, damit das `::scroll-marker-group` Pseudo-Element erzeugt wird. Der {{cssxref("scroll-marker-group")}} Wert bestimmt, wo der Scroll-Marker-Gruppencontainer in der Tab-Reihenfolge und Layout-Box-Reihenfolge des Karussells erscheint (nicht jedoch in der DOM-Struktur) — `before` platziert ihn am Anfang, während `after` ihn am Ende platziert.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppencontainer aus einem vorhandenen Element erzeugt werden, das eine Menge von {{htmlelement("a")}} Elementen mit der {{cssxref("scroll-target-group")}} enthält.

Als beste Praxis für die Barrierefreiheit gleichen Sie die visuelle Anzeigeposition des Scroll-Marker-Gruppencontainers mit der Tab-Reihenfolge ab. Wenn Sie die Gruppe am Anfang des Inhalts positionieren, platzieren Sie sie am Anfang der Tab-Reihenfolge mit `before`. Wenn Sie die Gruppe am Ende des Inhalts positionieren, platzieren Sie sie am Ende der Tab-Reihenfolge mit `after`.

Wenn ein Scroll-Marker-Gruppencontainer mit der `scroll-marker-group`-Eigenschaft auf einem Scroll-Container erzeugt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik dargestellt. Sie können mit der Tastatur <kbd>Tab</kbd> zu ihm navigieren und dann mit den linken und rechten (oder oben und unten) Pfeiltasten zwischen den verschiedenen "Seiten" wechseln, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Buttons wie erwartet ändert. Die Scroll-Marker können auch wie erwartet zwischen Tab-Tasten navigiert werden.

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für andere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Erstellen von Karussell-Scroll-Markern

Diese Demo ist ein Karussell einzelner Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben Scroll-Marker hinzugefügt, um dem Benutzer zu ermöglichen, mit einem Klick auf einen Marker zu einer beliebigen Seite zu navigieren.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispieldaten enthält:

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

Zuerst konvertieren wir unsere `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbrechende Reihe von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente auf der x-Achse ihren Container überlaufen, der Inhalt horizontal scrollt. Wir konvertieren dann die `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass die Elemente immer an Ort und Stelle schnappen, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>`-Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `100%` der Breite des Containers auszufüllen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Als nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Tabulatorreihenfolge und Layout-Box-Reihenfolge platziert wird; das bedeutet, dass es nach den Scroll-Buttons kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Dann wird das `::scroll-marker-group` Pseudo-Element der Liste mit Flexbox ausgelegt, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) innerhalb des `::scroll-marker-group` zentriert sind, mit einem Abstand zwischen jedem.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes werden die Scroll-Marker selbst gestylt. Das Aussehen jedes einzelnen wird durch Setzen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} gehandhabt, aber wir müssen auch einen Wert ungleich `none` für die {{cssxref("content")}} Eigenschaft setzen, damit sie tatsächlich erzeugt werden.

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
> Erzeugte Inhalte sind standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Items angeordnet werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um den Scroll-Marker auszuwählen, der der momentan sichtbaren "Seite" entspricht, und den Fortschritt des Benutzers durch den Inhalt zu markieren. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt ist.

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

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell mit CSS-Ankerpositionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der zum {{cssxref("anchor-name")}} der `<ul>` passt. Dann positionieren wir die Gruppe relativ zum Scroll-Container in Block-Richtung, indem wir einen {{cssxref("top")}} Wert einstellen, der eine {{cssxref("anchor()")}} Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe im Inline-Format auf die Mitte des Scroll-Containers ausrichtet.

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
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
