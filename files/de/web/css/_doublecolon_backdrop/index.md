---
title: ::backdrop
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine Box in der Größe des {{Glossary("viewport", "Viewports")}}, die unmittelbar unter jedem Element gerendert wird, das sich in der {{Glossary("top_layer", "Top-Schicht")}} befindet.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-backdrop.html", "tabbed-shorter")}}

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Beschreibung

Backdrops erscheinen in folgenden Fällen:

- Elemente, die in den Vollbildmodus mittels der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) versetzt wurden.
- {{HTMLElement("dialog")}}-Elemente, die über einen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) in der Top-Schicht angezeigt wurden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die über einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) in der Top-Schicht angezeigt wurden.

Wenn mehrere Elemente in die Top-Schicht verschoben wurden, hat jedes sein eigenes `::backdrop` Pseudo-Element.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in der Top-Schicht in einem Last-In/First-Out (LIFO)-Stapel platziert. Das `::backdrop` Pseudo-Element ermöglicht es, alles, was sich unter einem Top-Schicht-Element befindet, zu verdecken, zu gestalten oder vollständig auszublenden.

`::backdrop` erbt weder von anderen Elementen noch wird es von anderen Elementen vererbt. Es gibt keine Einschränkungen, welche Eigenschaften auf dieses Pseudo-Element angewendet werden können.

## Beispiele

### Stilierung des Backdrops eines modalen Dialogs

In diesem Beispiel verwenden wir das `::backdrop` Pseudo-Element, um den Hintergrund zu gestalten, der genutzt wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen ein {{htmlelement("button")}} hinzu, das beim Anklicken das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, geben wir dem Knopf, der das Dialogfenster schließt, den Fokus:

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

Das Dialogfenster wird modal mit der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet und mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen.

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
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML globale Attribute
- [Popover API](/de/docs/Web/API/Popover_API)
