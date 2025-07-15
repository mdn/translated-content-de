---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert den [View-Übergang](/de/docs/Web/API/View_Transition_API) Snapshot, an dem ausgewählte Elemente teilnehmen, wodurch ein Element separat vom Rest der Seite während eines View-Übergangs animiert werden kann.

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
  - : Ein identifizierender Name, der dazu führt, dass das ausgewählte Element an einem separaten Snapshot vom Root-Snapshot teilnimmt. Das `<custom-ident>` darf nicht `auto`, `match-element`, `none` oder ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) sein.
- `match-element`
  - : Dem ausgewählten Element wird automatisch ein eindeutiger identifizierender Name zugewiesen. Dieser Name ermöglicht es, das Element von allen anderen Elementen der Seite getrennt zu snappen, und ist im Web-Dokument nicht sichtbar.
- `none`
  - : Das ausgewählte Element wird nicht an einem separaten Snapshot teilnehmen, es sei denn, es hat ein Elternelement mit einem gesetzten `view-transition-name`. In diesem Fall wird es als Teil dieses Elements gesnapshottet.

## Beschreibung

Standardmäßig werden alle Änderungen an der Benutzeroberfläche, die während eines View-Übergangs auftreten, gesnapshottet und zusammen animiert, wenn ein View-Übergang auf eine Web-App angewendet wird. Dies ist der Standard- oder `Root`-Snapshot (siehe [Der View-Transition-Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree)). Standardmäßig ist diese Animation ein sanftes Überblenden, das in der [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) in Aktion betrachtet werden kann.

Wenn Sie möchten, dass bestimmte Elemente während des View-Übergangs anders als der `Root`-Snapshot animiert werden, können Sie ihnen einen anderen `view-transition-name` geben, zum Beispiel:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Sie können dann angeben, welche Animationen Sie für die vorherigen und nachfolgenden Snapshots mit den relevanten View-Transition-Pseudo-Elementen wünschen — {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}. Zum Beispiel:

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Wenn Sie nicht möchten, dass ein Element separat gesnapshottet wird, können Sie einen `view-transition-name` Wert von `none` angeben:

```css
.dont-animate-me {
  view-transition-name: none;
}
```

Das `view-transition-name` `<custom-ident>` muss für jedes gerenderte Element, das an dem View-Übergang teilnimmt, einzigartig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird die [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{JSxRef("Promise")}} zurückgewiesen und der Übergang wird übersprungen.

### Automatisches Festlegen von `view-transition-name` Werten

Manchmal möchten Sie mehrere UI-Elemente in einem View-Übergang separat animieren. Dies ist oft der Fall, wenn Sie eine Liste von Elementen auf einer Seite haben und diese in irgendeiner Weise umordnen möchten:

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

Jedem einen eindeutigen Namen zu geben, kann unpraktisch sein, besonders wenn die Anzahl der Elemente wächst:

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

Um dieses Problem zu umgehen, können Sie den Wert `match-element` verwenden, der den Browser dazu bringt, jedem ausgewählten Element einen einzigartigen internen `view-transition-name` zu geben:

```css
li {
  view-transition-name: match-element;
}
```

Da `match-element` automatische `view-transition-name` Werte basierend auf der Identität des Elements zuweist, kann es nur für View-Übergänge innerhalb desselben Dokuments verwendet werden. Die automatisch generierten internen Bezeichner sind nicht übertragbar über verschiedene Elemente oder Dokumente hinweg.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `view-transition-name`

Dieses Beispiel stammt aus der [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/), einer grundlegenden Bildergalerie. Der [Grundlegende SPA-View-Übergang](/de/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) bietet eine detailliertere Erklärung, wie diese Demo funktioniert.

Die meisten Änderungen der Benutzeroberfläche werden mit dem `Root` Übergangssnapshot animiert. Das `<figcaption>` erhält jedoch einen `view-transition-name` von `figure-caption`, um es anders als den Rest der Seite zu animieren:

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

