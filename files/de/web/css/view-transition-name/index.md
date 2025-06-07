---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: c1079d8b83ce25341085abe533388ba1ffe342cf
---

{{CSSRef}}

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert das [View Transition](/de/docs/Web/API/View_Transition_API) Snapshot, an dem ausgewählte Elemente teilnehmen werden, wodurch ein Element während einer View Transition getrennt vom Rest der Seite animiert werden kann.

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
  - : Ein identifizierender Name, der bewirkt, dass das ausgewählte Element an einem separaten Snapshot vom Root-Snapshot teilnimmt. Das `<custom-ident>` kann nicht `auto`, `match-element`, `none` oder ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) sein.
- `match-element`
  - : Dem ausgewählten Element wird automatisch ein eindeutiger Name zugewiesen. Dieser Name ermöglicht es dem Element, separat von allen anderen Elementen auf der Seite gesnapshottet zu werden und ist im Web-Dokument nicht sichtbar.
- `none`
  - : Das ausgewählte Element wird nicht separat gesnapshottet, es sei denn, es hat ein übergeordnetes Element mit einem gesetzten `view-transition-name`, in welchem Fall es zusammen mit diesem Element gesnapshottet wird.

## Beschreibung

Standardmäßig, wenn eine View Transition auf eine Web-App angewendet wird, werden alle UI-Änderungen, die während dieser Transition auftreten, zusammen gesnapshottet und animiert. Dies ist das Standard- — oder `Root` — Snapshot (siehe [Der View Transition Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree)). Standardmäßig ist diese Animation ein sanftes Überblenden, was in der [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) in Aktion zu sehen ist.

Wenn Sie möchten, dass bestimmte Elemente während der View Transition anders als das `Root`-Snapshot animiert werden, können Sie ihnen einen anderen `view-transition-name` geben, zum Beispiel:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Sie können dann angeben, welche Animationen Sie für die vorherigen und nachfolgenden Snapshots mit den relevanten Pseudo-Elementen der View Transition wünschen — {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}. Zum Beispiel:

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

Das `view-transition-name` `<custom-ident>` muss für jedes gerenderte Element, das an der View Transition teilnimmt, eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird die [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) {{JSxRef("Promise")}} abgelehnt und die Transition wird übersprungen.

### Automatische Spezifikation von `view-transition-name`-Werten

Manchmal möchten Sie mehrere UI-Elemente separat in einer View Transition animieren. Dies ist oft der Fall, wenn Sie eine Liste von Elementen auf einer Seite haben und diese auf irgendeine Weise neu anordnen möchten:

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

Jedem einen eindeutigen Namen zu geben, kann unpraktisch sein, besonders wenn die Anzahl der Elemente größer wird:

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

Um dieses Problem zu umgehen, können Sie den Wert `match-element` verwenden, der dazu führt, dass der Browser jedem ausgewählten Element einen eindeutigen internen `view-transition-name` zuweist:

```css
li {
  view-transition-name: match-element;
}
```

Da `match-element` automatische `view-transition-name`-Werte basierend auf der Elementidentität zuordnet, kann es nur für View Transitions im selben Dokument verwendet werden. Die automatisch generierten internen Identifikatoren sind nicht übertragbar auf verschiedene Elemente oder Dokumente.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `view-transition-name`

Dieses Beispiel stammt aus der [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/), einer einfachen Bildergalerie. Die [Grundlegende SPA-View-Transition](/de/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) bietet eine detailliertere Erklärung, wie diese Demo funktioniert.

Die meisten UI-Änderungen werden mit dem `Root`-Transition-Snapshot animiert. Allerdings wird dem `<figcaption>` ein `view-transition-name` von `figure-caption` gegeben, um es anders als den Rest der Seite zu animieren:

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

Wir erstellen eine benutzerdefinierte CSS-Animation und wenden sie auf die Pseudo-Elemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` an. Wir wenden auch andere Stile an, um sie beide an derselben Stelle zu halten und das standardmäßige Styling davon abzuhalten, unsere benutzerdefinierten Animationen zu stören.

### Verwendung des `match-element`-Wertes

Die [View Transitions match-element Demo](https://mdn.github.io/dom-examples/view-transitions/match-element/) enthält eine Liste von Inhaltselementen in einer Seitenleiste mit einem großen Hauptinhaltsbereich daneben. Die Überschriften innerhalb der Listenelemente können angeklickt werden, wodurch sie in den Hauptinhaltsbereich animiert werden und ihren gesamten Inhalt anzeigen.

#### HTML

Das {{htmlelement("main")}}-Element enthält eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) und ein {{htmlelement("article")}}-Element. Die mehreren untergeordneten {{htmlelement("li")}}-Elemente in der Liste enthalten jeweils ein {{htmlelement("a")}}-Element innerhalb einer [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements).

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Liste und das `<article>` nebeneinander zu layouten und um zu bewirken, dass alle Listenelemente im linken Bereich den gleichen Raum einnehmen. Die Liste hat eine feste Breite, während das `<article>` den restlichen verfügbaren horizontalen Raum einnimmt.

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

Wir definieren auch eine Regel, die Elemente mit der Klasse `active-item` auswählt. Wenn diese Klasse auf ein Element angewendet wird, bewirkt die Regel, dass es genau über dem `<article>`-Element positioniert wird. Diese Klasse wird über JavaScript auf die Listenelemente angewendet, wenn ihre Links angeklickt werden, was eine View Transition initiiert.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 310px;
  width: calc(100% - 310px);
  height: 100%;
}
```

Standardmäßig werden alle gerenderten Elemente, die an der View Transition beteiligt sind, zusammen in einem Cross-Fade animiert. In diesem Fall möchten wir dies jedoch nicht — wir möchten jedem Listenelement eine individuelle Bewegungsanimation geben. Dies können wir erreichen, indem wir `view-transition-name: match-element` auf jedes Listenelement anwenden:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

Die `match-element-applied`-Klasse wird auf das `<main>`-Element angewendet. Beim Betrachten der [Live-Demo](https://mdn.github.io/dom-examples/view-transitions/match-element/) können Sie diese Klasse entfernen, indem Sie das Kontrollkästchen in der unteren rechten Ecke der UI abwählen. So können Sie die einzelne Cross-Fade-Animation, die Sie ohne `view-transition-name: match-element` erhalten, mit den einzelnen Bewegungsanimationen vergleichen, die Sie erhalten, wenn sie angewendet wird.

Wir verwenden auch das {{cssxref("::view-transition-group()")}} Pseudo-Element, um eine {{cssxref("animation-duration")}} auf alle View Transition-Gruppen (angezeigt durch den `*`-Identifikator) anzuwenden und allen alten und neuen Snapshots eine {{cssxref("height")}} von `100%` zu geben, um Unterschiede in ihren Seitenverhältnissen auszugleichen und die Animationen glatter aussehen zu lassen:

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

Das JavaScript der Demo wendet die `active-item`-Klasse auf die Listenelemente an, wenn ihre Links angeklickt werden; dies wird über die `updateActiveItem()` Funktion erreicht:

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

Das Ausführen der `updateActiveItem()` Funktion über die `startViewTransition()` Funktion bewirkt, dass die UI-Änderungen sanft animiert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-class")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
