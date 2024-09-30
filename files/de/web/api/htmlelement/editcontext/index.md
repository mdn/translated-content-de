---
title: "HTMLElement: editContext-Eigenschaft"
short-title: editContext
slug: Web/API/HTMLElement/editContext
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`editContext`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces ruft das zugeordnete [`EditContext`](/de/docs/Web/API/EditContext)-Objekt eines Elements ab und setzt es.

Die [EditContext API](/de/docs/Web/API/EditContext_API) kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die fortgeschrittene Textein- und -ausgaberfahrungen unterstützen, wie z.B. die [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME) Komposition, Emoji-Auswahl oder andere plattform-spezifische, bearbeitungsbezogene Benutzeroberflächen.

### Mögliche Elemente

Das Setzen der `editContext`-Eigenschaft funktioniert nur bei bestimmten Elementtypen:

- Eines dieser HTML-Elemente: [`<article>`](/de/docs/Web/HTML/Element/article), [`<aside>`](/de/docs/Web/HTML/Element/aside), [`<blockquote>`](/de/docs/Web/HTML/Element/blockquote), [`<body>`](/de/docs/Web/HTML/Element/body), [`<div>`](/de/docs/Web/HTML/Element/div), [`<footer>`](/de/docs/Web/HTML/Element/footer), [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/de/docs/Web/HTML/Element/Heading_Elements), [`<header>`](/de/docs/Web/HTML/Element/header), [`<main>`](/de/docs/Web/HTML/Element/main), [`<nav>`](/de/docs/Web/HTML/Element/nav), [`<p>`](/de/docs/Web/HTML/Element/p), [`<section>`](/de/docs/Web/HTML/Element/section), oder [`<span>`](/de/docs/Web/HTML/Element/span).
- Ein gültiges [Custom Element](/de/docs/Web/API/Web_components/Using_custom_elements).
- Ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element.

Wenn Sie versuchen, die `editContext`-Eigenschaft auf einem Element zu setzen, das nicht zu den oben genannten gehört, wird ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

### Element-Zuordnung

Wenn die `editContext`-Eigenschaft eines Elements auf eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz gesetzt wird, wird dieses Element mit der `EditContext`-Instanz verknüpft.

Die Zuordnung ist eins-zu-eins:

- Ein Element kann nur mit einer `EditContext`-Instanz verknüpft werden.
- Eine `EditContext`-Instanz kann nur einem Element zugeordnet werden.

Wenn Sie versuchen, eine bereits zugeordnete `EditContext`-Instanz einem anderen Element zuzuordnen, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Wenn Sie versuchen, eine andere `EditContext`-Instanz zu einem bereits zugeordneten Element zuzuordnen, wird ebenfalls eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Um zu überprüfen, ob ein Element bereits mit einer `EditContext`-Instanz verknüpft ist, verwenden Sie die Methode [`EditContext.attachedElements()`](/de/docs/Web/API/EditContext/attachedElements).

### Speicherbereinigung

Eine `EditContext`-Instanz hält ihr zugeordnetes Element am Leben, wenn es andere aktive Referenzen gibt, selbst wenn das zugeordnete Element aus dem DOM entfernt wird.

Wenn Sie sicherstellen möchten, dass das Element einer Speicherbereinigung unterzogen wird, löschen Sie die `editContext`-Eigenschaft des Elements.

## Wert

Ein [`EditContext`](/de/docs/Web/API/EditContext)-Objekt oder `null`.

## Beispiele

### Die `editContext`-Eigenschaft eines Elements setzen

Dieses Beispiel zeigt, wie Sie die `editContext`-Eigenschaft eines `<canvas>`-Elements auf eine neue `EditContext`-Instanz setzen, um das Element bearbeitbar zu machen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

### Die `editContext`-Eigenschaft eines Elements löschen

Dieses Beispiel zeigt, wie Sie die `editContext`-Eigenschaft eines bearbeitbaren `<canvas>`-Elements löschen, um das Element sicher aus dem DOM zu entfernen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
// Create the EditContext and associate it with the canvas element.
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

// Later, clear the editContext property, and remove the element.
canvas.editContext = null;
canvas.remove();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle.
