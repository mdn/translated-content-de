---
title: scroll-target-group
slug: Web/CSS/scroll-target-group
l10n:
  sourceCommit: ad57cae3faaec374c3e712d6994e7fc3cb9318db
---

Die **`scroll-target-group`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element ein Scroll-Marker-Gruppencontainer ist.

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

Die `scroll-target-group` Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

### Werte

- `none`
  - : Das Element ist kein Scroll-Marker-Gruppencontainer.
- `auto`
  - : Das Element ist ein Scroll-Marker-Gruppencontainer.

## Beschreibung

Die Einstellung von `scroll-target-group: auto` auf einem Element kennzeichnet es als **Scroll-Marker-Gruppencontainer**. Dies gruppiert eine Reihe von Navigationselementen zusammen, die Benutzern ermöglichen, zwischen Elementen auf einer Seite zu navigieren (wie Karussell-Elemente oder Artikelsektionen) und zu markieren, welches Element gerade sichtbar ist.

Alle {{htmlelement("a")}}-Elemente mit Fragment-Identifikatoren innerhalb des Containers werden automatisch als Scroll-Marker festgelegt. Das Ankerelement, dessen Scroll-Ziel gerade angezeigt wird, kann über die {{cssxref(":target-current")}} Pseudoklasse gestylt werden.

### Unterschiede zwischen `scroll-target-group` und `scroll-marker-group`

Scroll-Marker-Gruppencontainer, die mit `scroll-target-group` erstellt wurden, verhalten sich sehr ähnlich wie diejenigen, die mit der {{cssxref("scroll-marker-group")}} Eigenschaft erstellt wurden, mit einigen Unterschieden:

