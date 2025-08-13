---
title: scroll-marker-group
slug: Web/CSS/scroll-marker-group
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "Scroll-Container")}} ein {{cssxref("::scroll-marker-group")}} Pseudoelement generiert und, wenn ja, ob es entweder `before` oder `after` den Inhalten des Containers in der standardmäßigen visuellen und Tab-Reihenfolge platziert werden soll.

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
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudoelement wird als Geschwister der Kind-DOM-Elemente des Scroll-Containers generiert, das ihnen unmittelbar vorangeht, sowie allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Es erscheint am Ende der Tabulatorreihenfolge und der Layoutboxreihenfolge des Containers (aber nicht der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudoelement wird als Geschwister der Kind-DOM-Elemente des Scroll-Containers generiert, das ihnen unmittelbar vorangeht, sowie allen generierten {{cssxref("::scroll-button()")}} Pseudoelementen. Die Scroll-Marker-Gruppe erscheint am Anfang der Tabulatorreihenfolge und der Layoutboxreihenfolge des Containers.

- `none`
  - : Kein `::scroll-marker-group` Pseudoelement wird am Element generiert. Dies ist der Standardwert.

> [!NOTE]
> Es ist eine bewährte Praxis, die visuelle Rendering-Position der Scroll-Marker-Gruppe mit der Tab-Reihenfolge abzugleichen. Wenn Sie die Markergruppe am Anfang des Inhalts mit auf {{cssxref("::scroll-marker-group")}} angewendeten Stilen positionieren, setzen Sie sie zu Beginn der Tab-Reihenfolge mit `before`. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie am Ende der Tab-Reihenfolge mit `after`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) für vollständige Beispiele, die die `scroll-marker-group` Eigenschaft verwenden.

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

Wir wandeln unser `<ul>` in ein Karussell um, indem wir {{cssxref("display")}} auf `flex` setzen, wodurch eine einzelne, nicht umbrechende Zeile von `<li>` Elementen entsteht. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Wir verwandeln dann das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, der sicherstellt, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen eine Scroll-Marker-Gruppe mit der `scroll-marker-group` Eigenschaft und platzieren die Gruppe nach dem gesamten Inhalt.

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

Als nächstes gestalten wir die `<li>` Elemente, verwenden die {{cssxref("flex")}} Eigenschaft, um sie auf `33%` der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}} Wert von `start` bewirkt, dass die linke Seite des links sichtbarsten Elements an die linke Kante des Containers geschnappt wird, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudoelement, um für jedes Listenelement einen quadratischen Marker mit rotem Rand zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudoelement an, um die Scroll-Marker in einer Reihe mit einem Abstand von `0.2em` zwischen jedem anzuordnen.

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

Um schließlich eine gute Benutzererfahrung zu gewährleisten, gestalten wir den Marker des aktuell gescrollten Elements anders als die anderen und zielen auf den Marker mit der {{cssxref(":target-current")}} Pseudoklasse.

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

Beachten Sie die Platzierung der Scroll-Marker-Gruppe. Beachten Sie auch, wie die Tastatur-Tab-Reihenfolge für `before` versus `after` unterschiedlich ist und dass die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref(":target-current")}}
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
