---
title: ::backdrop
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist ein Kasten in der Größe des {{Glossary("viewport", "Viewports")}}, das direkt unter jedem Element dargestellt wird, das im {{Glossary("top_layer", "Top Layer")}} präsentiert wird.

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

- Elemente, die im Vollbildmodus mit der Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) platziert wurden.
- {{HTMLElement("dialog")}}-Elemente, die über einen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) im Top Layer angezeigt werden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die über einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) im Top Layer angezeigt werden.

Wenn mehrere Elemente im Top Layer platziert wurden, hat jedes sein eigenes `::backdrop`-Pseudoelement.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden im Top Layer in einem Last-in/First-out (LIFO)-Stapel platziert. Das `::backdrop`-Pseudoelement ermöglicht es, alles unter einem Top Layer-Element zu verdecken, zu gestalten oder vollständig zu verbergen.

`::backdrop` erbt weder von anderen Elementen noch wird es von anderen Elementen vererbt. Es gibt keine Einschränkungen, welche Eigenschaften auf dieses Pseudoelement angewendet werden können.

## Beispiele

### Das Backdrop eines modalen Dialogs gestalten

In diesem Beispiel verwenden wir das `::backdrop`-Pseudoelement, um das Backdrop zu gestalten, das verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen einen {{htmlelement("button")}} hinzu, der, wenn er geklickt wird, das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, fokussieren wir den Button, der den Dialog schließt:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen dem Backdrop einen Hintergrund hinzu und erstellen einen bunten Donut mit [CSS-Gradienten](/de/docs/Web/CSS/gradient):

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

Der Dialog wird modal mit der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet und mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen.

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

{{EmbedLiveSample("Styling a modal dialog's backdrop", 450, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":fullscreen")}} Pseudoklasse
- {{HTMLElement("dialog")}} HTML-Element
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
