---
title: "HTMLElement: editContext-Eigenschaft"
short-title: editContext
slug: Web/API/HTMLElement/editContext
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`editContext`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces ruft das mit einem Element verknüpfte [`EditContext`](/de/docs/Web/API/EditContext)-Objekt ab und legt es fest.

Die [EditContext API](/de/docs/Web/API/EditContext_API) kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die fortschrittliche Texterfassungserfahrungen unterstützen, wie z.B. die Verwendung von {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Komposition, Emoji-Auswähler oder jegliche andere plattformspezifische Bearbeitungs-UI-Oberflächen.

### Mögliche Elemente

Das Setzen der `editContext`-Eigenschaft funktioniert nur bei bestimmten Arten von Elementen:

- Eines dieser HTML-Elemente: [`<article>`](/de/docs/Web/HTML/Reference/Elements/article), [`<aside>`](/de/docs/Web/HTML/Reference/Elements/aside), [`<blockquote>`](/de/docs/Web/HTML/Reference/Elements/blockquote), [`<body>`](/de/docs/Web/HTML/Reference/Elements/body), [`<div>`](/de/docs/Web/HTML/Reference/Elements/div), [`<footer>`](/de/docs/Web/HTML/Reference/Elements/footer), [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h3>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h4>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h5>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<header>`](/de/docs/Web/HTML/Reference/Elements/header), [`<main>`](/de/docs/Web/HTML/Reference/Elements/main), [`<nav>`](/de/docs/Web/HTML/Reference/Elements/nav), [`<p>`](/de/docs/Web/HTML/Reference/Elements/p), [`<section>`](/de/docs/Web/HTML/Reference/Elements/section), oder [`<span>`](/de/docs/Web/HTML/Reference/Elements/span).
- Ein gültiges [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements).
- Ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element.

Wenn Sie versuchen, die `editContext`-Eigenschaft bei einem Element zu setzen, das nicht eines der oben genannten ist, wird ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

### Elementverknüpfung

Das Setzen der `editContext`-Eigenschaft eines Elements auf eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz verknüpft dieses Element mit der `EditContext`-Instanz.

Die Verknüpfung ist eins zu eins:

- Ein Element kann nur mit einer `EditContext`-Instanz verknüpft werden.
- Eine `EditContext`-Instanz kann nur einem Element zugeordnet werden.

Wenn Sie versuchen, eine bereits verknüpfte `EditContext`-Instanz mit einem anderen Element zu verknüpfen, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Wenn Sie versuchen, eine andere `EditContext`-Instanz mit einem bereits verknüpften Element zu assoziieren, wird ebenfalls eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

Um zu überprüfen, ob ein Element bereits mit einer `EditContext`-Instanz verknüpft ist, verwenden Sie die Methode [`EditContext.attachedElements()`](/de/docs/Web/API/EditContext/attachedElements).

### Speicherbereinigung

Eine `EditContext`-Instanz hält ihr zugeordnetes Element am Leben, wenn sie andere aktive Verweise hat, selbst wenn das verknüpfte Element aus dem DOM entfernt wird.

Wenn Sie sicherstellen möchten, dass das Element der Speicherbereinigung unterzogen wird, löschen Sie die `editContext`-Eigenschaft des Elements.

## Wert

Ein [`EditContext`](/de/docs/Web/API/EditContext)-Objekt oder `null`.

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
