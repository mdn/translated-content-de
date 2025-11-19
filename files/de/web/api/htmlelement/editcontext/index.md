---
title: "HTMLElement: editContext Eigenschaft"
short-title: editContext
slug: Web/API/HTMLElement/editContext
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`editContext`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle erhält und setzt das einem Element zugeordnete [`EditContext`](/de/docs/Web/API/EditContext)-Objekt.

Die [EditContext API](/de/docs/Web/API/EditContext_API) kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die fortgeschrittene Textein- und -ausgabeerfahrungen unterstützen, wie z.B. die Komposition mit dem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME), Emoji-Auswahl oder andere plattformabhängige, bearbeitungsbezogene Benutzeroberflächen.

## Wert

Ein [`EditContext`](/de/docs/Web/API/EditContext)-Objekt oder `null`.

### Mögliche Elemente

Das Setzen der `editContext`-Eigenschaft funktioniert nur bei bestimmten Elementtypen:

- Eines dieser HTML-Elemente: [`<article>`](/de/docs/Web/HTML/Reference/Elements/article), [`<aside>`](/de/docs/Web/HTML/Reference/Elements/aside), [`<blockquote>`](/de/docs/Web/HTML/Reference/Elements/blockquote), [`<body>`](/de/docs/Web/HTML/Reference/Elements/body), [`<div>`](/de/docs/Web/HTML/Reference/Elements/div), [`<footer>`](/de/docs/Web/HTML/Reference/Elements/footer), [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h3>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h4>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h5>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<header>`](/de/docs/Web/HTML/Reference/Elements/header), [`<main>`](/de/docs/Web/HTML/Reference/Elements/main), [`<nav>`](/de/docs/Web/HTML/Reference/Elements/nav), [`<p>`](/de/docs/Web/HTML/Reference/Elements/p), [`<section>`](/de/docs/Web/HTML/Reference/Elements/section), oder [`<span>`](/de/docs/Web/HTML/Reference/Elements/span).
- Ein gültiges [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements).
- Ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element.

Wenn Sie versuchen, die `editContext`-Eigenschaft für ein Element festzulegen, das nicht zu den oben genannten gehört, wird ein `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

### Elementassoziation

Das Setzen der `editContext`-Eigenschaft eines Elements auf eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz ordnet dieses Element der `EditContext`-Instanz zu.

Die Zuordnung ist eins-zu-eins:

- Ein Element kann nur mit einer `EditContext`-Instanz verknüpft werden.
- Eine `EditContext`-Instanz kann nur einem Element zugeordnet werden.

Wenn Sie versuchen, eine bereits zugeordnete `EditContext`-Instanz einem anderen Element zuzuordnen, wird ein [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Wenn Sie versuchen, eine andere `EditContext`-Instanz mit einem Element zu verknüpfen, das bereits zugeordnet ist, wird ebenfalls eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Um zu überprüfen, ob ein Element bereits mit einer `EditContext`-Instanz verknüpft ist, verwenden Sie die Methode [`EditContext.attachedElements()`](/de/docs/Web/API/EditContext/attachedElements).

### Speicherbereinigung

Eine `EditContext`-Instanz hält ihr zugeordnetes Element am Leben, wenn sie andere lebende Referenzen hat, selbst wenn das zugeordnete Element aus dem DOM entfernt wird.

Wenn Sie sicherstellen möchten, dass das Element der Speicherbereinigung unterliegt, löschen Sie die `editContext`-Eigenschaft des Elements.

## Beispiele

### Setzen der `editContext`-Eigenschaft eines Elements

Dieses Beispiel zeigt, wie die `editContext`-Eigenschaft eines `<canvas>`-Elements auf eine neue `EditContext`-Instanz gesetzt wird, um das Element bearbeitbar zu machen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

### Löschen der `editContext`-Eigenschaft eines Elements

Dieses Beispiel zeigt, wie die `editContext`-Eigenschaft eines bearbeitbaren `<canvas>`-Elements gelöscht wird, um das Element sicher aus dem DOM zu entfernen.

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
