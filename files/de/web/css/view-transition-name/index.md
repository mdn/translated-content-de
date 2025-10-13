---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [View-Transition](/de/docs/Web/API/View_Transition_API) Snapshot fest, an dem ausgewählte Elemente teilnehmen werden. Dies ermöglicht es Ihnen, diese Elemente separat vom Rest der Seite zu animieren, die während eines View-Transitions die standardmäßige Überblendanimation verwendet. Sie können dann benutzerdefinierte Animationsstile für diese Elemente definieren.

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
  - : Ein identifizierender Name, der dazu führt, dass das ausgewählte Element an einem separaten Snapshot vom Root-Snapshot teilnimmt. Das `<custom-ident>` kann nicht `auto`, `match-element`, `none` oder ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords) sein.
- `match-element`
  - : Der Browser weist dem ausgewählten Element automatisch einen einzigartigen Namen zu. Dieser Name wird verwendet, um das Element separat von allen anderen Elementen auf der Seite zu snapshottieren. (Dieser Name ist intern und kann nicht aus dem DOM gelesen werden.)
- `none`
  - : Das ausgewählte Element wird nicht an einem separaten Snapshot teilnehmen, es sei denn, es hat ein Elternelement mit einem gesetzten `view-transition-name`, in diesem Fall wird es als Teil dieses Elements gesnapshottiert.

## Beschreibung

Standardmäßig werden bei Anwendung eines View-Transitions auf eine Web-App alle Änderungen an der Benutzeroberfläche, die während dieses Transitions auftreten, gemeinsam gesnapshottiert und animiert. Dies ist der Standard- oder `root`-Snapshot (siehe [Der View-Transition-Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree)). Standardmäßig ist diese Animation eine sanfte Überblendung, die in der Aktion im [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) gesehen werden kann.

Wenn Sie möchten, dass bestimmte Elemente während des View-Transitions anders als der `root`-Snapshot animiert werden, können Sie ihnen einen anderen `view-transition-name` geben, zum Beispiel:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Sie können dann angeben, welche Animationen Sie für die Vorher- und Nachher-Snapshots mithilfe der entsprechenden View-Transition-Pseudo-Elemente haben möchten — {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}. Zum Beispiel:

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Wenn Sie nicht möchten, dass ein Element separat gesnapshottiert wird, können Sie einen `view-transition-name`-Wert von `none` angeben:

```css
.dont-animate-me {
  view-transition-name: none;
}
```

Das `view-transition-name` `<custom-ident>` muss für jedes gerenderte Element, das an dem View-Transition teilnimmt, einzigartig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird die [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{JSxRef("Promise")}} abgelehnt und der Transition wird übersprungen.

### Automatische Angabe von `view-transition-name` Werten

Manchmal möchten Sie mehrere UI-Elemente separat in einem View-Transition animieren. Dies ist oft der Fall, wenn Sie eine Liste von Elementen auf einer Seite haben und diese in irgendeiner Weise umordnen möchten:

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

Jedem einen einzigartigen Namen zu geben, kann unbequem sein, besonders wenn die Anzahl der Elemente größer wird:

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

Um dieses Problem zu umgehen, können Sie den `match-element`-Wert verwenden, der dazu führt, dass der Browser jedem ausgewählten Element einen einzigartigen internen `view-transition-name` zuweist:

```css
li {
  view-transition-name: match-element;
}
```

Da `match-element` automatische `view-transition-name` Werte basierend auf der Elementidentität zuweist, kann es nur für View-Transitions im selben Dokument verwendet werden. Die automatisch generierten internen Bezeichner sind nicht übertragbar auf verschiedene Elemente oder Dokumente.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `view-transition-name`

Dieses Beispiel stammt aus dem [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/), einer einfachen Bildergalerie. Der [Grundlegende SPA-View-Transition](/de/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) bietet eine detailliertere Erklärung, wie dieses Demo funktioniert.

Die meisten UI-Änderungen werden mit dem `root`-Transition-Snapshot animiert. Allerdings wird dem `<figcaption>` ein `view-transition-name` von `figure-caption` zugewiesen, um es anders als den Rest der Seite zu animieren:

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

