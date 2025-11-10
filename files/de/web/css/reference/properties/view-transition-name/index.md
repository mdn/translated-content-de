---
title: view-transition-name
slug: Web/CSS/Reference/Properties/view-transition-name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt den [View-Transition](/de/docs/Web/API/View_Transition_API)-Schnappschuss, an dem ausgewählte Elemente teilnehmen werden. Dies ermöglicht es Ihnen, diese Elemente separat vom Rest der Seite zu animieren, die während eines View-Transitions die Standard-Cross-Fade-Animation verwendet. Sie können dann benutzerdefinierte Animationsstile für diese Elemente definieren.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-name: header;
view-transition-name: figure-caption;

/* Keyword value */
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
  - : Ein identifizierender Name, der bewirkt, dass das ausgewählte Element an einem separaten Schnappschuss vom Root-Schnappschuss teilnimmt. Das `<custom-ident>` kann nicht `auto`, `match-element`, `none` oder ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) sein.
- `match-element`
  - : Der Browser weist dem ausgewählten Element automatisch einen eindeutigen Namen zu. Dieser Name wird verwendet, um das Element getrennt von allen anderen Elementen auf der Seite zu schnappschießen. (Dieser Name ist intern und kann nicht aus dem DOM gelesen werden.)
- `none`
  - : Das ausgewählte Element wird nicht an einem separaten Schnappschuss teilnehmen, es sei denn, es hat ein übergeordnetes Element mit einem gesetzten `view-transition-name`, in diesem Fall wird es als Teil dieses Elements geschnappschossen.

## Beschreibung

Standardmäßig werden bei Anwendung einer View-Transition auf eine Webanwendung alle Änderungen am UI, die während dieser Transition auftreten, zusammen gesnapshottet und animiert. Dies ist der Standard- oder „Root“-Schnappschuss (siehe [Der View-Transition-Pseudo-Elementbaum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree)). Standardmäßig ist diese Animation ein sanftes Cross-Fade, das in der Praxis in der [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) zu sehen ist.

Wenn Sie möchten, dass bestimmte Elemente während der View-Transition anders als der `root`-Schnappschuss animiert werden, können Sie dies tun, indem Sie ihnen einen anderen `view-transition-name` geben, zum Beispiel:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Sie können dann festlegen, welche Animationen Sie für die Vor- und Nach-Schnappschüsse mit den entsprechenden View-Transition-Pseudo-Elementen - {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} - wünschen. Zum Beispiel:

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Wenn Sie nicht möchten, dass ein Element separat gesnapshottet wird, können Sie einen `view-transition-name`-Wert von `none` angeben:

```css
.dont-animate-me {
  view-transition-name: none;
}
```

Das `view-transition-name` `<custom-ident>` muss für jedes gerenderte Element, das an der View-Transition teilnimmt, eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird die [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{JSxRef("Promise")}} zurückgewiesen und die Transition übersprungen.

### Automatisches Festlegen von `view-transition-name`-Werten

Manchmal möchten Sie mehrere UI-Elemente in einer View-Transition separat animieren. Dies ist häufig der Fall, wenn Sie eine Liste von Elementen auf einer Seite haben und sie auf eine bestimmte Weise umarrangieren möchten:

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

Jedem einen eindeutigen Namen zu geben, kann unbequem sein, besonders wenn die Anzahl der Elemente größer wird:

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

Um dieses Problem zu umgehen, können Sie den `match-element`-Wert verwenden, der bewirkt, dass der Browser jedem ausgewählten Element einen eindeutigen internen `view-transition-name` zuweist:

```css
li {
  view-transition-name: match-element;
}
```

Da `match-element` automatische `view-transition-name`-Werte basierend auf der Element-Identität zuweist, kann es nur für gleich-dokumentierte View-Transitions verwendet werden. Die automatisch generierten internen Identifizierer können nicht auf verschiedene Elemente oder Dokumente übertragen werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `view-transition-name`

Dieses Beispiel stammt aus der [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/), einer einfachen Bildgalerie. Die [Grundlegende SPA-View-Transition](/de/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) bietet eine ausführlichere Erklärung, wie dieses Demo funktioniert.

Die meisten UI-Änderungen werden mit dem „Root“-Transition-Schnappschuss animiert. Allerdings wird dem `<figcaption>` ein `view-transition-name` von `figure-caption` gegeben, um es anders als den Rest der Seite zu animieren:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Der folgende Code wendet eine benutzerdefinierte Animation nur auf das `<figcaption>` an:

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

