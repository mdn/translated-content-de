---
title: "`::backdrop` CSS pseudo-element"
short-title: ::backdrop
slug: Web/CSS/Reference/Selectors/::backdrop
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine Box in der Größe des {{Glossary("viewport", "Ansichtsfensters")}}, die unmittelbar unterhalb jedes Elements dargestellt wird, das in der {{Glossary("top_layer", "Top-Ebene")}} präsentiert wird.

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

Rückseiten erscheinen in den folgenden Fällen:

- Elemente, die mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{HTMLElement("dialog")}}-Elemente, die über einen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) in der oberen Ebene im Top-Layer angezeigt werden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die über einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) im Top-Layer angezeigt werden.

Wenn mehrere Elemente in die obere Ebene gesetzt werden, hat jedes ein eigenes `::backdrop`-Pseudo-Element.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in einem Last-in/First-out (LIFO)-Stack in der oberen Ebene platziert. Das `::backdrop`-Pseudo-Element ermöglicht es, alles, was sich unter einem oberen Ebenenelement befindet, zu verbergen, zu stylen oder vollständig zu verstecken.

`::backdrop` wird weder von noch auf andere Elemente vererbt. Es gibt keine Einschränkungen bezüglich der Eigenschaften, die auf dieses Pseudo-Element angewendet werden können.

## Beispiele

### Das Hintergrundbild eines modalen Dialogs stylen

In diesem Beispiel verwenden wir das `::backdrop`-Pseudo-Element, um das Hintergrundbild zu stylen, das verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen einen {{htmlelement("button")}} ein, der bei Klick das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, geben wir dem Button, der das Dialogfeld schließt, den Fokus:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen dem Hintergrund einen Hintergrund hinzu und erstellen einen farbenfrohen Donut mit [CSS-Verläufen](/de/docs/Web/CSS/Reference/Values/gradient):

```css
::backdrop {
  background-image:
    radial-gradient(
      circle,
      white 0 5vw,
      transparent 5vw 20vw,
      white 20vw 22.5vw,
      #eeeeee 22.5vw
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

Das Dialogfeld wird modal mit der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet und mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen.

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

- {{cssxref(":fullscreen")}} Pseudo-Klasse
- {{HTMLElement("dialog")}} HTML-Element
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
