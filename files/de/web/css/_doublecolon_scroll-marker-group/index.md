---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert und enthält alle {{cssxref("::scroll-marker")}} Pseudoelemente, die bei Nachkommen des Scroll-Containers generiert werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudoelement eines Scroll-Containers repräsentiert eine **Scroll-Markierungsgruppe**. Dies ist ein Container, der automatisch alle {{cssxref("::scroll-marker")}} Pseudoelemente enthält, die auf ihm selbst oder seinen Nachkommen generiert werden. Dies ermöglicht es ihnen, als Gruppe positioniert und layoutet zu werden und wird typischerweise bei der Erstellung eines CSS-Karussells verwendet, um einen Scroll-Positionsanzeiger bereitzustellen. Die einzelnen Scroll-Markierungen können verwendet werden, um zu den zugehörigen Inhaltsobjekten zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}} Eigenschaft auf einen Wert ungleich `none` setzen, damit das `::scroll-marker-group` Pseudoelement generiert werden kann. Der {{cssxref("scroll-marker-group")}} Wert bestimmt, wo die Scroll-Markierungsgruppe in der Tabulatorreihenfolge und der Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, während `after` sie am Ende platziert.

Es ist eine bewährte Methode, die visuelle Darstellungsposition der Scroll-Markierungsgruppe mit der Tabulatorreihenfolge zu synchronisieren. Wenn die Gruppe am Anfang des Inhalts positioniert wird, setzen Sie sie an den Anfang der Tabulatorreihenfolge mit `before`. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie ans Ende der Tabulatorreihenfolge mit `after`.

In Bezug auf Barrierefreiheit werden die Scroll-Markierungsgruppe und die enthaltenen Scroll-Markierungen mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie die Gruppe mit <kbd>Tab</kbd> erreichen, verhält sie sich wie ein einzelnes Element (das heißt, ein weiterer Druck auf die <kbd>Tab</kbd>-Taste wird vorbei an der Gruppe zum nächsten Element springen), und Sie können zwischen den verschiedenen Scroll-Markierungen mit den Tasten Links und Rechts (oder Oben und Unten) navigieren.

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für andere Beispiele, die das `::scroll-marker` Pseudoelement verwenden.

### Erstellung von Karussell-Scroll-Markierungen

Dieses Demo ist ein Karussell von Einzelseiten, wobei jedes Element die ganze Seite einnimmt. Wir haben Scroll-Markierungen hinzugefügt, um es dem Benutzer zu ermöglichen, mit einem Klick auf eine Markierung zu einer beliebigen Seite zu navigieren.

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

Wir konvertieren zunächst unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbrechende Zeile von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass Elemente immer an der richtigen Stelle einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `100%` der Breite des Containers einzunehmen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhalts an der linken Kante des Containers einrastet.

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

Als nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudoelement nach dem DOM-Inhalt der Liste in der Tabulatorreihenfolge und Layout-Box-Reihenfolge platziert wird; das bedeutet, es kommt nach den Scroll-Tasten:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudoelement der Liste mit Flexbox layoutet, wobei ein {{cssxref("justify-content")}} Wert von `center` und ein {{cssxref("gap")}} von `20px` verwendet wird, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudoelemente) in der Mitte der `::scroll-marker-group` mit einem Abstand zwischen jedem einzelnen zentriert sind.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes werden die Scroll-Markierungen selbst gestylt. Das Aussehen jeder einzelnen wird durch das Setzen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}}, und {{cssxref("border-radius")}} gehandhabt, aber wir müssen auch einen Wert ungleich `none` für die {{cssxref("content")}} Eigenschaft setzen, damit sie tatsächlich generiert werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Markierungen anwenden, weil sie als Flex-Elemente layoutet werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um die Scroll-Markierung auszuwählen, die der aktuell sichtbaren "Seite" entspricht, und hervorzuheben, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als gefüllter Kreis gestylt wird.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung der Scroll-Markierungsgruppe mit Anker-Positionierung

Dieses Beispiel erweitert das vorherige und demonstriert die Verwendung von [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), um die Scroll-Markierungsgruppe relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudoelement der Liste wird relativ zum Karussell mit CSS-Anker-Positionierung positioniert, indem der Gruppe ein {{cssxref("position-anchor")}} Wert gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Dann positionieren wir die Gruppe relativ zum Scroll-Container in Blockrichtung, indem wir einen {{cssxref("top")}} Wert setzen, der eine {{cssxref("anchor()")}} Funktion beinhaltet. Außerdem fügen wir einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe in der Inline-Richtung in der Mitte des Scroll-Containers ausrichtet.

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
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
