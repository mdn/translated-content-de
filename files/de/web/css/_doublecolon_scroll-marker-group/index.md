---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt und enthält alle {{cssxref("::scroll-marker")}} Pseudoelemente, die an Nachfahren des Scroll-Containers erzeugt werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudoelement eines Scroll-Containers repräsentiert eine **Scroll Marker Gruppe**. Dies ist ein Container, der automatisch alle {{cssxref("::scroll-marker")}} Pseudoelemente enthält, die an sich selbst oder seinen Nachfahren erzeugt werden. Dies ermöglicht es, sie als Gruppe zu positionieren und zu layouten, und wird typischerweise verwendet, wenn man ein CSS-Karussell erstellt, um einen Scroll-Positionsindikator bereitzustellen. Die einzelnen Scroll Marker können verwendet werden, um zu den zugehörigen Inhaltselementen zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}} Eigenschaft auf einen Wert ungleich `none` setzen, damit das `::scroll-marker-group` Pseudoelement erzeugt wird. Der {{cssxref("scroll-marker-group")}} Wert bestimmt, wo die Scroll Marker Gruppe in der Tabulatorreihenfolge und der Layoutbox-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` platziert sie am Anfang, während `after` sie am Ende platziert.

Es ist eine bewährte Praxis, die visuelle Renderposition der Scroll Marker Gruppe mit der Tabulatorreihenfolge abzugleichen. Wenn Sie die Gruppe am Anfang des Inhalts positionieren, platzieren Sie sie am Anfang der Tabulatorreihenfolge mit `before`. Wenn Sie die Gruppe am Ende des Inhalts positionieren, platzieren Sie sie am Ende der Tabulatorreihenfolge mit `after`.

Hinsichtlich der Barrierefreiheit werden die Scroll Marker Gruppe und die enthaltenen Scroll Marker mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Wenn Sie mit der <kbd>Tab</kbd>-Taste zur Gruppe navigieren, verhält sie sich wie ein einzelnes Element (d.h. ein weiterer Druck auf die <kbd>Tab</kbd>-Taste bewegt sich über die Gruppe hinaus zum nächsten Element), und Sie können mit den linken und rechten (oder oberen und unteren) Pfeiltasten zwischen den verschiedenen Scroll Markern wechseln.

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Beispiele, die das `::scroll-marker` Pseudoelement verwenden.

### Erstellung von Karussell-Scroll-Markern

Dieses Demo ist ein Karussell mit einzelnen Seiten, wobei jedes Element die komplette Seite einnimmt. Wir haben Scroll Marker hinzugefügt, damit der Benutzer mit einem Klick auf einen Marker zu einer beliebigen Seite navigieren kann.

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

Wir verwandeln unser `<ul>` zuerst in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen, um eine einzelne, nicht umbrechende Zeile von `<li>` Elementen zu erzeugen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir wandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, wobei sichergestellt wird, dass Elemente immer an ihrem Platz einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie auf `100%` der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des links am weitesten sichtbaren Elements bei gescrolltem Inhalt an der linken Kante des Containers einrastet.

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

Als nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudoelement nach dem DOM-Inhalt der Liste in der Tabulatorreihenfolge und der Layoutbox-Reihenfolge angeordnet wird; das bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudoelement der Liste mit Flexbox layoutiert, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudoelemente) innerhalb der `::scroll-marker-group` zentriert sind, mit einem Abstand zwischen jedem.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als nächstes werden die Scroll Marker selbst gestylt. Das Aussehen jedes einzelnen wird durch das Setzen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} gehandhabt, aber wir müssen auch einen Wert für die {{cssxref("content")}} Eigenschaft setzen, der nicht `none` ist, damit sie tatsächlich erzeugt werden.

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
> Erstellt Inhalte sind standardmäßig inline; wir können `width` und `height` auf unsere Scroll Marker anwenden, weil sie als Flex-Elemente layoutiert werden.

Zuletzt wird die {{cssxref(":target-current")}} Pseudoklasse verwendet, um auszuwählen, welcher Scroll Marker der aktuell sichtbaren "Seite" entspricht, und hebt hervor, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass sie als ausgefüllter Kreis gestylt ist.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung der Scroll Marker Gruppe mit Anker-Positionierung

Dieses Beispiel erweitert das vorherige und demonstriert die Verwendung der [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), um die Scroll Marker Gruppe relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudoelement der Liste wird relativ zum Karussell mit CSS Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Wir positionieren dann die Gruppe relativ zum Scroll-Container in Blockrichtung, indem wir einen {{cssxref("top")}} Wert setzen, der eine {{cssxref("anchor()")}} Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe in Inline-Richtung zum Zentrum des Scroll-Containers ausrichtet.

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
- [CSS Karussell-Galerie](https://chrome.dev/carousel/) via chrome.dev (2025)
