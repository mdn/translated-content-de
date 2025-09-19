---
title: scroll-marker-group
slug: Web/CSS/scroll-marker-group
l10n:
  sourceCommit: ad57cae3faaec374c3e712d6994e7fc3cb9318db
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "scroll container")}} Element ein {{cssxref("::scroll-marker-group")}} Pseudoelement erzeugt. Falls vorhanden, gibt die Eigenschaft auch an, ob die Scroll-Marker-Gruppe `before` _oder_ `after` dem Inhalt des Scroll-Gruppencontainers in der Standard-Bild- und Tabulatorreihenfolge platziert werden soll.

> [!NOTE]
> Um einen Scroll-Marker-Gruppencontainer aus einem vorhandenen Element zu erstellen, das eine Menge von {{htmlelement("a")}} Elementen enthält, verwenden Sie die {{cssxref("scroll-target-group")}} Eigenschaft. Lesen Sie über die [Unterschiede im Verhalten](/de/docs/Web/CSS/scroll-target-group#differences_between_scroll-target-group_and_scroll-marker-group) zwischen den beiden.

## Syntax

```css
/* Single values */
scroll-marker-group: before;
scroll-marker-group: after;
scroll-marker-group: none;

/* Global values */
scroll-marker-group: inherit;
scroll-marker-group: initial;
scroll-marker-group: revert;
scroll-marker-group: revert-layer;
scroll-marker-group: unset;
```

### Werte

- `after`
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwister der Kindelemente des Scrollcontainers generiert, unmittelbar vor diesen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Es erscheint am Ende der Tabulatorreihenfolge und der Layoutreihenfolge des Containers (nicht aber der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwister der Kindelemente des Scrollcontainers generiert, unmittelbar vor diesen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Die Scroll-Marker-Gruppe erscheint am Anfang der Tabulatorreihenfolge und der Layoutreihenfolge des Containers.

- `none`
  - : Es wird kein `::scroll-marker-group` Pseudoelement auf dem Element erzeugt. Dies ist der Standardwert.

> [!NOTE]
> Als bewährte Praktik im Bereich der Barrierefreiheit stimmen Sie die visuelle Position der Scroll-Marker-Gruppencontainer mit der Tabulatorreihenfolge ab. Wenn Sie die Markergruppe am Anfang des Inhalts mit Stilen auf {{cssxref("::scroll-marker-group")}} positionieren, platzieren Sie sie am Anfang der Tabulatorreihenfolge mit `before`. Wenn Sie die Gruppe am Ende des Inhalts positionieren, platzieren Sie sie am Ende der Tabulatorreihenfolge mit `after`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sehen Sie sich [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für vollständige Beispiele an, die die `scroll-marker-group` Eigenschaft verwenden.

### Platzierung der Scroll-Marker

In diesem Beispiel demonstrieren wir die drei Werte der `scroll-marker-group` Eigenschaft.

#### HTML

Wir haben eine grundlegende HTML {{htmlelement("ul")}} Liste mit mehreren {{htmlelement("li")}} Listenelementen.

```html hidden
<fieldset>
  <legend>Select <code>scroll-marker-group</code> value:</legend>
  <label><input type="radio" name="p" value="before" />before</label>
  <label><input type="radio" name="p" value="after" checked />after</label>
  <label><input type="radio" name="p" value="none" />none</label>
</fieldset>
```

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
</ul>
```

#### CSS

Wir wandeln unser `<ul>` in ein Karussell um, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbrechende Reihe von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass der Inhalt horizontal scrollt, wenn die Elemente ihren Container in der x-Achse überlaufen. Wir wandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, um sicherzustellen, dass die Elemente immer an ihrem Platz einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Marker-Gruppencontainer mit der `scroll-marker-group` Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt.

```css
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  margin: 32px 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  scroll-marker-group: after;
}
```

Als nächstes gestalten wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft nutzen, um sie `33%` der Breite des Containers ausmachen zu lassen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

```css
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 33%;
  scroll-snap-align: start;
  text-align: center;
  line-height: 5;
}
```

Wir nutzen dann das {{cssxref("::scroll-marker")}} Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit einem roten Rand zu erstellen und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Marker in einer Reihe mit einem Abstand von `0.2em` zwischen jedem anzuordnen.

```css
li::scroll-marker {
  content: " ";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}

::scroll-marker-group {
  display: flex;
  gap: 0.2em;
}
```

Schließlich, um ein gutes Benutzererlebnis zu gewährleisten, gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse ansprechen.

```css
::scroll-marker:target-current {
  background: red;
}
```

```css hidden
fieldset {
  width: 20em;
}

label {
  font-family: monospace;
  display: block;
}

:has([value="before"]:checked) ul {
  scroll-marker-group: before;
}
:has([value="after"]:checked) ul {
  scroll-marker-group: after;
}

:has([value="none"]:checked) ul {
  scroll-marker-group: none;
}
```

#### Ergebnis

{{EmbedLiveSample("Examples", '', '300')}}

Beachten Sie die Platzierung des Scroll-Marker-Gruppencontainers. Schauen Sie, wie sich die Tabulatorreihenfolge auf der Tastatur für `before` gegenüber `after` unterscheidet, und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-target-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
