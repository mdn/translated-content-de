---
title: "::backdrop"
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: 7dae0a08ea89d28b9360c666291a3d86a593da37
---

{{CSSRef}}

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist ein Kasten in der Größe des [Viewports](/de/docs/Glossary/viewport), der unmittelbar unter jedem Element gerendert wird, das in der [Top-Schicht](/de/docs/Glossary/top_layer) präsentiert wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-backdrop.html", "tabbed-shorter")}}

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Beschreibung

Backdrops erscheinen in den folgenden Fällen:

- Elemente, die mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) über die Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus platziert wurden.
- {{HTMLElement("dialog")}}-Elemente, die über einen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) in der Top-Schicht angezeigt werden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die über einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) in der Top-Schicht angezeigt werden.

Wenn mehrere Elemente in die Top-Schicht platziert sind, hat jedes sein eigenes `::backdrop` Pseudoelement.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in einer Last-in/First-out (LIFO)-Reihenfolge in der Top-Schicht gestapelt. Das `::backdrop` Pseudoelement ermöglicht es, alles, was sich unter einem Top-Schicht-Element befindet, zu verdecken, zu stylen oder vollständig zu verstecken.

`::backdrop` wird weder von anderen Elementen geerbt, noch erbt es von anderen. Es gibt keine Einschränkungen, welche Eigenschaften auf dieses Pseudoelement angewendet werden können.

## Beispiele

### Styling des Backdrops eines modalen Dialogs

In diesem Beispiel verwenden wir das `::backdrop` Pseudoelement, um das Backdrop zu gestalten, das verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen ein {{htmlelement("button")}} hinzu, das beim Klicken das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, geben wir dem Schließ-Button den Fokus:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen dem Backdrop einen Hintergrund hinzu, indem wir mit [CSS-Verläufen](/de/docs/Web/CSS/gradient) einen bunten Donut kreieren:

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

Das Dialog wird modal mit der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet und mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen.

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
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
