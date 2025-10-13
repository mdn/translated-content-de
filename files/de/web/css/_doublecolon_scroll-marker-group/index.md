---
title: ::scroll-marker-group
slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} generiert und enthält alle {{cssxref("::scroll-marker")}} Pseudo-Elemente, die auf Nachkommen des Scroll-Containers generiert werden.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudo-Element eines Scroll-Containers repräsentiert einen **Scroll-Marker-Gruppen-Container**. Dieser Container enthält automatisch alle auf sich selbst oder seinen Nachkommen erstellten {{cssxref("::scroll-marker")}} Pseudo-Elemente. Dadurch können sie als Gruppe positioniert und gestaltet werden. Dieses Pseudo-Element wird typischerweise verwendet, wenn ein CSS-Karussell erstellt wird, um einen Scroll-Positionsanzeiger bereitzustellen. Die einzelnen Scroll-Marker können verwendet werden, um zu ihren zugehörigen Inhaltsobjekten zu navigieren.

Der Scroll-Container muss die {{cssxref("scroll-marker-group")}} Eigenschaft auf einen Wert ungleich `none` gesetzt haben, damit das `::scroll-marker-group` Pseudo-Element generiert wird. Der {{cssxref("scroll-marker-group")}} Wert bestimmt, wo der Scroll-Marker-Gruppen-Container in der Tabulatorreihenfolge und der Layout-Box-Reihenfolge des Karussells erscheint (jedoch nicht in der DOM-Struktur) — `before` setzt es an den Anfang, während `after` es ans Ende setzt.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppen-Container aus einem vorhandenen Element erstellt werden, das ein Set von {{htmlelement("a")}} Elementen enthält, indem {{cssxref("scroll-target-group")}} verwendet wird.

Als bewährte Barrierefreiheitspraxis sollten Sie die visuelle Darstellungsposition des Scroll-Marker-Gruppen-Containers mit der Tabulatorreihenfolge abgleichen. Wenn die Gruppe am Anfang des Inhalts positioniert wird, setzen Sie sie mit `before` an den Anfang der Tabulatorreihenfolge. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie mit `after` ans Ende der Tabulatorreihenfolge.

Wenn ein Scroll-Marker-Gruppen-Container auf einem Scroll-Container mit der `scroll-marker-group` Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantiken gerendert. Sie können mit der Tastatur per <kbd>Tab</kbd> darauf zugreifen und dann mit den linken und rechten (oder oberen und unteren) Cursortasten zwischen den verschiedenen "Seiten" navigieren, was auch den Zustand der zugehörigen Scroll-Marker und Scroll-Tasten wie erwartet ändert. Die Scroll-Marker können auch normal durchgetabbt werden, wie erwartet.

## Beispiele

Sehen Sie [CSS-Karussells erstellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für weitere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Karussell-Scroll-Marker erstellen

Dieses Demo ist ein Karussell einzelner Seiten, wobei jedes Element die volle Seite einnimmt. Wir haben Scroll-Marker eingeschlossen, die es dem Benutzer ermöglichen, mit einem Klick auf einen Marker zu einer beliebigen Seite zu navigieren.

#### HTML

Der HTML-Code besteht aus einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul), wobei jedes [Listenelement](/de/docs/Web/HTML/Reference/Elements/li) einige Beispielinhalte enthält:

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

Zuerst wandeln wir unsere `<ul>` in ein Karussell um, indem wir {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umgebrochene Zeile von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Dann wandeln wir die `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, der sicherstellt, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als Nächstes gestalten wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `100%` der Breite des Containers einzunehmen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten nach links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Als Nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt und in der Layout-Box-Reihenfolge der Liste platziert wird; das bedeutet, dass es nach den Scroll-Tasten kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als Nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste mit Flexbox gestaltet, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) zentriert innerhalb des `::scroll-marker-group` und mit einem Abstand zwischen jedem einzelnen liegen.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Als Nächstes werden die Scroll-Marker selbst gestaltet. Das Aussehen jedes einzelnen wird durch Setzen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} gehandhabt, aber wir müssen auch einen Wert ungleich `none` für die {{cssxref("content")}} Eigenschaft setzen, damit sie tatsächlich generiert werden.

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
> Generierter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flexelemente gestreckt werden.

Zum Schluss wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um den Scroll-Marker auszuwählen, der der derzeit sichtbaren "Seite" entspricht, was hervorhebt, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass er als ausgefüllter Kreis dargestellt wird.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung des Scroll-Marker-Gruppen-Containers mit Anker-Positionierung

Dieses Beispiel erweitert das vorherige und demonstriert die Verwendung der [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), um den Scroll-Marker-Gruppen-Container relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell mittels CSS-Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} der `<ul>` übereinstimmt. Wir positionieren dann die Gruppe relativ zum Scroll-Container in der Blockrichtung, indem wir einen {{cssxref("top")}} Wert festlegen, der eine {{cssxref("anchor()")}} Funktion enthält. Außerdem fügen wir einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe im Inline-Richtung des Scroll-Containers zentriert.

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
- [CSS-Karussells erstellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
