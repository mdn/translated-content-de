---
title: "`::backdrop` CSS pseudo-element"
short-title: ::backdrop
slug: Web/CSS/Reference/Selectors/::backdrop
l10n:
  sourceCommit: 8fa3309a76fe8dc4cf5e8eed97ef596a91513fbd
---

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine Box in der Größe des {{Glossary("viewport", "Viewports")}}, die direkt unter jedem Element gerendert wird, das in der {{Glossary("top_layer", "obersten Ebene")}} präsentiert wird.

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

Hintergründe erscheinen in den folgenden Fällen:

- Elemente, die mit der Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) in den Vollbildmodus versetzt wurden.
- {{HTMLElement("dialog")}}-Elemente, die über einen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) in der obersten Ebene angezeigt wurden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die über einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) in der obersten Ebene angezeigt wurden.

Wenn mehrere Elemente in die oberste Ebene gesetzt wurden, hat jedes ein eigenes `::backdrop`-Pseudoelement.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in einer Last-in/first-out (LIFO) Stapel in die oberste Ebene gesetzt. Das `::backdrop`-Pseudoelement ermöglicht es, alles zu verdecken, zu stylen oder vollständig zu verbergen, was sich unter einem Element der obersten Ebene befindet.

`::backdrop` erbt weder von noch an andere Elemente. Es gibt keine Einschränkungen, welche Eigenschaften auf dieses Pseudoelement angewendet werden können.

## Beispiele

### Stylen des Hintergrunds eines modalen Dialogs

In diesem Beispiel verwenden wir das `::backdrop`-Pseudoelement, um den Hintergrund zu stylen, der verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen einen {{htmlelement("button")}} ein, der, wenn er angeklickt wird, das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, geben wir dem Button, der den Dialog schließt, den Fokus:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen dem Hintergrund eine Hintergrundfarbe hinzu und erstellen einen bunten Donut mit [CSS-Gradienten](/de/docs/Web/CSS/Reference/Values/gradient):

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

- {{cssxref(":fullscreen")}}
- {{cssxref(":xr-overlay")}}
- [CSS-Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- {{HTMLElement("dialog")}}
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Popover API](/de/docs/Web/API/Popover_API)
