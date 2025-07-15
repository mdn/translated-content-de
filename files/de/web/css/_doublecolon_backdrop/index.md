---
title: ::backdrop
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist ein Kasten in der Größe des {{Glossary("viewport", "Ansichtsfensters")}}, der unmittelbar unterhalb jedes Elements gerendert wird, das in der {{Glossary("top_layer", "oberen Schicht")}} präsentiert wird.

{{InteractiveExample("CSS Demo: ::backdrop", "tabbed-shorter")}}

```css interactive-example
button {
  font-size: 1.2rem;
  padding: 5px 15px;
}

dialog::backdrop {
  background-color: salmon;
}
```

```html interactive-example
<button id="showDialogBtn">Show a dialog</button>

<dialog id="favDialog">
  <form method="dialog">
    <p>The background shown outside of this dialog is a backdrop.</p>
    <button id="confirmBtn">Close the dialog</button>
  </form>
</dialog>
```

```js interactive-example
const showDialogBtn = document.getElementById("showDialogBtn");
const favDialog = document.getElementById("favDialog");

showDialogBtn.addEventListener("click", () => favDialog.showModal());
```

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Beschreibung

Backdrops erscheinen in den folgenden Fällen:

- Elemente, die mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{HTMLElement("dialog")}}-Elemente, die durch einen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) in der oberen Schicht angezeigt werden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die durch einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) in der oberen Schicht angezeigt werden.

Wenn mehrere Elemente in die obere Schicht versetzt wurden, hat jedes sein eigenes `::backdrop` Pseudoelement.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in einem Last-in/First-out (LIFO) Stapel in der oberen Schicht platziert. Das `::backdrop` Pseudoelement ermöglicht es, alles, was sich unter einem Element der oberen Schicht befindet, zu verdecken, zu stylen oder vollständig zu verbergen.

`::backdrop` erbt weder von anderen Elementen noch wird es von ihnen geerbt. Es gibt keine Einschränkungen hinsichtlich der Eigenschaften, die auf dieses Pseudoelement angewendet werden können.

## Beispiele

### Styling eines modalen Dialog-Backdrops

In diesem Beispiel verwenden wir das `::backdrop` Pseudoelement, um den Backdrop zu stylen, der verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen einen {{htmlelement("button")}} hinzu, der beim Klicken den enthaltenen `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, fokussieren wir den Button, der den Dialog schließt:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen dem Backdrop einen Hintergrund hinzu und erstellen einen farbenfrohen Donut mit [CSS-Verläufen](/de/docs/Web/CSS/gradient):

```css
::backdrop {
  background-image:
    radial-gradient(
      circle,
      #fff 0 5vw,
      transparent 5vw 20vw,
      #fff 20vw 22.5vw,
      #eee 22.5vw
    ),
    conic-gradient(
      #272b66 0 50grad,
      #2d559f 50grad 100grad,
      #9ac147 100grad 150grad,
      #639b47 150grad 200grad,
      #e1e23b 200grad 250grad,
      #f7941e 250grad 300grad,
      #662a6c 300grad 350grad,
      #9a1d34 350grad 400grad,
      #43a1cd 100grad 150grad,
      #ba3e2e
    );
}
```

#### JavaScript

Der Dialog wird modal mit der [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) Methode geöffnet und mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode geschlossen.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnisse

{{EmbedLiveSample("Styling eines modalen Dialog-Backdrops", 450, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":fullscreen")}} Pseudoklasse
- {{HTMLElement("dialog")}} HTML-Element
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
