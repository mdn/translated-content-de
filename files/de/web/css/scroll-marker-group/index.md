---
title: scroll-marker-group
slug: Web/CSS/scroll-marker-group
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "scroll container")}} ein {{cssxref("::scroll-marker-group")}} Pseudoelement generiert und, falls ja, ob es sofort `before` _oder_ `after` den Inhalten des Containers in der Standard-Ansichts- und Tabulator-Reihenfolge platziert wird.

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

  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwisterelement der kindlichen DOM-Elemente des Scroll Containers generiert, unmittelbar vor ihnen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Es erscheint am Ende der Tabulatorreihenfolge des Containers und in der Layout-Box-Reihenfolge (aber nicht in der DOM-Struktur).

- `before`

  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwisterelement der kindlichen DOM-Elemente des Scroll Containers generiert, unmittelbar vor ihnen und allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Die Scroll-Marker-Gruppe erscheint am Anfang der Tabulatorreihenfolge des Containers und in der Layout-Box-Reihenfolge.

- `none`
  - : Kein `::scroll-marker-group` Pseudoelement wird auf dem Element generiert. Dies ist der Standardwert.

> [!NOTE]
> Es ist eine bewährte Praxis, die visuelle Darstellungsposition der Scroll-Marker-Gruppe mit der Tabulatorreihenfolge abzugleichen. Wenn Sie die Marker-Gruppe mit auf {{cssxref("::scroll-marker-group")}} angewandten Stilen an den Anfang des Inhalts positionieren, setzen Sie sie mit `before` an den Anfang der Tabulatorreihenfolge. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie mit `after` an das Ende der Tabulatorreihenfolge.

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

Wir verwandeln unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen und eine einzelne, nicht umbrechende Reihe von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass, wenn die Elemente ihren Container auf der x-Achse überlaufen, die Inhalte horizontal scrollen. Wir wandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll-snap container")}} um, um sicherzustellen, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scroll-Marker-Gruppe mit der Eigenschaft `scroll-marker-group` und platzieren die Gruppe nach allen Inhalten.

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

Als nächstes gestalten wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `33%` der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers schnappt, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit rotem Rand zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Marker in einer Reihe mit einem Abstand von `0.2em` dazwischen anzuordnen.

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

Beachten Sie die Platzierung der Scroll-Marker-Gruppe. Achten Sie darauf, wie sich die Tabulatorreihenfolge mit `before` gegenüber `after` unterscheidet, und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
