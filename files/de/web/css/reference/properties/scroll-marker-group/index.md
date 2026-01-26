---
title: scroll-marker-group
slug: Web/CSS/Reference/Properties/scroll-marker-group
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "Scroll-Container")}}-Element über ein generiertes {{cssxref("::scroll-marker-group")}} Pseudoelement verfügt. Wenn vorhanden, gibt die Eigenschaft auch an, ob die Scroll-Markierungs-Gruppe `before` _oder_ `after` den Inhalten des Scroll-Gruppenkonters in der standardmäßigen visuellen und Tabulatorreihenfolge platziert werden soll.

> [!NOTE]
> Um einen Scroll-Markierungs-Gruppen-Container aus einem vorhandenen Element zu erstellen, das eine Gruppe von {{htmlelement("a")}} Elementen enthält, verwenden Sie die Eigenschaft {{cssxref("scroll-target-group")}}. Lesen Sie über die [Unterschiede im Verhalten](/de/docs/Web/CSS/Reference/Properties/scroll-target-group#differences_between_scroll-target-group_and_scroll-marker-group) zwischen den beiden.

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
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwister der untergeordneten DOM-Elemente des Scroll-Containers generiert, die ihnen unmittelbar vorausgehen, sowie alle generierten {{cssxref("::scroll-button()")}} Pseudoelemente. Es erscheint am Ende der Tabulatorreihenfolge und der Layoutbox-Reihenfolge des Containers (aber nicht in der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwister der untergeordneten DOM-Elemente des Scroll-Containers generiert, die ihnen unmittelbar vorausgehen, sowie alle generierten {{cssxref("::scroll-button()")}} Pseudoelemente. Die Scroll-Markierungs-Gruppe erscheint am Anfang der Tabulatorreihenfolge und der Layoutbox-Reihenfolge des Containers.

- `none`
  - : Auf dem Element wird kein `::scroll-marker-group` Pseudoelement generiert. Dies ist der Standardwert.

> [!NOTE]
> Als Best Practice zur Barrierefreiheit sollten Sie die visuelle Anzeigeposition des Scroll-Markierungs-Gruppen-Containers mit der Tabulatorreihenfolge abstimmen. Wenn Sie die Markierungs-Gruppe mit Stilen auf {{cssxref("::scroll-marker-group")}} am Anfang des Inhalts positionieren, setzen Sie sie am Anfang der Tabulatorreihenfolge mit `before`. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie am Ende der Tabulatorreihenfolge mit `after`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [Erstellung von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels) für vollständige Beispiele, die die Eigenschaft `scroll-marker-group` verwenden.

### Platzierung der Scroll-Markierungen

In diesem Beispiel demonstrieren wir die drei Werte der `scroll-marker-group` Eigenschaft.

#### HTML

Wir haben eine einfache HTML {{htmlelement("ul")}} Liste mit mehreren {{htmlelement("li")}} Listenelementen.

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

Wir verwandeln unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen, um eine einzelne, nicht umgebrochene Zeile von `<li>` Elementen zu erstellen. Die Eigenschaft {{cssxref("overflow-x")}} wird auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir wandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} um, wodurch sichergestellt wird, dass Elemente beim Scrollen des Containers immer einrasten, mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory`.

Wir erstellen einen Scroll-Markierungs-Gruppen-Container mit der Eigenschaft `scroll-marker-group` und platzieren die Gruppe nach allen Inhalten.

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

Als nächstes gestalten wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie auf `33%` der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}} Wert von `start` lässt die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers schnappen, wenn der Inhalt gescrollt wird.

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

Dann verwenden wir das {{cssxref("::scroll-marker")}} Pseudoelement, um einen quadratischen Marker für jedes Listenelement mit einem roten Rahmen zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Markierungen in einer Reihe mit einem Abstand von `0,2em` zwischen jedem zu platzieren.

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

Schließlich, um ein gutes Benutzererlebnis zu gewährleisten, gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse anvisieren.

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

Beachten Sie die Platzierung des Scroll-Markierungs-Gruppen-Containers. Achten Sie darauf, wie sich die Tastatur-Tabs-Reihenfolge bei `before` im Vergleich zu `after` unterscheidet, und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

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
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
