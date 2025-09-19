---
title: scroll-target-group
slug: Web/CSS/scroll-target-group
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
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

Die Eigenschaft `scroll-target-group` wird als einer der folgenden Schlüsselwortwerte festgelegt:

### Werte

- `none`
  - : Das Element ist kein Scroll-Marker-Gruppencontainer.
- `auto`
  - : Das Element ist ein Scroll-Marker-Gruppencontainer.

## Beschreibung

Durch das Setzen von `scroll-target-group: auto` auf ein Element wird es als **Scroll-Marker-Gruppencontainer** gekennzeichnet. Dies gruppiert eine Reihe von Navigationselementen, die es Benutzern ermöglichen, zwischen Elementen auf einer Seite zu navigieren (wie z.B. Karussellelemente oder Artikelsektionen) und hervorheben, welches Element aktuell sichtbar ist.

Alle {{htmlelement("a")}} Elemente mit Fragment-Identifikatoren innerhalb des Containers werden automatisch als Scroll-Marker festgelegt. Das Anker-Element, dessen Scroll-Ziel derzeit sichtbar ist, kann über die {{cssxref(":target-current")}} Pseudo-Klasse gestylt werden.

### Unterschiede zwischen `scroll-target-group` und `scroll-marker-group`

Scroll-Marker-Gruppencontainer, die mit `scroll-target-group` erstellt werden, verhalten sich sehr ähnlich wie die mit der {{cssxref("scroll-marker-group")}} Eigenschaft erstellten, mit einigen Unterschieden:

- Mit `scroll-target-group` müssen Sie Ihr eigenes Markup erstellen, um den Scroll-Marker-Gruppencontainer und die Scroll-Marker darzustellen, während `scroll-marker-group` automatisch eine Reihe von Pseudo-Elementen erstellt, um den Container ({{cssxref("::scroll-marker-group")}}) und die Marker (eine oder mehrere Instanzen von {{cssxref("::scroll-marker")}}) darzustellen. Diese haben automatisch die erwarteten Navigationszuordnungen mit dem {{Glossary("scroll_container", "Scroll-Container")}}, auf dem sie generiert werden. Die Verwendung von `scroll-marker-group` bietet eine schnellere Einrichtung, da Sie Ihr eigenes Markup nicht verwenden müssen. Das Erstellen Ihres eigenen Markups und Festlegen als Scroll-Marker-Gruppencontainer über `scroll-target-group` bietet jedoch mehr Kontrolle und Flexibilität.
- Links, die über `scroll-target-group` als Scroll-Marker bezeichnet werden, haben kein spezielles Navigationsverhalten, wohingegen Marker, die über `scroll-marker-group` generiert werden, automatisch die [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Semantik haben, was bedeutet, dass sie sich wie ein einzelnes Element in der Tab-Reihenfolge verhalten und Benutzer zwischen Scroll-Markern mit den Pfeiltasten wechseln können. Wiederum bietet `scroll-marker-group` nützliches Standardverhalten, jedoch haben Sie die Flexibilität, alternative Semantik und Verhalten für Marker anzugeben, die mit `scroll-target-group` spezifiziert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `scroll-target-group`

Dieses Beispiel zeigt eine Seite mit einem Inhaltsverzeichnis, das zu verschiedenen Abschnitten verlinkt.

#### HTML

Unser Markup enthält eine Reihe von {{htmlelement("section")}} Elementen mit Inhalt und ein Inhaltsverzeichnis, das mit einer geordneten Liste ({{htmlelement("ol")}}/{{htmlelement("li")}}) und {{htmlelement("a")}} Elementen erstellt wird.

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

Wir haben den Großteil des Stylings zur Kürze unterdrückt. Am relevantesten für dieses Beispiel haben wir `scroll-target-group: auto` auf dem `<ol>` gesetzt, um es in einen Scroll-Marker-Gruppencontainer zu verwandeln und den Algorithmus des Browsers zu aktivieren, der berechnet, welches `<a>` Element zum `:target-current` zu einem gegebenen Zeitpunkt wird (das heißt, welches Link-Ziel gerade sichtbar ist). Wir stylen dann die `:target-current` Pseudo-Klasse mit einer `red` {{cssxref("color")}}, sodass sie deutlich hervortritt.

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

Versuchen Sie, durch Aktivieren der Links zu navigieren und durch Scrollen. Sie werden sehen, dass sich in jedem Fall die rote Hervorhebung zwischen den Links bewegt, um dem aktuell angezeigten Abschnitt zu entsprechen.

{{EmbedLiveSample("basic-usage", "100%", 500)}}

### CSS-Karussell mit `scroll-target-group` Scroll-Marker

Dieses Beispiel zeigt, wie Scroll-Marker für ein [CSS-Karussell](/de/docs/Web/CSS/CSS_overflow/CSS_carousels) mit `scroll-target-group` erstellt werden. Der Code für dieses Beispiel ähnelt unserem [Karussell mit Einzelseiten](/de/docs/Web/CSS/CSS_overflow/CSS_carousels#carousel_with_single_pages) Beispiel; wir erklären nur die Unterschiede unten.

#### HTML

Das Markup hat IDs auf den Listenelementen angegeben, die jede Seite definieren, und eine geordnete Liste hinzugefügt, die wir mit CSS in einen Scroll-Marker-Gruppencontainer verwandeln.

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

Wir erstellen den Scroll-Marker-Gruppencontainer und die Scroll-Marker, indem wir `scroll-target-group` auf das `<ol>` Element setzen. Der Rest des Codes für das Styling dieser ist sehr ähnlich, außer dass wir eigene Elemente (`<ol>` und `<a>`) anvisieren, anstatt der {{cssxref("::scroll-marker-group")}} und {{cssxref("::scroll-marker")}} Pseudo-Elemente.

Wir vervollständigen den Code, indem wir Stile auf die `:target-current`, `a:hover` und `a:focus` Zustände setzen, um anzuzeigen, welche Seite gerade angezeigt wird und welche Links gerade fokussiert/gehovered werden.

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

Versuchen Sie, auf drei verschiedene Arten zu navigieren: durch Aktivieren der Scroll-Marker-Links, durch horizontales Scrollen oder durch Drücken der Scroll-Schaltflächen auf beiden Seiten. Sie werden feststellen, dass sich in jedem Fall die Hervorhebung zwischen den Links bewegt, um dem Abschnitt zu entsprechen, der gerade angezeigt wird.

{{EmbedLiveSample("carousel", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}} und {{cssxref("::scroll-marker")}} Pseudo-Elemente
- {{cssxref(":target-current")}} Pseudo-Klasse
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
