---
title: "`scroll-marker-group` CSS property"
short-title: scroll-marker-group
slug: Web/CSS/Reference/Properties/scroll-marker-group
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob ein {{Glossary("scroll_container", "Scroll-Container")}} Element ein {{cssxref("::scroll-marker-group")}} Pseudoelement generiert hat. Wenn vorhanden, legt die Eigenschaft auch fest, ob die Scroll-Markierungsgruppe `before` _oder_ `after` den Inhalten des Scroll-Container-Gruppenelements in der Standard-Visual- und Tabulatorreihenfolge platziert werden soll.

> [!NOTE]
> Um aus einem bestehenden Element, das eine Reihe von {{htmlelement("a")}} Elementen enthält, einen Scroll-Markierungsgruppen-Container zu erstellen, verwenden Sie die {{cssxref("scroll-target-group")}} Eigenschaft. Lesen Sie über die [Verhaltensunterschiede](/de/docs/Web/CSS/Reference/Properties/scroll-target-group#differences_between_scroll-target-group_and_scroll-marker-group) zwischen den beiden.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `after`
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwister der Kind-DOM-Elemente des Scroll-Containers generiert, unmittelbar vor ihnen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Es erscheint am Ende der Tabulator- und Layout-Box-Reihenfolge des Containers (aber nicht in der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwister der Kind-DOM-Elemente des Scroll-Containers generiert, unmittelbar vor ihnen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Die Scrollmarkierungsgruppe erscheint am Anfang der Tabulator- und Layout-Box-Reihenfolge des Containers.

- `none`
  - : Kein `::scroll-marker-group` Pseudoelement wird auf dem Element generiert. Dies ist der Standardwert.

> [!NOTE]
> Als Barrierefreiheits-Best-Practice sollte die visuelle Renderposition des Scroll-Markierungsgruppen-Containers mit der Tabulatorreihenfolge übereinstimmen. Wenn die Markierungsgruppe am Anfang des Inhalts positioniert wird, sollte sie mit `before` an den Anfang der Tabulatorreihenfolge gesetzt werden. Wird die Gruppe am Ende des Inhalts positioniert, sollte sie mit `after` an das Ende der Tabulatorreihenfolge gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [CSS-Karussells erstellen](/de/docs/Web/CSS/Guides/Overflow/Carousels) für vollständige Beispiele, die die `scroll-marker-group` Eigenschaft verwenden.

### Platzierung der Scrollmarkierungen

In diesem Beispiel demonstrieren wir die drei Werte der `scroll-marker-group` Eigenschaft.

#### HTML

Wir haben eine grundlegende HTML-{{htmlelement("ul")}}-Liste mit mehreren {{htmlelement("li")}} Listenelementen.

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

Wir wandeln unser `<ul>` in ein Karussell um, indem wir {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbruchende Reihe von `<li>`-Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der X-Achse überfließen, der Inhalt horizontal scrollt. Wir machen dann aus dem `<ul>` einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass die Elemente immer an ihrem Platz einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Markierungsgruppen-Container mit der `scroll-marker-group` Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt.

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

Als nächstes gestalten wir die `<li>` Elemente und verwenden die {{cssxref("flex")}} Eigenschaft, um sie auf `33%` der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements an der linken Kante des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit rotem Rand zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Markierungen in einer Reihe mit einem `0.2em` Abstand zwischen ihnen anzuordnen.

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

Schließlich, um eine gute Benutzererfahrung zu gewährleisten, gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse anvisieren.

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

Beachten Sie die Platzierung des Scroll-Markierungsgruppen-Containers. Sehen Sie, wie sich die Tabulatorreihenfolge bei `before` im Gegensatz zu `after` ändert, und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt wird.

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
- {{cssxref(":target-before")}}
- {{cssxref(":target-after")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
