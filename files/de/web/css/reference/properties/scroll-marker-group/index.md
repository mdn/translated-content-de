---
title: "`scroll-marker-group` CSS property"
short-title: scroll-marker-group
slug: Web/CSS/Reference/Properties/scroll-marker-group
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob für ein {{Glossary("scroll_container", "Scroll-Container-")}}-Element ein {{cssxref("::scroll-marker-group")}} Pseudo-Element generiert wird. Falls vorhanden, legt die Eigenschaft auch fest, ob die Scroll-Marker-Gruppe `before` oder `after` den Inhalt des Scroll-Gruppen-Containers in der Standard-Tab- und visuellen Reihenfolge platziert werden soll.

> [!NOTE]
> Um einen Scroll-Marker-Gruppen-Container aus einem vorhandenen Element zu erstellen, das eine Reihe von {{htmlelement("a")}} Elementen enthält, verwenden Sie die {{cssxref("scroll-target-group")}} Eigenschaft. Lesen Sie über die [Unterschiede im Verhalten](/de/docs/Web/CSS/Reference/Properties/scroll-target-group#differences_between_scroll-target-group_and_scroll-marker-group) zwischen den beiden.

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
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudo-Element wird als Geschwister der Kindelemente des Scroll-Containers generiert, unmittelbar vor diesen und vor jedem generierten {{cssxref("::scroll-button()")}} Pseudo-Element. Es erscheint am Ende der Tab-Reihenfolge und der Layout-Reihenfolge des Containers (aber nicht in der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudo-Element wird als Geschwister der Kindelemente des Scroll-Containers generiert, unmittelbar vor diesen und vor jedem generierten {{cssxref("::scroll-button()")}} Pseudo-Element. Die Scroll-Marker-Gruppe erscheint am Anfang der Tab-Reihenfolge und der Layout-Reihenfolge des Containers.

- `none`
  - : Es wird kein `::scroll-marker-group` Pseudo-Element auf dem Element generiert. Dies ist der Standardwert.

> [!NOTE]
> Als Best Practice für Barrierefreiheit sollte die visuelle Position der Scroll-Marker-Gruppen mit der Tab-Reihenfolge übereinstimmen. Wenn Sie die Marker-Gruppe mit Stilen auf das {{cssxref("::scroll-marker-group")}}-Element am Anfang des Inhalts positionieren, setzen Sie sie an den Anfang der Tab-Reihenfolge mit `before`. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie an das Ende der Tab-Reihenfolge mit `after`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) für vollständige Beispiele, die die `scroll-marker-group` Eigenschaft verwenden.

### Platzierung der Scroll-Marker

In diesem Beispiel zeigen wir die drei Werte der `scroll-marker-group` Eigenschaft.

#### HTML

Wir haben eine grundlegende HTML-{{htmlelement("ul")}} Liste mit mehreren {{htmlelement("li")}} Listenelementen.

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

Wir verwandeln unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und so eine einzige, nicht umgebrochene Reihe von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass der Inhalt horizontal scrollt, wenn die Elemente den Container auf der x-Achse überschreiten. Wir verwandeln das `<ul>` anschließend in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass die Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}}-Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Marker-Gruppen-Container mit der `scroll-marker-group` Eigenschaft, indem wir die Gruppe nach dem gesamten Inhalt platzieren.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie 33% der Breite des Containers ausfüllen zu lassen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des linken Sichtbarkeitsbereichs an den linken Rand des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudo-Element, um einen quadratischen Marker für jedes Listenelement mit einem roten Rand zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in einer Reihe anzuordnen, mit einem Abstand von `0.2em` zwischen jedem Marker.

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

Schließlich, um eine gute Benutzererfahrung zu gewährleisten, stylen wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse anvisieren.

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

Beachten Sie die Platzierung des Scroll-Marker-Gruppen-Containers. Schauen Sie, wie sich die Tabulatorreihenfolge bei `before` im Vergleich zu `after` unterscheidet, und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

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
- [CSS Überlaufen](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
