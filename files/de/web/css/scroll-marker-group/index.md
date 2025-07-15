---
title: scroll-marker-group
slug: Web/CSS/scroll-marker-group
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "Scroll-Container")}} ein {{cssxref("::scroll-marker-group")}} Pseudoelement erzeugt, und wenn ja, ob es unmittelbar `vor` oder `nach` den Inhalten des Containers in der standardmäßigen visuellen und Tabulatorreihenfolge platziert werden soll.

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
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwisterelement der Kind-Elemente des Scroll-Containers erzeugt, unmittelbar vor ihnen und vor allen erzeugten {{cssxref("::scroll-button()")}} Pseudoelementen. Es erscheint am Ende der Tabulatorreihenfolge des Containers und der Layout-Box-Reihenfolge (aber nicht in der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwisterelement der Kind-Elemente des Scroll-Containers erzeugt, unmittelbar vor ihnen und vor allen erzeugten {{cssxref("::scroll-button()")}} Pseudoelementen. Die Gruppe von Scrollmarkern erscheint am Anfang der Tabulatorreihenfolge des Containers und der Layout-Box-Reihenfolge.

- `none`
  - : Es wird kein `::scroll-marker-group` Pseudoelement auf dem Element erzeugt. Dies ist der Standardwert.

> [!NOTE]
> Es ist eine bewährte Praxis, die visuelle Position der Scrollmarkierungsgruppe mit der Tabulatorreihenfolge zu synchronisieren. Wenn die Markierungsgruppe am Anfang des Inhalts positioniert wird, sollten Sie sie mit `before` an den Anfang der Tabulatorreihenfolge setzen. Wenn die Gruppe am Ende des Inhalts positioniert wird, sollten Sie sie mit `after` ans Ende der Tabulatorreihenfolge setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [Erstellen von CSS-Karusellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für vollständige Beispiele, die die `scroll-marker-group` Eigenschaft verwenden.

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

Wir konvertieren unsere `<ul>` in ein Karussell, indem wir die {{cssxref("display")}} Eigenschaft auf `flex` setzen und eine einzelne, nicht umbruchende Reihe von `<li>` Elementen erstellen. Die {{cssxref("overflow-x")}} Eigenschaft wird auf `auto` gesetzt, was bedeutet, dass wenn die Elemente den Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir konvertieren dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, um sicherzustellen, dass sich die Elemente immer an den richtigen Platz fügen, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scrollmarkierungsgruppe mit der `scroll-marker-group` Eigenschaft und platzieren die Gruppe hinter allen Inhalten.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie auf `33%` der Breite des Containers zu setzen. Der {{cssxref("scroll-snap-align")}} Wert `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers schnappt, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudoelement, um einen quadratischen Marker für jedes Listenelement mit einer roten Umrandung zu erstellen und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scrollmarker in einer Reihe mit einem Abstand von `0.2em` zwischen jedem auszulegen.

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

Schließlich, um ein gutes Benutzererlebnis zu gewährleisten, stylen wir den Marker des aktuell gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudoklasse anvisieren.

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

Beachten Sie die Platzierung der Scrollmarkierungsgruppe. Beachten Sie, wie die Tabulatorreihenfolge für `before` im Vergleich zu `after` unterschiedlich ist, und beachten Sie, wie die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karusellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