Wir erstellen eine benutzerdefinierte CSS-Animation und wenden sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente an. Wir wenden auch andere Stile an, um sie beide an derselben Stelle zu halten und zu verhindern, dass das Standardstyling in unsere benutzerdefinierten Animationen eingreift.

### Verwendung des `match-element` Wertes

Dieses Beispiel enthält eine Liste von Technologien – HTML, CSS, SVG und JS – die in einer Seitenleiste neben einem Hauptinhaltsbereich angezeigt werden, der anfangs leer ist. Wenn Sie auf die Überschrift einer Technologie klicken, wird deren Inhalt in den angrenzenden Inhaltsbereich animiert, der mehr Details anzeigt.

#### HTML

Das {{htmlelement("main")}}-Element enthält eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) und ein {{htmlelement("article")}}-Element. Die mehreren Kind-{{htmlelement("li")}}-Elemente in der Liste enthalten jeweils ein {{htmlelement("a")}}-Element innerhalb einer [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).

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

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die `<li>` und die `<article>` nebeneinander anzuordnen und die Listenelemente gleichmäßig im ersten Spaltenbereich zu verteilen. Die Liste nimmt 35% der Breite des Containers ein, während das `<article>` den restlichen verfügbaren horizontalen Raum ausfüllt.

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

Wir definieren auch eine Regel, die Elemente mit der `active-item` Klasse auswählt. Wenn diese Klasse auf ein Element angewendet wird, wird das Element so positioniert, dass es genau den `<article>` überdeckt. Diese Klasse wird den Listenelementen per JavaScript beim Klicken auf ihre Links angewendet, was einen View-Transition einleiten wird.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 37cqw;
  width: calc(100% - 37cqw);
  height: 100%;
}
```

Standardmäßig werden alle Elemente in einem View-Transition in einer einzelnen Überblendung animiert. In diesem Beispiel möchten wir dies jedoch nicht — wir möchten, dass jedes Listenelement eine eigene Bewegungsanimation hat. Dies können wir erreichen, indem wir `view-transition-name: match-element` auf jedes Listenelement anwenden:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

Die `match-element-applied` Klasse wird standardmäßig auf das `<main>` Element angewendet, weshalb das Kontrollkästchen im Ergebnisrahmen anfangs ausgewählt ist. Wenn Sie es abwählen, wird die Klasse entfernt und die Standard-Überblendanimation tritt stattdessen in Kraft. Sie können das Kontrollkästchen umschalten, um die Standardanimation mit derjenigen zu vergleichen, die angewendet wird, wenn `view-transition-name: match-element` verwendet wird.

Wir passen die Animation weiter an, indem wir das {{cssxref("::view-transition-group()")}} Pseudo-Element verwenden, um eine {{cssxref("animation-duration")}} auf alle View-Transition-Gruppen (dargestellt durch den `*` Bezeichner) anzuwenden und allen alten und neuen Snapshots eine {{cssxref("height")}} von `100%` zu geben. Dies gleicht Unterschiede in den Seitenverhältnissen der alten und neuen Snapshots aus und lässt die Animationen flüssiger aussehen:

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

In diesem Beispiel wird die `active-item` Klasse auf die Listenelemente angewendet, wenn ihre Links geklickt werden; dies wird durch die `updateActiveItem()` Funktion erreicht:

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

Das Ausführen der `updateActiveItem()` Funktion über die `startViewTransition()` Funktion animiert die Anzeige der Technologiedetails reibungslos.

#### Ergebnis

Klicken Sie auf eine Technologieüberschrift in der Seitenleiste und beachten Sie den Animationseffekt ihres Inhalts in den Hauptinhaltsbereich.

Es gibt auch ein Kontrollkästchen, das standardmäßig ausgewählt ist, sodass `view-transition-name: match-element` angewendet wird. Deaktivieren Sie das Kontrollkästchen und klicken Sie erneut auf eine Überschrift, um zu sehen, wie der View-Transition ohne `view-transition-name: match-element` funktioniert.

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
