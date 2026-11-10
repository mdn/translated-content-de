---
title: "`view-transition-name` CSS property"
short-title: view-transition-name
slug: Web/CSS/Reference/Properties/view-transition-name
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`view-transition-name`** legt fest, an welchem Schnappschuss einer [Ansichtsübergangsanimation](/de/docs/Web/API/View_Transition_API) ausgewählte Elemente teilnehmen. So können Sie diese Elemente getrennt vom Rest der Seite animieren, für den während eines Ansichtsübergangs standardmäßig eine Überblendanimation verwendet wird. Anschließend können Sie für diese Elemente eigene Animationsstile definieren.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-name: header;
view-transition-name: figure-caption;

/* Keyword values */
view-transition-name: none;
view-transition-name: match-element;

/* Global values */
view-transition-name: inherit;
view-transition-name: initial;
view-transition-name: revert;
view-transition-name: revert-layer;
view-transition-name: unset;
```

### Werte

- {{cssxref("custom-ident")}}
  - : Ein identifizierender Name, durch den das ausgewählte Element an einem vom Root-Schnappschuss getrennten Schnappschuss teilnimmt. `<custom-ident>` darf weder `auto`, `match-element` noch `none` oder ein Wert eines [CSS-weiten Schlüsselworts](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) sein.
- `match-element`
  - : Der Browser weist dem ausgewählten Element automatisch einen eindeutigen Namen zu. Dieser Name wird verwendet, um einen vom Rest der Seite getrennten Schnappschuss des Elements zu erstellen. (Der Name ist intern und kann nicht aus dem DOM ausgelesen werden.)
- `none`
  - : Das ausgewählte Element nimmt nicht an einem separaten Schnappschuss teil, es sei denn, ein übergeordnetes Element hat einen festgelegten `view-transition-name`. In diesem Fall wird es als Teil dieses Elements in den Schnappschuss aufgenommen.

## Beschreibung

Wenn auf eine Web-App ein Ansichtsübergang angewendet wird, werden standardmäßig alle Änderungen an der Benutzeroberfläche, die während dieses Übergangs auftreten, gemeinsam als Schnappschuss erfasst und animiert. Dies ist der Standard- oder `root`-Schnappschuss (siehe [Der Pseudoelementbaum des Ansichtsübergangs](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree)). Standardmäßig ist diese Animation eine sanfte Überblendung, die Sie in der [SPA-Demo zu Ansichtsübergängen](https://mdn.github.io/dom-examples/view-transitions/spa/) sehen können.

Wenn bestimmte Elemente während des Ansichtsübergangs anders als der `root`-Schnappschuss animiert werden sollen, können Sie ihnen einen anderen `view-transition-name` zuweisen, zum Beispiel:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Anschließend können Sie mithilfe der entsprechenden Pseudoelemente für Ansichtsübergänge – {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} – festlegen, welche Animationen für die Schnappschüsse vor und nach dem Übergang verwendet werden sollen. Zum Beispiel:

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Wenn Sie nicht möchten, dass für ein Element ein separater Schnappschuss erstellt wird, können Sie für `view-transition-name` den Wert `none` angeben:

```css
.dont-animate-me {
  view-transition-name: none;
}
```

Der `<custom-ident>`-Wert von `view-transition-name` muss für jedes gerenderte Element, das am Ansichtsübergang teilnimmt, eindeutig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird die {{JSxRef("Promise")}} von [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) zurückgewiesen und der Übergang übersprungen.

### `view-transition-name`-Werte automatisch festlegen

Manchmal möchten Sie mehrere Elemente der Benutzeroberfläche bei einem Ansichtsübergang getrennt animieren. Dies ist häufig der Fall, wenn Sie eine Liste von Elementen auf einer Seite haben und diese neu anordnen möchten:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>

  <!-- ... -->

  <li>Item 99</li>
</ul>
```

Jedem Element einen eindeutigen Namen zu geben, kann umständlich sein, insbesondere wenn die Anzahl der Elemente wächst:

```css-nolint
li:nth-child(1) {
  view-transition-name: item1;
}
li:nth-child(2) {
  view-transition-name: item2;
}
li:nth-child(3) {
  view-transition-name: item3;
}
li:nth-child(4) {
  view-transition-name: item4;
}

/* ... */

li:nth-child(99) {
  view-transition-name: item99;
}
```

Dieses Problem können Sie mit dem Wert `match-element` umgehen. Dadurch weist der Browser jedem ausgewählten Element einen eindeutigen internen `view-transition-name` zu:

```css
li {
  view-transition-name: match-element;
}
```

