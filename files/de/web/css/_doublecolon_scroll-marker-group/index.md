---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{CSSRef}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt und enthält alle {{cssxref("::scroll-marker")}} Pseudoelemente, die bei Nachkommen des Scroll-Containers erzeugt werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudoelement eines Scroll-Containers repräsentiert eine **Scroll-Marker-Gruppe**. Dies ist ein Container, der automatisch alle {{cssxref("::scroll-marker")}} Pseudoelemente enthält, die auf sich selbst oder seinen Nachkommen erzeugt werden. Dies ermöglicht es, sie als Gruppe zu positionieren und anzuordnen, und wird typischerweise verwendet, wenn ein CSS-Karussell erstellt wird, um einen Scroll-Positionsanzeiger bereitzustellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltselementen zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}} Eigenschaft auf einen Wert ungleich `none` gesetzt haben, damit das `::scroll-marker-group` Pseudoelement erzeugt wird. Der {{cssxref("scroll-marker-group")}} Wert bestimmt, wo die Scroll-Marker-Gruppe in der Tabulatorreihenfolge und der Layout-Box-Ordnung (aber nicht in der DOM-Struktur) des Karussells erscheint — `before` platziert sie am Anfang, während `after` sie am Ende platziert.

Es ist eine bewährte Praxis, die visuelle Rendering-Position der Scroll-Marker-Gruppe mit der Tabulatorreihenfolge abzustimmen. Wenn Sie die Gruppe am Anfang des Inhalts positionieren, setzen Sie sie mit `before` an den Anfang der Tabulatorreihenfolge. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie mit `after` ans Ende der Tabulatorreihenfolge.

Hinsichtlich der Barrierefreiheit werden die Scroll-Marker-Gruppe und die enthaltenen Scroll-Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit der <kbd>Tab</kbd>-Taste zur Gruppe navigieren, verhält sie sich wie ein einzelnes Element (das heißt, ein weiteres Drücken der <kbd>Tab</kbd>-Taste bewegt sich an der Gruppe vorbei zum nächsten Element), und Sie können mit den Links- und Rechts- (oder Auf- und Abwärts-) Cursortasten zwischen den verschiedenen Scroll-Markern wechseln.

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für andere Beispiele, die das `::scroll-marker` Pseudoelement verwenden.

### Erstellen von Karussell-Scroll-Markern

Dieses Demo ist ein Karussell mit einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben Scroll-Marker hinzugefügt, um es dem Benutzer zu ermöglichen, mit einem Klick auf einen Marker zu jeder Seite zu navigieren.

#### HTML

Das HTML besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), bei der jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einen Beispielinhalt enthält:

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

Wir konvertieren zuerst unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen, wodurch eine einzige, nicht umbruchende Reihe von `<li>` Elementen entsteht. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überschreiten, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, indem wir sicherstellen, dass Inhalte immer dann einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `100%` der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements zur linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Als nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudoelement nach dem DOM-Inhalt der Liste in der Tabulatorordnung und Layout-Box-Ordnung platziert wird; das bedeutet, dass es nach den Scroll-Tasten kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudoelement der Liste mit Flexbox gestaltet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudoelemente) zentriert innerhalb der `::scroll-marker-group` mit einem Abstand dazwischen ausgerichtet sind.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes werden die Scroll-Marker selbst gestylt. Das Aussehen jedes einzelnen wird durch Einstellen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} behandelt, aber wir müssen auch einen non-`none` Wert für die {{cssxref("content")}}, Eigenschaft setzen, damit sie tatsächlich erzeugt werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Elemente gestaltet werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudoklasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren "Seite" entspricht, und zeigt an, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass es als ausgefüllter Kreis gestylt wird.

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

Das `::scroll-marker-group` Pseudoelement der Liste wird relativ zum Karussell mit CSS Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der dem {{cssxref("anchor-name")}} des `<ul>` entspricht. Dann positionieren wir die Gruppe relativ zum Scroll-Container in der Blockrichtung, indem wir einen {{cssxref("top")}}-Wert setzen, der eine {{cssxref("anchor()")}}-Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe im Inline-Bereich zentriert im Scroll-Container ausrichtet.

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
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
