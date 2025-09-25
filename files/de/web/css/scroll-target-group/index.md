---
title: scroll-target-group
slug: Web/CSS/scroll-target-group
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{SeeCompatTable}}

Die **`scroll-target-group`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element ein Scroll-Marker-Gruppen-Container ist.

## Syntax

```css
/* Keyword values */
scroll-target-group: none;
scroll-target-group: auto;

/* Global values */
scroll-target-group: inherit;
scroll-target-group: initial;
scroll-target-group: revert;
scroll-target-group: revert-layer;
scroll-target-group: unset;
```

Die `scroll-target-group` Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

### Werte

- `none`
  - : Das Element ist kein Scroll-Marker-Gruppen-Container.
- `auto`
  - : Das Element ist ein Scroll-Marker-Gruppen-Container.

## Beschreibung

Das Setzen von `scroll-target-group: auto` auf ein Element kennzeichnet es als einen **Scroll-Marker-Gruppen-Container**. Dies fasst eine Reihe von Navigationselementen zusammen, die es Nutzern ermöglichen, zwischen Elementen auf einer Seite zu navigieren (wie Karussellartikel oder Artikelsektionen) und hervorzuheben, welches Element derzeit angezeigt wird.

Alle {{htmlelement("a")}} Elemente mit Fragment-Identifikatoren innerhalb des Containers werden automatisch als Scroll-Marker festgelegt. Das Ankerelement, dessen Scroll-Ziel derzeit angezeigt wird, kann über die {{cssxref(":target-current")}} Pseudo-Klasse gestylt werden.

### Unterschiede zwischen `scroll-target-group` und `scroll-marker-group`

Scroll-Marker-Gruppen-Container, die mit `scroll-target-group` erstellt werden, verhalten sich sehr ähnlich wie diejenigen, die mit der {{cssxref("scroll-marker-group")}} Eigenschaft erstellt werden, mit einigen Unterschieden:

