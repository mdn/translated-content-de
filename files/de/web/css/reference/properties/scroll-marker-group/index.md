---
title: scroll-marker-group
slug: Web/CSS/Reference/Properties/scroll-marker-group
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{seecompattable}}

Die **`scroll-marker-group`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein {{Glossary("scroll_container", "Scroll-Container")}} Element ein {{cssxref("::scroll-marker-group")}} Pseudo-Element generiert. Falls vorhanden, gibt die Eigenschaft auch an, ob die Scroll-Marker-Gruppe `before` _oder_ `after` den Inhalten des Scroll-Gruppen-Containers in der Standardanzeige und in der Tab-Reihenfolge platziert werden soll.

> [!NOTE]
> Um einen Scroll-Marker-Gruppencontainer aus einem vorhandenen Element zu erstellen, das eine Reihe von {{htmlelement("a")}} Elementen enthält, verwenden Sie die {{cssxref("scroll-target-group")}} Eigenschaft. Lesen Sie über die [Unterschiede im Verhalten](/de/docs/Web/CSS/Reference/Properties/scroll-target-group#differences_between_scroll-target-group_and_scroll-marker-group) zwischen den beiden.

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
  - : Ein {{cssxref("::scroll-marker-group")}} Pseudo-Element wird als Geschwister der Kindelemente des Scroll-Containers generiert, das ihnen unmittelbar vorausgeht, sowie allen generierten {{cssxref("::scroll-button()")}} Pseudo-Elementen. Es erscheint am Ende der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Containers (aber nicht der DOM-Struktur).

- `before`
  - : Ein `::scroll-marker-group` Pseudo-Element wird als Geschwister der Kindelemente des Scroll-Containers generiert, das ihnen unmittelbar vorausgeht, sowie allen generierten {{cssxref("::scroll-button()")}} Pseudo-Elementen. Die Scroll-Marker-Gruppe erscheint am Anfang der Tab-Reihenfolge und der Layout-Box-Reihenfolge des Containers.

- `none`
  - : Es wird kein `::scroll-marker-group` Pseudo-Element auf dem Element generiert. Dies ist der Standardwert.

> [!NOTE]
> Als beste Praxis für die Barrierefreiheit passen Sie die visuelle Rendering-Position des Scroll-Marker-Gruppencontainers an die Tab-Reihenfolge an. Wenn Sie die Marker-Gruppe mit Stilen, die auf {{cssxref("::scroll-marker-group")}} angewendet werden, am Anfang des Inhalts positionieren, setzen Sie sie mit `before` an den Anfang der Tab-Reihenfolge. Wenn Sie die Gruppe am Ende des Inhalts positionieren, setzen Sie sie mit `after` ans Ende der Tab-Reihenfolge.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/Guides/Overflow/Carousels) für vollständige Beispiele, die die `scroll-marker-group` Eigenschaft verwenden.

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

Wir konvertieren unser `<ul>` in ein Karussell, indem wir das {{cssxref("display")}} auf `flex` setzen, um eine einzelne, nicht umbrechende Reihe von `<li>` Elementen zu erstellen. Die {{cssxref("overflow-x")}} Eigenschaft ist auf `auto` gesetzt, was bedeutet, dass wenn die Elemente ihren Container auf der x-Achse überlaufen, der Inhalt horizontal scrollt. Dann konvertieren wir das `<ul>` in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}, und stellen sicher, dass Elemente immer einrasten, wenn der Container mit einem {{cssxref("scroll-snap-type")}} Wert von `mandatory` gescrollt wird.

Wir erstellen einen Scroll-Marker-Gruppencontainer mit der `scroll-marker-group` Eigenschaft, indem wir die Gruppe nach dem gesamten Inhalt platzieren.

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

Als nächstes stylen wir die `<li>` Elemente, indem wir die {{cssxref("flex")}} Eigenschaft verwenden, um sie `33%` der Breite des Containers zu machen. Der {{cssxref("scroll-snap-align")}} Wert von `start` sorgt dafür, dass die linke Seite des am weitesten links sichtbaren Elements an den linken Rand des Containers einrastet, wenn der Inhalt gescrollt wird.

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

Wir verwenden dann das {{cssxref("::scroll-marker")}} Pseudo-Element, um einen quadratischen Marker für jedes Listenelement mit einem roten Rand zu erstellen, und wenden Stile auf das {{cssxref("::scroll-marker-group")}} Pseudo-Element an, um die Scroll-Marker in einer Reihe mit einem Abstand von `0.2em` zwischen jedem anzuordnen.

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

Schließlich, um eine gute Benutzererfahrung zu gewährleisten, stylen wir den Marker des gerade gescrollten Elements anders als die anderen, indem wir den Marker mit der {{cssxref(":target-current")}} Pseudo-Klasse anvisieren.

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

Beachten Sie die Platzierung des Scroll-Marker-Gruppencontainers. Beobachten Sie, wie die Tastatur-Reihenfolge für `before` gegenüber `after` unterschiedlich ist, und beachten Sie, dass die Gruppe verschwindet, wenn der Wert auf `none` gesetzt ist.

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
- [Erstellen von CSS-Karussellen](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Carousel Gallery](https://chrome.dev/carousel/) über chrome.dev (2025)
