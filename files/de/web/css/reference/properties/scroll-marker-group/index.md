---
title: scroll-marker-group
slug: Web/CSS/Reference/Properties/scroll-marker-group
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "Scroll-Container")}}-Element ein {{cssxref("::scroll-marker-group")}} Pseudoelement generiert. Falls vorhanden, gibt die Eigenschaft außerdem an, ob die Scroll-Marker-Gruppe `before` _oder_ `after` den Inhalten des Scroll-Gruppen-Containers in der Standard-Visual- und Tabulatorreihenfolge platziert werden soll.

> [!NOTE]
> Um einen Scroll-Marker-Gruppen-Container aus einem bestehenden Element zu erstellen, das eine Gruppe von {{htmlelement("a")}} Elementen enthält, verwenden Sie die {{cssxref("scroll-target-group")}} Eigenschaft. Lesen Sie über die [Verhaltensunterschiede](/de/docs/Web/CSS/Reference/Properties/scroll-target-group#differences_between_scroll-target-group_and_scroll-marker-group) zwischen den beiden.

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
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwisterelement der Kindelemente des Scroll-Containers generiert, direkt vor diesen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Es erscheint am Ende der Tabulatorreihenfolge und Layout-Box-Reihenfolge des Containers (aber nicht in der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwisterelement der Kindelemente des Scroll-Containers generiert, direkt vor diesen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Die Scroll-Marker-Gruppe erscheint am Anfang der Tabulatorreihenfolge und Layout-Box-Reihenfolge des Containers.

- `none`
  - : Auf dem Element wird kein `::scroll-marker-group` Pseudoelement generiert. Dies ist der Standardwert.

> [!NOTE]
> Als bewährte Praxis für Barrierefreiheit sollte die visuelle Anzeigeposition des Scroll-Marker-Gruppen-Containers mit der Taborder übereinstimmen. Wenn die Markergruppe am Anfang des Inhalts mit auf {{cssxref("::scroll-marker-group")}} angewendeten Stilen positioniert wird, setzen Sie sie mit `before` an den Anfang der Tabulatorreihenfolge. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie mit `after` ans Ende der Tabulatorreihenfolge.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für vollständige Beispiele, die die `scroll-marker-group` Eigenschaft verwenden.

### Platzierung der Scroll-Marker

In diesem Beispiel zeigen wir die drei Werte der `scroll-marker-group` Eigenschaft.

#### HTML

Wir haben eine einfache HTML-{{htmlelement("ul")}}-Liste mit mehreren {{htmlelement("li")}}-Listenelementen.

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

Wir verwandeln unser `<ul>` in ein Karussell, indem wir die {{cssxref("display")}} Eigenschaft auf `flex` setzen und eine einzige, nicht umschlagende Zeile von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Dann verwandeln wir das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll-snap Container")}}, sodass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Marker-Gruppen-Container mit der `scroll-marker-group` Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt.

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

Anschließend stylen wir die `<li>` Elemente und verwenden die {{cssxref("flex")}} Eigenschaft, um sie `33%` der Breite des Containers ausmachen zu lassen. Der {{cssxref("scroll-snap-align")}} Wert von `start` lässt die linke Seite des links sichtbarsten Elements an der linken Kante des Containers einrasten, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit rotem Rand zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Marker in einer Zeile mit einem `0.2em` Abstand dazwischen anzuordnen.

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

Schließlich, um eine gute Benutzererfahrung zu gewährleisten, gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse ansprechen.

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

Beachten Sie die Platzierung des Scroll-Marker-Gruppen-Containers. Achten Sie darauf, wie sich die Tastatur-Tabulatorreihenfolge bei `before` im Gegensatz zu `after` unterscheidet, und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

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
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