Wir erstellen eine benutzerdefinierte CSS-Animation und wenden sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente an. Wir wenden auch andere Stile an, um sicherzustellen, dass sie beide am gleichen Ort bleiben und der Standardstil nicht unsere benutzerdefinierten Animationen beeinträchtigt.

### Verwendung des `match-element`-Wertes

Dieses Beispiel enthält eine Liste von Technologien – HTML, CSS, SVG und JS – die in einer Seitenleiste neben einem Hauptinhaltsbereich angezeigt werden, der zunächst leer ist. Das Klicken auf eine Technologieüberschrift animiert ihren Inhalt in den angrenzenden Inhaltsbereich, der weitere Details anzeigt.

#### HTML

Das {{htmlelement("main")}}-Element enthält eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) und ein {{htmlelement("article")}}-Element. Die mehreren Kind-{{htmlelement("li")}}-Elemente innerhalb der Liste enthalten jeweils ein {{htmlelement("a")}}-Element innerhalb einer [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um das `<li>` und das `<article>` nebeneinander anzuordnen, und um die Listenelemente so zu gestalten, dass sie im ersten Feld den gleichen Platz einnehmen. Die Liste belegt 35% der Breite des Containers, während das `<article>` den verbleibenden verfügbaren horizontalen Raum ausfüllt.

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

Wir definieren auch eine Regel, die Elemente mit der `active-item`-Klasse auswählt. Wenn diese Klasse auf ein Element angewendet wird, bewirkt die Regel, dass es genau über dem `<article>`-Element positioniert wird. Diese Klasse wird über JavaScript auf die Listenelemente angewendet, wenn ihre Links angeklickt werden, was eine View-Transition einleitet.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 37cqw;
  width: calc(100% - 37cqw);
  height: 100%;
}
```

Standardmäßig werden alle Elemente in einer View-Transition zusammen in einem einzigen Cross-Fade animiert. In diesem Beispiel möchten wir dies jedoch nicht — wir wollen, dass jedes Listenelement seine eigene Bewegungsanimation hat. Das erreichen wir, indem wir `view-transition-name: match-element` auf jedes Listenelement anwenden:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

Die `match-element-applied`-Klasse wird standardmäßig auf das `<main>`-Element angewendet, weshalb das Kontrollkästchen im Ergebnisrahmen zunächst ausgewählt ist. Wenn Sie es deaktivieren, wird die Klasse entfernt und die Standard-Cross-Fade-Animation tritt in Kraft. Sie können das Kontrollkästchen umschalten, um die Standardanimation mit derjenigen zu vergleichen, die angewendet wird, wenn `view-transition-name: match-element` verwendet wird.

Als nächstes passen wir die Animation an, indem wir das {{cssxref("::view-transition-group()")}}-Pseudo-Element verwenden, um allen View-Transition-Gruppen (bezeichnet durch den `*`-Bezeichner) eine {{cssxref("animation-duration")}} zuzuweisen und allen alten und neuen Schnappschüssen eine {{cssxref("height")}} von `100%` zu geben. Dies umgeht Unterschiede in den Seitenverhältnissen der alten und neuen Schnappschüsse und lässt die Animationen flüssiger aussehen:

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

In diesem Beispiel wird die `active-item`-Klasse auf die Listenelemente angewendet, wenn ihre Links angeklickt werden; dies wird über die Funktion `updateActiveItem()` erreicht:

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

Das Ausführen der `updateActiveItem()`-Funktion über die `startViewTransition()`-Funktion animiert die Darstellung der Technologiedetails reibungslos.

#### Ergebnis

Klicken Sie auf eine Technologieüberschrift in der Seitenleiste und beobachten Sie den Animationseffekt ihres Inhalts in den Hauptinhaltsbereich.

Es gibt auch ein Kontrollkästchen, das standardmäßig ausgewählt ist, sodass `view-transition-name: match-element` angewendet wird. Deaktivieren Sie das Kontrollkästchen und klicken Sie erneut auf eine Überschrift, um zu sehen, wie die View-Transition ohne `view-transition-name: match-element` funktioniert.

{{EmbedLiveSample("using_the-match-element_value", "", "400")}}

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
