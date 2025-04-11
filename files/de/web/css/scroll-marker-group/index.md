---
title: scroll-marker-group
slug: Web/CSS/scroll-marker-group
l10n:
  sourceCommit: 898dd2394e7b70daa2c0c212282a64ccf5938341
---

{{CSSRef}}{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "Scroll-Container")}} ein {{cssxref("::scroll-marker-group")}} Pseudoelement generiert und, falls ja, ob es unmittelbar `before` _oder_ `after` den Inhalten des Containers in der standardmäßigen visuellen und Tabulator-Reihenfolge platziert werden soll.

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

  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwister der DOM-Elemente des Scroll-Containers generiert, unmittelbar vor diesen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Es erscheint am Ende der Tabulator-Reihenfolge und der Layout-Box-Reihenfolge des Containers (aber nicht in der DOM-Struktur).

- `before`

  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwister der DOM-Elemente des Scroll-Containers generiert, unmittelbar vor diesen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Die Scroll-Marker-Gruppe erscheint am Anfang der Tabulator-Reihenfolge und der Layout-Box-Reihenfolge des Containers.

- `none`

  - : Es wird kein `::scroll-marker-group` Pseudoelement auf dem Element generiert. Dies ist der Standardwert.

> [!NOTE]
> Es ist eine bewährte Praxis, die visuelle Darstellung der Scroll-Marker-Gruppe mit der Tab-Reihenfolge abzustimmen. Wenn Sie die Marker-Gruppe am Anfang des Inhalts positionieren, indem Sie Stile auf {{cssxref("::scroll-marker-group")}} anwenden, setzen Sie sie mit `before` an den Anfang der Tab-Reihenfolge. Wenn die Gruppe am Ende des Inhalts positioniert wird, setzen Sie sie mit `after` an das Ende der Tab-Reihenfolge.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für vollständige Beispiele, die die `scroll-marker-group` Eigenschaft verwenden.

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

Wir verwandeln unsere `<ul>` in ein Karussell, indem wir {{cssxref("display")}} auf `flex` setzen, um eine einzelne, nicht umbrechende Reihe von `<li>` Elementen zu erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir verwandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, der dafür sorgt, dass Elemente immer an Ort und Stelle einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scroll-Marker-Gruppe mit der `scroll-marker-group` Eigenschaft und platzieren die Gruppe nach allen Inhalten.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `33%` der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des am weitesten links sichtbaren Elements bei gescrolltem Inhalt an der linken Kante des Containers einrastet.

```css
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 33%;
  scroll-snap-align: start;
  text-align: center;
  line-height: 5;
}
```

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit einem roten Rand zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Marker in einer Reihe mit einem Abstand von `0.2em` zwischen den einzelnen anzuordnen.

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

Schließlich, um ein gutes Benutzererlebnis zu gewährleisten, stylen wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse ansprechen.

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

Beachten Sie die Platzierung der Scroll-Marker-Gruppe. Achten Sie darauf, wie sich die Tastaturtabulator-Reihenfolge bei `before` im Vergleich zu `after` unterscheidet und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
