---
title: ::backdrop
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Das **`::backdrop`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine Box in der Größe des {{Glossary("viewport", "Viewports")}}, die direkt unterhalb eines Elements gerendert wird, das in der {{Glossary("top_layer", "Top-Ebene")}} dargestellt wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-backdrop.html", "tabbed-shorter")}}

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Beschreibung

Backdrops erscheinen in den folgenden Fällen:

- Elemente, die mit Hilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API)-Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzt wurden.
- {{HTMLElement("dialog")}}-Elemente, die mit einem Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) in der Top-Ebene angezeigt werden.
- [Popover](/de/docs/Web/API/Popover_API)-Elemente, die mit einem Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) in der Top-Ebene angezeigt werden.

Wenn mehrere Elemente in die Top-Ebene platziert wurden, besitzt jedes seine eigene `::backdrop`-Pseudoelement.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in der Top-Ebene als Stapel im Last-In/First-Out (LIFO)-Verfahren angeordnet. Das `::backdrop`-Pseudoelement ermöglicht es, alles unterhalb eines Top-Ebenen-Elements zu verdecken, zu gestalten oder vollständig auszublenden.

Das `::backdrop`-Pseudoelement erbt keine Eigenschaften von anderen Elementen und gibt seine Eigenschaften auch nicht an andere Elemente weiter. Es gibt keine Einschränkungen, welche Eigenschaften auf dieses Pseudoelement angewendet werden können.

## Beispiele

### Gestaltung des Backdrops eines modalen Dialogs

In diesem Beispiel verwenden wir das `::backdrop`-Pseudoelement, um das Backdrop zu gestalten, das verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen einen {{htmlelement("button")}} hinzu, der beim Anklicken das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, setzen wir den Fokus auf den Button, mit dem das Dialogfeld geschlossen wird:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen ein Hintergrundbild für das Backdrop hinzu und erstellen mithilfe der [CSS-Gradienten](/de/docs/Web/CSS/gradient) einen bunten Donut:

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

- {{cssxref(":fullscreen")}}-Pseudoklasse
- {{HTMLElement("dialog")}} HTML-Element
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