- Mit `scroll-target-group` müssen Sie Ihre eigene Markup-Struktur erstellen, um den Scroll-Marker-Gruppencontainer und die Scroll-Marker darzustellen, während `scroll-marker-group` automatisch eine Reihe von Pseudoelementen erstellt, um den Container ({{cssxref("::scroll-marker-group")}}) und die Marker (eine oder mehrere Instanzen von {{cssxref("::scroll-marker")}}) darzustellen. Diese haben automatisch die erwarteten Navigationseigenschaften mit dem {{Glossary("scroll_container", "Scroll-Container")}}, auf dem sie generiert werden. Die Verwendung von `scroll-marker-group` bietet eine schnellere Einrichtung, da Sie Ihren eigenen Markup nicht verwenden müssen. Das Erstellen Ihres eigenen Markups und Festlegen als Scroll-Marker-Gruppencontainer über `scroll-target-group` bietet jedoch mehr Kontrolle und Flexibilität.
- Links, die über `scroll-target-group` als Scroll-Marker gekennzeichnet sind, haben kein besonderes Navigationsverhalten, während Marker, die über `scroll-marker-group` generiert werden, automatisch [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantiken angewendet bekommen, was bedeutet, dass sie sich wie ein einziges Element in der Tab-Reihenfolge verhalten und Benutzer mit den Pfeiltasten zwischen Scroll-Markern wechseln können. Auch hier bietet `scroll-marker-group` nützliches Standardverhalten, aber Sie haben die Flexibilität, alternative Semantiken und Verhaltensweisen für Marker anzugeben, die mit `scroll-target-group` festgelegt wurden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `scroll-target-group`

Dieses Beispiel zeigt eine Seite mit einem Inhaltsverzeichnis, das auf verschiedene Abschnitte verweist.

#### HTML

Unser Markup enthält eine Reihe von {{htmlelement("section")}}-Elementen mit Inhalt und ein Inhaltsverzeichnis, das mit einer geordneten Liste ({{htmlelement("ol")}}/{{htmlelement("li")}}) und {{htmlelement("a")}}-Elementen erstellt wurde.

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
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
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
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapter 1</h2>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
  <p>
    Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
    bespoke. Art party quinoa stumptown celiac, sed chillwave 3 wolf moon.
    Scenester fugiat pariatur, seitan selvage excepteur chambray yuccie artisan.
    Sunt schlitz ugh, et jawn sus four loko pop-up post-ironic photo booth
    occaecat deep v 8-bit tacos marfa. Tattooed ipsum tbh occaecat umami four
    loko adaptogen taiyaki truffaut hexagon neutral milk hotel.
  </p>
  <p>
    Austin mukbang scenester pabst, kale chips helvetica in selvage tote bag
    drinking vinegar craft beer pickled meh subway tile +1. Big mood kogi blog,
    vape hella seitan veniam.
  </p>
</section>
<section id="ch2" class="chapter">
  <h2>Chapter 2</h2>
  <p>
    Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
    bespoke. Art party quinoa stumptown celiac, sed chillwave 3 wolf moon.
    Scenester fugiat pariatur, seitan selvage excepteur chambray yuccie artisan.
    Sunt schlitz ugh, et jawn sus four loko pop-up post-ironic photo booth
    occaecat deep v 8-bit tacos marfa. Tattooed ipsum tbh occaecat umami four
    loko adaptogen taiyaki truffaut hexagon neutral milk hotel.
  </p>
  <p>
    Chillwave gastropub chartreuse deserunt butcher umami meditation ennui. Sus
    post-ironic affogato irony non succulents la croix labore tousled. Tumblr
    selvage sartorial taxidermy yes plz fashion axe deserunt. Big mood
    humblebrag hammock meditation, four dollar toast vice bruh minim tacos
    chartreuse drinking vinegar sunt yes plz YOLO cred. Synth chartreuse est,
    wayfarers pop-up ut gorpcore consequat ullamco meh lyft crucifix selvage
    occaecat.
  </p>
</section>
<section id="ch3" class="chapter">
  <h2>Chapter 3</h2>
  <p>
    Chillwave gastropub chartreuse deserunt butcher umami meditation ennui. Sus
    post-ironic affogato irony non succulents la croix labore tousled. Tumblr
    selvage sartorial taxidermy yes plz fashion axe deserunt. Big mood
    humblebrag hammock meditation, four dollar toast vice bruh minim tacos
    chartreuse drinking vinegar sunt yes plz YOLO cred. Synth chartreuse est,
    wayfarers pop-up ut gorpcore consequat ullamco meh lyft crucifix selvage
    occaecat.
  </p>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
<section id="ch4" class="chapter">
  <h2>Chapter 4</h2>
  <p>
    Austin mukbang scenester pabst, kale chips helvetica in selvage tote bag
    drinking vinegar craft beer pickled meh subway tile +1. Big mood kogi blog,
    vape hella seitan veniam.
  </p>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
```

#### CSS

Wir haben den größten Teil des Styles aus Platzgründen ausgeblendet. Besonders relevant für dieses Beispiel ist, dass wir `scroll-target-group: auto` auf dem `<ol>` gesetzt haben, um es in einen Scroll-Marker-Gruppencontainer zu verwandeln und den Algorithmus des Browsers zu aktivieren, um zu berechnen, welches `<a>`-Element zu einem bestimmten Zeitpunkt `:target-current` ist (also welches Link-Ziel derzeit sichtbar ist). Wir stylen dann die `:target-current` Pseudoklasse mit einer `roten` {{cssxref("color")}}, sodass sie deutlich hervorsticht.

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

Versuchen Sie, durch Aktivieren der Links und durch Scrollen zu navigieren. Sie werden sehen, dass in jedem Fall die rote Markierung zwischen den Links wechselt, um abzugleichen, welcher Abschnitt gerade angezeigt wird.

{{EmbedLiveSample("basic-usage", "100%", 500)}}

### CSS-Karussell mit `scroll-target-group` Scroll-Markern

Dieses Beispiel zeigt, wie man [CSS-Karussell](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) Scroll-Marker mit `scroll-target-group` erstellt. Der Code für dieses Beispiel ähnelt unserem [Karussell mit Einzelseiten](/de/docs/Web/CSS/CSS_overflow/CSS_carousels#carousel_with_single_pages) Beispiel; wir erklären nur die Unterschiede unten.

#### HTML

Das Markup hat IDs auf den Listenelementen, die jede Seite definieren, und eine geordnete Liste hinzugefügt, die wir mit CSS in einen Scroll-Marker-Gruppencontainer verwandeln werden.

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

Wir erstellen den Scroll-Marker-Gruppencontainer und die Scroll-Marker, indem wir `scroll-target-group` auf dem `<ol>`-Element setzen. Der Rest des Codes zum Stylen dieser ist sehr ähnlich, außer dass wir auf Elemente unserer Wahl (`<ol>` und `<a>`) statt auf die {{cssxref("::scroll-marker-group")}} und {{cssxref("::scroll-marker")}} Pseudoelemente abzielen.

Wir vervollständigen den Code, indem wir einige Styles für die `:target-current`, `a:hover`, und `a:focus` Zustände setzen, um anzuzeigen, welche Seite derzeit angezeigt werden und welche Links hervorgehoben/fokussiert werden.

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
  background-color: #eee;
  border: 1px solid #ddd;
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
  color: rgb(0 0 0 / 1);
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
  anchor-name: --myCarousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --myCarousel;
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
  position-anchor: --myCarousel;
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

Versuchen Sie, auf drei verschiedene Arten zu navigieren: durch Aktivierung der Scroll-Marker-Links, durch horizontales Scrollen oder durch Drücken der Scroll-Tasten auf beiden Seiten. Sie werden sehen, dass in jedem Fall die Markierung zwischen den Links wechselt, um abzugleichen, welcher Abschnitt gerade angezeigt wird.

{{EmbedLiveSample("carousel", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}} und {{cssxref("::scroll-marker")}} Pseudoelemente
- {{cssxref(":target-current")}} Pseudoklasse
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
