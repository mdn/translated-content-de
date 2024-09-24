---
title: "::backdrop"
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: 7dae0a08ea89d28b9360c666291a3d86a593da37
---

{{CSSRef}}

Das **`::backdrop`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist ein Kasten in der Größe des {{Glossary("viewport")}}, der unmittelbar unter jedem Element gerendert wird, das in der {{glossary("top layer", "oberen Ebene")}} präsentiert wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-backdrop.html", "tabbed-shorter")}}

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Beschreibung

Backdrops erscheinen in folgenden Fällen:

- Elemente, die mit dem [Fullscreen API](/de/docs/Web/API/Fullscreen_API) in den Vollbildmodus versetzt wurden, über die Methode {{domxref("Element.requestFullscreen()")}}.
- {{HTMLElement("dialog")}}-Elemente, die mit einem Aufruf von {{domxref("HTMLDialogElement.showModal()")}} in der oberen Ebene angezeigt wurden.
- {{domxref("Popover API", "Popover", "", "nocode")}}-Elemente, die mit einem Aufruf von {{domxref("HTMLElement.showPopover()")}} in der oberen Ebene angezeigt wurden.

Wenn mehrere Elemente in die obere Ebene versetzt wurden, hat jedes sein eigenes `::backdrop` Pseudo-Element.

```css
/* Das Backdrop wird nur angezeigt, wenn das Dialogfenster mit dialog.showModal() geöffnet wird */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elemente werden in einem Last-in-First-out (LIFO)-Stack in der oberen Ebene platziert. Das `::backdrop` Pseudo-Element ermöglicht es, alles, was sich unter einem Element der oberen Ebene befindet, zu verdecken, zu stylen oder völlig zu verstecken.

`::backdrop` erbt weder von anderen Elementen, noch wird es von ihnen geerbt. Es gibt keine Einschränkungen, welche Eigenschaften für dieses Pseudo-Element gelten.

## Beispiele

### Styling eines modalen Dialog-Backdrops

In diesem Beispiel verwenden wir das `::backdrop` Pseudo-Element, um das Backdrop zu stylen, das verwendet wird, wenn ein modales {{htmlelement("dialog")}} geöffnet ist.

#### HTML

Wir fügen einen {{htmlelement("button")}} ein, der beim Anklicken das enthaltene `<dialog>` öffnet. Wenn das `<dialog>` geöffnet wird, fokussieren wir den Button, der das Dialog schließt:

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a beautiful backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir fügen dem Backdrop einen Hintergrund hinzu, indem wir einen bunten Donut mit [CSS-Gradienten](/de/docs/Web/CSS/gradient) erstellen:

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

Das Dialog wird modal geöffnet, indem die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird und geschlossen mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close).

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Der "Show the dialog"-Button öffnet das Dialog modal
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Der "Close"-Button schließt das Dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnisse

{{EmbedLiveSample("Styling a modal dialog's backdrop", 450, 300)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{cssxref(":fullscreen")}} Pseudo-Klasse
- {{HTMLElement("dialog")}} HTML-Element
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
