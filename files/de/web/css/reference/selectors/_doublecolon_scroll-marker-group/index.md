---
title: ::scroll-marker-group
slug: Web/CSS/Reference/Selectors/::scroll-marker-group
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Das **`::scroll-marker-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wird innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} erzeugt und enthält alle auf Nachfahren des Scroll-Containers erzeugten {{cssxref("::scroll-marker")}} Pseudo-Elemente.

## Syntax

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Beschreibung

Das **`::scroll-marker-group`** Pseudo-Element eines Scroll-Containers repräsentiert einen **Scroll-Marker-Gruppen-Container**. Dies ist ein Container, der automatisch alle auf ihm selbst oder seinen Nachfahren erzeugten {{cssxref("::scroll-marker")}} Pseudo-Elemente enthält. Dies erlaubt es, sie als Gruppe zu positionieren und zu stylen. Dieses Pseudo-Element wird typischerweise verwendet, wenn ein CSS-Karussell erstellt wird, um einen Anzeiger für die Scroll-Position bereitzustellen. Die einzelnen Scroll-Marker können genutzt werden, um zu ihren zugehörigen Inhaltselementen zu navigieren.

Der Scroll-Container muss seine {{cssxref("scroll-marker-group")}} Eigenschaft auf einen anderen Wert als `none` setzen, damit das `::scroll-marker-group` Pseudo-Element erzeugt wird. Der Wert von {{cssxref("scroll-marker-group")}} bestimmt, wo der Scroll-Marker-Gruppen-Container in der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Karussells erscheint (aber nicht in der DOM-Struktur) — `before` setzt ihn an den Anfang, während `after` ihn ans Ende setzt.

> [!NOTE]
> Alternativ kann ein Scroll-Marker-Gruppen-Container aus einem vorhandenen Element erstellt werden, das eine Reihe von {{htmlelement("a")}} Elementen enthält, unter Verwendung von {{cssxref("scroll-target-group")}}.

Als Best Practice zur Barrierefreiheit sollte die visuelle Anzeigeposition des Scroll-Marker-Gruppen-Containers mit der Tab-Reihenfolge übereinstimmen. Wenn die Gruppe am Anfang des Inhalts positioniert wird, setzen Sie sie mit `before` an den Anfang der Tab-Reihenfolge. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie mit `after` ans Ende der Tab-Reihenfolge.

Wenn ein Scroll-Marker-Gruppen-Container auf einem Scroll-Container unter Verwendung der `scroll-marker-group` Eigenschaft erstellt wird, wird der Scroll-Container mit [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik gerendert. Sie können mit der Tastatur mit <kbd>Tab</kbd> darauf zugreifen und dann mit den Pfeiltasten links und rechts (oder oben und unten) zwischen den verschiedenen „Seiten“ navigieren, was auch den Status der zugehörigen Scroll-Marker und Scroll-Schaltflächen wie erwartet ändert. Die Scroll-Marker können auch normal durchgetabbt werden, wie erwartet.

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) für weitere Beispiele, die das `::scroll-marker` Pseudo-Element verwenden.

### Scroll-Marker für Karussells erstellen

Dieses Beispiel ist ein Karussell aus einzelnen Seiten, wobei jedes Element die gesamte Seite einnimmt. Wir haben Scroll-Marker hinzugefügt, damit der Benutzer mit einem Klick auf einen Marker zu einer beliebigen Seite navigieren kann.

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

Zuerst wandeln wir unser `<ul>` in ein Karussell um, indem wir das {{cssxref("display")}} auf `flex` setzen, um eine einzelne, nicht umschlagende Zeile von `<li>` Elementen zu erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Dann wandeln wir das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, indem wir sicherstellen, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `100%` der Breite des Containers einzunehmen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements beim Scrollen des Inhalts an die linke Kante des Containers einrastet.

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

Als nächstes wird die {{cssxref("scroll-marker-group")}} Eigenschaft der Liste auf `after` gesetzt, sodass das `::scroll-marker-group` Pseudo-Element nach dem DOM-Inhalt der Liste in der Tab-Reihenfolge und Layout-Box-Reihenfolge platziert wird; das bedeutet, dass es nach den Scroll-Schaltflächen kommt:

```css live-sample___carousel-example live-sample___carousel-example_final
ul {
  scroll-marker-group: after;
}
```

Als nächstes wird das `::scroll-marker-group` Pseudo-Element der Liste mit Flexbox ausgelegt, mit einem {{cssxref("justify-content")}} Wert von `center` und einem {{cssxref("gap")}} von `20px`, sodass seine Kinder (die {{cssxref("::scroll-marker")}} Pseudo-Elemente) zentriert innerhalb der `::scroll-marker-group` mit einem Abstand zwischen jedem angeordnet sind.

```css live-sample___carousel-example live-sample___carousel-example_final
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Dann werden die Scroll-Marker selbst gestylt. Das Aussehen jedes einzelnen wird durch das Setzen von {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} und {{cssxref("border-radius")}} gehandhabt, aber wir müssen auch einen anderen Wert als `none` für die {{cssxref("content")}} Eigenschaft setzen, damit sie tatsächlich erzeugt werden.

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
> Erzeugter Inhalt ist standardmäßig inline; wir können `width` und `height` auf unsere Scroll-Marker anwenden, weil sie als Flex-Items angeordnet werden.

Schließlich wird die {{cssxref(":target-current")}} Pseudo-Klasse verwendet, um den Scroll-Marker auszuwählen, der der aktuell sichtbaren „Seite“ entspricht, und zeigt, wie weit der Benutzer durch den Inhalt gescrollt hat. In diesem Fall setzen wir die `background-color` auf `black`, sodass es als ausgefüllter Kreis gestylt ist.

```css live-sample___carousel-example live-sample___carousel-example_final
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Ergebnis

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionierung des Scroll-Marker-Gruppen-Containers mit Anker-Positionierung

Dieses Beispiel erweitert das vorherige, indem es die Verwendung von [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) demonstriert, um den Scroll-Marker-Gruppen-Container relativ zum Karussell zu positionieren.

#### CSS

Das `::scroll-marker-group` Pseudo-Element der Liste wird relativ zum Karussell mit CSS-Anker-Positionierung positioniert, indem der Gruppe ein Wert für {{cssxref("position-anchor")}} gegeben wird, der mit dem {{cssxref("anchor-name")}} des `<ul>` übereinstimmt. Dann positionieren wir die Gruppe relativ zum Scroll-Container in der Block-Richtung, indem wir einen {{cssxref("top")}} Wert festlegen, der eine {{cssxref("anchor()")}} Funktion enthält. Wir fügen auch einen {{cssxref("justify-self")}} Wert von `anchor-center` hinzu, der die Gruppe in der Inline-Richtung im Zentrum des Scroll-Containers ausrichtet.

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
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- Modul für [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Modul für [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow)
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