- Mit `scroll-target-group` müssen Sie Ihr eigenes Markup erstellen, um den Scroll-Marker-Gruppen-Container und die Scroll-Marker darzustellen, während `scroll-marker-group` automatisch eine Reihe von Pseudo-Elementen erstellt, um den Container ({{cssxref("::scroll-marker-group")}}) und die Marker (eine oder mehrere Instanzen von {{cssxref("::scroll-marker")}}) zu repräsentieren. Diese haben automatisch die erwarteten Navigationsverknüpfungen mit dem {{Glossary("scroll_container", "Scroll-Container")}}, auf dem sie erzeugt werden. Die Verwendung von `scroll-marker-group` bietet eine schnellere Einrichtung, da Sie Ihr eigenes Markup nicht verwenden müssen. Das Erstellen Ihres eigenen Markups und das Festlegen als Scroll-Marker-Gruppen-Container über `scroll-target-group` bietet jedoch mehr Kontrolle und Flexibilität.
- Links, die über `scroll-target-group` als Scroll-Marker gekennzeichnet sind, haben kein spezielles Navigationsverhalten, während Marker, die über `scroll-marker-group` erzeugt werden, automatisch [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Semantik zugewiesen bekommen, was bedeutet, dass sie sich wie ein einzelnes Element in der Tabulatorreihenfolge verhalten, und Nutzer können mit den Pfeiltasten zwischen Scroll-Markern wechseln. Auch hier bietet `scroll-marker-group` nützliches Standardverhalten, aber Sie haben die Flexibilität, alternative Semantik und Verhalten für Marker bereitzustellen, die mit `scroll-target-group` festgelegt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `scroll-target-group`

Dieses Beispiel zeigt eine Seite mit einem Inhaltsverzeichnis, das auf verschiedene Abschnitte verlinkt.

#### HTML

Unser Markup hat eine Reihe von {{htmlelement("section")}} Elementen, die Inhalte enthalten, und ein Inhaltsverzeichnis, das mit einer geordneten Liste ({{htmlelement("ol")}}/{{htmlelement("li")}}) und {{htmlelement("a")}} Elementen erstellt wurde.

```html
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapter 1</a></li>
    <li><a href="#ch2">Chapter 2</a></li>
    <li><a href="#ch3">Chapter 3</a></li>
    <li><a href="#ch4">Chapter 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Prose of the century</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapter 1</h2>

  <!-- ... -->
</section>
<section id="ch2" class="chapter">
  <h2>Chapter 2</h2>

  <!-- ... -->
</section>

<!-- ... -->
```

```html hidden live-sample___basic-usage
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapter 1</a></li>
    <li><a href="#ch2">Chapter 2</a></li>
    <li><a href="#ch3">Chapter 3</a></li>
    <li><a href="#ch4">Chapter 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>My story</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapter 1</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</section>
<section id="ch2" class="chapter">
  <h2>Chapter 2</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch3" class="chapter">
  <h2>Chapter 3</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch4" class="chapter">
  <h2>Chapter 4</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
```

#### CSS

Wir haben den größten Teil des Stylings zur Kürze weggelassen. Am relevantesten für dieses Beispiel ist, dass wir `scroll-target-group: auto` auf dem `<ol>` gesetzt haben, um es in einen Scroll-Marker-Gruppen-Container zu verwandeln und den Algorithmus des Browsers zu aktivieren, der berechnet, welches `<a>` Element zu einem bestimmten Zeitpunkt das `:target-current` ist (d.h. welches Linkziel gerade angezeigt wird). Wir stylen dann die `:target-current` Pseudo-Klasse mit einer `red` {{cssxref("color")}}, damit sie deutlich hervorsticht.

```css hidden live-sample___basic-usage
body {
  font: 1.2em / 1.5 system-ui;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

section {
  padding-top: 60px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

ol {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
  background: white;
}
```

```css live-sample___basic-usage
ol {
  scroll-target-group: auto;
}

:target-current {
  color: red;
}
```

#### Ergebnis

Probieren Sie es aus, indem Sie die Links aktivieren und scrollen. Sie werden sehen, dass sich das rote Highlight in jedem Fall zwischen den Links bewegt, um den Abschnitt anzuzeigen, der gerade angezeigt wird.

{{EmbedLiveSample("basic-usage", "100%", 500)}}

### CSS-Karussell mit `scroll-target-group` Scroll-Markern

Dieses Beispiel zeigt, wie man [CSS-Karussell](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) Scroll-Marker mit `scroll-target-group` erstellt. Der Code für dieses Beispiel ähnelt unserem Beispiel [Karussell mit einzelnen Seiten](/de/docs/Web/CSS/CSS_overflow/CSS_carousels#carousel_with_single_pages); wir erklären unten nur die Unterschiede.

#### HTML

Das Markup hat IDs auf den Listenelementen gesetzt, die jede Seite definieren, und eine geordnete Liste hinzugefügt, die wir mit CSS in einen Scroll-Marker-Gruppen-Container verwandeln werden.

```html live-sample___carousel
<h1>CSS carousel single item per page</h1>
<ul>
  <li id="page1">
    <h2>Page 1</h2>
  </li>
  <li id="page2">
    <h2>Page 2</h2>
  </li>
  <li id="page3">
    <h2>Page 3</h2>
  </li>
  <li id="page4">
    <h2>Page 4</h2>
  </li>
</ul>
<ol>
  <li><a href="#page1">1</a></li>
  <li><a href="#page2">2</a></li>
  <li><a href="#page3">3</a></li>
  <li><a href="#page4">4</a></li>
</ol>
```

#### CSS

Wir erstellen den Scroll-Marker-Gruppen-Container und die Scroll-Marker, indem wir `scroll-target-group` auf das `<ol>` Element setzen. Der Rest des Codes zum Stylen dieser Elemente ist sehr ähnlich, außer dass wir Elemente unserer Wahl (`<ol>` und `<a>`) anvisieren, anstatt die {{cssxref("::scroll-marker-group")}} und {{cssxref("::scroll-marker")}} Pseudo-Elemente.

Wir vervollständigen den Code, indem wir einige Styles auf die `:target-current`, `a:hover` und `a:focus` Zustände setzen, um anzuzeigen, welche Seite gerade angezeigt wird und welche Links fokussiert bzw. fokussiert werden.

```css hidden live-sample___carousel
/* General styles */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
}

button {
  background-color: white;
}

/* General styling of list as scrolling carousel */

ul {
  width: 100%;
  height: 400px;
  padding: 20px;
  gap: 4%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

ul li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  scroll-snap-align: center;
}

/* CSS scroll buttons */

/* Style the scroll buttons */

ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: black;
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
}

ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}

/* Position the scroll buttons */

ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}

ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  top: calc(anchor(bottom) - 80px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  top: calc(anchor(bottom) - 80px);
}
```

```css live-sample___carousel
ol {
  position: absolute;
  position-anchor: --my-carousel;
  top: calc(anchor(bottom) - 90px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;

  list-style-type: none;
  padding: 0;
  scroll-target-group: auto;
}

ol a {
  width: 28px;
  height: 28px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding-top: 4px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
}

ol a:hover,
ol a:focus,
:target-current {
  background-color: black;
  color: white;
}
```

#### Ergebnis

Versuchen Sie, auf eine dieser drei Arten zu navigieren: indem Sie die Scroll-Marker-Links aktivieren, horizontal scrollen oder die Scroll-Tasten auf beiden Seiten drücken. Sie werden sehen, dass sich das Highlight in jedem Fall zwischen den Links bewegt, um den Abschnitt anzuzeigen, der gerade angezeigt wird.

{{EmbedLiveSample("carousel", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}} und {{cssxref("::scroll-marker")}} Pseudo-Elemente
- {{cssxref(":target-current")}} Pseudo-Klasse
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