Da `match-element` automatische `view-transition-name`-Werte anhand der Elementidentität zuweist, kann es nur für Ansichtsübergänge innerhalb desselben Dokuments verwendet werden. Die automatisch erzeugten internen Kennungen lassen sich nicht auf andere Elemente oder Dokumente übertragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `view-transition-name`

Dieses Beispiel stammt aus der [SPA-Demo zu Ansichtsübergängen](https://mdn.github.io/dom-examples/view-transitions/spa/), einer einfachen Bildergalerie. Unter [Einfacher SPA-Ansichtsübergang](/de/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) finden Sie eine ausführlichere Erklärung zur Funktionsweise dieser Demo.

Die meisten Änderungen an der Benutzeroberfläche werden mit dem `root`-Übergangsschnappschuss animiert. Dem Element `<figcaption>` wird jedoch der `view-transition-name` `figure-caption` zugewiesen, damit es anders als der Rest der Seite animiert werden kann:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Der folgende Code wendet eine benutzerdefinierte Animation ausschließlich auf das Element `<figcaption>` an:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Wir erstellen eine benutzerdefinierte CSS-Animation und wenden sie auf die Pseudoelemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` an. Außerdem wenden wir weitere Stile an, um beide an derselben Position zu halten und zu verhindern, dass die Standardstile unsere benutzerdefinierten Animationen beeinträchtigen.

### Den Wert `match-element` verwenden

Dieses Beispiel enthält eine Liste von Technologien – HTML, CSS, SVG und JS –, die in einer Seitenleiste neben einem zunächst leeren Hauptinhaltsbereich angezeigt werden. Wenn Sie auf die Überschrift einer Technologie klicken, wird deren Inhalt in den angrenzenden Inhaltsbereich animiert, in dem weitere Details angezeigt werden.

#### HTML

Das Element {{htmlelement("main")}} enthält eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) und ein Element {{htmlelement("article")}}. Die untergeordneten {{htmlelement("li")}}-Elemente in der Liste enthalten jeweils ein {{htmlelement("a")}}-Element innerhalb einer [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).

```html
<main class="match-element-applied">
  <ul>
    <li>
      <h2><a href="#">HTML</a></h2>
      <h3>HyperText Markup Language</h3>
      <p>
        HyperText Markup Language (HTML) is the most basic building block of the
        web. It defines the meaning and structure of web content. HTML provides
        the fundamental building blocks for structuring web documents and apps.
      </p>
    </li>
    <li>
      <h2><a href="#">CSS</a></h2>
      <h3>Cascading Style Sheets</h3>
      <p>
        Cascading Style Sheets (CSS) is a stylesheet language used to describe
        the presentation of a document written in HTML or XML (including XML
        dialects such as SVG, MathML or XHTML). CSS describes how elements
        should be rendered on screen, on paper, in speech, or on other media.
      </p>
    </li>
    <li>
      <h2><a href="#">SVG</a></h2>
      <h3>Scalable Vector Graphics</h3>
      <p>
        Scalable Vector Graphics (SVG) is an XML-based markup language for
        describing two-dimensional based vector graphics.
      </p>
    </li>
    <li>
      <h2><a href="#">JS</a></h2>
      <h3>JavaScript</h3>
      <p>
        JavaScript (JS) is the web's native programming language. JavaScript is
        a lightweight, interpreted (or just-in-time compiled) programming
        language with first-class functions. While it is most well-known as the
        scripting language for web pages, many non-browser environments, such as
        Node.js, also use it.
      </p>
    </li>
  </ul>
  <article></article>
</main>
```

```html hidden
<form>
  <label for="match-element-checkbox">
    Apply <code>match-element</code> to list items?
  </label>
  <input type="checkbox" id="match-element-checkbox" checked />
</form>
```

#### CSS

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die `<li>`-Elemente und das `<article>`-Element nebeneinander anzuordnen und den Listeneinträgen in der ersten Spalte gleich viel Platz zu geben. Die Liste nimmt 35 % der Breite des Containers ein, während das `<article>`-Element den verbleibenden horizontalen Platz ausfüllt.

```css hidden
/* General styles and resets */
* {
  box-sizing: border-box;
  font-size: 0.9rem;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
li h2 {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  overflow: hidden;
  container-type: inline-size;
}

li p {
  display: none;
}

li.active-item p {
  display: block;
}

li:nth-child(1) {
  background-color: #cbc0d3;
  border: 20px solid #cbc0d3;
}

li:nth-child(2) {
  background-color: #efd3d7;
  border: 20px solid #efd3d7;
}

li:nth-child(3) {
  background-color: #feeafa;
  border: 20px solid #feeafa;
}

li:nth-child(4) {
  background-color: #dee2ff;
  border: 20px solid #dee2ff;
}

/* Links */

a {
  text-decoration: none;
  color: rgb(0 0 255 / 0.8);
}

a:hover,
a:focus {
  color: rgb(100 100 255);
}

/* Form and checkbox styles */
form {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
}
```

```css
main {
  container-type: inline-size;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2cqw;
  position: relative;
}

ul {
  width: 35cqw;
  display: flex;
  flex-direction: column;
  gap: 1cqw;
}

article {
  flex: 1;
}

li {
  flex: 1;
}
```

Außerdem definieren wir eine Regel, die Elemente mit der Klasse `active-item` auswählt. Wenn diese Klasse auf ein Element angewendet wird, positioniert die Regel es genau über dem `<article>`-Element. Die Klasse wird den Listeneinträgen per JavaScript zugewiesen, wenn auf ihre Links geklickt wird. Dadurch wird ein Ansichtsübergang gestartet.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 37cqw;
  width: calc(100% - 37cqw);
  height: 100%;
}
```

Standardmäßig werden alle Elemente eines Ansichtsübergangs gemeinsam in einer einzigen Überblendung animiert. In diesem Beispiel möchten wir jedoch, dass jeder Listeneintrag eine eigene Bewegungsanimation erhält. Dazu wenden wir `view-transition-name: match-element` auf jeden Listeneintrag an:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

Die Klasse `match-element-applied` wird standardmäßig auf das `<main>`-Element angewendet. Deshalb ist das Kontrollkästchen im Ergebnisbereich anfangs aktiviert. Wenn Sie es deaktivieren, wird die Klasse entfernt und stattdessen die standardmäßige Überblendanimation verwendet. Sie können das Kontrollkästchen umschalten, um die Standardanimation mit der Animation zu vergleichen, die bei Verwendung von `view-transition-name: match-element` angewendet wird.

Als Nächstes passen wir die Animation an: Mit dem Pseudoelement {{cssxref("::view-transition-group()")}} legen wir für alle Ansichtsübergangsgruppen (gekennzeichnet durch den Bezeichner `*`) eine {{cssxref("animation-duration")}} fest und geben allen alten und neuen Schnappschüssen eine {{cssxref("height")}} von `100%`. Dies gleicht Unterschiede zwischen den Seitenverhältnissen der alten und neuen Schnappschüsse aus und lässt die Animationen flüssiger wirken:

```css
::view-transition-group(*) {
  animation-duration: 0.5s;
}

html::view-transition-old(*),
html::view-transition-new(*) {
  height: 100%;
}
```

#### JavaScript

In diesem Beispiel wird den Listeneinträgen beim Klicken auf ihre Links die Klasse `active-item` zugewiesen. Dies geschieht über die Funktion `updateActiveItem()`:

```js
const mainElem = document.querySelector("main");
let prevElem;
let checkboxElem = document.querySelector("input");

// View transition code
function updateActiveItem(event) {
  // Get the list item that contains the clicked link
  const clickedElem = event.target.parentElement.parentElement;

  // Set the active-item class on the list item
  clickedElem.className = "active-item";

  // Keep track of the previous item that was clicked, if any.
  // Remove the active-item class from the previous item so that only
  // one list item is placed over the <article> at any one time
  if (prevElem === clickedElem) {
    prevElem.className = "";
    prevElem = undefined;
  } else if (prevElem) {
    prevElem.className = "";
    prevElem = clickedElem;
  } else {
    prevElem = clickedElem;
  }
}

mainElem.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent iframe from scrolling when clicked
  // Do nothing unless a link is clicked inside the <main> element
  if (event.target.tagName !== "A") {
    return;
  }

  // Run updateActiveItem() on its own if view transitions are not supported
  if (!document.startViewTransition) {
    updateActiveItem(event);
  } else {
    // Run updateActiveItem() via startViewTransition()
    const transition = document.startViewTransition(() =>
      updateActiveItem(event),
    );
  }
});

// Toggle the class on <main> to control whether or not match-element is applied

checkboxElem.addEventListener("change", () => {
  mainElem.classList.toggle("match-element-applied");
});
```

Wenn die Funktion `updateActiveItem()` über die Funktion `startViewTransition()` ausgeführt wird, wird die Anzeige der Technologiedetails flüssig animiert.

#### Ergebnis

Klicken Sie in der Seitenleiste auf die Überschrift einer Technologie und beobachten Sie, wie deren Inhalt in den Hauptinhaltsbereich animiert wird.

Außerdem gibt es ein standardmäßig aktiviertes Kontrollkästchen. Solange es aktiviert ist, wird `view-transition-name: match-element` angewendet. Deaktivieren Sie es und klicken Sie erneut auf eine Überschrift, um zu sehen, wie der Ansichtsübergang ohne `view-transition-name: match-element` funktioniert.

{{EmbedLiveSample("using_the_match-element_value", "", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-class")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-new()")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
