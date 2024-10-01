---
title: "::backdrop"
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: 7dae0a08ea89d28b9360c666291a3d86a593da37
---

{{CSSRef}}

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist ein Kasten in der Größe des {{Glossary("viewport", "Viewports")}}, der sofort unter jedem Element gerendert wird, das in der {{Glossary("top_layer", "obersten Ebene")}} präsentiert wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-backdrop.html", "tabbed-shorter")}}

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Beschreibung

Backdrops erscheinen in den folgenden Fällen:

- Elemente, die im Vollbildmodus mithilfe der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) positioniert wurden.
- {{HTMLElement("dialog")}}-Elemente, die in der obersten Ebene über einen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wurden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die in der obersten Ebene über einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wurden.

Wenn mehrere Elemente in der obersten Ebene positioniert wurden, hat jedes sein eigenes `::backdrop`-Pseudoelement.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in einem Last-in/First-out (LIFO)-Stapel in der obersten Ebene angeordnet. Das `::backdrop`-Pseudoelement ermöglicht es, alles, was sich unter einem Element der obersten Ebene befindet, zu verdecken, zu stylen oder vollständig zu verbergen.

Das `::backdrop`-Pseudoelement erbt weder von anderen Elementen, noch vererben andere Elemente Eigenschaften an es. Es gibt keine Einschränkungen bezüglich der Eigenschaften, die auf dieses Pseudoelement angewendet werden können.

## Beispiele

### Stylen des Backdrops eines modalen Dialogs

In diesem Beispiel verwenden wir das `::backdrop`-Pseudoelement, um den Backdrop zu gestalten, der verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen einen {{htmlelement("button")}} ein, der bei einem Klick das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, fokussieren wir den Button, der den Dialog schließt:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen einen Hintergrund zum Backdrop hinzu und erstellen einen bunten Donut mithilfe von [CSS-Verläufen](/de/docs/Web/CSS/gradient):

```css
::backdrop {
  background-image: radial-gradient(
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
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [Popover-API](/de/docs/Web/API/Popover_API)