Wir erstellen eine benutzerdefinierte CSS-Animation und wenden sie auf die Pseudo-Elemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` an. Außerdem wenden wir andere Stile an, um sie beide an derselben Stelle zu halten und zu verhindern, dass die Standardformatierung unsere benutzerdefinierten Animationen stört.

### Verwendung des Werts `match-element`

Die [View Transitions match-element Demo](https://mdn.github.io/dom-examples/view-transitions/match-element/) enthält eine Liste von Inhaltsobjekten in einer Seitenleiste mit einem großen Hauptinhaltsbereich daneben. Die Überschriften in den Listenelementen können angeklickt werden, was dazu führt, dass sie in den Hauptinhaltsbereich animiert werden und ihren gesamten Inhalt anzeigen.

#### HTML

Das {{htmlelement("main")}} Element enthält eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) und ein {{htmlelement("article")}} Element. Die mehreren Kindelemente {{htmlelement("li")}} in der Liste enthalten jeweils ein {{htmlelement("a")}} Element in einer [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).

```html
<main class="match-element-applied">
  <ul>
    <li>
      <h2><a href="#">One</a></h2>

      ...
    </li>
    <li>...</li>

    ...
  </ul>
  <article></article>
</main>
```

#### CSS

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Liste und das `<article>` nebeneinander zu platzieren und dafür zu sorgen, dass die Listenelemente alle eine gleiche Menge an Platz in der linken Spalte einnehmen. Die Liste hat eine feste Breite, während das `<article>` den verbleibenden verfügbaren horizontalen Raum einnimmt.

```css
main {
  height: calc(100% - 80px);
  display: flex;
  gap: 10px;
  position: relative;
}

ul {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

article {
  flex: 1;
}

li {
  flex: 1;
}
```

Wir definieren auch eine Regel, die Elemente mit der Klasse `active-item` auswählt. Wenn diese Klasse auf ein Element angewendet wird, bewirkt die Regel, dass es genau über dem `<article>` Element positioniert wird. Diese Klasse wird den Listenelementen über JavaScript hinzugefügt, wenn ihre Links angeklickt werden, was einen View-Übergang einleitet.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 310px;
  width: calc(100% - 310px);
  height: 100%;
}
```

Standardmäßig werden alle gerenderten Elemente, die an dem View-Übergang beteiligt sind, in einer einzigen Überblendung animiert. In diesem Fall wollen wir dies jedoch nicht — wir möchten jedem Listenelement eine individuelle Bewegungsanimation geben. Dies erreichen wir, indem wir `view-transition-name: match-element` auf jedes Listenelement anwenden:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

Die Klasse `match-element-applied` wird auf das `<main>` Element angewendet. Wenn Sie sich die [Live-Demo](https://mdn.github.io/dom-examples/view-transitions/match-element/) ansehen, können Sie diese Klasse entfernen, indem Sie das Kontrollkästchen in der unteren rechten Ecke der Benutzeroberfläche abwählen. Dies ermöglicht es Ihnen, die einzelne Überblendungsanimation zu vergleichen, die Sie ohne `view-transition-name: match-element` erhalten, mit den individuellen Bewegungsanimationen, die Sie erhalten, wenn es angewendet wird.

Wir verwenden auch das {{cssxref("::view-transition-group()")}} Pseudo-Element, um eine {{cssxref("animation-duration")}} auf alle View-Transition-Gruppen (angegeben durch das `*` Kennzeichen) anzuwenden und allen alten und neuen Snapshots eine {{cssxref("height")}} von `100%` zu geben, um Unterschiede in ihren Seitenverhältnissen auszugleichen und die Animationen flüssiger aussehen zu lassen:

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

Das JavaScript der Demo wendet die Klasse `active-item` auf die Listenelemente an, wenn ihre Links angeklickt werden; dies wird über die Funktion `updateActiveItem()` erreicht:

```js
function updateActiveItem(event) {
  // A reference to the list item containing the link that was clicked
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
  // Don't do anything unless a link is clicked inside the <main> element
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
```

Das Ausführen der Funktion `updateActiveItem()` über die Funktion `startViewTransition()` führt dazu, dass die Änderungen der Benutzeroberfläche flüssig animiert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-class")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
